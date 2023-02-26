// Node.js Platform Support
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
var _Cache_instances, _Cache_persistent_directory, _Cache_persistent, _Cache_createCache;
/*** Volumio-YouTube.js ***/
/*import {
  fetch as defaultFetch,
  Request,
  Response,
  Headers,
  FormData,
  File
} from 'undici';*/
// eslint-disable-next-line
import { ReadableStream } from 'web-streams-polyfill';
const uuid = require('uuid');
const nodeFetch = require('node-fetch');
const defaultFetch = nodeFetch.default;
const Headers = nodeFetch.Headers;
const Request = nodeFetch.Request;
const Response = nodeFetch.Response;
const FormData = null;
const File = null;
import { Platform } from '../utils/Utils.js';
import crypto from 'crypto';
import path from 'path';
import os from 'os';
import fs from 'fs/promises';
import { readFileSync } from 'fs';
import DOMParser from './polyfills/server-dom.js';
import { fileURLToPath } from 'url';
import evaluate from './jsruntime/jinter.js';
const meta_url = import.meta.url;
const is_cjs = !meta_url;
const __dirname__ = is_cjs ? __dirname : path.dirname(fileURLToPath(meta_url));
const package_json = JSON.parse(readFileSync(path.resolve(__dirname__, is_cjs ? '../package.json' : '../../package.json'), 'utf-8'));
class Cache {
    constructor(persistent = false, persistent_directory) {
        _Cache_instances.add(this);
        _Cache_persistent_directory.set(this, void 0);
        _Cache_persistent.set(this, void 0);
        __classPrivateFieldSet(this, _Cache_persistent_directory, persistent_directory || Cache.default_persistent_directory, "f");
        __classPrivateFieldSet(this, _Cache_persistent, persistent, "f");
    }
    static get temp_directory() {
        return `${os.tmpdir()}/youtubei.js`;
    }
    static get default_persistent_directory() {
        return path.resolve(__dirname__, '..', '..', '.cache', 'youtubei.js');
    }
    get cache_dir() {
        return __classPrivateFieldGet(this, _Cache_persistent, "f") ? __classPrivateFieldGet(this, _Cache_persistent_directory, "f") : Cache.temp_directory;
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _Cache_instances, "m", _Cache_createCache).call(this);
            const file = path.resolve(this.cache_dir, key);
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
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _Cache_instances, "m", _Cache_createCache).call(this);
            const file = path.resolve(this.cache_dir, key);
            yield fs.writeFile(file, new Uint8Array(value));
        });
    }
    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _Cache_instances, "m", _Cache_createCache).call(this);
            const file = path.resolve(this.cache_dir, key);
            try {
                yield fs.unlink(file);
            }
            catch (e) {
                if ((e === null || e === void 0 ? void 0 : e.code) === 'ENOENT')
                    return;
                throw e;
            }
        });
    }
}
_Cache_persistent_directory = new WeakMap(), _Cache_persistent = new WeakMap(), _Cache_instances = new WeakSet(), _Cache_createCache = function _Cache_createCache() {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = this.cache_dir;
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
    });
};
Platform.load({
    runtime: 'node',
    info: {
        version: package_json.version,
        bugs_url: package_json.bugs.url,
        repo_url: package_json.homepage.split('#')[0]
    },
    server: true,
    Cache: Cache,
    sha1Hash: (data) => __awaiter(void 0, void 0, void 0, function* () {
        return crypto.createHash('sha1').update(data).digest('hex');
    }),
    uuidv4() {
        /*** Volumio-YouTube.js ***/
        // crypto.randomUUID() available since Node v14.17.0.
        // OK for Volumio on x86, but not rPi which runs a lower version.
        //return crypto.randomUUID();
        return uuid.v4();
    },
    serializeDOM(document) {
        return document.toString();
    },
    eval: evaluate,
    DOMParser,
    fetch: defaultFetch,
    Request: Request,
    Response: Response,
    Headers: Headers,
    FormData: FormData,
    File: File,
    ReadableStream: ReadableStream
});
export * from './lib.js';
import Innertube from './lib.js';
export default Innertube;
//# sourceMappingURL=node.js.map