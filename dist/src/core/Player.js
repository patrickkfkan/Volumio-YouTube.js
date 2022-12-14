"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Player_nsig_sc, _Player_sig_sc, _Player_sig_sc_timestamp, _Player_player_id;
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../utils/Utils");
const Constants_1 = __importDefault(require("../utils/Constants"));
// See https://github.com/LuanRT/Jinter
const jintr_1 = __importDefault(require("jintr"));
// eslint-disable-next-line
const nfFetch = require('node-fetch').default;
class Player {
    constructor(signature_timestamp, sig_sc, nsig_sc, player_id) {
        _Player_nsig_sc.set(this, void 0);
        _Player_sig_sc.set(this, void 0);
        _Player_sig_sc_timestamp.set(this, void 0);
        _Player_player_id.set(this, void 0);
        __classPrivateFieldSet(this, _Player_nsig_sc, nsig_sc, "f");
        __classPrivateFieldSet(this, _Player_sig_sc, sig_sc, "f");
        __classPrivateFieldSet(this, _Player_sig_sc_timestamp, signature_timestamp, "f");
        __classPrivateFieldSet(this, _Player_player_id, player_id, "f");
    }
    static create(cache, fetch = nfFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = new URL('/iframe_api', Constants_1.default.URLS.YT_BASE);
            const res = yield fetch(url);
            if (res.status !== 200)
                throw new Utils_1.PlayerError('Failed to request player id');
            const js = yield res.text();
            const player_id = (0, Utils_1.getStringBetweenStrings)(js, 'player\\/', '\\/');
            if (!player_id)
                throw new Utils_1.PlayerError('Failed to get player id');
            // We have the playerID now we can check if we have a cached player
            if (cache) {
                const cached_player = yield Player.fromCache(cache, player_id);
                if (cached_player)
                    return cached_player;
            }
            const player_url = new URL(`/s/player/${player_id}/player_ias.vflset/en_US/base.js`, Constants_1.default.URLS.YT_BASE);
            const player_res = yield fetch(player_url, {
                headers: {
                    'user-agent': (0, Utils_1.getRandomUserAgent)('desktop')
                }
            });
            if (!player_res.ok) {
                throw new Utils_1.PlayerError(`Failed to get player data: ${player_res.status}`);
            }
            const player_js = yield player_res.text();
            const sig_timestamp = this.extractSigTimestamp(player_js);
            const sig_sc = this.extractSigSourceCode(player_js);
            const nsig_sc = this.extractNSigSourceCode(player_js);
            return yield Player.fromSource(cache, sig_timestamp, sig_sc, nsig_sc, player_id);
        });
    }
    decipher(url, signature_cipher, cipher) {
        url = url || signature_cipher || cipher;
        if (!url)
            throw new Utils_1.PlayerError('No valid URL to decipher');
        const args = new URLSearchParams(url);
        const url_components = new URL(args.get('url') || url);
        url_components.searchParams.set('ratebypass', 'yes');
        if (signature_cipher || cipher) {
            const sig_decipher = new jintr_1.default(__classPrivateFieldGet(this, _Player_sig_sc, "f"));
            sig_decipher.scope.set('sig', args.get('s'));
            const signature = sig_decipher.interpret();
            const sp = args.get('sp');
            sp ?
                url_components.searchParams.set(sp, signature) :
                url_components.searchParams.set('signature', signature);
        }
        const n = url_components.searchParams.get('n');
        if (n) {
            const nsig_decipher = new jintr_1.default(__classPrivateFieldGet(this, _Player_nsig_sc, "f"));
            nsig_decipher.scope.set('nsig', n);
            const nsig = nsig_decipher.interpret();
            if (nsig.startsWith('enhanced_except_')) {
                console.warn('Warning:\nCould not transform nsig, download may be throttled.\nChanging the InnerTube client to "ANDROID" might help!');
            }
            url_components.searchParams.set('n', nsig);
        }
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
            const decoder = new TextDecoder();
            const sig_sc = decoder.decode(sig_buf);
            const nsig_sc = decoder.decode(nsig_buf);
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
            const sig_buf = encoder.encode(__classPrivateFieldGet(this, _Player_sig_sc, "f"));
            const nsig_buf = encoder.encode(__classPrivateFieldGet(this, _Player_nsig_sc, "f"));
            const buffer = new ArrayBuffer(12 + sig_buf.byteLength + nsig_buf.byteLength);
            const view = new DataView(buffer);
            view.setUint32(0, Player.LIBRARY_VERSION, true);
            view.setUint32(4, __classPrivateFieldGet(this, _Player_sig_sc_timestamp, "f"), true);
            view.setUint32(8, sig_buf.byteLength, true);
            new Uint8Array(buffer).set(sig_buf, 12);
            new Uint8Array(buffer).set(nsig_buf, 12 + sig_buf.byteLength);
            yield cache.set(__classPrivateFieldGet(this, _Player_player_id, "f"), new Uint8Array(buffer));
        });
    }
    static extractSigTimestamp(data) {
        return parseInt((0, Utils_1.getStringBetweenStrings)(data, 'signatureTimestamp:', ',') || '0');
    }
    static extractSigSourceCode(data) {
        var _a, _b;
        const calls = (0, Utils_1.getStringBetweenStrings)(data, 'function(a){a=a.split("")', 'return a.join("")}');
        const obj_name = (_b = (_a = calls === null || calls === void 0 ? void 0 : calls.split('.')) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.replace(';', '');
        const functions = (0, Utils_1.getStringBetweenStrings)(data, `var ${obj_name}=`, '};');
        if (!functions || !calls)
            console.warn(new Utils_1.PlayerError('Failed to extract signature decipher algorithm'));
        return `function descramble_sig(a) { a = a.split(""); let ${obj_name}=${functions}}${calls} return a.join("") } descramble_sig(sig);`;
    }
    static extractNSigSourceCode(data) {
        const sc = `function descramble_nsig(a) { let b=a.split("")${(0, Utils_1.getStringBetweenStrings)(data, 'b=a.split("")', '}return b.join("")}')}} return b.join(""); } descramble_nsig(nsig)`;
        if (!sc)
            console.warn(new Utils_1.PlayerError('Failed to extract n-token decipher algorithm'));
        return sc;
    }
    get url() {
        return new URL(`/s/player/${__classPrivateFieldGet(this, _Player_player_id, "f")}/player_ias.vflset/en_US/base.js`, Constants_1.default.URLS.YT_BASE).toString();
    }
    get sts() {
        return __classPrivateFieldGet(this, _Player_sig_sc_timestamp, "f");
    }
    get nsig_sc() {
        return __classPrivateFieldGet(this, _Player_nsig_sc, "f");
    }
    get sig_sc() {
        return __classPrivateFieldGet(this, _Player_sig_sc, "f");
    }
    static get LIBRARY_VERSION() {
        return 2;
    }
}
exports.default = Player;
_Player_nsig_sc = new WeakMap(), _Player_sig_sc = new WeakMap(), _Player_sig_sc_timestamp = new WeakMap(), _Player_player_id = new WeakMap();
//# sourceMappingURL=Player.js.map