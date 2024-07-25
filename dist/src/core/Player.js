import { __awaiter } from "tslib";
import { Log, LZW, Constants } from '../utils/index.js';
import { Platform, getRandomUserAgent, getStringBetweenStrings, PlayerError } from '../utils/Utils.js';
const TAG = 'Player';
/**
 * Represents YouTube's player script. This is required to decipher signatures.
 */
export default class Player {
    constructor(signature_timestamp, sig_sc, nsig_sc, player_id) {
        this.nsig_sc = nsig_sc;
        this.sig_sc = sig_sc;
        this.sts = signature_timestamp;
        this.player_id = player_id;
    }
    static create(cache, fetch = Platform.shim.fetch) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = new URL('/iframe_api', Constants.URLS.YT_BASE);
            const res = yield fetch(url);
            if (res.status !== 200)
                throw new PlayerError('Failed to request player id');
            const js = yield res.text();
            const player_id = getStringBetweenStrings(js, 'player\\/', '\\/');
            Log.info(TAG, `Got player id (${player_id}). Checking for cached players..`);
            if (!player_id)
                throw new PlayerError('Failed to get player id');
            // We have the player id, now we can check if we have a cached player.
            if (cache) {
                const cached_player = yield Player.fromCache(cache, player_id);
                if (cached_player) {
                    Log.info(TAG, 'Found up-to-date player data in cache.');
                    return cached_player;
                }
            }
            const player_url = new URL(`/s/player/${player_id}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE);
            Log.info(TAG, `Could not find any cached player. Will download a new player from ${player_url}.`);
            const player_res = yield fetch(player_url, {
                headers: {
                    'user-agent': getRandomUserAgent('desktop')
                }
            });
            if (!player_res.ok) {
                throw new PlayerError(`Failed to get player data: ${player_res.status}`);
            }
            const player_js = yield player_res.text();
            const sig_timestamp = this.extractSigTimestamp(player_js);
            const sig_sc = this.extractSigSourceCode(player_js);
            const nsig_sc = this.extractNSigSourceCode(player_js);
            Log.info(TAG, `Got signature timestamp (${sig_timestamp}) and algorithms needed to decipher signatures.`);
            return yield Player.fromSource(cache, sig_timestamp, sig_sc, nsig_sc, player_id);
        });
    }
    decipher(url, signature_cipher, cipher, this_response_nsig_cache) {
        url = url || signature_cipher || cipher;
        if (!url)
            throw new PlayerError('No valid URL to decipher');
        const args = new URLSearchParams(url);
        const url_components = new URL(args.get('url') || url);
        if (signature_cipher || cipher) {
            const signature = Platform.shim.eval(this.sig_sc, {
                sig: args.get('s')
            });
            Log.info(TAG, `Transformed signature from ${args.get('s')} to ${signature}.`);
            if (typeof signature !== 'string')
                throw new PlayerError('Failed to decipher signature');
            const sp = args.get('sp');
            sp ?
                url_components.searchParams.set(sp, signature) :
                url_components.searchParams.set('signature', signature);
        }
        const n = url_components.searchParams.get('n');
        if (n) {
            let nsig;
            if (this_response_nsig_cache && this_response_nsig_cache.has(n)) {
                nsig = this_response_nsig_cache.get(n);
            }
            else {
                nsig = Platform.shim.eval(this.nsig_sc, {
                    nsig: n
                });
                Log.info(TAG, `Transformed n signature from ${n} to ${nsig}.`);
                if (typeof nsig !== 'string')
                    throw new PlayerError('Failed to decipher nsig');
                if (nsig.startsWith('enhanced_except_')) {
                    Log.warn(TAG, 'Could not transform nsig, download may be throttled.');
                }
                else if (this_response_nsig_cache) {
                    this_response_nsig_cache.set(n, nsig);
                }
            }
            url_components.searchParams.set('n', nsig);
        }
        const client = url_components.searchParams.get('c');
        switch (client) {
            case 'WEB':
                url_components.searchParams.set('cver', Constants.CLIENTS.WEB.VERSION);
                break;
            case 'WEB_REMIX':
                url_components.searchParams.set('cver', Constants.CLIENTS.YTMUSIC.VERSION);
                break;
            case 'WEB_KIDS':
                url_components.searchParams.set('cver', Constants.CLIENTS.WEB_KIDS.VERSION);
                break;
            case 'ANDROID':
                url_components.searchParams.set('cver', Constants.CLIENTS.ANDROID.VERSION);
                break;
            case 'ANDROID_MUSIC':
                url_components.searchParams.set('cver', Constants.CLIENTS.YTMUSIC_ANDROID.VERSION);
                break;
            case 'TVHTML5_SIMPLY_EMBEDDED_PLAYER':
                url_components.searchParams.set('cver', Constants.CLIENTS.TV_EMBEDDED.VERSION);
                break;
        }
        const result = url_components.toString();
        Log.info(TAG, `Deciphered URL: ${result}`);
        return url_components.toString();
    }
    static fromCache(cache, player_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield cache.get(player_id);
            if (!buffer)
                return null;
            const view = new DataView(buffer);
            const version = view.getUint32(0, true);
            if (version !== Player.LIBRARY_VERSION)
                return null;
            const sig_timestamp = view.getUint32(4, true);
            const sig_len = view.getUint32(8, true);
            const sig_buf = buffer.slice(12, 12 + sig_len);
            const nsig_buf = buffer.slice(12 + sig_len);
            const sig_sc = LZW.decompress(new TextDecoder().decode(sig_buf));
            const nsig_sc = LZW.decompress(new TextDecoder().decode(nsig_buf));
            return new Player(sig_timestamp, sig_sc, nsig_sc, player_id);
        });
    }
    static fromSource(cache, sig_timestamp, sig_sc, nsig_sc, player_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = new Player(sig_timestamp, sig_sc, nsig_sc, player_id);
            yield player.cache(cache);
            return player;
        });
    }
    cache(cache) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!cache)
                return;
            const encoder = new TextEncoder();
            const sig_buf = encoder.encode(LZW.compress(this.sig_sc));
            const nsig_buf = encoder.encode(LZW.compress(this.nsig_sc));
            const buffer = new ArrayBuffer(12 + sig_buf.byteLength + nsig_buf.byteLength);
            const view = new DataView(buffer);
            view.setUint32(0, Player.LIBRARY_VERSION, true);
            view.setUint32(4, this.sts, true);
            view.setUint32(8, sig_buf.byteLength, true);
            new Uint8Array(buffer).set(sig_buf, 12);
            new Uint8Array(buffer).set(nsig_buf, 12 + sig_buf.byteLength);
            yield cache.set(this.player_id, new Uint8Array(buffer));
        });
    }
    static extractSigTimestamp(data) {
        return parseInt(getStringBetweenStrings(data, 'signatureTimestamp:', ',') || '0');
    }
    static extractSigSourceCode(data) {
        var _a, _b, _c;
        const calls = getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
        const obj_name = (_c = (_b = (_a = calls === null || calls === void 0 ? void 0 : calls.split(/\.|\[/)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.replace(';', '')) === null || _c === void 0 ? void 0 : _c.trim();
        const functions = getStringBetweenStrings(data, `var ${obj_name}={`, '};');
        if (!functions || !calls)
            Log.warn(TAG, 'Failed to extract signature decipher algorithm.');
        return `function descramble_sig(a) { a = a.split(""); let ${obj_name}={${functions}}${calls} return a.join("") } descramble_sig(sig);`;
    }
    static extractNSigSourceCode(data) {
        let sc = getStringBetweenStrings(data, 'b=String.prototype.split.call(a,"")', '}return b.join("")}');
        if (sc)
            return `function descramble_nsig(a) { let b=String.prototype.split.call(a,"")${sc}} return b.join(""); } descramble_nsig(nsig)`;
        sc = getStringBetweenStrings(data, 'b=String.prototype.split.call(a,"")', '}return Array.prototype.join.call(b,"")}');
        if (sc)
            return `function descramble_nsig(a) { let b=String.prototype.split.call(a, "")${sc}} return Array.prototype.join.call(b, ""); } descramble_nsig(nsig)`;
        // We really should throw an error here to avoid errors later, returning a pass-through function for backwards-compatibility
        Log.warn(TAG, 'Failed to extract n-token decipher algorithm');
        return 'function descramble_nsig(a) { return a; } descramble_nsig(nsig)';
    }
    get url() {
        return new URL(`/s/player/${this.player_id}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE).toString();
    }
    static get LIBRARY_VERSION() {
        return 10;
    }
}
//# sourceMappingURL=Player.js.map