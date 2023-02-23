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
var _Cache_instances, _Cache_persistent_directory, _Cache_persistent, _Cache_getBrowserDB;
import { Platform } from '../utils/Utils.js';
import sha1Hash from './polyfills/web-crypto.js';
import package_json from '../../package.json' assert { type: 'json' };
import evaluate from './jsruntime/jinter.js';
class Cache {
    constructor(persistent = false, persistent_directory) {
        _Cache_instances.add(this);
        _Cache_persistent_directory.set(this, void 0);
        _Cache_persistent.set(this, void 0);
        __classPrivateFieldSet(this, _Cache_persistent_directory, persistent_directory || '', "f");
        __classPrivateFieldSet(this, _Cache_persistent, persistent, "f");
    }
    get cache_dir() {
        return __classPrivateFieldGet(this, _Cache_persistent, "f") ? __classPrivateFieldGet(this, _Cache_persistent_directory, "f") : '';
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield __classPrivateFieldGet(this, _Cache_instances, "m", _Cache_getBrowserDB).call(this);
            if (!db)
                return;
            return new Promise((resolve, reject) => {
                const request = db.transaction('kv-store', 'readonly').objectStore('kv-store').get(key);
                request.onerror = reject;
                request.onsuccess = function () {
                    var _a;
                    const result = (_a = this.result) === null || _a === void 0 ? void 0 : _a.v;
                    resolve(result ? result.buffer : undefined);
                };
            });
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield __classPrivateFieldGet(this, _Cache_instances, "m", _Cache_getBrowserDB).call(this);
            if (!db)
                return;
            return new Promise((resolve, reject) => {
                const request = db.transaction('kv-store', 'readwrite').objectStore('kv-store').put({ k: key, v: value });
                request.onerror = reject;
                request.onsuccess = () => resolve();
            });
        });
    }
    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield __classPrivateFieldGet(this, _Cache_instances, "m", _Cache_getBrowserDB).call(this);
            if (!db)
                return;
            return new Promise((resolve, reject) => {
                const request = db.transaction('kv-store', 'readwrite').objectStore('kv-store').delete(key);
                request.onerror = reject;
                request.onsuccess = () => resolve();
            });
        });
    }
}
_Cache_persistent_directory = new WeakMap(), _Cache_persistent = new WeakMap(), _Cache_instances = new WeakSet(), _Cache_getBrowserDB = function _Cache_getBrowserDB() {
    const indexedDB = Reflect.get(globalThis, 'indexedDB') || Reflect.get(globalThis, 'webkitIndexedDB') || Reflect.get(globalThis, 'mozIndexedDB') || Reflect.get(globalThis, 'msIndexedDB');
    if (!indexedDB)
        return console.log('IndexedDB is not supported. No cache will be used.');
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('youtubei.js', 1);
        request.onsuccess = function () {
            resolve(this.result);
        };
        request.onerror = function (event) {
            reject('indexedDB request error');
            console.error(event);
        };
        request.onupgradeneeded = function () {
            const store = this.result.createObjectStore('kv-store', {
                keyPath: 'k'
            });
            store.transaction.oncomplete = function () {
                resolve(this.db);
            };
        };
    });
};
Platform.load({
    runtime: 'browser',
    server: false,
    info: {
        version: package_json.version,
        bugs_url: package_json.bugs.url,
        repo_url: package_json.homepage.split('#')[0]
    },
    Cache: Cache,
    sha1Hash,
    uuidv4() {
        var _a;
        if ((_a = globalThis.crypto) === null || _a === void 0 ? void 0 : _a.randomUUID()) {
            return globalThis.crypto.randomUUID();
        }
        // See https://stackoverflow.com/a/2117523
        return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (cc) => {
            const c = parseInt(cc);
            return (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
    },
    eval: evaluate,
    DOMParser: globalThis.DOMParser,
    serializeDOM(document) {
        return new XMLSerializer().serializeToString(document);
    },
    fetch: globalThis.fetch,
    Request: globalThis.Request,
    Response: globalThis.Response,
    Headers: globalThis.Headers,
    FormData: globalThis.FormData,
    File: globalThis.File,
    ReadableStream: globalThis.ReadableStream
});
export * from './lib.js';
import Innertube from './lib.js';
export default Innertube;
//# sourceMappingURL=web.js.map