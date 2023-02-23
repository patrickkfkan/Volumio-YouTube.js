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
var _UniversalCache_cache;
import { Platform } from './Utils.js';
export default class UniversalCache {
    constructor(persistent, persistent_directory) {
        _UniversalCache_cache.set(this, void 0);
        __classPrivateFieldSet(this, _UniversalCache_cache, new Platform.shim.Cache(persistent, persistent_directory), "f");
    }
    get cache_dir() {
        return __classPrivateFieldGet(this, _UniversalCache_cache, "f").cache_dir;
    }
    get(key) {
        return __classPrivateFieldGet(this, _UniversalCache_cache, "f").get(key);
    }
    set(key, value) {
        return __classPrivateFieldGet(this, _UniversalCache_cache, "f").set(key, value);
    }
    remove(key) {
        return __classPrivateFieldGet(this, _UniversalCache_cache, "f").remove(key);
    }
}
_UniversalCache_cache = new WeakMap();
//# sourceMappingURL=Cache.js.map