// Node.js Platform Support
var _a, _b;
var _Cache_instances, _Cache_persistent_directory, _Cache_persistent, _Cache_createCache;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
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
import { v4 as uuidv4 } from 'uuid';
import nodeFetch from 'node-fetch';
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
import CustomEvent from './polyfills/node-custom-event.js';
import { fileURLToPath } from 'url';
import evaluate from './jsruntime/jinter.js';
const meta_url = import.meta.url;
const is_cjs = !meta_url;
const __dirname__ = is_cjs ? __dirname : path.dirname(fileURLToPath(meta_url));
const package_json = JSON.parse(readFileSync(path.resolve(__dirname__, is_cjs ? '../package.json' : '../../package.json'), 'utf-8'));
const repo_url = (_a = package_json.homepage) === null || _a === void 0 ? void 0 : _a.split('#')[0];
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
        bugs_url: ((_b = package_json.bugs) === null || _b === void 0 ? void 0 : _b.url) || `${repo_url}/issues`,
        repo_url
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
        return uuidv4();
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
    ReadableStream: ReadableStream,
    CustomEvent: CustomEvent
});
export * from './lib.js';
import Innertube from './lib.js';
export default Innertube;
//# sourceMappingURL=node.js.map