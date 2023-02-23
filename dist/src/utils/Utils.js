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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var _a, _Platform_shim;
import { Memo } from '../parser/helpers.js';
import userAgents from './user-agents.js';
export class Platform {
    static load(platform) {
        __classPrivateFieldSet(Platform, _a, platform, "f", _Platform_shim);
    }
    static get shim() {
        if (!__classPrivateFieldGet(Platform, _a, "f", _Platform_shim)) {
            throw new Error('Platform is not loaded');
        }
        return __classPrivateFieldGet(Platform, _a, "f", _Platform_shim);
    }
}
_a = Platform;
_Platform_shim = { value: void 0 };
export class InnertubeError extends Error {
    constructor(message, info) {
        super(message);
        if (info) {
            this.info = info;
        }
        this.date = new Date();
        this.version = Platform.shim.info.version;
    }
}
export class ParsingError extends InnertubeError {
}
export class MissingParamError extends InnertubeError {
}
export class OAuthError extends InnertubeError {
}
export class PlayerError extends Error {
}
export class SessionError extends Error {
}
export class ChannelError extends Error {
}
/**
 * Compares given objects. May not work correctly for
 * objects with methods.
 */
export function deepCompare(obj1, obj2) {
    const keys = Reflect.ownKeys(obj1);
    return keys.some((key) => {
        var _b;
        const is_text = ((_b = obj2[key]) === null || _b === void 0 ? void 0 : _b.constructor.name) === 'Text';
        if (!is_text && typeof obj2[key] === 'object') {
            return JSON.stringify(obj1[key]) === JSON.stringify(obj2[key]);
        }
        return obj1[key] === (is_text ? obj2[key].toString() : obj2[key]);
    });
}
/**
 * Finds a string between two delimiters.
 * @param data - the data.
 * @param start_string - start string.
 * @param end_string - end string.
 */
export function getStringBetweenStrings(data, start_string, end_string) {
    const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, 's');
    const match = data.match(regex);
    return match ? match[1] : undefined;
}
export function escapeStringRegexp(input) {
    return input.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
/**
 * Returns a random user agent.
 * @param type - mobile | desktop
 */
export function getRandomUserAgent(type) {
    const available_agents = userAgents[type];
    const random_index = Math.floor(Math.random() * available_agents.length);
    return available_agents[random_index];
}
/**
 * Generates an authentication token from a cookies' sid..js
 * @param sid - Sid extracted from cookies
 */
export function generateSidAuth(sid) {
    return __awaiter(this, void 0, void 0, function* () {
        const youtube = 'https://www.youtube.com';
        const timestamp = Math.floor(new Date().getTime() / 1000);
        const input = [timestamp, sid, youtube].join(' ');
        const gen_hash = yield Platform.shim.sha1Hash(input);
        return ['SAPISIDHASH', [timestamp, gen_hash].join('_')].join(' ');
    });
}
/**
 * Generates a random string with the given length.
 *
 */
export function generateRandomString(length) {
    const result = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    for (let i = 0; i < length; i++) {
        result.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
    }
    return result.join('');
}
/**
 * Converts time (h:m:s) to seconds.
 * @returns seconds
 */
export function timeToSeconds(time) {
    const params = time.split(':').map((param) => parseInt(param));
    switch (params.length) {
        case 1:
            return params[0];
        case 2:
            return params[0] * 60 + params[1];
        case 3:
            return params[0] * 3600 + params[1] * 60 + params[2];
        default:
            throw new Error('Invalid time string');
    }
}
export function concatMemos(...iterables) {
    const memo = new Memo();
    for (const iterable of iterables) {
        if (!iterable)
            continue;
        for (const item of iterable) {
            memo.set(...item);
        }
    }
    return memo;
}
export function throwIfMissing(params) {
    for (const [key, value] of Object.entries(params)) {
        if (!value)
            throw new MissingParamError(`${key} is missing`);
    }
}
export function hasKeys(params, ...keys) {
    for (const key of keys) {
        if (!Reflect.has(params, key) || (params[key] === undefined))
            return false;
    }
    return true;
}
export function streamToIterable(stream) {
    return __asyncGenerator(this, arguments, function* streamToIterable_1() {
        const reader = stream.getReader();
        try {
            while (true) {
                const { done, value } = yield __await(reader.read());
                if (done) {
                    return yield __await(void 0);
                }
                yield yield __await(value);
            }
        }
        finally {
            reader.releaseLock();
        }
    });
}
export const debugFetch = (input, init) => {
    const url = typeof input === 'string' ?
        new URL(input) :
        input instanceof URL ?
            input : new URL(input.url);
    const headers = (init === null || init === void 0 ? void 0 : init.headers) ?
        new Headers(init.headers) :
        input instanceof Request ?
            input.headers :
            new Headers();
    const arr_headers = [...headers];
    const body_contents = (init === null || init === void 0 ? void 0 : init.body) ?
        typeof init.body === 'string' ?
            headers.get('content-type') === 'application/json' ?
                JSON.stringify(JSON.parse(init.body), null, 2) : // Body is string and json
                init.body : // Body is string
            '    <binary>' : // Body is not string
        '    (none)'; // No body provided
    const headers_serialized = arr_headers.length > 0 ?
        `${arr_headers.map(([key, value]) => `    ${key}: ${value}`).join('\n')}` :
        '    (none)';
    console.log('YouTube.js Fetch:\n' +
        `  url: ${url.toString()}\n` +
        `  method: ${(init === null || init === void 0 ? void 0 : init.method) || 'GET'}\n` +
        `  headers:\n${headers_serialized}\n' + 
    '  body:\n${body_contents}`);
    return Platform.shim.fetch(input, init);
};
export function u8ToBase64(u8) {
    return btoa(String.fromCharCode.apply(null, Array.from(u8)));
}
//# sourceMappingURL=Utils.js.map