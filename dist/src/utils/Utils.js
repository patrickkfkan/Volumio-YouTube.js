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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.u8ToBase64 = exports.debugFetch = exports.streamToIterable = exports.isServer = exports.getRuntime = exports.uuidv4 = exports.hasKeys = exports.throwIfMissing = exports.timeToSeconds = exports.generateRandomString = exports.generateSidAuth = exports.sha1Hash = exports.getRandomUserAgent = exports.escapeStringRegexp = exports.getStringBetweenStrings = exports.deepCompare = exports.SessionError = exports.PlayerError = exports.OAuthError = exports.NoStreamingDataError = exports.UnavailableContentError = exports.MissingParamError = exports.DownloadError = exports.ParsingError = exports.InnertubeError = void 0;
const package_json_1 = __importDefault(require("../../package.json"));
const user_agents_json_1 = __importDefault(require("./user-agents.json"));
// eslint-disable-next-line
const uuid = require('uuid');
// eslint-disable-next-line
const btoa = require('btoa');
// eslint-disable-next-line
const crypto = getRuntime() === 'node' ? new (require('@peculiar/webcrypto').Crypto)() : window.crypto;
class InnertubeError extends Error {
    constructor(message, info) {
        super(message);
        if (info) {
            this.info = info;
        }
        this.date = new Date();
        this.version = package_json_1.default.version;
    }
}
exports.InnertubeError = InnertubeError;
class ParsingError extends InnertubeError {
}
exports.ParsingError = ParsingError;
class DownloadError extends InnertubeError {
}
exports.DownloadError = DownloadError;
class MissingParamError extends InnertubeError {
}
exports.MissingParamError = MissingParamError;
class UnavailableContentError extends InnertubeError {
}
exports.UnavailableContentError = UnavailableContentError;
class NoStreamingDataError extends InnertubeError {
}
exports.NoStreamingDataError = NoStreamingDataError;
class OAuthError extends InnertubeError {
}
exports.OAuthError = OAuthError;
class PlayerError extends Error {
}
exports.PlayerError = PlayerError;
class SessionError extends Error {
}
exports.SessionError = SessionError;
/**
 * Compares given objects. May not work correctly for
 * objects with methods.
 */
function deepCompare(obj1, obj2) {
    const keys = Reflect.ownKeys(obj1);
    return keys.some((key) => {
        var _a;
        const is_text = ((_a = obj2[key]) === null || _a === void 0 ? void 0 : _a.constructor.name) === 'Text';
        if (!is_text && typeof obj2[key] === 'object') {
            return JSON.stringify(obj1[key]) === JSON.stringify(obj2[key]);
        }
        return obj1[key] === (is_text ? obj2[key].toString() : obj2[key]);
    });
}
exports.deepCompare = deepCompare;
/**
 * Finds a string between two delimiters.
 * @param data - the data.
 * @param start_string - start string.
 * @param end_string - end string.
 */
function getStringBetweenStrings(data, start_string, end_string) {
    const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, 's');
    const match = data.match(regex);
    return match ? match[1] : undefined;
}
exports.getStringBetweenStrings = getStringBetweenStrings;
function escapeStringRegexp(input) {
    return input.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
exports.escapeStringRegexp = escapeStringRegexp;
/**
 * Returns a random user agent.
 * @param type - mobile | desktop
 */
function getRandomUserAgent(type) {
    const available_agents = user_agents_json_1.default[type];
    const random_index = Math.floor(Math.random() * available_agents.length);
    return available_agents[random_index];
}
exports.getRandomUserAgent = getRandomUserAgent;
function sha1Hash(str) {
    return __awaiter(this, void 0, void 0, function* () {
        const SubtleCrypto = crypto.subtle;
        const byteToHex = [
            '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f',
            '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f',
            '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f',
            '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f',
            '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f',
            '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f',
            '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f',
            '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f',
            '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f',
            '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f',
            'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af',
            'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf',
            'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf',
            'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df',
            'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef',
            'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff'
        ];
        function hex(arrayBuffer) {
            const buff = new Uint8Array(arrayBuffer);
            const hexOctets = [];
            for (let i = 0; i < buff.length; ++i)
                hexOctets.push(byteToHex[buff[i]]);
            return hexOctets.join('');
        }
        return hex(yield SubtleCrypto.digest('SHA-1', new TextEncoder().encode(str)));
    });
}
exports.sha1Hash = sha1Hash;
/**
 * Generates an authentication token from a cookies' sid.
 * @param sid - Sid extracted from cookies
 */
function generateSidAuth(sid) {
    return __awaiter(this, void 0, void 0, function* () {
        const youtube = 'https://www.youtube.com';
        const timestamp = Math.floor(new Date().getTime() / 1000);
        const input = [timestamp, sid, youtube].join(' ');
        const gen_hash = yield sha1Hash(input);
        return ['SAPISIDHASH', [timestamp, gen_hash].join('_')].join(' ');
    });
}
exports.generateSidAuth = generateSidAuth;
/**
 * Generates a random string with the given length.
 *
 */
function generateRandomString(length) {
    const result = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    for (let i = 0; i < length; i++) {
        result.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
    }
    return result.join('');
}
exports.generateRandomString = generateRandomString;
/**
 * Converts time (h:m:s) to seconds.
 * @returns seconds
 */
function timeToSeconds(time) {
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
exports.timeToSeconds = timeToSeconds;
/**
 * Throws an error if given parameters are undefined.
 */
function throwIfMissing(params) {
    for (const [key, value] of Object.entries(params)) {
        if (!value)
            throw new MissingParamError(`${key} is missing`);
    }
}
exports.throwIfMissing = throwIfMissing;
function hasKeys(params, ...keys) {
    for (const key of keys) {
        if (!Reflect.has(params, key) || (params[key] === undefined))
            return false;
    }
    return true;
}
exports.hasKeys = hasKeys;
function uuidv4() {
    var _a;
    if (getRuntime() === 'node') {
        return uuid.v4();
    }
    if ((_a = globalThis.crypto) === null || _a === void 0 ? void 0 : _a.randomUUID()) {
        return globalThis.crypto.randomUUID();
    }
    // See https://stackoverflow.com/a/2117523
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (cc) => {
        const c = parseInt(cc);
        return (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
}
exports.uuidv4 = uuidv4;
function getRuntime() {
    var _a;
    if ((typeof process !== 'undefined') && ((_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node))
        return 'node';
    if (Reflect.has(globalThis, 'Deno'))
        return 'deno';
    return 'browser';
}
exports.getRuntime = getRuntime;
function isServer() {
    return ['node', 'deno'].includes(getRuntime());
}
exports.isServer = isServer;
function streamToIterable(stream) {
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
exports.streamToIterable = streamToIterable;
const debugFetch = (input, init) => {
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
    return globalThis.fetch(input, init);
};
exports.debugFetch = debugFetch;
function u8ToBase64(u8) {
    return btoa(String.fromCharCode.apply(null, Array.from(u8)));
}
exports.u8ToBase64 = u8ToBase64;
//# sourceMappingURL=Utils.js.map