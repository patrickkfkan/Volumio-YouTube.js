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
var _a, _Session_api_version, _Session_key, _Session_context, _Session_account_index, _Session_player, _Session_retrieveSessionData, _Session_generateSessionData;
import Constants, { CLIENTS } from '../utils/Constants.js';
import EventEmitterLike from '../utils/EventEmitterLike.js';
import Actions from './Actions.js';
import Player from './Player.js';
import HTTPClient from '../utils/HTTPClient.js';
import { Platform, getRandomUserAgent, InnertubeError, SessionError } from '../utils/Utils.js';
import OAuth from './OAuth.js';
import Proto from '../proto/index.js';
export var ClientType;
(function (ClientType) {
    ClientType["WEB"] = "WEB";
    ClientType["KIDS"] = "WEB_KIDS";
    ClientType["MUSIC"] = "WEB_REMIX";
    ClientType["ANDROID"] = "ANDROID";
    ClientType["ANDROID_MUSIC"] = "ANDROID_MUSIC";
    ClientType["ANDROID_CREATOR"] = "ANDROID_CREATOR";
    ClientType["TV_EMBEDDED"] = "TVHTML5_SIMPLY_EMBEDDED_PLAYER";
})(ClientType = ClientType || (ClientType = {}));
export default class Session extends EventEmitterLike {
    constructor(context, api_key, api_version, account_index, player, cookie, fetch, cache) {
        super();
        _Session_api_version.set(this, void 0);
        _Session_key.set(this, void 0);
        _Session_context.set(this, void 0);
        _Session_account_index.set(this, void 0);
        _Session_player.set(this, void 0);
        __classPrivateFieldSet(this, _Session_context, context, "f");
        __classPrivateFieldSet(this, _Session_account_index, account_index, "f");
        __classPrivateFieldSet(this, _Session_key, api_key, "f");
        __classPrivateFieldSet(this, _Session_api_version, api_version, "f");
        __classPrivateFieldSet(this, _Session_player, player, "f");
        this.http = new HTTPClient(this, cookie, fetch);
        this.actions = new Actions(this);
        this.oauth = new OAuth(this);
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
            const { context, api_key, api_version, account_index } = yield Session.getSessionData(options.lang, options.location, options.account_index, options.enable_safety_mode, options.generate_session_locally, options.device_category, options.client_type, options.timezone, options.fetch);
            return new Session(context, api_key, api_version, account_index, options.retrieve_player === false ? undefined : yield Player.create(options.cache, options.fetch), options.cookie, options.fetch, options.cache);
        });
    }
    static getSessionData(lang = '', location = '', account_index = 0, enable_safety_mode = false, generate_session_locally = false, device_category = 'desktop', client_name = ClientType.WEB, tz = Intl.DateTimeFormat().resolvedOptions().timeZone, fetch = Platform.shim.fetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let session_data;
            if (generate_session_locally) {
                session_data = __classPrivateFieldGet(this, _a, "m", _Session_generateSessionData).call(this, { lang, location, time_zone: tz, device_category, client_name, enable_safety_mode });
            }
            else {
                session_data = yield __classPrivateFieldGet(this, _a, "m", _Session_retrieveSessionData).call(this, { lang, location, time_zone: tz, device_category, client_name, enable_safety_mode }, fetch);
            }
            return Object.assign(Object.assign({}, session_data), { account_index });
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
    /**
     * Signs out of the current account and revokes the credentials.
     */
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            const response = yield this.oauth.revokeCredentials();
            this.logged_in = false;
            return response;
        });
    }
    /**
     * InnerTube API key.
     */
    get key() {
        return __classPrivateFieldGet(this, _Session_key, "f");
    }
    /**
     * InnerTube API version.
     */
    get api_version() {
        return __classPrivateFieldGet(this, _Session_api_version, "f");
    }
    get client_version() {
        return __classPrivateFieldGet(this, _Session_context, "f").client.clientVersion;
    }
    get client_name() {
        return __classPrivateFieldGet(this, _Session_context, "f").client.clientName;
    }
    get account_index() {
        return __classPrivateFieldGet(this, _Session_account_index, "f");
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
_a = Session, _Session_api_version = new WeakMap(), _Session_key = new WeakMap(), _Session_context = new WeakMap(), _Session_account_index = new WeakMap(), _Session_player = new WeakMap(), _Session_retrieveSessionData = function _Session_retrieveSessionData(options, fetch = Platform.shim.fetch) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL('/sw.js_data', Constants.URLS.YT_BASE);
        const res = yield fetch(url, {
            headers: {
                'accept-language': options.lang || 'en-US',
                'user-agent': getRandomUserAgent('desktop'),
                'accept': '*/*',
                'referer': 'https://www.youtube.com/sw.js',
                'cookie': `PREF=tz=${options.time_zone.replace('/', '.')};VISITOR_INFO1_LIVE=${Constants.CLIENTS.WEB.STATIC_VISITOR_ID};`
            }
        });
        if (!res.ok)
            throw new SessionError(`Failed to retrieve session data: ${res.status}`);
        const text = yield res.text();
        const data = JSON.parse(text.replace(/^\)\]\}'/, ''));
        const ytcfg = data[0][2];
        const api_version = `v${ytcfg[0][0][6]}`;
        const [[device_info], api_key] = ytcfg;
        const context = {
            client: {
                hl: device_info[0],
                gl: options.location || device_info[2],
                remoteHost: device_info[3],
                screenDensityFloat: 1,
                screenHeightPoints: 1080,
                screenPixelDensity: 1,
                screenWidthPoints: 1920,
                visitorData: device_info[13],
                userAgent: device_info[14],
                clientName: options.client_name,
                clientVersion: device_info[16],
                osName: device_info[17],
                osVersion: device_info[18],
                platform: options.device_category.toUpperCase(),
                clientFormFactor: 'UNKNOWN_FORM_FACTOR',
                userInterfaceTheme: 'USER_INTERFACE_THEME_LIGHT',
                timeZone: device_info[79] || options.time_zone,
                browserName: device_info[86],
                browserVersion: device_info[87],
                originalUrl: Constants.URLS.YT_BASE,
                deviceMake: device_info[11],
                deviceModel: device_info[12],
                utcOffsetMinutes: new Date().getTimezoneOffset()
            },
            user: {
                enableSafetyMode: options.enable_safety_mode,
                lockedSafetyMode: false
            },
            request: {
                useSsl: true
            }
        };
        return { context, api_key, api_version };
    });
}, _Session_generateSessionData = function _Session_generateSessionData(options) {
    const id = Constants.CLIENTS.WEB.STATIC_VISITOR_ID;
    const timestamp = Math.floor(Date.now() / 1000);
    const context = {
        client: {
            hl: options.lang || 'en',
            gl: options.location || 'US',
            screenDensityFloat: 1,
            screenHeightPoints: 1080,
            screenPixelDensity: 1,
            screenWidthPoints: 1920,
            visitorData: Proto.encodeVisitorData(id, timestamp),
            userAgent: getRandomUserAgent('desktop'),
            clientName: options.client_name,
            clientVersion: CLIENTS.WEB.VERSION,
            osName: 'Windows',
            osVersion: '10.0',
            platform: options.device_category.toUpperCase(),
            clientFormFactor: 'UNKNOWN_FORM_FACTOR',
            userInterfaceTheme: 'USER_INTERFACE_THEME_LIGHT',
            timeZone: options.time_zone,
            originalUrl: Constants.URLS.YT_BASE,
            deviceMake: '',
            deviceModel: '',
            utcOffsetMinutes: new Date().getTimezoneOffset()
        },
        user: {
            enableSafetyMode: options.enable_safety_mode,
            lockedSafetyMode: false
        },
        request: {
            useSsl: true
        }
    };
    return { context, api_key: CLIENTS.WEB.API_KEY, api_version: CLIENTS.WEB.API_VERSION };
};
//# sourceMappingURL=Session.js.map