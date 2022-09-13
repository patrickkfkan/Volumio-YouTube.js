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
var _Session_api_version, _Session_key, _Session_context, _Session_player;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientType = void 0;
const Player_1 = __importDefault(require("./Player"));
const index_1 = __importDefault(require("../proto/index"));
const Actions_1 = __importDefault(require("./Actions"));
const Constants_1 = __importDefault(require("../utils/Constants"));
const EventEmitterLike_1 = __importDefault(require("../utils/EventEmitterLike"));
const HTTPClient_1 = __importDefault(require("../utils/HTTPClient"));
const Utils_1 = require("../utils/Utils");
const OAuth_1 = __importDefault(require("./OAuth"));
// eslint-disable-next-line
const nfFetch = require('node-fetch').default;
var ClientType;
(function (ClientType) {
    ClientType["WEB"] = "WEB";
    ClientType["MUSIC"] = "WEB_REMIX";
    ClientType["ANDROID"] = "ANDROID";
    ClientType["ANDROID_MUSIC"] = "ANDROID_MUSIC";
})(ClientType = exports.ClientType || (exports.ClientType = {}));
class Session extends EventEmitterLike_1.default {
    constructor(context, api_key, api_version, player, cookie, fetch, cache) {
        super();
        _Session_api_version.set(this, void 0);
        _Session_key.set(this, void 0);
        _Session_context.set(this, void 0);
        _Session_player.set(this, void 0);
        __classPrivateFieldSet(this, _Session_context, context, "f");
        __classPrivateFieldSet(this, _Session_key, api_key, "f");
        __classPrivateFieldSet(this, _Session_api_version, api_version, "f");
        __classPrivateFieldSet(this, _Session_player, player, "f");
        this.http = new HTTPClient_1.default(this, cookie, fetch);
        this.actions = new Actions_1.default(this);
        this.oauth = new OAuth_1.default(this);
        this.logged_in = !!cookie;
        this.cache = cache;
    }
    on(type, listener) {
        super.on(type, listener);
    }
    once(type, listener) {
        super.once(type, listener);
    }
    static create(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { context, api_key, api_version } = yield Session.getSessionData(options.lang, options.device_category, options.client_type, options.timezone, options.fetch);
            return new Session(context, api_key, api_version, yield Player_1.default.create(options.cache, options.fetch), options.cookie, options.fetch, options.cache);
        });
    }
    static getSessionData(lang = 'en-US', device_category = 'desktop', client_name = ClientType.WEB, tz = Intl.DateTimeFormat().resolvedOptions().timeZone, fetch = nfFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = new URL('/sw.js_data', Constants_1.default.URLS.YT_BASE);
            const res = yield fetch(url, {
                headers: {
                    'accept-language': lang,
                    'user-agent': (0, Utils_1.getRandomUserAgent)('desktop'),
                    'accept': '*/*',
                    'referer': 'https://www.youtube.com/sw.js',
                    'cookie': `PREF=tz=${tz.replace('/', '.')}`
                }
            });
            if (!res.ok) {
                throw new Utils_1.SessionError(`Failed to get session data: ${res.status}`);
            }
            const text = yield res.text();
            const data = JSON.parse(text.replace(/^\)\]\}'/, ''));
            const ytcfg = data[0][2];
            const api_version = `v${ytcfg[0][0][6]}`;
            const [[device_info], api_key] = ytcfg;
            const id = (0, Utils_1.generateRandomString)(11);
            const timestamp = Math.floor(Date.now() / 1000);
            const visitor_data = index_1.default.encodeVisitorData(id, timestamp);
            const context = {
                client: {
                    hl: device_info[0],
                    gl: device_info[2],
                    remoteHost: device_info[3],
                    visitorData: visitor_data,
                    userAgent: device_info[14],
                    clientName: client_name,
                    clientVersion: device_info[16],
                    osName: device_info[17],
                    osVersion: device_info[18],
                    platform: device_category.toUpperCase(),
                    clientFormFactor: 'UNKNOWN_FORM_FACTOR',
                    userInterfaceTheme: 'USER_INTERFACE_THEME_LIGHT',
                    timeZone: device_info[79],
                    browserName: device_info[86],
                    browserVersion: device_info[87],
                    originalUrl: Constants_1.default.URLS.API.BASE,
                    deviceMake: device_info[11],
                    deviceModel: device_info[12],
                    utcOffsetMinutes: new Date().getTimezoneOffset()
                },
                user: {
                    lockedSafetyMode: false
                },
                request: {
                    useSsl: true
                }
            };
            return { context, api_key, api_version };
        });
    }
    signIn(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const error_handler = (err) => reject(err);
                this.once('auth', (data) => {
                    this.off('auth-error', error_handler);
                    if (data.status === 'SUCCESS') {
                        this.logged_in = true;
                        resolve();
                    }
                    reject(data);
                });
                this.once('auth-error', error_handler);
                try {
                    yield this.oauth.init(credentials);
                    if (this.oauth.validateCredentials()) {
                        yield this.oauth.refreshIfRequired();
                        this.logged_in = true;
                        resolve();
                    }
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.logged_in)
                throw new Utils_1.InnertubeError('You are not signed in');
            const response = yield this.oauth.revokeCredentials();
            this.logged_in = false;
            return response;
        });
    }
    get key() {
        return __classPrivateFieldGet(this, _Session_key, "f");
    }
    get api_version() {
        return __classPrivateFieldGet(this, _Session_api_version, "f");
    }
    get client_version() {
        return __classPrivateFieldGet(this, _Session_context, "f").client.clientVersion;
    }
    get client_name() {
        return __classPrivateFieldGet(this, _Session_context, "f").client.clientName;
    }
    get context() {
        return __classPrivateFieldGet(this, _Session_context, "f");
    }
    get player() {
        return __classPrivateFieldGet(this, _Session_player, "f");
    }
    get lang() {
        return __classPrivateFieldGet(this, _Session_context, "f").client.hl;
    }
}
exports.default = Session;
_Session_api_version = new WeakMap(), _Session_key = new WeakMap(), _Session_context = new WeakMap(), _Session_player = new WeakMap();
//# sourceMappingURL=Session.js.map