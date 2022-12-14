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
var _UniversalCache_instances, _UniversalCache_persistent_directory, _UniversalCache_persistent, _UniversalCache_createCache, _UniversalCache_getBrowserDB;
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
// Browser Cache is based off:
// https://github.com/elias551/simple-kvs/blob/master/src/index.ts
class UniversalCache {
    constructor(persistent = false, persistent_directory) {
        _UniversalCache_instances.add(this);
        _UniversalCache_persistent_directory.set(this, void 0);
        _UniversalCache_persistent.set(this, void 0);
        __classPrivateFieldSet(this, _UniversalCache_persistent_directory, persistent_directory || UniversalCache.default_persistent_directory, "f");
        __classPrivateFieldSet(this, _UniversalCache_persistent, persistent, "f");
    }
    static get temp_directory() {
        switch ((0, Utils_1.getRuntime)()) {
            case 'deno':
                const Deno = Reflect.get(globalThis, 'Deno');
                return `${Deno.env.get('TMPDIR') || Deno.env.get('TMP') || Deno.env.get('TEMP') || '/tmp'}/youtubei.js`;
            case 'node':
                return `${Reflect.get(module, 'require')('os').tmpdir()}/youtubei.js`;
            default:
                return '';
        }
    }
    static get default_persistent_directory() {
        switch ((0, Utils_1.getRuntime)()) {
            case 'deno':
                const Deno = Reflect.get(globalThis, 'Deno');
                return `${Deno.cwd()}/.cache/youtubei.js`;
            case 'node':
                return Reflect.get(module, 'require')('path').resolve(__dirname, '..', '..', '.cache', 'youtubei.js');
            default:
                return '';
        }
    }
    get cache_dir() {
        return __classPrivateFieldGet(this, _UniversalCache_persistent, "f") ? __classPrivateFieldGet(this, _UniversalCache_persistent_directory, "f") : UniversalCache.temp_directory;
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _UniversalCache_instances, "m", _UniversalCache_createCache).call(this);
            switch ((0, Utils_1.getRuntime)()) {
                case 'deno':
                    {
                        const file = `${this.cache_dir}/${key}`;
                        const Deno = Reflect.get(globalThis, 'Deno');
                        try {
                            const stat = yield Deno.stat(file);
                            if (stat.isFile) {
                                const data = yield Deno.readFile(file);
                                return data.buffer;
                            }
                            throw new Error('An unexpected file was found in place of the cache key');
                        }
                        catch (e) {
                            if (e instanceof Deno.errors.NotFound)
                                return undefined;
                            throw e;
                        }
                    }
                case 'node':
                    {
                        const fs = Reflect.get(module, 'require')('fs/promises');
                        const file = Reflect.get(module, 'require')('path').resolve(this.cache_dir, key);
                        try {
                            const stat = yield fs.stat(file);
                            if (stat.isFile()) {
                                const data = yield fs.readFile(file);
                                return data.buffer;
                            }
                            throw new Error('An unexpected file was found in place of the cache key');
                        }
                        catch (e) {
                            if ((e === null || e === void 0 ? void 0 : e.code) === 'ENOENT')
                                return undefined;
                            throw e;
                        }
                    }
                case 'browser':
                    {
                        const db = yield __classPrivateFieldGet(this, _UniversalCache_instances, "m", _UniversalCache_getBrowserDB).call(this);
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
                    }
            }
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _UniversalCache_instances, "m", _UniversalCache_createCache).call(this);
            switch ((0, Utils_1.getRuntime)()) {
                case 'deno':
                    {
                        const Deno = Reflect.get(globalThis, 'Deno');
                        const file = `${this.cache_dir}/${key}`;
                        yield Deno.writeFile(file, new Uint8Array(value));
                    }
                    break;
                case 'node':
                    {
                        const fs = Reflect.get(module, 'require')('fs/promises');
                        const file = Reflect.get(module, 'require')('path').resolve(this.cache_dir, key);
                        yield fs.writeFile(file, new Uint8Array(value));
                    }
                    break;
                case 'browser':
                    {
                        const db = yield __classPrivateFieldGet(this, _UniversalCache_instances, "m", _UniversalCache_getBrowserDB).call(this);
                        if (!db)
                            return;
                        return new Promise((resolve, reject) => {
                            const request = db.transaction('kv-store', 'readwrite').objectStore('kv-store').put({ k: key, v: value });
                            request.onerror = reject;
                            request.onsuccess = () => resolve();
                        });
                    }
                    break;
            }
        });
    }
    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _UniversalCache_instances, "m", _UniversalCache_createCache).call(this);
            switch ((0, Utils_1.getRuntime)()) {
                case 'deno':
                    {
                        const file = `${this.cache_dir}/${key}`;
                        const Deno = Reflect.get(globalThis, 'Deno');
                        try {
                            yield Deno.remove(file);
                        }
                        catch (e) {
                            if (e instanceof Deno.errors.NotFound)
                                return undefined;
                            throw e;
                        }
                    }
                    break;
                case 'node':
                    {
                        const fs = Reflect.get(module, 'require')('fs/promises');
                        const file = Reflect.get(module, 'require')('path').resolve(this.cache_dir, key);
                        try {
                            yield fs.unlink(file);
                        }
                        catch (e) {
                            if ((e === null || e === void 0 ? void 0 : e.code) === 'ENOENT')
                                return;
                            throw e;
                        }
                    }
                    break;
                case 'browser':
                    {
                        const db = yield __classPrivateFieldGet(this, _UniversalCache_instances, "m", _UniversalCache_getBrowserDB).call(this);
                        if (!db)
                            return;
                        return new Promise((resolve, reject) => {
                            const request = db.transaction('kv-store', 'readwrite').objectStore('kv-store').delete(key);
                            request.onerror = reject;
                            request.onsuccess = () => resolve();
                        });
                    }
            }
        });
    }
}
exports.default = UniversalCache;
_UniversalCache_persistent_directory = new WeakMap(), _UniversalCache_persistent = new WeakMap(), _UniversalCache_instances = new WeakSet(), _UniversalCache_createCache = function _UniversalCache_createCache() {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = this.cache_dir;
        switch ((0, Utils_1.getRuntime)()) {
            case 'deno':
                const Deno = Reflect.get(globalThis, 'Deno');
                try {
                    const cwd = yield Deno.stat(dir);
                    if (!cwd.isDirectory)
                        throw new Error('An unexpected file was found in place of the cache directory');
                }
                catch (e) {
                    if (e instanceof Deno.errors.NotFound)
                        yield Deno.mkdir(dir, { recursive: true });
                    else
                        throw e;
                }
                break;
            case 'node':
                const fs = Reflect.get(module, 'require')('fs/promises');
                try {
                    const cwd = yield fs.stat(dir);
                    if (!cwd.isDirectory())
                        throw new Error('An unexpected file was found in place of the cache directory');
                }
                catch (e) {
                    if ((e === null || e === void 0 ? void 0 : e.code) === 'ENOENT')
                        yield fs.mkdir(dir, { recursive: true });
                    else
                        throw e;
                }
                break;
        }
    });
}, _UniversalCache_getBrowserDB = function _UniversalCache_getBrowserDB() {
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
//# sourceMappingURL=Cache.js.map