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
var _HTTPClient_instances, _HTTPClient_session, _HTTPClient_cookie, _HTTPClient_fetch, _HTTPClient_adjustContext;
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __importDefault(require("./Constants"));
const Utils_1 = require("./Utils");
// eslint-disable-next-line
const nodeFetch = require('node-fetch');
const nfFetch = nodeFetch.default;
const nfHeaders = nodeFetch.Headers;
const nfRequest = nodeFetch.Request;
class HTTPClient {
    // eslint-disable-next-line
    constructor(session, cookie, fetch) {
        _HTTPClient_instances.add(this);
        _HTTPClient_session.set(this, void 0);
        _HTTPClient_cookie.set(this, void 0);
        _HTTPClient_fetch.set(this, void 0);
        __classPrivateFieldSet(this, _HTTPClient_session, session, "f");
        __classPrivateFieldSet(this, _HTTPClient_cookie, cookie, "f");
        __classPrivateFieldSet(this, _HTTPClient_fetch, nfFetch, "f");
    }
    get fetch_function() {
        return __classPrivateFieldGet(this, _HTTPClient_fetch, "f");
    }
    fetch(input, init) {
        return __awaiter(this, void 0, void 0, function* () {
            const innertube_url = Constants_1.default.URLS.API.PRODUCTION + __classPrivateFieldGet(this, _HTTPClient_session, "f").api_version;
            const baseURL = (init === null || init === void 0 ? void 0 : init.baseURL) || innertube_url;
            const request_url = typeof input === 'string' ?
                (!baseURL.endsWith('/') && !input.startsWith('/')) ?
                    new URL(`${baseURL}/${input}`) :
                    new URL(baseURL + input) :
                input instanceof URL ?
                    input : new URL(input.url, baseURL);
            const headers = (init === null || init === void 0 ? void 0 : init.headers) ||
                (input instanceof nfRequest ? input.headers : new nfHeaders()) ||
                new nfHeaders();
            const body = (init === null || init === void 0 ? void 0 : init.body) || (input instanceof nfRequest ? input.body : undefined);
            const request_headers = new nfHeaders(headers);
            request_headers.set('Accept', '*/*');
            request_headers.set('Accept-Language', `en-${__classPrivateFieldGet(this, _HTTPClient_session, "f").context.client.gl || 'US'}`);
            request_headers.set('x-goog-visitor-id', __classPrivateFieldGet(this, _HTTPClient_session, "f").context.client.visitorData || '');
            request_headers.set('x-origin', request_url.origin);
            request_headers.set('x-youtube-client-version', __classPrivateFieldGet(this, _HTTPClient_session, "f").context.client.clientVersion || '');
            if ((0, Utils_1.isServer)()) {
                request_headers.set('User-Agent', (0, Utils_1.getRandomUserAgent)('desktop'));
                request_headers.set('origin', request_url.origin);
            }
            request_url.searchParams.set('key', __classPrivateFieldGet(this, _HTTPClient_session, "f").key);
            request_url.searchParams.set('prettyPrint', 'false');
            request_url.searchParams.set('alt', 'json');
            const content_type = request_headers.get('Content-Type');
            let request_body = body;
            const is_innertube_req = baseURL === innertube_url ||
                baseURL === Constants_1.default.URLS.YT_UPLOAD;
            // Copy context into payload when possible
            if (content_type === 'application/json' && is_innertube_req && (typeof body === 'string')) {
                const json = JSON.parse(body);
                const n_body = Object.assign(Object.assign({}, json), { 
                    // Deep copy since we're gonna be modifying it
                    context: JSON.parse(JSON.stringify(__classPrivateFieldGet(this, _HTTPClient_session, "f").context)) });
                __classPrivateFieldGet(this, _HTTPClient_instances, "m", _HTTPClient_adjustContext).call(this, n_body.context, n_body.client);
                request_headers.set('x-youtube-client-version', n_body.context.client.clientVersion);
                delete n_body.client;
                request_body = JSON.stringify(n_body);
            }
            // Authenticate
            if (__classPrivateFieldGet(this, _HTTPClient_session, "f").logged_in && is_innertube_req) {
                const oauth = __classPrivateFieldGet(this, _HTTPClient_session, "f").oauth;
                if (oauth.validateCredentials()) {
                    yield oauth.refreshIfRequired();
                    request_headers.set('authorization', `Bearer ${oauth.credentials.access_token}`);
                    // Remove API key as it is not required when using oauth.
                    request_url.searchParams.delete('key');
                }
                if (__classPrivateFieldGet(this, _HTTPClient_cookie, "f")) {
                    const papisid = (0, Utils_1.getStringBetweenStrings)(__classPrivateFieldGet(this, _HTTPClient_cookie, "f"), 'PAPISID=', ';');
                    if (papisid) {
                        request_headers.set('authorization', yield (0, Utils_1.generateSidAuth)(papisid));
                    }
                    request_headers.set('cookie', __classPrivateFieldGet(this, _HTTPClient_cookie, "f"));
                }
            }
            const request = new nfRequest(request_url, input instanceof nfRequest ? input : init);
            const response = yield __classPrivateFieldGet(this, _HTTPClient_fetch, "f").call(this, request, {
                body: request_body,
                headers: request_headers,
                credentials: 'include',
                redirect: input instanceof nfRequest ? input.redirect : (init === null || init === void 0 ? void 0 : init.redirect) || 'follow'
            });
            // Check if 2xx
            if (response.ok) {
                return response;
            }
            throw new Utils_1.InnertubeError(`Request to ${response.url} failed with status ${response.status}`, yield response.text());
        });
    }
}
exports.default = HTTPClient;
_HTTPClient_session = new WeakMap(), _HTTPClient_cookie = new WeakMap(), _HTTPClient_fetch = new WeakMap(), _HTTPClient_instances = new WeakSet(), _HTTPClient_adjustContext = function _HTTPClient_adjustContext(ctx, client) {
    switch (client) {
        case 'YTMUSIC':
            ctx.client.clientVersion = Constants_1.default.CLIENTS.YTMUSIC.VERSION;
            ctx.client.clientName = Constants_1.default.CLIENTS.YTMUSIC.NAME;
            break;
        case 'ANDROID':
            ctx.client.clientVersion = Constants_1.default.CLIENTS.ANDROID.VERSION;
            ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
            ctx.client.clientName = Constants_1.default.CLIENTS.ANDROID.NAME;
            ctx.client.androidSdkVersion = Constants_1.default.CLIENTS.ANDROID.SDK_VERSION;
            break;
        case 'YTMUSIC_ANDROID':
            ctx.client.clientVersion = Constants_1.default.CLIENTS.YTMUSIC_ANDROID.VERSION;
            ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
            ctx.client.clientName = Constants_1.default.CLIENTS.YTMUSIC_ANDROID.NAME;
            ctx.client.androidSdkVersion = Constants_1.default.CLIENTS.ANDROID.SDK_VERSION;
            break;
        default:
            break;
    }
};
//# sourceMappingURL=HTTPClient.js.map