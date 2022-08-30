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
var _Player_signature_timestamp, _Player_player_id;
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../utils/Utils");
const Constants_1 = __importDefault(require("../utils/Constants"));
// eslint-disable-next-line
const nfFetch = require('node-fetch').default;
// Import NToken from '../deciphers/NToken';
// Import Signature from '../deciphers/Signature';
class Player {
    constructor(signature_timestamp, player_id) {
        // This.#ntoken = ntoken;
        // This.#signature = signature;
        // #ntoken;
        // #signature;
        _Player_signature_timestamp.set(this, void 0);
        _Player_player_id.set(this, void 0);
        __classPrivateFieldSet(this, _Player_signature_timestamp, signature_timestamp, "f");
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
            // Const sig_decipher_sc = this.extractSigDecipherSc(player_js);
            // Const ntoken_sc = this.extractNTokenSc(player_js);
            return yield Player.fromSource(cache, sig_timestamp, player_id);
        });
    }
    /*
    Decipher(url?: string, signature_cipher?: string, cipher?: string) {
      url = url || signature_cipher || cipher;
  
      if (!url)
        throw new PlayerError('No valid URL to decipher');
  
      const args = new URLSearchParams(url);
      const url_components = new URL(args.get('url') || url);
  
      url_components.searchParams.set('ratebypass', 'yes');
  
      if (signature_cipher || cipher) {
        const signature = this.#signature.decipher(url);
        const sp = args.get('sp');
  
        sp ?
          url_components.searchParams.set(sp, signature) :
          url_components.searchParams.set('signature', signature);
      }
  
      const n = url_components.searchParams.get('n');
  
      if (n) {
        const ntoken = this.#ntoken.transform(n);
        url_components.searchParams.set('n', ntoken);
      }
  
      return url_components.toString();
    }*/
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
            /*
             * Const sig_decipher_len = view.getUint32(8, true);
             * const sig_decipher_buf = buffer.slice(12, 12 + sig_decipher_len);
             * const ntoken_transform_buf = buffer.slice(12 + sig_decipher_len);
             */
            return new Player(sig_timestamp, player_id);
        });
    }
    static fromSource(cache, sig_timestamp, player_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = new Player(sig_timestamp, player_id);
            yield player.cache(cache);
            return player;
        });
    }
    cache(cache) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!cache)
                return;
            /**
             * Const ntoken_buf = this.#ntoken.toArrayBuffer();
             * const sig_decipher_buf = this.#signature.toArrayBuffer();
             */
            const buffer = new ArrayBuffer(12 /* + sig_decipher_buf.byteLength + ntoken_buf.byteLength */);
            const view = new DataView(buffer);
            view.setUint32(0, Player.LIBRARY_VERSION, true);
            view.setUint32(4, __classPrivateFieldGet(this, _Player_signature_timestamp, "f"), true);
            // View.setUint32(8, sig_decipher_buf.byteLength, true);
            // New Uint8Array(buffer).set(new Uint8Array(sig_decipher_buf), 12);
            // New Uint8Array(buffer).set(new Uint8Array(ntoken_buf), 12 + sig_decipher_buf.byteLength);
            yield cache.set(__classPrivateFieldGet(this, _Player_player_id, "f"), new Uint8Array(buffer));
        });
    }
    /**
     * Extracts the signature timestamp from the player source code.
     */
    static extractSigTimestamp(data) {
        return parseInt((0, Utils_1.getStringBetweenStrings)(data, 'signatureTimestamp:', ',') || '0');
    }
    /**
     * Extracts the signature decipher algorithm.
     */
    static extractSigDecipherSc(data) {
        const sig_alg_sc = (0, Utils_1.getStringBetweenStrings)(data, 'this.audioTracks};var', '};');
        const sig_data = (0, Utils_1.getStringBetweenStrings)(data, 'function(a){a=a.split("")', 'return a.join("")}');
        if (!sig_alg_sc || !sig_data)
            throw new Utils_1.PlayerError('Failed to extract signature decipher algorithm');
        return sig_alg_sc + sig_data;
    }
    /**
     * Extracts the n-token decipher algorithm.
     */
    static extractNTokenSc(data) {
        const sc = `var b=a.split("")${(0, Utils_1.getStringBetweenStrings)(data, 'b=a.split("")', '}return b.join("")}')}} return b.join("");`;
        console.log(sc);
        if (!sc)
            throw new Utils_1.PlayerError('Failed to extract n-token decipher algorithm');
        return sc;
    }
    get url() {
        return new URL(`/s/player/${__classPrivateFieldGet(this, _Player_player_id, "f")}/player_ias.vflset/en_US/base.js`, Constants_1.default.URLS.YT_BASE).toString();
    }
    get sts() {
        return __classPrivateFieldGet(this, _Player_signature_timestamp, "f");
    }
    static get LIBRARY_VERSION() {
        return 1;
    }
}
exports.default = Player;
_Player_signature_timestamp = new WeakMap(), _Player_player_id = new WeakMap();
//# sourceMappingURL=Player.js.map