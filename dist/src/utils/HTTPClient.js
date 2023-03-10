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
var _HTTPClient_instances, _HTTPClient_session, _HTTPClient_cookie, _HTTPClient_fetch, _HTTPClient_adjustContext;
import Constants from './Constants.js';
import { Platform, generateSidAuth, getRandomUserAgent, getStringBetweenStrings, InnertubeError } from './Utils.js';
export default class HTTPClient {
    constructor(session, cookie, fetch) {
        _HTTPClient_instances.add(this);
        _HTTPClient_session.set(this, void 0);
        _HTTPClient_cookie.set(this, void 0);
        _HTTPClient_fetch.set(this, void 0);
        __classPrivateFieldSet(this, _HTTPClient_session, session, "f");
        __classPrivateFieldSet(this, _HTTPClient_cookie, cookie, "f");
        __classPrivateFieldSet(this, _HTTPClient_fetch, fetch || Platform.shim.fetch, "f");
    }
    get fetch_function() {
        return __classPrivateFieldGet(this, _HTTPClient_fetch, "f");
    }
    fetch(input, init) {
        return __awaiter(this, void 0, void 0, function* () {
            const innertube_url = Constants.URLS.API.PRODUCTION_1 + __classPrivateFieldGet(this, _HTTPClient_session, "f").api_version;
            const baseURL = (init === null || init === void 0 ? void 0 : init.baseURL) || innertube_url;
            const request_url = typeof input === 'string' ?
                (!baseURL.endsWith('/') && !input.startsWith('/')) ?
                    new URL(`${baseURL}/${input}`) :
                    new URL(baseURL + input) :
                input instanceof URL ?
                    input : new URL(input.url, baseURL);
            const headers = (init === null || init === void 0 ? void 0 : init.headers) ||
                (input instanceof Platform.shim.Request ? input.headers : new Platform.shim.Headers()) ||
                new Platform.shim.Headers();
            const body = (init === null || init === void 0 ? void 0 : init.body) || (input instanceof Platform.shim.Request ? input.body : undefined);
            const request_headers = new Platform.shim.Headers(headers);
            request_headers.set('Accept', '*/*');
            request_headers.set('Accept-Language', '*');
            request_headers.set('x-goog-visitor-id', __classPrivateFieldGet(this, _HTTPClient_session, "f").context.client.visitorData || '');
            request_headers.set('x-origin', request_url.origin);
            request_headers.set('x-youtube-client-version', __classPrivateFieldGet(this, _HTTPClient_session, "f").context.client.clientVersion || '');
            if (Platform.shim.server) {
                request_headers.set('User-Agent', getRandomUserAgent('desktop'));
                request_headers.set('origin', request_url.origin);
            }
            request_url.searchParams.set('key', __classPrivateFieldGet(this, _HTTPClient_session, "f").key);
            request_url.searchParams.set('prettyPrint', 'false');
            request_url.searchParams.set('alt', 'json');
            const content_type = request_headers.get('Content-Type');
            let request_body = body;
            let is_web_kids = false;
            const is_innertube_req = baseURL === innertube_url ||
                baseURL === Constants.URLS.YT_UPLOAD;
            // Copy context into payload when possible
            if (content_type === 'application/json' && is_innertube_req && (typeof body === 'string')) {
                const json = JSON.parse(body);
                const n_body = Object.assign(Object.assign({}, json), { 
                    // Deep copy since we're gonna be modifying it
                    context: JSON.parse(JSON.stringify(__classPrivateFieldGet(this, _HTTPClient_session, "f").context)) });
                __classPrivateFieldGet(this, _HTTPClient_instances, "m", _HTTPClient_adjustContext).call(this, n_body.context, n_body.client);
                request_headers.set('x-youtube-client-version', n_body.context.client.clientVersion);
                delete n_body.client;
                if (Platform.shim.server) {
                    if (n_body.context.client.clientName === 'ANDROID' || n_body.context.client.clientName === 'ANDROID_MUSIC') {
                        request_headers.set('User-Agent', Constants.CLIENTS.ANDROID.USER_AGENT);
                    }
                }
                is_web_kids = n_body.context.client.clientName === 'WEB_KIDS';
                request_body = JSON.stringify(n_body);
            }
            // Authenticate (NOTE: YouTube Kids does not support regular bearer tokens)
            if (__classPrivateFieldGet(this, _HTTPClient_session, "f").logged_in && is_innertube_req && !is_web_kids) {
                const oauth = __classPrivateFieldGet(this, _HTTPClient_session, "f").oauth;
                if (oauth.validateCredentials()) {
                    yield oauth.refreshIfRequired();
                    request_headers.set('authorization', `Bearer ${oauth.credentials.access_token}`);
                    // Remove API key as it is not required when using oauth.
                    request_url.searchParams.delete('key');
                }
                if (__classPrivateFieldGet(this, _HTTPClient_cookie, "f")) {
                    const papisid = getStringBetweenStrings(__classPrivateFieldGet(this, _HTTPClient_cookie, "f"), 'PAPISID=', ';');
                    if (papisid) {
                        request_headers.set('authorization', yield generateSidAuth(papisid));
                        request_headers.set('x-goog-authuser', __classPrivateFieldGet(this, _HTTPClient_session, "f").account_index.toString());
                    }
                    request_headers.set('cookie', __classPrivateFieldGet(this, _HTTPClient_cookie, "f"));
                }
            }
            const request = new Platform.shim.Request(request_url, input instanceof Platform.shim.Request ? input : init);
            const response = yield __classPrivateFieldGet(this, _HTTPClient_fetch, "f").call(this, request, {
                body: request_body,
                headers: request_headers,
                credentials: 'include',
                redirect: input instanceof Platform.shim.Request ? input.redirect : (init === null || init === void 0 ? void 0 : init.redirect) || 'follow'
            });
            // Check if 2xx
            if (response.ok) {
                return response;
            }
            throw new InnertubeError(`Request to ${response.url} failed with status ${response.status}`, yield response.text());
        });
    }
}
_HTTPClient_session = new WeakMap(), _HTTPClient_cookie = new WeakMap(), _HTTPClient_fetch = new WeakMap(), _HTTPClient_instances = new WeakSet(), _HTTPClient_adjustContext = function _HTTPClient_adjustContext(ctx, client) {
    switch (client) {
        case 'YTMUSIC':
            ctx.client.clientVersion = Constants.CLIENTS.YTMUSIC.VERSION;
            ctx.client.clientName = Constants.CLIENTS.YTMUSIC.NAME;
            break;
        case 'ANDROID':
            ctx.client.clientVersion = Constants.CLIENTS.ANDROID.VERSION;
            ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
            ctx.client.clientName = Constants.CLIENTS.ANDROID.NAME;
            ctx.client.androidSdkVersion = Constants.CLIENTS.ANDROID.SDK_VERSION;
            ctx.client.platform = 'MOBILE';
            break;
        case 'YTMUSIC_ANDROID':
            ctx.client.clientVersion = Constants.CLIENTS.YTMUSIC_ANDROID.VERSION;
            ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
            ctx.client.clientName = Constants.CLIENTS.YTMUSIC_ANDROID.NAME;
            ctx.client.androidSdkVersion = Constants.CLIENTS.ANDROID.SDK_VERSION;
            ctx.client.platform = 'MOBILE';
            break;
        case 'YTSTUDIO_ANDROID':
            ctx.client.clientVersion = Constants.CLIENTS.YTSTUDIO_ANDROID.VERSION;
            ctx.client.clientFormFactor = 'SMALL_FORM_FACTOR';
            ctx.client.clientName = Constants.CLIENTS.YTSTUDIO_ANDROID.NAME;
            ctx.client.androidSdkVersion = Constants.CLIENTS.ANDROID.SDK_VERSION;
            break;
        case 'TV_EMBEDDED':
            ctx.client.clientVersion = Constants.CLIENTS.TV_EMBEDDED.VERSION;
            ctx.client.clientScreen = 'EMBED';
            ctx.thirdParty = { embedUrl: Constants.URLS.YT_BASE };
            break;
        case 'YTKIDS':
            ctx.client.clientVersion = Constants.CLIENTS.WEB_KIDS.VERSION;
            ctx.client.clientName = Constants.CLIENTS.WEB_KIDS.NAME;
            ctx.client.kidsAppInfo = {
                categorySettings: {
                    enabledCategories: [
                        'approved_for_you',
                        'black_joy',
                        'camp',
                        'collections',
                        'earth',
                        'explore',
                        'favorites',
                        'gaming',
                        'halloween',
                        'hero',
                        'learning',
                        'move',
                        'music',
                        'reading',
                        'shared_by_parents',
                        'shows',
                        'soccer',
                        'sports',
                        'spotlight',
                        'winter'
                    ]
                },
                contentSettings: {
                    corpusPreference: 'KIDS_CORPUS_PREFERENCE_YOUNGER',
                    kidsNoSearchMode: 'YT_KIDS_NO_SEARCH_MODE_OFF'
                }
            };
            break;
        default:
            break;
    }
};
//# sourceMappingURL=HTTPClient.js.map