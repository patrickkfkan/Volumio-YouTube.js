/* eslint-disable */
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/event-target-polyfill/index.js
var require_event_target_polyfill = __commonJS({
  "node_modules/event-target-polyfill/index.js"() {
    var root = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof globalThis !== "undefined" && globalThis;
    function isConstructor(fn) {
      try {
        new fn();
      } catch (error) {
        return false;
      }
      return true;
    }
    __name(isConstructor, "isConstructor");
    if (typeof root.Event !== "function" || !isConstructor(root.Event)) {
      root.Event = function() {
        function Event2(type, options) {
          this.bubbles = !!options && !!options.bubbles;
          this.cancelable = !!options && !!options.cancelable;
          this.composed = !!options && !!options.composed;
          this.type = type;
        }
        __name(Event2, "Event");
        return Event2;
      }();
    }
    if (typeof root.EventTarget === "undefined" || !isConstructor(root.Event)) {
      root.EventTarget = function() {
        function EventTarget2() {
          this.__listeners = /* @__PURE__ */ new Map();
        }
        __name(EventTarget2, "EventTarget");
        EventTarget2.prototype = Object.create(Object.prototype);
        EventTarget2.prototype.addEventListener = function(type, listener, options) {
          if (arguments.length < 2) {
            throw new TypeError(
              `TypeError: Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only ${arguments.length} present.`
            );
          }
          const __listeners = this.__listeners;
          const actualType = type.toString();
          if (!__listeners.has(actualType)) {
            __listeners.set(actualType, /* @__PURE__ */ new Map());
          }
          const listenersForType = __listeners.get(actualType);
          if (!listenersForType.has(listener)) {
            listenersForType.set(listener, options);
          }
        };
        EventTarget2.prototype.removeEventListener = function(type, listener, _options) {
          if (arguments.length < 2) {
            throw new TypeError(
              `TypeError: Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only ${arguments.length} present.`
            );
          }
          const __listeners = this.__listeners;
          const actualType = type.toString();
          if (__listeners.has(actualType)) {
            const listenersForType = __listeners.get(actualType);
            if (listenersForType.has(listener)) {
              listenersForType.delete(listener);
            }
          }
        };
        EventTarget2.prototype.dispatchEvent = function(event) {
          if (!(event instanceof Event)) {
            throw new TypeError(
              `Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'.`
            );
          }
          const type = event.type;
          const __listeners = this.__listeners;
          const listenersForType = __listeners.get(type);
          if (listenersForType) {
            for (const [listener, options] of listenersForType.entries()) {
              try {
                if (typeof listener === "function") {
                  listener.call(this, event);
                } else if (listener && typeof listener.handleEvent === "function") {
                  listener.handleEvent(event);
                }
              } catch (err) {
                setTimeout(() => {
                  throw err;
                });
              }
              if (options && options.once) {
                listenersForType.delete(listener);
              }
            }
          }
          return true;
        };
        return EventTarget2;
      }();
    }
  }
});

// node_modules/tslib/tslib.es6.mjs
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
__name(__setFunctionName, "__setFunctionName");
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
__name(__awaiter, "__awaiter");
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(__values, "__values");
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
__name(__await, "__await");
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  __name(verb, "verb");
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  __name(resume, "resume");
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
  __name(settle, "settle");
}
__name(__asyncGenerator, "__asyncGenerator");
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
  __name(settle, "settle");
}
__name(__asyncValues, "__asyncValues");
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
__name(__classPrivateFieldGet, "__classPrivateFieldGet");
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
__name(__classPrivateFieldSet, "__classPrivateFieldSet");

// dist/src/utils/Utils.js
var Utils_exports = {};
__export(Utils_exports, {
  ChannelError: () => ChannelError,
  InnertubeError: () => InnertubeError,
  MissingParamError: () => MissingParamError,
  OAuthError: () => OAuthError,
  ParsingError: () => ParsingError,
  Platform: () => Platform,
  PlayerError: () => PlayerError,
  SessionError: () => SessionError,
  base64ToU8: () => base64ToU8,
  concatMemos: () => concatMemos,
  debugFetch: () => debugFetch,
  deepCompare: () => deepCompare,
  escapeStringRegexp: () => escapeStringRegexp,
  findFunction: () => findFunction,
  generateRandomString: () => generateRandomString,
  generateSidAuth: () => generateSidAuth,
  getRandomUserAgent: () => getRandomUserAgent,
  getStringBetweenStrings: () => getStringBetweenStrings,
  hasKeys: () => hasKeys,
  isTextRun: () => isTextRun,
  streamToIterable: () => streamToIterable,
  throwIfMissing: () => throwIfMissing,
  timeToSeconds: () => timeToSeconds,
  u8ToBase64: () => u8ToBase64
});

// dist/src/parser/helpers.js
var helpers_exports = {};
__export(helpers_exports, {
  Maybe: () => Maybe,
  Memo: () => Memo,
  SuperParsedResult: () => SuperParsedResult,
  YTNode: () => YTNode,
  observe: () => observe
});
var _YTNode_instances;
var _YTNode_is;
var _Maybe_instances;
var _Maybe_value;
var _Maybe_checkPrimative;
var _Maybe_assertPrimative;
var _SuperParsedResult_result;
var isObserved = Symbol("ObservedArray.isObserved");
var YTNode = class {
  constructor() {
    _YTNode_instances.add(this);
    this.type = this.constructor.type;
  }
  is(...types2) {
    return types2.some((type) => __classPrivateFieldGet(this, _YTNode_instances, "m", _YTNode_is).call(this, type));
  }
  as(...types2) {
    if (!this.is(...types2)) {
      throw new ParsingError(`Cannot cast ${this.type} to one of ${types2.map((t) => t.type).join(", ")}`);
    }
    return this;
  }
  hasKey(key) {
    return Reflect.has(this, key);
  }
  key(key) {
    if (!this.hasKey(key)) {
      throw new ParsingError(`Missing key ${key}`);
    }
    return new Maybe(this[key]);
  }
};
__name(YTNode, "YTNode");
_YTNode_instances = /* @__PURE__ */ new WeakSet(), _YTNode_is = /* @__PURE__ */ __name(function _YTNode_is2(type) {
  return this.type === type.type;
}, "_YTNode_is");
YTNode.type = "YTNode";
var Maybe = class {
  constructor(value) {
    _Maybe_instances.add(this);
    _Maybe_value.set(this, void 0);
    __classPrivateFieldSet(this, _Maybe_value, value, "f");
  }
  get typeof() {
    return typeof __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  string() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "string");
  }
  isString() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "string");
  }
  number() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "number");
  }
  isNumber() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "number");
  }
  bigint() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "bigint");
  }
  isBigint() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "bigint");
  }
  boolean() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "boolean");
  }
  isBoolean() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "boolean");
  }
  symbol() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "symbol");
  }
  isSymbol() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "symbol");
  }
  undefined() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "undefined");
  }
  isUndefined() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "undefined");
  }
  null() {
    if (__classPrivateFieldGet(this, _Maybe_value, "f") !== null)
      throw new TypeError(`Expected null, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  isNull() {
    return __classPrivateFieldGet(this, _Maybe_value, "f") === null;
  }
  object() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "object");
  }
  isObject() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "object");
  }
  function() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "function");
  }
  isFunction() {
    return __classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "function");
  }
  array() {
    if (!Array.isArray(__classPrivateFieldGet(this, _Maybe_value, "f"))) {
      throw new TypeError(`Expected array, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  arrayOfMaybe() {
    const arrayProps = [];
    return new Proxy(this.array(), {
      get(target, prop) {
        if (Reflect.has(arrayProps, prop)) {
          return Reflect.get(target, prop);
        }
        return new Maybe(Reflect.get(target, prop));
      }
    });
  }
  isArray() {
    return Array.isArray(__classPrivateFieldGet(this, _Maybe_value, "f"));
  }
  node() {
    if (!(__classPrivateFieldGet(this, _Maybe_value, "f") instanceof YTNode)) {
      throw new TypeError(`Expected YTNode, got ${__classPrivateFieldGet(this, _Maybe_value, "f").constructor.name}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  isNode() {
    return __classPrivateFieldGet(this, _Maybe_value, "f") instanceof YTNode;
  }
  nodeOfType(...types2) {
    return this.node().as(...types2);
  }
  isNodeOfType(...types2) {
    return this.isNode() && this.node().is(...types2);
  }
  observed() {
    if (!this.isObserved()) {
      throw new TypeError(`Expected ObservedArray, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  isObserved() {
    var _a7;
    return (_a7 = __classPrivateFieldGet(this, _Maybe_value, "f")) === null || _a7 === void 0 ? void 0 : _a7[isObserved];
  }
  parsed() {
    if (!(__classPrivateFieldGet(this, _Maybe_value, "f") instanceof SuperParsedResult)) {
      throw new TypeError(`Expected SuperParsedResult, got ${typeof __classPrivateFieldGet(this, _Maybe_value, "f")}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  isParsed() {
    return __classPrivateFieldGet(this, _Maybe_value, "f") instanceof SuperParsedResult;
  }
  any() {
    console.warn("This call is not meant to be used outside of debugging. Please use the specific type getter instead.");
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  instanceof(type) {
    if (!this.isInstanceof(type)) {
      throw new TypeError(`Expected instance of ${type.name}, got ${__classPrivateFieldGet(this, _Maybe_value, "f").constructor.name}`);
    }
    return __classPrivateFieldGet(this, _Maybe_value, "f");
  }
  isInstanceof(type) {
    return __classPrivateFieldGet(this, _Maybe_value, "f") instanceof type;
  }
};
__name(Maybe, "Maybe");
_Maybe_value = /* @__PURE__ */ new WeakMap(), _Maybe_instances = /* @__PURE__ */ new WeakSet(), _Maybe_checkPrimative = /* @__PURE__ */ __name(function _Maybe_checkPrimative2(type) {
  if (typeof __classPrivateFieldGet(this, _Maybe_value, "f") !== type) {
    return false;
  }
  return true;
}, "_Maybe_checkPrimative"), _Maybe_assertPrimative = /* @__PURE__ */ __name(function _Maybe_assertPrimative2(type) {
  if (!__classPrivateFieldGet(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, type)) {
    throw new TypeError(`Expected ${type}, got ${this.typeof}`);
  }
  return __classPrivateFieldGet(this, _Maybe_value, "f");
}, "_Maybe_assertPrimative");
var SuperParsedResult = class {
  constructor(result) {
    _SuperParsedResult_result.set(this, void 0);
    __classPrivateFieldSet(this, _SuperParsedResult_result, result, "f");
  }
  get is_null() {
    return __classPrivateFieldGet(this, _SuperParsedResult_result, "f") === null;
  }
  get is_array() {
    return !this.is_null && Array.isArray(__classPrivateFieldGet(this, _SuperParsedResult_result, "f"));
  }
  get is_node() {
    return !this.is_array;
  }
  array() {
    if (!this.is_array) {
      throw new TypeError("Expected an array, got a node");
    }
    return __classPrivateFieldGet(this, _SuperParsedResult_result, "f");
  }
  item() {
    if (!this.is_node) {
      throw new TypeError("Expected a node, got an array");
    }
    return __classPrivateFieldGet(this, _SuperParsedResult_result, "f");
  }
};
__name(SuperParsedResult, "SuperParsedResult");
_SuperParsedResult_result = /* @__PURE__ */ new WeakMap();
function observe(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      if (prop == "get") {
        return (rule, del_item) => target.find((obj2, index) => {
          const match = deepCompare(rule, obj2);
          if (match && del_item) {
            target.splice(index, 1);
          }
          return match;
        });
      }
      if (prop == isObserved) {
        return true;
      }
      if (prop == "getAll") {
        return (rule, del_items) => target.filter((obj2, index) => {
          const match = deepCompare(rule, obj2);
          if (match && del_items) {
            target.splice(index, 1);
          }
          return match;
        });
      }
      if (prop == "matchCondition") {
        return (condition) => target.find((obj2) => {
          return condition(obj2);
        });
      }
      if (prop == "filterType") {
        return (...types2) => {
          return observe(target.filter((node) => {
            if (node.is(...types2))
              return true;
            return false;
          }));
        };
      }
      if (prop == "firstOfType") {
        return (...types2) => {
          return target.find((node) => {
            if (node.is(...types2))
              return true;
            return false;
          });
        };
      }
      if (prop == "first") {
        return () => target[0];
      }
      if (prop == "as") {
        return (...types2) => {
          return observe(target.map((node) => {
            if (node.is(...types2))
              return node;
            throw new ParsingError(`Expected node of any type ${types2.map((type) => type.type).join(", ")}, got ${node.type}`);
          }));
        };
      }
      if (prop == "remove") {
        return (index) => target.splice(index, 1);
      }
      return Reflect.get(target, prop);
    }
  });
}
__name(observe, "observe");
var Memo = class extends Map {
  getType(...types2) {
    types2 = types2.flat();
    return observe(types2.flatMap((type) => this.get(type.type) || []));
  }
};
__name(Memo, "Memo");

// dist/src/parser/misc.js
var misc_exports = {};
__export(misc_exports, {
  Author: () => Author_default,
  ChildElement: () => ChildElement_default,
  EmojiRun: () => EmojiRun,
  Format: () => Format,
  Text: () => Text,
  TextRun: () => TextRun,
  Thumbnail: () => Thumbnail,
  VideoDetails: () => VideoDetails
});

// dist/src/utils/Constants.js
var Constants_exports = {};
__export(Constants_exports, {
  CLIENTS: () => CLIENTS,
  INNERTUBE_HEADERS_BASE: () => INNERTUBE_HEADERS_BASE,
  OAUTH: () => OAUTH,
  STREAM_HEADERS: () => STREAM_HEADERS,
  URLS: () => URLS
});
var URLS = Object.freeze({
  YT_BASE: "https://www.youtube.com",
  YT_MUSIC_BASE: "https://music.youtube.com",
  YT_SUGGESTIONS: "https://suggestqueries.google.com/complete/",
  YT_UPLOAD: "https://upload.youtube.com/",
  API: Object.freeze({
    BASE: "https://youtubei.googleapis.com",
    PRODUCTION_1: "https://www.youtube.com/youtubei/",
    PRODUCTION_2: "https://youtubei.googleapis.com/youtubei/",
    STAGING: "https://green-youtubei.sandbox.googleapis.com/youtubei/",
    RELEASE: "https://release-youtubei.sandbox.googleapis.com/youtubei/",
    TEST: "https://test-youtubei.sandbox.googleapis.com/youtubei/",
    CAMI: "http://cami-youtubei.sandbox.googleapis.com/youtubei/",
    UYTFE: "https://uytfe.sandbox.google.com/youtubei/"
  })
});
var OAUTH = Object.freeze({
  SCOPE: "http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content",
  GRANT_TYPE: "http://oauth.net/grant_type/device/1.0",
  MODEL_NAME: "ytlr::",
  HEADERS: Object.freeze({
    "accept": "*/*",
    "origin": "https://www.youtube.com",
    "user-agent": "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version",
    "content-type": "application/json",
    "referer": "https://www.youtube.com/tv",
    "accept-language": "en-US"
  }),
  REGEX: Object.freeze({
    AUTH_SCRIPT: /<script id="base-js" src="(.*?)" nonce=".*?"><\/script>/,
    CLIENT_IDENTITY: new RegExp('var .+?={clientId:"(?<client_id>.+?)",.+?:"(?<client_secret>.+?)".+?}')
  })
});
var CLIENTS = Object.freeze({
  WEB: {
    NAME: "WEB",
    VERSION: "2.20230104.01.00",
    API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    API_VERSION: "v1",
    STATIC_VISITOR_ID: "6zpwvWUNAco"
  },
  WEB_KIDS: {
    NAME: "WEB_KIDS",
    VERSION: "2.20230111.00.00"
  },
  YTMUSIC: {
    NAME: "WEB_REMIX",
    VERSION: "1.20211213.00.00"
  },
  ANDROID: {
    NAME: "ANDROID",
    VERSION: "18.06.35",
    SDK_VERSION: "29",
    USER_AGENT: "com.google.android.youtube/18.06.35 (Linux; U; Android 10; US)"
  },
  YTSTUDIO_ANDROID: {
    NAME: "ANDROID_CREATOR",
    VERSION: "22.43.101"
  },
  YTMUSIC_ANDROID: {
    NAME: "ANDROID_MUSIC",
    VERSION: "7.07.51"
  },
  TV_EMBEDDED: {
    NAME: "TVHTML5_SIMPLY_EMBEDDED_PLAYER",
    VERSION: "2.0"
  }
});
var STREAM_HEADERS = Object.freeze({
  "accept": "*/*",
  "origin": "https://www.youtube.com",
  "referer": "https://www.youtube.com",
  "DNT": "?1"
});
var INNERTUBE_HEADERS_BASE = Object.freeze({
  "accept": "*/*",
  "accept-encoding": "gzip, deflate",
  "content-type": "application/json"
});

// dist/src/parser/classes/AudioOnlyPlayability.js
var AudioOnlyPlayability = class extends YTNode {
  constructor(data2) {
    super();
    this.audio_only_availability = data2.audioOnlyAvailability;
  }
};
__name(AudioOnlyPlayability, "AudioOnlyPlayability");
AudioOnlyPlayability.type = "AudioOnlyPlayability";
var AudioOnlyPlayability_default = AudioOnlyPlayability;

// dist/src/utils/Cache.js
var _UniversalCache_cache;
var UniversalCache = class {
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
};
__name(UniversalCache, "UniversalCache");
_UniversalCache_cache = /* @__PURE__ */ new WeakMap();
var Cache_default = UniversalCache;

// dist/src/utils/EventEmitterLike.js
var _EventEmitterLike_legacy_listeners;
require_event_target_polyfill();
var EventEmitterLike = class extends EventTarget {
  constructor() {
    super();
    _EventEmitterLike_legacy_listeners.set(this, /* @__PURE__ */ new Map());
  }
  emit(type, ...args) {
    const event = new Platform.shim.CustomEvent(type, { detail: args });
    this.dispatchEvent(event);
  }
  on(type, listener) {
    const wrapper = /* @__PURE__ */ __name((ev) => {
      if (ev instanceof Platform.shim.CustomEvent) {
        listener(...ev.detail);
      } else {
        listener(ev);
      }
    }, "wrapper");
    __classPrivateFieldGet(this, _EventEmitterLike_legacy_listeners, "f").set(listener, wrapper);
    this.addEventListener(type, wrapper);
  }
  once(type, listener) {
    const wrapper = /* @__PURE__ */ __name((ev) => {
      if (ev instanceof Platform.shim.CustomEvent) {
        listener(...ev.detail);
      } else {
        listener(ev);
      }
      this.off(type, listener);
    }, "wrapper");
    __classPrivateFieldGet(this, _EventEmitterLike_legacy_listeners, "f").set(listener, wrapper);
    this.addEventListener(type, wrapper);
  }
  off(type, listener) {
    const wrapper = __classPrivateFieldGet(this, _EventEmitterLike_legacy_listeners, "f").get(listener);
    if (wrapper) {
      this.removeEventListener(type, wrapper);
      __classPrivateFieldGet(this, _EventEmitterLike_legacy_listeners, "f").delete(listener);
    }
  }
};
__name(EventEmitterLike, "EventEmitterLike");
_EventEmitterLike_legacy_listeners = /* @__PURE__ */ new WeakMap();
var EventEmitterLike_default = EventEmitterLike;

// dist/src/utils/FormatUtils.js
var _a;
var _FormatUtils_el;
var _FormatUtils_generateAdaptationSet;
var _FormatUtils_generateRepresentationVideo;
var _FormatUtils_generateRepresentationAudio;
var _FormatUtils_generateSegmentInformation;
var _FormatUtils_getOTFSegmentInformation;
var FormatUtils = class {
  static download(options, actions, playability_status, streaming_data, player, cpn) {
    return __awaiter(this, void 0, void 0, function* () {
      if ((playability_status === null || playability_status === void 0 ? void 0 : playability_status.status) === "UNPLAYABLE")
        throw new InnertubeError("Video is unplayable", { error_type: "UNPLAYABLE" });
      if ((playability_status === null || playability_status === void 0 ? void 0 : playability_status.status) === "LOGIN_REQUIRED")
        throw new InnertubeError("Video is login required", { error_type: "LOGIN_REQUIRED" });
      if (!streaming_data)
        throw new InnertubeError("Streaming data not available.", { error_type: "NO_STREAMING_DATA" });
      const opts = Object.assign({ quality: "360p", type: "video+audio", format: "mp4", range: void 0 }, options);
      const format = this.chooseFormat(opts, streaming_data);
      const format_url = format.decipher(player);
      if (opts.type === "video+audio" && !options.range) {
        const response = yield actions.session.http.fetch_function(`${format_url}&cpn=${cpn}`, {
          method: "GET",
          headers: STREAM_HEADERS,
          redirect: "follow"
        });
        if (!response.ok)
          throw new InnertubeError("The server responded with a non 2xx status code", { error_type: "FETCH_FAILED", response });
        const body = response.body;
        if (!body)
          throw new InnertubeError("Could not get ReadableStream from fetch Response.", { error_type: "FETCH_FAILED", response });
        return body;
      }
      const chunk_size = 1048576 * 10;
      let chunk_start = options.range ? options.range.start : 0;
      let chunk_end = options.range ? options.range.end : chunk_size;
      let must_end = false;
      let cancel;
      const readable_stream = new Platform.shim.ReadableStream({
        start() {
        },
        pull: (controller) => __awaiter(this, void 0, void 0, function* () {
          if (must_end) {
            controller.close();
            return;
          }
          if (chunk_end >= (format.content_length ? format.content_length : 0) || options.range) {
            must_end = true;
          }
          return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _b, e_1, _c, _d;
            try {
              cancel = new AbortController();
              const response = yield actions.session.http.fetch_function(`${format_url}&cpn=${cpn}&range=${chunk_start}-${chunk_end || ""}`, {
                method: "GET",
                headers: Object.assign(
                  {},
                  STREAM_HEADERS
                ),
                signal: cancel.signal
              });
              const body = response.body;
              if (!body)
                throw new InnertubeError("Could not get ReadableStream from fetch Response.", { video: this, error_type: "FETCH_FAILED", response });
              try {
                for (var _e = true, _f = __asyncValues(streamToIterable(body)), _g; _g = yield _f.next(), _b = _g.done, !_b; _e = true) {
                  _d = _g.value;
                  _e = false;
                  const chunk = _d;
                  controller.enqueue(chunk);
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (!_e && !_b && (_c = _f.return))
                    yield _c.call(_f);
                } finally {
                  if (e_1)
                    throw e_1.error;
                }
              }
              chunk_start = chunk_end + 1;
              chunk_end += chunk_size;
              resolve();
              return;
            } catch (e) {
              reject(e);
            }
          }));
        }),
        cancel(reason) {
          return __awaiter(this, void 0, void 0, function* () {
            cancel.abort(reason);
          });
        }
      }, {
        highWaterMark: 1,
        size(chunk) {
          return chunk.byteLength;
        }
      });
      return readable_stream;
    });
  }
  static chooseFormat(options, streaming_data) {
    if (!streaming_data)
      throw new InnertubeError("Streaming data not available");
    const formats = [
      ...streaming_data.formats || [],
      ...streaming_data.adaptive_formats || []
    ];
    const requires_audio = options.type ? options.type.includes("audio") : true;
    const requires_video = options.type ? options.type.includes("video") : true;
    const language = options.language || "original";
    const quality = options.quality || "best";
    let best_width = -1;
    const is_best = ["best", "bestefficiency"].includes(quality);
    const use_most_efficient = quality !== "best";
    let candidates = formats.filter((format) => {
      if (requires_audio && !format.has_audio)
        return false;
      if (requires_video && !format.has_video)
        return false;
      if (options.format !== "any" && !format.mime_type.includes(options.format || "mp4"))
        return false;
      if (!is_best && format.quality_label !== quality)
        return false;
      if (best_width < format.width)
        best_width = format.width;
      return true;
    });
    if (!candidates.length)
      throw new InnertubeError("No matching formats found", { options });
    if (is_best && requires_video)
      candidates = candidates.filter((format) => format.width === best_width);
    if (requires_audio && !requires_video) {
      const audio_only = candidates.filter((format) => {
        if (language !== "original") {
          return !format.has_video && format.language === language;
        }
        return !format.has_video && format.is_original;
      });
      if (audio_only.length > 0) {
        candidates = audio_only;
      }
    }
    if (use_most_efficient) {
      candidates.sort((a, b) => a.bitrate - b.bitrate);
    } else {
      candidates.sort((a, b) => b.bitrate - a.bitrate);
    }
    return candidates[0];
  }
  static toDash(streaming_data, url_transformer = (url) => url, format_filter, cpn, player, actions) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!streaming_data)
        throw new InnertubeError("Streaming data not available");
      let adaptive_formats;
      if (format_filter) {
        adaptive_formats = streaming_data.adaptive_formats.filter((fmt) => !format_filter(fmt));
      } else {
        adaptive_formats = streaming_data.adaptive_formats;
      }
      if (!adaptive_formats.length)
        throw new InnertubeError("No adaptive formats found");
      const length = adaptive_formats[0].approx_duration_ms / 1e3;
      const document = new Platform.shim.DOMParser().parseFromString('<?xml version="1.0" encoding="utf-8"?><MPD />', "application/xml");
      const mpd = document.querySelector("MPD");
      const period = document.createElement("Period");
      mpd.replaceWith(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "MPD", {
        xmlns: "urn:mpeg:dash:schema:mpd:2011",
        minBufferTime: "PT1.500S",
        profiles: "urn:mpeg:dash:profile:isoff-main:2011",
        type: "static",
        mediaPresentationDuration: `PT${length}S`,
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xsi:schemaLocation": "urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
      }, [
        period
      ]));
      yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateAdaptationSet).call(this, document, period, adaptive_formats, url_transformer, cpn, player, actions);
      return Platform.shim.serializeDOM(document);
    });
  }
};
__name(FormatUtils, "FormatUtils");
_a = FormatUtils, _FormatUtils_el = /* @__PURE__ */ __name(function _FormatUtils_el2(document, tag, attrs, children = []) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    value && el.setAttribute(key, value);
  }
  for (const child of children) {
    if (typeof child === "undefined")
      continue;
    el.appendChild(child);
  }
  return el;
}, "_FormatUtils_el"), _FormatUtils_generateAdaptationSet = /* @__PURE__ */ __name(function _FormatUtils_generateAdaptationSet2(document, period, formats, url_transformer, cpn, player, actions) {
  var _b, _c, _d;
  return __awaiter(this, void 0, void 0, function* () {
    const mime_types = [];
    const mime_objects = [[]];
    formats.forEach((video_format) => {
      if ((!video_format.index_range || !video_format.init_range) && !video_format.is_type_otf) {
        return;
      }
      const mime_type = video_format.mime_type;
      const mime_type_index = mime_types.indexOf(mime_type);
      if (mime_type_index > -1) {
        mime_objects[mime_type_index].push(video_format);
      } else {
        mime_types.push(mime_type);
        mime_objects.push([]);
        mime_objects[mime_types.length - 1].push(video_format);
      }
    });
    let set_id = 0;
    for (let i = 0; i < mime_types.length; i++) {
      if (mime_objects[i][0].has_audio && mime_objects[i][0].audio_track) {
        const track_ids = [];
        const track_objects = [[]];
        mime_objects[i].forEach((format) => {
          var _b2, _c2;
          const id_index = track_ids.indexOf((_b2 = format.audio_track) === null || _b2 === void 0 ? void 0 : _b2.id);
          if (id_index > -1) {
            track_objects[id_index].push(format);
          } else {
            track_ids.push((_c2 = format.audio_track) === null || _c2 === void 0 ? void 0 : _c2.id);
            track_objects.push([]);
            track_objects[track_ids.length - 1].push(format);
          }
        });
        for (let j = 0; j < track_ids.length; j++) {
          const first_format = track_objects[j][0];
          const children = [];
          let role;
          if ((_b = first_format.audio_track) === null || _b === void 0 ? void 0 : _b.audio_is_default) {
            role = "main";
          } else if (first_format.is_dubbed) {
            role = "dub";
          } else if (first_format.is_descriptive) {
            role = "description";
          } else {
            role = "alternate";
          }
          children.push(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "Role", {
            schemeIdUri: "urn:mpeg:dash:role:2011",
            value: role
          }), __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "Label", {
            id: set_id.toString()
          }, [
            document.createTextNode((_c = first_format.audio_track) === null || _c === void 0 ? void 0 : _c.display_name)
          ]));
          const set = __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "AdaptationSet", {
            id: `${set_id++}`,
            mimeType: mime_types[i].split(";")[0],
            startWithSAP: "1",
            subsegmentAlignment: "true",
            lang: first_format.language,
            label: (_d = first_format.audio_track) === null || _d === void 0 ? void 0 : _d.display_name
          }, children);
          period.appendChild(set);
          for (const format of track_objects[j]) {
            yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateRepresentationAudio).call(this, document, set, format, url_transformer, cpn, player, actions);
          }
        }
      } else {
        const set = __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "AdaptationSet", {
          id: `${set_id++}`,
          mimeType: mime_types[i].split(";")[0],
          startWithSAP: "1",
          subsegmentAlignment: "true"
        });
        period.appendChild(set);
        for (const format of mime_objects[i]) {
          if (format.has_video) {
            yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateRepresentationVideo).call(this, document, set, format, url_transformer, cpn, player, actions);
          } else {
            yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateRepresentationAudio).call(this, document, set, format, url_transformer, cpn, player, actions);
          }
        }
      }
    }
  });
}, "_FormatUtils_generateAdaptationSet"), _FormatUtils_generateRepresentationVideo = /* @__PURE__ */ __name(function _FormatUtils_generateRepresentationVideo2(document, set, format, url_transformer, cpn, player, actions) {
  var _b, _c, _d, _e, _f, _g;
  return __awaiter(this, void 0, void 0, function* () {
    const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
    const url = new URL(format.decipher(player));
    url.searchParams.set("cpn", cpn || "");
    const representation = __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "Representation", {
      id: (_b = format.itag) === null || _b === void 0 ? void 0 : _b.toString(),
      codecs,
      bandwidth: (_c = format.bitrate) === null || _c === void 0 ? void 0 : _c.toString(),
      width: (_d = format.width) === null || _d === void 0 ? void 0 : _d.toString(),
      height: (_e = format.height) === null || _e === void 0 ? void 0 : _e.toString(),
      maxPlayoutRate: "1",
      frameRate: (_f = format.fps) === null || _f === void 0 ? void 0 : _f.toString()
    });
    set.appendChild(representation);
    yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateSegmentInformation).call(this, document, representation, format, (_g = url_transformer(url)) === null || _g === void 0 ? void 0 : _g.toString(), actions);
  });
}, "_FormatUtils_generateRepresentationVideo"), _FormatUtils_generateRepresentationAudio = /* @__PURE__ */ __name(function _FormatUtils_generateRepresentationAudio2(document, set, format, url_transformer, cpn, player, actions) {
  var _b, _c, _d, _e, _f, _g;
  return __awaiter(this, void 0, void 0, function* () {
    const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
    const url = new URL(format.decipher(player));
    url.searchParams.set("cpn", cpn || "");
    let id;
    if (format.audio_track) {
      id = `${(_b = format.itag) === null || _b === void 0 ? void 0 : _b.toString()}-${format.audio_track.id}`;
    } else {
      id = (_c = format.itag) === null || _c === void 0 ? void 0 : _c.toString();
    }
    const representation = __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "Representation", {
      id,
      codecs,
      bandwidth: (_d = format.bitrate) === null || _d === void 0 ? void 0 : _d.toString(),
      audioSamplingRate: (_e = format.audio_sample_rate) === null || _e === void 0 ? void 0 : _e.toString()
    }, [
      __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "AudioChannelConfiguration", {
        schemeIdUri: "urn:mpeg:dash:23003:3:audio_channel_configuration:2011",
        value: ((_f = format.audio_channels) === null || _f === void 0 ? void 0 : _f.toString()) || "2"
      })
    ]);
    set.appendChild(representation);
    yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_generateSegmentInformation).call(this, document, representation, format, (_g = url_transformer(url)) === null || _g === void 0 ? void 0 : _g.toString(), actions);
  });
}, "_FormatUtils_generateRepresentationAudio"), _FormatUtils_generateSegmentInformation = /* @__PURE__ */ __name(function _FormatUtils_generateSegmentInformation2(document, representation, format, url, actions) {
  return __awaiter(this, void 0, void 0, function* () {
    if (format.is_type_otf) {
      if (!actions) {
        throw new InnertubeError("Unable to get segment durations for this OTF stream without an Actions instance", { format });
      }
      const { resolved_url, segment_durations } = yield __classPrivateFieldGet(this, _a, "m", _FormatUtils_getOTFSegmentInformation).call(this, url, actions);
      const segment_elements = [];
      for (const segment_duration of segment_durations) {
        let attributes;
        if (typeof segment_duration.repeat_count === "undefined") {
          attributes = {
            d: segment_duration.duration.toString()
          };
        } else {
          attributes = {
            d: segment_duration.duration.toString(),
            r: segment_duration.repeat_count.toString()
          };
        }
        segment_elements.push(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "S", attributes));
      }
      representation.appendChild(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "SegmentTemplate", {
        startNumber: "1",
        timescale: "1000",
        initialization: `${resolved_url}&sq=0`,
        media: `${resolved_url}&sq=$Number$`
      }, [
        __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "SegmentTimeline", {}, segment_elements)
      ]));
    } else {
      if (!format.index_range || !format.init_range)
        throw new InnertubeError("Index and init ranges not available", { format });
      representation.appendChild(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "BaseURL", {}, [
        document.createTextNode(url)
      ]));
      representation.appendChild(__classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "SegmentBase", {
        indexRange: `${format.index_range.start}-${format.index_range.end}`
      }, [
        __classPrivateFieldGet(this, _a, "m", _FormatUtils_el).call(this, document, "Initialization", {
          range: `${format.init_range.start}-${format.init_range.end}`
        })
      ]));
    }
  });
}, "_FormatUtils_generateSegmentInformation"), _FormatUtils_getOTFSegmentInformation = /* @__PURE__ */ __name(function _FormatUtils_getOTFSegmentInformation2(url, actions) {
  var _b;
  return __awaiter(this, void 0, void 0, function* () {
    const response = yield actions.session.http.fetch_function(`${url}&rn=0&sq=0`, {
      method: "GET",
      headers: STREAM_HEADERS,
      redirect: "follow"
    });
    const resolved_url = response.url.replace("&rn=0", "").replace("&sq=0", "");
    const response_text = yield response.text();
    const segment_duration_strings = (_b = getStringBetweenStrings(response_text, "Segment-Durations-Ms:", "\r\n")) === null || _b === void 0 ? void 0 : _b.split(",");
    if (!segment_duration_strings) {
      throw new InnertubeError("Failed to extract the segment durations from this OTF stream", { url });
    }
    const segment_durations = [];
    for (const segment_duration_string of segment_duration_strings) {
      const trimmed_segment_duration = segment_duration_string.trim();
      if (trimmed_segment_duration.length === 0) {
        continue;
      }
      let repeat_count;
      const repeat_count_string = getStringBetweenStrings(trimmed_segment_duration, "(r=", ")");
      if (repeat_count_string) {
        repeat_count = parseInt(repeat_count_string);
      }
      segment_durations.push({
        duration: parseInt(trimmed_segment_duration),
        repeat_count
      });
    }
    return {
      resolved_url,
      segment_durations
    };
  });
}, "_FormatUtils_getOTFSegmentInformation");
var FormatUtils_default = FormatUtils;

// dist/src/utils/HTTPClient.js
var _HTTPClient_instances;
var _HTTPClient_session;
var _HTTPClient_cookie;
var _HTTPClient_fetch;
var _HTTPClient_adjustContext;
var HTTPClient = class {
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
      const innertube_url = URLS.API.PRODUCTION_1 + __classPrivateFieldGet(this, _HTTPClient_session, "f").api_version;
      const baseURL = (init === null || init === void 0 ? void 0 : init.baseURL) || innertube_url;
      const request_url = typeof input === "string" ? !baseURL.endsWith("/") && !input.startsWith("/") ? new URL(`${baseURL}/${input}`) : new URL(baseURL + input) : input instanceof URL ? input : new URL(input.url, baseURL);
      const headers = (init === null || init === void 0 ? void 0 : init.headers) || (input instanceof Platform.shim.Request ? input.headers : new Platform.shim.Headers()) || new Platform.shim.Headers();
      const body = (init === null || init === void 0 ? void 0 : init.body) || (input instanceof Platform.shim.Request ? input.body : void 0);
      const request_headers = new Platform.shim.Headers(headers);
      request_headers.set("Accept", "*/*");
      request_headers.set("Accept-Language", "*");
      request_headers.set("X-Goog-Visitor-Id", __classPrivateFieldGet(this, _HTTPClient_session, "f").context.client.visitorData || "");
      request_headers.set("X-Origin", request_url.origin);
      request_headers.set("X-Youtube-Client-Version", __classPrivateFieldGet(this, _HTTPClient_session, "f").context.client.clientVersion || "");
      if (Platform.shim.server) {
        request_headers.set("User-Agent", getRandomUserAgent("desktop"));
        request_headers.set("origin", request_url.origin);
      }
      request_url.searchParams.set("key", __classPrivateFieldGet(this, _HTTPClient_session, "f").key);
      request_url.searchParams.set("prettyPrint", "false");
      request_url.searchParams.set("alt", "json");
      const content_type = request_headers.get("Content-Type");
      let request_body = body;
      let is_web_kids = false;
      const is_innertube_req = baseURL === innertube_url || baseURL === URLS.YT_UPLOAD;
      if (content_type === "application/json" && is_innertube_req && typeof body === "string") {
        const json = JSON.parse(body);
        const n_body = Object.assign(Object.assign({}, json), {
          context: JSON.parse(JSON.stringify(__classPrivateFieldGet(this, _HTTPClient_session, "f").context))
        });
        __classPrivateFieldGet(this, _HTTPClient_instances, "m", _HTTPClient_adjustContext).call(this, n_body.context, n_body.client);
        request_headers.set("x-youtube-client-version", n_body.context.client.clientVersion);
        delete n_body.client;
        if (Platform.shim.server) {
          if (n_body.context.client.clientName === "ANDROID" || n_body.context.client.clientName === "ANDROID_MUSIC") {
            request_headers.set("User-Agent", CLIENTS.ANDROID.USER_AGENT);
          }
        }
        is_web_kids = n_body.context.client.clientName === "WEB_KIDS";
        request_body = JSON.stringify(n_body);
      }
      if (__classPrivateFieldGet(this, _HTTPClient_session, "f").logged_in && is_innertube_req && !is_web_kids) {
        const oauth = __classPrivateFieldGet(this, _HTTPClient_session, "f").oauth;
        if (oauth.validateCredentials()) {
          yield oauth.refreshIfRequired();
          request_headers.set("authorization", `Bearer ${oauth.credentials.access_token}`);
          request_url.searchParams.delete("key");
        }
        if (__classPrivateFieldGet(this, _HTTPClient_cookie, "f")) {
          const papisid = getStringBetweenStrings(__classPrivateFieldGet(this, _HTTPClient_cookie, "f"), "PAPISID=", ";");
          if (papisid) {
            request_headers.set("authorization", yield generateSidAuth(papisid));
            request_headers.set("x-goog-authuser", __classPrivateFieldGet(this, _HTTPClient_session, "f").account_index.toString());
          }
          request_headers.set("cookie", __classPrivateFieldGet(this, _HTTPClient_cookie, "f"));
        }
      }
      const request = new Platform.shim.Request(request_url, input instanceof Platform.shim.Request ? input : init);
      const response = yield __classPrivateFieldGet(this, _HTTPClient_fetch, "f").call(this, request, {
        body: request_body,
        headers: request_headers,
        credentials: "include",
        redirect: input instanceof Platform.shim.Request ? input.redirect : (init === null || init === void 0 ? void 0 : init.redirect) || "follow"
      });
      if (response.ok) {
        return response;
      }
      throw new InnertubeError(`Request to ${response.url} failed with status ${response.status}`, yield response.text());
    });
  }
};
__name(HTTPClient, "HTTPClient");
_HTTPClient_session = /* @__PURE__ */ new WeakMap(), _HTTPClient_cookie = /* @__PURE__ */ new WeakMap(), _HTTPClient_fetch = /* @__PURE__ */ new WeakMap(), _HTTPClient_instances = /* @__PURE__ */ new WeakSet(), _HTTPClient_adjustContext = /* @__PURE__ */ __name(function _HTTPClient_adjustContext2(ctx, client) {
  if (client === "ANDROID" || client === "YTMUSIC_ANDROID" || client === "YTMUSIC_ANDROID" || client === "YTSTUDIO_ANDROID") {
    ctx.client.androidSdkVersion = CLIENTS.ANDROID.SDK_VERSION;
    ctx.client.userAgent = CLIENTS.ANDROID.USER_AGENT;
    ctx.client.osName = "Android";
    ctx.client.osVersion = "10";
    ctx.client.platform = "MOBILE";
  }
  switch (client) {
    case "YTMUSIC":
      ctx.client.clientVersion = CLIENTS.YTMUSIC.VERSION;
      ctx.client.clientName = CLIENTS.YTMUSIC.NAME;
      break;
    case "ANDROID":
      ctx.client.clientVersion = CLIENTS.ANDROID.VERSION;
      ctx.client.clientFormFactor = "SMALL_FORM_FACTOR";
      ctx.client.clientName = CLIENTS.ANDROID.NAME;
      break;
    case "YTMUSIC_ANDROID":
      ctx.client.clientVersion = CLIENTS.YTMUSIC_ANDROID.VERSION;
      ctx.client.clientFormFactor = "SMALL_FORM_FACTOR";
      ctx.client.clientName = CLIENTS.YTMUSIC_ANDROID.NAME;
      break;
    case "YTSTUDIO_ANDROID":
      ctx.client.clientVersion = CLIENTS.YTSTUDIO_ANDROID.VERSION;
      ctx.client.clientFormFactor = "SMALL_FORM_FACTOR";
      ctx.client.clientName = CLIENTS.YTSTUDIO_ANDROID.NAME;
      break;
    case "TV_EMBEDDED":
      ctx.client.clientName = CLIENTS.TV_EMBEDDED.NAME;
      ctx.client.clientVersion = CLIENTS.TV_EMBEDDED.VERSION;
      ctx.client.clientScreen = "EMBED";
      ctx.thirdParty = { embedUrl: URLS.YT_BASE };
      break;
    case "YTKIDS":
      ctx.client.clientVersion = CLIENTS.WEB_KIDS.VERSION;
      ctx.client.clientName = CLIENTS.WEB_KIDS.NAME;
      ctx.client.kidsAppInfo = {
        categorySettings: {
          enabledCategories: [
            "approved_for_you",
            "black_joy",
            "camp",
            "collections",
            "earth",
            "explore",
            "favorites",
            "gaming",
            "halloween",
            "hero",
            "learning",
            "move",
            "music",
            "reading",
            "shared_by_parents",
            "shows",
            "soccer",
            "sports",
            "spotlight",
            "winter"
          ]
        },
        contentSettings: {
          corpusPreference: "KIDS_CORPUS_PREFERENCE_YOUNGER",
          kidsNoSearchMode: "YT_KIDS_NO_SEARCH_MODE_OFF"
        }
      };
      break;
    default:
      break;
  }
}, "_HTTPClient_adjustContext");
var HTTPClient_default = HTTPClient;

// dist/src/utils/Log.js
var _a2;
var Log = class {
  static doLog(level, tag, args) {
    if (!this.log_map_[level] || !this.log_level_.includes(level))
      return;
    const tags = [`[${this.YTJS_TAG}]`];
    if (tag)
      tags.push(`[${tag}]`);
    this.log_map_[level](`${tags.join("")}:`, ...args || []);
  }
  static setLevel(...args) {
    this.log_level_ = args;
  }
};
__name(Log, "Log");
_a2 = Log;
Log.YTJS_TAG = "YOUTUBEJS";
Log.Level = {
  NONE: 0,
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
  DEBUG: 4
};
Log.log_map_ = {
  [Log.Level.ERROR]: (...args) => console.error(...args),
  [Log.Level.WARNING]: (...args) => console.warn(...args),
  [Log.Level.INFO]: (...args) => console.info(...args),
  [Log.Level.DEBUG]: (...args) => console.debug(...args)
};
Log.log_level_ = [Log.Level.WARNING];
Log.one_time_warnings_issued_ = /* @__PURE__ */ new Set();
Log.warnOnce = (id, ...args) => {
  if (_a2.one_time_warnings_issued_.has(id))
    return;
  _a2.doLog(Log.Level.WARNING, id, args);
  _a2.one_time_warnings_issued_.add(id);
};
Log.warn = (tag, ...args) => _a2.doLog(Log.Level.WARNING, tag, args);
Log.error = (tag, ...args) => _a2.doLog(Log.Level.ERROR, tag, args);
Log.info = (tag, ...args) => _a2.doLog(Log.Level.INFO, tag, args);
Log.debug = (tag, ...args) => _a2.doLog(Log.Level.DEBUG, tag, args);
var Log_default = Log;

// dist/src/utils/LZW.js
var LZW_exports = {};
__export(LZW_exports, {
  compress: () => compress,
  decompress: () => decompress
});
function compress(input) {
  const output = [];
  const dictionary = {};
  for (let i = 0; i < 256; i++) {
    dictionary[String.fromCharCode(i)] = i;
  }
  let current_string = "";
  let dictionary_size = 256;
  for (let i = 0; i < input.length; i++) {
    const current_char = input[i];
    const combined_string = current_string + current_char;
    if (dictionary.hasOwnProperty(combined_string)) {
      current_string = combined_string;
    } else {
      output.push(dictionary[current_string]);
      dictionary[combined_string] = dictionary_size++;
      current_string = current_char;
    }
  }
  if (current_string !== "") {
    output.push(dictionary[current_string]);
  }
  return output.map((code) => String.fromCharCode(code)).join("");
}
__name(compress, "compress");
function decompress(input) {
  const dictionary = {};
  const input_data = input.split("");
  const output = [input_data.shift()];
  const input_length = input_data.length >>> 0;
  let dictionary_code = 256;
  let current_char = output[0];
  let current_string = current_char;
  for (let i = 0; i < input_length; ++i) {
    const current_code = input_data[i].charCodeAt(0);
    const entry = current_code < 256 ? input_data[i] : dictionary[current_code] ? dictionary[current_code] : current_string + current_char;
    output.push(entry);
    current_char = entry.charAt(0);
    dictionary[dictionary_code++] = current_string + current_char;
    current_string = entry;
  }
  return output.join("");
}
__name(decompress, "decompress");

// dist/src/parser/classes/Button.js
var Button = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "text")) {
      this.text = new Text(data2.text).toString();
    }
    if (Reflect.has(data2, "accessibility") && Reflect.has(data2.accessibility, "label")) {
      this.label = data2.accessibility.label;
    }
    if (Reflect.has(data2, "tooltip")) {
      this.tooltip = data2.tooltip;
    }
    if (Reflect.has(data2, "icon") && Reflect.has(data2.icon, "iconType")) {
      this.icon_type = data2.icon.iconType;
    }
    if (Reflect.has(data2, "isDisabled")) {
      this.is_disabled = data2.isDisabled;
    }
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint || data2.serviceEndpoint || data2.command);
  }
};
__name(Button, "Button");
Button.type = "Button";
var Button_default = Button;

// dist/src/parser/classes/DropdownItem.js
var DropdownItem = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.label = new Text(data2.label).toString();
    this.selected = !!data2.isSelected;
    if (Reflect.has(data2, "int32Value")) {
      this.value = data2.int32Value;
    } else if (data2.stringValue) {
      this.value = data2.stringValue;
    }
    if (Reflect.has(data2, "onSelectCommand")) {
      this.endpoint = new NavigationEndpoint_default(data2.onSelectCommand);
    }
    if (Reflect.has(data2, "icon")) {
      this.icon_type = (_a7 = data2.icon) === null || _a7 === void 0 ? void 0 : _a7.iconType;
    }
    if (Reflect.has(data2, "descriptionText")) {
      this.description = new Text(data2.descriptionText);
    }
  }
};
__name(DropdownItem, "DropdownItem");
DropdownItem.type = "DropdownItem";
var DropdownItem_default = DropdownItem;

// dist/src/parser/classes/Dropdown.js
var Dropdown = class extends YTNode {
  constructor(data2) {
    super();
    this.label = data2.label || "";
    this.entries = parser_default.parseArray(data2.entries, DropdownItem_default);
  }
};
__name(Dropdown, "Dropdown");
Dropdown.type = "Dropdown";
var Dropdown_default = Dropdown;

// dist/src/parser/classes/CreatePlaylistDialog.js
var CreatePlaylistDialog = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.dialogTitle).toString();
    this.title_placeholder = data2.titlePlaceholder || "";
    this.privacy_option = parser_default.parseItem(data2.privacyOption, Dropdown_default);
    this.create_button = parser_default.parseItem(data2.cancelButton, Button_default);
    this.cancel_button = parser_default.parseItem(data2.cancelButton, Button_default);
  }
};
__name(CreatePlaylistDialog, "CreatePlaylistDialog");
CreatePlaylistDialog.type = "CreatePlaylistDialog";
var CreatePlaylistDialog_default = CreatePlaylistDialog;

// dist/src/parser/classes/NavigationEndpoint.js
var NavigationEndpoint = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f, _g, _h;
    super();
    if (Reflect.has(data2 || {}, "innertubeCommand"))
      data2 = data2.innertubeCommand;
    const name = Object.keys(data2 || {}).find((item) => item.endsWith("Endpoint") || item.endsWith("Command"));
    this.payload = name ? Reflect.get(data2, name) : {};
    if (Reflect.has(this.payload, "dialog") || Reflect.has(this.payload, "content")) {
      this.dialog = parser_default.parseItem(this.payload.dialog || this.payload.content);
    }
    if (data2 === null || data2 === void 0 ? void 0 : data2.serviceEndpoint) {
      data2 = data2.serviceEndpoint;
    }
    this.metadata = {};
    if ((_b = (_a7 = data2 === null || data2 === void 0 ? void 0 : data2.commandMetadata) === null || _a7 === void 0 ? void 0 : _a7.webCommandMetadata) === null || _b === void 0 ? void 0 : _b.url) {
      this.metadata.url = data2.commandMetadata.webCommandMetadata.url;
    }
    if ((_d = (_c = data2 === null || data2 === void 0 ? void 0 : data2.commandMetadata) === null || _c === void 0 ? void 0 : _c.webCommandMetadata) === null || _d === void 0 ? void 0 : _d.webPageType) {
      this.metadata.page_type = data2.commandMetadata.webCommandMetadata.webPageType;
    }
    if ((_f = (_e = data2 === null || data2 === void 0 ? void 0 : data2.commandMetadata) === null || _e === void 0 ? void 0 : _e.webCommandMetadata) === null || _f === void 0 ? void 0 : _f.apiUrl) {
      this.metadata.api_url = data2.commandMetadata.webCommandMetadata.apiUrl.replace("/youtubei/v1/", "");
    } else if (name) {
      this.metadata.api_url = this.getEndpoint(name);
    }
    if ((_h = (_g = data2 === null || data2 === void 0 ? void 0 : data2.commandMetadata) === null || _g === void 0 ? void 0 : _g.webCommandMetadata) === null || _h === void 0 ? void 0 : _h.sendPost) {
      this.metadata.send_post = data2.commandMetadata.webCommandMetadata.sendPost;
    }
    if (data2 === null || data2 === void 0 ? void 0 : data2.createPlaylistEndpoint) {
      if (data2 === null || data2 === void 0 ? void 0 : data2.createPlaylistEndpoint.createPlaylistDialog) {
        this.dialog = parser_default.parseItem(data2 === null || data2 === void 0 ? void 0 : data2.createPlaylistEndpoint.createPlaylistDialog, CreatePlaylistDialog_default);
      }
    }
  }
  getEndpoint(name) {
    switch (name) {
      case "browseEndpoint":
        return "/browse";
      case "watchEndpoint":
        return "/player";
      case "searchEndpoint":
        return "/search";
      case "watchPlaylistEndpoint":
        return "/next";
      case "liveChatItemContextMenuEndpoint":
        return "live_chat/get_item_context_menu";
    }
  }
  call(actions, args) {
    if (!actions)
      throw new Error("An active caller must be provided");
    if (!this.metadata.api_url)
      throw new Error("Expected an api_url, but none was found, this is a bug.");
    return actions.execute(this.metadata.api_url, Object.assign(Object.assign({}, this.payload), args));
  }
  toURL() {
    if (!this.metadata.url)
      return void 0;
    if (!this.metadata.page_type)
      return void 0;
    return this.metadata.page_type === "WEB_PAGE_TYPE_UNKNOWN" ? this.metadata.url : `https://www.youtube.com${this.metadata.url}`;
  }
};
__name(NavigationEndpoint, "NavigationEndpoint");
NavigationEndpoint.type = "NavigationEndpoint";
var NavigationEndpoint_default = NavigationEndpoint;

// dist/src/parser/classes/misc/Thumbnail.js
var Thumbnail = class {
  constructor(data2) {
    this.url = data2.url;
    this.width = data2.width;
    this.height = data2.height;
  }
  static fromResponse(data2) {
    if (!data2 || !data2.thumbnails && !data2.sources)
      return [];
    return (data2.thumbnails || data2.sources).map((x) => new Thumbnail(x)).sort((a, b) => b.width - a.width);
  }
};
__name(Thumbnail, "Thumbnail");

// dist/src/parser/classes/misc/EmojiRun.js
var EmojiRun = class {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f;
    this.text = ((_a7 = data2.emoji) === null || _a7 === void 0 ? void 0 : _a7.emojiId) || ((_c = (_b = data2.emoji) === null || _b === void 0 ? void 0 : _b.shortcuts) === null || _c === void 0 ? void 0 : _c[0]) || "";
    this.emoji = {
      emoji_id: data2.emoji.emojiId,
      shortcuts: ((_d = data2.emoji) === null || _d === void 0 ? void 0 : _d.shortcuts) || [],
      search_terms: ((_e = data2.emoji) === null || _e === void 0 ? void 0 : _e.searchTerms) || [],
      image: Thumbnail.fromResponse(data2.emoji.image),
      is_custom: !!((_f = data2.emoji) === null || _f === void 0 ? void 0 : _f.isCustomEmoji)
    };
  }
  toString() {
    return this.text;
  }
  toHTML() {
    const escaped_text = escape(this.text);
    return `<img src="${this.emoji.image[0].url}" alt="${escaped_text}" title="${escaped_text}" style="display: inline-block; vertical-align: text-top; height: var(--yt-emoji-size, 1rem); width: var(--yt-emoji-size, 1rem);" loading="lazy" crossorigin="anonymous" />`;
  }
};
__name(EmojiRun, "EmojiRun");

// dist/src/parser/classes/misc/TextRun.js
var TextRun = class {
  constructor(data2) {
    this.text = data2.text;
    this.bold = Boolean(data2.bold);
    this.italics = Boolean(data2.italics);
    this.strikethrough = Boolean(data2.strikethrough);
    if (Reflect.has(data2, "navigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    }
    this.attachment = data2.attachment;
  }
  toString() {
    return this.text;
  }
  toHTML() {
    const tags = [];
    if (this.bold)
      tags.push("b");
    if (this.italics)
      tags.push("i");
    if (this.strikethrough)
      tags.push("s");
    const escaped_text = escape(this.text);
    const styled_text = tags.map((tag) => `<${tag}>`).join("") + escaped_text + tags.map((tag) => `</${tag}>`).join("");
    const wrapped_text = `<span style="white-space: pre-wrap;">${styled_text}</span>`;
    if (this.attachment) {
      if (this.attachment.element.type.imageType.image.sources.length) {
        const { url } = this.attachment.element.type.imageType.image.sources[0];
        if (this.endpoint) {
          const nav_url = this.endpoint.toURL();
          if (nav_url)
            return `<a href="${nav_url}" class="yt-ch-link" display: block; width: fit-content; font-size: small;><img src="${url}" style="vertical-align: middle; height: ${this.attachment.element.properties.layoutProperties.height.value}px; width: ${this.attachment.element.properties.layoutProperties.width.value}px;">${wrapped_text}</a>`;
        }
      }
    }
    if (this.endpoint) {
      const url = this.endpoint.toURL();
      if (url)
        return `<a href="${url}">${wrapped_text}</a>`;
    }
    return wrapped_text;
  }
};
__name(TextRun, "TextRun");

// dist/src/parser/classes/misc/Text.js
function escape(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
__name(escape, "escape");
var TAG = "Text";
var Text = class {
  constructor(data2) {
    var _a7, _b, _c, _d;
    if (typeof data2 === "object" && data2 !== null && Reflect.has(data2, "runs") && Array.isArray(data2.runs)) {
      this.runs = data2.runs.map((run) => run.emoji ? new EmojiRun(run) : new TextRun(run));
      this.text = this.runs.map((run) => run.text).join("");
    } else {
      this.text = data2 === null || data2 === void 0 ? void 0 : data2.simpleText;
    }
    if (typeof data2 === "object" && data2 !== null && Reflect.has(data2, "navigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    }
    if (typeof data2 === "object" && data2 !== null && Reflect.has(data2, "titleNavigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data2.titleNavigationEndpoint);
    }
    if (!this.endpoint) {
      if ((_b = (_a7 = this.runs) === null || _a7 === void 0 ? void 0 : _a7[0]) === null || _b === void 0 ? void 0 : _b.endpoint) {
        this.endpoint = (_d = (_c = this.runs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.endpoint;
      }
    }
  }
  static fromAttributed(data2) {
    var _a7, _b, _c;
    const { content, styleRuns: style_runs, commandRuns: command_runs, attachmentRuns: attachment_runs } = data2;
    const runs = [
      {
        text: content,
        startIndex: 0
      }
    ];
    if (style_runs || command_runs || attachment_runs) {
      if (style_runs) {
        for (const style_run of style_runs) {
          if (style_run.italic || style_run.strikethrough === "LINE_STYLE_SINGLE" || style_run.weightLabel === "FONT_WEIGHT_MEDIUM" || style_run.weightLabel === "FONT_WEIGHT_BOLD") {
            const matching_run = findMatchingRun(runs, style_run);
            if (!matching_run) {
              Log_default.warn(TAG, "Unable to find matching run for style run. Skipping...", {
                style_run,
                input_data: data2,
                parsed_runs: JSON.parse(JSON.stringify(runs))
              });
              continue;
            }
            insertSubRun(runs, matching_run, style_run, {
              bold: style_run.weightLabel === "FONT_WEIGHT_MEDIUM" || style_run.weightLabel === "FONT_WEIGHT_BOLD",
              italics: style_run.italic,
              strikethrough: style_run.strikethrough === "LINE_STYLE_SINGLE"
            });
          } else {
            Log_default.debug(TAG, "Skipping style run as it is doesn't have any information that we parse.", {
              style_run,
              input_data: data2
            });
          }
        }
      }
      if (command_runs) {
        for (const command_run of command_runs) {
          if (command_run.onTap) {
            const matching_run = findMatchingRun(runs, command_run);
            if (!matching_run) {
              Log_default.warn(TAG, "Unable to find matching run for command run. Skipping...", {
                command_run,
                input_data: data2,
                parsed_runs: JSON.parse(JSON.stringify(runs))
              });
              continue;
            }
            insertSubRun(runs, matching_run, command_run, {
              navigationEndpoint: command_run.onTap
            });
          } else {
            Log_default.debug(TAG, 'Skipping command run as it is missing the "doTap" property.', {
              command_run,
              input_data: data2
            });
          }
        }
      }
      if (attachment_runs) {
        for (const attachment_run of attachment_runs) {
          const matching_run = findMatchingRun(runs, attachment_run);
          if (!matching_run) {
            Log_default.warn(TAG, "Unable to find matching run for attachment run. Skipping...", {
              attachment_run,
              input_data: data2,
              parsed_runs: JSON.parse(JSON.stringify(runs))
            });
            continue;
          }
          if (attachment_run.length === 0) {
            matching_run.attachment = attachment_run;
          } else {
            const offset_start_index = attachment_run.startIndex - matching_run.startIndex;
            const text = matching_run.text.substring(offset_start_index, offset_start_index + attachment_run.length);
            const is_custom_emoji = /^:[^:]+:$/.test(text);
            if (((_c = (_b = (_a7 = attachment_run.element) === null || _a7 === void 0 ? void 0 : _a7.type) === null || _b === void 0 ? void 0 : _b.imageType) === null || _c === void 0 ? void 0 : _c.image) && (is_custom_emoji || new RegExp("^(?:\\p{Emoji}|\\u200d)+$", "u").test(text))) {
              const emoji = {
                image: attachment_run.element.type.imageType.image,
                isCustomEmoji: is_custom_emoji,
                shortcuts: is_custom_emoji ? [text] : void 0
              };
              insertSubRun(runs, matching_run, attachment_run, { emoji });
            } else {
              insertSubRun(runs, matching_run, attachment_run, {
                attachment: attachment_run
              });
            }
          }
        }
      }
    }
    return new Text({ runs });
  }
  toHTML() {
    return this.runs ? this.runs.map((run) => run.toHTML()).join("") : this.text;
  }
  isEmpty() {
    return this.text === void 0;
  }
  toString() {
    return this.text || "N/A";
  }
};
__name(Text, "Text");
function findMatchingRun(runs, response_run) {
  return runs.find((run) => {
    return run.startIndex <= response_run.startIndex && response_run.startIndex + response_run.length <= run.startIndex + run.text.length;
  });
}
__name(findMatchingRun, "findMatchingRun");
function insertSubRun(runs, original_run, response_run, properties_to_add) {
  const replace_index = runs.indexOf(original_run);
  const replacement_runs = [];
  const offset_start_index = response_run.startIndex - original_run.startIndex;
  if (response_run.startIndex > original_run.startIndex) {
    replacement_runs.push(Object.assign(Object.assign({}, original_run), { text: original_run.text.substring(0, offset_start_index) }));
  }
  replacement_runs.push(Object.assign(Object.assign(Object.assign({}, original_run), { text: original_run.text.substring(offset_start_index, offset_start_index + response_run.length), startIndex: response_run.startIndex }), properties_to_add));
  if (response_run.startIndex + response_run.length < original_run.startIndex + original_run.text.length) {
    replacement_runs.push(Object.assign(Object.assign({}, original_run), { text: original_run.text.substring(offset_start_index + response_run.length), startIndex: response_run.startIndex + response_run.length }));
  }
  runs.splice(replace_index, 1, ...replacement_runs);
}
__name(insertSubRun, "insertSubRun");

// dist/src/parser/classes/CardCollection.js
var CardCollection = class extends YTNode {
  constructor(data2) {
    super();
    this.cards = parser_default.parseArray(data2.cards);
    this.header = new Text(data2.headerText);
    this.allow_teaser_dismiss = data2.allowTeaserDismiss;
  }
};
__name(CardCollection, "CardCollection");
CardCollection.type = "CardCollection";
var CardCollection_default = CardCollection;

// dist/src/parser/classes/Endscreen.js
var Endscreen = class extends YTNode {
  constructor(data2) {
    super();
    this.elements = parser_default.parseArray(data2.elements);
    this.start_ms = data2.startMs;
  }
};
__name(Endscreen, "Endscreen");
Endscreen.type = "Endscreen";
var Endscreen_default = Endscreen;

// dist/src/parser/classes/PlayerAnnotationsExpanded.js
var PlayerAnnotationsExpanded = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "featuredChannel")) {
      this.featured_channel = {
        start_time_ms: data2.featuredChannel.startTimeMs,
        end_time_ms: data2.featuredChannel.endTimeMs,
        watermark: Thumbnail.fromResponse(data2.featuredChannel.watermark),
        channel_name: data2.featuredChannel.channelName,
        endpoint: new NavigationEndpoint_default(data2.featuredChannel.navigationEndpoint),
        subscribe_button: parser_default.parseItem(data2.featuredChannel.subscribeButton)
      };
    }
    this.allow_swipe_dismiss = data2.allowSwipeDismiss;
    this.annotation_id = data2.annotationId;
  }
};
__name(PlayerAnnotationsExpanded, "PlayerAnnotationsExpanded");
PlayerAnnotationsExpanded.type = "PlayerAnnotationsExpanded";
var PlayerAnnotationsExpanded_default = PlayerAnnotationsExpanded;

// dist/src/parser/classes/PlayerCaptionsTracklist.js
var PlayerCaptionsTracklist = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "captionTracks")) {
      this.caption_tracks = data2.captionTracks.map((ct) => ({
        base_url: ct.baseUrl,
        name: new Text(ct.name),
        vss_id: ct.vssId,
        language_code: ct.languageCode,
        kind: ct.kind,
        is_translatable: ct.isTranslatable
      }));
    }
    if (Reflect.has(data2, "audioTracks")) {
      this.audio_tracks = data2.audioTracks.map((at2) => ({
        audio_track_id: at2.audioTrackId,
        captions_initial_state: at2.captionsInitialState,
        default_caption_track_index: at2.defaultCaptionTrackIndex,
        has_default_track: at2.hasDefaultTrack,
        visibility: at2.visibility,
        caption_track_indices: at2.captionTrackIndices
      }));
    }
    if (Reflect.has(data2, "defaultAudioTrackIndex")) {
      this.default_audio_track_index = data2.defaultAudioTrackIndex;
    }
    if (Reflect.has(data2, "translationLanguages")) {
      this.translation_languages = data2.translationLanguages.map((tl) => ({
        language_code: tl.languageCode,
        language_name: new Text(tl.languageName)
      }));
    }
  }
};
__name(PlayerCaptionsTracklist, "PlayerCaptionsTracklist");
PlayerCaptionsTracklist.type = "PlayerCaptionsTracklist";
var PlayerCaptionsTracklist_default = PlayerCaptionsTracklist;

// dist/src/parser/classes/PlayerLiveStoryboardSpec.js
var PlayerLiveStoryboardSpec = class extends YTNode {
  constructor() {
    super();
  }
};
__name(PlayerLiveStoryboardSpec, "PlayerLiveStoryboardSpec");
PlayerLiveStoryboardSpec.type = "PlayerLiveStoryboardSpec";
var PlayerLiveStoryboardSpec_default = PlayerLiveStoryboardSpec;

// dist/src/parser/classes/PlayerStoryboardSpec.js
var PlayerStoryboardSpec = class extends YTNode {
  constructor(data2) {
    super();
    const parts = data2.spec.split("|");
    const url = new URL(parts.shift());
    this.boards = parts.map((part, i) => {
      const [thumbnail_width, thumbnail_height, thumbnail_count, columns, rows, interval, name, sigh] = part.split("#");
      url.searchParams.set("sigh", sigh);
      const storyboard_count = Math.ceil(parseInt(thumbnail_count, 10) / (parseInt(columns, 10) * parseInt(rows, 10)));
      return {
        template_url: url.toString().replace("$L", i).replace("$N", name),
        thumbnail_width: parseInt(thumbnail_width, 10),
        thumbnail_height: parseInt(thumbnail_height, 10),
        thumbnail_count: parseInt(thumbnail_count, 10),
        interval: parseInt(interval, 10),
        columns: parseInt(columns, 10),
        rows: parseInt(rows, 10),
        storyboard_count
      };
    });
  }
};
__name(PlayerStoryboardSpec, "PlayerStoryboardSpec");
PlayerStoryboardSpec.type = "PlayerStoryboardSpec";
var PlayerStoryboardSpec_default = PlayerStoryboardSpec;

// dist/src/parser/classes/Message.js
var Message = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.text);
  }
};
__name(Message, "Message");
Message.type = "Message";
var Message_default = Message;

// dist/src/parser/classes/LiveChatParticipant.js
var LiveChatParticipant = class extends YTNode {
  constructor(data2) {
    super();
    this.name = new Text(data2.authorName);
    this.photo = Thumbnail.fromResponse(data2.authorPhoto);
    this.badges = parser_default.parseArray(data2.authorBadges);
  }
};
__name(LiveChatParticipant, "LiveChatParticipant");
LiveChatParticipant.type = "LiveChatParticipant";
var LiveChatParticipant_default = LiveChatParticipant;

// dist/src/parser/classes/LiveChatParticipantsList.js
var LiveChatParticipantsList = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.participants = parser_default.parseArray(data2.participants, LiveChatParticipant_default);
  }
};
__name(LiveChatParticipantsList, "LiveChatParticipantsList");
LiveChatParticipantsList.type = "LiveChatParticipantsList";
var LiveChatParticipantsList_default = LiveChatParticipantsList;

// dist/src/parser/classes/SortFilterSubMenu.js
var SortFilterSubMenu = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "title")) {
      this.title = data2.title;
    }
    if (Reflect.has(data2, "icon")) {
      this.icon_type = data2.icon.iconType;
    }
    if (Reflect.has(data2, "accessibility")) {
      this.label = data2.accessibility.accessibilityData.label;
    }
    if (Reflect.has(data2, "tooltip")) {
      this.tooltip = data2.tooltip;
    }
    if (Reflect.has(data2, "subMenuItems")) {
      this.sub_menu_items = data2.subMenuItems.map((item) => {
        var _a7, _b;
        return {
          title: item.title,
          selected: item.selected,
          continuation: (_b = (_a7 = item.continuation) === null || _a7 === void 0 ? void 0 : _a7.reloadContinuationData) === null || _b === void 0 ? void 0 : _b.continuation,
          endpoint: new NavigationEndpoint_default(item.serviceEndpoint || item.navigationEndpoint),
          subtitle: item.subtitle || null
        };
      });
    }
  }
};
__name(SortFilterSubMenu, "SortFilterSubMenu");
SortFilterSubMenu.type = "SortFilterSubMenu";
var SortFilterSubMenu_default = SortFilterSubMenu;

// dist/src/parser/classes/menus/Menu.js
var Menu = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parseArray(data2.items);
    this.top_level_buttons = parser_default.parseArray(data2.topLevelButtons);
    if (Reflect.has(data2, "accessibility") && Reflect.has(data2.accessibility, "accessibilityData")) {
      this.label = data2.accessibility.accessibilityData.label;
    }
  }
  get contents() {
    return this.items;
  }
};
__name(Menu, "Menu");
Menu.type = "Menu";
var Menu_default = Menu;

// dist/src/parser/classes/LiveChatHeader.js
var LiveChatHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.overflow_menu = parser_default.parseItem(data2.overflowMenu, Menu_default);
    this.collapse_button = parser_default.parseItem(data2.collapseButton, Button_default);
    this.view_selector = parser_default.parseItem(data2.viewSelector, SortFilterSubMenu_default);
  }
};
__name(LiveChatHeader, "LiveChatHeader");
LiveChatHeader.type = "LiveChatHeader";
var LiveChatHeader_default = LiveChatHeader;

// dist/src/parser/classes/LiveChatItemList.js
var LiveChatItemList = class extends YTNode {
  constructor(data2) {
    super();
    this.max_items_to_display = data2.maxItemsToDisplay;
    this.more_comments_below_button = parser_default.parseItem(data2.moreCommentsBelowButton, Button_default);
  }
};
__name(LiveChatItemList, "LiveChatItemList");
LiveChatItemList.type = "LiveChatItemList";
var LiveChatItemList_default = LiveChatItemList;

// dist/src/parser/classes/Alert.js
var Alert = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.text);
    this.alert_type = data2.type;
  }
};
__name(Alert, "Alert");
Alert.type = "Alert";
var Alert_default = Alert;

// dist/src/parser/classes/menus/MusicMultiSelectMenuItem.js
var MusicMultiSelectMenuItem = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title).toString();
    this.form_item_entity_key = data2.formItemEntityKey;
    if (Reflect.has(data2, "selectedIcon")) {
      this.selected_icon_type = data2.selectedIcon.iconType;
    }
    if (Reflect.has(data2, "selectedCommand")) {
      this.endpoint = new NavigationEndpoint_default(data2.selectedCommand);
    }
    this.selected = !!this.endpoint;
  }
};
__name(MusicMultiSelectMenuItem, "MusicMultiSelectMenuItem");
MusicMultiSelectMenuItem.type = "MusicMultiSelectMenuItem";
var MusicMultiSelectMenuItem_default = MusicMultiSelectMenuItem;

// dist/src/parser/classes/misc/Format.js
var Format = class {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f, _g, _h;
    this.itag = data2.itag;
    this.mime_type = data2.mimeType;
    this.is_type_otf = data2.type === "FORMAT_STREAM_TYPE_OTF";
    this.bitrate = data2.bitrate;
    this.average_bitrate = data2.averageBitrate;
    this.width = data2.width;
    this.height = data2.height;
    this.init_range = data2.initRange ? {
      start: parseInt(data2.initRange.start),
      end: parseInt(data2.initRange.end)
    } : void 0;
    this.index_range = data2.indexRange ? {
      start: parseInt(data2.indexRange.start),
      end: parseInt(data2.indexRange.end)
    } : void 0;
    this.last_modified = new Date(Math.floor(parseInt(data2.lastModified) / 1e3));
    this.content_length = parseInt(data2.contentLength);
    this.quality = data2.quality;
    this.quality_label = data2.qualityLabel;
    this.fps = data2.fps;
    this.url = data2.url;
    this.cipher = data2.cipher;
    this.signature_cipher = data2.signatureCipher;
    this.audio_quality = data2.audioQuality;
    this.approx_duration_ms = parseInt(data2.approxDurationMs);
    this.audio_sample_rate = parseInt(data2.audioSampleRate);
    this.audio_channels = data2.audioChannels;
    this.loudness_db = data2.loudnessDb;
    this.has_audio = !!data2.audioBitrate || !!data2.audioQuality;
    this.has_video = !!data2.qualityLabel;
    if (this.has_audio) {
      const args = new URLSearchParams(this.cipher || this.signature_cipher);
      const url_components = new URLSearchParams(args.get("url") || this.url);
      this.language = ((_b = (_a7 = url_components.get("xtags")) === null || _a7 === void 0 ? void 0 : _a7.split(":").find((x) => x.startsWith("lang="))) === null || _b === void 0 ? void 0 : _b.split("=")[1]) || null;
      this.is_dubbed = ((_d = (_c = url_components.get("xtags")) === null || _c === void 0 ? void 0 : _c.split(":").find((x) => x.startsWith("acont="))) === null || _d === void 0 ? void 0 : _d.split("=")[1]) === "dubbed";
      this.is_descriptive = ((_f = (_e = url_components.get("xtags")) === null || _e === void 0 ? void 0 : _e.split(":").find((x) => x.startsWith("acont="))) === null || _f === void 0 ? void 0 : _f.split("=")[1]) === "descriptive";
      this.is_original = ((_h = (_g = url_components.get("xtags")) === null || _g === void 0 ? void 0 : _g.split(":").find((x) => x.startsWith("acont="))) === null || _h === void 0 ? void 0 : _h.split("=")[1]) === "original" || !this.is_dubbed;
      if (Reflect.has(data2, "audioTrack")) {
        this.audio_track = {
          audio_is_default: data2.audioTrack.audioIsDefault,
          display_name: data2.audioTrack.displayName,
          id: data2.audioTrack.id
        };
      }
    }
  }
  decipher(player) {
    if (!player)
      throw new InnertubeError("Cannot decipher format, this session appears to have no valid player.");
    return player.decipher(this.url, this.signature_cipher, this.cipher);
  }
};
__name(Format, "Format");

// dist/src/parser/classes/misc/VideoDetails.js
var VideoDetails = class {
  constructor(data2) {
    this.id = data2.videoId;
    this.channel_id = data2.channelId;
    this.title = data2.title;
    this.duration = parseInt(data2.lengthSeconds);
    this.keywords = data2.keywords;
    this.is_owner_viewing = !!data2.isOwnerViewing;
    this.short_description = data2.shortDescription;
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.allow_ratings = !!data2.allowRatings;
    this.view_count = parseInt(data2.viewCount);
    this.author = data2.author;
    this.is_private = !!data2.isPrivate;
    this.is_live = !!data2.isLive;
    this.is_live_content = !!data2.isLiveContent;
    this.is_upcoming = !!data2.isUpcoming;
    this.is_post_live_dvr = !!data2.isPostLiveDvr;
    this.is_crawlable = !!data2.isCrawlable;
  }
};
__name(VideoDetails, "VideoDetails");

// dist/src/parser/nodes.js
var nodes_exports = {};
__export(nodes_exports, {
  AboutChannelView: () => AboutChannelView_default,
  AccountChannel: () => AccountChannel_default,
  AccountItemSection: () => AccountItemSection_default,
  AccountItemSectionHeader: () => AccountItemSectionHeader_default,
  AccountSectionList: () => AccountSectionList_default,
  AddBannerToLiveChatCommand: () => AddBannerToLiveChatCommand_default,
  AddChatItemAction: () => AddChatItemAction_default,
  AddLiveChatTickerItemAction: () => AddLiveChatTickerItemAction_default,
  Alert: () => Alert_default,
  AnalyticsMainAppKeyMetrics: () => AnalyticsMainAppKeyMetrics_default,
  AnalyticsRoot: () => AnalyticsRoot_default,
  AnalyticsShortsCarouselCard: () => AnalyticsShortsCarouselCard_default,
  AnalyticsVideo: () => AnalyticsVideo_default,
  AnalyticsVodCarouselCard: () => AnalyticsVodCarouselCard_default,
  AnchoredSection: () => AnchoredSection_default,
  AppendContinuationItemsAction: () => AppendContinuationItemsAction_default,
  AttributionView: () => AttributionView_default,
  AudioOnlyPlayability: () => AudioOnlyPlayability_default,
  AuthorCommentBadge: () => AuthorCommentBadge_default,
  AutomixPreviewVideo: () => AutomixPreviewVideo_default,
  AvatarView: () => AvatarView_default,
  BackstageImage: () => BackstageImage_default,
  BackstagePost: () => BackstagePost_default,
  BackstagePostThread: () => BackstagePostThread_default,
  BrowseFeedActions: () => BrowseFeedActions_default,
  BrowserMediaSession: () => BrowserMediaSession_default,
  Button: () => Button_default,
  ButtonView: () => ButtonView_default,
  C4TabbedHeader: () => C4TabbedHeader_default,
  CallToActionButton: () => CallToActionButton_default,
  Card: () => Card_default,
  CardCollection: () => CardCollection_default,
  CarouselHeader: () => CarouselHeader_default,
  CarouselItem: () => CarouselItem_default,
  CarouselLockup: () => CarouselLockup_default,
  Channel: () => Channel_default,
  ChannelAboutFullMetadata: () => ChannelAboutFullMetadata_default,
  ChannelAgeGate: () => ChannelAgeGate_default,
  ChannelExternalLinkView: () => ChannelExternalLinkView_default,
  ChannelFeaturedContent: () => ChannelFeaturedContent_default,
  ChannelHeaderLinks: () => ChannelHeaderLinks_default,
  ChannelMetadata: () => ChannelMetadata_default,
  ChannelMobileHeader: () => ChannelMobileHeader_default,
  ChannelOptions: () => ChannelOptions_default,
  ChannelSubMenu: () => ChannelSubMenu_default,
  ChannelThumbnailWithLink: () => ChannelThumbnailWithLink_default,
  ChannelVideoPlayer: () => ChannelVideoPlayer_default,
  Chapter: () => Chapter_default,
  ChildVideo: () => ChildVideo_default,
  ChipCloud: () => ChipCloud_default,
  ChipCloudChip: () => ChipCloudChip_default,
  ClipAdState: () => ClipAdState_default,
  ClipCreation: () => ClipCreation_default,
  ClipCreationScrubber: () => ClipCreationScrubber_default,
  ClipCreationTextInput: () => ClipCreationTextInput_default,
  ClipSection: () => ClipSection_default,
  CollaboratorInfoCardContent: () => CollaboratorInfoCardContent_default,
  CollageHeroImage: () => CollageHeroImage_default,
  Comment: () => Comment_default,
  CommentActionButtons: () => CommentActionButtons_default,
  CommentDialog: () => CommentDialog_default,
  CommentReplies: () => CommentReplies_default,
  CommentReplyDialog: () => CommentReplyDialog_default,
  CommentSimplebox: () => CommentSimplebox_default,
  CommentThread: () => CommentThread_default,
  CommentsEntryPointHeader: () => CommentsEntryPointHeader_default,
  CommentsEntryPointTeaser: () => CommentsEntryPointTeaser_default,
  CommentsHeader: () => CommentsHeader_default,
  CompactChannel: () => CompactChannel_default,
  CompactLink: () => CompactLink_default,
  CompactMix: () => CompactMix_default,
  CompactPlaylist: () => CompactPlaylist_default,
  CompactStation: () => CompactStation_default,
  CompactVideo: () => CompactVideo_default,
  ConfirmDialog: () => ConfirmDialog_default,
  ContentMetadataView: () => ContentMetadataView_default,
  ContentPreviewImageView: () => ContentPreviewImageView_default,
  ContinuationItem: () => ContinuationItem_default,
  ConversationBar: () => ConversationBar_default,
  CopyLink: () => CopyLink_default,
  CreatePlaylistDialog: () => CreatePlaylistDialog_default,
  CreatorHeart: () => CreatorHeart_default,
  CtaGoToCreatorStudio: () => CtaGoToCreatorStudio_default,
  DataModelSection: () => DataModelSection_default,
  DecoratedAvatarView: () => DecoratedAvatarView_default,
  DecoratedPlayerBar: () => DecoratedPlayerBar_default,
  DefaultPromoPanel: () => DefaultPromoPanel_default,
  DescriptionPreviewView: () => DescriptionPreviewView_default,
  DidYouMean: () => DidYouMean_default,
  DimChatItemAction: () => DimChatItemAction_default,
  DownloadButton: () => DownloadButton_default,
  Dropdown: () => Dropdown_default,
  DropdownItem: () => DropdownItem_default,
  DynamicTextView: () => DynamicTextView_default,
  Element: () => Element_default,
  EmergencyOnebox: () => EmergencyOnebox_default,
  EmojiPicker: () => EmojiPicker_default,
  EmojiPickerCategory: () => EmojiPickerCategory_default,
  EmojiPickerCategoryButton: () => EmojiPickerCategoryButton_default,
  EmojiPickerUpsellCategory: () => EmojiPickerUpsellCategory_default,
  EndScreenPlaylist: () => EndScreenPlaylist_default,
  EndScreenVideo: () => EndScreenVideo_default,
  Endscreen: () => Endscreen_default,
  EndscreenElement: () => EndscreenElement_default,
  EngagementPanelSectionList: () => EngagementPanelSectionList_default,
  EngagementPanelTitleHeader: () => EngagementPanelTitleHeader_default,
  ExpandableMetadata: () => ExpandableMetadata_default,
  ExpandableTab: () => ExpandableTab_default,
  ExpandableVideoDescriptionBody: () => ExpandableVideoDescriptionBody_default,
  ExpandedShelfContents: () => ExpandedShelfContents_default,
  Factoid: () => Factoid_default,
  FeedFilterChipBar: () => FeedFilterChipBar_default,
  FeedTabbedHeader: () => FeedTabbedHeader_default,
  FlexibleActionsView: () => FlexibleActionsView_default,
  GameCard: () => GameCard_default,
  GameDetails: () => GameDetails_default,
  Grid: () => Grid_default,
  GridChannel: () => GridChannel_default,
  GridHeader: () => GridHeader_default,
  GridMix: () => GridMix_default,
  GridMovie: () => GridMovie_default,
  GridPlaylist: () => GridPlaylist_default,
  GridShow: () => GridShow_default,
  GridVideo: () => GridVideo_default,
  GuideCollapsibleEntry: () => GuideCollapsibleEntry_default,
  GuideCollapsibleSectionEntry: () => GuideCollapsibleSectionEntry_default,
  GuideDownloadsEntry: () => GuideDownloadsEntry_default,
  GuideEntry: () => GuideEntry_default,
  GuideSection: () => GuideSection_default,
  GuideSubscriptionsSection: () => GuideSubscriptionsSection_default,
  HashtagHeader: () => HashtagHeader_default,
  HeatMarker: () => HeatMarker_default,
  Heatmap: () => Heatmap_default,
  HeroPlaylistThumbnail: () => HeroPlaylistThumbnail_default,
  HighlightsCarousel: () => HighlightsCarousel_default,
  HistorySuggestion: () => HistorySuggestion_default,
  HorizontalCardList: () => HorizontalCardList_default,
  HorizontalList: () => HorizontalList_default,
  HorizontalMovieList: () => HorizontalMovieList_default,
  IconLink: () => IconLink_default,
  ImageBannerView: () => ImageBannerView_default,
  InfoPanelContainer: () => InfoPanelContainer_default,
  InfoPanelContent: () => InfoPanelContent_default,
  InfoRow: () => InfoRow_default,
  InteractiveTabbedHeader: () => InteractiveTabbedHeader_default,
  ItemSection: () => ItemSection_default,
  ItemSectionHeader: () => ItemSectionHeader_default,
  ItemSectionTab: () => ItemSectionTab_default,
  ItemSectionTabbedHeader: () => ItemSectionTabbedHeader_default,
  KidsCategoriesHeader: () => KidsCategoriesHeader_default,
  KidsCategoryTab: () => KidsCategoryTab_default,
  KidsHomeScreen: () => KidsHomeScreen_default,
  LikeButton: () => LikeButton_default,
  LiveChat: () => LiveChat_default,
  LiveChatActionPanel: () => LiveChatActionPanel_default,
  LiveChatAuthorBadge: () => LiveChatAuthorBadge_default,
  LiveChatAutoModMessage: () => LiveChatAutoModMessage_default,
  LiveChatBanner: () => LiveChatBanner_default,
  LiveChatBannerHeader: () => LiveChatBannerHeader_default,
  LiveChatBannerPoll: () => LiveChatBannerPoll_default,
  LiveChatDialog: () => LiveChatDialog_default,
  LiveChatHeader: () => LiveChatHeader_default,
  LiveChatItemList: () => LiveChatItemList_default,
  LiveChatMembershipItem: () => LiveChatMembershipItem_default,
  LiveChatMessageInput: () => LiveChatMessageInput_default,
  LiveChatPaidMessage: () => LiveChatPaidMessage_default,
  LiveChatPaidSticker: () => LiveChatPaidSticker_default,
  LiveChatParticipant: () => LiveChatParticipant_default,
  LiveChatParticipantsList: () => LiveChatParticipantsList_default,
  LiveChatPlaceholderItem: () => LiveChatPlaceholderItem_default,
  LiveChatProductItem: () => LiveChatProductItem_default,
  LiveChatRestrictedParticipation: () => LiveChatRestrictedParticipation_default,
  LiveChatTextMessage: () => LiveChatTextMessage_default,
  LiveChatTickerPaidMessageItem: () => LiveChatTickerPaidMessageItem_default,
  LiveChatTickerPaidStickerItem: () => LiveChatTickerPaidStickerItem_default,
  LiveChatTickerSponsorItem: () => LiveChatTickerSponsorItem_default,
  LiveChatViewerEngagementMessage: () => LiveChatViewerEngagementMessage_default,
  MacroMarkersInfoItem: () => MacroMarkersInfoItem_default,
  MacroMarkersList: () => MacroMarkersList_default,
  MacroMarkersListItem: () => MacroMarkersListItem_default,
  MarkChatItemAsDeletedAction: () => MarkChatItemAsDeletedAction_default,
  MarkChatItemsByAuthorAsDeletedAction: () => MarkChatItemsByAuthorAsDeletedAction_default,
  Menu: () => Menu_default,
  MenuNavigationItem: () => MenuNavigationItem_default,
  MenuServiceItem: () => MenuServiceItem_default,
  MenuServiceItemDownload: () => MenuServiceItemDownload_default,
  MerchandiseItem: () => MerchandiseItem_default,
  MerchandiseShelf: () => MerchandiseShelf_default,
  Message: () => Message_default,
  MetadataBadge: () => MetadataBadge_default,
  MetadataRow: () => MetadataRow_default,
  MetadataRowContainer: () => MetadataRowContainer_default,
  MetadataRowHeader: () => MetadataRowHeader_default,
  MetadataScreen: () => MetadataScreen_default,
  MicroformatData: () => MicroformatData_default,
  Mix: () => Mix_default,
  Movie: () => Movie_default,
  MovingThumbnail: () => MovingThumbnail_default,
  MultiMarkersPlayerBar: () => MultiMarkersPlayerBar_default,
  MultiPageMenu: () => MultiPageMenu_default,
  MultiPageMenuNotificationSection: () => MultiPageMenuNotificationSection_default,
  MusicCardShelf: () => MusicCardShelf_default,
  MusicCardShelfHeaderBasic: () => MusicCardShelfHeaderBasic_default,
  MusicCarouselShelf: () => MusicCarouselShelf_default,
  MusicCarouselShelfBasicHeader: () => MusicCarouselShelfBasicHeader_default,
  MusicDescriptionShelf: () => MusicDescriptionShelf_default,
  MusicDetailHeader: () => MusicDetailHeader_default,
  MusicDownloadStateBadge: () => MusicDownloadStateBadge_default,
  MusicEditablePlaylistDetailHeader: () => MusicEditablePlaylistDetailHeader_default,
  MusicElementHeader: () => MusicElementHeader_default,
  MusicHeader: () => MusicHeader_default,
  MusicImmersiveHeader: () => MusicImmersiveHeader_default,
  MusicInlineBadge: () => MusicInlineBadge_default,
  MusicItemThumbnailOverlay: () => MusicItemThumbnailOverlay_default,
  MusicLargeCardItemCarousel: () => MusicLargeCardItemCarousel_default,
  MusicMenuItemDivider: () => MusicMenuItemDivider_default,
  MusicMultiSelectMenu: () => MusicMultiSelectMenu_default,
  MusicMultiSelectMenuItem: () => MusicMultiSelectMenuItem_default,
  MusicNavigationButton: () => MusicNavigationButton_default,
  MusicPlayButton: () => MusicPlayButton_default,
  MusicPlaylistShelf: () => MusicPlaylistShelf_default,
  MusicQueue: () => MusicQueue_default,
  MusicResponsiveHeader: () => MusicResponsiveHeader_default,
  MusicResponsiveListItem: () => MusicResponsiveListItem_default,
  MusicResponsiveListItemFixedColumn: () => MusicResponsiveListItemFixedColumn_default,
  MusicResponsiveListItemFlexColumn: () => MusicResponsiveListItemFlexColumn_default,
  MusicShelf: () => MusicShelf_default,
  MusicSideAlignedItem: () => MusicSideAlignedItem_default,
  MusicSortFilterButton: () => MusicSortFilterButton_default,
  MusicTastebuilderShelf: () => MusicTastebuilderShelf_default,
  MusicTastebuilderShelfThumbnail: () => MusicTastebuilderShelfThumbnail_default,
  MusicThumbnail: () => MusicThumbnail_default,
  MusicTwoRowItem: () => MusicTwoRowItem_default,
  MusicVisualHeader: () => MusicVisualHeader_default,
  NavigationEndpoint: () => NavigationEndpoint_default,
  Notification: () => Notification_default,
  OpenPopupAction: () => OpenPopupAction_default,
  PageHeader: () => PageHeader_default,
  PageHeaderView: () => PageHeaderView_default,
  PageIntroduction: () => PageIntroduction_default,
  PdgCommentChip: () => PdgCommentChip_default,
  PlayerAnnotationsExpanded: () => PlayerAnnotationsExpanded_default,
  PlayerCaptionsTracklist: () => PlayerCaptionsTracklist_default,
  PlayerErrorMessage: () => PlayerErrorMessage_default,
  PlayerLegacyDesktopYpcOffer: () => PlayerLegacyDesktopYpcOffer_default,
  PlayerLegacyDesktopYpcTrailer: () => PlayerLegacyDesktopYpcTrailer_default,
  PlayerLiveStoryboardSpec: () => PlayerLiveStoryboardSpec_default,
  PlayerMicroformat: () => PlayerMicroformat_default,
  PlayerOverlay: () => PlayerOverlay_default,
  PlayerOverlayAutoplay: () => PlayerOverlayAutoplay_default,
  PlayerStoryboardSpec: () => PlayerStoryboardSpec_default,
  Playlist: () => Playlist_default,
  PlaylistCustomThumbnail: () => PlaylistCustomThumbnail_default,
  PlaylistHeader: () => PlaylistHeader_default,
  PlaylistInfoCardContent: () => PlaylistInfoCardContent_default,
  PlaylistMetadata: () => PlaylistMetadata_default,
  PlaylistPanel: () => PlaylistPanel_default,
  PlaylistPanelVideo: () => PlaylistPanelVideo_default,
  PlaylistPanelVideoWrapper: () => PlaylistPanelVideoWrapper_default,
  PlaylistSidebar: () => PlaylistSidebar_default,
  PlaylistSidebarPrimaryInfo: () => PlaylistSidebarPrimaryInfo_default,
  PlaylistSidebarSecondaryInfo: () => PlaylistSidebarSecondaryInfo_default,
  PlaylistVideo: () => PlaylistVideo_default,
  PlaylistVideoList: () => PlaylistVideoList_default,
  PlaylistVideoThumbnail: () => PlaylistVideoThumbnail_default,
  Poll: () => Poll_default,
  PollHeader: () => PollHeader_default,
  Post: () => Post_default,
  PostMultiImage: () => PostMultiImage_default,
  ProductList: () => ProductList_default,
  ProfileColumn: () => ProfileColumn_default,
  ProfileColumnStats: () => ProfileColumnStats_default,
  ProfileColumnStatsEntry: () => ProfileColumnStatsEntry_default,
  ProfileColumnUserInfo: () => ProfileColumnUserInfo_default,
  RecognitionShelf: () => RecognitionShelf_default,
  ReelItem: () => ReelItem_default,
  ReelShelf: () => ReelShelf_default,
  RelatedChipCloud: () => RelatedChipCloud_default,
  RemoveBannerForLiveChatCommand: () => RemoveBannerForLiveChatCommand_default,
  RemoveChatItemAction: () => RemoveChatItemAction_default,
  RemoveChatItemByAuthorAction: () => RemoveChatItemByAuthorAction_default,
  ReplaceChatItemAction: () => ReplaceChatItemAction_default,
  ReplayChatItemAction: () => ReplayChatItemAction_default,
  RichGrid: () => RichGrid_default,
  RichItem: () => RichItem_default,
  RichListHeader: () => RichListHeader_default,
  RichMetadata: () => RichMetadata_default,
  RichMetadataRow: () => RichMetadataRow_default,
  RichSection: () => RichSection_default,
  RichShelf: () => RichShelf_default,
  SearchBox: () => SearchBox_default,
  SearchFilter: () => SearchFilter_default,
  SearchFilterGroup: () => SearchFilterGroup_default,
  SearchRefinementCard: () => SearchRefinementCard_default,
  SearchSubMenu: () => SearchSubMenu_default,
  SearchSuggestion: () => SearchSuggestion_default,
  SearchSuggestionsSection: () => SearchSuggestionsSection_default,
  SecondarySearchContainer: () => SecondarySearchContainer_default,
  SectionList: () => SectionList_default,
  SegmentedLikeDislikeButton: () => SegmentedLikeDislikeButton_default,
  SettingBoolean: () => SettingBoolean_default,
  SettingsCheckbox: () => SettingsCheckbox_default,
  SettingsOptions: () => SettingsOptions_default,
  SettingsSidebar: () => SettingsSidebar_default,
  SettingsSwitch: () => SettingsSwitch_default,
  SharedPost: () => SharedPost_default,
  Shelf: () => Shelf_default,
  ShowCustomThumbnail: () => ShowCustomThumbnail_default,
  ShowLiveChatActionPanelAction: () => ShowLiveChatActionPanelAction_default,
  ShowLiveChatDialogAction: () => ShowLiveChatDialogAction_default,
  ShowLiveChatTooltipCommand: () => ShowLiveChatTooltipCommand_default,
  ShowingResultsFor: () => ShowingResultsFor_default,
  SimpleCardContent: () => SimpleCardContent_default,
  SimpleCardTeaser: () => SimpleCardTeaser_default,
  SimpleMenuHeader: () => SimpleMenuHeader_default,
  SimpleTextSection: () => SimpleTextSection_default,
  SingleActionEmergencySupport: () => SingleActionEmergencySupport_default,
  SingleColumnBrowseResults: () => SingleColumnBrowseResults_default,
  SingleColumnMusicWatchNextResults: () => SingleColumnMusicWatchNextResults_default,
  SingleHeroImage: () => SingleHeroImage_default,
  SlimOwner: () => SlimOwner_default,
  SlimVideoMetadata: () => SlimVideoMetadata_default,
  SortFilterSubMenu: () => SortFilterSubMenu_default,
  SponsorCommentBadge: () => SponsorCommentBadge_default,
  StatRow: () => StatRow_default,
  StructuredDescriptionContent: () => StructuredDescriptionContent_default,
  StructuredDescriptionPlaylistLockup: () => StructuredDescriptionPlaylistLockup_default,
  SubFeedOption: () => SubFeedOption_default,
  SubFeedSelector: () => SubFeedSelector_default,
  SubscribeButton: () => SubscribeButton_default,
  SubscriptionNotificationToggleButton: () => SubscriptionNotificationToggleButton_default,
  Tab: () => Tab_default,
  Tabbed: () => Tabbed_default,
  TabbedSearchResults: () => TabbedSearchResults_default,
  TextHeader: () => TextHeader_default,
  ThumbnailLandscapePortrait: () => ThumbnailLandscapePortrait_default,
  ThumbnailOverlayBottomPanel: () => ThumbnailOverlayBottomPanel_default,
  ThumbnailOverlayEndorsement: () => ThumbnailOverlayEndorsement_default,
  ThumbnailOverlayHoverText: () => ThumbnailOverlayHoverText_default,
  ThumbnailOverlayInlineUnplayable: () => ThumbnailOverlayInlineUnplayable_default,
  ThumbnailOverlayLoadingPreview: () => ThumbnailOverlayLoadingPreview_default,
  ThumbnailOverlayNowPlaying: () => ThumbnailOverlayNowPlaying_default,
  ThumbnailOverlayPinking: () => ThumbnailOverlayPinking_default,
  ThumbnailOverlayPlaybackStatus: () => ThumbnailOverlayPlaybackStatus_default,
  ThumbnailOverlayResumePlayback: () => ThumbnailOverlayResumePlayback_default,
  ThumbnailOverlaySidePanel: () => ThumbnailOverlaySidePanel_default,
  ThumbnailOverlayTimeStatus: () => ThumbnailOverlayTimeStatus_default,
  ThumbnailOverlayToggleButton: () => ThumbnailOverlayToggleButton_default,
  TimedMarkerDecoration: () => TimedMarkerDecoration_default,
  TitleAndButtonListHeader: () => TitleAndButtonListHeader_default,
  ToggleButton: () => ToggleButton_default,
  ToggleButtonView: () => ToggleButtonView_default,
  ToggleMenuServiceItem: () => ToggleMenuServiceItem_default,
  Tooltip: () => Tooltip_default,
  TopicChannelDetails: () => TopicChannelDetails_default,
  TwoColumnBrowseResults: () => TwoColumnBrowseResults_default,
  TwoColumnSearchResults: () => TwoColumnSearchResults_default,
  TwoColumnWatchNextResults: () => TwoColumnWatchNextResults_default,
  UniversalWatchCard: () => UniversalWatchCard_default,
  UpdateDateTextAction: () => UpdateDateTextAction_default,
  UpdateDescriptionAction: () => UpdateDescriptionAction_default,
  UpdateLiveChatPollAction: () => UpdateLiveChatPollAction_default,
  UpdateTitleAction: () => UpdateTitleAction_default,
  UpdateToggleButtonTextAction: () => UpdateToggleButtonTextAction_default,
  UpdateViewershipAction: () => UpdateViewershipAction_default,
  UploadTimeFactoid: () => UploadTimeFactoid_default,
  UpsellDialog: () => UpsellDialog_default,
  VerticalList: () => VerticalList_default,
  VerticalWatchCardList: () => VerticalWatchCardList_default,
  Video: () => Video_default,
  VideoAttributeView: () => VideoAttributeView_default,
  VideoCard: () => VideoCard_default,
  VideoDescriptionCourseSection: () => VideoDescriptionCourseSection_default,
  VideoDescriptionHeader: () => VideoDescriptionHeader_default,
  VideoDescriptionInfocardsSection: () => VideoDescriptionInfocardsSection_default,
  VideoDescriptionMusicSection: () => VideoDescriptionMusicSection_default,
  VideoDescriptionTranscriptSection: () => VideoDescriptionTranscriptSection_default,
  VideoInfoCardContent: () => VideoInfoCardContent_default,
  VideoOwner: () => VideoOwner_default,
  VideoPrimaryInfo: () => VideoPrimaryInfo_default,
  VideoSecondaryInfo: () => VideoSecondaryInfo_default,
  ViewCountFactoid: () => ViewCountFactoid_default,
  WatchCardCompactVideo: () => WatchCardCompactVideo_default,
  WatchCardHeroVideo: () => WatchCardHeroVideo_default,
  WatchCardRichHeader: () => WatchCardRichHeader_default,
  WatchCardSectionSequence: () => WatchCardSectionSequence_default,
  WatchNextEndScreen: () => WatchNextEndScreen_default,
  WatchNextTabbedResults: () => WatchNextTabbedResults_default,
  YpcTrailer: () => YpcTrailer_default
});

// dist/src/parser/classes/ChannelExternalLinkView.js
var ChannelExternalLinkView = class extends YTNode {
  constructor(data2) {
    super();
    this.title = Text.fromAttributed(data2.title);
    this.link = Text.fromAttributed(data2.link);
    this.favicon = Thumbnail.fromResponse(data2.favicon);
  }
};
__name(ChannelExternalLinkView, "ChannelExternalLinkView");
ChannelExternalLinkView.type = "ChannelExternalLinkView";
var ChannelExternalLinkView_default = ChannelExternalLinkView;

// dist/src/parser/classes/AboutChannelView.js
var AboutChannelView = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "description")) {
      this.description = data2.description;
    }
    if (Reflect.has(data2, "descriptionLabel")) {
      this.description_label = Text.fromAttributed(data2.descriptionLabel);
    }
    if (Reflect.has(data2, "country")) {
      this.country = data2.country;
    }
    if (Reflect.has(data2, "customLinksLabel")) {
      this.custom_links_label = Text.fromAttributed(data2.customLinksLabel);
    }
    if (Reflect.has(data2, "subscriberCountText")) {
      this.subscriber_count = data2.subscriberCountText;
    }
    if (Reflect.has(data2, "viewCountText")) {
      this.view_count = data2.viewCountText;
    }
    if (Reflect.has(data2, "joinedDateText")) {
      this.joined_date = Text.fromAttributed(data2.joinedDateText);
    }
    if (Reflect.has(data2, "canonicalChannelUrl")) {
      this.canonical_channel_url = data2.canonicalChannelUrl;
    }
    if (Reflect.has(data2, "channelId")) {
      this.channel_id = data2.channelId;
    }
    if (Reflect.has(data2, "additionalInfoLabel")) {
      this.additional_info_label = Text.fromAttributed(data2.additionalInfoLabel);
    }
    if (Reflect.has(data2, "customUrlOnTap")) {
      this.custom_url_on_tap = new NavigationEndpoint_default(data2.customUrlOnTap);
    }
    if (Reflect.has(data2, "videoCountText")) {
      this.video_count = data2.videoCountText;
    }
    if (Reflect.has(data2, "signInForBusinessEmail")) {
      this.sign_in_for_business_email = Text.fromAttributed(data2.signInForBusinessEmail);
    }
    if (Reflect.has(data2, "links")) {
      this.links = parser_default2.parseArray(data2.links, ChannelExternalLinkView_default);
    } else {
      this.links = [];
    }
  }
};
__name(AboutChannelView, "AboutChannelView");
AboutChannelView.type = "AboutChannelView";
var AboutChannelView_default = AboutChannelView;

// dist/src/parser/classes/AccountChannel.js
var AccountChannel = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
  }
};
__name(AccountChannel, "AccountChannel");
AccountChannel.type = "AccountChannel";
var AccountChannel_default = AccountChannel;

// dist/src/parser/classes/AccountItemSectionHeader.js
var AccountItemSectionHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
  }
};
__name(AccountItemSectionHeader, "AccountItemSectionHeader");
AccountItemSectionHeader.type = "AccountItemSectionHeader";
var AccountItemSectionHeader_default = AccountItemSectionHeader;

// dist/src/parser/classes/AccountItemSection.js
var AccountItem = class extends YTNode {
  constructor(data2) {
    super();
    this.account_name = new Text(data2.accountName);
    this.account_photo = Thumbnail.fromResponse(data2.accountPhoto);
    this.is_selected = !!data2.isSelected;
    this.is_disabled = !!data2.isDisabled;
    this.has_channel = !!data2.hasChannel;
    this.endpoint = new NavigationEndpoint_default(data2.serviceEndpoint);
    this.account_byline = new Text(data2.accountByline);
  }
};
__name(AccountItem, "AccountItem");
AccountItem.type = "AccountItem";
var AccountItemSection = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = observe(data2.contents.map((ac) => new AccountItem(ac.accountItem)));
    this.header = parser_default.parseItem(data2.header, AccountItemSectionHeader_default);
  }
};
__name(AccountItemSection, "AccountItemSection");
AccountItemSection.type = "AccountItemSection";
var AccountItemSection_default = AccountItemSection;

// dist/src/parser/classes/AccountSectionList.js
var AccountSectionList = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parseItem(data2.contents[0], AccountItemSection_default);
    this.footers = parser_default.parseItem(data2.footers[0], AccountChannel_default);
  }
};
__name(AccountSectionList, "AccountSectionList");
AccountSectionList.type = "AccountSectionList";
var AccountSectionList_default = AccountSectionList;

// dist/src/parser/classes/actions/AppendContinuationItemsAction.js
var AppendContinuationItemsAction = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parse(data2.continuationItems);
    this.target = data2.target;
  }
};
__name(AppendContinuationItemsAction, "AppendContinuationItemsAction");
AppendContinuationItemsAction.type = "AppendContinuationItemsAction";
var AppendContinuationItemsAction_default = AppendContinuationItemsAction;

// dist/src/parser/classes/actions/OpenPopupAction.js
var OpenPopupAction = class extends YTNode {
  constructor(data2) {
    super();
    this.popup = parser_default.parseItem(data2.popup);
    this.popup_type = data2.popupType;
  }
};
__name(OpenPopupAction, "OpenPopupAction");
OpenPopupAction.type = "OpenPopupAction";
var OpenPopupAction_default = OpenPopupAction;

// dist/src/parser/classes/analytics/DataModelSection.js
var DataModelSection = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.title;
    this.subtitle = data2.subtitle;
    this.metric_value = data2.metricValue;
    this.comparison_indicator = data2.comparisonIndicator;
    const line_series = data2.seriesConfiguration.lineSeries;
    this.series_configuration = {
      line_series: {
        lines_data: {
          x: line_series.linesData[0].x,
          y: line_series.linesData[0].y,
          style: {
            line_width: line_series.linesData[0].style.lineWidth,
            line_color: line_series.linesData[0].style.lineColor
          }
        },
        domain_axis: {
          tick_values: line_series.domainAxis.tickValues,
          custom_formatter: line_series.domainAxis.customFormatter
        },
        measure_axis: {
          tick_values: line_series.measureAxis.tickValues,
          custom_formatter: line_series.measureAxis.customFormatter
        }
      }
    };
  }
};
__name(DataModelSection, "DataModelSection");
DataModelSection.type = "DataModelSection";
var DataModelSection_default = DataModelSection;

// dist/src/parser/classes/analytics/AnalyticsMainAppKeyMetrics.js
var AnalyticsMainAppKeyMetrics = class extends YTNode {
  constructor(data2) {
    super();
    this.period = data2.cardData.periodLabel;
    const metrics_data = data2.cardData.sections[0].analyticsKeyMetricsData;
    this.sections = metrics_data.dataModel.sections.map((section) => new DataModelSection_default(section));
  }
};
__name(AnalyticsMainAppKeyMetrics, "AnalyticsMainAppKeyMetrics");
AnalyticsMainAppKeyMetrics.type = "AnalyticsMainAppKeyMetrics";
var AnalyticsMainAppKeyMetrics_default = AnalyticsMainAppKeyMetrics;

// dist/src/parser/classes/analytics/AnalyticsRoot.js
var AnalyticsRoot = class extends YTNode {
  constructor(data2) {
    super();
    const cards = data2.analyticsTableCarouselData.data.tableCards;
    this.title = data2.analyticsTableCarouselData.carouselTitle;
    this.selected_card_index_key = data2.analyticsTableCarouselData.selectedCardIndexKey;
    this.table_cards = cards.map((card) => ({
      title: card.cardData.title,
      rows: card.cardData.rows.map((row) => ({
        label: row.label,
        display_value: row.displayValue,
        display_value_a11y: row.displayValueA11y,
        bar_ratio: row.barRatio,
        bar_color: row.barColor,
        bar_opacity: row.barOpacity
      }))
    }));
    this.use_main_app_specs = data2.analyticsTableCarouselData.useMainAppSpecs;
  }
};
__name(AnalyticsRoot, "AnalyticsRoot");
AnalyticsRoot.type = "AnalyticsRoot";
var AnalyticsRoot_default = AnalyticsRoot;

// dist/src/parser/classes/analytics/AnalyticsShortsCarouselCard.js
var AnalyticsShortsCarouselCard = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.title;
    this.shorts = data2.shortsCarouselData.shorts.map((short) => ({
      description: short.shortsDescription,
      thumbnail_url: short.thumbnailUrl,
      endpoint: new NavigationEndpoint_default(short.videoEndpoint)
    }));
  }
};
__name(AnalyticsShortsCarouselCard, "AnalyticsShortsCarouselCard");
AnalyticsShortsCarouselCard.type = "AnalyticsShortsCarouselCard";
var AnalyticsShortsCarouselCard_default = AnalyticsShortsCarouselCard;

// dist/src/parser/classes/analytics/AnalyticsVideo.js
var AnalyticsVideo = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.videoTitle;
    this.metadata = {
      views: data2.videoDescription.split("\xB7")[0].trim(),
      published: data2.videoDescription.split("\xB7")[1].trim(),
      thumbnails: Thumbnail.fromResponse(data2.thumbnailDetails),
      duration: data2.formattedLength,
      is_short: data2.isShort
    };
  }
};
__name(AnalyticsVideo, "AnalyticsVideo");
AnalyticsVideo.type = "AnalyticsVideo";
var AnalyticsVideo_default = AnalyticsVideo;

// dist/src/parser/classes/analytics/AnalyticsVodCarouselCard.js
var AnalyticsVodCarouselCard = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.title;
    if (Reflect.has(data2, "noDataMessage")) {
      this.no_data_message = data2.noDataMessage;
    }
    if (Reflect.has(data2, "videoCarouselData") && Reflect.has(data2.videoCarouselData, "videos")) {
      this.videos = data2.videoCarouselData.videos.map((video) => new AnalyticsVideo_default(video));
    }
  }
};
__name(AnalyticsVodCarouselCard, "AnalyticsVodCarouselCard");
AnalyticsVodCarouselCard.type = "AnalyticsVodCarouselCard";
var AnalyticsVodCarouselCard_default = AnalyticsVodCarouselCard;

// dist/src/parser/classes/analytics/CtaGoToCreatorStudio.js
var CtaGoToCreatorStudio = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.buttonLabel;
    this.use_new_specs = data2.useNewSpecs;
  }
};
__name(CtaGoToCreatorStudio, "CtaGoToCreatorStudio");
CtaGoToCreatorStudio.type = "CtaGoToCreatorStudio";
var CtaGoToCreatorStudio_default = CtaGoToCreatorStudio;

// dist/src/parser/classes/analytics/StatRow.js
var StatRow = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.contents = new Text(data2.contents);
  }
};
__name(StatRow, "StatRow");
StatRow.type = "StatRow";
var StatRow_default = StatRow;

// dist/src/parser/classes/AttributionView.js
var AttributionView = class extends YTNode {
  constructor(data2) {
    super();
    this.text = Text.fromAttributed(data2.text);
    this.suffix = Text.fromAttributed(data2.suffix);
  }
};
__name(AttributionView, "AttributionView");
AttributionView.type = "AttributionView";
var AttributionView_default = AttributionView;

// dist/src/parser/classes/AutomixPreviewVideo.js
var AutomixPreviewVideo = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    if ((_b = (_a7 = data2 === null || data2 === void 0 ? void 0 : data2.content) === null || _a7 === void 0 ? void 0 : _a7.automixPlaylistVideoRenderer) === null || _b === void 0 ? void 0 : _b.navigationEndpoint) {
      this.playlist_video = {
        endpoint: new NavigationEndpoint_default(data2.content.automixPlaylistVideoRenderer.navigationEndpoint)
      };
    }
  }
};
__name(AutomixPreviewVideo, "AutomixPreviewVideo");
AutomixPreviewVideo.type = "AutomixPreviewVideo";
var AutomixPreviewVideo_default = AutomixPreviewVideo;

// dist/src/parser/classes/AvatarView.js
var AvatarView = class extends YTNode {
  constructor(data2) {
    super();
    this.image = Thumbnail.fromResponse(data2.image);
    this.image_processor = {
      border_image_processor: {
        circular: data2.image.processor.borderImageProcessor.circular
      }
    };
    this.avatar_image_size = data2.avatarImageSize;
  }
};
__name(AvatarView, "AvatarView");
AvatarView.type = "AvatarView";
var AvatarView_default = AvatarView;

// dist/src/parser/classes/BackstageImage.js
var BackstageImage = class extends YTNode {
  constructor(data2) {
    super();
    this.image = Thumbnail.fromResponse(data2.image);
    this.endpoint = new NavigationEndpoint_default(data2.command);
  }
};
__name(BackstageImage, "BackstageImage");
BackstageImage.type = "BackstageImage";
var BackstageImage_default = BackstageImage;

// dist/src/parser/classes/ToggleButton.js
var ToggleButton = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f, _g, _h;
    super();
    this.text = new Text(data2.defaultText);
    this.toggled_text = new Text(data2.toggledText);
    this.tooltip = data2.defaultTooltip;
    this.toggled_tooltip = data2.toggledTooltip;
    this.is_toggled = data2.isToggled;
    this.is_disabled = data2.isDisabled;
    this.icon_type = data2.defaultIcon.iconType;
    const acc_label = ((_c = (_b = (_a7 = data2 === null || data2 === void 0 ? void 0 : data2.defaultText) === null || _a7 === void 0 ? void 0 : _a7.accessibility) === null || _b === void 0 ? void 0 : _b.accessibilityData) === null || _c === void 0 ? void 0 : _c.label) || ((_e = (_d = data2 === null || data2 === void 0 ? void 0 : data2.accessibilityData) === null || _d === void 0 ? void 0 : _d.accessibilityData) === null || _e === void 0 ? void 0 : _e.label) || ((_f = data2 === null || data2 === void 0 ? void 0 : data2.accessibility) === null || _f === void 0 ? void 0 : _f.label);
    if (this.icon_type == "LIKE") {
      this.like_count = parseInt(acc_label.replace(/\D/g, ""));
      this.short_like_count = new Text(data2.defaultText).toString();
    }
    this.endpoint = ((_h = (_g = data2.defaultServiceEndpoint) === null || _g === void 0 ? void 0 : _g.commandExecutorCommand) === null || _h === void 0 ? void 0 : _h.commands) ? new NavigationEndpoint_default(data2.defaultServiceEndpoint.commandExecutorCommand.commands.pop()) : new NavigationEndpoint_default(data2.defaultServiceEndpoint);
    this.toggled_endpoint = new NavigationEndpoint_default(data2.toggledServiceEndpoint);
    if (Reflect.has(data2, "toggleButtonSupportedData") && Reflect.has(data2.toggleButtonSupportedData, "toggleButtonIdData")) {
      this.button_id = data2.toggleButtonSupportedData.toggleButtonIdData.id;
    }
    if (Reflect.has(data2, "targetId")) {
      this.target_id = data2.targetId;
    }
  }
};
__name(ToggleButton, "ToggleButton");
ToggleButton.type = "ToggleButton";
var ToggleButton_default = ToggleButton;

// dist/src/parser/classes/comments/CreatorHeart.js
var CreatorHeart = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.creator_thumbnail = Thumbnail.fromResponse(data2.creatorThumbnail);
    if (Reflect.has(data2, "heartIcon") && Reflect.has(data2.heartIcon, "iconType")) {
      this.heart_icon_type = data2.heartIcon.iconType;
    }
    this.heart_color = {
      basic_color_palette_data: {
        foreground_title_color: (_b = (_a7 = data2.heartColor) === null || _a7 === void 0 ? void 0 : _a7.basicColorPaletteData) === null || _b === void 0 ? void 0 : _b.foregroundTitleColor
      }
    };
    this.hearted_tooltip = data2.heartedTooltip;
    this.is_hearted = data2.isHearted;
    this.is_enabled = data2.isEnabled;
    this.kennedy_heart_color_string = data2.kennedyHeartColorString;
  }
};
__name(CreatorHeart, "CreatorHeart");
CreatorHeart.type = "CreatorHeart";
var CreatorHeart_default = CreatorHeart;

// dist/src/parser/classes/comments/CommentActionButtons.js
var CommentActionButtons = class extends YTNode {
  constructor(data2) {
    super();
    this.like_button = parser_default.parseItem(data2.likeButton, ToggleButton_default);
    this.dislike_button = parser_default.parseItem(data2.dislikeButton, ToggleButton_default);
    this.reply_button = parser_default.parseItem(data2.replyButton, Button_default);
    this.creator_heart = parser_default.parseItem(data2.creatorHeart, CreatorHeart_default);
  }
};
__name(CommentActionButtons, "CommentActionButtons");
CommentActionButtons.type = "CommentActionButtons";
var CommentActionButtons_default = CommentActionButtons;

// dist/src/parser/classes/BackstagePost.js
var BackstagePost = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.postId;
    this.author = new Author_default(Object.assign(Object.assign({}, data2.authorText), { navigationEndpoint: data2.authorEndpoint }), null, data2.authorThumbnail);
    this.content = new Text(data2.contentText);
    this.published = new Text(data2.publishedTimeText);
    if (Reflect.has(data2, "pollStatus")) {
      this.poll_status = data2.pollStatus;
    }
    if (Reflect.has(data2, "voteStatus")) {
      this.vote_status = data2.voteStatus;
    }
    if (Reflect.has(data2, "voteCount")) {
      this.vote_count = new Text(data2.voteCount);
    }
    if (Reflect.has(data2, "actionMenu")) {
      this.menu = parser_default.parseItem(data2.actionMenu, Menu_default);
    }
    if (Reflect.has(data2, "actionButtons")) {
      this.action_buttons = parser_default.parseItem(data2.actionButtons, CommentActionButtons_default);
    }
    if (Reflect.has(data2, "voteButton")) {
      this.vote_button = parser_default.parseItem(data2.voteButton, CommentActionButtons_default);
    }
    if (Reflect.has(data2, "navigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    }
    if (Reflect.has(data2, "backstageAttachment")) {
      this.attachment = parser_default.parseItem(data2.backstageAttachment);
    }
    this.surface = data2.surface;
  }
};
__name(BackstagePost, "BackstagePost");
BackstagePost.type = "BackstagePost";
var BackstagePost_default = BackstagePost;

// dist/src/parser/classes/BackstagePostThread.js
var BackstagePostThread = class extends YTNode {
  constructor(data2) {
    super();
    this.post = parser_default.parseItem(data2.post);
  }
};
__name(BackstagePostThread, "BackstagePostThread");
BackstagePostThread.type = "BackstagePostThread";
var BackstagePostThread_default = BackstagePostThread;

// dist/src/parser/classes/BrowseFeedActions.js
var BrowseFeedActions = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parseArray(data2.contents);
  }
};
__name(BrowseFeedActions, "BrowseFeedActions");
BrowseFeedActions.type = "BrowseFeedActions";
var BrowseFeedActions_default = BrowseFeedActions;

// dist/src/parser/classes/BrowserMediaSession.js
var BrowserMediaSession = class extends YTNode {
  constructor(data2) {
    super();
    this.album = new Text(data2.album);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnailDetails);
  }
};
__name(BrowserMediaSession, "BrowserMediaSession");
BrowserMediaSession.type = "BrowserMediaSession";
var BrowserMediaSession_default = BrowserMediaSession;

// dist/src/parser/classes/ButtonView.js
var ButtonView = class extends YTNode {
  constructor(data2) {
    super();
    this.icon_name = data2.iconName;
    this.title = data2.title;
    this.accessibility_text = data2.accessibilityText;
    this.style = data2.style;
    this.is_full_width = data2.isFullWidth;
    this.button_type = data2.type;
    this.button_size = data2.buttonSize;
    this.on_tap = new NavigationEndpoint_default(data2.onTap);
  }
};
__name(ButtonView, "ButtonView");
ButtonView.type = "ButtonView";
var ButtonView_default = ButtonView;

// dist/src/parser/classes/ChannelHeaderLinks.js
var HeaderLink = class extends YTNode {
  constructor(data2) {
    super();
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.icon = Thumbnail.fromResponse(data2.icon);
    this.title = new Text(data2.title);
  }
};
__name(HeaderLink, "HeaderLink");
HeaderLink.type = "HeaderLink";
var ChannelHeaderLinks = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.primary = observe(((_a7 = data2.primaryLinks) === null || _a7 === void 0 ? void 0 : _a7.map((link) => new HeaderLink(link))) || []);
    this.secondary = observe(((_b = data2.secondaryLinks) === null || _b === void 0 ? void 0 : _b.map((link) => new HeaderLink(link))) || []);
  }
};
__name(ChannelHeaderLinks, "ChannelHeaderLinks");
ChannelHeaderLinks.type = "ChannelHeaderLinks";
var ChannelHeaderLinks_default = ChannelHeaderLinks;

// dist/src/parser/classes/SubscriptionNotificationToggleButton.js
var SubscriptionNotificationToggleButton = class extends YTNode {
  constructor(data2) {
    super();
    this.states = data2.states.map((data3) => ({
      id: data3.stateId,
      next_id: data3.nextStateId,
      state: parser_default.parse(data3.state)
    }));
    this.current_state_id = data2.currentStateId;
    this.target_id = data2.targetId;
  }
};
__name(SubscriptionNotificationToggleButton, "SubscriptionNotificationToggleButton");
SubscriptionNotificationToggleButton.type = "SubscriptionNotificationToggleButton";
var SubscriptionNotificationToggleButton_default = SubscriptionNotificationToggleButton;

// dist/src/parser/classes/SubscribeButton.js
var SubscribeButton = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.title = new Text(data2.buttonText);
    this.subscribed = data2.subscribed;
    this.enabled = data2.enabled;
    this.item_type = data2.type;
    this.channel_id = data2.channelId;
    this.show_preferences = data2.showPreferences;
    this.subscribed_text = new Text(data2.subscribedButtonText);
    this.unsubscribed_text = new Text(data2.unsubscribedButtonText);
    this.notification_preference_button = parser_default.parseItem(data2.notificationPreferenceButton, SubscriptionNotificationToggleButton_default);
    this.endpoint = new NavigationEndpoint_default(((_a7 = data2.serviceEndpoints) === null || _a7 === void 0 ? void 0 : _a7[0]) || ((_b = data2.onSubscribeEndpoints) === null || _b === void 0 ? void 0 : _b[0]));
  }
};
__name(SubscribeButton, "SubscribeButton");
SubscribeButton.type = "SubscribeButton";
var SubscribeButton_default = SubscribeButton;

// dist/src/parser/classes/C4TabbedHeader.js
var C4TabbedHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.author = new Author_default({
      simpleText: data2.title,
      navigationEndpoint: data2.navigationEndpoint
    }, data2.badges, data2.avatar);
    if (Reflect.has(data2, "banner")) {
      this.banner = Thumbnail.fromResponse(data2.banner);
    }
    if (Reflect.has(data2, "tv_banner")) {
      this.tv_banner = Thumbnail.fromResponse(data2.tvBanner);
    }
    if (Reflect.has(data2, "mobile_banner")) {
      this.mobile_banner = Thumbnail.fromResponse(data2.mobileBanner);
    }
    if (Reflect.has(data2, "subscriberCountText")) {
      this.subscribers = new Text(data2.subscriberCountText);
    }
    if (Reflect.has(data2, "videosCountText")) {
      this.videos_count = new Text(data2.videosCountText);
    }
    if (Reflect.has(data2, "sponsorButton")) {
      this.sponsor_button = parser_default.parseItem(data2.sponsorButton, Button_default);
    }
    if (Reflect.has(data2, "subscribeButton")) {
      this.subscribe_button = parser_default.parseItem(data2.subscribeButton, [SubscribeButton_default, Button_default]);
    }
    if (Reflect.has(data2, "headerLinks")) {
      this.header_links = parser_default.parseItem(data2.headerLinks, ChannelHeaderLinks_default);
    }
    if (Reflect.has(data2, "channelHandleText")) {
      this.channel_handle = new Text(data2.channelHandleText);
    }
    if (Reflect.has(data2, "channelId")) {
      this.channel_id = data2.channelId;
    }
  }
};
__name(C4TabbedHeader, "C4TabbedHeader");
C4TabbedHeader.type = "C4TabbedHeader";
var C4TabbedHeader_default = C4TabbedHeader;

// dist/src/parser/classes/CallToActionButton.js
var CallToActionButton = class extends YTNode {
  constructor(data2) {
    super();
    this.label = new Text(data2.label);
    this.icon_type = data2.icon.iconType;
    this.style = data2.style;
  }
};
__name(CallToActionButton, "CallToActionButton");
CallToActionButton.type = "CallToActionButton";
var CallToActionButton_default = CallToActionButton;

// dist/src/parser/classes/Card.js
var Card = class extends YTNode {
  constructor(data2) {
    super();
    this.teaser = parser_default.parseItem(data2.teaser);
    this.content = parser_default.parseItem(data2.content);
    if (Reflect.has(data2, "cardId")) {
      this.card_id = data2.cardId;
    }
    if (Reflect.has(data2, "feature")) {
      this.feature = data2.feature;
    }
    this.cue_ranges = data2.cueRanges.map((cr) => ({
      start_card_active_ms: cr.startCardActiveMs,
      end_card_active_ms: cr.endCardActiveMs,
      teaser_duration_ms: cr.teaserDurationMs,
      icon_after_teaser_ms: cr.iconAfterTeaserMs
    }));
  }
};
__name(Card, "Card");
Card.type = "Card";
var Card_default = Card;

// dist/src/parser/classes/CarouselHeader.js
var CarouselHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parseArray(data2.contents);
  }
};
__name(CarouselHeader, "CarouselHeader");
CarouselHeader.type = "CarouselHeader";
var CarouselHeader_default = CarouselHeader;

// dist/src/parser/classes/CarouselItem.js
var CarouselItem = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parseArray(data2.carouselItems);
    this.background_color = data2.backgroundColor;
    this.layout_style = data2.layoutStyle;
    this.pagination_thumbnails = Thumbnail.fromResponse(data2.paginationThumbnails);
    this.paginator_alignment = data2.paginatorAlignment;
  }
  get contents() {
    return this.items;
  }
};
__name(CarouselItem, "CarouselItem");
CarouselItem.type = "CarouselItem";
var CarouselItem_default = CarouselItem;

// dist/src/parser/classes/InfoRow.js
var InfoRow = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    if (Reflect.has(data2, "defaultMetadata")) {
      this.default_metadata = new Text(data2.defaultMetadata);
    }
    if (Reflect.has(data2, "expandedMetadata")) {
      this.expanded_metadata = new Text(data2.expandedMetadata);
    }
    if (Reflect.has(data2, "infoRowExpandStatusKey")) {
      this.info_row_expand_status_key = data2.infoRowExpandStatusKey;
    }
  }
};
__name(InfoRow, "InfoRow");
InfoRow.type = "InfoRow";
var InfoRow_default = InfoRow;

// dist/src/parser/classes/MetadataBadge.js
var MetadataBadge = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "icon")) {
      this.icon_type = data2.icon.iconType;
    }
    if (Reflect.has(data2, "style")) {
      this.style = data2.style;
    }
    if (Reflect.has(data2, "label")) {
      this.label = data2.label;
    }
    if (Reflect.has(data2, "tooltip") || Reflect.has(data2, "iconTooltip")) {
      this.tooltip = data2.tooltip || data2.iconTooltip;
    }
  }
};
__name(MetadataBadge, "MetadataBadge");
MetadataBadge.type = "MetadataBadge";
var MetadataBadge_default = MetadataBadge;

// dist/src/parser/classes/CompactVideo.js
var CompactVideo = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.videoId;
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail) || null;
    if (Reflect.has(data2, "richThumbnail")) {
      this.rich_thumbnail = parser_default.parse(data2.richThumbnail);
    }
    this.title = new Text(data2.title);
    this.author = new Author_default(data2.longBylineText, data2.ownerBadges, data2.channelThumbnail);
    this.view_count = new Text(data2.viewCountText);
    this.short_view_count = new Text(data2.shortViewCountText);
    this.published = new Text(data2.publishedTimeText);
    this.badges = parser_default.parseArray(data2.badges, MetadataBadge_default);
    this.duration = {
      text: new Text(data2.lengthText).toString(),
      seconds: timeToSeconds(new Text(data2.lengthText).toString())
    };
    this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
  }
  get best_thumbnail() {
    return this.thumbnails[0];
  }
  get is_fundraiser() {
    return this.badges.some((badge) => badge.label === "Fundraiser");
  }
  get is_live() {
    return this.badges.some((badge) => {
      if (badge.style === "BADGE_STYLE_TYPE_LIVE_NOW" || badge.label === "LIVE")
        return true;
    });
  }
  get is_new() {
    return this.badges.some((badge) => badge.label === "New");
  }
  get is_premiere() {
    return this.badges.some((badge) => badge.style === "PREMIERE");
  }
};
__name(CompactVideo, "CompactVideo");
CompactVideo.type = "CompactVideo";
var CompactVideo_default = CompactVideo;

// dist/src/parser/classes/CarouselLockup.js
var CarouselLockup = class extends YTNode {
  constructor(data2) {
    super();
    this.info_rows = parser_default2.parseArray(data2.infoRows, InfoRow_default);
    this.video_lockup = parser_default2.parseItem(data2.videoLockup, CompactVideo_default);
  }
};
__name(CarouselLockup, "CarouselLockup");
CarouselLockup.type = "CarouselLockup";
var CarouselLockup_default = CarouselLockup;

// dist/src/parser/classes/Channel.js
var Channel = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.channelId;
    this.author = new Author_default(Object.assign(Object.assign({}, data2.title), { navigationEndpoint: data2.navigationEndpoint }), data2.ownerBadges, data2.thumbnail);
    this.subscriber_count = new Text(data2.subscriberCountText);
    this.video_count = new Text(data2.videoCountText);
    this.long_byline = new Text(data2.longBylineText);
    this.short_byline = new Text(data2.shortBylineText);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.subscribe_button = parser_default.parseItem(data2.subscribeButton, [SubscribeButton_default, Button_default]);
    this.description_snippet = new Text(data2.descriptionSnippet);
  }
  get subscribers() {
    return this.subscriber_count;
  }
  get videos() {
    return this.video_count;
  }
};
__name(Channel, "Channel");
Channel.type = "Channel";
var Channel_default = Channel;

// dist/src/parser/classes/ChannelAboutFullMetadata.js
var ChannelAboutFullMetadata = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.id = data2.channelId;
    this.name = new Text(data2.title);
    this.avatar = Thumbnail.fromResponse(data2.avatar);
    this.canonical_channel_url = data2.canonicalChannelUrl;
    this.primary_links = (_b = (_a7 = data2.primaryLinks) === null || _a7 === void 0 ? void 0 : _a7.map((link) => ({
      endpoint: new NavigationEndpoint_default(link.navigationEndpoint),
      icon: Thumbnail.fromResponse(link.icon),
      title: new Text(link.title)
    }))) !== null && _b !== void 0 ? _b : [];
    this.view_count = new Text(data2.viewCountText);
    this.joined_date = new Text(data2.joinedDateText);
    this.description = new Text(data2.description);
    this.email_reveal = new NavigationEndpoint_default(data2.onBusinessEmailRevealClickCommand);
    this.can_reveal_email = !data2.signInForBusinessEmail;
    this.country = new Text(data2.country);
    this.buttons = parser_default.parseArray(data2.actionButtons, Button_default);
  }
  get views() {
    return this.view_count;
  }
  get joined() {
    return this.joined_date;
  }
};
__name(ChannelAboutFullMetadata, "ChannelAboutFullMetadata");
ChannelAboutFullMetadata.type = "ChannelAboutFullMetadata";
var ChannelAboutFullMetadata_default = ChannelAboutFullMetadata;

// dist/src/parser/classes/ChannelAgeGate.js
var ChannelAgeGate = class extends YTNode {
  constructor(data2) {
    super();
    this.channel_title = data2.channelTitle;
    this.avatar = Thumbnail.fromResponse(data2.avatar);
    this.header = new Text(data2.header);
    this.main_text = new Text(data2.mainText);
    this.sign_in_button = parser_default2.parseItem(data2.signInButton, Button_default);
    this.secondary_text = new Text(data2.secondaryText);
  }
};
__name(ChannelAgeGate, "ChannelAgeGate");
ChannelAgeGate.type = "ChannelAgeGate";
var ChannelAgeGate_default = ChannelAgeGate;

// dist/src/parser/classes/ChannelFeaturedContent.js
var ChannelFeaturedContent = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.items = parser_default.parseArray(data2.items);
  }
};
__name(ChannelFeaturedContent, "ChannelFeaturedContent");
ChannelFeaturedContent.type = "ChannelFeaturedContent";
var ChannelFeaturedContent_default = ChannelFeaturedContent;

// dist/src/parser/classes/ChannelMetadata.js
var ChannelMetadata = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.title;
    this.description = data2.description;
    this.url = data2.channelUrl;
    this.rss_url = data2.rssUrl;
    this.vanity_channel_url = data2.vanityChannelUrl;
    this.external_id = data2.externalId;
    this.is_family_safe = data2.isFamilySafe;
    this.keywords = data2.keywords;
    this.avatar = Thumbnail.fromResponse(data2.avatar);
    this.available_countries = data2.availableCountryCodes;
    this.android_deep_link = data2.androidDeepLink;
    this.android_appindexing_link = data2.androidAppindexingLink;
    this.ios_appindexing_link = data2.iosAppindexingLink;
  }
};
__name(ChannelMetadata, "ChannelMetadata");
ChannelMetadata.type = "ChannelMetadata";
var ChannelMetadata_default = ChannelMetadata;

// dist/src/parser/classes/ChannelMobileHeader.js
var ChannelMobileHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
  }
};
__name(ChannelMobileHeader, "ChannelMobileHeader");
ChannelMobileHeader.type = "ChannelMobileHeader";
var ChannelMobileHeader_default = ChannelMobileHeader;

// dist/src/parser/classes/ChannelOptions.js
var ChannelOptions = class extends YTNode {
  constructor(data2) {
    super();
    this.avatar = Thumbnail.fromResponse(data2.avatar);
    this.endpoint = new NavigationEndpoint_default(data2.avatarEndpoint);
    this.name = data2.name;
    this.links = data2.links.map((link) => new Text(link));
  }
};
__name(ChannelOptions, "ChannelOptions");
ChannelOptions.type = "ChannelOptions";
var ChannelOptions_default = ChannelOptions;

// dist/src/parser/classes/ChannelSubMenu.js
var ChannelSubMenu = class extends YTNode {
  constructor(data2) {
    super();
    this.content_type_sub_menu_items = data2.contentTypeSubMenuItems.map((item) => ({
      endpoint: new NavigationEndpoint_default(item.navigationEndpoint || item.endpoint),
      selected: item.selected,
      title: item.title
    }));
    this.sort_setting = parser_default.parseItem(data2.sortSetting);
  }
};
__name(ChannelSubMenu, "ChannelSubMenu");
ChannelSubMenu.type = "ChannelSubMenu";
var ChannelSubMenu_default = ChannelSubMenu;

// dist/src/parser/classes/ChannelThumbnailWithLink.js
var ChannelThumbnailWithLink = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.label = (_b = (_a7 = data2.accessibility) === null || _a7 === void 0 ? void 0 : _a7.accessibilityData) === null || _b === void 0 ? void 0 : _b.label;
  }
};
__name(ChannelThumbnailWithLink, "ChannelThumbnailWithLink");
ChannelThumbnailWithLink.type = "ChannelThumbnailWithLink";
var ChannelThumbnailWithLink_default = ChannelThumbnailWithLink;

// dist/src/parser/classes/ChannelVideoPlayer.js
var ChannelVideoPlayer = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.videoId;
    this.title = new Text(data2.title);
    this.description = new Text(data2.description);
    this.view_count = new Text(data2.viewCountText);
    this.published_time = new Text(data2.publishedTimeText);
  }
  get views() {
    return this.view_count;
  }
  get published() {
    return this.published_time;
  }
};
__name(ChannelVideoPlayer, "ChannelVideoPlayer");
ChannelVideoPlayer.type = "ChannelVideoPlayer";
var ChannelVideoPlayer_default = ChannelVideoPlayer;

// dist/src/parser/classes/Chapter.js
var Chapter = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.time_range_start_millis = data2.timeRangeStartMillis;
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
  }
};
__name(Chapter, "Chapter");
Chapter.type = "Chapter";
var Chapter_default = Chapter;

// dist/src/parser/classes/ChildVideo.js
var ChildVideo = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.videoId;
    this.title = new Text(data2.title);
    this.duration = {
      text: data2.lengthText.simpleText,
      seconds: timeToSeconds(data2.lengthText.simpleText)
    };
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
  }
};
__name(ChildVideo, "ChildVideo");
ChildVideo.type = "ChildVideo";
var ChildVideo_default = ChildVideo;

// dist/src/parser/classes/ChipCloudChip.js
var ChipCloudChip = class extends YTNode {
  constructor(data2) {
    super();
    this.is_selected = data2.isSelected;
    if (Reflect.has(data2, "navigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    }
    if (Reflect.has(data2, "onDeselectedCommand")) {
      this.deselect_endpoint = new NavigationEndpoint_default(data2.onDeselectedCommand);
    }
    this.text = new Text(data2.text).toString();
  }
};
__name(ChipCloudChip, "ChipCloudChip");
ChipCloudChip.type = "ChipCloudChip";
var ChipCloudChip_default = ChipCloudChip;

// dist/src/parser/classes/ChipCloud.js
var ChipCloud = class extends YTNode {
  constructor(data2) {
    super();
    this.chips = parser_default.parseArray(data2.chips, ChipCloudChip_default);
    this.next_button = parser_default.parseItem(data2.nextButton, Button_default);
    this.previous_button = parser_default.parseItem(data2.previousButton, Button_default);
    this.horizontal_scrollable = data2.horizontalScrollable;
  }
};
__name(ChipCloud, "ChipCloud");
ChipCloud.type = "ChipCloud";
var ChipCloud_default = ChipCloud;

// dist/src/parser/classes/ClipAdState.js
var ClipAdState = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.body = new Text(data2.body);
  }
};
__name(ClipAdState, "ClipAdState");
ClipAdState.type = "ClipAdState";
var ClipAdState_default = ClipAdState;

// dist/src/parser/classes/ClipCreationTextInput.js
var ClipCreationTextInput = class extends YTNode {
  constructor(data2) {
    super();
    this.placeholder_text = new Text(data2.placeholderText);
    this.max_character_limit = data2.maxCharacterLimit;
  }
};
__name(ClipCreationTextInput, "ClipCreationTextInput");
ClipCreationTextInput.type = "ClipCreationTextInput";
var ClipCreationTextInput_default = ClipCreationTextInput;

// dist/src/parser/classes/ClipCreationScrubber.js
var ClipCreationScrubber = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f;
    super();
    this.length_template = data2.lengthTemplate;
    this.max_length_ms = data2.maxLengthMs;
    this.min_length_ms = data2.minLengthMs;
    this.default_length_ms = data2.defaultLengthMs;
    this.window_size_ms = data2.windowSizeMs;
    this.start_label = (_b = (_a7 = data2.startAccessibility) === null || _a7 === void 0 ? void 0 : _a7.accessibilityData) === null || _b === void 0 ? void 0 : _b.label;
    this.end_label = (_d = (_c = data2.endAccessibility) === null || _c === void 0 ? void 0 : _c.accessibilityData) === null || _d === void 0 ? void 0 : _d.label;
    this.duration_label = (_f = (_e = data2.durationAccessibility) === null || _e === void 0 ? void 0 : _e.accessibilityData) === null || _f === void 0 ? void 0 : _f.label;
  }
};
__name(ClipCreationScrubber, "ClipCreationScrubber");
ClipCreationScrubber.type = "ClipCreationScrubber";
var ClipCreationScrubber_default = ClipCreationScrubber;

// dist/src/parser/classes/ClipCreation.js
var ClipCreation = class extends YTNode {
  constructor(data2) {
    super();
    this.user_avatar = Thumbnail.fromResponse(data2.userAvatar);
    this.title_input = parser_default2.parseItem(data2.titleInput, [ClipCreationTextInput_default]);
    this.scrubber = parser_default2.parseItem(data2.scrubber, [ClipCreationScrubber_default]);
    this.save_button = parser_default2.parseItem(data2.saveButton, [Button_default]);
    this.display_name = new Text(data2.displayName);
    this.publicity_label = data2.publicityLabel;
    this.cancel_button = parser_default2.parseItem(data2.cancelButton, [Button_default]);
    this.ad_state_overlay = parser_default2.parseItem(data2.adStateOverlay, [ClipAdState_default]);
    this.external_video_id = data2.externalVideoId;
    this.publicity_label_icon = data2.publicityLabelIcon;
  }
};
__name(ClipCreation, "ClipCreation");
ClipCreation.type = "ClipCreation";
var ClipCreation_default = ClipCreation;

// dist/src/parser/classes/ClipSection.js
var ClipSection = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default2.parse(data2.contents, true, [ClipCreation_default]);
  }
};
__name(ClipSection, "ClipSection");
ClipSection.type = "ClipSection";
var ClipSection_default = ClipSection;

// dist/src/parser/classes/CollaboratorInfoCardContent.js
var CollaboratorInfoCardContent = class extends YTNode {
  constructor(data2) {
    super();
    this.channel_avatar = Thumbnail.fromResponse(data2.channelAvatar);
    this.custom_text = new Text(data2.customText);
    this.channel_name = new Text(data2.channelName);
    this.subscriber_count = new Text(data2.subscriberCountText);
    this.endpoint = new NavigationEndpoint_default(data2.endpoint);
  }
};
__name(CollaboratorInfoCardContent, "CollaboratorInfoCardContent");
CollaboratorInfoCardContent.type = "CollaboratorInfoCardContent";
var CollaboratorInfoCardContent_default = CollaboratorInfoCardContent;

// dist/src/parser/classes/CollageHeroImage.js
var CollageHeroImage = class extends YTNode {
  constructor(data2) {
    super();
    this.left = Thumbnail.fromResponse(data2.leftThumbnail);
    this.top_right = Thumbnail.fromResponse(data2.topRightThumbnail);
    this.bottom_right = Thumbnail.fromResponse(data2.bottomRightThumbnail);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
  }
};
__name(CollageHeroImage, "CollageHeroImage");
CollageHeroImage.type = "CollageHeroImage";
var CollageHeroImage_default = CollageHeroImage;

// dist/src/parser/classes/comments/AuthorCommentBadge.js
var _AuthorCommentBadge_data;
var AuthorCommentBadge = class extends YTNode {
  constructor(data2) {
    super();
    _AuthorCommentBadge_data.set(this, void 0);
    if (Reflect.has(data2, "icon") && Reflect.has(data2.icon, "iconType")) {
      this.icon_type = data2.icon.iconType;
    }
    this.tooltip = data2.iconTooltip;
    this.tooltip === "Verified" && (this.style = "BADGE_STYLE_TYPE_VERIFIED") && (data2.style = "BADGE_STYLE_TYPE_VERIFIED");
    __classPrivateFieldSet(this, _AuthorCommentBadge_data, data2, "f");
  }
  get orig_badge() {
    return __classPrivateFieldGet(this, _AuthorCommentBadge_data, "f");
  }
};
__name(AuthorCommentBadge, "AuthorCommentBadge");
_AuthorCommentBadge_data = /* @__PURE__ */ new WeakMap();
AuthorCommentBadge.type = "AuthorCommentBadge";
var AuthorCommentBadge_default = AuthorCommentBadge;

// dist/src/parser/classes/comments/CommentReplyDialog.js
var CommentReplyDialog = class extends YTNode {
  constructor(data2) {
    super();
    this.reply_button = parser_default.parseItem(data2.replyButton, Button_default);
    this.cancel_button = parser_default.parseItem(data2.cancelButton, Button_default);
    this.author_thumbnail = Thumbnail.fromResponse(data2.authorThumbnail);
    this.placeholder = new Text(data2.placeholderText);
    this.error_message = new Text(data2.errorMessage);
  }
};
__name(CommentReplyDialog, "CommentReplyDialog");
CommentReplyDialog.type = "CommentReplyDialog";
var CommentReplyDialog_default = CommentReplyDialog;

// dist/src/parser/classes/comments/PdgCommentChip.js
var PdgCommentChip = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.text = new Text(data2.chipText);
    this.color_pallette = {
      background_color: (_a7 = data2.chipColorPalette) === null || _a7 === void 0 ? void 0 : _a7.backgroundColor,
      foreground_title_color: (_b = data2.chipColorPalette) === null || _b === void 0 ? void 0 : _b.foregroundTitleColor
    };
    if (Reflect.has(data2, "chipIcon") && Reflect.has(data2.chipIcon, "iconType")) {
      this.icon_type = data2.chipIcon.iconType;
    }
  }
};
__name(PdgCommentChip, "PdgCommentChip");
PdgCommentChip.type = "PdgCommentChip";
var PdgCommentChip_default = PdgCommentChip;

// dist/src/parser/classes/comments/SponsorCommentBadge.js
var SponsorCommentBadge = class extends YTNode {
  constructor(data2) {
    super();
    this.custom_badge = Thumbnail.fromResponse(data2.customBadge);
    this.tooltip = data2.tooltip;
  }
};
__name(SponsorCommentBadge, "SponsorCommentBadge");
SponsorCommentBadge.type = "SponsorCommentBadge";
var SponsorCommentBadge_default = SponsorCommentBadge;

// dist/src/proto/generated/runtime/wire/index.js
var WireType;
(function(WireType2) {
  WireType2[WireType2["Varint"] = 0] = "Varint";
  WireType2[WireType2["Fixed64"] = 1] = "Fixed64";
  WireType2[WireType2["LengthDelimited"] = 2] = "LengthDelimited";
  WireType2[WireType2["StartGroup"] = 3] = "StartGroup";
  WireType2[WireType2["EndGroup"] = 4] = "EndGroup";
  WireType2[WireType2["Fixed32"] = 5] = "Fixed32";
})(WireType || (WireType = {}));

// dist/src/proto/generated/runtime/Long.js
var UINT16_MAX = 65535;
var UINT32_MAX = 4294967295;
var Long = class extends Uint32Array {
  constructor(lo = 0, hi = 0) {
    super([lo, hi]);
  }
  toString(signed = true) {
    const [lo, hi] = this;
    if (lo === 0 && hi === 0)
      return "0";
    if (signed && hi > 2147483647) {
      return "-" + add(negate(this), one).toString(false);
    }
    const result = [];
    let tmp = new Long(lo, hi);
    while (compare(tmp, zero)) {
      const [next, remainder] = divByTen(tmp);
      result.push(remainder);
      tmp = next;
    }
    return result.reverse().join("");
  }
  static parse(text) {
    const parsedValue = parseInt(text, 10);
    const sign = parsedValue < 0;
    if (Number.isNaN(parsedValue))
      return new Long(0);
    if (text.length < 10) {
      if (parsedValue < 0)
        return add(negate(new Long(-parsedValue)), one);
      return new Long(parsedValue);
    }
    let result = new Long();
    let powerTen = one;
    for (const digit of text.split("").reverse()) {
      if (parseInt(digit)) {
        result = add(result, mul(new Long(parseInt(digit)), powerTen));
      }
      powerTen = mul(powerTen, new Long(10));
    }
    if (!sign)
      return result;
    return add(negate(result), one);
  }
};
__name(Long, "Long");
var zero = new Long(0);
var one = new Long(1);
function makeChunk(value) {
  const [lo, hi] = value;
  return [lo & UINT16_MAX, lo >>> 16, hi & UINT16_MAX, hi >>> 16];
}
__name(makeChunk, "makeChunk");
function add(a, b) {
  const [a00, a16, a32, a48] = makeChunk(a);
  const [b00, b16, b32, b48] = makeChunk(b);
  let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= UINT16_MAX;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= UINT16_MAX;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= UINT16_MAX;
  c48 += a48 + b48;
  c48 &= UINT16_MAX;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
__name(add, "add");
function mul(a, b) {
  const [a00, a16, a32, a48] = makeChunk(a);
  const [b00, b16, b32, b48] = makeChunk(b);
  let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= UINT16_MAX;
  c16 += a00 * b16 + a16 * b00;
  c32 += c16 >>> 16;
  c16 &= UINT16_MAX;
  c32 += a00 * b32 + a32 * b00 + a16 * b16;
  c48 += c32 >>> 16;
  c32 &= UINT16_MAX;
  c48 += a00 * b48 + a16 * b32 + a32 * b16 + a48 * b00;
  c48 &= UINT16_MAX;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
__name(mul, "mul");
function divByTen(value) {
  const [lo, hi] = value;
  return [
    new Long((hi % 10 * (UINT32_MAX + 1) + lo) / 10 | 0, hi / 10 | 0),
    (hi % 10 * (UINT32_MAX + 1) + lo) % 10
  ];
}
__name(divByTen, "divByTen");
function compare(a, b) {
  const [l1, h1] = a;
  const [l2, h2] = b;
  if (h1 !== h2)
    return h1 - h2;
  return l1 - l2;
}
__name(compare, "compare");
function negate(value) {
  const [lo, hi] = value;
  return new Long(~lo, ~hi);
}
__name(negate, "negate");

// dist/src/proto/generated/runtime/wire/varint.js
function encode2(value) {
  const result = [];
  const mask = 127;
  const head = 1 << 7;
  let long = typeof value === "number" ? new Long(value) : value;
  while (long[0] || long[1]) {
    const [lo, hi] = long;
    const chunk = lo & mask;
    const nextHi = hi >>> 7;
    const nextLo = lo >>> 7 | (hi & mask) << 32 - 7;
    long = new Long(nextLo, nextHi);
    const resultChunk = !(long[0] || long[1]) ? chunk : chunk | head;
    result.push(resultChunk);
  }
  if (result.length < 1)
    return new Uint8Array(1);
  return Uint8Array.from(result);
}
__name(encode2, "encode");
function decode2(dataview) {
  let result = new Long(0);
  let i = 0;
  while (true) {
    const curr = dataview.getUint8(i);
    result = or(result, leftshift(new Long(curr & 127), i * 7));
    ++i;
    if (curr >>> 7)
      continue;
    return [i, result];
  }
}
__name(decode2, "decode");
function or(a, b) {
  return new Long(a[0] | b[0], a[1] | b[1]);
}
__name(or, "or");
function leftshift(a, count) {
  if (count === 0)
    return a;
  if (count >= 32)
    return new Long(0, a[0] << count - 32);
  return new Long(a[0] << count, a[1] << count | a[0] >>> 32 - count);
}
__name(leftshift, "leftshift");

// dist/src/proto/generated/runtime/wire/serialize.js
function serialize(wireMessage) {
  const result = [];
  wireMessage.forEach(([fieldNumber, field]) => {
    result.push(encode2(fieldNumber << 3 | field.type));
    switch (field.type) {
      case WireType.Varint:
        result.push(encode2(field.value));
        break;
      case WireType.Fixed64: {
        const arr = new Uint8Array(8);
        const dataview = new DataView(arr.buffer);
        dataview.setUint32(0, field.value[0], true);
        dataview.setUint32(4, field.value[1], true);
        result.push(arr);
        break;
      }
      case WireType.LengthDelimited:
        result.push(encode2(field.value.byteLength));
        result.push(field.value);
        break;
      case WireType.Fixed32: {
        const arr = new Uint8Array(4);
        const dataview = new DataView(arr.buffer);
        dataview.setUint32(0, field.value, true);
        result.push(arr);
        break;
      }
    }
  });
  return concat(result);
}
__name(serialize, "serialize");
function concat(arrays) {
  const totalLength = arrays.reduce((acc, value) => {
    return acc + value.byteLength;
  }, 0);
  const result = new Uint8Array(totalLength);
  arrays.reduce((acc, array) => {
    result.set(array, acc);
    return acc + array.byteLength;
  }, 0);
  return result;
}
__name(concat, "concat");

// dist/src/proto/generated/runtime/wire/zigzag.js
function encode3(value) {
  if (value instanceof Long) {
    const l = new Long(value[0] << 1, value[1] << 1 | value[0] >>> 31);
    const r = value[1] >>> 31 ? new Long(4294967295, 4294967295) : new Long();
    return new Long(l[0] ^ r[0], l[1] ^ r[1]);
  }
  return (value * 2 ^ value >> 31) >>> 0;
}
__name(encode3, "encode");
function decode3(value) {
  if (value instanceof Long) {
    const l = new Long(value[0] >>> 1 | value[1] << 31, value[1] >>> 1);
    const r = value[0] & 1 ? new Long(4294967295, 4294967295) : new Long();
    return new Long(l[0] ^ r[0], l[1] ^ r[1]);
  }
  return value >>> 1 ^ -(value & 1);
}
__name(decode3, "decode");

// dist/src/proto/generated/runtime/wire/scalar.js
var decodeVarintFns = {
  int32: (long) => long[0] | 0,
  int64: (long) => long.toString(true),
  uint32: (long) => long[0] >>> 0,
  uint64: (long) => long.toString(false),
  sint32: (long) => decode3(long[0]),
  sint64: (long) => decode3(long).toString(true),
  bool: (long) => long[0] !== 0
};
var encodeVarintFns = {
  int32: (tsValue) => new Long(tsValue),
  int64: (tsValue) => Long.parse(tsValue),
  uint32: (tsValue) => new Long(tsValue),
  uint64: (tsValue) => Long.parse(tsValue),
  sint32: (tsValue) => encode3(new Long(tsValue)),
  sint64: (tsValue) => encode3(Long.parse(tsValue)),
  bool: (tsValue) => new Long(+tsValue)
};
var varintFieldToTsValueFns = Object.fromEntries(Object.entries(decodeVarintFns).map(([type, fn]) => [
  type,
  (wireValue) => {
    if (wireValue.type !== WireType.Varint)
      return;
    return fn(wireValue.value);
  }
]));
var tsValueToVarintFieldFns = Object.fromEntries(Object.entries(encodeVarintFns).map(([type, fn]) => [
  type,
  (tsValue) => ({
    type: WireType.Varint,
    value: fn(tsValue)
  })
]));
var wireValueToTsValueFns = Object.assign(Object.assign({}, varintFieldToTsValueFns), { double: (wireValue) => {
  if (wireValue.type !== WireType.Fixed64)
    return;
  const dataview = new DataView(wireValue.value.buffer);
  return dataview.getFloat64(0, true);
}, float: (wireValue) => {
  if (wireValue.type !== WireType.Fixed32)
    return;
  const dataview = new DataView(new Uint32Array([wireValue.value]).buffer);
  return dataview.getFloat32(0, true);
}, fixed32: (wireValue) => {
  if (wireValue.type !== WireType.Fixed32)
    return;
  return wireValue.value >>> 0;
}, fixed64: (wireValue) => {
  if (wireValue.type !== WireType.Fixed64)
    return;
  return wireValue.value.toString(false);
}, sfixed32: (wireValue) => {
  if (wireValue.type !== WireType.Fixed32)
    return;
  return wireValue.value | 0;
}, sfixed64: (wireValue) => {
  if (wireValue.type !== WireType.Fixed64)
    return;
  return wireValue.value.toString(true);
}, string: (wireValue) => {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const textDecoder = new TextDecoder();
  return textDecoder.decode(wireValue.value);
}, bytes: (wireValue) => {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  return wireValue.value;
} });
var tsValueToWireValueFns = Object.assign(Object.assign({}, tsValueToVarintFieldFns), { double: (tsValue) => {
  const long = new Long();
  const dataview = new DataView(long.buffer);
  dataview.setFloat64(0, tsValue, true);
  return { type: WireType.Fixed64, value: long };
}, float: (tsValue) => {
  const u32 = new Uint32Array(1);
  const dataview = new DataView(u32.buffer);
  dataview.setFloat32(0, tsValue, true);
  return { type: WireType.Fixed32, value: dataview.getUint32(0, true) };
}, fixed32: (tsValue) => ({ type: WireType.Fixed32, value: tsValue >>> 0 }), fixed64: (tsValue) => ({
  type: WireType.Fixed64,
  value: Long.parse(tsValue)
}), sfixed32: (tsValue) => ({ type: WireType.Fixed32, value: tsValue | 0 }), sfixed64: (tsValue) => ({
  type: WireType.Fixed64,
  value: Long.parse(tsValue)
}), string: (tsValue) => {
  const textEncoder = new TextEncoder();
  return {
    type: WireType.LengthDelimited,
    value: textEncoder.encode(tsValue)
  };
}, bytes: (tsValue) => ({ type: WireType.LengthDelimited, value: tsValue }) });
var unpackVarintFns = Object.fromEntries(Object.keys(decodeVarintFns).map((type) => [
  type,
  function* (wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns[type](wireValue);
      if (value != null)
        yield value;
      else {
        for (const long of unpackVarint(wireValue)) {
          yield decodeVarintFns[type](long);
        }
      }
    }
  }
]));
var unpackFns = Object.assign(Object.assign({}, unpackVarintFns), {
  *double(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.double(wireValue);
      if (value != null)
        yield value;
      else
        yield* unpackDouble(wireValue);
    }
  },
  *float(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.float(wireValue);
      if (value != null)
        yield value;
      else
        yield* unpackFloat(wireValue);
    }
  },
  *fixed32(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.fixed32(wireValue);
      if (value != null)
        yield value;
      else
        for (const value2 of unpackFixed32(wireValue))
          yield value2 >>> 0;
    }
  },
  *fixed64(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.fixed64(wireValue);
      if (value != null)
        yield value;
      else {
        for (const value2 of unpackFixed64(wireValue)) {
          yield value2.toString(false);
        }
      }
    }
  },
  *sfixed32(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.sfixed32(wireValue);
      if (value != null)
        yield value;
      else
        for (const value2 of unpackFixed32(wireValue))
          yield value2 | 0;
    }
  },
  *sfixed64(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.sfixed64(wireValue);
      if (value != null)
        yield value;
      else {
        for (const value2 of unpackFixed64(wireValue)) {
          yield value2.toString(true);
        }
      }
    }
  }
});
var packVarintFns = Object.fromEntries(Object.keys(encodeVarintFns).map((type) => [
  type,
  function(tsValues) {
    return {
      type: WireType.LengthDelimited,
      value: concat(tsValues.map((tsValue) => {
        const value = encodeVarintFns[type](tsValue);
        return encode2(value);
      }))
    };
  }
]));
function getFixedPackFn(size, setFn) {
  return /* @__PURE__ */ __name(function pack(values) {
    const value = new Uint8Array(values.length * size);
    const dataview = new DataView(value.buffer);
    for (let i = 0; i < values.length; ++i) {
      setFn(dataview, i * size, values[i]);
    }
    return { type: WireType.LengthDelimited, value };
  }, "pack");
}
__name(getFixedPackFn, "getFixedPackFn");
var packFns = Object.assign(Object.assign({}, packVarintFns), { double: getFixedPackFn(8, (dataView, byteOffset, value) => {
  dataView.setFloat64(byteOffset, value, true);
}), float: getFixedPackFn(4, (dataView, byteOffset, value) => {
  dataView.setFloat32(byteOffset, value, true);
}), fixed32: getFixedPackFn(4, (dataView, byteOffset, value) => {
  dataView.setUint32(byteOffset, value, true);
}), fixed64: getFixedPackFn(8, (dataView, byteOffset, value) => {
  const long = Long.parse(value);
  dataView.setUint32(byteOffset, long[0], true);
  dataView.setUint32(byteOffset + 4, long[1], true);
}), sfixed32: getFixedPackFn(4, (dataView, byteOffset, value) => {
  dataView.setInt32(byteOffset, value, true);
}), sfixed64: getFixedPackFn(8, (dataView, byteOffset, value) => {
  const long = Long.parse(value);
  dataView.setUint32(byteOffset, long[0], true);
  dataView.setUint32(byteOffset + 4, long[1], true);
}) });
function* unpackDouble(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const double = dataview.getFloat64(idx, true);
    idx += 4;
    yield double;
  }
}
__name(unpackDouble, "unpackDouble");
function* unpackFloat(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const float = dataview.getFloat32(idx, true);
    idx += 4;
    yield float;
  }
}
__name(unpackFloat, "unpackFloat");
function* unpackVarint(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const offset2 = value.byteOffset;
  while (idx < value.length) {
    const decodeResult = decode2(new DataView(value.buffer, offset2 + idx));
    idx += decodeResult[0];
    yield decodeResult[1];
  }
}
__name(unpackVarint, "unpackVarint");
function* unpackFixed32(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const fixed32 = dataview.getUint32(idx, true);
    idx += 4;
    yield fixed32;
  }
}
__name(unpackFixed32, "unpackFixed32");
function* unpackFixed64(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const lo = dataview.getUint32(idx, true);
    idx += 4;
    const hi = dataview.getUint32(idx, true);
    idx += 4;
    yield new Long(lo, hi);
  }
}
__name(unpackFixed64, "unpackFixed64");

// dist/src/proto/generated/runtime/wire/deserialize.js
function deserialize(uint8array) {
  let idx = 0;
  const offset2 = uint8array.byteOffset;
  const result = [];
  const dataview = new DataView(uint8array.buffer, offset2);
  while (idx < uint8array.length) {
    const decodeResult = decode2(new DataView(uint8array.buffer, offset2 + idx));
    const key = decodeResult[1][0];
    idx += decodeResult[0];
    const type = key & 7;
    const fieldNumber = key >>> 3;
    switch (type) {
      default:
        throw new Error(`Unknown wire type ${type}`);
      case WireType.Varint: {
        const [len, value] = decode2(new DataView(uint8array.buffer, offset2 + idx));
        result.push([fieldNumber, { type, value }]);
        idx += len;
        break;
      }
      case WireType.Fixed64:
        const lo = dataview.getUint32(idx, true);
        const hi = dataview.getUint32(idx += 4, true);
        idx += 4;
        result.push([fieldNumber, {
          type,
          value: new Long(lo, hi)
        }]);
        break;
      case WireType.LengthDelimited: {
        const [len, value] = decode2(new DataView(uint8array.buffer, offset2 + idx));
        result.push([fieldNumber, {
          type,
          value: uint8array.subarray(idx += len, idx += value[0])
        }]);
        break;
      }
      case WireType.StartGroup:
      case WireType.EndGroup:
        result.push([fieldNumber, { type }]);
        break;
      case WireType.Fixed32:
        result.push([fieldNumber, {
          type,
          value: dataview.getUint32(idx, true)
        }]);
        idx += 4;
        break;
    }
  }
  return result;
}
__name(deserialize, "deserialize");

// dist/src/proto/generated/messages/youtube/VisitorData.js
function getDefaultValue() {
  return {
    id: "",
    timestamp: 0
  };
}
__name(getDefaultValue, "getDefaultValue");
function encodeBinary(value) {
  const result = [];
  if (value.id !== void 0) {
    const tsValue = value.id;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.timestamp !== void 0) {
    const tsValue = value.timestamp;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary, "encodeBinary");
function decodeBinary(binary) {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === void 0)
      break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === void 0)
      break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === void 0)
      break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === void 0)
      break field;
    result.timestamp = value;
  }
  return result;
}
__name(decodeBinary, "decodeBinary");

// dist/src/proto/generated/messages/youtube/(ChannelAnalytics)/Params.js
function encodeBinary2(value) {
  const result = [];
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([1001, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary2, "encodeBinary");

// dist/src/proto/generated/messages/youtube/ChannelAnalytics.js
function encodeBinary3(value) {
  const result = [];
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([32, { type: WireType.LengthDelimited, value: encodeBinary2(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary3, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(SearchFilter)/Filters.js
function encodeBinary4(value) {
  const result = [];
  if (value.uploadDate !== void 0) {
    const tsValue = value.uploadDate;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.duration !== void 0) {
    const tsValue = value.duration;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresHd !== void 0) {
    const tsValue = value.featuresHd;
    result.push([4, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresSubtitles !== void 0) {
    const tsValue = value.featuresSubtitles;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresCreativeCommons !== void 0) {
    const tsValue = value.featuresCreativeCommons;
    result.push([6, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.features3d !== void 0) {
    const tsValue = value.features3d;
    result.push([7, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresLive !== void 0) {
    const tsValue = value.featuresLive;
    result.push([8, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresPurchased !== void 0) {
    const tsValue = value.featuresPurchased;
    result.push([9, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.features4k !== void 0) {
    const tsValue = value.features4k;
    result.push([14, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.features360 !== void 0) {
    const tsValue = value.features360;
    result.push([15, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresLocation !== void 0) {
    const tsValue = value.featuresLocation;
    result.push([23, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresHdr !== void 0) {
    const tsValue = value.featuresHdr;
    result.push([25, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresVr180 !== void 0) {
    const tsValue = value.featuresVr180;
    result.push([26, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary4, "encodeBinary");

// dist/src/proto/generated/messages/youtube/SearchFilter.js
function encodeBinary5(value) {
  const result = [];
  if (value.sortBy !== void 0) {
    const tsValue = value.sortBy;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.filters !== void 0) {
    const tsValue = value.filters;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary4(tsValue) }]);
  }
  if (value.noFilter !== void 0) {
    const tsValue = value.noFilter;
    result.push([19, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary5, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(MusicSearchFilter)/(Filters)/Type.js
function encodeBinary6(value) {
  const result = [];
  if (value.song !== void 0) {
    const tsValue = value.song;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.video !== void 0) {
    const tsValue = value.video;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.album !== void 0) {
    const tsValue = value.album;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.artist !== void 0) {
    const tsValue = value.artist;
    result.push([4, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.playlist !== void 0) {
    const tsValue = value.playlist;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary6, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(MusicSearchFilter)/Filters.js
function encodeBinary7(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([17, { type: WireType.LengthDelimited, value: encodeBinary6(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary7, "encodeBinary");

// dist/src/proto/generated/messages/youtube/MusicSearchFilter.js
function encodeBinary8(value) {
  const result = [];
  if (value.filters !== void 0) {
    const tsValue = value.filters;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary7(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary8, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(LiveMessageParams)/(Params)/Ids.js
function encodeBinary9(value) {
  const result = [];
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary9, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(LiveMessageParams)/Params.js
function encodeBinary10(value) {
  const result = [];
  if (value.ids !== void 0) {
    const tsValue = value.ids;
    result.push([5, { type: WireType.LengthDelimited, value: encodeBinary9(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary10, "encodeBinary");

// dist/src/proto/generated/messages/youtube/LiveMessageParams.js
function encodeBinary11(value) {
  const result = [];
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary10(tsValue) }]);
  }
  if (value.number0 !== void 0) {
    const tsValue = value.number0;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.number1 !== void 0) {
    const tsValue = value.number1;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary11, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/Context.js
function encodeBinary12(value) {
  const result = [];
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary12, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/(Params)/(RepliesOptions)/UnkOpts.js
function encodeBinary13(value) {
  const result = [];
  if (value.unkParam !== void 0) {
    const tsValue = value.unkParam;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary13, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/(Params)/RepliesOptions.js
function encodeBinary14(value) {
  const result = [];
  if (value.commentId !== void 0) {
    const tsValue = value.commentId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.unkopts !== void 0) {
    const tsValue = value.unkopts;
    result.push([4, { type: WireType.LengthDelimited, value: encodeBinary13(tsValue) }]);
  }
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([5, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([6, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.unkParam1 !== void 0) {
    const tsValue = value.unkParam1;
    result.push([8, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.unkParam2 !== void 0) {
    const tsValue = value.unkParam2;
    result.push([9, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary14, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/(Params)/Options.js
function encodeBinary15(value) {
  const result = [];
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([4, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.sortBy !== void 0) {
    const tsValue = value.sortBy;
    result.push([6, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([15, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary15, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/Params.js
function encodeBinary16(value) {
  const result = [];
  if (value.unkToken !== void 0) {
    const tsValue = value.unkToken;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.repliesOpts !== void 0) {
    const tsValue = value.repliesOpts;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary14(tsValue) }]);
  }
  if (value.opts !== void 0) {
    const tsValue = value.opts;
    result.push([4, { type: WireType.LengthDelimited, value: encodeBinary15(tsValue) }]);
  }
  if (value.page !== void 0) {
    const tsValue = value.page;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.target !== void 0) {
    const tsValue = value.target;
    result.push([8, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary16, "encodeBinary");

// dist/src/proto/generated/messages/youtube/GetCommentsSectionParams.js
function encodeBinary17(value) {
  const result = [];
  if (value.ctx !== void 0) {
    const tsValue = value.ctx;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary12(tsValue) }]);
  }
  if (value.unkParam !== void 0) {
    const tsValue = value.unkParam;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([6, { type: WireType.LengthDelimited, value: encodeBinary16(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary17, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(CreateCommentParams)/Params.js
function encodeBinary18(value) {
  const result = [];
  if (value.index !== void 0) {
    const tsValue = value.index;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary18, "encodeBinary");

// dist/src/proto/generated/messages/youtube/CreateCommentParams.js
function encodeBinary19(value) {
  const result = [];
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([5, { type: WireType.LengthDelimited, value: encodeBinary18(tsValue) }]);
  }
  if (value.number !== void 0) {
    const tsValue = value.number;
    result.push([10, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary19, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(PeformCommentActionParams)/(TranslateCommentParams)/(Params)/Comment.js
function encodeBinary20(value) {
  const result = [];
  if (value.text !== void 0) {
    const tsValue = value.text;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary20, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(PeformCommentActionParams)/(TranslateCommentParams)/Params.js
function encodeBinary21(value) {
  const result = [];
  if (value.comment !== void 0) {
    const tsValue = value.comment;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary20(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary21, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(PeformCommentActionParams)/TranslateCommentParams.js
function encodeBinary22(value) {
  const result = [];
  if (value.commentId !== void 0) {
    const tsValue = value.commentId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary21(tsValue) }]);
  }
  if (value.targetLanguage !== void 0) {
    const tsValue = value.targetLanguage;
    result.push([4, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary22, "encodeBinary");

// dist/src/proto/generated/messages/youtube/PeformCommentActionParams.js
function encodeBinary23(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.unkNum !== void 0) {
    const tsValue = value.unkNum;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.commentId !== void 0) {
    const tsValue = value.commentId;
    result.push([3, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([5, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([23, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.translateCommentParams !== void 0) {
    const tsValue = value.translateCommentParams;
    result.push([31, { type: WireType.LengthDelimited, value: encodeBinary22(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary23, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(NotificationPreferences)/Preference.js
function encodeBinary24(value) {
  const result = [];
  if (value.index !== void 0) {
    const tsValue = value.index;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary24, "encodeBinary");

// dist/src/proto/generated/messages/youtube/NotificationPreferences.js
function encodeBinary25(value) {
  const result = [];
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.prefId !== void 0) {
    const tsValue = value.prefId;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary24(tsValue) }]);
  }
  if (value.number0 !== void 0) {
    const tsValue = value.number0;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.number1 !== void 0) {
    const tsValue = value.number1;
    result.push([4, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary25, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/(Context)/Client.js
function encodeBinary26(value) {
  const result = [];
  if (value.unkparam !== void 0) {
    const tsValue = value.unkparam;
    result.push([16, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.clientVersion !== void 0) {
    const tsValue = value.clientVersion;
    result.push([17, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.clientName !== void 0) {
    const tsValue = value.clientName;
    result.push([18, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary26, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Context.js
function encodeBinary27(value) {
  const result = [];
  if (value.client !== void 0) {
    const tsValue = value.client;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary26(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary27, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Title.js
function encodeBinary28(value) {
  const result = [];
  if (value.text !== void 0) {
    const tsValue = value.text;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary28, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Description.js
function encodeBinary29(value) {
  const result = [];
  if (value.text !== void 0) {
    const tsValue = value.text;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary29, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Tags.js
function encodeBinary30(value) {
  const result = [];
  for (const tsValue of value.list) {
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary30, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Category.js
function encodeBinary31(value) {
  const result = [];
  if (value.id !== void 0) {
    const tsValue = value.id;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary31, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/License.js
function encodeBinary32(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary32, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/(VideoThumbnail)/Thumbnail.js
function encodeBinary33(value) {
  const result = [];
  if (value.imageData !== void 0) {
    const tsValue = value.imageData;
    result.push([1, tsValueToWireValueFns.bytes(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary33, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/VideoThumbnail.js
function encodeBinary34(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.thumbnail !== void 0) {
    const tsValue = value.thumbnail;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary33(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary34, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Privacy.js
function encodeBinary35(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary35, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/MadeForKids.js
function encodeBinary36(value) {
  const result = [];
  if (value.unkparam !== void 0) {
    const tsValue = value.unkparam;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.choice !== void 0) {
    const tsValue = value.choice;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary36, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/AgeRestricted.js
function encodeBinary37(value) {
  const result = [];
  if (value.unkparam !== void 0) {
    const tsValue = value.unkparam;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.choice !== void 0) {
    const tsValue = value.choice;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary37, "encodeBinary");

// dist/src/proto/generated/messages/youtube/InnertubePayload.js
function encodeBinary38(value) {
  const result = [];
  if (value.context !== void 0) {
    const tsValue = value.context;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary27(tsValue) }]);
  }
  if (value.target !== void 0) {
    const tsValue = value.target;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.title !== void 0) {
    const tsValue = value.title;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary28(tsValue) }]);
  }
  if (value.description !== void 0) {
    const tsValue = value.description;
    result.push([4, { type: WireType.LengthDelimited, value: encodeBinary29(tsValue) }]);
  }
  if (value.tags !== void 0) {
    const tsValue = value.tags;
    result.push([6, { type: WireType.LengthDelimited, value: encodeBinary30(tsValue) }]);
  }
  if (value.category !== void 0) {
    const tsValue = value.category;
    result.push([7, { type: WireType.LengthDelimited, value: encodeBinary31(tsValue) }]);
  }
  if (value.license !== void 0) {
    const tsValue = value.license;
    result.push([8, { type: WireType.LengthDelimited, value: encodeBinary32(tsValue) }]);
  }
  if (value.videoThumbnail !== void 0) {
    const tsValue = value.videoThumbnail;
    result.push([20, { type: WireType.LengthDelimited, value: encodeBinary34(tsValue) }]);
  }
  if (value.privacy !== void 0) {
    const tsValue = value.privacy;
    result.push([38, { type: WireType.LengthDelimited, value: encodeBinary35(tsValue) }]);
  }
  if (value.madeForKids !== void 0) {
    const tsValue = value.madeForKids;
    result.push([68, { type: WireType.LengthDelimited, value: encodeBinary36(tsValue) }]);
  }
  if (value.ageRestricted !== void 0) {
    const tsValue = value.ageRestricted;
    result.push([69, { type: WireType.LengthDelimited, value: encodeBinary37(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary38, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(Hashtag)/Params.js
function encodeBinary39(value) {
  const result = [];
  if (value.hashtag !== void 0) {
    const tsValue = value.hashtag;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary39, "encodeBinary");

// dist/src/proto/generated/messages/youtube/Hashtag.js
function encodeBinary40(value) {
  const result = [];
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([93, { type: WireType.LengthDelimited, value: encodeBinary39(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary40, "encodeBinary");

// dist/src/proto/index.js
var Proto = class {
  static encodeVisitorData(id, timestamp) {
    const buf = encodeBinary({ id, timestamp });
    return encodeURIComponent(u8ToBase64(buf).replace(/\+/g, "-").replace(/\//g, "_"));
  }
  static decodeVisitorData(visitor_data) {
    const data2 = decodeBinary(base64ToU8(decodeURIComponent(visitor_data)));
    return data2;
  }
  static encodeChannelAnalyticsParams(channel_id) {
    const buf = encodeBinary3({
      params: {
        channelId: channel_id
      }
    });
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeSearchFilters(filters) {
    const upload_date = {
      all: void 0,
      hour: 1,
      today: 2,
      week: 3,
      month: 4,
      year: 5
    };
    const type = {
      all: void 0,
      video: 1,
      channel: 2,
      playlist: 3,
      movie: 4
    };
    const duration = {
      all: void 0,
      short: 1,
      long: 2,
      medium: 3
    };
    const order = {
      relevance: void 0,
      rating: 1,
      upload_date: 2,
      view_count: 3
    };
    const features = {
      hd: "featuresHd",
      subtitles: "featuresSubtitles",
      creative_commons: "featuresCreativeCommons",
      "3d": "features3D",
      live: "featuresLive",
      purchased: "featuresPurchased",
      "4k": "features4K",
      "360": "features360",
      location: "featuresLocation",
      hdr: "featuresHdr",
      vr180: "featuresVr180"
    };
    const data2 = {};
    if (filters)
      data2.filters = {};
    else
      data2.noFilter = 0;
    if (data2.filters) {
      if (filters.upload_date) {
        data2.filters.uploadDate = upload_date[filters.upload_date];
      }
      if (filters.type) {
        data2.filters.type = type[filters.type];
      }
      if (filters.duration) {
        data2.filters.duration = duration[filters.duration];
      }
      if (filters.sort_by && filters.sort_by !== "relevance") {
        data2.sortBy = order[filters.sort_by];
      }
      if (filters.features) {
        for (const feature of filters.features) {
          data2.filters[features[feature]] = 1;
        }
      }
    }
    const buf = encodeBinary5(data2);
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeMusicSearchFilters(filters) {
    var _a7;
    const data2 = {
      filters: {
        type: {}
      }
    };
    if (filters.type && filters.type !== "all" && ((_a7 = data2.filters) === null || _a7 === void 0 ? void 0 : _a7.type))
      data2.filters.type[filters.type] = 1;
    const buf = encodeBinary8(data2);
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeMessageParams(channel_id, video_id) {
    const buf = encodeBinary11({
      params: {
        ids: {
          channelId: channel_id,
          videoId: video_id
        }
      },
      number0: 1,
      number1: 4
    });
    return btoa(encodeURIComponent(u8ToBase64(buf)));
  }
  static encodeCommentsSectionParams(video_id, options = {}) {
    const sort_options = {
      TOP_COMMENTS: 0,
      NEWEST_FIRST: 1
    };
    const buf = encodeBinary17({
      ctx: {
        videoId: video_id
      },
      unkParam: 6,
      params: {
        opts: {
          videoId: video_id,
          sortBy: sort_options[options.sort_by || "TOP_COMMENTS"],
          type: options.type || 2
        },
        target: "comments-section"
      }
    });
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeCommentParams(video_id) {
    const buf = encodeBinary19({
      videoId: video_id,
      params: {
        index: 0
      },
      number: 7
    });
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeCommentActionParams(type, args = {}) {
    const data2 = {
      type,
      commentId: args.comment_id || " ",
      videoId: args.video_id || " ",
      channelId: " ",
      unkNum: 2
    };
    if (args.hasOwnProperty("text")) {
      if (typeof args.target_language !== "string")
        throw new Error("target_language must be a string");
      args.comment_id && delete data2.unkNum;
      data2.translateCommentParams = {
        params: {
          comment: {
            text: args.text
          }
        },
        commentId: args.comment_id || " ",
        targetLanguage: args.target_language
      };
    }
    const buf = encodeBinary23(data2);
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeNotificationPref(channel_id, index) {
    const buf = encodeBinary25({
      channelId: channel_id,
      prefId: {
        index
      },
      number0: 0,
      number1: 4
    });
    return encodeURIComponent(u8ToBase64(buf));
  }
  static encodeVideoMetadataPayload(video_id, metadata) {
    const data2 = {
      context: {
        client: {
          unkparam: 14,
          clientName: CLIENTS.ANDROID.NAME,
          clientVersion: CLIENTS.YTSTUDIO_ANDROID.VERSION
        }
      },
      target: video_id
    };
    if (Reflect.has(metadata, "title"))
      data2.title = { text: metadata.title || "" };
    if (Reflect.has(metadata, "description"))
      data2.description = { text: metadata.description || "" };
    if (Reflect.has(metadata, "license"))
      data2.license = { type: metadata.license || "" };
    if (Reflect.has(metadata, "tags"))
      data2.tags = { list: metadata.tags || [] };
    if (Reflect.has(metadata, "category"))
      data2.category = { id: metadata.category || 0 };
    if (Reflect.has(metadata, "privacy")) {
      switch (metadata.privacy) {
        case "PUBLIC":
          data2.privacy = { type: 1 };
          break;
        case "UNLISTED":
          data2.privacy = { type: 2 };
          break;
        case "PRIVATE":
          data2.privacy = { type: 3 };
          break;
        default:
          throw new Error("Invalid visibility option");
      }
    }
    if (Reflect.has(metadata, "made_for_kids")) {
      data2.madeForKids = {
        unkparam: 1,
        choice: metadata.made_for_kids ? 1 : 2
      };
    }
    if (Reflect.has(metadata, "age_restricted")) {
      data2.ageRestricted = {
        unkparam: 1,
        choice: metadata.age_restricted ? 1 : 2
      };
    }
    const buf = encodeBinary38(data2);
    return buf;
  }
  static encodeCustomThumbnailPayload(video_id, bytes) {
    const data2 = {
      context: {
        client: {
          unkparam: 14,
          clientName: CLIENTS.ANDROID.NAME,
          clientVersion: CLIENTS.YTSTUDIO_ANDROID.VERSION
        }
      },
      target: video_id,
      videoThumbnail: {
        type: 3,
        thumbnail: {
          imageData: bytes
        }
      }
    };
    const buf = encodeBinary38(data2);
    return buf;
  }
  static encodeHashtag(hashtag) {
    const buf = encodeBinary40({
      params: {
        hashtag,
        type: 1
      }
    });
    return encodeURIComponent(u8ToBase64(buf));
  }
};
__name(Proto, "Proto");
var proto_default = Proto;

// dist/src/parser/classes/comments/Comment.js
var _Comment_actions;
var Comment = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f, _g;
    super();
    _Comment_actions.set(this, void 0);
    this.content = new Text(data2.contentText);
    this.published = new Text(data2.publishedTimeText);
    this.author_is_channel_owner = data2.authorIsChannelOwner;
    this.current_user_reply_thumbnail = Thumbnail.fromResponse(data2.currentUserReplyThumbnail);
    this.sponsor_comment_badge = parser_default.parseItem(data2.sponsorCommentBadge, SponsorCommentBadge_default);
    this.paid_comment_chip = parser_default.parseItem(data2.paidCommentChipRenderer, PdgCommentChip_default);
    this.author_badge = parser_default.parseItem(data2.authorCommentBadge, AuthorCommentBadge_default);
    this.author = new Author_default(Object.assign(Object.assign({}, data2.authorText), { navigationEndpoint: data2.authorEndpoint }), this.author_badge ? [{
      metadataBadgeRenderer: (_a7 = this.author_badge) === null || _a7 === void 0 ? void 0 : _a7.orig_badge
    }] : null, data2.authorThumbnail);
    this.action_menu = parser_default.parseItem(data2.actionMenu, Menu_default);
    this.action_buttons = parser_default.parseItem(data2.actionButtons, CommentActionButtons_default);
    this.comment_id = data2.commentId;
    this.vote_status = data2.voteStatus;
    this.vote_count = data2.voteCount ? new Text(data2.voteCount).toString() : "0";
    this.reply_count = data2.replyCount || 0;
    this.is_liked = !!((_c = (_b = this.action_buttons) === null || _b === void 0 ? void 0 : _b.like_button) === null || _c === void 0 ? void 0 : _c.is_toggled);
    this.is_disliked = !!((_e = (_d = this.action_buttons) === null || _d === void 0 ? void 0 : _d.dislike_button) === null || _e === void 0 ? void 0 : _e.is_toggled);
    this.is_hearted = !!((_g = (_f = this.action_buttons) === null || _f === void 0 ? void 0 : _f.creator_heart) === null || _g === void 0 ? void 0 : _g.is_hearted);
    this.is_pinned = !!data2.pinnedCommentBadge;
    this.is_member = !!data2.sponsorCommentBadge;
  }
  like() {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      const button = (_a7 = this.action_buttons) === null || _a7 === void 0 ? void 0 : _a7.like_button;
      if (!button)
        throw new InnertubeError("Like button was not found.", { comment_id: this.comment_id });
      if (button.is_toggled)
        throw new InnertubeError("This comment is already liked", { comment_id: this.comment_id });
      const response = yield button.endpoint.call(__classPrivateFieldGet(this, _Comment_actions, "f"), { parse: false });
      return response;
    });
  }
  dislike() {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      const button = (_a7 = this.action_buttons) === null || _a7 === void 0 ? void 0 : _a7.dislike_button;
      if (!button)
        throw new InnertubeError("Dislike button was not found.", { comment_id: this.comment_id });
      if (button.is_toggled)
        throw new InnertubeError("This comment is already disliked", { comment_id: this.comment_id });
      const response = yield button.endpoint.call(__classPrivateFieldGet(this, _Comment_actions, "f"), { parse: false });
      return response;
    });
  }
  reply(text) {
    var _a7, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      if (!((_a7 = this.action_buttons) === null || _a7 === void 0 ? void 0 : _a7.reply_button))
        throw new InnertubeError("Cannot reply to another reply. Try mentioning the user instead.", { comment_id: this.comment_id });
      const button = (_b = this.action_buttons) === null || _b === void 0 ? void 0 : _b.reply_button;
      if (!((_c = button.endpoint) === null || _c === void 0 ? void 0 : _c.dialog))
        throw new InnertubeError("Reply button endpoint did not have a dialog.");
      const dialog = button.endpoint.dialog.as(CommentReplyDialog_default);
      const dialog_button = dialog.reply_button;
      if (!dialog_button)
        throw new InnertubeError("Reply button was not found in the dialog.", { comment_id: this.comment_id });
      if (!dialog_button.endpoint)
        throw new InnertubeError("Reply button endpoint was not found.", { comment_id: this.comment_id });
      const response = yield dialog_button.endpoint.call(__classPrivateFieldGet(this, _Comment_actions, "f"), { commentText: text });
      return response;
    });
  }
  translate(target_language) {
    var _a7, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      const text = this.content.toString().replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, "");
      const payload = {
        text,
        target_language,
        comment_id: this.comment_id
      };
      const action = proto_default.encodeCommentActionParams(22, payload);
      const response = yield __classPrivateFieldGet(this, _Comment_actions, "f").execute("comment/perform_comment_action", { action, client: "ANDROID" });
      const mutations = (_b = (_a7 = response.data.frameworkUpdates) === null || _a7 === void 0 ? void 0 : _a7.entityBatchUpdate) === null || _b === void 0 ? void 0 : _b.mutations;
      const content = (_f = (_e = (_d = (_c = mutations === null || mutations === void 0 ? void 0 : mutations[0]) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.commentEntityPayload) === null || _e === void 0 ? void 0 : _e.translatedContent) === null || _f === void 0 ? void 0 : _f.content;
      return Object.assign(Object.assign({}, response), { content });
    });
  }
  setActions(actions) {
    __classPrivateFieldSet(this, _Comment_actions, actions, "f");
  }
};
__name(Comment, "Comment");
_Comment_actions = /* @__PURE__ */ new WeakMap();
Comment.type = "Comment";
var Comment_default = Comment;

// dist/src/parser/classes/comments/EmojiPicker.js
var EmojiPicker = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.id;
    this.categories = parser_default.parseArray(data2.categories);
    this.category_buttons = parser_default.parseArray(data2.categoryButtons);
    this.search_placeholder = new Text(data2.searchPlaceholderText);
    this.search_no_results = new Text(data2.searchNoResultsText);
    this.pick_skin_tone = new Text(data2.pickSkinToneText);
    this.clear_search_label = data2.clearSearchLabel;
    this.skin_tone_generic_label = data2.skinToneGenericLabel;
    this.skin_tone_light_label = data2.skinToneLightLabel;
    this.skin_tone_medium_light_label = data2.skinToneMediumLightLabel;
    this.skin_tone_medium_label = data2.skinToneMediumLabel;
    this.skin_tone_medium_dark_label = data2.skinToneMediumDarkLabel;
    this.skin_tone_dark_label = data2.skinToneDarkLabel;
  }
};
__name(EmojiPicker, "EmojiPicker");
EmojiPicker.type = "EmojiPicker";
var EmojiPicker_default = EmojiPicker;

// dist/src/parser/classes/comments/CommentDialog.js
var CommentDialog = class extends YTNode {
  constructor(data2) {
    super();
    this.editable_text = new Text(data2.editableText);
    this.author_thumbnail = Thumbnail.fromResponse(data2.authorThumbnail);
    this.submit_button = parser_default.parseItem(data2.submitButton, Button_default);
    this.cancel_button = parser_default.parseItem(data2.cancelButton, Button_default);
    this.placeholder = new Text(data2.placeholderText);
    this.emoji_button = parser_default.parseItem(data2.emojiButton, Button_default);
    this.emoji_picker = parser_default.parseItem(data2.emojiPicker, EmojiPicker_default);
  }
};
__name(CommentDialog, "CommentDialog");
CommentDialog.type = "CommentDialog";
var CommentDialog_default = CommentDialog;

// dist/src/parser/classes/comments/CommentReplies.js
var CommentReplies = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parseArray(data2.contents);
    this.view_replies = parser_default.parseItem(data2.viewReplies, Button_default);
    this.hide_replies = parser_default.parseItem(data2.hideReplies, Button_default);
    this.view_replies_creator_thumbnail = Thumbnail.fromResponse(data2.viewRepliesCreatorThumbnail);
    this.has_channel_owner_replied = !!data2.viewRepliesCreatorThumbnail;
  }
};
__name(CommentReplies, "CommentReplies");
CommentReplies.type = "CommentReplies";
var CommentReplies_default = CommentReplies;

// dist/src/parser/classes/comments/CommentsEntryPointTeaser.js
var CommentsEntryPointTeaser = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "teaserAvatar")) {
      this.teaser_avatar = Thumbnail.fromResponse(data2.teaserAvatar);
    }
    if (Reflect.has(data2, "teaserContent")) {
      this.teaser_content = new Text(data2.teaserContent);
    }
  }
};
__name(CommentsEntryPointTeaser, "CommentsEntryPointTeaser");
CommentsEntryPointTeaser.type = "CommentsEntryPointTeaser";
var CommentsEntryPointTeaser_default = CommentsEntryPointTeaser;

// dist/src/parser/classes/comments/CommentsEntryPointHeader.js
var CommentsEntryPointHeader = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "headerText")) {
      this.header = new Text(data2.headerText);
    }
    if (Reflect.has(data2, "commentCount")) {
      this.comment_count = new Text(data2.commentCount);
    }
    if (Reflect.has(data2, "teaserAvatar") || Reflect.has(data2, "simpleboxAvatar")) {
      this.teaser_avatar = Thumbnail.fromResponse(data2.teaserAvatar || data2.simpleboxAvatar);
    }
    if (Reflect.has(data2, "teaserContent")) {
      this.teaser_content = new Text(data2.teaserContent);
    }
    if (Reflect.has(data2, "contentRenderer")) {
      this.content_renderer = parser_default2.parseItem(data2.contentRenderer, CommentsEntryPointTeaser_default);
    }
    if (Reflect.has(data2, "simpleboxPlaceholder")) {
      this.simplebox_placeholder = new Text(data2.simpleboxPlaceholder);
    }
  }
};
__name(CommentsEntryPointHeader, "CommentsEntryPointHeader");
CommentsEntryPointHeader.type = "CommentsEntryPointHeader";
var CommentsEntryPointHeader_default = CommentsEntryPointHeader;

// dist/src/parser/classes/comments/CommentsHeader.js
var CommentsHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.titleText);
    this.count = new Text(data2.countText);
    this.comments_count = new Text(data2.commentsCount);
    this.create_renderer = parser_default.parseItem(data2.createRenderer);
    this.sort_menu = parser_default.parseItem(data2.sortMenu, SortFilterSubMenu_default);
    if (Reflect.has(data2, "customEmojis")) {
      this.custom_emojis = data2.customEmojis.map((emoji) => {
        return {
          emoji_id: emoji.emojiId,
          shortcuts: emoji.shortcuts,
          search_terms: emoji.searchTerms,
          image: Thumbnail.fromResponse(emoji.image),
          is_custom_emoji: emoji.isCustomEmoji
        };
      });
    }
  }
};
__name(CommentsHeader, "CommentsHeader");
CommentsHeader.type = "CommentsHeader";
var CommentsHeader_default = CommentsHeader;

// dist/src/parser/classes/comments/CommentSimplebox.js
var CommentSimplebox = class extends YTNode {
  constructor(data2) {
    super();
    this.submit_button = parser_default.parseItem(data2.submitButton, Button_default);
    this.cancel_button = parser_default.parseItem(data2.cancelButton, Button_default);
    this.author_thumbnail = Thumbnail.fromResponse(data2.authorThumbnail);
    this.placeholder = new Text(data2.placeholderText);
    this.avatar_size = data2.avatarSize;
  }
};
__name(CommentSimplebox, "CommentSimplebox");
CommentSimplebox.type = "CommentSimplebox";
var CommentSimplebox_default = CommentSimplebox;

// dist/src/parser/classes/ContinuationItem.js
var ContinuationItem = class extends YTNode {
  constructor(data2) {
    super();
    this.trigger = data2.trigger;
    if (Reflect.has(data2, "button")) {
      this.button = parser_default.parseItem(data2.button, Button_default);
    }
    this.endpoint = new NavigationEndpoint_default(data2.continuationEndpoint);
  }
};
__name(ContinuationItem, "ContinuationItem");
ContinuationItem.type = "ContinuationItem";
var ContinuationItem_default = ContinuationItem;

// dist/src/parser/classes/comments/CommentThread.js
var _CommentThread_actions;
var _CommentThread_continuation;
var CommentThread = class extends YTNode {
  constructor(data2) {
    super();
    _CommentThread_actions.set(this, void 0);
    _CommentThread_continuation.set(this, void 0);
    this.comment = parser_default.parseItem(data2.comment, Comment_default);
    this.comment_replies_data = parser_default.parseItem(data2.replies, CommentReplies_default);
    this.is_moderated_elq_comment = data2.isModeratedElqComment;
    this.has_replies = !!this.comment_replies_data;
  }
  getReplies() {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _CommentThread_actions, "f"))
        throw new InnertubeError("Actions instance not set for this thread.");
      if (!this.comment_replies_data)
        throw new InnertubeError("This comment has no replies.", this);
      const continuation = (_a7 = this.comment_replies_data.contents) === null || _a7 === void 0 ? void 0 : _a7.firstOfType(ContinuationItem_default);
      if (!continuation)
        throw new InnertubeError("Replies continuation not found.");
      const response = yield continuation.endpoint.call(__classPrivateFieldGet(this, _CommentThread_actions, "f"), { parse: true });
      if (!response.on_response_received_endpoints_memo)
        throw new InnertubeError("Unexpected response.", response);
      this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment_default).map((comment) => {
        comment.setActions(__classPrivateFieldGet(this, _CommentThread_actions, "f"));
        return comment;
      }));
      __classPrivateFieldSet(this, _CommentThread_continuation, response === null || response === void 0 ? void 0 : response.on_response_received_endpoints_memo.getType(ContinuationItem_default).first(), "f");
      return this;
    });
  }
  getContinuation() {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.replies)
        throw new InnertubeError("Cannot retrieve continuation because this thread's replies have not been loaded.");
      if (!__classPrivateFieldGet(this, _CommentThread_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      if (!__classPrivateFieldGet(this, _CommentThread_actions, "f"))
        throw new InnertubeError("Actions instance not set for this thread.");
      const load_more_button = (_a7 = __classPrivateFieldGet(this, _CommentThread_continuation, "f").button) === null || _a7 === void 0 ? void 0 : _a7.as(Button_default);
      if (!load_more_button)
        throw new InnertubeError('"Load more" button not found.');
      const response = yield load_more_button.endpoint.call(__classPrivateFieldGet(this, _CommentThread_actions, "f"), { parse: true });
      if (!response.on_response_received_endpoints_memo)
        throw new InnertubeError("Unexpected response.", response);
      this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment_default).map((comment) => {
        comment.setActions(__classPrivateFieldGet(this, _CommentThread_actions, "f"));
        return comment;
      }));
      __classPrivateFieldSet(this, _CommentThread_continuation, response.on_response_received_endpoints_memo.getType(ContinuationItem_default).first(), "f");
      return this;
    });
  }
  get has_continuation() {
    if (!this.replies)
      throw new InnertubeError("Cannot determine if there is a continuation because this thread's replies have not been loaded.");
    return !!__classPrivateFieldGet(this, _CommentThread_continuation, "f");
  }
  setActions(actions) {
    __classPrivateFieldSet(this, _CommentThread_actions, actions, "f");
  }
};
__name(CommentThread, "CommentThread");
_CommentThread_actions = /* @__PURE__ */ new WeakMap(), _CommentThread_continuation = /* @__PURE__ */ new WeakMap();
CommentThread.type = "CommentThread";
var CommentThread_default = CommentThread;

// dist/src/parser/classes/CompactChannel.js
var CompactChannel = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.channel_id = data2.channelId;
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.display_name = new Text(data2.displayName);
    this.video_count = new Text(data2.videoCountText);
    this.subscriber_count = new Text(data2.subscriberCountText);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.tv_banner = Thumbnail.fromResponse(data2.tvBanner);
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
  }
};
__name(CompactChannel, "CompactChannel");
CompactChannel.type = "CompactChannel";
var CompactChannel_default = CompactChannel;

// dist/src/parser/classes/CompactLink.js
var CompactLink = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title).toString();
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.style = data2.style;
  }
};
__name(CompactLink, "CompactLink");
CompactLink.type = "CompactLink";
var CompactLink_default = CompactLink;

// dist/src/parser/classes/Playlist.js
var Playlist = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.id = data2.playlistId;
    this.title = new Text(data2.title);
    this.author = ((_a7 = data2.shortBylineText) === null || _a7 === void 0 ? void 0 : _a7.simpleText) ? new Text(data2.shortBylineText) : new Author_default(data2.longBylineText, data2.ownerBadges, null);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail || { thumbnails: data2.thumbnails.map((th) => th.thumbnails).flat(1) });
    this.video_count = new Text(data2.thumbnailText);
    this.video_count_short = new Text(data2.videoCountShortText);
    this.first_videos = parser_default.parseArray(data2.videos);
    this.share_url = data2.shareUrl || null;
    this.menu = parser_default.parseItem(data2.menu);
    this.badges = parser_default.parseArray(data2.ownerBadges);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
    if (Reflect.has(data2, "viewPlaylistText")) {
      this.view_playlist = new Text(data2.viewPlaylistText);
    }
  }
};
__name(Playlist, "Playlist");
Playlist.type = "Playlist";
var Playlist_default = Playlist;

// dist/src/parser/classes/CompactMix.js
var CompactMix = class extends Playlist_default {
  constructor(data2) {
    super(data2);
  }
};
__name(CompactMix, "CompactMix");
CompactMix.type = "CompactMix";
var CompactMix_default = CompactMix;

// dist/src/parser/classes/CompactPlaylist.js
var CompactPlaylist = class extends Playlist_default {
  constructor(data2) {
    super(data2);
  }
};
__name(CompactPlaylist, "CompactPlaylist");
CompactPlaylist.type = "CompactPlaylist";
var CompactPlaylist_default = CompactPlaylist;

// dist/src/parser/classes/CompactStation.js
var CompactStation = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.description = new Text(data2.description);
    this.video_count = new Text(data2.videoCountText);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
  }
};
__name(CompactStation, "CompactStation");
CompactStation.type = "CompactStation";
var CompactStation_default = CompactStation;

// dist/src/parser/classes/ConfirmDialog.js
var ConfirmDialog = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.confirm_button = parser_default.parseItem(data2.confirmButton, Button_default);
    this.cancel_button = parser_default.parseItem(data2.cancelButton, Button_default);
    this.dialog_messages = data2.dialogMessages.map((txt) => new Text(txt));
  }
};
__name(ConfirmDialog, "ConfirmDialog");
ConfirmDialog.type = "ConfirmDialog";
var ConfirmDialog_default = ConfirmDialog;

// dist/src/parser/classes/ContentMetadataView.js
var ContentMetadataView = class extends YTNode {
  constructor(data2) {
    super();
    this.metadata_rows = data2.metadataRows.map((row) => {
      var _a7;
      return {
        metadata_parts: (_a7 = row.metadataParts) === null || _a7 === void 0 ? void 0 : _a7.map((part) => ({
          text: Text.fromAttributed(part.text)
        }))
      };
    });
    this.delimiter = data2.delimiter;
  }
};
__name(ContentMetadataView, "ContentMetadataView");
ContentMetadataView.type = "ContentMetadataView";
var ContentMetadataView_default = ContentMetadataView;

// dist/src/parser/classes/ContentPreviewImageView.js
var ContentPreviewImageView = class extends YTNode {
  constructor(data2) {
    super();
    this.image = Thumbnail.fromResponse(data2.image);
    this.style = data2.style;
  }
};
__name(ContentPreviewImageView, "ContentPreviewImageView");
ContentPreviewImageView.type = "ContentPreviewImageView";
var ContentPreviewImageView_default = ContentPreviewImageView;

// dist/src/parser/classes/ConversationBar.js
var ConversationBar = class extends YTNode {
  constructor(data2) {
    super();
    this.availability_message = parser_default.parseItem(data2.availabilityMessage, Message_default);
  }
};
__name(ConversationBar, "ConversationBar");
ConversationBar.type = "ConversationBar";
var ConversationBar_default = ConversationBar;

// dist/src/parser/classes/CopyLink.js
var CopyLink = class extends YTNode {
  constructor(data2) {
    super();
    this.copy_button = parser_default.parseItem(data2.copyButton, Button_default);
    this.short_url = data2.shortUrl;
    this.style = data2.style;
  }
};
__name(CopyLink, "CopyLink");
CopyLink.type = "CopyLink";
var CopyLink_default = CopyLink;

// dist/src/parser/classes/DecoratedAvatarView.js
var DecoratedAvatarView = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.avatar = parser_default2.parseItem(data2.avatar, AvatarView_default);
    this.a11y_label = data2.a11yLabel;
    if ((_b = (_a7 = data2.rendererContext) === null || _a7 === void 0 ? void 0 : _a7.commandContext) === null || _b === void 0 ? void 0 : _b.onTap) {
      this.on_tap_endpoint = new NavigationEndpoint_default(data2.rendererContext.commandContext.onTap);
    }
  }
};
__name(DecoratedAvatarView, "DecoratedAvatarView");
DecoratedAvatarView.type = "DecoratedAvatarView";
var DecoratedAvatarView_default = DecoratedAvatarView;

// dist/src/parser/classes/HeatMarker.js
var HeatMarker = class extends YTNode {
  constructor(data2) {
    super();
    this.time_range_start_millis = data2.timeRangeStartMillis;
    this.marker_duration_millis = data2.markerDurationMillis;
    this.heat_marker_intensity_score_normalized = data2.heatMarkerIntensityScoreNormalized;
  }
};
__name(HeatMarker, "HeatMarker");
HeatMarker.type = "HeatMarker";
var HeatMarker_default = HeatMarker;

// dist/src/parser/classes/Heatmap.js
var Heatmap = class extends YTNode {
  constructor(data2) {
    super();
    this.max_height_dp = data2.maxHeightDp;
    this.min_height_dp = data2.minHeightDp;
    this.show_hide_animation_duration_millis = data2.showHideAnimationDurationMillis;
    this.heat_markers = parser_default.parseArray(data2.heatMarkers, HeatMarker_default);
    this.heat_markers_decorations = parser_default.parseArray(data2.heatMarkersDecorations);
  }
};
__name(Heatmap, "Heatmap");
Heatmap.type = "Heatmap";
var Heatmap_default = Heatmap;

// dist/src/parser/classes/MultiMarkersPlayerBar.js
var Marker = class extends YTNode {
  constructor(data2) {
    super();
    this.marker_key = data2.key;
    this.value = {};
    if (Reflect.has(data2, "value")) {
      if (Reflect.has(data2.value, "heatmap")) {
        this.value.heatmap = parser_default.parseItem(data2.value.heatmap, Heatmap_default);
      }
      if (Reflect.has(data2.value, "chapters")) {
        this.value.chapters = parser_default.parseArray(data2.value.chapters, Chapter_default);
      }
    }
  }
};
__name(Marker, "Marker");
Marker.type = "Marker";
var MultiMarkersPlayerBar = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.markers_map = observe(((_a7 = data2.markersMap) === null || _a7 === void 0 ? void 0 : _a7.map((marker) => new Marker(marker))) || []);
  }
};
__name(MultiMarkersPlayerBar, "MultiMarkersPlayerBar");
MultiMarkersPlayerBar.type = "MultiMarkersPlayerBar";
var MultiMarkersPlayerBar_default = MultiMarkersPlayerBar;

// dist/src/parser/classes/DecoratedPlayerBar.js
var DecoratedPlayerBar = class extends YTNode {
  constructor(data2) {
    super();
    this.player_bar = parser_default.parseItem(data2.playerBar, MultiMarkersPlayerBar_default);
    this.player_bar_action_button = parser_default.parseItem(data2.playerBarActionButton, Button_default);
  }
};
__name(DecoratedPlayerBar, "DecoratedPlayerBar");
DecoratedPlayerBar.type = "DecoratedPlayerBar";
var DecoratedPlayerBar_default = DecoratedPlayerBar;

// dist/src/parser/classes/DefaultPromoPanel.js
var DefaultPromoPanel = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.description = new Text(data2.description);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.large_form_factor_background_thumbnail = parser_default.parseItem(data2.largeFormFactorBackgroundThumbnail);
    this.small_form_factor_background_thumbnail = parser_default.parseItem(data2.smallFormFactorBackgroundThumbnail);
    this.scrim_color_values = data2.scrimColorValues;
    this.min_panel_display_duration_ms = data2.minPanelDisplayDurationMs;
    this.min_video_play_duration_ms = data2.minVideoPlayDurationMs;
    this.scrim_duration = data2.scrimDuration;
    this.metadata_order = data2.metadataOrder;
    this.panel_layout = data2.panelLayout;
  }
};
__name(DefaultPromoPanel, "DefaultPromoPanel");
DefaultPromoPanel.type = "DefaultPromoPanel";
var DefaultPromoPanel_default = DefaultPromoPanel;

// dist/src/parser/classes/EngagementPanelTitleHeader.js
var EngagementPanelTitleHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.visibility_button = parser_default2.parseItem(data2.visibilityButton, Button_default);
  }
};
__name(EngagementPanelTitleHeader, "EngagementPanelTitleHeader");
EngagementPanelTitleHeader.type = "EngagementPanelTitleHeader";
var EngagementPanelTitleHeader_default = EngagementPanelTitleHeader;

// dist/src/parser/classes/MacroMarkersInfoItem.js
var MacroMarkersInfoItem = class extends YTNode {
  constructor(data2) {
    super();
    this.info_text = new Text(data2.infoText);
    this.menu = parser_default2.parseItem(data2.menu, Menu_default);
  }
};
__name(MacroMarkersInfoItem, "MacroMarkersInfoItem");
MacroMarkersInfoItem.type = "MacroMarkersInfoItem";
var MacroMarkersInfoItem_default = MacroMarkersInfoItem;

// dist/src/parser/classes/MacroMarkersListItem.js
var MacroMarkersListItem = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.time_description = new Text(data2.timeDescription);
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.on_tap_endpoint = new NavigationEndpoint_default(data2.onTap);
    this.layout = data2.layout;
    this.is_highlighted = !!data2.isHighlighted;
  }
};
__name(MacroMarkersListItem, "MacroMarkersListItem");
MacroMarkersListItem.type = "MacroMarkersListItem";
var MacroMarkersListItem_default = MacroMarkersListItem;

// dist/src/parser/classes/MacroMarkersList.js
var MacroMarkersList = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default2.parseArray(data2.contents, [MacroMarkersInfoItem_default, MacroMarkersListItem_default]);
    this.sync_button_label = new Text(data2.syncButtonLabel);
  }
};
__name(MacroMarkersList, "MacroMarkersList");
MacroMarkersList.type = "MacroMarkersList";
var MacroMarkersList_default = MacroMarkersList;

// dist/src/parser/classes/ProductList.js
var ProductList = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default2.parseArray(data2.contents);
  }
};
__name(ProductList, "ProductList");
ProductList.type = "ProductList";
var ProductList_default = ProductList;

// dist/src/parser/classes/SectionList.js
var SectionList = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parseArray(data2.contents);
    if (Reflect.has(data2, "targetId")) {
      this.target_id = data2.targetId;
    }
    if (Reflect.has(data2, "continuations")) {
      if (Reflect.has(data2.continuations[0], "nextContinuationData")) {
        this.continuation = data2.continuations[0].nextContinuationData.continuation;
        this.continuation_type = "next";
      } else if (Reflect.has(data2.continuations[0], "reloadContinuationData")) {
        this.continuation = data2.continuations[0].reloadContinuationData.continuation;
        this.continuation_type = "reload";
      }
    }
    if (Reflect.has(data2, "header")) {
      this.header = parser_default.parseItem(data2.header);
    }
    if (Reflect.has(data2, "subMenu")) {
      this.sub_menu = parser_default.parseItem(data2.subMenu);
    }
  }
};
__name(SectionList, "SectionList");
SectionList.type = "SectionList";
var SectionList_default = SectionList;

// dist/src/parser/classes/ExpandableVideoDescriptionBody.js
var ExpandableVideoDescriptionBody = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.show_more_text = new Text(data2.showMoreText);
    this.show_less_text = new Text(data2.showLessText);
    if (Reflect.has(data2, "attributedDescriptionBodyText")) {
      this.attributed_description_body_text = (_a7 = data2.attributedDescriptionBodyText) === null || _a7 === void 0 ? void 0 : _a7.content;
    }
  }
};
__name(ExpandableVideoDescriptionBody, "ExpandableVideoDescriptionBody");
ExpandableVideoDescriptionBody.type = "ExpandableVideoDescriptionBody";
var ExpandableVideoDescriptionBody_default = ExpandableVideoDescriptionBody;

// dist/src/parser/classes/SearchRefinementCard.js
var SearchRefinementCard = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.endpoint = new NavigationEndpoint_default(data2.searchEndpoint);
    this.query = new Text(data2.query).toString();
  }
};
__name(SearchRefinementCard, "SearchRefinementCard");
SearchRefinementCard.type = "SearchRefinementCard";
var SearchRefinementCard_default = SearchRefinementCard;

// dist/src/parser/classes/GameCard.js
var GameCard = class extends YTNode {
  constructor(data2) {
    super();
    this.game = parser_default.parseItem(data2.game);
  }
};
__name(GameCard, "GameCard");
GameCard.type = "GameCard";
var GameCard_default = GameCard;

// dist/src/parser/classes/ExpandableMetadata.js
var ExpandableMetadata = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "header")) {
      this.header = {
        collapsed_title: new Text(data2.header.collapsedTitle),
        collapsed_thumbnail: Thumbnail.fromResponse(data2.header.collapsedThumbnail),
        collapsed_label: new Text(data2.header.collapsedLabel),
        expanded_title: new Text(data2.header.expandedTitle)
      };
    }
    this.expanded_content = parser_default.parseItem(data2.expandedContent, HorizontalCardList_default);
    this.expand_button = parser_default.parseItem(data2.expandButton, Button_default);
    this.collapse_button = parser_default.parseItem(data2.collapseButton, Button_default);
  }
};
__name(ExpandableMetadata, "ExpandableMetadata");
ExpandableMetadata.type = "ExpandableMetadata";
var ExpandableMetadata_default = ExpandableMetadata;

// dist/src/parser/classes/ThumbnailOverlayTimeStatus.js
var ThumbnailOverlayTimeStatus = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.text).toString();
    this.style = data2.style;
  }
};
__name(ThumbnailOverlayTimeStatus, "ThumbnailOverlayTimeStatus");
ThumbnailOverlayTimeStatus.type = "ThumbnailOverlayTimeStatus";
var ThumbnailOverlayTimeStatus_default = ThumbnailOverlayTimeStatus;

// dist/src/parser/classes/Video.js
var Video = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c;
    super();
    const overlay_time_status = ((_a7 = data2.thumbnailOverlays.find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a7 === void 0 ? void 0 : _a7.thumbnailOverlayTimeStatusRenderer.text) || "N/A";
    this.id = data2.videoId;
    this.title = new Text(data2.title);
    if (Reflect.has(data2, "descriptionSnippet")) {
      this.description_snippet = new Text(data2.descriptionSnippet);
    }
    if (Reflect.has(data2, "detailedMetadataSnippets")) {
      this.snippets = data2.detailedMetadataSnippets.map((snippet) => ({
        text: new Text(snippet.snippetText),
        hover_text: new Text(snippet.snippetHoverText)
      }));
    }
    this.expandable_metadata = parser_default.parseItem(data2.expandableMetadata, ExpandableMetadata_default);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
    if (Reflect.has(data2, "richThumbnail")) {
      this.rich_thumbnail = parser_default.parseItem(data2.richThumbnail);
    }
    this.author = new Author_default(data2.ownerText, data2.ownerBadges, (_c = (_b = data2.channelThumbnailSupportedRenderers) === null || _b === void 0 ? void 0 : _b.channelThumbnailWithLinkRenderer) === null || _c === void 0 ? void 0 : _c.thumbnail);
    this.badges = parser_default.parseArray(data2.badges, MetadataBadge_default);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.published = new Text(data2.publishedTimeText);
    this.view_count = new Text(data2.viewCountText);
    this.short_view_count = new Text(data2.shortViewCountText);
    if (Reflect.has(data2, "upcomingEventData")) {
      this.upcoming = new Date(Number(`${data2.upcomingEventData.startTime}000`));
    }
    this.duration = {
      text: data2.lengthText ? new Text(data2.lengthText).toString() : new Text(overlay_time_status).toString(),
      seconds: timeToSeconds(data2.lengthText ? new Text(data2.lengthText).toString() : new Text(overlay_time_status).toString())
    };
    this.show_action_menu = !!data2.showActionMenu;
    this.is_watched = !!data2.isWatched;
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
    if (Reflect.has(data2, "searchVideoResultEntityKey")) {
      this.search_video_result_entity_key = data2.searchVideoResultEntityKey;
    }
  }
  get description() {
    var _a7;
    if (this.snippets) {
      return this.snippets.map((snip) => snip.text.toString()).join("");
    }
    return ((_a7 = this.description_snippet) === null || _a7 === void 0 ? void 0 : _a7.toString()) || "";
  }
  get is_live() {
    var _a7;
    return this.badges.some((badge) => {
      if (badge.style === "BADGE_STYLE_TYPE_LIVE_NOW" || badge.label === "LIVE")
        return true;
    }) || ((_a7 = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus_default)) === null || _a7 === void 0 ? void 0 : _a7.style) === "LIVE";
  }
  get is_upcoming() {
    return this.upcoming && this.upcoming > new Date();
  }
  get is_premiere() {
    return this.badges.some((badge) => badge.label === "PREMIERE");
  }
  get is_4k() {
    return this.badges.some((badge) => badge.label === "4K");
  }
  get has_captions() {
    return this.badges.some((badge) => badge.label === "CC");
  }
  get best_thumbnail() {
    return this.thumbnails[0];
  }
};
__name(Video, "Video");
Video.type = "Video";
var Video_default = Video;

// dist/src/parser/classes/VideoCard.js
var VideoCard = class extends Video_default {
  constructor(data2) {
    super(data2);
  }
};
__name(VideoCard, "VideoCard");
VideoCard.type = "VideoCard";
var VideoCard_default = VideoCard;

// dist/src/parser/classes/HorizontalCardList.js
var HorizontalCardList = class extends YTNode {
  constructor(data2) {
    super();
    this.cards = parser_default.parseArray(data2.cards, [SearchRefinementCard_default, MacroMarkersListItem_default, GameCard_default, VideoCard_default]);
    this.header = parser_default.parseItem(data2.header);
    this.previous_button = parser_default.parseItem(data2.previousButton, Button_default);
    this.next_button = parser_default.parseItem(data2.nextButton, Button_default);
  }
};
__name(HorizontalCardList, "HorizontalCardList");
HorizontalCardList.type = "HorizontalCardList";
var HorizontalCardList_default = HorizontalCardList;

// dist/src/parser/classes/Factoid.js
var Factoid = class extends YTNode {
  constructor(data2) {
    super();
    this.label = new Text(data2.label);
    this.value = new Text(data2.value);
    this.accessibility_text = data2.accessibilityText;
  }
};
__name(Factoid, "Factoid");
Factoid.type = "Factoid";
var Factoid_default = Factoid;

// dist/src/parser/classes/UploadTimeFactoid.js
var UploadTimeFactoid = class extends YTNode {
  constructor(data2) {
    super();
    this.factoid = parser_default2.parseItem(data2.factoid, Factoid_default);
  }
};
__name(UploadTimeFactoid, "UploadTimeFactoid");
UploadTimeFactoid.type = "UploadTimeFactoid";
var UploadTimeFactoid_default = UploadTimeFactoid;

// dist/src/parser/classes/ViewCountFactoid.js
var ViewCountFactoid = class extends YTNode {
  constructor(data2) {
    super();
    this.view_count_entity_key = data2.viewCountEntityKey;
    this.factoid = parser_default2.parseItem(data2.factoid, [Factoid_default]);
    this.view_count_type = data2.viewCountType;
  }
};
__name(ViewCountFactoid, "ViewCountFactoid");
ViewCountFactoid.type = "ViewCountFactoid";
var ViewCountFactoid_default = ViewCountFactoid;

// dist/src/parser/classes/VideoDescriptionHeader.js
var VideoDescriptionHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.channel = new Text(data2.channel);
    this.channel_navigation_endpoint = new NavigationEndpoint_default(data2.channelNavigationEndpoint);
    this.channel_thumbnail = Thumbnail.fromResponse(data2.channelThumbnail);
    this.publish_date = new Text(data2.publishDate);
    this.views = new Text(data2.views);
    this.factoids = parser_default2.parseArray(data2.factoid, [Factoid_default, ViewCountFactoid_default, UploadTimeFactoid_default]);
  }
};
__name(VideoDescriptionHeader, "VideoDescriptionHeader");
VideoDescriptionHeader.type = "VideoDescriptionHeader";
var VideoDescriptionHeader_default = VideoDescriptionHeader;

// dist/src/parser/classes/VideoDescriptionInfocardsSection.js
var VideoDescriptionInfocardsSection = class extends YTNode {
  constructor(data2) {
    super();
    this.section_title = new Text(data2.sectionTitle);
    this.creator_videos_button = parser_default2.parseItem(data2.creatorVideosButton, Button_default);
    this.creator_about_button = parser_default2.parseItem(data2.creatorAboutButton, Button_default);
    this.section_subtitle = new Text(data2.sectionSubtitle);
    this.channel_avatar = Thumbnail.fromResponse(data2.channelAvatar);
    this.channel_endpoint = new NavigationEndpoint_default(data2.channelEndpoint);
  }
};
__name(VideoDescriptionInfocardsSection, "VideoDescriptionInfocardsSection");
VideoDescriptionInfocardsSection.type = "VideoDescriptionInfocardsSection";
var VideoDescriptionInfocardsSection_default = VideoDescriptionInfocardsSection;

// dist/src/parser/classes/VideoDescriptionMusicSection.js
var VideoDescriptionMusicSection = class extends YTNode {
  constructor(data2) {
    super();
    this.carousel_lockups = parser_default2.parseArray(data2.carouselLockups, CarouselLockup_default);
    this.section_title = new Text(data2.sectionTitle);
  }
};
__name(VideoDescriptionMusicSection, "VideoDescriptionMusicSection");
VideoDescriptionMusicSection.type = "VideoDescriptionMusicSection";
var VideoDescriptionMusicSection_default = VideoDescriptionMusicSection;

// dist/src/parser/classes/VideoDescriptionTranscriptSection.js
var VideoDescriptionTranscriptSection = class extends YTNode {
  constructor(data2) {
    super();
    this.section_title = new Text(data2.sectionTitle);
    this.sub_header_text = new Text(data2.subHeaderText);
    this.primary_button = parser_default2.parseItem(data2.primaryButton, Button_default);
  }
};
__name(VideoDescriptionTranscriptSection, "VideoDescriptionTranscriptSection");
VideoDescriptionTranscriptSection.type = "VideoDescriptionTranscriptSection";
var VideoDescriptionTranscriptSection_default = VideoDescriptionTranscriptSection;

// dist/src/parser/classes/StructuredDescriptionPlaylistLockup.js
var StructuredDescriptionPlaylistLockup = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.title = new Text(data2.title);
    this.short_byline_text = new Text(data2.shortBylineText);
    this.video_count_short_text = new Text(data2.videoCountShortText);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.thumbnail_width = data2.thumbnailWidth;
    this.aspect_ratio = data2.aspectRatio;
    this.max_lines_title = data2.maxLinesTitle;
    this.max_lines_short_byline_text = data2.maxLinesShortBylineText;
    this.overlay_position = data2.overlayPosition;
  }
};
__name(StructuredDescriptionPlaylistLockup, "StructuredDescriptionPlaylistLockup");
StructuredDescriptionPlaylistLockup.type = "StructuredDescriptionPlaylistLockup";
var StructuredDescriptionPlaylistLockup_default = StructuredDescriptionPlaylistLockup;

// dist/src/parser/classes/VideoDescriptionCourseSection.js
var VideoDescriptionCourseSection = class extends YTNode {
  constructor(data2) {
    super();
    this.section_title = new Text(data2.sectionTitle);
    this.media_lockups = parser_default2.parseArray(data2.mediaLockups, [StructuredDescriptionPlaylistLockup_default]);
  }
};
__name(VideoDescriptionCourseSection, "VideoDescriptionCourseSection");
VideoDescriptionCourseSection.type = "VideoDescriptionCourseSection";
var VideoDescriptionCourseSection_default = VideoDescriptionCourseSection;

// dist/src/parser/classes/ReelShelf.js
var ReelShelf = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.items = parser_default.parseArray(data2.items);
    if (Reflect.has(data2, "endpoint")) {
      this.endpoint = new NavigationEndpoint_default(data2.endpoint);
    }
  }
  get contents() {
    return this.items;
  }
};
__name(ReelShelf, "ReelShelf");
ReelShelf.type = "ReelShelf";
var ReelShelf_default = ReelShelf;

// dist/src/parser/classes/StructuredDescriptionContent.js
var StructuredDescriptionContent = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default2.parseArray(data2.items, [
      VideoDescriptionHeader_default,
      ExpandableVideoDescriptionBody_default,
      VideoDescriptionMusicSection_default,
      VideoDescriptionInfocardsSection_default,
      VideoDescriptionCourseSection_default,
      VideoDescriptionTranscriptSection_default,
      VideoDescriptionTranscriptSection_default,
      HorizontalCardList_default,
      ReelShelf_default
    ]);
  }
};
__name(StructuredDescriptionContent, "StructuredDescriptionContent");
StructuredDescriptionContent.type = "StructuredDescriptionContent";
var StructuredDescriptionContent_default = StructuredDescriptionContent;

// dist/src/parser/classes/VideoAttributeView.js
var VideoAttributeView = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    if ((_a7 = data2.image) === null || _a7 === void 0 ? void 0 : _a7.sources) {
      this.image = Thumbnail.fromResponse(data2.image);
    } else {
      this.image = parser_default2.parseItem(data2.image, ContentPreviewImageView_default);
    }
    this.image_style = data2.imageStyle;
    this.title = data2.title;
    this.subtitle = data2.subtitle;
    this.secondary_subtitle = {
      content: data2.secondarySubtitle.content
    };
    this.orientation = data2.orientation;
    this.sizing_rule = data2.sizingRule;
    this.overflow_menu_on_tap = new NavigationEndpoint_default(data2.overflowMenuOnTap);
    this.overflow_menu_a11y_label = data2.overflowMenuA11yLabel;
  }
};
__name(VideoAttributeView, "VideoAttributeView");
VideoAttributeView.type = "VideoAttributeView";
var VideoAttributeView_default = VideoAttributeView;

// dist/src/parser/classes/EngagementPanelSectionList.js
var EngagementPanelSectionList = class extends YTNode {
  constructor(data2) {
    super();
    this.header = parser_default2.parseItem(data2.header, EngagementPanelTitleHeader_default);
    this.content = parser_default2.parseItem(data2.content, [VideoAttributeView_default, SectionList_default, ContinuationItem_default, ClipSection_default, StructuredDescriptionContent_default, MacroMarkersList_default, ProductList_default]);
    this.panel_identifier = data2.panelIdentifier;
    this.identifier = data2.identifier ? {
      surface: data2.identifier.surface,
      tag: data2.identifier.tag
    } : void 0;
    this.target_id = data2.targetId;
    this.visibility = data2.visibility;
  }
};
__name(EngagementPanelSectionList, "EngagementPanelSectionList");
EngagementPanelSectionList.type = "EngagementPanelSectionList";
var EngagementPanelSectionList_default = EngagementPanelSectionList;

// dist/src/parser/classes/DescriptionPreviewView.js
var DescriptionPreviewView = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f;
    super();
    this.description = Text.fromAttributed(data2.description);
    this.max_lines = parseInt(data2.maxLines);
    this.truncation_text = Text.fromAttributed(data2.truncationText);
    this.always_show_truncation_text = !!data2.alwaysShowTruncationText;
    if ((_c = (_b = (_a7 = data2.rendererContext.commandContext) === null || _a7 === void 0 ? void 0 : _a7.onTap) === null || _b === void 0 ? void 0 : _b.innertubeCommand) === null || _c === void 0 ? void 0 : _c.showEngagementPanelEndpoint) {
      const endpoint = (_f = (_e = (_d = data2.rendererContext.commandContext) === null || _d === void 0 ? void 0 : _d.onTap) === null || _e === void 0 ? void 0 : _e.innertubeCommand) === null || _f === void 0 ? void 0 : _f.showEngagementPanelEndpoint;
      this.more_endpoint = {
        show_engagement_panel_endpoint: {
          engagement_panel: parser_default2.parseItem(endpoint.engagementPanel, EngagementPanelSectionList_default),
          engagement_panel_popup_type: endpoint.engagementPanelPresentationConfigs.engagementPanelPopupPresentationConfig.popupType,
          identifier: {
            surface: endpoint.identifier.surface,
            tag: endpoint.identifier.tag
          }
        }
      };
    }
  }
};
__name(DescriptionPreviewView, "DescriptionPreviewView");
DescriptionPreviewView.type = "DescriptionPreviewView";
var DescriptionPreviewView_default = DescriptionPreviewView;

// dist/src/parser/classes/DidYouMean.js
var DidYouMean = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.didYouMean).toString();
    this.corrected_query = new Text(data2.correctedQuery);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint || data2.correctedQueryEndpoint);
  }
};
__name(DidYouMean, "DidYouMean");
DidYouMean.type = "DidYouMean";
var DidYouMean_default = DidYouMean;

// dist/src/parser/classes/DownloadButton.js
var DownloadButton = class extends YTNode {
  constructor(data2) {
    super();
    this.style = data2.style;
    this.size = data2.size;
    this.endpoint = new NavigationEndpoint_default(data2.command);
    this.target_id = data2.targetId;
  }
};
__name(DownloadButton, "DownloadButton");
DownloadButton.type = "DownloadButton";
var DownloadButton_default = DownloadButton;

// dist/src/parser/classes/DynamicTextView.js
var DynamicTextView = class extends YTNode {
  constructor(data2) {
    super();
    this.text = Text.fromAttributed(data2.text);
    this.max_lines = parseInt(data2.maxLines);
  }
};
__name(DynamicTextView, "DynamicTextView");
DynamicTextView.type = "DynamicTextView";
var DynamicTextView_default = DynamicTextView;

// dist/src/parser/classes/misc/ChildElement.js
var ChildElement = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    if (Reflect.has(data2, "type") && Reflect.has(data2.type, "textType")) {
      this.text = (_a7 = data2.type.textType.text) === null || _a7 === void 0 ? void 0 : _a7.content;
    }
    this.properties = data2.properties;
    if (Reflect.has(data2, "childElements")) {
      this.child_elements = data2.childElements.map((el) => new ChildElement(el));
    }
  }
};
__name(ChildElement, "ChildElement");
ChildElement.type = "ChildElement";
var ChildElement_default = ChildElement;

// dist/src/parser/classes/Element.js
var Element = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    if (Reflect.has(data2, "elementRenderer")) {
      return parser_default.parseItem(data2, Element);
    }
    const type = data2.newElement.type.componentType;
    this.model = parser_default.parseItem(type === null || type === void 0 ? void 0 : type.model);
    if (Reflect.has(data2, "newElement") && Reflect.has(data2.newElement, "childElements")) {
      this.child_elements = observe(((_a7 = data2.newElement.childElements) === null || _a7 === void 0 ? void 0 : _a7.map((el) => new ChildElement_default(el))) || []);
    }
  }
};
__name(Element, "Element");
Element.type = "Element";
var Element_default = Element;

// dist/src/parser/classes/EmergencyOnebox.js
var EmergencyOnebox = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.first_option = parser_default.parseItem(data2.firstOption);
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
  }
};
__name(EmergencyOnebox, "EmergencyOnebox");
EmergencyOnebox.type = "EmergencyOnebox";
var EmergencyOnebox_default = EmergencyOnebox;

// dist/src/parser/classes/EmojiPickerCategory.js
var EmojiPickerCategory = class extends YTNode {
  constructor(data2) {
    super();
    this.category_id = data2.categoryId;
    this.title = new Text(data2.title);
    this.emoji_ids = data2.emojiIds;
    this.image_loading_lazy = !!data2.imageLoadingLazy;
    this.category_type = data2.categoryType;
  }
};
__name(EmojiPickerCategory, "EmojiPickerCategory");
EmojiPickerCategory.type = "EmojiPickerCategory";
var EmojiPickerCategory_default = EmojiPickerCategory;

// dist/src/parser/classes/EmojiPickerCategoryButton.js
var EmojiPickerCategoryButton = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.category_id = data2.categoryId;
    if (Reflect.has(data2, "icon")) {
      this.icon_type = (_a7 = data2.icon) === null || _a7 === void 0 ? void 0 : _a7.iconType;
    }
    this.tooltip = data2.tooltip;
  }
};
__name(EmojiPickerCategoryButton, "EmojiPickerCategoryButton");
EmojiPickerCategoryButton.type = "EmojiPickerCategoryButton";
var EmojiPickerCategoryButton_default = EmojiPickerCategoryButton;

// dist/src/parser/classes/EmojiPickerUpsellCategory.js
var EmojiPickerUpsellCategory = class extends YTNode {
  constructor(data2) {
    super();
    this.category_id = data2.categoryId;
    this.title = new Text(data2.title);
    this.upsell = new Text(data2.upsell);
    this.emoji_tooltip = data2.emojiTooltip;
    this.endpoint = new NavigationEndpoint_default(data2.command);
    this.emoji_ids = data2.emojiIds;
  }
};
__name(EmojiPickerUpsellCategory, "EmojiPickerUpsellCategory");
EmojiPickerUpsellCategory.type = "EmojiPickerUpsellCategory";
var EmojiPickerUpsellCategory_default = EmojiPickerUpsellCategory;

// dist/src/parser/classes/EndscreenElement.js
var EndscreenElement = class extends YTNode {
  constructor(data2) {
    super();
    this.style = data2.style;
    this.title = new Text(data2.title);
    this.endpoint = new NavigationEndpoint_default(data2.endpoint);
    if (Reflect.has(data2, "image")) {
      this.image = Thumbnail.fromResponse(data2.image);
    }
    if (Reflect.has(data2, "icon")) {
      this.icon = Thumbnail.fromResponse(data2.icon);
    }
    if (Reflect.has(data2, "metadata")) {
      this.metadata = new Text(data2.metadata);
    }
    if (Reflect.has(data2, "callToAction")) {
      this.call_to_action = new Text(data2.callToAction);
    }
    if (Reflect.has(data2, "hovercardButton")) {
      this.hovercard_button = parser_default.parseItem(data2.hovercardButton);
    }
    if (Reflect.has(data2, "isSubscribe")) {
      this.is_subscribe = !!data2.isSubscribe;
    }
    if (Reflect.has(data2, "playlistLength")) {
      this.playlist_length = new Text(data2.playlistLength);
    }
    if (Reflect.has(data2, "thumbnailOverlays")) {
      this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
    }
    this.left = parseFloat(data2.left);
    this.width = parseFloat(data2.width);
    this.top = parseFloat(data2.top);
    this.aspect_ratio = parseFloat(data2.aspectRatio);
    this.start_ms = parseFloat(data2.startMs);
    this.end_ms = parseFloat(data2.endMs);
    this.id = data2.id;
  }
};
__name(EndscreenElement, "EndscreenElement");
EndscreenElement.type = "EndscreenElement";
var EndscreenElement_default = EndscreenElement;

// dist/src/parser/classes/EndScreenPlaylist.js
var EndScreenPlaylist = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.playlistId;
    this.title = new Text(data2.title);
    this.author = new Text(data2.longBylineText);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.video_count = new Text(data2.videoCountText);
  }
};
__name(EndScreenPlaylist, "EndScreenPlaylist");
EndScreenPlaylist.type = "EndScreenPlaylist";
var EndScreenPlaylist_default = EndScreenPlaylist;

// dist/src/parser/classes/EndScreenVideo.js
var EndScreenVideo = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.videoId;
    this.title = new Text(data2.title);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
    this.author = new Author_default(data2.shortBylineText, data2.ownerBadges);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.short_view_count = new Text(data2.shortViewCountText);
    this.badges = parser_default.parseArray(data2.badges);
    this.duration = {
      text: new Text(data2.lengthText).toString(),
      seconds: data2.lengthInSeconds
    };
  }
};
__name(EndScreenVideo, "EndScreenVideo");
EndScreenVideo.type = "EndScreenVideo";
var EndScreenVideo_default = EndScreenVideo;

// dist/src/parser/classes/ExpandableTab.js
var ExpandableTab = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.title;
    this.endpoint = new NavigationEndpoint_default(data2.endpoint);
    this.selected = data2.selected;
    this.content = parser_default.parseItem(data2.content);
  }
};
__name(ExpandableTab, "ExpandableTab");
ExpandableTab.type = "ExpandableTab";
var ExpandableTab_default = ExpandableTab;

// dist/src/parser/classes/ExpandedShelfContents.js
var ExpandedShelfContents = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parseArray(data2.items);
  }
  get contents() {
    return this.items;
  }
};
__name(ExpandedShelfContents, "ExpandedShelfContents");
ExpandedShelfContents.type = "ExpandedShelfContents";
var ExpandedShelfContents_default = ExpandedShelfContents;

// dist/src/parser/classes/FeedFilterChipBar.js
var FeedFilterChipBar = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parseArray(data2.contents, ChipCloudChip_default);
  }
};
__name(FeedFilterChipBar, "FeedFilterChipBar");
FeedFilterChipBar.type = "FeedFilterChipBar";
var FeedFilterChipBar_default = FeedFilterChipBar;

// dist/src/parser/classes/FeedTabbedHeader.js
var FeedTabbedHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
  }
};
__name(FeedTabbedHeader, "FeedTabbedHeader");
FeedTabbedHeader.type = "FeedTabbedHeader";
var FeedTabbedHeader_default = FeedTabbedHeader;

// dist/src/parser/classes/ToggleButtonView.js
var ToggleButtonView = class extends YTNode {
  constructor(data2) {
    super();
    this.default_button = parser_default2.parseItem(data2.defaultButtonViewModel, ButtonView_default);
    this.toggled_button = parser_default2.parseItem(data2.toggledButtonViewModel, ButtonView_default);
    this.identifier = data2.identifier;
    this.is_toggling_disabled = data2.isTogglingDisabled;
  }
};
__name(ToggleButtonView, "ToggleButtonView");
ToggleButtonView.type = "ToggleButtonView";
var ToggleButtonView_default = ToggleButtonView;

// dist/src/parser/classes/FlexibleActionsView.js
var FlexibleActionsView = class extends YTNode {
  constructor(data2) {
    super();
    this.actions_rows = data2.actionsRows.map((row) => ({
      actions: parser_default2.parseArray(row.actions, [ButtonView_default, ToggleButtonView_default])
    }));
    this.style = data2.style;
  }
};
__name(FlexibleActionsView, "FlexibleActionsView");
FlexibleActionsView.type = "FlexibleActionsView";
var FlexibleActionsView_default = FlexibleActionsView;

// dist/src/parser/classes/GameDetails.js
var GameDetails = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.box_art = Thumbnail.fromResponse(data2.boxArt);
    this.box_art_overlay_text = new Text(data2.boxArtOverlayText);
    this.endpoint = new NavigationEndpoint_default(data2.endpoint);
    this.is_official_box_art = !!data2.isOfficialBoxArt;
  }
};
__name(GameDetails, "GameDetails");
GameDetails.type = "GameDetails";
var GameDetails_default = GameDetails;

// dist/src/parser/classes/Grid.js
var Grid = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c;
    super();
    this.items = parser_default.parseArray(data2.items);
    if (Reflect.has(data2, "header")) {
      this.header = parser_default.parseItem(data2.header);
    }
    if (Reflect.has(data2, "isCollapsible")) {
      this.is_collapsible = data2.isCollapsible;
    }
    if (Reflect.has(data2, "visibleRowCount")) {
      this.visible_row_count = data2.visibleRowCount;
    }
    if (Reflect.has(data2, "targetId")) {
      this.target_id = data2.targetId;
    }
    this.continuation = ((_c = (_b = (_a7 = data2.continuations) === null || _a7 === void 0 ? void 0 : _a7[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || null;
  }
  get contents() {
    return this.items;
  }
};
__name(Grid, "Grid");
Grid.type = "Grid";
var Grid_default = Grid;

// dist/src/parser/classes/GridChannel.js
var GridChannel = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.channelId;
    this.author = new Author_default(Object.assign(Object.assign({}, data2.title), { navigationEndpoint: data2.navigationEndpoint }), data2.ownerBadges, data2.thumbnail);
    this.subscribers = new Text(data2.subscriberCountText);
    this.video_count = new Text(data2.videoCountText);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.subscribe_button = parser_default.parseItem(data2.subscribeButton);
  }
};
__name(GridChannel, "GridChannel");
GridChannel.type = "GridChannel";
var GridChannel_default = GridChannel;

// dist/src/parser/classes/GridHeader.js
var GridHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
  }
};
__name(GridHeader, "GridHeader");
GridHeader.type = "GridHeader";
var GridHeader_default = GridHeader;

// dist/src/parser/classes/GridMix.js
var GridMix = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.id = data2.playlistId;
    this.title = new Text(data2.title);
    this.author = ((_a7 = data2.shortBylineText) === null || _a7 === void 0 ? void 0 : _a7.simpleText) ? new Text(data2.shortBylineText) : ((_b = data2.longBylineText) === null || _b === void 0 ? void 0 : _b.simpleText) ? new Text(data2.longBylineText) : null;
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.video_count = new Text(data2.videoCountText);
    this.video_count_short = new Text(data2.videoCountShortText);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.secondary_endpoint = new NavigationEndpoint_default(data2.secondaryNavigationEndpoint);
    this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
  }
};
__name(GridMix, "GridMix");
GridMix.type = "GridMix";
var GridMix_default = GridMix;

// dist/src/parser/classes/GridMovie.js
var GridMovie = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    const length_alt = (_a7 = data2.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty("thumbnailOverlayTimeStatusRenderer"))) === null || _a7 === void 0 ? void 0 : _a7.thumbnailOverlayTimeStatusRenderer;
    this.id = data2.videoId;
    this.title = new Text(data2.title);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.duration = data2.lengthText ? new Text(data2.lengthText) : (length_alt === null || length_alt === void 0 ? void 0 : length_alt.text) ? new Text(length_alt.text) : null;
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.badges = parser_default.parseArray(data2.badges, MetadataBadge_default);
    this.metadata = new Text(data2.metadata);
    this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
  }
};
__name(GridMovie, "GridMovie");
GridMovie.type = "GridMovie";
var GridMovie_default = GridMovie;

// dist/src/parser/classes/GridPlaylist.js
var GridPlaylist = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.id = data2.playlistId;
    this.title = new Text(data2.title);
    if (Reflect.has(data2, "shortBylineText")) {
      this.author = new Author_default(data2.shortBylineText, data2.ownerBadges);
    }
    this.badges = parser_default.parseArray(data2.ownerBadges);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.view_playlist = new Text(data2.viewPlaylistText);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.thumbnail_renderer = parser_default.parseItem(data2.thumbnailRenderer);
    this.sidebar_thumbnails = [].concat(...((_a7 = data2.sidebarThumbnails) === null || _a7 === void 0 ? void 0 : _a7.map((thumbnail) => Thumbnail.fromResponse(thumbnail))) || []) || null;
    this.video_count = new Text(data2.thumbnailText);
    this.video_count_short = new Text(data2.videoCountShortText);
  }
};
__name(GridPlaylist, "GridPlaylist");
GridPlaylist.type = "GridPlaylist";
var GridPlaylist_default = GridPlaylist;

// dist/src/parser/classes/ShowCustomThumbnail.js
var ShowCustomThumbnail = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
  }
};
__name(ShowCustomThumbnail, "ShowCustomThumbnail");
ShowCustomThumbnail.type = "ShowCustomThumbnail";
var ShowCustomThumbnail_default = ShowCustomThumbnail;

// dist/src/parser/classes/ThumbnailOverlayBottomPanel.js
var ThumbnailOverlayBottomPanel = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "text")) {
      this.text = new Text(data2.text);
    }
    if (Reflect.has(data2, "icon") && Reflect.has(data2.icon, "iconType")) {
      this.icon_type = data2.icon.iconType;
    }
  }
};
__name(ThumbnailOverlayBottomPanel, "ThumbnailOverlayBottomPanel");
ThumbnailOverlayBottomPanel.type = "ThumbnailOverlayBottomPanel";
var ThumbnailOverlayBottomPanel_default = ThumbnailOverlayBottomPanel;

// dist/src/parser/classes/GridShow.js
var GridShow = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.thumbnail_renderer = parser_default2.parseItem(data2.thumbnailRenderer, ShowCustomThumbnail_default);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.long_byline_text = new Text(data2.longBylineText);
    this.thumbnail_overlays = parser_default2.parseArray(data2.thumbnailOverlays, ThumbnailOverlayBottomPanel_default);
    this.author = new Author_default(data2.shortBylineText, void 0);
  }
};
__name(GridShow, "GridShow");
GridShow.type = "GridShow";
var GridShow_default = GridShow;

// dist/src/parser/classes/GridVideo.js
var GridVideo = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    const length_alt = (_a7 = data2.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty("thumbnailOverlayTimeStatusRenderer"))) === null || _a7 === void 0 ? void 0 : _a7.thumbnailOverlayTimeStatusRenderer;
    this.id = data2.videoId;
    this.title = new Text(data2.title);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
    this.rich_thumbnail = parser_default.parseItem(data2.richThumbnail);
    this.published = new Text(data2.publishedTimeText);
    this.duration = data2.lengthText ? new Text(data2.lengthText) : (length_alt === null || length_alt === void 0 ? void 0 : length_alt.text) ? new Text(length_alt.text) : null;
    this.author = data2.shortBylineText && new Author_default(data2.shortBylineText, data2.ownerBadges);
    this.views = new Text(data2.viewCountText);
    this.short_view_count = new Text(data2.shortViewCountText);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
    if (Reflect.has(data2, "buttons")) {
      this.buttons = parser_default.parseArray(data2.buttons);
    }
    if (Reflect.has(data2, "upcomingEventData")) {
      this.upcoming = new Date(Number(`${data2.upcomingEventData.startTime}000`));
      this.upcoming_text = new Text(data2.upcomingEventData.upcomingEventText);
      this.is_reminder_set = !!((_b = data2.upcomingEventData) === null || _b === void 0 ? void 0 : _b.isReminderSet);
    }
  }
  get is_upcoming() {
    return Boolean(this.upcoming && this.upcoming > new Date());
  }
};
__name(GridVideo, "GridVideo");
GridVideo.type = "GridVideo";
var GridVideo_default = GridVideo;

// dist/src/parser/classes/GuideEntry.js
var GuideEntry = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.formattedTitle);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint || data2.serviceEndpoint);
    if (Reflect.has(data2, "icon") && Reflect.has(data2.icon, "iconType")) {
      this.icon_type = data2.icon.iconType;
    }
    if (Reflect.has(data2, "thumbnail")) {
      this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    }
    if (Reflect.has(data2, "badges")) {
      this.badges = data2.badges;
    }
    this.is_primary = !!data2.isPrimary;
  }
};
__name(GuideEntry, "GuideEntry");
GuideEntry.type = "GuideEntry";
var GuideEntry_default = GuideEntry;

// dist/src/parser/classes/GuideCollapsibleEntry.js
var GuideCollapsibleEntry = class extends YTNode {
  constructor(data2) {
    super();
    this.expander_item = parser_default2.parseItem(data2.expanderItem, GuideEntry_default);
    this.collapser_item = parser_default2.parseItem(data2.collapserItem, GuideEntry_default);
    this.expandable_items = parser_default2.parseArray(data2.expandableItems);
  }
};
__name(GuideCollapsibleEntry, "GuideCollapsibleEntry");
GuideCollapsibleEntry.type = "GuideCollapsibleEntry";
var GuideCollapsibleEntry_default = GuideCollapsibleEntry;

// dist/src/parser/classes/GuideCollapsibleSectionEntry.js
var GuideCollapsibleSectionEntry = class extends YTNode {
  constructor(data2) {
    super();
    this.header_entry = parser_default2.parseItem(data2.headerEntry);
    this.expander_icon = data2.expanderIcon.iconType;
    this.collapser_icon = data2.collapserIcon.iconType;
    this.section_items = parser_default2.parseArray(data2.sectionItems);
  }
};
__name(GuideCollapsibleSectionEntry, "GuideCollapsibleSectionEntry");
GuideCollapsibleSectionEntry.type = "GuideCollapsibleSectionEntry";
var GuideCollapsibleSectionEntry_default = GuideCollapsibleSectionEntry;

// dist/src/parser/classes/GuideDownloadsEntry.js
var GuideDownloadsEntry = class extends GuideEntry_default {
  constructor(data2) {
    super(data2.entryRenderer.guideEntryRenderer);
    this.always_show = !!data2.alwaysShow;
  }
};
__name(GuideDownloadsEntry, "GuideDownloadsEntry");
GuideDownloadsEntry.type = "GuideDownloadsEntry";
var GuideDownloadsEntry_default = GuideDownloadsEntry;

// dist/src/parser/classes/GuideSection.js
var GuideSection = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "formattedTitle")) {
      this.title = new Text(data2.formattedTitle);
    }
    this.items = parser_default2.parseArray(data2.items);
  }
};
__name(GuideSection, "GuideSection");
GuideSection.type = "GuideSection";
var GuideSection_default = GuideSection;

// dist/src/parser/classes/GuideSubscriptionsSection.js
var GuideSubscriptionsSection = class extends GuideSection_default {
};
__name(GuideSubscriptionsSection, "GuideSubscriptionsSection");
GuideSubscriptionsSection.type = "GuideSubscriptionsSection";
var GuideSubscriptionsSection_default = GuideSubscriptionsSection;

// dist/src/parser/classes/HashtagHeader.js
var HashtagHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.hashtag = new Text(data2.hashtag);
    this.hashtag_info = new Text(data2.hashtagInfoText);
  }
};
__name(HashtagHeader, "HashtagHeader");
HashtagHeader.type = "HashtagHeader";
var HashtagHeader_default = HashtagHeader;

// dist/src/parser/classes/HeroPlaylistThumbnail.js
var HeroPlaylistThumbnail = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.on_tap_endpoint = new NavigationEndpoint_default(data2.onTap);
  }
};
__name(HeroPlaylistThumbnail, "HeroPlaylistThumbnail");
HeroPlaylistThumbnail.type = "HeroPlaylistThumbnail";
var HeroPlaylistThumbnail_default = HeroPlaylistThumbnail;

// dist/src/parser/classes/HighlightsCarousel.js
var Panel = class extends YTNode {
  constructor(data2) {
    super();
    if (data2.thumbnail) {
      this.thumbnail = {
        image: data2.thumbnail.image.sources,
        endpoint: new NavigationEndpoint_default(data2.thumbnail.onTap),
        on_long_press_endpoint: new NavigationEndpoint_default(data2.thumbnail.onLongPress),
        content_mode: data2.thumbnail.contentMode,
        crop_options: data2.thumbnail.cropOptions
      };
    }
    this.background_image = {
      image: data2.backgroundImage.image.sources,
      gradient_image: data2.backgroundImage.gradientImage.sources
    };
    this.strapline = data2.strapline;
    this.title = data2.title;
    this.description = data2.description;
    this.cta = {
      icon_name: data2.cta.iconName,
      title: data2.cta.title,
      endpoint: new NavigationEndpoint_default(data2.cta.onTap),
      accessibility_text: data2.cta.accessibilityText,
      state: data2.cta.state
    };
    this.text_on_tap_endpoint = new NavigationEndpoint_default(data2.textOnTap);
  }
};
__name(Panel, "Panel");
Panel.type = "Panel";
var HighlightsCarousel = class extends YTNode {
  constructor(data2) {
    super();
    this.panels = observe(data2.highlightsCarousel.panels.map((el) => new Panel(el)));
  }
};
__name(HighlightsCarousel, "HighlightsCarousel");
HighlightsCarousel.type = "HighlightsCarousel";
var HighlightsCarousel_default = HighlightsCarousel;

// dist/src/parser/classes/SearchSuggestion.js
var SearchSuggestion = class extends YTNode {
  constructor(data2) {
    super();
    this.suggestion = new Text(data2.suggestion);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    if (Reflect.has(data2, "icon")) {
      this.icon_type = data2.icon.iconType;
    }
    if (Reflect.has(data2, "serviceEndpoint")) {
      this.service_endpoint = new NavigationEndpoint_default(data2.serviceEndpoint);
    }
  }
};
__name(SearchSuggestion, "SearchSuggestion");
SearchSuggestion.type = "SearchSuggestion";
var SearchSuggestion_default = SearchSuggestion;

// dist/src/parser/classes/HistorySuggestion.js
var HistorySuggestion = class extends SearchSuggestion_default {
  constructor(data2) {
    super(data2);
  }
};
__name(HistorySuggestion, "HistorySuggestion");
HistorySuggestion.type = "HistorySuggestion";
var HistorySuggestion_default = HistorySuggestion;

// dist/src/parser/classes/HorizontalList.js
var HorizontalList = class extends YTNode {
  constructor(data2) {
    super();
    this.visible_item_count = data2.visibleItemCount;
    this.items = parser_default.parseArray(data2.items);
  }
  get contents() {
    return this.items;
  }
};
__name(HorizontalList, "HorizontalList");
HorizontalList.type = "HorizontalList";
var HorizontalList_default = HorizontalList;

// dist/src/parser/classes/HorizontalMovieList.js
var HorizontalMovieList = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parseArray(data2.items);
    this.previous_button = parser_default.parseItem(data2.previousButton, Button_default);
    this.next_button = parser_default.parseItem(data2.nextButton, Button_default);
  }
  get contents() {
    return this.items;
  }
};
__name(HorizontalMovieList, "HorizontalMovieList");
HorizontalMovieList.type = "HorizontalMovieList";
var HorizontalMovieList_default = HorizontalMovieList;

// dist/src/parser/classes/IconLink.js
var IconLink = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.icon_type = (_a7 = data2.icon) === null || _a7 === void 0 ? void 0 : _a7.iconType;
    if (Reflect.has(data2, "tooltip")) {
      this.tooltip = new Text(data2.tooltip).toString();
    }
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
  }
};
__name(IconLink, "IconLink");
IconLink.type = "IconLink";
var IconLink_default = IconLink;

// dist/src/parser/classes/ImageBannerView.js
var ImageBannerView = class extends YTNode {
  constructor(data2) {
    super();
    this.image = Thumbnail.fromResponse(data2.image);
    this.style = data2.style;
  }
};
__name(ImageBannerView, "ImageBannerView");
ImageBannerView.type = "ImageBannerView";
var ImageBannerView_default = ImageBannerView;

// dist/src/parser/classes/InfoPanelContent.js
var InfoPanelContent = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.source = new Text(data2.source);
    this.paragraphs = data2.paragraphs.map((p) => new Text(p));
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.source_endpoint = new NavigationEndpoint_default(data2.sourceEndpoint);
    this.truncate_paragraphs = !!data2.truncateParagraphs;
    this.background = data2.background;
    if (Reflect.has(data2, "inlineLinkIcon") && Reflect.has(data2.inlineLinkIcon, "iconType")) {
      this.inline_link_icon_type = data2.inlineLinkIcon.iconType;
    }
  }
};
__name(InfoPanelContent, "InfoPanelContent");
InfoPanelContent.type = "InfoPanelContent";
var InfoPanelContent_default = InfoPanelContent;

// dist/src/parser/classes/InfoPanelContainer.js
var InfoPanelContainer = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.title = new Text(data2.title);
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
    this.content = parser_default.parseItem(data2.content, InfoPanelContent_default);
    this.background = data2.background;
    if (Reflect.has(data2, "icon")) {
      this.icon_type = (_a7 = data2.icon) === null || _a7 === void 0 ? void 0 : _a7.iconType;
    }
  }
};
__name(InfoPanelContainer, "InfoPanelContainer");
InfoPanelContainer.type = "InfoPanelContainer";
var InfoPanelContainer_default = InfoPanelContainer;

// dist/src/parser/classes/InteractiveTabbedHeader.js
var InteractiveTabbedHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.header_type = data2.type;
    this.title = new Text(data2.title);
    this.description = new Text(data2.description);
    this.metadata = new Text(data2.metadata);
    this.badges = parser_default.parseArray(data2.badges, MetadataBadge_default);
    this.box_art = Thumbnail.fromResponse(data2.boxArt);
    this.banner = Thumbnail.fromResponse(data2.banner);
    this.buttons = parser_default.parseArray(data2.buttons, [SubscribeButton_default, Button_default]);
    this.auto_generated = new Text(data2.autoGenerated);
  }
};
__name(InteractiveTabbedHeader, "InteractiveTabbedHeader");
InteractiveTabbedHeader.type = "InteractiveTabbedHeader";
var InteractiveTabbedHeader_default = InteractiveTabbedHeader;

// dist/src/parser/classes/ItemSectionHeader.js
var ItemSectionHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
  }
};
__name(ItemSectionHeader, "ItemSectionHeader");
ItemSectionHeader.type = "ItemSectionHeader";
var ItemSectionHeader_default = ItemSectionHeader;

// dist/src/parser/classes/ItemSectionTab.js
var ItemSectionTab = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.selected = !!data2.selected;
    this.endpoint = new NavigationEndpoint_default(data2.endpoint);
  }
};
__name(ItemSectionTab, "ItemSectionTab");
ItemSectionTab.type = "Tab";
var ItemSectionTab_default = ItemSectionTab;

// dist/src/parser/classes/ItemSectionTabbedHeader.js
var ItemSectionTabbedHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.tabs = parser_default.parseArray(data2.tabs, ItemSectionTab_default);
    if (Reflect.has(data2, "endItems")) {
      this.end_items = parser_default.parseArray(data2.endItems);
    }
  }
};
__name(ItemSectionTabbedHeader, "ItemSectionTabbedHeader");
ItemSectionTabbedHeader.type = "ItemSectionTabbedHeader";
var ItemSectionTabbedHeader_default = ItemSectionTabbedHeader;

// dist/src/parser/classes/ItemSection.js
var ItemSection = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c;
    super();
    this.header = parser_default.parseItem(data2.header, [CommentsHeader_default, ItemSectionHeader_default, ItemSectionTabbedHeader_default]);
    this.contents = parser_default.parseArray(data2.contents);
    if (data2.targetId || data2.sectionIdentifier) {
      this.target_id = data2.target_id || data2.sectionIdentifier;
    }
    if (data2.continuations) {
      this.continuation = (_c = (_b = (_a7 = data2.continuations) === null || _a7 === void 0 ? void 0 : _a7[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation;
    }
  }
};
__name(ItemSection, "ItemSection");
ItemSection.type = "ItemSection";
var ItemSection_default = ItemSection;

// dist/src/parser/classes/LikeButton.js
var LikeButton = class extends YTNode {
  constructor(data2) {
    super();
    this.target = {
      video_id: data2.target.videoId
    };
    this.like_status = data2.likeStatus;
    this.likes_allowed = data2.likesAllowed;
    if (Reflect.has(data2, "serviceEndpoints")) {
      this.endpoints = data2.serviceEndpoints.map((endpoint) => new NavigationEndpoint_default(endpoint));
    }
  }
};
__name(LikeButton, "LikeButton");
LikeButton.type = "LikeButton";
var LikeButton_default = LikeButton;

// dist/src/parser/classes/LiveChat.js
var LiveChat = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.header = parser_default.parseItem(data2.header);
    this.initial_display_state = data2.initialDisplayState;
    this.continuation = (_b = (_a7 = data2.continuations[0]) === null || _a7 === void 0 ? void 0 : _a7.reloadContinuationData) === null || _b === void 0 ? void 0 : _b.continuation;
    this.client_messages = {
      reconnect_message: new Text(data2.clientMessages.reconnectMessage),
      unable_to_reconnect_message: new Text(data2.clientMessages.unableToReconnectMessage),
      fatal_error: new Text(data2.clientMessages.fatalError),
      reconnected_message: new Text(data2.clientMessages.reconnectedMessage),
      generic_error: new Text(data2.clientMessages.genericError)
    };
    this.is_replay = !!data2.isReplay;
  }
};
__name(LiveChat, "LiveChat");
LiveChat.type = "LiveChat";
var LiveChat_default = LiveChat;

// dist/src/parser/classes/livechat/items/LiveChatBannerHeader.js
var LiveChatBannerHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.text);
    if (Reflect.has(data2, "icon") && Reflect.has(data2.icon, "iconType")) {
      this.icon_type = data2.icon.iconType;
    }
    this.context_menu_button = parser_default.parseItem(data2.contextMenuButton, Button_default);
  }
};
__name(LiveChatBannerHeader, "LiveChatBannerHeader");
LiveChatBannerHeader.type = "LiveChatBannerHeader";
var LiveChatBannerHeader_default = LiveChatBannerHeader;

// dist/src/parser/classes/livechat/items/LiveChatBanner.js
var LiveChatBanner = class extends YTNode {
  constructor(data2) {
    super();
    this.header = parser_default.parseItem(data2.header, LiveChatBannerHeader_default);
    this.contents = parser_default.parseItem(data2.contents);
    this.action_id = data2.actionId;
    this.viewer_is_creator = data2.viewerIsCreator;
    this.target_id = data2.targetId;
    this.is_stackable = data2.isStackable;
    this.background_type = data2.backgroundType;
  }
};
__name(LiveChatBanner, "LiveChatBanner");
LiveChatBanner.type = "LiveChatBanner";
var LiveChatBanner_default = LiveChatBanner;

// dist/src/parser/classes/livechat/AddBannerToLiveChatCommand.js
var AddBannerToLiveChatCommand = class extends YTNode {
  constructor(data2) {
    super();
    this.banner = parser_default.parseItem(data2.bannerRenderer, LiveChatBanner_default);
  }
};
__name(AddBannerToLiveChatCommand, "AddBannerToLiveChatCommand");
AddBannerToLiveChatCommand.type = "AddBannerToLiveChatCommand";
var AddBannerToLiveChatCommand_default = AddBannerToLiveChatCommand;

// dist/src/parser/classes/livechat/AddChatItemAction.js
var AddChatItemAction = class extends YTNode {
  constructor(data2) {
    super();
    this.item = parser_default.parseItem(data2.item);
    if (Reflect.has(data2, "clientId")) {
      this.client_id = data2.clientId;
    }
  }
};
__name(AddChatItemAction, "AddChatItemAction");
AddChatItemAction.type = "AddChatItemAction";
var AddChatItemAction_default = AddChatItemAction;

// dist/src/parser/classes/livechat/AddLiveChatTickerItemAction.js
var AddLiveChatTickerItemAction = class extends YTNode {
  constructor(data2) {
    super();
    this.item = parser_default.parseItem(data2.item);
    this.duration_sec = data2.durationSec;
  }
};
__name(AddLiveChatTickerItemAction, "AddLiveChatTickerItemAction");
AddLiveChatTickerItemAction.type = "AddLiveChatTickerItemAction";
var AddLiveChatTickerItemAction_default = AddLiveChatTickerItemAction;

// dist/src/parser/classes/livechat/DimChatItemAction.js
var DimChatItemAction = class extends YTNode {
  constructor(data2) {
    super();
    this.client_assigned_id = data2.clientAssignedId;
  }
};
__name(DimChatItemAction, "DimChatItemAction");
DimChatItemAction.type = "DimChatItemAction";
var DimChatItemAction_default = DimChatItemAction;

// dist/src/parser/classes/livechat/items/LiveChatAutoModMessage.js
var LiveChatAutoModMessage = class extends YTNode {
  constructor(data2) {
    super();
    this.menu_endpoint = new NavigationEndpoint_default(data2.contextMenuEndpoint);
    this.moderation_buttons = parser_default.parseArray(data2.moderationButtons, Button_default);
    this.auto_moderated_item = parser_default.parseItem(data2.autoModeratedItem);
    this.header_text = new Text(data2.headerText);
    this.timestamp = Math.floor(parseInt(data2.timestampUsec) / 1e3);
    this.id = data2.id;
  }
};
__name(LiveChatAutoModMessage, "LiveChatAutoModMessage");
LiveChatAutoModMessage.type = "LiveChatAutoModMessage";
var LiveChatAutoModMessage_default = LiveChatAutoModMessage;

// dist/src/parser/classes/livechat/items/LiveChatBannerPoll.js
var LiveChatBannerPoll = class extends YTNode {
  constructor(data2) {
    super();
    this.poll_question = new Text(data2.pollQuestion);
    this.author_photo = Thumbnail.fromResponse(data2.authorPhoto);
    this.choices = data2.pollChoices.map((choice) => ({
      option_id: choice.pollOptionId,
      text: new Text(choice.text).toString()
    }));
    this.collapsed_state_entity_key = data2.collapsedStateEntityKey;
    this.live_chat_poll_state_entity_key = data2.liveChatPollStateEntityKey;
    this.context_menu_button = parser_default.parseItem(data2.contextMenuButton, Button_default);
  }
};
__name(LiveChatBannerPoll, "LiveChatBannerPoll");
LiveChatBannerPoll.type = "LiveChatBannerPoll";
var LiveChatBannerPoll_default = LiveChatBannerPoll;

// dist/src/parser/classes/livechat/items/LiveChatMembershipItem.js
var LiveChatMembershipItem = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.id;
    this.timestamp = Math.floor(parseInt(data2.timestampUsec) / 1e3);
    this.header_subtext = new Text(data2.headerSubtext);
    this.author = new Author_default(data2.authorName, data2.authorBadges, data2.authorPhoto, data2.authorExternalChannelId);
    this.menu_endpoint = new NavigationEndpoint_default(data2.contextMenuEndpoint);
  }
};
__name(LiveChatMembershipItem, "LiveChatMembershipItem");
LiveChatMembershipItem.type = "LiveChatMembershipItem";
var LiveChatMembershipItem_default = LiveChatMembershipItem;

// dist/src/parser/classes/livechat/items/LiveChatPaidMessage.js
var LiveChatPaidMessage = class extends YTNode {
  constructor(data2) {
    super();
    this.message = new Text(data2.message);
    this.author = new Author_default(data2.authorName, data2.authorBadges, data2.authorPhoto, data2.authorExternalChannelId);
    this.header_background_color = data2.headerBackgroundColor;
    this.header_text_color = data2.headerTextColor;
    this.body_background_color = data2.bodyBackgroundColor;
    this.body_text_color = data2.bodyTextColor;
    this.purchase_amount = new Text(data2.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint_default(data2.contextMenuEndpoint);
    this.timestamp = Math.floor(parseInt(data2.timestampUsec) / 1e3);
    this.timestamp_text = new Text(data2.timestampText).toString();
    this.id = data2.id;
  }
};
__name(LiveChatPaidMessage, "LiveChatPaidMessage");
LiveChatPaidMessage.type = "LiveChatPaidMessage";
var LiveChatPaidMessage_default = LiveChatPaidMessage;

// dist/src/parser/classes/livechat/items/LiveChatPaidSticker.js
var LiveChatPaidSticker = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.id;
    this.author = new Author_default(data2.authorName, data2.authorBadges, data2.authorPhoto, data2.authorExternalChannelId);
    this.money_chip_background_color = data2.moneyChipBackgroundColor;
    this.money_chip_text_color = data2.moneyChipTextColor;
    this.background_color = data2.backgroundColor;
    this.author_name_text_color = data2.authorNameTextColor;
    this.sticker = Thumbnail.fromResponse(data2.sticker);
    this.purchase_amount = new Text(data2.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint_default(data2.contextMenuEndpoint);
    this.context_menu = this.menu_endpoint;
    this.timestamp = Math.floor(parseInt(data2.timestampUsec) / 1e3);
  }
};
__name(LiveChatPaidSticker, "LiveChatPaidSticker");
LiveChatPaidSticker.type = "LiveChatPaidSticker";
var LiveChatPaidSticker_default = LiveChatPaidSticker;

// dist/src/parser/classes/livechat/items/LiveChatPlaceholderItem.js
var LiveChatPlaceholderItem = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.id;
    this.timestamp = Math.floor(parseInt(data2.timestampUsec) / 1e3);
  }
};
__name(LiveChatPlaceholderItem, "LiveChatPlaceholderItem");
LiveChatPlaceholderItem.type = "LiveChatPlaceholderItem";
var LiveChatPlaceholderItem_default = LiveChatPlaceholderItem;

// dist/src/parser/classes/livechat/items/LiveChatProductItem.js
var LiveChatProductItem = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.title;
    this.accessibility_title = data2.accessibilityTitle;
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.price = data2.price;
    this.vendor_name = data2.vendorName;
    this.from_vendor_text = data2.fromVendorText;
    this.information_button = parser_default.parseItem(data2.informationButton);
    this.endpoint = new NavigationEndpoint_default(data2.onClickCommand);
    this.creator_message = data2.creatorMessage;
    this.creator_name = data2.creatorName;
    this.author_photo = Thumbnail.fromResponse(data2.authorPhoto);
    this.information_dialog = parser_default.parseItem(data2.informationDialog);
    this.is_verified = data2.isVerified;
    this.creator_custom_message = new Text(data2.creatorCustomMessage);
  }
};
__name(LiveChatProductItem, "LiveChatProductItem");
LiveChatProductItem.type = "LiveChatProductItem";
var LiveChatProductItem_default = LiveChatProductItem;

// dist/src/parser/classes/livechat/items/LiveChatRestrictedParticipation.js
var LiveChatRestrictedParticipation = class extends YTNode {
  constructor(data2) {
    super();
    this.message = new Text(data2.message);
    if (Reflect.has(data2, "icon") && Reflect.has(data2.icon, "iconType")) {
      this.icon_type = data2.icon.iconType;
    }
  }
};
__name(LiveChatRestrictedParticipation, "LiveChatRestrictedParticipation");
LiveChatRestrictedParticipation.type = "LiveChatRestrictedParticipation";
var LiveChatRestrictedParticipation_default = LiveChatRestrictedParticipation;

// dist/src/parser/classes/livechat/items/LiveChatTextMessage.js
var LiveChatMessageBase = class extends YTNode {
  constructor(data2) {
    super();
    this.message = new Text(data2.message);
    this.inline_action_buttons = parser_default.parseArray(data2.inlineActionButtons, Button_default);
    this.timestamp = Math.floor(parseInt(data2.timestampUsec) / 1e3);
    this.id = data2.id;
  }
};
__name(LiveChatMessageBase, "LiveChatMessageBase");
LiveChatMessageBase.type = "LiveChatMessageBase";
var LiveChatTextMessage = class extends LiveChatMessageBase {
  constructor(data2) {
    super(data2);
    this.author = new Author_default(data2.authorName, data2.authorBadges, data2.authorPhoto, data2.authorExternalChannelId);
    this.menu_endpoint = new NavigationEndpoint_default(data2.contextMenuEndpoint);
  }
};
__name(LiveChatTextMessage, "LiveChatTextMessage");
LiveChatTextMessage.type = "LiveChatTextMessage";
var LiveChatTextMessage_default = LiveChatTextMessage;

// dist/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.js
var LiveChatTickerPaidMessageItem = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.author = new Author_default(data2.authorName, data2.authorBadges, data2.authorPhoto, data2.authorExternalChannelId);
    this.amount = new Text(data2.amount);
    this.duration_sec = data2.durationSec;
    this.full_duration_sec = data2.fullDurationSec;
    this.show_item = parser_default.parseItem((_b = (_a7 = data2.showItemEndpoint) === null || _a7 === void 0 ? void 0 : _a7.showLiveChatItemEndpoint) === null || _b === void 0 ? void 0 : _b.renderer);
    this.show_item_endpoint = new NavigationEndpoint_default(data2.showItemEndpoint);
    this.id = data2.id;
  }
};
__name(LiveChatTickerPaidMessageItem, "LiveChatTickerPaidMessageItem");
LiveChatTickerPaidMessageItem.type = "LiveChatTickerPaidMessageItem";
var LiveChatTickerPaidMessageItem_default = LiveChatTickerPaidMessageItem;

// dist/src/parser/classes/livechat/items/LiveChatTickerPaidStickerItem.js
var LiveChatTickerPaidStickerItem = class extends LiveChatTickerPaidMessageItem_default {
};
__name(LiveChatTickerPaidStickerItem, "LiveChatTickerPaidStickerItem");
LiveChatTickerPaidStickerItem.type = "LiveChatTickerPaidStickerItem";
var LiveChatTickerPaidStickerItem_default = LiveChatTickerPaidStickerItem;

// dist/src/parser/classes/livechat/items/LiveChatTickerSponsorItem.js
var LiveChatTickerSponsorItem = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.id;
    this.detail = new Text(data2.detailText);
    this.author = new Author_default(data2.authorName, data2.authorBadges, data2.sponsorPhoto, data2.authorExternalChannelId);
    this.duration_sec = data2.durationSec;
  }
};
__name(LiveChatTickerSponsorItem, "LiveChatTickerSponsorItem");
LiveChatTickerSponsorItem.type = "LiveChatTickerSponsorItem";
var LiveChatTickerSponsorItem_default = LiveChatTickerSponsorItem;

// dist/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.js
var LiveChatViewerEngagementMessage = class extends LiveChatMessageBase {
  constructor(data2) {
    super(data2);
    if (Reflect.has(data2, "icon") && Reflect.has(data2.icon, "iconType")) {
      this.icon_type = data2.icon.iconType;
    }
    this.action_button = parser_default.parseItem(data2.actionButton);
  }
};
__name(LiveChatViewerEngagementMessage, "LiveChatViewerEngagementMessage");
LiveChatViewerEngagementMessage.type = "LiveChatViewerEngagementMessage";
var LiveChatViewerEngagementMessage_default = LiveChatViewerEngagementMessage;

// dist/src/parser/classes/livechat/items/PollHeader.js
var PollHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.poll_question = new Text(data2.pollQuestion);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.metadata = new Text(data2.metadataText);
    this.live_chat_poll_type = data2.liveChatPollType;
    this.context_menu_button = parser_default.parseItem(data2.contextMenuButton, Button_default);
  }
};
__name(PollHeader, "PollHeader");
PollHeader.type = "PollHeader";
var PollHeader_default = PollHeader;

// dist/src/parser/classes/livechat/LiveChatActionPanel.js
var LiveChatActionPanel = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.id;
    this.contents = parser_default.parse(data2.contents);
    this.target_id = data2.targetId;
  }
};
__name(LiveChatActionPanel, "LiveChatActionPanel");
LiveChatActionPanel.type = "LiveChatActionPanel";
var LiveChatActionPanel_default = LiveChatActionPanel;

// dist/src/parser/classes/livechat/MarkChatItemAsDeletedAction.js
var MarkChatItemAsDeletedAction = class extends YTNode {
  constructor(data2) {
    super();
    this.deleted_state_message = new Text(data2.deletedStateMessage);
    this.target_item_id = data2.targetItemId;
  }
};
__name(MarkChatItemAsDeletedAction, "MarkChatItemAsDeletedAction");
MarkChatItemAsDeletedAction.type = "MarkChatItemAsDeletedAction";
var MarkChatItemAsDeletedAction_default = MarkChatItemAsDeletedAction;

// dist/src/parser/classes/livechat/MarkChatItemsByAuthorAsDeletedAction.js
var MarkChatItemsByAuthorAsDeletedAction = class extends YTNode {
  constructor(data2) {
    super();
    this.deleted_state_message = new Text(data2.deletedStateMessage);
    this.external_channel_id = data2.externalChannelId;
  }
};
__name(MarkChatItemsByAuthorAsDeletedAction, "MarkChatItemsByAuthorAsDeletedAction");
MarkChatItemsByAuthorAsDeletedAction.type = "MarkChatItemsByAuthorAsDeletedAction";
var MarkChatItemsByAuthorAsDeletedAction_default = MarkChatItemsByAuthorAsDeletedAction;

// dist/src/parser/classes/livechat/RemoveBannerForLiveChatCommand.js
var RemoveBannerForLiveChatCommand = class extends YTNode {
  constructor(data2) {
    super();
    this.target_action_id = data2.targetActionId;
  }
};
__name(RemoveBannerForLiveChatCommand, "RemoveBannerForLiveChatCommand");
RemoveBannerForLiveChatCommand.type = "RemoveBannerForLiveChatCommand";
var RemoveBannerForLiveChatCommand_default = RemoveBannerForLiveChatCommand;

// dist/src/parser/classes/livechat/RemoveChatItemAction.js
var RemoveChatItemAction = class extends YTNode {
  constructor(data2) {
    super();
    this.target_item_id = data2.targetItemId;
  }
};
__name(RemoveChatItemAction, "RemoveChatItemAction");
RemoveChatItemAction.type = "RemoveChatItemAction";
var RemoveChatItemAction_default = RemoveChatItemAction;

// dist/src/parser/classes/livechat/RemoveChatItemByAuthorAction.js
var RemoveChatItemByAuthorAction = class extends YTNode {
  constructor(data2) {
    super();
    this.external_channel_id = data2.externalChannelId;
  }
};
__name(RemoveChatItemByAuthorAction, "RemoveChatItemByAuthorAction");
RemoveChatItemByAuthorAction.type = "RemoveChatItemByAuthorAction";
var RemoveChatItemByAuthorAction_default = RemoveChatItemByAuthorAction;

// dist/src/parser/classes/livechat/ReplaceChatItemAction.js
var ReplaceChatItemAction = class extends YTNode {
  constructor(data2) {
    super();
    this.target_item_id = data2.targetItemId;
    this.replacement_item = parser_default.parseItem(data2.replacementItem);
  }
};
__name(ReplaceChatItemAction, "ReplaceChatItemAction");
ReplaceChatItemAction.type = "ReplaceChatItemAction";
var ReplaceChatItemAction_default = ReplaceChatItemAction;

// dist/src/parser/classes/livechat/ReplayChatItemAction.js
var ReplayChatItemAction = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.actions = parser_default.parseArray((_a7 = data2.actions) === null || _a7 === void 0 ? void 0 : _a7.map((action) => {
      delete action.clickTrackingParams;
      return action;
    }));
    this.video_offset_time_msec = data2.videoOffsetTimeMsec;
  }
};
__name(ReplayChatItemAction, "ReplayChatItemAction");
ReplayChatItemAction.type = "ReplayChatItemAction";
var ReplayChatItemAction_default = ReplayChatItemAction;

// dist/src/parser/classes/livechat/ShowLiveChatActionPanelAction.js
var ShowLiveChatActionPanelAction = class extends YTNode {
  constructor(data2) {
    super();
    this.panel_to_show = parser_default.parseItem(data2.panelToShow, LiveChatActionPanel_default);
  }
};
__name(ShowLiveChatActionPanelAction, "ShowLiveChatActionPanelAction");
ShowLiveChatActionPanelAction.type = "ShowLiveChatActionPanelAction";
var ShowLiveChatActionPanelAction_default = ShowLiveChatActionPanelAction;

// dist/src/parser/classes/livechat/ShowLiveChatDialogAction.js
var ShowLiveChatDialogAction = class extends YTNode {
  constructor(data2) {
    super();
    this.dialog = parser_default.parseItem(data2.dialog);
  }
};
__name(ShowLiveChatDialogAction, "ShowLiveChatDialogAction");
ShowLiveChatDialogAction.type = "ShowLiveChatDialogAction";
var ShowLiveChatDialogAction_default = ShowLiveChatDialogAction;

// dist/src/parser/classes/livechat/ShowLiveChatTooltipCommand.js
var ShowLiveChatTooltipCommand = class extends YTNode {
  constructor(data2) {
    super();
    this.tooltip = parser_default.parseItem(data2.tooltip);
  }
};
__name(ShowLiveChatTooltipCommand, "ShowLiveChatTooltipCommand");
ShowLiveChatTooltipCommand.type = "ShowLiveChatTooltipCommand";
var ShowLiveChatTooltipCommand_default = ShowLiveChatTooltipCommand;

// dist/src/parser/classes/livechat/UpdateDateTextAction.js
var UpdateDateTextAction = class extends YTNode {
  constructor(data2) {
    super();
    this.date_text = new Text(data2.dateText).toString();
  }
};
__name(UpdateDateTextAction, "UpdateDateTextAction");
UpdateDateTextAction.type = "UpdateDateTextAction";
var UpdateDateTextAction_default = UpdateDateTextAction;

// dist/src/parser/classes/livechat/UpdateDescriptionAction.js
var UpdateDescriptionAction = class extends YTNode {
  constructor(data2) {
    super();
    this.description = new Text(data2.description);
  }
};
__name(UpdateDescriptionAction, "UpdateDescriptionAction");
UpdateDescriptionAction.type = "UpdateDescriptionAction";
var UpdateDescriptionAction_default = UpdateDescriptionAction;

// dist/src/parser/classes/livechat/UpdateLiveChatPollAction.js
var UpdateLiveChatPollAction = class extends YTNode {
  constructor(data2) {
    super();
    this.poll_to_update = parser_default.parseItem(data2.pollToUpdate);
  }
};
__name(UpdateLiveChatPollAction, "UpdateLiveChatPollAction");
UpdateLiveChatPollAction.type = "UpdateLiveChatPollAction";
var UpdateLiveChatPollAction_default = UpdateLiveChatPollAction;

// dist/src/parser/classes/livechat/UpdateTitleAction.js
var UpdateTitleAction = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
  }
};
__name(UpdateTitleAction, "UpdateTitleAction");
UpdateTitleAction.type = "UpdateTitleAction";
var UpdateTitleAction_default = UpdateTitleAction;

// dist/src/parser/classes/livechat/UpdateToggleButtonTextAction.js
var UpdateToggleButtonTextAction = class extends YTNode {
  constructor(data2) {
    super();
    this.default_text = new Text(data2.defaultText).toString();
    this.toggled_text = new Text(data2.toggledText).toString();
    this.button_id = data2.buttonId;
  }
};
__name(UpdateToggleButtonTextAction, "UpdateToggleButtonTextAction");
UpdateToggleButtonTextAction.type = "UpdateToggleButtonTextAction";
var UpdateToggleButtonTextAction_default = UpdateToggleButtonTextAction;

// dist/src/parser/classes/livechat/UpdateViewershipAction.js
var UpdateViewershipAction = class extends YTNode {
  constructor(data2) {
    super();
    const view_count_renderer = data2.viewCount.videoViewCountRenderer;
    this.view_count = new Text(view_count_renderer.viewCount);
    this.extra_short_view_count = new Text(view_count_renderer.extraShortViewCount);
    this.is_live = view_count_renderer.isLive;
  }
};
__name(UpdateViewershipAction, "UpdateViewershipAction");
UpdateViewershipAction.type = "UpdateViewershipAction";
var UpdateViewershipAction_default = UpdateViewershipAction;

// dist/src/parser/classes/LiveChatAuthorBadge.js
var LiveChatAuthorBadge = class extends MetadataBadge_default {
  constructor(data2) {
    super(data2);
    this.custom_thumbnail = Thumbnail.fromResponse(data2.customThumbnail);
  }
};
__name(LiveChatAuthorBadge, "LiveChatAuthorBadge");
LiveChatAuthorBadge.type = "LiveChatAuthorBadge";
var LiveChatAuthorBadge_default = LiveChatAuthorBadge;

// dist/src/parser/classes/LiveChatDialog.js
var LiveChatDialog = class extends YTNode {
  constructor(data2) {
    super();
    this.confirm_button = parser_default.parseItem(data2.confirmButton, Button_default);
    this.dialog_messages = data2.dialogMessages.map((el) => new Text(el));
  }
};
__name(LiveChatDialog, "LiveChatDialog");
LiveChatDialog.type = "LiveChatDialog";
var LiveChatDialog_default = LiveChatDialog;

// dist/src/parser/classes/LiveChatMessageInput.js
var LiveChatMessageInput = class extends YTNode {
  constructor(data2) {
    super();
    this.author_name = new Text(data2.authorName);
    this.author_photo = Thumbnail.fromResponse(data2.authorPhoto);
    this.send_button = parser_default.parseItem(data2.sendButton, Button_default);
    this.target_id = data2.targetId;
  }
};
__name(LiveChatMessageInput, "LiveChatMessageInput");
LiveChatMessageInput.type = "LiveChatMessageInput";
var LiveChatMessageInput_default = LiveChatMessageInput;

// dist/src/parser/classes/menus/MenuNavigationItem.js
var MenuNavigationItem = class extends Button_default {
  constructor(data2) {
    super(data2);
  }
};
__name(MenuNavigationItem, "MenuNavigationItem");
MenuNavigationItem.type = "MenuNavigationItem";
var MenuNavigationItem_default = MenuNavigationItem;

// dist/src/parser/classes/menus/MenuServiceItem.js
var MenuServiceItem = class extends Button_default {
  constructor(data2) {
    super(data2);
  }
};
__name(MenuServiceItem, "MenuServiceItem");
MenuServiceItem.type = "MenuServiceItem";
var MenuServiceItem_default = MenuServiceItem;

// dist/src/parser/classes/menus/MenuServiceItemDownload.js
var MenuServiceItemDownload = class extends YTNode {
  constructor(data2) {
    super();
    this.has_separator = !!data2.hasSeparator;
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint || data2.serviceEndpoint);
  }
};
__name(MenuServiceItemDownload, "MenuServiceItemDownload");
MenuServiceItemDownload.type = "MenuServiceItemDownload";
var MenuServiceItemDownload_default = MenuServiceItemDownload;

// dist/src/parser/classes/menus/MultiPageMenu.js
var MultiPageMenu = class extends YTNode {
  constructor(data2) {
    super();
    this.header = parser_default.parse(data2.header);
    this.sections = parser_default.parse(data2.sections);
    this.style = data2.style;
  }
};
__name(MultiPageMenu, "MultiPageMenu");
MultiPageMenu.type = "MultiPageMenu";
var MultiPageMenu_default = MultiPageMenu;

// dist/src/parser/classes/menus/MultiPageMenuNotificationSection.js
var MultiPageMenuNotificationSection = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parse(data2.items);
  }
  get contents() {
    return this.items;
  }
};
__name(MultiPageMenuNotificationSection, "MultiPageMenuNotificationSection");
MultiPageMenuNotificationSection.type = "MultiPageMenuNotificationSection";
var MultiPageMenuNotificationSection_default = MultiPageMenuNotificationSection;

// dist/src/parser/classes/menus/MusicMenuItemDivider.js
var MusicMenuItemDivider = class extends YTNode {
  constructor(_data) {
    super();
  }
};
__name(MusicMenuItemDivider, "MusicMenuItemDivider");
MusicMenuItemDivider.type = "MusicMenuItemDivider";
var MusicMenuItemDivider_default = MusicMenuItemDivider;

// dist/src/parser/classes/menus/MusicMultiSelectMenu.js
var MusicMultiSelectMenu = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    if (Reflect.has(data2, "title") && Reflect.has(data2.title, "musicMenuTitleRenderer")) {
      this.title = new Text((_a7 = data2.title.musicMenuTitleRenderer) === null || _a7 === void 0 ? void 0 : _a7.primaryText);
    }
    this.options = parser_default.parseArray(data2.options, [MusicMultiSelectMenuItem_default, MusicMenuItemDivider_default]);
  }
};
__name(MusicMultiSelectMenu, "MusicMultiSelectMenu");
MusicMultiSelectMenu.type = "MusicMultiSelectMenu";
var MusicMultiSelectMenu_default = MusicMultiSelectMenu;

// dist/src/parser/classes/menus/SimpleMenuHeader.js
var SimpleMenuHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.buttons = parser_default.parse(data2.buttons);
  }
};
__name(SimpleMenuHeader, "SimpleMenuHeader");
SimpleMenuHeader.type = "SimpleMenuHeader";
var SimpleMenuHeader_default = SimpleMenuHeader;

// dist/src/parser/classes/MerchandiseItem.js
var MerchandiseItem = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.title;
    this.description = data2.description;
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.price = data2.price;
    this.vendor_name = data2.vendorName;
    this.button_text = data2.buttonText;
    this.button_accessibility_text = data2.buttonAccessibilityText;
    this.from_vendor_text = data2.fromVendorText;
    this.additional_fees_text = data2.additionalFeesText;
    this.region_format = data2.regionFormat;
    this.endpoint = new NavigationEndpoint_default(data2.buttonCommand);
  }
};
__name(MerchandiseItem, "MerchandiseItem");
MerchandiseItem.type = "MerchandiseItem";
var MerchandiseItem_default = MerchandiseItem;

// dist/src/parser/classes/MerchandiseShelf.js
var MerchandiseShelf = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.title;
    this.menu = parser_default.parseItem(data2.actionButton);
    this.items = parser_default.parseArray(data2.items);
  }
  get contents() {
    return this.items;
  }
};
__name(MerchandiseShelf, "MerchandiseShelf");
MerchandiseShelf.type = "MerchandiseShelf";
var MerchandiseShelf_default = MerchandiseShelf;

// dist/src/parser/classes/MetadataRow.js
var MetadataRow = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.contents = data2.contents.map((content) => new Text(content));
  }
};
__name(MetadataRow, "MetadataRow");
MetadataRow.type = "MetadataRow";
var MetadataRow_default = MetadataRow;

// dist/src/parser/classes/MetadataRowContainer.js
var MetadataRowContainer = class extends YTNode {
  constructor(data2) {
    super();
    this.rows = parser_default.parseArray(data2.rows);
    this.collapsed_item_count = data2.collapsedItemCount;
  }
};
__name(MetadataRowContainer, "MetadataRowContainer");
MetadataRowContainer.type = "MetadataRowContainer";
var MetadataRowContainer_default = MetadataRowContainer;

// dist/src/parser/classes/MetadataRowHeader.js
var MetadataRowHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.content = new Text(data2.content);
    this.has_divider_line = data2.hasDividerLine;
  }
};
__name(MetadataRowHeader, "MetadataRowHeader");
MetadataRowHeader.type = "MetadataRowHeader";
var MetadataRowHeader_default = MetadataRowHeader;

// dist/src/parser/classes/MetadataScreen.js
var MetadataScreen = class extends YTNode {
  constructor(data2) {
    super();
    this.section_list = parser_default.parseItem(data2);
  }
};
__name(MetadataScreen, "MetadataScreen");
MetadataScreen.type = "MetadataScreen";
var MetadataScreen_default = MetadataScreen;

// dist/src/parser/classes/MicroformatData.js
var MicroformatData = class extends YTNode {
  constructor(data2) {
    super();
    this.url_canonical = data2.urlCanonical;
    this.title = data2.title;
    this.description = data2.description;
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.site_name = data2.siteName;
    this.app_name = data2.appName;
    this.android_package = data2.androidPackage;
    this.ios_app_store_id = data2.iosAppStoreId;
    this.ios_app_arguments = data2.iosAppArguments;
    this.og_type = data2.ogType;
    this.url_applinks_web = data2.urlApplinksWeb;
    this.url_applinks_ios = data2.urlApplinksIos;
    this.url_applinks_android = data2.urlApplinksAndroid;
    this.url_twitter_ios = data2.urlTwitterIos;
    this.url_twitter_android = data2.urlTwitterAndroid;
    this.twitter_card_type = data2.twitterCardType;
    this.twitter_site_handle = data2.twitterSiteHandle;
    this.schema_dot_org_type = data2.schemaDotOrgType;
    this.noindex = data2.noindex;
    this.is_unlisted = data2.unlisted;
    this.is_family_safe = data2.familySafe;
    this.tags = data2.tags;
    this.available_countries = data2.availableCountries;
  }
};
__name(MicroformatData, "MicroformatData");
MicroformatData.type = "MicroformatData";
var MicroformatData_default = MicroformatData;

// dist/src/parser/classes/Mix.js
var Mix = class extends Playlist_default {
  constructor(data2) {
    super(data2);
  }
};
__name(Mix, "Mix");
Mix.type = "Mix";
var Mix_default = Mix;

// dist/src/parser/classes/Movie.js
var Movie = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c;
    super();
    const overlay_time_status = ((_a7 = data2.thumbnailOverlays.find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a7 === void 0 ? void 0 : _a7.thumbnailOverlayTimeStatusRenderer.text) || "N/A";
    this.id = data2.videoId;
    this.title = new Text(data2.title);
    if (Reflect.has(data2, "descriptionSnippet")) {
      this.description_snippet = new Text(data2.descriptionSnippet);
    }
    this.top_metadata_items = new Text(data2.topMetadataItems);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
    this.author = new Author_default(data2.longBylineText, data2.ownerBadges, (_c = (_b = data2.channelThumbnailSupportedRenderers) === null || _b === void 0 ? void 0 : _b.channelThumbnailWithLinkRenderer) === null || _c === void 0 ? void 0 : _c.thumbnail);
    this.duration = {
      text: data2.lengthText ? new Text(data2.lengthText).toString() : new Text(overlay_time_status).toString(),
      seconds: timeToSeconds(data2.lengthText ? new Text(data2.lengthText).toString() : new Text(overlay_time_status).toString())
    };
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.badges = parser_default.parseArray(data2.badges);
    this.use_vertical_poster = data2.useVerticalPoster;
    this.show_action_menu = data2.showActionMenu;
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
  }
};
__name(Movie, "Movie");
Movie.type = "Movie";
var Movie_default = Movie;

// dist/src/parser/classes/MovingThumbnail.js
var MovingThumbnail = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    return (_a7 = data2.movingThumbnailDetails) === null || _a7 === void 0 ? void 0 : _a7.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
  }
};
__name(MovingThumbnail, "MovingThumbnail");
MovingThumbnail.type = "MovingThumbnail";
var MovingThumbnail_default = MovingThumbnail;

// dist/src/parser/classes/MusicCardShelfHeaderBasic.js
var MusicCardShelfHeaderBasic = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
  }
};
__name(MusicCardShelfHeaderBasic, "MusicCardShelfHeaderBasic");
MusicCardShelfHeaderBasic.type = "MusicCardShelfHeaderBasic";
var MusicCardShelfHeaderBasic_default = MusicCardShelfHeaderBasic;

// dist/src/parser/classes/MusicInlineBadge.js
var MusicInlineBadge = class extends YTNode {
  constructor(data2) {
    super();
    this.icon_type = data2.icon.iconType;
    this.label = data2.accessibilityData.accessibilityData.label;
  }
};
__name(MusicInlineBadge, "MusicInlineBadge");
MusicInlineBadge.type = "MusicInlineBadge";
var MusicInlineBadge_default = MusicInlineBadge;

// dist/src/parser/classes/MusicPlayButton.js
var MusicPlayButton = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.endpoint = new NavigationEndpoint_default(data2.playNavigationEndpoint);
    this.play_icon_type = data2.playIcon.iconType;
    this.pause_icon_type = data2.pauseIcon.iconType;
    if (Reflect.has(data2, "accessibilityPlayData")) {
      this.play_label = (_a7 = data2.accessibilityPlayData.accessibilityData) === null || _a7 === void 0 ? void 0 : _a7.label;
    }
    if (Reflect.has(data2, "accessibilityPauseData")) {
      this.pause_label = (_b = data2.accessibilityPauseData.accessibilityData) === null || _b === void 0 ? void 0 : _b.label;
    }
    this.icon_color = data2.iconColor;
  }
};
__name(MusicPlayButton, "MusicPlayButton");
MusicPlayButton.type = "MusicPlayButton";
var MusicPlayButton_default = MusicPlayButton;

// dist/src/parser/classes/MusicItemThumbnailOverlay.js
var MusicItemThumbnailOverlay = class extends YTNode {
  constructor(data2) {
    super();
    this.content = parser_default.parseItem(data2.content, MusicPlayButton_default);
    this.content_position = data2.contentPosition;
    this.display_style = data2.displayStyle;
  }
};
__name(MusicItemThumbnailOverlay, "MusicItemThumbnailOverlay");
MusicItemThumbnailOverlay.type = "MusicItemThumbnailOverlay";
var MusicItemThumbnailOverlay_default = MusicItemThumbnailOverlay;

// dist/src/parser/classes/MusicThumbnail.js
var MusicThumbnail = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = Thumbnail.fromResponse(data2.thumbnail);
  }
};
__name(MusicThumbnail, "MusicThumbnail");
MusicThumbnail.type = "MusicThumbnail";
var MusicThumbnail_default = MusicThumbnail;

// dist/src/parser/classes/MusicCardShelf.js
var MusicCardShelf = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = parser_default.parseItem(data2.thumbnail, MusicThumbnail_default);
    this.title = new Text(data2.title);
    this.subtitle = new Text(data2.subtitle);
    this.buttons = parser_default.parseArray(data2.buttons, Button_default);
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
    this.on_tap = new NavigationEndpoint_default(data2.onTap);
    this.header = parser_default.parseItem(data2.header, MusicCardShelfHeaderBasic_default);
    if (Reflect.has(data2, "endIcon") && Reflect.has(data2.endIcon, "iconType")) {
      this.end_icon_type = data2.endIcon.iconType;
    }
    this.subtitle_badges = parser_default.parseArray(data2.subtitleBadges, MusicInlineBadge_default);
    this.thumbnail_overlay = parser_default.parseItem(data2.thumbnailOverlay, MusicItemThumbnailOverlay_default);
    if (Reflect.has(data2, "contents")) {
      this.contents = parser_default.parseArray(data2.contents);
    }
  }
};
__name(MusicCardShelf, "MusicCardShelf");
MusicCardShelf.type = "MusicCardShelf";
var MusicCardShelf_default = MusicCardShelf;

// dist/src/parser/classes/MusicCarouselShelfBasicHeader.js
var MusicCarouselShelfBasicHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    if (Reflect.has(data2, "strapline")) {
      this.strapline = new Text(data2.strapline);
    }
    if (Reflect.has(data2, "thumbnail")) {
      this.thumbnail = parser_default.parseItem(data2.thumbnail, MusicThumbnail_default);
    }
    if (Reflect.has(data2, "moreContentButton")) {
      this.more_content = parser_default.parseItem(data2.moreContentButton, Button_default);
    }
    if (Reflect.has(data2, "endIcons")) {
      this.end_icons = parser_default.parseArray(data2.endIcons, IconLink_default);
    }
  }
};
__name(MusicCarouselShelfBasicHeader, "MusicCarouselShelfBasicHeader");
MusicCarouselShelfBasicHeader.type = "MusicCarouselShelfBasicHeader";
var MusicCarouselShelfBasicHeader_default = MusicCarouselShelfBasicHeader;

// dist/src/parser/classes/MusicNavigationButton.js
var MusicNavigationButton = class extends YTNode {
  constructor(data2) {
    super();
    this.button_text = new Text(data2.buttonText).toString();
    this.endpoint = new NavigationEndpoint_default(data2.clickCommand);
    if (Reflect.has(data2, "iconStyle") && Reflect.has(data2.iconStyle, "icon") && Reflect.has(data2.iconStyle.icon, "iconType")) {
      this.icon_type = data2.iconStyle.icon.iconType;
    }
  }
};
__name(MusicNavigationButton, "MusicNavigationButton");
MusicNavigationButton.type = "MusicNavigationButton";
var MusicNavigationButton_default = MusicNavigationButton;

// dist/src/parser/classes/MusicResponsiveListItemFixedColumn.js
var MusicResponsiveListItemFixedColumn = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.text);
    this.display_priority = data2.displayPriority;
  }
};
__name(MusicResponsiveListItemFixedColumn, "MusicResponsiveListItemFixedColumn");
MusicResponsiveListItemFixedColumn.type = "musicResponsiveListItemFlexColumnRenderer";
var MusicResponsiveListItemFixedColumn_default = MusicResponsiveListItemFixedColumn;

// dist/src/parser/classes/MusicResponsiveListItemFlexColumn.js
var MusicResponsiveListItemFlexColumn = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.text);
    this.display_priority = data2.displayPriority;
  }
};
__name(MusicResponsiveListItemFlexColumn, "MusicResponsiveListItemFlexColumn");
MusicResponsiveListItemFlexColumn.type = "MusicResponsiveListItemFlexColumn";
var MusicResponsiveListItemFlexColumn_default = MusicResponsiveListItemFlexColumn;

// dist/src/parser/classes/MusicResponsiveListItem.js
var _MusicResponsiveListItem_instances;
var _MusicResponsiveListItem_playlist_item_data;
var _MusicResponsiveListItem_parseOther;
var _MusicResponsiveListItem_parseVideoOrSong;
var _MusicResponsiveListItem_parseSong;
var _MusicResponsiveListItem_parseVideo;
var _MusicResponsiveListItem_parseArtist;
var _MusicResponsiveListItem_parseLibraryArtist;
var _MusicResponsiveListItem_parseAlbum;
var _MusicResponsiveListItem_parsePlaylist;
var MusicResponsiveListItem = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f;
    super();
    _MusicResponsiveListItem_instances.add(this);
    _MusicResponsiveListItem_playlist_item_data.set(this, void 0);
    this.flex_columns = parser_default.parseArray(data2.flexColumns, MusicResponsiveListItemFlexColumn_default);
    this.fixed_columns = parser_default.parseArray(data2.fixedColumns, MusicResponsiveListItemFixedColumn_default);
    __classPrivateFieldSet(this, _MusicResponsiveListItem_playlist_item_data, {
      video_id: ((_a7 = data2 === null || data2 === void 0 ? void 0 : data2.playlistItemData) === null || _a7 === void 0 ? void 0 : _a7.videoId) || null,
      playlist_set_video_id: ((_b = data2 === null || data2 === void 0 ? void 0 : data2.playlistItemData) === null || _b === void 0 ? void 0 : _b.playlistSetVideoId) || null
    }, "f");
    this.endpoint = data2.navigationEndpoint ? new NavigationEndpoint_default(data2.navigationEndpoint) : null;
    const page_type = (_f = (_e = (_d = (_c = this.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.browseEndpointContextSupportedConfigs) === null || _e === void 0 ? void 0 : _e.browseEndpointContextMusicConfig) === null || _f === void 0 ? void 0 : _f.pageType;
    switch (page_type) {
      case "MUSIC_PAGE_TYPE_ALBUM":
        this.item_type = "album";
        __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseAlbum).call(this);
        break;
      case "MUSIC_PAGE_TYPE_PLAYLIST":
        this.item_type = "playlist";
        __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parsePlaylist).call(this);
        break;
      case "MUSIC_PAGE_TYPE_ARTIST":
      case "MUSIC_PAGE_TYPE_USER_CHANNEL":
        this.item_type = "artist";
        __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseArtist).call(this);
        break;
      case "MUSIC_PAGE_TYPE_LIBRARY_ARTIST":
        this.item_type = "library_artist";
        __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseLibraryArtist).call(this);
        break;
      default:
        if (this.flex_columns[1]) {
          __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseVideoOrSong).call(this);
        } else {
          __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseOther).call(this);
        }
        break;
    }
    if (data2.index) {
      this.index = new Text(data2.index);
    }
    this.thumbnail = parser_default.parseItem(data2.thumbnail, MusicThumbnail_default);
    this.badges = parser_default.parseArray(data2.badges);
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
    this.overlay = parser_default.parseItem(data2.overlay, MusicItemThumbnailOverlay_default);
  }
  get thumbnails() {
    var _a7;
    return ((_a7 = this.thumbnail) === null || _a7 === void 0 ? void 0 : _a7.contents) || [];
  }
};
__name(MusicResponsiveListItem, "MusicResponsiveListItem");
_MusicResponsiveListItem_playlist_item_data = /* @__PURE__ */ new WeakMap(), _MusicResponsiveListItem_instances = /* @__PURE__ */ new WeakSet(), _MusicResponsiveListItem_parseOther = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseOther2() {
  this.title = this.flex_columns.first().key("title").instanceof(Text).toString();
  if (this.endpoint) {
    this.item_type = "endpoint";
  } else {
    this.item_type = "unknown";
  }
}, "_MusicResponsiveListItem_parseOther"), _MusicResponsiveListItem_parseVideoOrSong = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseVideoOrSong2() {
  var _a7, _b;
  const is_video = (_b = (_a7 = this.flex_columns[1]) === null || _a7 === void 0 ? void 0 : _a7.key("title").instanceof(Text).runs) === null || _b === void 0 ? void 0 : _b.some((run) => run.text.match(/(.*?) views/));
  if (is_video) {
    this.item_type = "video";
    __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseVideo).call(this);
  } else {
    this.item_type = "song";
    __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseSong).call(this);
  }
}, "_MusicResponsiveListItem_parseVideoOrSong"), _MusicResponsiveListItem_parseSong = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseSong2() {
  var _a7, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
  this.id = __classPrivateFieldGet(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id || ((_b = (_a7 = this.endpoint) === null || _a7 === void 0 ? void 0 : _a7.payload) === null || _b === void 0 ? void 0 : _b.videoId);
  this.title = this.flex_columns.first().key("title").instanceof(Text).toString();
  this.subtitle = this.flex_columns[1].key("title").instanceof(Text);
  const duration_text = ((_e = (_d = (_c = this.flex_columns[1]) === null || _c === void 0 ? void 0 : _c.key("title").instanceof(Text).runs) === null || _d === void 0 ? void 0 : _d.find(
    (run) => /^\d+$/.test(run.text.replace(/:/g, ""))
  )) === null || _e === void 0 ? void 0 : _e.text) || ((_g = (_f = this.fixed_columns.first()) === null || _f === void 0 ? void 0 : _f.key("title").instanceof(Text)) === null || _g === void 0 ? void 0 : _g.toString());
  if (duration_text) {
    this.duration = {
      text: duration_text,
      seconds: timeToSeconds(duration_text)
    };
  }
  const album_run = ((_j = (_h = this.flex_columns[1]) === null || _h === void 0 ? void 0 : _h.key("title").instanceof(Text).runs) === null || _j === void 0 ? void 0 : _j.find(
    (run) => isTextRun(run) && run.endpoint && (run.endpoint.payload.browseId.startsWith("MPR") || run.endpoint.payload.browseId.startsWith("FEmusic_library_privately_owned_release"))
  )) || ((_l = (_k = this.flex_columns[2]) === null || _k === void 0 ? void 0 : _k.key("title").instanceof(Text).runs) === null || _l === void 0 ? void 0 : _l.find(
    (run) => isTextRun(run) && run.endpoint && (run.endpoint.payload.browseId.startsWith("MPR") || run.endpoint.payload.browseId.startsWith("FEmusic_library_privately_owned_release"))
  ));
  if (album_run && isTextRun(album_run)) {
    this.album = {
      id: (_o = (_m = album_run.endpoint) === null || _m === void 0 ? void 0 : _m.payload) === null || _o === void 0 ? void 0 : _o.browseId,
      name: album_run.text,
      endpoint: album_run.endpoint
    };
  }
  const artist_runs = (_q = (_p = this.flex_columns[1]) === null || _p === void 0 ? void 0 : _p.key("title").instanceof(Text).runs) === null || _q === void 0 ? void 0 : _q.filter(
    (run) => isTextRun(run) && run.endpoint && (run.endpoint.payload.browseId.startsWith("UC") || run.endpoint.payload.browseId.startsWith("FEmusic_library_privately_owned_artist"))
  );
  if (artist_runs) {
    this.artists = artist_runs.map((run) => {
      var _a8, _b2;
      return {
        name: run.text,
        channel_id: isTextRun(run) ? (_b2 = (_a8 = run.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId : void 0,
        endpoint: isTextRun(run) ? run.endpoint : void 0
      };
    });
  }
}, "_MusicResponsiveListItem_parseSong"), _MusicResponsiveListItem_parseVideo = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseVideo2() {
  var _a7, _b, _c, _d, _e, _f, _g, _h, _j, _k;
  this.id = __classPrivateFieldGet(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id;
  this.title = this.flex_columns.first().key("title").instanceof(Text).toString();
  this.subtitle = this.flex_columns[1].key("title").instanceof(Text);
  this.views = (_c = (_b = (_a7 = this.flex_columns[1]) === null || _a7 === void 0 ? void 0 : _a7.key("title").instanceof(Text).runs) === null || _b === void 0 ? void 0 : _b.find((run) => run.text.match(/(.*?) views/))) === null || _c === void 0 ? void 0 : _c.toString();
  const author_runs = (_e = (_d = this.flex_columns[1]) === null || _d === void 0 ? void 0 : _d.key("title").instanceof(Text).runs) === null || _e === void 0 ? void 0 : _e.filter(
    (run) => isTextRun(run) && run.endpoint && (run.endpoint.payload.browseId.startsWith("UC") || run.endpoint.payload.browseId.startsWith("FEmusic_library_privately_owned_artist"))
  );
  if (author_runs) {
    this.authors = author_runs.map((run) => {
      var _a8, _b2;
      return {
        name: run.text,
        channel_id: isTextRun(run) ? (_b2 = (_a8 = run.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId : void 0,
        endpoint: isTextRun(run) ? run.endpoint : void 0
      };
    });
  }
  const duration_text = ((_g = (_f = this.flex_columns[1].key("title").instanceof(Text).runs) === null || _f === void 0 ? void 0 : _f.find((run) => /^\d+$/.test(run.text.replace(/:/g, "")))) === null || _g === void 0 ? void 0 : _g.text) || ((_k = (_j = (_h = this.fixed_columns.first()) === null || _h === void 0 ? void 0 : _h.key("title").instanceof(Text).runs) === null || _j === void 0 ? void 0 : _j.find((run) => /^\d+$/.test(run.text.replace(/:/g, "")))) === null || _k === void 0 ? void 0 : _k.text);
  if (duration_text) {
    this.duration = {
      text: duration_text,
      seconds: timeToSeconds(duration_text)
    };
  }
}, "_MusicResponsiveListItem_parseVideo"), _MusicResponsiveListItem_parseArtist = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseArtist2() {
  var _a7, _b, _c, _d, _e, _f;
  this.id = (_b = (_a7 = this.endpoint) === null || _a7 === void 0 ? void 0 : _a7.payload) === null || _b === void 0 ? void 0 : _b.browseId;
  this.name = this.flex_columns.first().key("title").instanceof(Text).toString();
  this.subtitle = (_c = this.flex_columns[1]) === null || _c === void 0 ? void 0 : _c.key("title").instanceof(Text);
  this.subscribers = ((_f = (_e = (_d = this.subtitle) === null || _d === void 0 ? void 0 : _d.runs) === null || _e === void 0 ? void 0 : _e.find((run) => /^(\d*\.)?\d+[M|K]? subscribers?$/i.test(run.text))) === null || _f === void 0 ? void 0 : _f.text) || "";
}, "_MusicResponsiveListItem_parseArtist"), _MusicResponsiveListItem_parseLibraryArtist = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseLibraryArtist2() {
  var _a7, _b, _c, _d;
  this.name = this.flex_columns.first().key("title").instanceof(Text).toString();
  this.subtitle = (_a7 = this.flex_columns[1]) === null || _a7 === void 0 ? void 0 : _a7.key("title").instanceof(Text);
  this.song_count = ((_d = (_c = (_b = this.subtitle) === null || _b === void 0 ? void 0 : _b.runs) === null || _c === void 0 ? void 0 : _c.find((run) => /^\d+(,\d+)? songs?$/i.test(run.text))) === null || _d === void 0 ? void 0 : _d.text) || "";
}, "_MusicResponsiveListItem_parseLibraryArtist"), _MusicResponsiveListItem_parseAlbum = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseAlbum2() {
  var _a7, _b, _c, _d, _e, _f, _g, _h, _j;
  this.id = (_b = (_a7 = this.endpoint) === null || _a7 === void 0 ? void 0 : _a7.payload) === null || _b === void 0 ? void 0 : _b.browseId;
  this.title = this.flex_columns.first().title.toString();
  this.subtitle = this.flex_columns[1].key("title").instanceof(Text);
  const author_run = (_d = (_c = this.flex_columns[1]) === null || _c === void 0 ? void 0 : _c.key("title").instanceof(Text).runs) === null || _d === void 0 ? void 0 : _d.find(
    (run) => isTextRun(run) && run.endpoint && (run.endpoint.payload.browseId.startsWith("UC") || run.endpoint.payload.browseId.startsWith("FEmusic_library_privately_owned_artist"))
  );
  if (author_run && isTextRun(author_run)) {
    this.author = {
      name: author_run.text,
      channel_id: (_f = (_e = author_run.endpoint) === null || _e === void 0 ? void 0 : _e.payload) === null || _f === void 0 ? void 0 : _f.browseId,
      endpoint: author_run.endpoint
    };
  }
  this.year = (_j = (_h = (_g = this.flex_columns[1]) === null || _g === void 0 ? void 0 : _g.key("title").instanceof(Text).runs) === null || _h === void 0 ? void 0 : _h.find(
    (run) => /^[12][0-9]{3}$/.test(run.text)
  )) === null || _j === void 0 ? void 0 : _j.text;
}, "_MusicResponsiveListItem_parseAlbum"), _MusicResponsiveListItem_parsePlaylist = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parsePlaylist2() {
  var _a7, _b, _c, _d, _e, _f, _g, _h;
  this.id = (_b = (_a7 = this.endpoint) === null || _a7 === void 0 ? void 0 : _a7.payload) === null || _b === void 0 ? void 0 : _b.browseId;
  this.title = this.flex_columns.first().title.toString();
  this.subtitle = this.flex_columns[1].key("title").instanceof(Text);
  const item_count_run = (_d = (_c = this.flex_columns[1]) === null || _c === void 0 ? void 0 : _c.key("title").instanceof(Text).runs) === null || _d === void 0 ? void 0 : _d.find((run) => run.text.match(/\d+ (song|songs)/));
  this.item_count = item_count_run ? item_count_run.text : void 0;
  const author_run = (_f = (_e = this.flex_columns[1]) === null || _e === void 0 ? void 0 : _e.key("title").instanceof(Text).runs) === null || _f === void 0 ? void 0 : _f.find(
    (run) => isTextRun(run) && run.endpoint && (run.endpoint.payload.browseId.startsWith("UC") || run.endpoint.payload.browseId.startsWith("FEmusic_library_privately_owned_artist"))
  );
  if (author_run && isTextRun(author_run)) {
    this.author = {
      name: author_run.text,
      channel_id: (_h = (_g = author_run.endpoint) === null || _g === void 0 ? void 0 : _g.payload) === null || _h === void 0 ? void 0 : _h.browseId,
      endpoint: author_run.endpoint
    };
  }
}, "_MusicResponsiveListItem_parsePlaylist");
MusicResponsiveListItem.type = "MusicResponsiveListItem";
var MusicResponsiveListItem_default = MusicResponsiveListItem;

// dist/src/parser/classes/MusicTwoRowItem.js
var MusicTwoRowItem = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    super();
    this.title = new Text(data2.title);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.id = ((_b = (_a7 = this.endpoint) === null || _a7 === void 0 ? void 0 : _a7.payload) === null || _b === void 0 ? void 0 : _b.browseId) || ((_d = (_c = this.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.videoId);
    this.subtitle = new Text(data2.subtitle);
    this.badges = parser_default.parse(data2.subtitleBadges);
    const page_type = (_h = (_g = (_f = (_e = this.endpoint) === null || _e === void 0 ? void 0 : _e.payload) === null || _f === void 0 ? void 0 : _f.browseEndpointContextSupportedConfigs) === null || _g === void 0 ? void 0 : _g.browseEndpointContextMusicConfig) === null || _h === void 0 ? void 0 : _h.pageType;
    switch (page_type) {
      case "MUSIC_PAGE_TYPE_ARTIST":
        this.item_type = "artist";
        break;
      case "MUSIC_PAGE_TYPE_PLAYLIST":
        this.item_type = "playlist";
        break;
      case "MUSIC_PAGE_TYPE_ALBUM":
        this.item_type = "album";
        break;
      default:
        if (((_k = (_j = this.endpoint) === null || _j === void 0 ? void 0 : _j.metadata) === null || _k === void 0 ? void 0 : _k.api_url) === "/next") {
          this.item_type = "endpoint";
        } else if ((_l = this.subtitle.runs) === null || _l === void 0 ? void 0 : _l[0]) {
          if (this.subtitle.runs[0].text !== "Song") {
            this.item_type = "video";
          } else {
            this.item_type = "song";
          }
        } else if (this.endpoint) {
          this.item_type = "endpoint";
        } else {
          this.item_type = "unknown";
        }
        break;
    }
    if (this.item_type == "artist") {
      this.subscribers = ((_o = (_m = this.subtitle.runs) === null || _m === void 0 ? void 0 : _m.find((run) => /^(\d*\.)?\d+[M|K]? subscribers?$/i.test(run.text))) === null || _o === void 0 ? void 0 : _o.text) || "";
    } else if (this.item_type == "playlist") {
      const item_count_run = (_p = this.subtitle.runs) === null || _p === void 0 ? void 0 : _p.find((run) => run.text.match(/\d+ songs|song/));
      this.item_count = item_count_run ? item_count_run.text : null;
    } else if (this.item_type == "album") {
      const artists = (_q = this.subtitle.runs) === null || _q === void 0 ? void 0 : _q.filter((run) => {
        var _a8, _b2;
        return (_b2 = (_a8 = run.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("UC");
      });
      if (artists) {
        this.artists = artists.map((artist) => {
          var _a8, _b2;
          return {
            name: artist.text,
            channel_id: (_b2 = (_a8 = artist.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId,
            endpoint: artist.endpoint
          };
        });
      }
      this.year = (_r = this.subtitle.runs) === null || _r === void 0 ? void 0 : _r.slice(-1)[0].text;
      if (isNaN(Number(this.year)))
        delete this.year;
    } else if (this.item_type == "video") {
      this.views = ((_t = (_s = this === null || this === void 0 ? void 0 : this.subtitle.runs) === null || _s === void 0 ? void 0 : _s.find((run) => run === null || run === void 0 ? void 0 : run.text.match(/(.*?) views/))) === null || _t === void 0 ? void 0 : _t.text) || "N/A";
      const author = (_u = this.subtitle.runs) === null || _u === void 0 ? void 0 : _u.find((run) => {
        var _a8, _b2, _c2;
        return (_c2 = (_b2 = (_a8 = run.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId) === null || _c2 === void 0 ? void 0 : _c2.startsWith("UC");
      });
      if (author) {
        this.author = {
          name: author === null || author === void 0 ? void 0 : author.text,
          channel_id: (_w = (_v = author === null || author === void 0 ? void 0 : author.endpoint) === null || _v === void 0 ? void 0 : _v.payload) === null || _w === void 0 ? void 0 : _w.browseId,
          endpoint: author === null || author === void 0 ? void 0 : author.endpoint
        };
      }
    } else if (this.item_type == "song") {
      const artists = (_x = this.subtitle.runs) === null || _x === void 0 ? void 0 : _x.filter((run) => {
        var _a8, _b2;
        return (_b2 = (_a8 = run.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("UC");
      });
      if (artists) {
        this.artists = artists.map((artist) => {
          var _a8, _b2;
          return {
            name: artist === null || artist === void 0 ? void 0 : artist.text,
            channel_id: (_b2 = (_a8 = artist === null || artist === void 0 ? void 0 : artist.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId,
            endpoint: artist === null || artist === void 0 ? void 0 : artist.endpoint
          };
        });
      }
    }
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnailRenderer.musicThumbnailRenderer.thumbnail);
    this.thumbnail_overlay = parser_default.parseItem(data2.thumbnailOverlay, MusicItemThumbnailOverlay_default);
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
  }
};
__name(MusicTwoRowItem, "MusicTwoRowItem");
MusicTwoRowItem.type = "MusicTwoRowItem";
var MusicTwoRowItem_default = MusicTwoRowItem;

// dist/src/parser/classes/MusicCarouselShelf.js
var MusicCarouselShelf = class extends YTNode {
  constructor(data2) {
    super();
    this.header = parser_default.parseItem(data2.header, MusicCarouselShelfBasicHeader_default);
    this.contents = parser_default.parseArray(data2.contents, [MusicTwoRowItem_default, MusicResponsiveListItem_default, MusicNavigationButton_default]);
    if (Reflect.has(data2, "numItemsPerColumn")) {
      this.num_items_per_column = parseInt(data2.numItemsPerColumn);
    }
  }
};
__name(MusicCarouselShelf, "MusicCarouselShelf");
MusicCarouselShelf.type = "MusicCarouselShelf";
var MusicCarouselShelf_default = MusicCarouselShelf;

// dist/src/parser/classes/MusicDescriptionShelf.js
var MusicDescriptionShelf = class extends YTNode {
  constructor(data2) {
    super();
    this.description = new Text(data2.description);
    if (Reflect.has(data2, "maxCollapsedLines")) {
      this.max_collapsed_lines = data2.maxCollapsedLines;
    }
    if (Reflect.has(data2, "maxExpandedLines")) {
      this.max_expanded_lines = data2.maxExpandedLines;
    }
    this.footer = new Text(data2.footer);
  }
};
__name(MusicDescriptionShelf, "MusicDescriptionShelf");
MusicDescriptionShelf.type = "MusicDescriptionShelf";
var MusicDescriptionShelf_default = MusicDescriptionShelf;

// dist/src/parser/classes/MusicDetailHeader.js
var MusicDetailHeader = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f, _g, _h, _j;
    super();
    this.title = new Text(data2.title);
    this.description = new Text(data2.description);
    this.subtitle = new Text(data2.subtitle);
    this.second_subtitle = new Text(data2.secondSubtitle);
    this.year = ((_b = (_a7 = this.subtitle.runs) === null || _a7 === void 0 ? void 0 : _a7.find((run) => /^[12][0-9]{3}$/.test(run.text))) === null || _b === void 0 ? void 0 : _b.text) || "";
    this.song_count = ((_d = (_c = this.second_subtitle.runs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.text) || "";
    this.total_duration = ((_f = (_e = this.second_subtitle.runs) === null || _e === void 0 ? void 0 : _e[2]) === null || _f === void 0 ? void 0 : _f.text) || "";
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail.croppedSquareThumbnailRenderer.thumbnail);
    this.badges = parser_default.parseArray(data2.subtitleBadges);
    const author = (_g = this.subtitle.runs) === null || _g === void 0 ? void 0 : _g.find((run) => {
      var _a8, _b2, _c2, _d2;
      return ((_b2 = (_a8 = run === null || run === void 0 ? void 0 : run.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId.startsWith("UC")) || ((_d2 = (_c2 = run === null || run === void 0 ? void 0 : run.endpoint) === null || _c2 === void 0 ? void 0 : _c2.payload) === null || _d2 === void 0 ? void 0 : _d2.browseId.startsWith("FEmusic_library_privately_owned_artist"));
    });
    if (author) {
      this.author = {
        name: author.text,
        channel_id: (_j = (_h = author.endpoint) === null || _h === void 0 ? void 0 : _h.payload) === null || _j === void 0 ? void 0 : _j.browseId,
        endpoint: author.endpoint
      };
    }
    this.menu = parser_default.parseItem(data2.menu);
  }
};
__name(MusicDetailHeader, "MusicDetailHeader");
MusicDetailHeader.type = "MusicDetailHeader";
var MusicDetailHeader_default = MusicDetailHeader;

// dist/src/parser/classes/MusicDownloadStateBadge.js
var MusicDownloadStateBadge = class extends YTNode {
  constructor(data2) {
    super();
    this.playlist_id = data2.playlistId;
    this.supported_download_states = data2.supportedDownloadStates;
  }
};
__name(MusicDownloadStateBadge, "MusicDownloadStateBadge");
MusicDownloadStateBadge.type = "MusicDownloadStateBadge";
var MusicDownloadStateBadge_default = MusicDownloadStateBadge;

// dist/src/parser/classes/MusicEditablePlaylistDetailHeader.js
var MusicEditablePlaylistDetailHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.header = parser_default.parseItem(data2.header);
  }
};
__name(MusicEditablePlaylistDetailHeader, "MusicEditablePlaylistDetailHeader");
MusicEditablePlaylistDetailHeader.type = "MusicEditablePlaylistDetailHeader";
var MusicEditablePlaylistDetailHeader_default = MusicEditablePlaylistDetailHeader;

// dist/src/parser/classes/MusicElementHeader.js
var MusicElementHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.element = Reflect.has(data2, "elementRenderer") ? parser_default.parseItem(data2, Element_default) : null;
  }
};
__name(MusicElementHeader, "MusicElementHeader");
MusicElementHeader.type = "MusicElementHeader";
var MusicElementHeader_default = MusicElementHeader;

// dist/src/parser/classes/MusicHeader.js
var MusicHeader = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "header")) {
      this.header = parser_default.parseItem(data2.header);
    }
    if (Reflect.has(data2, "title")) {
      this.title = new Text(data2.title);
    }
  }
};
__name(MusicHeader, "MusicHeader");
MusicHeader.type = "MusicHeader";
var MusicHeader_default = MusicHeader;

// dist/src/parser/classes/MusicImmersiveHeader.js
var MusicImmersiveHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.description = new Text(data2.description);
    this.thumbnail = parser_default.parseItem(data2.thumbnail, MusicThumbnail_default);
    this.play_button = parser_default.parseItem(data2.playButton, Button_default);
    this.start_radio_button = parser_default.parseItem(data2.startRadioButton, Button_default);
  }
};
__name(MusicImmersiveHeader, "MusicImmersiveHeader");
MusicImmersiveHeader.type = "MusicImmersiveHeader";
var MusicImmersiveHeader_default = MusicImmersiveHeader;

// dist/src/parser/classes/MusicLargeCardItemCarousel.js
var ActionButton = class {
  constructor(data2) {
    this.icon_name = data2.iconName;
    this.endpoint = new NavigationEndpoint_default(data2.onTap);
    this.a11y_text = data2.a11yText;
    this.style = data2.style;
  }
};
__name(ActionButton, "ActionButton");
ActionButton.type = "ActionButton";
var Panel2 = class {
  constructor(data2) {
    this.image = data2.image.image.sources;
    this.content_mode = data2.image.contentMode;
    this.crop_options = data2.image.cropOptions;
    this.image_aspect_ratio = data2.imageAspectRatio;
    this.caption = data2.caption;
    this.action_buttons = data2.actionButtons.map((el) => new ActionButton(el));
  }
};
__name(Panel2, "Panel");
Panel2.type = "Panel";
var MusicLargeCardItemCarousel = class extends YTNode {
  constructor(data2) {
    super();
    this.header = data2.shelf.header;
    this.panels = data2.shelf.panels.map((el) => new Panel2(el));
  }
};
__name(MusicLargeCardItemCarousel, "MusicLargeCardItemCarousel");
MusicLargeCardItemCarousel.type = "MusicLargeCardItemCarousel";
var MusicLargeCardItemCarousel_default = MusicLargeCardItemCarousel;

// dist/src/parser/classes/MusicPlaylistShelf.js
var MusicPlaylistShelf = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c;
    super();
    this.playlist_id = data2.playlistId;
    this.contents = parser_default.parseArray(data2.contents, MusicResponsiveListItem_default);
    this.collapsed_item_count = data2.collapsedItemCount;
    this.continuation = ((_c = (_b = (_a7 = data2.continuations) === null || _a7 === void 0 ? void 0 : _a7[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || null;
  }
};
__name(MusicPlaylistShelf, "MusicPlaylistShelf");
MusicPlaylistShelf.type = "MusicPlaylistShelf";
var MusicPlaylistShelf_default = MusicPlaylistShelf;

// dist/src/parser/classes/PlaylistPanelVideo.js
var PlaylistPanelVideo = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e;
    super();
    this.title = new Text(data2.title);
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.selected = data2.selected;
    this.video_id = data2.videoId;
    this.duration = {
      text: new Text(data2.lengthText).toString(),
      seconds: timeToSeconds(new Text(data2.lengthText).toString())
    };
    const album = (_a7 = new Text(data2.longBylineText).runs) === null || _a7 === void 0 ? void 0 : _a7.find((run) => {
      var _a8, _b2, _c2, _d2, _e2, _f;
      return ((_c2 = (_b2 = (_a8 = run.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId) === null || _c2 === void 0 ? void 0 : _c2.startsWith("MPR")) || ((_f = (_e2 = (_d2 = run.endpoint) === null || _d2 === void 0 ? void 0 : _d2.payload) === null || _e2 === void 0 ? void 0 : _e2.browseId) === null || _f === void 0 ? void 0 : _f.startsWith("FEmusic_library_privately_owned_release"));
    });
    const artists = (_b = new Text(data2.longBylineText).runs) === null || _b === void 0 ? void 0 : _b.filter((run) => {
      var _a8, _b2, _c2, _d2, _e2, _f;
      return ((_c2 = (_b2 = (_a8 = run.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId) === null || _c2 === void 0 ? void 0 : _c2.startsWith("UC")) || ((_f = (_e2 = (_d2 = run.endpoint) === null || _d2 === void 0 ? void 0 : _d2.payload) === null || _e2 === void 0 ? void 0 : _e2.browseId) === null || _f === void 0 ? void 0 : _f.startsWith("FEmusic_library_privately_owned_artist"));
    });
    this.author = new Text(data2.shortBylineText).toString();
    if (album) {
      this.album = {
        id: (_d = (_c = album.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.browseId,
        name: album.text,
        year: (_e = new Text(data2.longBylineText).runs) === null || _e === void 0 ? void 0 : _e.slice(-1)[0].text,
        endpoint: album.endpoint
      };
    }
    if (artists) {
      this.artists = artists.map((artist) => {
        var _a8, _b2;
        return {
          name: artist.text,
          channel_id: (_b2 = (_a8 = artist.endpoint) === null || _a8 === void 0 ? void 0 : _a8.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId,
          endpoint: artist.endpoint
        };
      });
    }
    this.badges = parser_default.parseArray(data2.badges);
    this.menu = parser_default.parseItem(data2.menu);
    this.set_video_id = data2.playlistSetVideoId;
    this.long_by_line_text = new Text(data2.longBylineText);
  }
};
__name(PlaylistPanelVideo, "PlaylistPanelVideo");
PlaylistPanelVideo.type = "PlaylistPanelVideo";
var PlaylistPanelVideo_default = PlaylistPanelVideo;

// dist/src/parser/classes/PlaylistPanelVideoWrapper.js
var PlaylistPanelVideoWrapper = class extends YTNode {
  constructor(data2) {
    super();
    this.primary = parser_default.parseItem(data2.primaryRenderer, PlaylistPanelVideo_default);
    if (Reflect.has(data2, "counterpart")) {
      this.counterpart = observe(data2.counterpart.map((item) => parser_default.parseItem(item.counterpartRenderer, PlaylistPanelVideo_default)) || []);
    }
  }
};
__name(PlaylistPanelVideoWrapper, "PlaylistPanelVideoWrapper");
PlaylistPanelVideoWrapper.type = "PlaylistPanelVideoWrapper";
var PlaylistPanelVideoWrapper_default = PlaylistPanelVideoWrapper;

// dist/src/parser/classes/PlaylistPanel.js
var PlaylistPanel = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e, _f;
    super();
    this.title = data2.title;
    this.title_text = new Text(data2.titleText);
    this.contents = parser_default.parseArray(data2.contents, [PlaylistPanelVideoWrapper_default, PlaylistPanelVideo_default, AutomixPreviewVideo_default]);
    this.playlist_id = data2.playlistId;
    this.is_infinite = data2.isInfinite;
    this.continuation = ((_c = (_b = (_a7 = data2.continuations) === null || _a7 === void 0 ? void 0 : _a7[0]) === null || _b === void 0 ? void 0 : _b.nextRadioContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || ((_f = (_e = (_d = data2.continuations) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.nextContinuationData) === null || _f === void 0 ? void 0 : _f.continuation);
    this.is_editable = data2.isEditable;
    this.preview_description = data2.previewDescription;
    this.num_items_to_show = data2.numItemsToShow;
  }
};
__name(PlaylistPanel, "PlaylistPanel");
PlaylistPanel.type = "PlaylistPanel";
var PlaylistPanel_default = PlaylistPanel;

// dist/src/parser/classes/MusicQueue.js
var MusicQueue = class extends YTNode {
  constructor(data2) {
    super();
    this.content = parser_default.parseItem(data2.content, PlaylistPanel_default);
  }
};
__name(MusicQueue, "MusicQueue");
MusicQueue.type = "MusicQueue";
var MusicQueue_default = MusicQueue;

// dist/src/parser/classes/MusicResponsiveHeader.js
var MusicResponsiveHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = parser_default2.parseItem(data2.thumbnail, MusicThumbnail_default);
    this.buttons = parser_default2.parseArray(data2.buttons, [DownloadButton_default, ToggleButton_default, MusicPlayButton_default, Button_default, Menu_default]);
    this.title = new Text(data2.title);
    this.subtitle = new Text(data2.subtitle);
    this.strapline_text_one = new Text(data2.straplineTextOne);
    this.strapline_thumbnail = parser_default2.parseItem(data2.straplineThumbnail, MusicThumbnail_default);
    this.second_subtitle = new Text(data2.secondSubtitle);
    if (Reflect.has(data2, "subtitleBadge")) {
      this.subtitle_badge = parser_default2.parseArray(data2.subtitleBadge, MusicInlineBadge_default);
    }
    if (Reflect.has(data2, "description")) {
      this.description = parser_default2.parseItem(data2.description, MusicDescriptionShelf_default);
    }
  }
};
__name(MusicResponsiveHeader, "MusicResponsiveHeader");
MusicResponsiveHeader.type = "MusicResponsiveHeader";
var MusicResponsiveHeader_default = MusicResponsiveHeader;

// dist/src/parser/classes/MusicShelf.js
var MusicShelf = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d;
    super();
    this.title = new Text(data2.title);
    this.contents = parser_default.parseArray(data2.contents, MusicResponsiveListItem_default);
    if (Reflect.has(data2, "bottomEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data2.bottomEndpoint);
    }
    if (Reflect.has(data2, "continuations")) {
      this.continuation = ((_b = (_a7 = data2.continuations) === null || _a7 === void 0 ? void 0 : _a7[0].nextContinuationData) === null || _b === void 0 ? void 0 : _b.continuation) || ((_d = (_c = data2.continuations) === null || _c === void 0 ? void 0 : _c[0].reloadContinuationData) === null || _d === void 0 ? void 0 : _d.continuation);
    }
    if (Reflect.has(data2, "bottomText")) {
      this.bottom_text = new Text(data2.bottomText);
    }
    if (Reflect.has(data2, "bottomButton")) {
      this.bottom_button = parser_default.parseItem(data2.bottomButton, Button_default);
    }
    if (Reflect.has(data2, "subheaders")) {
      this.subheaders = parser_default.parseArray(data2.subheaders);
    }
  }
};
__name(MusicShelf, "MusicShelf");
MusicShelf.type = "MusicShelf";
var MusicShelf_default = MusicShelf;

// dist/src/parser/classes/MusicSideAlignedItem.js
var MusicSideAlignedItem = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "startItems")) {
      this.start_items = parser_default.parseArray(data2.startItems);
    }
    if (Reflect.has(data2, "endItems")) {
      this.end_items = parser_default.parseArray(data2.endItems);
    }
  }
};
__name(MusicSideAlignedItem, "MusicSideAlignedItem");
MusicSideAlignedItem.type = "MusicSideAlignedItem";
var MusicSideAlignedItem_default = MusicSideAlignedItem;

// dist/src/parser/classes/MusicSortFilterButton.js
var MusicSortFilterButton = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title).toString();
    if (Reflect.has(data2, "icon")) {
      this.icon_type = data2.icon.iconType;
    }
    this.menu = parser_default.parseItem(data2.menu, MusicMultiSelectMenu_default);
  }
};
__name(MusicSortFilterButton, "MusicSortFilterButton");
MusicSortFilterButton.type = "MusicSortFilterButton";
var MusicSortFilterButton_default = MusicSortFilterButton;

// dist/src/parser/classes/MusicTastebuilderShelfThumbnail.js
var MusicTastebuilderShelfThumbnail = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
  }
};
__name(MusicTastebuilderShelfThumbnail, "MusicTastebuilderShelfThumbnail");
MusicTastebuilderShelfThumbnail.type = "MusicTastebuilderShelfThumbnail";
var MusicTastebuilderShelfThumbnail_default = MusicTastebuilderShelfThumbnail;

// dist/src/parser/classes/MusicTastebuilderShelf.js
var MusicTasteBuilderShelf = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = parser_default.parseItem(data2.thumbnail, MusicTastebuilderShelfThumbnail_default);
    this.primary_text = new Text(data2.primaryText);
    this.secondary_text = new Text(data2.secondaryText);
    this.action_button = parser_default.parseItem(data2.actionButton, Button_default);
    this.is_visible = data2.isVisible;
  }
};
__name(MusicTasteBuilderShelf, "MusicTasteBuilderShelf");
MusicTasteBuilderShelf.type = "MusicTasteBuilderShelf";
var MusicTastebuilderShelf_default = MusicTasteBuilderShelf;

// dist/src/parser/classes/MusicVisualHeader.js
var MusicVisualHeader = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.title = new Text(data2.title);
    this.thumbnail = data2.thumbnail ? Thumbnail.fromResponse((_a7 = data2.thumbnail.musicThumbnailRenderer) === null || _a7 === void 0 ? void 0 : _a7.thumbnail) : [];
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
    this.foreground_thumbnail = data2.foregroundThumbnail ? Thumbnail.fromResponse((_b = data2.foregroundThumbnail.musicThumbnailRenderer) === null || _b === void 0 ? void 0 : _b.thumbnail) : [];
  }
};
__name(MusicVisualHeader, "MusicVisualHeader");
MusicVisualHeader.type = "MusicVisualHeader";
var MusicVisualHeader_default = MusicVisualHeader;

// dist/src/parser/classes/Notification.js
var Notification = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.video_thumbnails = Thumbnail.fromResponse(data2.videoThumbnail);
    this.short_message = new Text(data2.shortMessage);
    this.sent_time = new Text(data2.sentTimeText);
    this.notification_id = data2.notificationId;
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.record_click_endpoint = new NavigationEndpoint_default(data2.recordClickEndpoint);
    this.menu = parser_default.parseItem(data2.contextualMenu);
    this.read = data2.read;
  }
};
__name(Notification, "Notification");
Notification.type = "Notification";
var Notification_default = Notification;

// dist/src/parser/classes/PageHeaderView.js
var PageHeaderView = class extends YTNode {
  constructor(data2) {
    super();
    this.title = parser_default2.parseItem(data2.title, DynamicTextView_default);
    this.image = parser_default2.parseItem(data2.image, [ContentPreviewImageView_default, DecoratedAvatarView_default]);
    this.metadata = parser_default2.parseItem(data2.metadata, ContentMetadataView_default);
    this.actions = parser_default2.parseItem(data2.actions, FlexibleActionsView_default);
    this.description = parser_default2.parseItem(data2.description, DescriptionPreviewView_default);
    this.attributation = parser_default2.parseItem(data2.attributation, AttributionView_default);
    this.banner = parser_default2.parseItem(data2.banner, ImageBannerView_default);
  }
};
__name(PageHeaderView, "PageHeaderView");
PageHeaderView.type = "PageHeaderView";
var PageHeaderView_default = PageHeaderView;

// dist/src/parser/classes/PageHeader.js
var PageHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.page_title = data2.pageTitle;
    this.content = parser_default2.parseItem(data2.content, PageHeaderView_default);
  }
};
__name(PageHeader, "PageHeader");
PageHeader.type = "PageHeader";
var PageHeader_default = PageHeader;

// dist/src/parser/classes/PageIntroduction.js
var PageIntroduction = class extends YTNode {
  constructor(data2) {
    super();
    this.header_text = new Text(data2.headerText).toString();
    this.body_text = new Text(data2.bodyText).toString();
    this.page_title = new Text(data2.pageTitle).toString();
    this.header_icon_type = data2.headerIcon.iconType;
  }
};
__name(PageIntroduction, "PageIntroduction");
PageIntroduction.type = "PageIntroduction";
var PageIntroduction_default = PageIntroduction;

// dist/src/parser/classes/PlayerErrorMessage.js
var PlayerErrorMessage = class extends YTNode {
  constructor(data2) {
    super();
    this.subreason = new Text(data2.subreason);
    this.reason = new Text(data2.reason);
    this.proceed_button = parser_default.parseItem(data2.proceedButton, Button_default);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    if (Reflect.has(data2, "icon")) {
      this.icon_type = data2.icon.iconType;
    }
  }
};
__name(PlayerErrorMessage, "PlayerErrorMessage");
PlayerErrorMessage.type = "PlayerErrorMessage";
var PlayerErrorMessage_default = PlayerErrorMessage;

// dist/src/parser/classes/PlayerLegacyDesktopYpcOffer.js
var PlayerLegacyDesktopYpcOffer = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.itemTitle;
    this.thumbnail = data2.itemThumbnail;
    this.offer_description = data2.offerDescription;
    this.offer_id = data2.offerId;
  }
};
__name(PlayerLegacyDesktopYpcOffer, "PlayerLegacyDesktopYpcOffer");
PlayerLegacyDesktopYpcOffer.type = "PlayerLegacyDesktopYpcOffer";
var PlayerLegacyDesktopYpcOffer_default = PlayerLegacyDesktopYpcOffer;

// dist/src/parser/classes/YpcTrailer.js
var YpcTrailer = class extends YTNode {
  constructor(data2) {
    super();
    this.video_message = data2.fullVideoMessage;
    this.player_response = data2.unserializedPlayerResponse;
  }
};
__name(YpcTrailer, "YpcTrailer");
YpcTrailer.type = "YpcTrailer";
var YpcTrailer_default = YpcTrailer;

// dist/src/parser/classes/PlayerLegacyDesktopYpcTrailer.js
var PlayerLegacyDesktopYpcTrailer = class extends YTNode {
  constructor(data2) {
    super();
    this.video_id = data2.trailerVideoId;
    this.title = data2.itemTitle;
    this.thumbnail = data2.itemThumbnail;
    this.offer_headline = data2.offerHeadline;
    this.offer_description = data2.offerDescription;
    this.offer_id = data2.offerId;
    this.offer_button_text = data2.offerButtonText;
    this.video_message = data2.fullVideoMessage;
    this.trailer = parser_default2.parseItem(data2.ypcTrailer, YpcTrailer_default);
  }
};
__name(PlayerLegacyDesktopYpcTrailer, "PlayerLegacyDesktopYpcTrailer");
PlayerLegacyDesktopYpcTrailer.type = "PlayerLegacyDesktopYpcTrailer";
var PlayerLegacyDesktopYpcTrailer_default = PlayerLegacyDesktopYpcTrailer;

// dist/src/parser/classes/PlayerMicroformat.js
var PlayerMicroformat = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.title = new Text(data2.title);
    this.description = new Text(data2.description);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    if (Reflect.has(data2, "embed")) {
      this.embed = {
        iframe_url: data2.embed.iframeUrl,
        flash_url: data2.embed.flashUrl,
        flash_secure_url: data2.embed.flashSecureUrl,
        width: data2.embed.width,
        height: data2.embed.height
      };
    }
    this.length_seconds = parseInt(data2.lengthSeconds);
    this.channel = {
      id: data2.externalChannelId,
      name: data2.ownerChannelName,
      url: data2.ownerProfileUrl
    };
    this.is_family_safe = !!data2.isFamilySafe;
    this.is_unlisted = !!data2.isUnlisted;
    this.has_ypc_metadata = !!data2.hasYpcMetadata;
    this.view_count = parseInt(data2.viewCount);
    this.category = data2.category;
    this.publish_date = data2.publishDate;
    this.upload_date = data2.uploadDate;
    this.available_countries = data2.availableCountries;
    this.start_timestamp = ((_a7 = data2.liveBroadcastDetails) === null || _a7 === void 0 ? void 0 : _a7.startTimestamp) ? new Date(data2.liveBroadcastDetails.startTimestamp) : null;
  }
};
__name(PlayerMicroformat, "PlayerMicroformat");
PlayerMicroformat.type = "PlayerMicroformat";
var PlayerMicroformat_default = PlayerMicroformat;

// dist/src/parser/classes/PlayerOverlayAutoplay.js
var PlayerOverlayAutoplay = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.video_id = data2.videoId;
    this.video_title = new Text(data2.videoTitle);
    this.short_view_count = new Text(data2.shortViewCountText);
    this.prefer_immediate_redirect = data2.preferImmediateRedirect;
    this.count_down_secs_for_fullscreen = data2.countDownSecsForFullscreen;
    this.published = new Text(data2.publishedTimeText);
    this.background = Thumbnail.fromResponse(data2.background);
    this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
    this.author = new Author_default(data2.byline);
    this.cancel_button = parser_default.parseItem(data2.cancelButton, Button_default);
    this.next_button = parser_default.parseItem(data2.nextButton, Button_default);
    this.close_button = parser_default.parseItem(data2.closeButton, Button_default);
  }
};
__name(PlayerOverlayAutoplay, "PlayerOverlayAutoplay");
PlayerOverlayAutoplay.type = "PlayerOverlayAutoplay";
var PlayerOverlayAutoplay_default = PlayerOverlayAutoplay;

// dist/src/parser/classes/WatchNextEndScreen.js
var WatchNextEndScreen = class extends YTNode {
  constructor(data2) {
    super();
    this.results = parser_default.parseArray(data2.results, [EndScreenVideo_default, EndScreenPlaylist_default]);
    this.title = new Text(data2.title).toString();
  }
};
__name(WatchNextEndScreen, "WatchNextEndScreen");
WatchNextEndScreen.type = "WatchNextEndScreen";
var WatchNextEndScreen_default = WatchNextEndScreen;

// dist/src/parser/classes/PlayerOverlay.js
var PlayerOverlay = class extends YTNode {
  constructor(data2) {
    super();
    this.end_screen = parser_default.parseItem(data2.endScreen, WatchNextEndScreen_default);
    this.autoplay = parser_default.parseItem(data2.autoplay, PlayerOverlayAutoplay_default);
    this.share_button = parser_default.parseItem(data2.shareButton, Button_default);
    this.add_to_menu = parser_default.parseItem(data2.addToMenu, Menu_default);
    this.fullscreen_engagement = parser_default.parseItem(data2.fullscreenEngagement);
    this.actions = parser_default.parseArray(data2.actions);
    this.browser_media_session = parser_default.parseItem(data2.browserMediaSession);
    this.decorated_player_bar = parser_default.parseItem(data2.decoratedPlayerBarRenderer, DecoratedPlayerBar_default);
  }
};
__name(PlayerOverlay, "PlayerOverlay");
PlayerOverlay.type = "PlayerOverlay";
var PlayerOverlay_default = PlayerOverlay;

// dist/src/parser/classes/PlaylistCustomThumbnail.js
var PlaylistCustomThumbnail = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
  }
};
__name(PlaylistCustomThumbnail, "PlaylistCustomThumbnail");
PlaylistCustomThumbnail.type = "PlaylistCustomThumbnail";
var PlaylistCustomThumbnail_default = PlaylistCustomThumbnail;

// dist/src/parser/classes/PlaylistHeader.js
var PlaylistHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.playlistId;
    this.title = new Text(data2.title);
    this.stats = data2.stats.map((stat) => new Text(stat));
    this.brief_stats = data2.briefStats.map((stat) => new Text(stat));
    this.author = new Author_default(Object.assign(Object.assign({}, data2.ownerText), { navigationEndpoint: data2.ownerEndpoint }), data2.ownerBadges, null);
    this.description = new Text(data2.descriptionText);
    this.num_videos = new Text(data2.numVideosText);
    this.view_count = new Text(data2.viewCountText);
    this.can_share = data2.shareData.canShare;
    this.can_delete = data2.editableDetails.canDelete;
    this.is_editable = data2.isEditable;
    this.privacy = data2.privacy;
    this.save_button = parser_default.parseItem(data2.saveButton);
    this.shuffle_play_button = parser_default.parseItem(data2.shufflePlayButton);
    this.menu = parser_default.parseItem(data2.moreActionsMenu);
    this.banner = parser_default.parseItem(data2.playlistHeaderBanner);
  }
};
__name(PlaylistHeader, "PlaylistHeader");
PlaylistHeader.type = "PlaylistHeader";
var PlaylistHeader_default = PlaylistHeader;

// dist/src/parser/classes/PlaylistInfoCardContent.js
var PlaylistInfoCardContent = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.playlistTitle);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.video_count = new Text(data2.playlistVideoCount);
    this.channel_name = new Text(data2.channelName);
    this.endpoint = new NavigationEndpoint_default(data2.action);
  }
};
__name(PlaylistInfoCardContent, "PlaylistInfoCardContent");
PlaylistInfoCardContent.type = "PlaylistInfoCardContent";
var PlaylistInfoCardContent_default = PlaylistInfoCardContent;

// dist/src/parser/classes/PlaylistMetadata.js
var PlaylistMetadata = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.title;
    this.description = data2.description || null;
  }
};
__name(PlaylistMetadata, "PlaylistMetadata");
PlaylistMetadata.type = "PlaylistMetadata";
var PlaylistMetadata_default = PlaylistMetadata;

// dist/src/parser/classes/PlaylistSidebar.js
var PlaylistSidebar = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parseArray(data2.items);
  }
  get contents() {
    return this.items;
  }
};
__name(PlaylistSidebar, "PlaylistSidebar");
PlaylistSidebar.type = "PlaylistSidebar";
var PlaylistSidebar_default = PlaylistSidebar;

// dist/src/parser/classes/PlaylistSidebarPrimaryInfo.js
var PlaylistSidebarPrimaryInfo = class extends YTNode {
  constructor(data2) {
    super();
    this.stats = data2.stats.map((stat) => new Text(stat));
    this.thumbnail_renderer = parser_default.parseItem(data2.thumbnailRenderer);
    this.title = new Text(data2.title);
    this.menu = parser_default.parseItem(data2.menu);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.description = new Text(data2.description);
  }
};
__name(PlaylistSidebarPrimaryInfo, "PlaylistSidebarPrimaryInfo");
PlaylistSidebarPrimaryInfo.type = "PlaylistSidebarPrimaryInfo";
var PlaylistSidebarPrimaryInfo_default = PlaylistSidebarPrimaryInfo;

// dist/src/parser/classes/PlaylistSidebarSecondaryInfo.js
var PlaylistSidebarSecondaryInfo = class extends YTNode {
  constructor(data2) {
    super();
    this.owner = parser_default.parseItem(data2.videoOwner);
    this.button = parser_default.parseItem(data2.button);
  }
};
__name(PlaylistSidebarSecondaryInfo, "PlaylistSidebarSecondaryInfo");
PlaylistSidebarSecondaryInfo.type = "PlaylistSidebarSecondaryInfo";
var PlaylistSidebarSecondaryInfo_default = PlaylistSidebarSecondaryInfo;

// dist/src/parser/classes/PlaylistVideo.js
var PlaylistVideo = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.videoId;
    this.index = new Text(data2.index);
    this.title = new Text(data2.title);
    this.author = new Author_default(data2.shortBylineText);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data2.thumbnailOverlays);
    this.set_video_id = data2 === null || data2 === void 0 ? void 0 : data2.setVideoId;
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.is_playable = data2.isPlayable;
    this.menu = parser_default.parseItem(data2.menu, Menu_default);
    this.video_info = new Text(data2.videoInfo);
    this.accessibility_label = data2.title.accessibility.accessibilityData.label;
    const upcoming = data2.upcomingEventData && Number(`${data2.upcomingEventData.startTime}000`);
    if (upcoming) {
      this.upcoming = new Date(upcoming);
    }
    this.duration = {
      text: new Text(data2.lengthText).toString(),
      seconds: parseInt(data2.lengthSeconds)
    };
  }
  get is_live() {
    var _a7;
    return ((_a7 = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus_default)) === null || _a7 === void 0 ? void 0 : _a7.style) === "LIVE";
  }
  get is_upcoming() {
    var _a7;
    return ((_a7 = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus_default)) === null || _a7 === void 0 ? void 0 : _a7.style) === "UPCOMING";
  }
};
__name(PlaylistVideo, "PlaylistVideo");
PlaylistVideo.type = "PlaylistVideo";
var PlaylistVideo_default = PlaylistVideo;

// dist/src/parser/classes/PlaylistVideoList.js
var PlaylistVideoList = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.playlistId;
    this.is_editable = data2.isEditable;
    this.can_reorder = data2.canReorder;
    this.videos = parser_default.parseArray(data2.contents);
  }
};
__name(PlaylistVideoList, "PlaylistVideoList");
PlaylistVideoList.type = "PlaylistVideoList";
var PlaylistVideoList_default = PlaylistVideoList;

// dist/src/parser/classes/PlaylistVideoThumbnail.js
var PlaylistVideoThumbnail = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
  }
};
__name(PlaylistVideoThumbnail, "PlaylistVideoThumbnail");
PlaylistVideoThumbnail.type = "PlaylistVideoThumbnail";
var PlaylistVideoThumbnail_default = PlaylistVideoThumbnail;

// dist/src/parser/classes/Poll.js
var Poll = class extends YTNode {
  constructor(data2) {
    super();
    this.choices = data2.choices.map((choice) => ({
      text: new Text(choice.text),
      select_endpoint: choice.selectServiceEndpoint ? new NavigationEndpoint_default(choice.selectServiceEndpoint) : null,
      deselect_endpoint: choice.deselectServiceEndpoint ? new NavigationEndpoint_default(choice.deselectServiceEndpoint) : null,
      vote_ratio_if_selected: (choice === null || choice === void 0 ? void 0 : choice.voteRatioIfSelected) || null,
      vote_percentage_if_selected: new Text(choice.votePercentageIfSelected),
      vote_ratio_if_not_selected: (choice === null || choice === void 0 ? void 0 : choice.voteRatioIfSelected) || null,
      vote_percentage_if_not_selected: new Text(choice.votePercentageIfSelected),
      image: choice.image ? Thumbnail.fromResponse(choice.image) : null
    }));
    if (Reflect.has(data2, "type"))
      this.poll_type = data2.type;
    if (Reflect.has(data2, "totalVotes"))
      this.total_votes = new Text(data2.totalVotes);
    if (Reflect.has(data2, "liveChatPollId"))
      this.live_chat_poll_id = data2.liveChatPollId;
  }
};
__name(Poll, "Poll");
Poll.type = "Poll";
var Poll_default = Poll;

// dist/src/parser/classes/Post.js
var Post = class extends BackstagePost_default {
  constructor(data2) {
    super(data2);
  }
};
__name(Post, "Post");
Post.type = "Post";
var Post_default = Post;

// dist/src/parser/classes/PostMultiImage.js
var PostMultiImage = class extends YTNode {
  constructor(data2) {
    super();
    this.images = parser_default.parseArray(data2.images, BackstageImage_default);
  }
};
__name(PostMultiImage, "PostMultiImage");
PostMultiImage.type = "PostMultiImage";
var PostMultiImage_default = PostMultiImage;

// dist/src/parser/classes/ProfileColumn.js
var ProfileColumn = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parseArray(data2.items);
  }
  get contents() {
    return this.items;
  }
};
__name(ProfileColumn, "ProfileColumn");
ProfileColumn.type = "ProfileColumn";
var ProfileColumn_default = ProfileColumn;

// dist/src/parser/classes/ProfileColumnStats.js
var ProfileColumnStats = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parseArray(data2.items);
  }
  get contents() {
    return this.items;
  }
};
__name(ProfileColumnStats, "ProfileColumnStats");
ProfileColumnStats.type = "ProfileColumnStats";
var ProfileColumnStats_default = ProfileColumnStats;

// dist/src/parser/classes/ProfileColumnStatsEntry.js
var ProfileColumnStatsEntry = class extends YTNode {
  constructor(data2) {
    super();
    this.label = new Text(data2.label);
    this.value = new Text(data2.value);
  }
};
__name(ProfileColumnStatsEntry, "ProfileColumnStatsEntry");
ProfileColumnStatsEntry.type = "ProfileColumnStatsEntry";
var ProfileColumnStatsEntry_default = ProfileColumnStatsEntry;

// dist/src/parser/classes/ProfileColumnUserInfo.js
var ProfileColumnUserInfo = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
  }
};
__name(ProfileColumnUserInfo, "ProfileColumnUserInfo");
ProfileColumnUserInfo.type = "ProfileColumnUserInfo";
var ProfileColumnUserInfo_default = ProfileColumnUserInfo;

// dist/src/parser/classes/RecognitionShelf.js
var RecognitionShelf = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.subtitle = new Text(data2.subtitle);
    this.avatars = data2.avatars.map((avatar) => new Thumbnail(avatar));
    this.button = parser_default.parseItem(data2.button, Button_default);
    this.surface = data2.surface;
  }
};
__name(RecognitionShelf, "RecognitionShelf");
RecognitionShelf.type = "RecognitionShelf";
var RecognitionShelf_default = RecognitionShelf;

// dist/src/parser/classes/ReelItem.js
var ReelItem = class extends YTNode {
  constructor(data2) {
    super();
    this.id = data2.videoId;
    this.title = new Text(data2.headline);
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.views = new Text(data2.viewCountText);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.accessibility_label = data2.accessibility.accessibilityData.label;
  }
};
__name(ReelItem, "ReelItem");
ReelItem.type = "ReelItem";
var ReelItem_default = ReelItem;

// dist/src/parser/classes/RelatedChipCloud.js
var RelatedChipCloud = class extends YTNode {
  constructor(data2) {
    super();
    this.content = parser_default.parseItem(data2.content);
  }
};
__name(RelatedChipCloud, "RelatedChipCloud");
RelatedChipCloud.type = "RelatedChipCloud";
var RelatedChipCloud_default = RelatedChipCloud;

// dist/src/parser/classes/RichGrid.js
var RichGrid = class extends YTNode {
  constructor(data2) {
    super();
    this.header = parser_default.parseItem(data2.header);
    this.contents = parser_default.parseArray(data2.contents);
  }
};
__name(RichGrid, "RichGrid");
RichGrid.type = "RichGrid";
var RichGrid_default = RichGrid;

// dist/src/parser/classes/RichItem.js
var RichItem = class extends YTNode {
  constructor(data2) {
    super();
    this.content = parser_default.parseItem(data2.content);
  }
};
__name(RichItem, "RichItem");
RichItem.type = "RichItem";
var RichItem_default = RichItem;

// dist/src/parser/classes/RichListHeader.js
var RichListHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.subtitle = new Text(data2.subtitle);
    if (Reflect.has(data2, "titleStyle")) {
      this.title_style = data2.titleStyle.style;
    }
    if (Reflect.has(data2, "icon")) {
      this.icon_type = data2.icon.iconType;
    }
  }
};
__name(RichListHeader, "RichListHeader");
RichListHeader.type = "RichListHeader";
var RichListHeader_default = RichListHeader;

// dist/src/parser/classes/RichMetadata.js
var RichMetadata = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.title = new Text(data2.title);
    this.subtitle = new Text(data2.subtitle);
    this.call_to_action = new Text(data2.callToAction);
    if (Reflect.has(data2, "callToActionIcon")) {
      this.icon_type = data2.callToActionIcon.iconType;
    }
    this.endpoint = new NavigationEndpoint_default(data2.endpoint);
  }
};
__name(RichMetadata, "RichMetadata");
RichMetadata.type = "RichMetadata";
var RichMetadata_default = RichMetadata;

// dist/src/parser/classes/RichMetadataRow.js
var RichMetadataRow = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parseArray(data2.contents);
  }
};
__name(RichMetadataRow, "RichMetadataRow");
RichMetadataRow.type = "RichMetadataRow";
var RichMetadataRow_default = RichMetadataRow;

// dist/src/parser/classes/RichSection.js
var RichSection = class extends YTNode {
  constructor(data2) {
    super();
    this.content = parser_default.parseItem(data2.content);
  }
};
__name(RichSection, "RichSection");
RichSection.type = "RichSection";
var RichSection_default = RichSection;

// dist/src/parser/classes/RichShelf.js
var RichShelf = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.contents = parser_default.parseArray(data2.contents);
    if (Reflect.has(data2, "endpoint")) {
      this.endpoint = new NavigationEndpoint_default(data2.endpoint);
    }
  }
};
__name(RichShelf, "RichShelf");
RichShelf.type = "RichShelf";
var RichShelf_default = RichShelf;

// dist/src/parser/classes/SearchBox.js
var SearchBox = class extends YTNode {
  constructor(data2) {
    super();
    this.endpoint = new NavigationEndpoint_default(data2.endpoint);
    this.search_button = parser_default.parseItem(data2.searchButton, Button_default);
    this.clear_button = parser_default.parseItem(data2.clearButton, Button_default);
    this.placeholder_text = new Text(data2.placeholderText);
  }
};
__name(SearchBox, "SearchBox");
SearchBox.type = "SearchBox";
var SearchBox_default = SearchBox;

// dist/src/parser/classes/SearchFilter.js
var SearchFilter = class extends YTNode {
  constructor(data2) {
    super();
    this.label = new Text(data2.label);
    this.endpoint = new NavigationEndpoint_default(data2.endpoint || data2.navigationEndpoint);
    this.tooltip = data2.tooltip;
    if (Reflect.has(data2, "status")) {
      this.status = data2.status;
    }
  }
  get disabled() {
    return this.status === "FILTER_STATUS_DISABLED";
  }
  get selected() {
    return this.status === "FILTER_STATUS_SELECTED";
  }
};
__name(SearchFilter, "SearchFilter");
SearchFilter.type = "SearchFilter";
var SearchFilter_default = SearchFilter;

// dist/src/parser/classes/SearchFilterGroup.js
var SearchFilterGroup = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.filters = parser_default2.parseArray(data2.filters, SearchFilter_default);
  }
};
__name(SearchFilterGroup, "SearchFilterGroup");
SearchFilterGroup.type = "SearchFilterGroup";
var SearchFilterGroup_default = SearchFilterGroup;

// dist/src/parser/classes/SearchSubMenu.js
var SearchSubMenu = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.groups = parser_default.parseArray(data2.groups, SearchFilterGroup_default);
    this.button = parser_default.parseItem(data2.button, ToggleButton_default);
  }
};
__name(SearchSubMenu, "SearchSubMenu");
SearchSubMenu.type = "SearchSubMenu";
var SearchSubMenu_default = SearchSubMenu;

// dist/src/parser/classes/SearchSuggestionsSection.js
var SearchSuggestionsSection = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parseArray(data2.contents);
  }
};
__name(SearchSuggestionsSection, "SearchSuggestionsSection");
SearchSuggestionsSection.type = "SearchSuggestionsSection";
var SearchSuggestionsSection_default = SearchSuggestionsSection;

// dist/src/parser/classes/SecondarySearchContainer.js
var SecondarySearchContainer = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parseArray(data2.contents);
  }
};
__name(SecondarySearchContainer, "SecondarySearchContainer");
SecondarySearchContainer.type = "SecondarySearchContainer";
var SecondarySearchContainer_default = SecondarySearchContainer;

// dist/src/parser/classes/SegmentedLikeDislikeButton.js
var SegmentedLikeDislikeButton = class extends YTNode {
  constructor(data2) {
    super();
    this.like_button = parser_default.parseItem(data2.likeButton, [ToggleButton_default, Button_default]);
    this.dislike_button = parser_default.parseItem(data2.dislikeButton, [ToggleButton_default, Button_default]);
  }
};
__name(SegmentedLikeDislikeButton, "SegmentedLikeDislikeButton");
SegmentedLikeDislikeButton.type = "SegmentedLikeDislikeButton";
var SegmentedLikeDislikeButton_default = SegmentedLikeDislikeButton;

// dist/src/parser/classes/SettingBoolean.js
var SettingBoolean = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "title")) {
      this.title = new Text(data2.title);
    }
    if (Reflect.has(data2, "summary")) {
      this.summary = new Text(data2.summary);
    }
    if (Reflect.has(data2, "enableServiceEndpoint")) {
      this.enable_endpoint = new NavigationEndpoint_default(data2.enableServiceEndpoint);
    }
    if (Reflect.has(data2, "disableServiceEndpoint")) {
      this.disable_endpoint = new NavigationEndpoint_default(data2.disableServiceEndpoint);
    }
    this.item_id = data2.itemId;
  }
};
__name(SettingBoolean, "SettingBoolean");
SettingBoolean.type = "SettingBoolean";
var SettingBoolean_default = SettingBoolean;

// dist/src/parser/classes/SettingsCheckbox.js
var SettingsCheckbox = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.help_text = new Text(data2.helpText);
    this.enabled = data2.enabled;
    this.disabled = data2.disabled;
    this.id = data2.id;
  }
};
__name(SettingsCheckbox, "SettingsCheckbox");
SettingsCheckbox.type = "SettingsCheckbox";
var SettingsCheckbox_default = SettingsCheckbox;

// dist/src/parser/classes/SettingsSwitch.js
var SettingsSwitch = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.subtitle = new Text(data2.subtitle);
    this.enabled = data2.enabled;
    this.enable_endpoint = new NavigationEndpoint_default(data2.enableServiceEndpoint);
    this.disable_endpoint = new NavigationEndpoint_default(data2.disableServiceEndpoint);
  }
};
__name(SettingsSwitch, "SettingsSwitch");
SettingsSwitch.type = "SettingsSwitch";
var SettingsSwitch_default = SettingsSwitch;

// dist/src/parser/classes/SettingsOptions.js
var SettingsOptions = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    if (Reflect.has(data2, "text")) {
      this.text = new Text(data2.text).toString();
    }
    if (Reflect.has(data2, "options")) {
      this.options = parser_default.parseArray(data2.options, [
        SettingsSwitch_default,
        Dropdown_default,
        CopyLink_default,
        SettingsCheckbox_default,
        ChannelOptions_default
      ]);
    }
  }
};
__name(SettingsOptions, "SettingsOptions");
SettingsOptions.type = "SettingsOptions";
var SettingsOptions_default = SettingsOptions;

// dist/src/parser/classes/SettingsSidebar.js
var SettingsSidebar = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.items = parser_default.parseArray(data2.items, CompactLink_default);
  }
  get contents() {
    return this.items;
  }
};
__name(SettingsSidebar, "SettingsSidebar");
SettingsSidebar.type = "SettingsSidebar";
var SettingsSidebar_default = SettingsSidebar;

// dist/src/parser/classes/SharedPost.js
var SharedPost = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.content = new Text(data2.content);
    this.published = new Text(data2.publishedTimeText);
    this.menu = parser_default2.parseItem(data2.actionMenu, Menu_default);
    this.original_post = parser_default2.parseItem(data2.originalPost, BackstagePost_default);
    this.id = data2.postId;
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.expand_button = parser_default2.parseItem(data2.expandButton, Button_default);
    this.author = new Author_default(data2.displayName, void 0);
  }
};
__name(SharedPost, "SharedPost");
SharedPost.type = "SharedPost";
var SharedPost_default = SharedPost;

// dist/src/parser/classes/Shelf.js
var Shelf = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    if (Reflect.has(data2, "endpoint")) {
      this.endpoint = new NavigationEndpoint_default(data2.endpoint);
    }
    this.content = parser_default.parseItem(data2.content);
    if (Reflect.has(data2, "icon")) {
      this.icon_type = data2.icon.iconType;
    }
    if (Reflect.has(data2, "menu")) {
      this.menu = parser_default.parseItem(data2.menu);
    }
    if (Reflect.has(data2, "playAllButton")) {
      this.play_all_button = parser_default.parseItem(data2.playAllButton, Button_default);
    }
  }
};
__name(Shelf, "Shelf");
Shelf.type = "Shelf";
var Shelf_default = Shelf;

// dist/src/parser/classes/ShowingResultsFor.js
var ShowingResultsFor = class extends YTNode {
  constructor(data2) {
    super();
    this.corrected_query = new Text(data2.correctedQuery);
    this.original_query = new Text(data2.originalQuery);
    this.corrected_query_endpoint = new NavigationEndpoint_default(data2.correctedQueryEndpoint);
    this.original_query_endpoint = new NavigationEndpoint_default(data2.originalQueryEndpoint);
    this.search_instead_for = new Text(data2.searchInsteadFor);
    this.showing_results_for = new Text(data2.showingResultsFor);
  }
};
__name(ShowingResultsFor, "ShowingResultsFor");
ShowingResultsFor.type = "ShowingResultsFor";
var ShowingResultsFor_default = ShowingResultsFor;

// dist/src/parser/classes/SimpleCardContent.js
var SimpleCardContent = class extends YTNode {
  constructor(data2) {
    super();
    this.image = Thumbnail.fromResponse(data2.image);
    this.title = new Text(data2.title);
    this.display_domain = new Text(data2.displayDomain);
    this.show_link_icon = data2.showLinkIcon;
    this.call_to_action = new Text(data2.callToAction);
    this.endpoint = new NavigationEndpoint_default(data2.command);
  }
};
__name(SimpleCardContent, "SimpleCardContent");
SimpleCardContent.type = "SimpleCardContent";
var SimpleCardContent_default = SimpleCardContent;

// dist/src/parser/classes/SimpleCardTeaser.js
var SimpleCardTeaser = class extends YTNode {
  constructor(data2) {
    super();
    this.message = new Text(data2.message);
    this.prominent = data2.prominent;
  }
};
__name(SimpleCardTeaser, "SimpleCardTeaser");
SimpleCardTeaser.type = "SimpleCardTeaser";
var SimpleCardTeaser_default = SimpleCardTeaser;

// dist/src/parser/classes/SimpleTextSection.js
var SimpleTextSection = class extends YTNode {
  constructor(data2) {
    super();
    this.lines = data2.lines.map((line) => new Text(line));
    this.style = data2.layoutStyle;
  }
};
__name(SimpleTextSection, "SimpleTextSection");
SimpleTextSection.type = "SimpleTextSection";
var SimpleTextSection_default = SimpleTextSection;

// dist/src/parser/classes/SingleActionEmergencySupport.js
var SingleActionEmergencySupport = class extends YTNode {
  constructor(data2) {
    super();
    this.action_text = new Text(data2.actionText);
    this.nav_text = new Text(data2.navigationText);
    this.details = new Text(data2.detailsText);
    this.icon_type = data2.icon.iconType;
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
  }
};
__name(SingleActionEmergencySupport, "SingleActionEmergencySupport");
SingleActionEmergencySupport.type = "SingleActionEmergencySupport";
var SingleActionEmergencySupport_default = SingleActionEmergencySupport;

// dist/src/parser/classes/Tab.js
var Tab = class extends YTNode {
  constructor(data2) {
    super();
    this.title = data2.title || "N/A";
    this.selected = !!data2.selected;
    this.endpoint = new NavigationEndpoint_default(data2.endpoint);
    this.content = parser_default.parseItem(data2.content, [SectionList_default, MusicQueue_default, RichGrid_default]);
  }
};
__name(Tab, "Tab");
Tab.type = "Tab";
var Tab_default = Tab;

// dist/src/parser/classes/SingleColumnBrowseResults.js
var SingleColumnBrowseResults = class extends YTNode {
  constructor(data2) {
    super();
    this.tabs = parser_default.parseArray(data2.tabs, Tab_default);
  }
};
__name(SingleColumnBrowseResults, "SingleColumnBrowseResults");
SingleColumnBrowseResults.type = "SingleColumnBrowseResults";
var SingleColumnBrowseResults_default = SingleColumnBrowseResults;

// dist/src/parser/classes/SingleColumnMusicWatchNextResults.js
var SingleColumnMusicWatchNextResults = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parse(data2);
  }
};
__name(SingleColumnMusicWatchNextResults, "SingleColumnMusicWatchNextResults");
SingleColumnMusicWatchNextResults.type = "SingleColumnMusicWatchNextResults";
var SingleColumnMusicWatchNextResults_default = SingleColumnMusicWatchNextResults;

// dist/src/parser/classes/SingleHeroImage.js
var SingleHeroImage = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data2.thumbnail);
    this.style = data2.style;
  }
};
__name(SingleHeroImage, "SingleHeroImage");
SingleHeroImage.type = "SingleHeroImage";
var SingleHeroImage_default = SingleHeroImage;

// dist/src/parser/classes/SlimOwner.js
var SlimOwner = class extends YTNode {
  constructor(data2) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data2.thumbnail);
    this.title = new Text(data2.title);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.subscribe_button = parser_default.parseItem(data2.subscribeButton, SubscribeButton_default);
  }
};
__name(SlimOwner, "SlimOwner");
SlimOwner.type = "SlimOwner";
var SlimOwner_default = SlimOwner;

// dist/src/parser/classes/SlimVideoMetadata.js
var SlimVideoMetadata = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.collapsed_subtitle = new Text(data2.collapsedSubtitle);
    this.expanded_subtitle = new Text(data2.expandedSubtitle);
    this.owner = parser_default.parseItem(data2.owner);
    this.description = new Text(data2.description);
    this.video_id = data2.videoId;
    this.date = new Text(data2.dateText);
  }
};
__name(SlimVideoMetadata, "SlimVideoMetadata");
SlimVideoMetadata.type = "SlimVideoMetadata";
var SlimVideoMetadata_default = SlimVideoMetadata;

// dist/src/parser/classes/SubFeedOption.js
var SubFeedOption = class extends YTNode {
  constructor(data2) {
    super();
    this.name = new Text(data2.name);
    this.is_selected = data2.isSelected;
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
  }
};
__name(SubFeedOption, "SubFeedOption");
SubFeedOption.type = "SubFeedOption";
var SubFeedOption_default = SubFeedOption;

// dist/src/parser/classes/SubFeedSelector.js
var SubFeedSelector = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.options = parser_default.parseArray(data2.options, SubFeedOption_default);
  }
};
__name(SubFeedSelector, "SubFeedSelector");
SubFeedSelector.type = "SubFeedSelector";
var SubFeedSelector_default = SubFeedSelector;

// dist/src/parser/classes/Tabbed.js
var Tabbed = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = parser_default.parse(data2);
  }
};
__name(Tabbed, "Tabbed");
Tabbed.type = "Tabbed";
var Tabbed_default = Tabbed;

// dist/src/parser/classes/TabbedSearchResults.js
var TabbedSearchResults = class extends YTNode {
  constructor(data2) {
    super();
    this.tabs = parser_default.parseArray(data2.tabs, Tab_default);
  }
};
__name(TabbedSearchResults, "TabbedSearchResults");
TabbedSearchResults.type = "TabbedSearchResults";
var TabbedSearchResults_default = TabbedSearchResults;

// dist/src/parser/classes/TextHeader.js
var TextHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.style = data2.style;
  }
};
__name(TextHeader, "TextHeader");
TextHeader.type = "TextHeader";
var TextHeader_default = TextHeader;

// dist/src/parser/classes/ThumbnailLandscapePortrait.js
var ThumbnailLandscapePortrait = class extends YTNode {
  constructor(data2) {
    super();
    this.landscape = Thumbnail.fromResponse(data2.landscape);
    this.portrait = Thumbnail.fromResponse(data2.portrait);
  }
};
__name(ThumbnailLandscapePortrait, "ThumbnailLandscapePortrait");
ThumbnailLandscapePortrait.type = "ThumbnailLandscapePortrait";
var ThumbnailLandscapePortrait_default = ThumbnailLandscapePortrait;

// dist/src/parser/classes/ThumbnailOverlayEndorsement.js
var ThumbnailOverlayEndorsement = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.text).toString();
  }
};
__name(ThumbnailOverlayEndorsement, "ThumbnailOverlayEndorsement");
ThumbnailOverlayEndorsement.type = "ThumbnailOverlayEndorsement";
var ThumbnailOverlayEndorsement_default = ThumbnailOverlayEndorsement;

// dist/src/parser/classes/ThumbnailOverlayHoverText.js
var ThumbnailOverlayHoverText = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.text);
    this.icon_type = data2.icon.iconType;
  }
};
__name(ThumbnailOverlayHoverText, "ThumbnailOverlayHoverText");
ThumbnailOverlayHoverText.type = "ThumbnailOverlayHoverText";
var ThumbnailOverlayHoverText_default = ThumbnailOverlayHoverText;

// dist/src/parser/classes/ThumbnailOverlayInlineUnplayable.js
var ThumbnailOverlayInlineUnplayable = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.text).toString();
    this.icon_type = data2.icon.iconType;
  }
};
__name(ThumbnailOverlayInlineUnplayable, "ThumbnailOverlayInlineUnplayable");
ThumbnailOverlayInlineUnplayable.type = "ThumbnailOverlayInlineUnplayable";
var ThumbnailOverlayInlineUnplayable_default = ThumbnailOverlayInlineUnplayable;

// dist/src/parser/classes/ThumbnailOverlayLoadingPreview.js
var ThumbnailOverlayLoadingPreview = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.text);
  }
};
__name(ThumbnailOverlayLoadingPreview, "ThumbnailOverlayLoadingPreview");
ThumbnailOverlayLoadingPreview.type = "ThumbnailOverlayLoadingPreview";
var ThumbnailOverlayLoadingPreview_default = ThumbnailOverlayLoadingPreview;

// dist/src/parser/classes/ThumbnailOverlayNowPlaying.js
var ThumbnailOverlayNowPlaying = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.text).toString();
  }
};
__name(ThumbnailOverlayNowPlaying, "ThumbnailOverlayNowPlaying");
ThumbnailOverlayNowPlaying.type = "ThumbnailOverlayNowPlaying";
var ThumbnailOverlayNowPlaying_default = ThumbnailOverlayNowPlaying;

// dist/src/parser/classes/ThumbnailOverlayPinking.js
var ThumbnailOverlayPinking = class extends YTNode {
  constructor(data2) {
    super();
    this.hack = data2.hack;
  }
};
__name(ThumbnailOverlayPinking, "ThumbnailOverlayPinking");
ThumbnailOverlayPinking.type = "ThumbnailOverlayPinking";
var ThumbnailOverlayPinking_default = ThumbnailOverlayPinking;

// dist/src/parser/classes/ThumbnailOverlayPlaybackStatus.js
var ThumbnailOverlayPlaybackStatus = class extends YTNode {
  constructor(data2) {
    super();
    this.texts = data2.texts.map((text) => new Text(text));
  }
};
__name(ThumbnailOverlayPlaybackStatus, "ThumbnailOverlayPlaybackStatus");
ThumbnailOverlayPlaybackStatus.type = "ThumbnailOverlayPlaybackStatus";
var ThumbnailOverlayPlaybackStatus_default = ThumbnailOverlayPlaybackStatus;

// dist/src/parser/classes/ThumbnailOverlayResumePlayback.js
var ThumbnailOverlayResumePlayback = class extends YTNode {
  constructor(data2) {
    super();
    this.percent_duration_watched = data2.percentDurationWatched;
  }
};
__name(ThumbnailOverlayResumePlayback, "ThumbnailOverlayResumePlayback");
ThumbnailOverlayResumePlayback.type = "ThumbnailOverlayResumePlayback";
var ThumbnailOverlayResumePlayback_default = ThumbnailOverlayResumePlayback;

// dist/src/parser/classes/ThumbnailOverlaySidePanel.js
var ThumbnailOverlaySidePanel = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.text);
    this.icon_type = data2.icon.iconType;
  }
};
__name(ThumbnailOverlaySidePanel, "ThumbnailOverlaySidePanel");
ThumbnailOverlaySidePanel.type = "ThumbnailOverlaySidePanel";
var ThumbnailOverlaySidePanel_default = ThumbnailOverlaySidePanel;

// dist/src/parser/classes/ThumbnailOverlayToggleButton.js
var ThumbnailOverlayToggleButton = class extends YTNode {
  constructor(data2) {
    super();
    if (Reflect.has(data2, "isToggled")) {
      this.is_toggled = data2.isToggled;
    }
    this.icon_type = {
      toggled: data2.toggledIcon.iconType,
      untoggled: data2.untoggledIcon.iconType
    };
    this.tooltip = {
      toggled: data2.toggledTooltip,
      untoggled: data2.untoggledTooltip
    };
    this.toggled_endpoint = new NavigationEndpoint_default(data2.toggledServiceEndpoint);
    this.untoggled_endpoint = new NavigationEndpoint_default(data2.untoggledServiceEndpoint);
  }
};
__name(ThumbnailOverlayToggleButton, "ThumbnailOverlayToggleButton");
ThumbnailOverlayToggleButton.type = "ThumbnailOverlayToggleButton";
var ThumbnailOverlayToggleButton_default = ThumbnailOverlayToggleButton;

// dist/src/parser/classes/TimedMarkerDecoration.js
var TimedMarkerDecoration = class extends YTNode {
  constructor(data2) {
    super();
    this.visible_time_range_start_millis = data2.visibleTimeRangeStartMillis;
    this.visible_time_range_end_millis = data2.visibleTimeRangeEndMillis;
    this.decoration_time_millis = data2.decorationTimeMillis;
    this.label = new Text(data2.label);
    this.icon = data2.icon;
  }
};
__name(TimedMarkerDecoration, "TimedMarkerDecoration");
TimedMarkerDecoration.type = "TimedMarkerDecoration";
var TimedMarkerDecoration_default = TimedMarkerDecoration;

// dist/src/parser/classes/TitleAndButtonListHeader.js
var TitleAndButtonListHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
  }
};
__name(TitleAndButtonListHeader, "TitleAndButtonListHeader");
TitleAndButtonListHeader.type = "TitleAndButtonListHeader";
var TitleAndButtonListHeader_default = TitleAndButtonListHeader;

// dist/src/parser/classes/ToggleMenuServiceItem.js
var ToggleMenuServiceItem = class extends YTNode {
  constructor(data2) {
    super();
    this.text = new Text(data2.defaultText);
    this.toggled_text = new Text(data2.toggledText);
    this.icon_type = data2.defaultIcon.iconType;
    this.toggled_icon_type = data2.toggledIcon.iconType;
    this.default_endpoint = new NavigationEndpoint_default(data2.defaultServiceEndpoint);
    this.toggled_endpoint = new NavigationEndpoint_default(data2.toggledServiceEndpoint);
  }
};
__name(ToggleMenuServiceItem, "ToggleMenuServiceItem");
ToggleMenuServiceItem.type = "ToggleMenuServiceItem";
var ToggleMenuServiceItem_default = ToggleMenuServiceItem;

// dist/src/parser/classes/Tooltip.js
var Tooltip = class extends YTNode {
  constructor(data2) {
    super();
    this.promo_config = {
      promo_id: data2.promoConfig.promoId,
      impression_endpoints: data2.promoConfig.impressionEndpoints.map((endpoint) => new NavigationEndpoint_default(endpoint)),
      accept: new NavigationEndpoint_default(data2.promoConfig.acceptCommand),
      dismiss: new NavigationEndpoint_default(data2.promoConfig.dismissCommand)
    };
    this.target_id = data2.targetId;
    this.details = new Text(data2.detailsText);
    this.suggested_position = data2.suggestedPosition.type;
    this.dismiss_stratedy = data2.dismissStrategy.type;
    this.dwell_time_ms = parseInt(data2.dwellTimeMs);
  }
};
__name(Tooltip, "Tooltip");
Tooltip.type = "Tooltip";
var Tooltip_default = Tooltip;

// dist/src/parser/classes/TopicChannelDetails.js
var TopicChannelDetails = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.title = new Text(data2.title);
    this.avatar = Thumbnail.fromResponse((_a7 = data2.thumbnail) !== null && _a7 !== void 0 ? _a7 : data2.avatar);
    this.subtitle = new Text(data2.subtitle);
    this.subscribe_button = parser_default.parseItem(data2.subscribeButton, SubscribeButton_default);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
  }
};
__name(TopicChannelDetails, "TopicChannelDetails");
TopicChannelDetails.type = "TopicChannelDetails";
var TopicChannelDetails_default = TopicChannelDetails;

// dist/src/parser/classes/TwoColumnBrowseResults.js
var TwoColumnBrowseResults = class extends YTNode {
  constructor(data2) {
    super();
    this.tabs = parser_default.parse(data2.tabs);
    this.secondary_contents = parser_default.parse(data2.secondaryContents);
  }
};
__name(TwoColumnBrowseResults, "TwoColumnBrowseResults");
TwoColumnBrowseResults.type = "TwoColumnBrowseResults";
var TwoColumnBrowseResults_default = TwoColumnBrowseResults;

// dist/src/parser/classes/TwoColumnSearchResults.js
var TwoColumnSearchResults = class extends YTNode {
  constructor(data2) {
    super();
    this.primary_contents = parser_default.parse(data2.primaryContents);
    this.secondary_contents = parser_default.parse(data2.secondaryContents);
  }
};
__name(TwoColumnSearchResults, "TwoColumnSearchResults");
TwoColumnSearchResults.type = "TwoColumnSearchResults";
var TwoColumnSearchResults_default = TwoColumnSearchResults;

// dist/src/parser/classes/TwoColumnWatchNextResults.js
var _TwoColumnWatchNextResults_instances;
var _TwoColumnWatchNextResults_parseAutoplaySet;
var TwoColumnWatchNextResults = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d, _e;
    super();
    _TwoColumnWatchNextResults_instances.add(this);
    this.results = parser_default.parseArray((_a7 = data2.results) === null || _a7 === void 0 ? void 0 : _a7.results.contents);
    this.secondary_results = parser_default.parseArray((_b = data2.secondaryResults) === null || _b === void 0 ? void 0 : _b.secondaryResults.results);
    this.conversation_bar = parser_default.parseItem(data2 === null || data2 === void 0 ? void 0 : data2.conversationBar);
    const playlistData = (_c = data2.playlist) === null || _c === void 0 ? void 0 : _c.playlist;
    if (playlistData) {
      this.playlist = {
        id: playlistData.playlistId,
        title: playlistData.title,
        author: ((_d = playlistData.shortBylineText) === null || _d === void 0 ? void 0 : _d.simpleText) ? new Text(playlistData.shortBylineText) : new Author_default(playlistData.longBylineText),
        contents: parser_default.parseArray(playlistData.contents),
        current_index: playlistData.currentIndex,
        is_infinite: !!playlistData.isInfinite,
        menu: parser_default.parseItem(playlistData.menu, Menu_default)
      };
    }
    const autoplayData = (_e = data2.autoplay) === null || _e === void 0 ? void 0 : _e.autoplay;
    if (autoplayData) {
      this.autoplay = {
        sets: autoplayData.sets.map((set) => __classPrivateFieldGet(this, _TwoColumnWatchNextResults_instances, "m", _TwoColumnWatchNextResults_parseAutoplaySet).call(this, set))
      };
      if (autoplayData.modifiedSets) {
        this.autoplay.modified_sets = autoplayData.modifiedSets.map((set) => __classPrivateFieldGet(this, _TwoColumnWatchNextResults_instances, "m", _TwoColumnWatchNextResults_parseAutoplaySet).call(this, set));
      }
      if (autoplayData.countDownSecs) {
        this.autoplay.count_down_secs = autoplayData.countDownSecs;
      }
    }
  }
};
__name(TwoColumnWatchNextResults, "TwoColumnWatchNextResults");
_TwoColumnWatchNextResults_instances = /* @__PURE__ */ new WeakSet(), _TwoColumnWatchNextResults_parseAutoplaySet = /* @__PURE__ */ __name(function _TwoColumnWatchNextResults_parseAutoplaySet2(data2) {
  const result = {
    autoplay_video: new NavigationEndpoint_default(data2.autoplayVideo)
  };
  if (data2.nextButtonVideo) {
    result.next_button_video = new NavigationEndpoint_default(data2.nextButtonVideo);
  }
  return result;
}, "_TwoColumnWatchNextResults_parseAutoplaySet");
TwoColumnWatchNextResults.type = "TwoColumnWatchNextResults";
var TwoColumnWatchNextResults_default = TwoColumnWatchNextResults;

// dist/src/parser/classes/UniversalWatchCard.js
var UniversalWatchCard = class extends YTNode {
  constructor(data2) {
    super();
    this.header = parser_default.parseItem(data2.header);
    this.call_to_action = parser_default.parseItem(data2.callToAction);
    this.sections = parser_default.parseArray(data2.sections);
    if (Reflect.has(data2, "collapsedLabel")) {
      this.collapsed_label = new Text(data2.collapsedLabel);
    }
  }
};
__name(UniversalWatchCard, "UniversalWatchCard");
UniversalWatchCard.type = "UniversalWatchCard";
var UniversalWatchCard_default = UniversalWatchCard;

// dist/src/parser/classes/UpsellDialog.js
var UpsellDialog = class extends YTNode {
  constructor(data2) {
    super();
    this.message_title = new Text(data2.dialogMessageTitle);
    this.message_text = new Text(data2.dialogMessageText);
    this.action_button = parser_default.parseItem(data2.actionButton, Button_default);
    this.dismiss_button = parser_default.parseItem(data2.dismissButton, Button_default);
    this.is_visible = data2.isVisible;
  }
};
__name(UpsellDialog, "UpsellDialog");
UpsellDialog.type = "UpsellDialog";
var UpsellDialog_default = UpsellDialog;

// dist/src/parser/classes/VerticalList.js
var VerticalList = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parseArray(data2.items);
    this.collapsed_item_count = data2.collapsedItemCount;
    this.collapsed_state_button_text = new Text(data2.collapsedStateButtonText);
  }
  get contents() {
    return this.items;
  }
};
__name(VerticalList, "VerticalList");
VerticalList.type = "VerticalList";
var VerticalList_default = VerticalList;

// dist/src/parser/classes/VerticalWatchCardList.js
var VerticalWatchCardList = class extends YTNode {
  constructor(data2) {
    super();
    this.items = parser_default.parseArray(data2.items);
    this.view_all_text = new Text(data2.viewAllText);
    this.view_all_endpoint = new NavigationEndpoint_default(data2.viewAllEndpoint);
  }
  get contents() {
    return this.items;
  }
};
__name(VerticalWatchCardList, "VerticalWatchCardList");
VerticalWatchCardList.type = "VerticalWatchCardList";
var VerticalWatchCardList_default = VerticalWatchCardList;

// dist/src/parser/classes/VideoInfoCardContent.js
var VideoInfoCardContent = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.videoTitle);
    this.channel_name = new Text(data2.channelName);
    this.view_count = new Text(data2.viewCountText);
    this.video_thumbnails = Thumbnail.fromResponse(data2.videoThumbnail);
    this.duration = new Text(data2.lengthString);
    this.endpoint = new NavigationEndpoint_default(data2.action);
  }
};
__name(VideoInfoCardContent, "VideoInfoCardContent");
VideoInfoCardContent.type = "VideoInfoCardContent";
var VideoInfoCardContent_default = VideoInfoCardContent;

// dist/src/parser/classes/VideoOwner.js
var VideoOwner = class extends YTNode {
  constructor(data2) {
    super();
    this.subscription_button = data2.subscriptionButton;
    this.subscriber_count = new Text(data2.subscriberCountText);
    this.author = new Author_default(Object.assign(Object.assign({}, data2.title), { navigationEndpoint: data2.navigationEndpoint }), data2.badges, data2.thumbnail);
  }
};
__name(VideoOwner, "VideoOwner");
VideoOwner.type = "VideoOwner";
var VideoOwner_default = VideoOwner;

// dist/src/parser/classes/VideoPrimaryInfo.js
var VideoPrimaryInfo = class extends YTNode {
  constructor(data2) {
    var _a7, _b, _c, _d;
    super();
    this.title = new Text(data2.title);
    if (Reflect.has(data2, "superTitleLink")) {
      this.super_title_link = new Text(data2.superTitleLink);
    }
    this.view_count = new Text((_b = (_a7 = data2.viewCount) === null || _a7 === void 0 ? void 0 : _a7.videoViewCountRenderer) === null || _b === void 0 ? void 0 : _b.viewCount);
    this.short_view_count = new Text((_d = (_c = data2.viewCount) === null || _c === void 0 ? void 0 : _c.videoViewCountRenderer) === null || _d === void 0 ? void 0 : _d.shortViewCount);
    this.badges = parser_default.parseArray(data2.badges, MetadataBadge_default);
    this.published = new Text(data2.dateText);
    this.relative_date = new Text(data2.relativeDateText);
    this.menu = parser_default.parseItem(data2.videoActions, Menu_default);
  }
};
__name(VideoPrimaryInfo, "VideoPrimaryInfo");
VideoPrimaryInfo.type = "VideoPrimaryInfo";
var VideoPrimaryInfo_default = VideoPrimaryInfo;

// dist/src/parser/classes/VideoSecondaryInfo.js
var _VideoSecondaryInfo_instances;
var _VideoSecondaryInfo_convertAttributedDescriptionToRuns;
var VideoSecondaryInfo = class extends YTNode {
  constructor(data2) {
    super();
    _VideoSecondaryInfo_instances.add(this);
    this.owner = parser_default.parseItem(data2.owner, VideoOwner_default);
    this.description = new Text(data2.description);
    if (Reflect.has(data2, "attributedDescription")) {
      this.description = new Text(__classPrivateFieldGet(this, _VideoSecondaryInfo_instances, "m", _VideoSecondaryInfo_convertAttributedDescriptionToRuns).call(this, data2.attributedDescription));
    }
    this.subscribe_button = parser_default.parseItem(data2.subscribeButton, [SubscribeButton_default, Button_default]);
    this.metadata = parser_default.parseItem(data2.metadataRowContainer, MetadataRowContainer_default);
    this.show_more_text = data2.showMoreText;
    this.show_less_text = data2.showLessText;
    this.default_expanded = data2.defaultExpanded;
    this.description_collapsed_lines = data2.descriptionCollapsedLines;
  }
};
__name(VideoSecondaryInfo, "VideoSecondaryInfo");
_VideoSecondaryInfo_instances = /* @__PURE__ */ new WeakSet(), _VideoSecondaryInfo_convertAttributedDescriptionToRuns = /* @__PURE__ */ __name(function _VideoSecondaryInfo_convertAttributedDescriptionToRuns2(description) {
  const runs = [];
  const content = description.content;
  const command_runs = description.commandRuns;
  let last_end_index = 0;
  if (command_runs) {
    for (const item of command_runs) {
      const length = item.length;
      const start_index = item.startIndex;
      if (start_index > last_end_index) {
        runs.push({
          text: content.slice(last_end_index, start_index)
        });
      }
      if (Reflect.has(item, "onTap")) {
        let attachment = null;
        if (Reflect.has(description, "attachmentRuns")) {
          const attachment_runs = description.attachmentRuns;
          for (const attatchment_run of attachment_runs) {
            if (attatchment_run.startIndex - 2 == start_index) {
              attachment = attatchment_run;
              break;
            }
          }
        }
        if (attachment) {
          runs.push({
            text: content.slice(start_index, start_index + length),
            navigationEndpoint: item.onTap,
            attachment
          });
        } else {
          runs.push({
            text: content.slice(start_index, start_index + length),
            navigationEndpoint: item.onTap
          });
        }
      }
      last_end_index = start_index + length;
    }
    if (last_end_index < content.length) {
      runs.push({
        text: content.slice(last_end_index)
      });
    }
  } else {
    runs.push({
      text: content
    });
  }
  return { runs };
}, "_VideoSecondaryInfo_convertAttributedDescriptionToRuns");
VideoSecondaryInfo.type = "VideoSecondaryInfo";
var VideoSecondaryInfo_default = VideoSecondaryInfo;

// dist/src/parser/classes/WatchCardCompactVideo.js
var WatchCardCompactVideo = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.subtitle = new Text(data2.subtitle);
    this.duration = {
      text: new Text(data2.lengthText).toString(),
      seconds: timeToSeconds(data2.lengthText.simpleText)
    };
    this.style = data2.style;
  }
};
__name(WatchCardCompactVideo, "WatchCardCompactVideo");
WatchCardCompactVideo.type = "WatchCardCompactVideo";
var WatchCardCompactVideo_default = WatchCardCompactVideo;

// dist/src/parser/classes/WatchCardHeroVideo.js
var WatchCardHeroVideo = class extends YTNode {
  constructor(data2) {
    var _a7;
    super();
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.call_to_action_button = parser_default.parseItem(data2.callToActionButton);
    this.hero_image = parser_default.parseItem(data2.heroImage);
    this.label = ((_a7 = data2.lengthText) === null || _a7 === void 0 ? void 0 : _a7.accessibility.accessibilityData.label) || "";
  }
};
__name(WatchCardHeroVideo, "WatchCardHeroVideo");
WatchCardHeroVideo.type = "WatchCardHeroVideo";
var WatchCardHeroVideo_default = WatchCardHeroVideo;

// dist/src/parser/classes/WatchCardRichHeader.js
var WatchCardRichHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.title = new Text(data2.title);
    this.title_endpoint = new NavigationEndpoint_default(data2.titleNavigationEndpoint);
    this.subtitle = new Text(data2.subtitle);
    this.author = new Author_default(data2, data2.titleBadge ? [data2.titleBadge] : null, data2.avatar);
    this.author.name = this.title.toString();
    this.style = data2.style;
  }
};
__name(WatchCardRichHeader, "WatchCardRichHeader");
WatchCardRichHeader.type = "WatchCardRichHeader";
var WatchCardRichHeader_default = WatchCardRichHeader;

// dist/src/parser/classes/WatchCardSectionSequence.js
var WatchCardSectionSequence = class extends YTNode {
  constructor(data2) {
    super();
    this.lists = parser_default.parseArray(data2.lists);
  }
};
__name(WatchCardSectionSequence, "WatchCardSectionSequence");
WatchCardSectionSequence.type = "WatchCardSectionSequence";
var WatchCardSectionSequence_default = WatchCardSectionSequence;

// dist/src/parser/classes/WatchNextTabbedResults.js
var WatchNextTabbedResults = class extends TwoColumnBrowseResults_default {
  constructor(data2) {
    super(data2);
  }
};
__name(WatchNextTabbedResults, "WatchNextTabbedResults");
WatchNextTabbedResults.type = "WatchNextTabbedResults";
var WatchNextTabbedResults_default = WatchNextTabbedResults;

// dist/src/parser/classes/ytkids/AnchoredSection.js
var AnchoredSection = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.title = data2.title;
    this.content = parser_default.parseItem(data2.content, SectionList_default);
    this.endpoint = new NavigationEndpoint_default(data2.navigationEndpoint);
    this.category_assets = {
      asset_key: (_a7 = data2.categoryAssets) === null || _a7 === void 0 ? void 0 : _a7.assetKey,
      background_color: (_b = data2.categoryAssets) === null || _b === void 0 ? void 0 : _b.backgroundColor
    };
    this.category_type = data2.categoryType;
  }
};
__name(AnchoredSection, "AnchoredSection");
AnchoredSection.type = "AnchoredSection";
var AnchoredSection_default = AnchoredSection;

// dist/src/parser/classes/ytkids/KidsCategoryTab.js
var KidsCategoryTab = class extends YTNode {
  constructor(data2) {
    var _a7, _b;
    super();
    this.title = new Text(data2.title);
    this.category_assets = {
      asset_key: (_a7 = data2.categoryAssets) === null || _a7 === void 0 ? void 0 : _a7.assetKey,
      background_color: (_b = data2.categoryAssets) === null || _b === void 0 ? void 0 : _b.backgroundColor
    };
    this.category_type = data2.categoryType;
    this.endpoint = new NavigationEndpoint_default(data2.endpoint);
  }
};
__name(KidsCategoryTab, "KidsCategoryTab");
KidsCategoryTab.type = "KidsCategoryTab";
var KidsCategoryTab_default = KidsCategoryTab;

// dist/src/parser/classes/ytkids/KidsCategoriesHeader.js
var KidsCategoriesHeader = class extends YTNode {
  constructor(data2) {
    super();
    this.category_tabs = parser_default.parseArray(data2.categoryTabs, KidsCategoryTab_default);
    this.privacy_button = parser_default.parseItem(data2.privacyButtonRenderer, Button_default);
  }
};
__name(KidsCategoriesHeader, "KidsCategoriesHeader");
KidsCategoriesHeader.type = "kidsCategoriesHeader";
var KidsCategoriesHeader_default = KidsCategoriesHeader;

// dist/src/parser/classes/ytkids/KidsHomeScreen.js
var KidsHomeScreen = class extends YTNode {
  constructor(data2) {
    super();
    this.anchors = parser_default.parseArray(data2.anchors, AnchoredSection_default);
  }
};
__name(KidsHomeScreen, "KidsHomeScreen");
KidsHomeScreen.type = "kidsHomeScreen";
var KidsHomeScreen_default = KidsHomeScreen;

// dist/src/parser/generator.js
var generator_exports = {};
__export(generator_exports, {
  YTNodeGenerator: () => YTNodeGenerator
});
var _a3;
var _YTNodeGenerator_ignored_keys;
var _YTNodeGenerator_renderers_examples;
var _YTNodeGenerator_camelToSnake;
var _YTNodeGenerator_logNewClass;
var _YTNodeGenerator_logChangedKeys;
var _YTNodeGenerator_accessDataFromKeyPath;
var _YTNodeGenerator_hasDataFromKeyPath;
var _YTNodeGenerator_passOne;
var _YTNodeGenerator_passTwo;
var _YTNodeGenerator_introspect;
var YTNodeGenerator = class {
  static isIgnoredKey(key) {
    return typeof key === "string" && __classPrivateFieldGet(this, _a3, "f", _YTNodeGenerator_ignored_keys).has(key);
  }
  static mergeKeyInfo(key_info, new_key_info) {
    const changed_keys = /* @__PURE__ */ new Map();
    const current_keys = new Set(key_info.map(([key]) => key));
    const new_keys = new Set(new_key_info.map(([key]) => key));
    const added_keys = new_key_info.filter(([key]) => !current_keys.has(key));
    const removed_keys = key_info.filter(([key]) => !new_keys.has(key));
    const common_keys = key_info.filter(([key]) => new_keys.has(key));
    const new_key_map = new Map(new_key_info);
    for (const [key, type] of common_keys) {
      const new_type = new_key_map.get(key);
      if (!new_type)
        continue;
      if (type.type !== new_type.type) {
        changed_keys.set(key, {
          type: "unknown",
          optional: true
        });
        continue;
      }
      switch (type.type) {
        case "object":
          {
            if (new_type.type !== "object")
              continue;
            const { resolved_key_info: resolved_key_info2 } = this.mergeKeyInfo(type.keys, new_type.keys);
            const resolved_key = {
              type: "object",
              keys: resolved_key_info2,
              optional: type.optional || new_type.optional
            };
            const did_change = JSON.stringify(resolved_key) !== JSON.stringify(type);
            if (did_change)
              changed_keys.set(key, resolved_key);
          }
          break;
        case "renderer":
          {
            if (new_type.type !== "renderer")
              continue;
            const union_map = Object.assign(Object.assign({}, type.renderers), new_type.renderers);
            const either_optional = type.optional || new_type.optional;
            const resolved_key = {
              type: "renderer",
              renderers: union_map,
              optional: either_optional
            };
            const did_change = JSON.stringify(Object.assign(Object.assign({}, resolved_key), { renderers: Object.keys(resolved_key.renderers) })) !== JSON.stringify(Object.assign(Object.assign({}, type), { renderers: Object.keys(type.renderers) }));
            if (did_change)
              changed_keys.set(key, resolved_key);
          }
          break;
        case "renderer_list":
          {
            if (new_type.type !== "renderer_list")
              continue;
            const union_map = Object.assign(Object.assign({}, type.renderers), new_type.renderers);
            const either_optional = type.optional || new_type.optional;
            const resolved_key = {
              type: "renderer_list",
              renderers: union_map,
              optional: either_optional
            };
            const did_change = JSON.stringify(Object.assign(Object.assign({}, resolved_key), { renderers: Object.keys(resolved_key.renderers) })) !== JSON.stringify(Object.assign(Object.assign({}, type), { renderers: Object.keys(type.renderers) }));
            if (did_change)
              changed_keys.set(key, resolved_key);
          }
          break;
        case "misc":
          {
            if (new_type.type !== "misc")
              continue;
            if (type.misc_type !== new_type.misc_type) {
              changed_keys.set(key, {
                type: "unknown",
                optional: true
              });
            }
            switch (type.misc_type) {
              case "Author":
                {
                  if (new_type.misc_type !== "Author")
                    break;
                  const had_optional_param = type.params[1] || new_type.params[1];
                  const either_optional = type.optional || new_type.optional;
                  const resolved_key = {
                    type: "misc",
                    misc_type: "Author",
                    optional: either_optional,
                    params: [new_type.params[0], had_optional_param]
                  };
                  const did_change = JSON.stringify(resolved_key) !== JSON.stringify(type);
                  if (did_change)
                    changed_keys.set(key, resolved_key);
                }
                break;
            }
          }
          break;
        case "primative":
          {
            if (new_type.type !== "primative")
              continue;
            const resolved_key = {
              type: "primative",
              typeof: Array.from(/* @__PURE__ */ new Set([...new_type.typeof, ...type.typeof])),
              optional: type.optional || new_type.optional
            };
            const did_change = JSON.stringify(resolved_key) !== JSON.stringify(type);
            if (did_change)
              changed_keys.set(key, resolved_key);
          }
          break;
      }
    }
    for (const [key, type] of added_keys) {
      changed_keys.set(key, Object.assign(Object.assign({}, type), { optional: true }));
    }
    for (const [key, type] of removed_keys) {
      changed_keys.set(key, Object.assign(Object.assign({}, type), { optional: true }));
    }
    const unchanged_keys = key_info.filter(([key]) => !changed_keys.has(key));
    const resolved_key_info_map = new Map([...unchanged_keys, ...changed_keys]);
    const resolved_key_info = [...resolved_key_info_map.entries()];
    return {
      resolved_key_info,
      changed_keys: [...changed_keys.entries()]
    };
  }
  static createRuntimeClass(classname, key_info) {
    var _b, _key_info;
    __classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_logNewClass).call(this, classname, key_info);
    const node = (_b = /* @__PURE__ */ __name(class extends YTNode {
      static set key_info(key_info2) {
        __classPrivateFieldSet(this, _b, new Map(key_info2), "f", _key_info);
      }
      static get key_info() {
        return [...__classPrivateFieldGet(this, _b, "f", _key_info).entries()];
      }
      constructor(data2) {
        super();
        const { key_info: key_info2, unimplemented_dependencies } = YTNodeGenerator.introspect(data2);
        const { resolved_key_info, changed_keys } = YTNodeGenerator.mergeKeyInfo(node.key_info, key_info2);
        const did_change = changed_keys.length > 0;
        if (did_change) {
          node.key_info = resolved_key_info;
          __classPrivateFieldGet(YTNodeGenerator, _a3, "m", _YTNodeGenerator_logChangedKeys).call(YTNodeGenerator, classname, node.key_info, changed_keys);
        }
        for (const [name, data3] of unimplemented_dependencies)
          YTNodeGenerator.generateRuntimeClass(name, data3);
        for (const [key, value] of key_info2) {
          let snake_key = __classPrivateFieldGet(YTNodeGenerator, _a3, "m", _YTNodeGenerator_camelToSnake).call(YTNodeGenerator, key);
          if (value.type === "misc" && value.misc_type === "NavigationEndpoint")
            snake_key = "endpoint";
          Reflect.set(this, snake_key, YTNodeGenerator.parse(key, value, data2));
        }
      }
    }, "_b"), __setFunctionName(_b, "node"), _b.type = classname, _key_info = { value: /* @__PURE__ */ new Map() }, _b);
    node.key_info = key_info;
    Object.defineProperty(node, "name", { value: classname, writable: false });
    return node;
  }
  static introspect(classdata) {
    const key_info = __classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_introspect).call(this, classdata);
    const dependencies = /* @__PURE__ */ new Map();
    for (const [, value] of key_info) {
      if (value.type === "renderer" || value.type === "renderer_list")
        for (const renderer of value.renderers) {
          const example = __classPrivateFieldGet(this, _a3, "f", _YTNodeGenerator_renderers_examples)[renderer];
          if (example)
            dependencies.set(renderer, example);
        }
    }
    const unimplemented_dependencies = Array.from(dependencies).filter(([classname]) => !parser_default2.hasParser(classname));
    return {
      key_info,
      unimplemented_dependencies
    };
  }
  static generateRuntimeClass(classname, classdata) {
    const { key_info, unimplemented_dependencies } = this.introspect(classdata);
    const JITNode = this.createRuntimeClass(classname, key_info);
    parser_default2.addRuntimeParser(classname, JITNode);
    for (const [name, data2] of unimplemented_dependencies)
      this.generateRuntimeClass(name, data2);
    return JITNode;
  }
  static generateTypescriptClass(classname, key_info) {
    const props = [];
    const constructor_lines = [
      "super();"
    ];
    for (const [key, value] of key_info) {
      let snake_key = __classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_camelToSnake).call(this, key);
      if (value.type === "misc" && value.misc_type === "NavigationEndpoint")
        snake_key = "endpoint";
      props.push(`${snake_key}${value.optional ? "?" : ""}: ${this.toTypeDeclaration(value)};`);
      constructor_lines.push(`this.${snake_key} = ${this.toParser(key, value)};`);
    }
    return `class ${classname} extends YTNode {
  static type = '${classname}';

  ${props.join("\n  ")}

  constructor(data: RawNode) {
    ${constructor_lines.join("\n    ")}
  }
}
`;
  }
  static toTypeDeclaration(inference_type, indentation = 0) {
    switch (inference_type.type) {
      case "renderer": {
        return `${inference_type.renderers.map((type) => `YTNodes.${type}`).join(" | ")} | null`;
      }
      case "renderer_list": {
        return `ObservedArray<${inference_type.renderers.map((type) => `YTNodes.${type}`).join(" | ")}> | null`;
      }
      case "object": {
        return `{
${inference_type.keys.map(([key, value]) => `${" ".repeat((indentation + 2) * 2)}${__classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_camelToSnake).call(this, key)}${value.optional ? "?" : ""}: ${this.toTypeDeclaration(value, indentation + 1)}`).join(",\n")}
${" ".repeat((indentation + 1) * 2)}}`;
      }
      case "misc":
        switch (inference_type.misc_type) {
          case "Thumbnail":
            return "Thumbnail[]";
          default:
            return inference_type.misc_type;
        }
      case "primative":
        return inference_type.typeof.join(" | ");
      case "unknown":
        return "/* TODO: determine correct type */ unknown";
    }
  }
  static toParser(key, inference_type, key_path = ["data"], indentation = 1) {
    let parser = "undefined";
    switch (inference_type.type) {
      case "renderer":
        {
          parser = `Parser.parseItem(${key_path.join(".")}.${key}, [ ${inference_type.renderers.map((type) => `YTNodes.${type}`).join(", ")} ])`;
        }
        break;
      case "renderer_list":
        {
          parser = `Parser.parse(${key_path.join(".")}.${key}, true, [ ${inference_type.renderers.map((type) => `YTNodes.${type}`).join(", ")} ])`;
        }
        break;
      case "object":
        {
          const new_keypath = [...key_path, key];
          parser = `{
${inference_type.keys.map(([key2, value]) => `${" ".repeat((indentation + 2) * 2)}${__classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_camelToSnake).call(this, key2)}: ${this.toParser(key2, value, new_keypath, indentation + 1)}`).join(",\n")}
${" ".repeat((indentation + 1) * 2)}}`;
        }
        break;
      case "misc":
        switch (inference_type.misc_type) {
          case "Thumbnail":
            parser = `Thumbnail.fromResponse(${key_path.join(".")}.${key})`;
            break;
          case "Author": {
            const author_parser = `new Author(${key_path.join(".")}.${inference_type.params[0]}, ${inference_type.params[1] ? `${key_path.join(".")}.${inference_type.params[1]}` : "undefined"})`;
            if (inference_type.optional)
              return `Reflect.has(${key_path.join(".")}, '${inference_type.params[0]}') ? ${author_parser} : undefined`;
            return author_parser;
          }
          default:
            parser = `new ${inference_type.misc_type}(${key_path.join(".")}.${key})`;
            break;
        }
        if (parser === "undefined")
          throw new Error("Unreachable code reached! Switch missing case!");
        break;
      case "primative":
      case "unknown":
        parser = `${key_path.join(".")}.${key}`;
        break;
    }
    if (inference_type.optional)
      return `Reflect.has(${key_path.join(".")}, '${key}') ? ${parser} : undefined`;
    return parser;
  }
  static parse(key, inference_type, data2, key_path = ["data"]) {
    const should_optional = !inference_type.optional || __classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_hasDataFromKeyPath).call(this, { data: data2 }, [...key_path, key]);
    switch (inference_type.type) {
      case "renderer": {
        return should_optional ? parser_default2.parseItem(__classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data: data2 }, [...key_path, key]), inference_type.renderers.map((type) => parser_default2.getParserByName(type))) : void 0;
      }
      case "renderer_list": {
        return should_optional ? parser_default2.parse(__classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data: data2 }, [...key_path, key]), true, inference_type.renderers.map((type) => parser_default2.getParserByName(type))) : void 0;
      }
      case "object": {
        const obj = {};
        const new_key_path = [...key_path, key];
        for (const [key2, value] of inference_type.keys) {
          obj[key2] = should_optional ? this.parse(key2, value, data2, new_key_path) : void 0;
        }
        return obj;
      }
      case "misc":
        switch (inference_type.misc_type) {
          case "NavigationEndpoint":
            return should_optional ? new NavigationEndpoint_default(__classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data: data2 }, [...key_path, key])) : void 0;
          case "Text":
            return should_optional ? new Text(__classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data: data2 }, [...key_path, key])) : void 0;
          case "Thumbnail":
            return should_optional ? Thumbnail.fromResponse(__classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data: data2 }, [...key_path, key])) : void 0;
          case "Author": {
            const author_should_optional = !inference_type.optional || __classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_hasDataFromKeyPath).call(this, { data: data2 }, [...key_path, inference_type.params[0]]);
            return author_should_optional ? new Author_default(__classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data: data2 }, [...key_path, inference_type.params[0]]), inference_type.params[1] ? __classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data: data2 }, [...key_path, inference_type.params[1]]) : void 0) : void 0;
          }
        }
        throw new Error("Unreachable code reached! Switch missing case!");
      case "primative":
      case "unknown":
        return __classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data: data2 }, [...key_path, key]);
    }
  }
  static inferType(key, value) {
    let return_value = false;
    if (return_value = this.isRenderer(value)) {
      __classPrivateFieldGet(this, _a3, "f", _YTNodeGenerator_renderers_examples)[return_value] = value[Reflect.ownKeys(value)[0]];
      return {
        type: "renderer",
        renderers: [return_value],
        optional: false
      };
    }
    if (return_value = this.isRendererList(value)) {
      for (const [key2, value2] of Object.entries(return_value)) {
        __classPrivateFieldGet(this, _a3, "f", _YTNodeGenerator_renderers_examples)[key2] = value2;
      }
      return {
        type: "renderer_list",
        renderers: Object.keys(return_value),
        optional: false
      };
    }
    if (return_value = this.isMiscType(key, value)) {
      return return_value;
    }
    const primative_type = typeof value;
    if (primative_type === "object")
      return {
        type: "object",
        keys: Object.entries(value).map(([key2, value2]) => [key2, this.inferType(key2, value2)]),
        optional: false
      };
    return {
      type: "primative",
      typeof: [primative_type],
      optional: false
    };
  }
  static isRendererList(value) {
    const arr = Array.isArray(value);
    const is_list = arr && value.every((item) => this.isRenderer(item));
    return is_list ? Object.fromEntries(value.map((item) => {
      const key = Reflect.ownKeys(item)[0].toString();
      return [parser_default2.sanitizeClassName(key), item[key]];
    })) : false;
  }
  static isMiscType(key, value) {
    if ((key.endsWith("Endpoint") || key.endsWith("Command") || key === "endpoint") && typeof value === "object") {
      return {
        type: "misc",
        endpoint: new NavigationEndpoint_default(value),
        optional: false,
        misc_type: "NavigationEndpoint"
      };
    }
    if (typeof value === "object" && (Reflect.has(value, "simpleText") || Reflect.has(value, "runs"))) {
      const textNode = new Text(value);
      return {
        type: "misc",
        misc_type: "Text",
        optional: false,
        endpoint: textNode.endpoint,
        text: textNode.toString()
      };
    }
    if (typeof value === "object" && Reflect.has(value, "thumbnails") && Array.isArray(value.thumbnails)) {
      return {
        type: "misc",
        misc_type: "Thumbnail",
        optional: false
      };
    }
    return false;
  }
  static isRenderer(value) {
    const is_object = typeof value === "object";
    if (!is_object)
      return false;
    const keys = Reflect.ownKeys(value);
    if (keys.length === 1 && keys[0].toString().includes("Renderer")) {
      return parser_default2.sanitizeClassName(keys[0].toString());
    }
    return false;
  }
};
__name(YTNodeGenerator, "YTNodeGenerator");
_a3 = YTNodeGenerator, _YTNodeGenerator_camelToSnake = /* @__PURE__ */ __name(function _YTNodeGenerator_camelToSnake2(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}, "_YTNodeGenerator_camelToSnake"), _YTNodeGenerator_logNewClass = /* @__PURE__ */ __name(function _YTNodeGenerator_logNewClass2(classname, key_info) {
  console.warn(`${classname} not found!
This is a bug, want to help us fix it? Follow the instructions at ${Platform.shim.info.repo_url}/blob/main/docs/updating-the-parser.md or report it at ${Platform.shim.info.bugs_url}!
Introspected and JIT generated this class in the meantime:
${this.generateTypescriptClass(classname, key_info)}`);
}, "_YTNodeGenerator_logNewClass"), _YTNodeGenerator_logChangedKeys = /* @__PURE__ */ __name(function _YTNodeGenerator_logChangedKeys2(classname, key_info, changed_keys) {
  console.warn(`${classname} changed!
The following keys where altered: ${changed_keys.map(([key]) => __classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_camelToSnake).call(this, key)).join(", ")}
The class has changed to:
${this.generateTypescriptClass(classname, key_info)}`);
}, "_YTNodeGenerator_logChangedKeys"), _YTNodeGenerator_accessDataFromKeyPath = /* @__PURE__ */ __name(function _YTNodeGenerator_accessDataFromKeyPath2(root, key_path) {
  let data2 = root;
  for (const key of key_path)
    data2 = data2[key];
  return data2;
}, "_YTNodeGenerator_accessDataFromKeyPath"), _YTNodeGenerator_hasDataFromKeyPath = /* @__PURE__ */ __name(function _YTNodeGenerator_hasDataFromKeyPath2(root, key_path) {
  let data2 = root;
  for (const key of key_path)
    if (!Reflect.has(data2, key))
      return false;
    else
      data2 = data2[key];
  return true;
}, "_YTNodeGenerator_hasDataFromKeyPath"), _YTNodeGenerator_passOne = /* @__PURE__ */ __name(function _YTNodeGenerator_passOne2(classdata) {
  const keys = Reflect.ownKeys(classdata).filter((key) => !this.isIgnoredKey(key)).filter((key) => typeof key === "string");
  const key_info = keys.map((key) => {
    const value = classdata[key];
    const inferred_type = this.inferType(key, value);
    return [
      key,
      inferred_type
    ];
  });
  return key_info;
}, "_YTNodeGenerator_passOne"), _YTNodeGenerator_passTwo = /* @__PURE__ */ __name(function _YTNodeGenerator_passTwo2(key_info) {
  var _b;
  const channel_nav = key_info.filter(([, value]) => {
    var _b2;
    if (value.type !== "misc")
      return false;
    if (!(value.misc_type === "NavigationEndpoint" || value.misc_type === "Text"))
      return false;
    return ((_b2 = value.endpoint) === null || _b2 === void 0 ? void 0 : _b2.metadata.page_type) === "WEB_PAGE_TYPE_CHANNEL";
  });
  const most_probable_match = channel_nav.sort(([, a], [, b]) => {
    if (a.type !== "misc" || b.type !== "misc")
      return 0;
    if (a.misc_type !== "Text" || b.misc_type !== "Text")
      return 0;
    return b.text.length - a.text.length;
  });
  const excluded_keys = /* @__PURE__ */ new Set();
  const cannonical_channel_nav = most_probable_match[0];
  let author;
  if (cannonical_channel_nav) {
    excluded_keys.add(cannonical_channel_nav[0]);
    const keys = key_info.map(([key]) => key);
    const badges = keys.filter((key) => key.endsWith("Badges") || key === "badges");
    const likely_badges = badges.filter((key) => key.startsWith("owner") || key.startsWith("author"));
    const cannonical_badges = (_b = likely_badges[0]) !== null && _b !== void 0 ? _b : badges[0];
    const badge_key_info = key_info.find(([key]) => key === cannonical_badges);
    const is_badges = badge_key_info ? badge_key_info[1].type === "renderer_list" && Reflect.has(badge_key_info[1].renderers, "MetadataBadge") : false;
    if (is_badges && cannonical_badges)
      excluded_keys.add(cannonical_badges);
    author = {
      type: "misc",
      misc_type: "Author",
      optional: false,
      params: [
        cannonical_channel_nav[0],
        is_badges ? cannonical_badges : void 0
      ]
    };
  }
  if (author) {
    key_info.push(["author", author]);
  }
  return key_info.filter(([key]) => !excluded_keys.has(key));
}, "_YTNodeGenerator_passTwo"), _YTNodeGenerator_introspect = /* @__PURE__ */ __name(function _YTNodeGenerator_introspect2(classdata) {
  const key_info = __classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_passOne).call(this, classdata);
  return __classPrivateFieldGet(this, _a3, "m", _YTNodeGenerator_passTwo).call(this, key_info);
}, "_YTNodeGenerator_introspect");
_YTNodeGenerator_ignored_keys = { value: /* @__PURE__ */ new Set([
  "trackingParams",
  "accessibility",
  "accessibilityData"
]) };
_YTNodeGenerator_renderers_examples = { value: {} };

// dist/src/parser/parser.js
var _a4;
var _Parser_errorHandler;
var _Parser_memo;
var _Parser_clearMemo;
var _Parser_createMemo;
var _Parser_addToMemo;
var _Parser_getMemo;
var _Parser_printError;
var _Parser_rt_nodes;
var _Parser_dynamic_nodes;
var Parser = class {
  static setParserErrorHandler(handler) {
    __classPrivateFieldSet(this, _a4, handler, "f", _Parser_errorHandler);
  }
  static parseResponse(data2) {
    var _b, _c, _d, _e;
    const parsed_data = {};
    __classPrivateFieldGet(this, _a4, "m", _Parser_createMemo).call(this);
    const contents = this.parse(data2.contents);
    const contents_memo = __classPrivateFieldGet(this, _a4, "m", _Parser_getMemo).call(this);
    if (contents) {
      parsed_data.contents = contents;
      parsed_data.contents_memo = contents_memo;
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet(this, _a4, "m", _Parser_createMemo).call(this);
    const on_response_received_actions = data2.onResponseReceivedActions ? this.parseRR(data2.onResponseReceivedActions) : null;
    const on_response_received_actions_memo = __classPrivateFieldGet(this, _a4, "m", _Parser_getMemo).call(this);
    if (on_response_received_actions) {
      parsed_data.on_response_received_actions = on_response_received_actions;
      parsed_data.on_response_received_actions_memo = on_response_received_actions_memo;
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet(this, _a4, "m", _Parser_createMemo).call(this);
    const on_response_received_endpoints = data2.onResponseReceivedEndpoints ? this.parseRR(data2.onResponseReceivedEndpoints) : null;
    const on_response_received_endpoints_memo = __classPrivateFieldGet(this, _a4, "m", _Parser_getMemo).call(this);
    if (on_response_received_endpoints) {
      parsed_data.on_response_received_endpoints = on_response_received_endpoints;
      parsed_data.on_response_received_endpoints_memo = on_response_received_endpoints_memo;
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet(this, _a4, "m", _Parser_createMemo).call(this);
    const on_response_received_commands = data2.onResponseReceivedCommands ? this.parseRR(data2.onResponseReceivedCommands) : null;
    const on_response_received_commands_memo = __classPrivateFieldGet(this, _a4, "m", _Parser_getMemo).call(this);
    if (on_response_received_commands) {
      parsed_data.on_response_received_commands = on_response_received_commands;
      parsed_data.on_response_received_commands_memo = on_response_received_commands_memo;
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet(this, _a4, "m", _Parser_createMemo).call(this);
    const continuation_contents = data2.continuationContents ? this.parseLC(data2.continuationContents) : null;
    const continuation_contents_memo = __classPrivateFieldGet(this, _a4, "m", _Parser_getMemo).call(this);
    if (continuation_contents) {
      parsed_data.continuation_contents = continuation_contents;
      parsed_data.continuation_contents_memo = continuation_contents_memo;
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet(this, _a4, "m", _Parser_createMemo).call(this);
    const actions = data2.actions ? this.parseActions(data2.actions) : null;
    const actions_memo = __classPrivateFieldGet(this, _a4, "m", _Parser_getMemo).call(this);
    if (actions) {
      parsed_data.actions = actions;
      parsed_data.actions_memo = actions_memo;
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet(this, _a4, "m", _Parser_createMemo).call(this);
    const live_chat_item_context_menu_supported_renderers = data2.liveChatItemContextMenuSupportedRenderers ? this.parseItem(data2.liveChatItemContextMenuSupportedRenderers) : null;
    const live_chat_item_context_menu_supported_renderers_memo = __classPrivateFieldGet(this, _a4, "m", _Parser_getMemo).call(this);
    if (live_chat_item_context_menu_supported_renderers) {
      parsed_data.live_chat_item_context_menu_supported_renderers = live_chat_item_context_menu_supported_renderers;
      parsed_data.live_chat_item_context_menu_supported_renderers_memo = live_chat_item_context_menu_supported_renderers_memo;
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet(this, _a4, "m", _Parser_createMemo).call(this);
    const header = data2.header ? this.parse(data2.header) : null;
    const header_memo = __classPrivateFieldGet(this, _a4, "m", _Parser_getMemo).call(this);
    if (header) {
      parsed_data.header = header;
      parsed_data.header_memo = header_memo;
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_clearMemo).call(this);
    __classPrivateFieldGet(this, _a4, "m", _Parser_createMemo).call(this);
    const sidebar = data2.sidebar ? this.parseItem(data2.sidebar) : null;
    const sidebar_memo = __classPrivateFieldGet(this, _a4, "m", _Parser_getMemo).call(this);
    if (sidebar) {
      parsed_data.sidebar = sidebar;
      parsed_data.sidebar_memo = sidebar_memo;
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_clearMemo).call(this);
    this.applyMutations(contents_memo, (_c = (_b = data2.frameworkUpdates) === null || _b === void 0 ? void 0 : _b.entityBatchUpdate) === null || _c === void 0 ? void 0 : _c.mutations);
    this.applyMutations(continuation_contents_memo, (_e = (_d = data2.frameworkUpdates) === null || _d === void 0 ? void 0 : _d.entityBatchUpdate) === null || _e === void 0 ? void 0 : _e.mutations);
    const continuation = data2.continuation ? this.parseC(data2.continuation) : null;
    if (continuation) {
      parsed_data.continuation = continuation;
    }
    const metadata = this.parse(data2.metadata);
    if (metadata) {
      parsed_data.metadata = metadata;
    }
    const microformat = this.parseItem(data2.microformat);
    if (microformat) {
      parsed_data.microformat = microformat;
    }
    const overlay = this.parseItem(data2.overlay);
    if (overlay) {
      parsed_data.overlay = overlay;
    }
    const alerts = this.parseArray(data2.alerts, Alert_default);
    if (alerts.length) {
      parsed_data.alerts = alerts;
    }
    const refinements = data2.refinements;
    if (refinements) {
      parsed_data.refinements = refinements;
    }
    const estimated_results = data2.estimatedResults ? parseInt(data2.estimatedResults) : null;
    if (estimated_results) {
      parsed_data.estimated_results = estimated_results;
    }
    const player_overlays = this.parse(data2.playerOverlays);
    if (player_overlays) {
      parsed_data.player_overlays = player_overlays;
    }
    const playback_tracking = data2.playbackTracking ? {
      videostats_watchtime_url: data2.playbackTracking.videostatsWatchtimeUrl.baseUrl,
      videostats_playback_url: data2.playbackTracking.videostatsPlaybackUrl.baseUrl
    } : null;
    if (playback_tracking) {
      parsed_data.playback_tracking = playback_tracking;
    }
    const playability_status = data2.playabilityStatus ? {
      status: data2.playabilityStatus.status,
      reason: data2.playabilityStatus.reason || "",
      embeddable: !!data2.playabilityStatus.playableInEmbed || false,
      audio_only_playablility: this.parseItem(data2.playabilityStatus.audioOnlyPlayability, AudioOnlyPlayability_default),
      error_screen: this.parseItem(data2.playabilityStatus.errorScreen)
    } : null;
    if (playability_status) {
      parsed_data.playability_status = playability_status;
    }
    const streaming_data = data2.streamingData ? {
      expires: new Date(Date.now() + parseInt(data2.streamingData.expiresInSeconds) * 1e3),
      formats: Parser.parseFormats(data2.streamingData.formats),
      adaptive_formats: Parser.parseFormats(data2.streamingData.adaptiveFormats),
      dash_manifest_url: data2.streamingData.dashManifestUrl || null,
      hls_manifest_url: data2.streamingData.hlsManifestUrl || null
    } : void 0;
    if (streaming_data) {
      parsed_data.streaming_data = streaming_data;
    }
    const current_video_endpoint = data2.currentVideoEndpoint ? new NavigationEndpoint_default(data2.currentVideoEndpoint) : null;
    if (current_video_endpoint) {
      parsed_data.current_video_endpoint = current_video_endpoint;
    }
    const endpoint = data2.endpoint ? new NavigationEndpoint_default(data2.endpoint) : null;
    if (endpoint) {
      parsed_data.endpoint = endpoint;
    }
    const captions = this.parseItem(data2.captions, PlayerCaptionsTracklist_default);
    if (captions) {
      parsed_data.captions = captions;
    }
    const video_details = data2.videoDetails ? new VideoDetails(data2.videoDetails) : null;
    if (video_details) {
      parsed_data.video_details = video_details;
    }
    const annotations = this.parseArray(data2.annotations, PlayerAnnotationsExpanded_default);
    if (annotations.length) {
      parsed_data.annotations = annotations;
    }
    const storyboards = this.parseItem(data2.storyboards, [PlayerStoryboardSpec_default, PlayerLiveStoryboardSpec_default]);
    if (storyboards) {
      parsed_data.storyboards = storyboards;
    }
    const endscreen = this.parseItem(data2.endscreen, Endscreen_default);
    if (endscreen) {
      parsed_data.endscreen = endscreen;
    }
    const cards = this.parseItem(data2.cards, CardCollection_default);
    if (cards) {
      parsed_data.cards = cards;
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_createMemo).call(this);
    const items = this.parse(data2.items);
    if (items) {
      parsed_data.items = items;
      parsed_data.items_memo = __classPrivateFieldGet(this, _a4, "m", _Parser_getMemo).call(this);
    }
    __classPrivateFieldGet(this, _a4, "m", _Parser_clearMemo).call(this);
    return parsed_data;
  }
  static parseItem(data2, validTypes) {
    if (!data2)
      return null;
    const keys = Object.keys(data2);
    if (!keys.length)
      return null;
    const classname = this.sanitizeClassName(keys[0]);
    if (!this.shouldIgnore(classname)) {
      try {
        const has_target_class = this.hasParser(classname);
        const TargetClass = has_target_class ? this.getParserByName(classname) : YTNodeGenerator.generateRuntimeClass(classname, data2[keys[0]]);
        if (validTypes) {
          if (Array.isArray(validTypes)) {
            if (!validTypes.some((type) => type.type === TargetClass.type))
              throw new ParsingError(`Type mismatch, got ${classname} but expected one of ${validTypes.map((type) => type.type).join(", ")}`);
          } else if (TargetClass.type !== validTypes.type)
            throw new ParsingError(`Type mismatch, got ${classname} but expected ${validTypes.type}`);
        }
        const result = new TargetClass(data2[keys[0]]);
        __classPrivateFieldGet(this, _a4, "m", _Parser_addToMemo).call(this, classname, result);
        return result;
      } catch (err) {
        __classPrivateFieldGet(this, _a4, "f", _Parser_errorHandler).call(this, { classname, classdata: data2[keys[0]], err });
        return null;
      }
    }
    return null;
  }
  static parseArray(data2, validTypes) {
    if (Array.isArray(data2)) {
      const results = [];
      for (const item of data2) {
        const result = this.parseItem(item, validTypes);
        if (result) {
          results.push(result);
        }
      }
      return observe(results);
    } else if (!data2) {
      return observe([]);
    }
    throw new ParsingError("Expected array but got a single item");
  }
  static parse(data2, requireArray, validTypes) {
    if (!data2)
      return null;
    if (Array.isArray(data2)) {
      const results = [];
      for (const item of data2) {
        const result = this.parseItem(item, validTypes);
        if (result) {
          results.push(result);
        }
      }
      const res = observe(results);
      return requireArray ? res : new SuperParsedResult(observe(results));
    } else if (requireArray) {
      throw new ParsingError("Expected array but got a single item");
    }
    return new SuperParsedResult(this.parseItem(data2, validTypes));
  }
  static parseC(data2) {
    if (data2.timedContinuationData)
      return new Continuation({ continuation: data2.timedContinuationData, type: "timed" });
    return null;
  }
  static parseLC(data2) {
    if (data2.itemSectionContinuation)
      return new ItemSectionContinuation(data2.itemSectionContinuation);
    if (data2.sectionListContinuation)
      return new SectionListContinuation(data2.sectionListContinuation);
    if (data2.liveChatContinuation)
      return new LiveChatContinuation(data2.liveChatContinuation);
    if (data2.musicPlaylistShelfContinuation)
      return new MusicPlaylistShelfContinuation(data2.musicPlaylistShelfContinuation);
    if (data2.musicShelfContinuation)
      return new MusicShelfContinuation(data2.musicShelfContinuation);
    if (data2.gridContinuation)
      return new GridContinuation(data2.gridContinuation);
    if (data2.playlistPanelContinuation)
      return new PlaylistPanelContinuation(data2.playlistPanelContinuation);
    return null;
  }
  static parseRR(actions) {
    return observe(actions.map((action) => {
      if (action.navigateAction)
        return new NavigateAction(action.navigateAction);
      if (action.reloadContinuationItemsCommand)
        return new ReloadContinuationItemsCommand(action.reloadContinuationItemsCommand);
      if (action.appendContinuationItemsAction)
        return new AppendContinuationItemsAction2(action.appendContinuationItemsAction);
    }).filter((item) => item));
  }
  static parseActions(data2) {
    if (Array.isArray(data2)) {
      return Parser.parse(data2.map((action) => {
        delete action.clickTrackingParams;
        return action;
      }));
    }
    return new SuperParsedResult(this.parseItem(data2));
  }
  static parseFormats(formats) {
    return (formats === null || formats === void 0 ? void 0 : formats.map((format) => new Format(format))) || [];
  }
  static applyMutations(memo, mutations) {
    var _b, _c;
    const music_multi_select_menu_items = memo.getType(MusicMultiSelectMenuItem_default);
    if (music_multi_select_menu_items.length > 0 && !mutations) {
      console.warn(new InnertubeError(`Mutation data required for processing MusicMultiSelectMenuItems, but none found.
This is a bug, please report it at ${Platform.shim.info.bugs_url}`));
    } else {
      const missing_or_invalid_mutations = [];
      for (const menu_item of music_multi_select_menu_items) {
        const mutation = mutations.find((mutation2) => {
          var _b2, _c2;
          return ((_c2 = (_b2 = mutation2.payload) === null || _b2 === void 0 ? void 0 : _b2.musicFormBooleanChoice) === null || _c2 === void 0 ? void 0 : _c2.id) === menu_item.form_item_entity_key;
        });
        const choice = mutation === null || mutation === void 0 ? void 0 : mutation.payload.musicFormBooleanChoice;
        if ((choice === null || choice === void 0 ? void 0 : choice.selected) !== void 0) {
          menu_item.selected = choice.selected;
        } else {
          missing_or_invalid_mutations.push(`'${menu_item.title}'`);
        }
        if (choice === null || choice === void 0 ? void 0 : choice.opaqueToken) {
          const command = (_c = (_b = menu_item.endpoint) === null || _b === void 0 ? void 0 : _b.payload.commands) === null || _c === void 0 ? void 0 : _c.find((c) => {
            var _b2;
            return (_b2 = c.musicBrowseFormBinderCommand) === null || _b2 === void 0 ? void 0 : _b2.browseEndpoint;
          });
          if (command) {
            command.musicBrowseFormBinderCommand.browseEndpoint.formData = {
              selectedValues: [choice.opaqueToken]
            };
          }
        }
      }
      if (missing_or_invalid_mutations.length > 0) {
        console.warn(new InnertubeError(`Mutation data missing or invalid for ${missing_or_invalid_mutations.length} out of ${music_multi_select_menu_items.length} MusicMultiSelectMenuItems. The titles of the failed items are: ${missing_or_invalid_mutations.join(", ")}.
This is a bug, please report it at ${Platform.shim.info.bugs_url}`));
      }
    }
  }
  static sanitizeClassName(input) {
    return (input.charAt(0).toUpperCase() + input.slice(1)).replace(/Renderer|Model/g, "").replace(/Radio/g, "Mix").trim();
  }
  static shouldIgnore(classname) {
    return this.ignore_list.has(classname);
  }
  static getParserByName(classname) {
    const ParserConstructor = __classPrivateFieldGet(this, _a4, "f", _Parser_rt_nodes).get(classname);
    if (!ParserConstructor) {
      const error = new Error(`Module not found: ${classname}`);
      error.code = "MODULE_NOT_FOUND";
      throw error;
    }
    return ParserConstructor;
  }
  static hasParser(classname) {
    return __classPrivateFieldGet(this, _a4, "f", _Parser_rt_nodes).has(classname);
  }
  static addRuntimeParser(classname, ParserConstructor) {
    __classPrivateFieldGet(this, _a4, "f", _Parser_rt_nodes).set(classname, ParserConstructor);
    __classPrivateFieldGet(this, _a4, "f", _Parser_dynamic_nodes).set(classname, ParserConstructor);
  }
  static getDynamicParsers() {
    return Object.fromEntries(__classPrivateFieldGet(this, _a4, "f", _Parser_dynamic_nodes));
  }
};
__name(Parser, "Parser");
_a4 = Parser, _Parser_clearMemo = /* @__PURE__ */ __name(function _Parser_clearMemo2() {
  __classPrivateFieldSet(Parser, _a4, null, "f", _Parser_memo);
}, "_Parser_clearMemo"), _Parser_createMemo = /* @__PURE__ */ __name(function _Parser_createMemo2() {
  __classPrivateFieldSet(Parser, _a4, new Memo(), "f", _Parser_memo);
}, "_Parser_createMemo"), _Parser_addToMemo = /* @__PURE__ */ __name(function _Parser_addToMemo2(classname, result) {
  if (!__classPrivateFieldGet(Parser, _a4, "f", _Parser_memo))
    return;
  const list = __classPrivateFieldGet(Parser, _a4, "f", _Parser_memo).get(classname);
  if (!list)
    return __classPrivateFieldGet(Parser, _a4, "f", _Parser_memo).set(classname, [result]);
  list.push(result);
}, "_Parser_addToMemo"), _Parser_getMemo = /* @__PURE__ */ __name(function _Parser_getMemo2() {
  if (!__classPrivateFieldGet(Parser, _a4, "f", _Parser_memo))
    throw new Error("Parser#getMemo() called before Parser#createMemo()");
  return __classPrivateFieldGet(Parser, _a4, "f", _Parser_memo);
}, "_Parser_getMemo"), _Parser_printError = /* @__PURE__ */ __name(function _Parser_printError2({ classname, classdata, err }) {
  if (err.code == "MODULE_NOT_FOUND") {
    return console.warn(new InnertubeError(`${classname} not found!
This is a bug, want to help us fix it? Follow the instructions at ${Platform.shim.info.repo_url.split("#")[0]}/blob/main/docs/updating-the-parser.md or report it at ${Platform.shim.info.bugs_url}!`, classdata));
  }
  console.warn(new InnertubeError(`Something went wrong at ${classname}!
This is a bug, please report it at ${Platform.shim.info.bugs_url}`, { stack: err.stack }));
}, "_Parser_printError");
_Parser_errorHandler = { value: __classPrivateFieldGet(Parser, _a4, "m", _Parser_printError) };
_Parser_memo = { value: null };
Parser.ignore_list = /* @__PURE__ */ new Set([
  "AdSlot",
  "DisplayAd",
  "SearchPyv",
  "MealbarPromo",
  "PrimetimePromo",
  "BackgroundPromo",
  "PromotedSparklesWeb",
  "RunAttestationCommand",
  "CompactPromotedVideo",
  "BrandVideoShelf",
  "BrandVideoSingleton",
  "StatementBanner",
  "GuideSigninPromo"
]);
_Parser_rt_nodes = { value: new Map(Object.entries(nodes_exports)) };
_Parser_dynamic_nodes = { value: /* @__PURE__ */ new Map() };
var parser_default2 = Parser;
var ItemSectionContinuation = class extends YTNode {
  constructor(data2) {
    var _b, _c, _d;
    super();
    this.contents = Parser.parseArray(data2.contents);
    if (Array.isArray(data2.continuations)) {
      this.continuation = (_d = (_c = (_b = data2.continuations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.nextContinuationData) === null || _d === void 0 ? void 0 : _d.continuation;
    }
  }
};
__name(ItemSectionContinuation, "ItemSectionContinuation");
ItemSectionContinuation.type = "itemSectionContinuation";
var NavigateAction = class extends YTNode {
  constructor(data2) {
    super();
    this.endpoint = new NavigationEndpoint_default(data2.endpoint);
  }
};
__name(NavigateAction, "NavigateAction");
NavigateAction.type = "navigateAction";
var AppendContinuationItemsAction2 = class extends YTNode {
  constructor(data2) {
    super();
    this.contents = Parser.parseArray(data2.continuationItems);
  }
};
__name(AppendContinuationItemsAction2, "AppendContinuationItemsAction");
AppendContinuationItemsAction2.type = "appendContinuationItemsAction";
var ReloadContinuationItemsCommand = class extends YTNode {
  constructor(data2) {
    super();
    this.target_id = data2.targetId;
    this.contents = Parser.parse(data2.continuationItems, true);
    this.slot = data2 === null || data2 === void 0 ? void 0 : data2.slot;
  }
};
__name(ReloadContinuationItemsCommand, "ReloadContinuationItemsCommand");
ReloadContinuationItemsCommand.type = "reloadContinuationItemsCommand";
var SectionListContinuation = class extends YTNode {
  constructor(data2) {
    var _b, _c, _d, _e, _f, _g;
    super();
    this.contents = Parser.parse(data2.contents, true);
    this.continuation = ((_d = (_c = (_b = data2.continuations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.nextContinuationData) === null || _d === void 0 ? void 0 : _d.continuation) || ((_g = (_f = (_e = data2.continuations) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.reloadContinuationData) === null || _g === void 0 ? void 0 : _g.continuation) || null;
    if (data2.header) {
      this.header = Parser.parse(data2.header);
    }
  }
};
__name(SectionListContinuation, "SectionListContinuation");
SectionListContinuation.type = "sectionListContinuation";
var MusicPlaylistShelfContinuation = class extends YTNode {
  constructor(data2) {
    var _b;
    super();
    this.contents = Parser.parse(data2.contents, true);
    this.continuation = ((_b = data2.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData.continuation) || null;
  }
};
__name(MusicPlaylistShelfContinuation, "MusicPlaylistShelfContinuation");
MusicPlaylistShelfContinuation.type = "musicPlaylistShelfContinuation";
var MusicShelfContinuation = class extends YTNode {
  constructor(data2) {
    var _b, _c, _d, _e;
    super();
    this.contents = Parser.parseArray(data2.contents);
    this.continuation = ((_c = (_b = data2.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || ((_e = (_d = data2.continuations) === null || _d === void 0 ? void 0 : _d[0].reloadContinuationData) === null || _e === void 0 ? void 0 : _e.continuation) || null;
  }
};
__name(MusicShelfContinuation, "MusicShelfContinuation");
MusicShelfContinuation.type = "musicShelfContinuation";
var GridContinuation = class extends YTNode {
  constructor(data2) {
    var _b;
    super();
    this.items = Parser.parse(data2.items, true);
    this.continuation = ((_b = data2.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData.continuation) || null;
  }
  get contents() {
    return this.items;
  }
};
__name(GridContinuation, "GridContinuation");
GridContinuation.type = "gridContinuation";
var PlaylistPanelContinuation = class extends YTNode {
  constructor(data2) {
    var _b, _c, _d, _e, _f, _g;
    super();
    this.contents = Parser.parseArray(data2.contents);
    this.continuation = ((_d = (_c = (_b = data2.continuations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.nextContinuationData) === null || _d === void 0 ? void 0 : _d.continuation) || ((_g = (_f = (_e = data2.continuations) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.nextRadioContinuationData) === null || _g === void 0 ? void 0 : _g.continuation) || null;
  }
};
__name(PlaylistPanelContinuation, "PlaylistPanelContinuation");
PlaylistPanelContinuation.type = "playlistPanelContinuation";
var Continuation = class extends YTNode {
  constructor(data2) {
    var _b, _c, _d;
    super();
    this.continuation_type = data2.type;
    this.timeout_ms = (_b = data2.continuation) === null || _b === void 0 ? void 0 : _b.timeoutMs;
    this.time_until_last_message_ms = (_c = data2.continuation) === null || _c === void 0 ? void 0 : _c.timeUntilLastMessageMsec;
    this.token = (_d = data2.continuation) === null || _d === void 0 ? void 0 : _d.continuation;
  }
};
__name(Continuation, "Continuation");
Continuation.type = "continuation";
var LiveChatContinuation = class extends YTNode {
  constructor(data2) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    super();
    this.actions = Parser.parse((_b = data2.actions) === null || _b === void 0 ? void 0 : _b.map((action) => {
      delete action.clickTrackingParams;
      return action;
    }), true) || observe([]);
    this.action_panel = Parser.parseItem(data2.actionPanel);
    this.item_list = Parser.parseItem(data2.itemList, LiveChatItemList_default);
    this.header = Parser.parseItem(data2.header, LiveChatHeader_default);
    this.participants_list = Parser.parseItem(data2.participantsList, LiveChatParticipantsList_default);
    this.popout_message = Parser.parseItem(data2.popoutMessage, Message_default);
    this.emojis = ((_c = data2.emojis) === null || _c === void 0 ? void 0 : _c.map((emoji) => ({
      emoji_id: emoji.emojiId,
      shortcuts: emoji.shortcuts,
      search_terms: emoji.searchTerms,
      image: Thumbnail.fromResponse(emoji.image),
      is_custom_emoji: emoji.isCustomEmoji
    }))) || [];
    let continuation, type;
    if ((_d = data2.continuations) === null || _d === void 0 ? void 0 : _d[0].timedContinuationData) {
      type = "timed";
      continuation = (_e = data2.continuations) === null || _e === void 0 ? void 0 : _e[0].timedContinuationData;
    } else if ((_f = data2.continuations) === null || _f === void 0 ? void 0 : _f[0].invalidationContinuationData) {
      type = "invalidation";
      continuation = (_g = data2.continuations) === null || _g === void 0 ? void 0 : _g[0].invalidationContinuationData;
    } else if ((_h = data2.continuations) === null || _h === void 0 ? void 0 : _h[0].liveChatReplayContinuationData) {
      type = "replay";
      continuation = (_j = data2.continuations) === null || _j === void 0 ? void 0 : _j[0].liveChatReplayContinuationData;
    }
    this.continuation = new Continuation({ continuation, type });
    this.viewer_name = data2.viewerName;
  }
};
__name(LiveChatContinuation, "LiveChatContinuation");
LiveChatContinuation.type = "liveChatContinuation";

// dist/src/parser/youtube/index.js
var youtube_exports = {};
__export(youtube_exports, {
  AccountInfo: () => AccountInfo_default,
  Analytics: () => Analytics_default,
  Channel: () => Channel2,
  ChannelListContinuation: () => ChannelListContinuation,
  Comments: () => Comments_default,
  FilteredChannelList: () => FilteredChannelList,
  Guide: () => Guide_default,
  HashtagFeed: () => HashtagFeed,
  History: () => History_default,
  HomeFeed: () => HomeFeed,
  ItemMenu: () => ItemMenu_default,
  Library: () => Library_default,
  LiveChat: () => LiveChat_default2,
  NotificationsMenu: () => NotificationsMenu_default,
  Playlist: () => Playlist_default2,
  Search: () => Search_default,
  Settings: () => Settings_default,
  SmoothedQueue: () => SmoothedQueue_default,
  TimeWatched: () => TimeWatched_default,
  VideoInfo: () => VideoInfo_default
});

// dist/src/parser/youtube/AccountInfo.js
var _AccountInfo_page;
var AccountInfo = class {
  constructor(response) {
    _AccountInfo_page.set(this, void 0);
    __classPrivateFieldSet(this, _AccountInfo_page, parser_default.parseResponse(response.data), "f");
    if (!__classPrivateFieldGet(this, _AccountInfo_page, "f").contents)
      throw new InnertubeError("Page contents not found");
    const account_section_list = __classPrivateFieldGet(this, _AccountInfo_page, "f").contents.array().as(AccountSectionList_default).first();
    if (!account_section_list)
      throw new InnertubeError("Account section list not found");
    this.contents = account_section_list.contents;
    this.footers = account_section_list.footers;
  }
  get page() {
    return __classPrivateFieldGet(this, _AccountInfo_page, "f");
  }
};
__name(AccountInfo, "AccountInfo");
_AccountInfo_page = /* @__PURE__ */ new WeakMap();
var AccountInfo_default = AccountInfo;

// dist/src/parser/youtube/Analytics.js
var _Analytics_page;
var Analytics = class {
  constructor(response) {
    var _a7;
    _Analytics_page.set(this, void 0);
    __classPrivateFieldSet(this, _Analytics_page, parser_default.parseResponse(response.data), "f");
    this.sections = (_a7 = __classPrivateFieldGet(this, _Analytics_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(Element_default).map((el) => el.model).flatMap((el) => !el ? [] : el);
  }
  get page() {
    return __classPrivateFieldGet(this, _Analytics_page, "f");
  }
};
__name(Analytics, "Analytics");
_Analytics_page = /* @__PURE__ */ new WeakMap();
var Analytics_default = Analytics;

// dist/src/core/mixins/Feed.js
var _Feed_instances;
var _Feed_page;
var _Feed_continuation;
var _Feed_actions;
var _Feed_memo;
var _Feed_isParsed;
var Feed = class {
  constructor(actions, response, already_parsed = false) {
    _Feed_instances.add(this);
    _Feed_page.set(this, void 0);
    _Feed_continuation.set(this, void 0);
    _Feed_actions.set(this, void 0);
    _Feed_memo.set(this, void 0);
    if (__classPrivateFieldGet(this, _Feed_instances, "m", _Feed_isParsed).call(this, response) || already_parsed) {
      __classPrivateFieldSet(this, _Feed_page, response, "f");
    } else {
      __classPrivateFieldSet(this, _Feed_page, parser_default.parseResponse(response.data), "f");
    }
    const memo = concatMemos(...[
      __classPrivateFieldGet(this, _Feed_page, "f").contents_memo,
      __classPrivateFieldGet(this, _Feed_page, "f").continuation_contents_memo,
      __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_commands_memo,
      __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_endpoints_memo,
      __classPrivateFieldGet(this, _Feed_page, "f").on_response_received_actions_memo,
      __classPrivateFieldGet(this, _Feed_page, "f").sidebar_memo,
      __classPrivateFieldGet(this, _Feed_page, "f").header_memo
    ]);
    if (!memo)
      throw new InnertubeError("No memo found in feed");
    __classPrivateFieldSet(this, _Feed_memo, memo, "f");
    __classPrivateFieldSet(this, _Feed_actions, actions, "f");
  }
  static getVideosFromMemo(memo) {
    return memo.getType(Video_default, GridVideo_default, ReelItem_default, CompactVideo_default, PlaylistVideo_default, PlaylistPanelVideo_default, WatchCardCompactVideo_default);
  }
  static getPlaylistsFromMemo(memo) {
    return memo.getType(Playlist_default, GridPlaylist_default);
  }
  get videos() {
    return Feed.getVideosFromMemo(__classPrivateFieldGet(this, _Feed_memo, "f"));
  }
  get posts() {
    return __classPrivateFieldGet(this, _Feed_memo, "f").getType(BackstagePost_default, Post_default, SharedPost_default);
  }
  get channels() {
    return __classPrivateFieldGet(this, _Feed_memo, "f").getType(Channel_default, GridChannel_default);
  }
  get playlists() {
    return Feed.getPlaylistsFromMemo(__classPrivateFieldGet(this, _Feed_memo, "f"));
  }
  get memo() {
    return __classPrivateFieldGet(this, _Feed_memo, "f");
  }
  get page_contents() {
    var _a7;
    const tab_content = (_a7 = __classPrivateFieldGet(this, _Feed_memo, "f").getType(Tab_default)) === null || _a7 === void 0 ? void 0 : _a7.first().content;
    const reload_continuation_items = __classPrivateFieldGet(this, _Feed_memo, "f").getType(ReloadContinuationItemsCommand).first();
    const append_continuation_items = __classPrivateFieldGet(this, _Feed_memo, "f").getType(AppendContinuationItemsAction_default).first();
    return tab_content || reload_continuation_items || append_continuation_items;
  }
  get shelves() {
    return __classPrivateFieldGet(this, _Feed_memo, "f").getType(Shelf_default, RichShelf_default, ReelShelf_default);
  }
  getShelf(title) {
    return this.shelves.get({ title });
  }
  get secondary_contents() {
    var _a7, _b;
    if (!((_a7 = __classPrivateFieldGet(this, _Feed_page, "f").contents) === null || _a7 === void 0 ? void 0 : _a7.is_node))
      return void 0;
    const node = (_b = __classPrivateFieldGet(this, _Feed_page, "f").contents) === null || _b === void 0 ? void 0 : _b.item();
    if (!node.is(TwoColumnBrowseResults_default, TwoColumnSearchResults_default))
      return void 0;
    return node.secondary_contents;
  }
  get actions() {
    return __classPrivateFieldGet(this, _Feed_actions, "f");
  }
  get page() {
    return __classPrivateFieldGet(this, _Feed_page, "f");
  }
  get has_continuation() {
    return (__classPrivateFieldGet(this, _Feed_memo, "f").get("ContinuationItem") || []).length > 0;
  }
  getContinuationData() {
    return __awaiter(this, void 0, void 0, function* () {
      if (__classPrivateFieldGet(this, _Feed_continuation, "f")) {
        if (__classPrivateFieldGet(this, _Feed_continuation, "f").length > 1)
          throw new InnertubeError("There are too many continuations, you'll need to find the correct one yourself in this.page");
        if (__classPrivateFieldGet(this, _Feed_continuation, "f").length === 0)
          throw new InnertubeError("There are no continuations");
        const response = yield __classPrivateFieldGet(this, _Feed_continuation, "f")[0].endpoint.call(__classPrivateFieldGet(this, _Feed_actions, "f"), { parse: true });
        return response;
      }
      __classPrivateFieldSet(this, _Feed_continuation, __classPrivateFieldGet(this, _Feed_memo, "f").getType(ContinuationItem_default), "f");
      if (__classPrivateFieldGet(this, _Feed_continuation, "f"))
        return this.getContinuationData();
    });
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      const continuation_data = yield this.getContinuationData();
      if (!continuation_data)
        throw new InnertubeError("Could not get continuation data");
      return new Feed(this.actions, continuation_data, true);
    });
  }
};
__name(Feed, "Feed");
_Feed_page = /* @__PURE__ */ new WeakMap(), _Feed_continuation = /* @__PURE__ */ new WeakMap(), _Feed_actions = /* @__PURE__ */ new WeakMap(), _Feed_memo = /* @__PURE__ */ new WeakMap(), _Feed_instances = /* @__PURE__ */ new WeakSet(), _Feed_isParsed = /* @__PURE__ */ __name(function _Feed_isParsed2(response) {
  return !("data" in response);
}, "_Feed_isParsed");
var Feed_default = Feed;

// dist/src/core/mixins/TabbedFeed.js
var _TabbedFeed_tabs;
var _TabbedFeed_actions;
var TabbedFeed = class extends Feed_default {
  constructor(actions, data2, already_parsed = false) {
    var _a7;
    super(actions, data2, already_parsed);
    _TabbedFeed_tabs.set(this, void 0);
    _TabbedFeed_actions.set(this, void 0);
    __classPrivateFieldSet(this, _TabbedFeed_actions, actions, "f");
    __classPrivateFieldSet(this, _TabbedFeed_tabs, (_a7 = this.page.contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(Tab_default), "f");
  }
  get tabs() {
    var _a7, _b;
    return (_b = (_a7 = __classPrivateFieldGet(this, _TabbedFeed_tabs, "f")) === null || _a7 === void 0 ? void 0 : _a7.map((tab) => tab.title.toString())) !== null && _b !== void 0 ? _b : [];
  }
  getTabByName(title) {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      const tab = (_a7 = __classPrivateFieldGet(this, _TabbedFeed_tabs, "f")) === null || _a7 === void 0 ? void 0 : _a7.find((tab2) => tab2.title.toLowerCase() === title.toLowerCase());
      if (!tab)
        throw new InnertubeError(`Tab "${title}" not found`);
      if (tab.selected)
        return this;
      const response = yield tab.endpoint.call(__classPrivateFieldGet(this, _TabbedFeed_actions, "f"));
      return new TabbedFeed(__classPrivateFieldGet(this, _TabbedFeed_actions, "f"), response, false);
    });
  }
  getTabByURL(url) {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      const tab = (_a7 = __classPrivateFieldGet(this, _TabbedFeed_tabs, "f")) === null || _a7 === void 0 ? void 0 : _a7.find((tab2) => {
        var _a8;
        return ((_a8 = tab2.endpoint.metadata.url) === null || _a8 === void 0 ? void 0 : _a8.split("/").pop()) === url;
      });
      if (!tab)
        throw new InnertubeError(`Tab "${url}" not found`);
      if (tab.selected)
        return this;
      const response = yield tab.endpoint.call(__classPrivateFieldGet(this, _TabbedFeed_actions, "f"));
      return new TabbedFeed(__classPrivateFieldGet(this, _TabbedFeed_actions, "f"), response, false);
    });
  }
  hasTabWithURL(url) {
    var _a7, _b;
    return (_b = (_a7 = __classPrivateFieldGet(this, _TabbedFeed_tabs, "f")) === null || _a7 === void 0 ? void 0 : _a7.some((tab) => {
      var _a8;
      return ((_a8 = tab.endpoint.metadata.url) === null || _a8 === void 0 ? void 0 : _a8.split("/").pop()) === url;
    })) !== null && _b !== void 0 ? _b : false;
  }
  get title() {
    var _a7, _b, _c;
    return (_c = (_b = (_a7 = this.page.contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(Tab_default)) === null || _b === void 0 ? void 0 : _b.find((tab) => tab.selected)) === null || _c === void 0 ? void 0 : _c.title.toString();
  }
};
__name(TabbedFeed, "TabbedFeed");
_TabbedFeed_tabs = /* @__PURE__ */ new WeakMap(), _TabbedFeed_actions = /* @__PURE__ */ new WeakMap();
var TabbedFeed_default = TabbedFeed;

// dist/src/core/mixins/FilterableFeed.js
var _FilterableFeed_chips;
var FilterableFeed = class extends Feed_default {
  constructor(actions, data2, already_parsed = false) {
    super(actions, data2, already_parsed);
    _FilterableFeed_chips.set(this, void 0);
  }
  get filter_chips() {
    var _a7, _b;
    if (__classPrivateFieldGet(this, _FilterableFeed_chips, "f"))
      return __classPrivateFieldGet(this, _FilterableFeed_chips, "f") || [];
    if (((_a7 = this.memo.getType(FeedFilterChipBar_default)) === null || _a7 === void 0 ? void 0 : _a7.length) > 1)
      throw new InnertubeError("There are too many feed filter chipbars, you'll need to find the correct one yourself in this.page");
    if (((_b = this.memo.getType(FeedFilterChipBar_default)) === null || _b === void 0 ? void 0 : _b.length) === 0)
      throw new InnertubeError("There are no feed filter chipbars");
    __classPrivateFieldSet(this, _FilterableFeed_chips, this.memo.getType(ChipCloudChip_default), "f");
    return __classPrivateFieldGet(this, _FilterableFeed_chips, "f") || [];
  }
  get filters() {
    return this.filter_chips.map((chip) => chip.text.toString()) || [];
  }
  getFilteredFeed(filter) {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      let target_filter;
      if (typeof filter === "string") {
        if (!this.filters.includes(filter))
          throw new InnertubeError("Filter not found", { available_filters: this.filters });
        target_filter = this.filter_chips.find((chip) => chip.text.toString() === filter);
      } else if (filter.type === "ChipCloudChip") {
        target_filter = filter;
      } else {
        throw new InnertubeError("Invalid filter");
      }
      if (!target_filter)
        throw new InnertubeError("Filter not found");
      if (target_filter.is_selected)
        return this;
      const response = yield (_a7 = target_filter.endpoint) === null || _a7 === void 0 ? void 0 : _a7.call(this.actions, { parse: true });
      if (!response)
        throw new InnertubeError("Failed to get filtered feed");
      return new Feed_default(this.actions, response, true);
    });
  }
};
__name(FilterableFeed, "FilterableFeed");
_FilterableFeed_chips = /* @__PURE__ */ new WeakMap();
var FilterableFeed_default = FilterableFeed;

// dist/src/parser/youtube/Channel.js
var Channel2 = class extends TabbedFeed_default {
  constructor(actions, data2, already_parsed = false) {
    var _a7, _b, _c, _d, _e, _f;
    super(actions, data2, already_parsed);
    this.header = (_b = (_a7 = this.page.header) === null || _a7 === void 0 ? void 0 : _a7.item()) === null || _b === void 0 ? void 0 : _b.as(C4TabbedHeader_default, CarouselHeader_default, InteractiveTabbedHeader_default);
    const metadata = (_c = this.page.metadata) === null || _c === void 0 ? void 0 : _c.item().as(ChannelMetadata_default);
    const microformat = (_d = this.page.microformat) === null || _d === void 0 ? void 0 : _d.as(MicroformatData_default);
    if (this.page.alerts) {
      const alert = this.page.alerts.first();
      if ((alert === null || alert === void 0 ? void 0 : alert.alert_type) === "ERROR") {
        throw new ChannelError(alert.text.toString());
      }
    }
    if (!metadata && !this.page.contents)
      throw new InnertubeError("Invalid channel", this);
    this.metadata = Object.assign(Object.assign({}, metadata), microformat || {});
    this.subscribe_button = (_e = this.page.header_memo) === null || _e === void 0 ? void 0 : _e.getType(SubscribeButton_default).first();
    this.current_tab = (_f = this.page.contents) === null || _f === void 0 ? void 0 : _f.item().key("tabs").parsed().array().filterType(Tab_default, ExpandableTab_default).get({ selected: true });
  }
  applyFilter(filter) {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      let target_filter;
      const filter_chipbar = this.memo.getType(FeedFilterChipBar_default).first();
      if (typeof filter === "string") {
        target_filter = filter_chipbar === null || filter_chipbar === void 0 ? void 0 : filter_chipbar.contents.get({ text: filter });
        if (!target_filter)
          throw new InnertubeError(`Filter ${filter} not found`, { available_filters: this.filters });
      } else if (filter instanceof ChipCloudChip_default) {
        target_filter = filter;
      }
      if (!target_filter)
        throw new InnertubeError("Invalid filter", filter);
      const page = yield (_a7 = target_filter.endpoint) === null || _a7 === void 0 ? void 0 : _a7.call(this.actions, { parse: true });
      if (!page)
        throw new InnertubeError("No page returned", { filter: target_filter });
      return new FilteredChannelList(this.actions, page, true);
    });
  }
  applySort(sort) {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      const sort_filter_sub_menu = this.memo.getType(SortFilterSubMenu_default).first();
      if (!sort_filter_sub_menu)
        throw new InnertubeError("No sort filter sub menu found");
      const target_sort = (_a7 = sort_filter_sub_menu === null || sort_filter_sub_menu === void 0 ? void 0 : sort_filter_sub_menu.sub_menu_items) === null || _a7 === void 0 ? void 0 : _a7.find((item) => item.title === sort);
      if (!target_sort)
        throw new InnertubeError(`Sort filter ${sort} not found`, { available_sort_filters: this.sort_filters });
      if (target_sort.selected)
        return this;
      const page = yield (_b = target_sort.endpoint) === null || _b === void 0 ? void 0 : _b.call(this.actions, { parse: true });
      return new Channel2(this.actions, page, true);
    });
  }
  applyContentTypeFilter(content_type_filter) {
    var _a7, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
      const sub_menu = (_c = (_b = (_a7 = this.current_tab) === null || _a7 === void 0 ? void 0 : _a7.content) === null || _b === void 0 ? void 0 : _b.as(SectionList_default).sub_menu) === null || _c === void 0 ? void 0 : _c.as(ChannelSubMenu_default);
      if (!sub_menu)
        throw new InnertubeError("Sub menu not found");
      const item = sub_menu.content_type_sub_menu_items.find((item2) => item2.title === content_type_filter);
      if (!item)
        throw new InnertubeError(`Sub menu item ${content_type_filter} not found`, { available_filters: this.content_type_filters });
      if (item.selected)
        return this;
      const page = yield (_d = item.endpoint) === null || _d === void 0 ? void 0 : _d.call(this.actions, { parse: true });
      return new Channel2(this.actions, page, true);
    });
  }
  get filters() {
    var _a7, _b;
    return ((_b = (_a7 = this.memo.getType(FeedFilterChipBar_default)) === null || _a7 === void 0 ? void 0 : _a7[0]) === null || _b === void 0 ? void 0 : _b.contents.filterType(ChipCloudChip_default).map((chip) => chip.text)) || [];
  }
  get sort_filters() {
    var _a7;
    const sort_filter_sub_menu = this.memo.getType(SortFilterSubMenu_default).first();
    return ((_a7 = sort_filter_sub_menu === null || sort_filter_sub_menu === void 0 ? void 0 : sort_filter_sub_menu.sub_menu_items) === null || _a7 === void 0 ? void 0 : _a7.map((item) => item.title)) || [];
  }
  get content_type_filters() {
    var _a7, _b, _c;
    const sub_menu = (_c = (_b = (_a7 = this.current_tab) === null || _a7 === void 0 ? void 0 : _a7.content) === null || _b === void 0 ? void 0 : _b.as(SectionList_default).sub_menu) === null || _c === void 0 ? void 0 : _c.as(ChannelSubMenu_default);
    return (sub_menu === null || sub_menu === void 0 ? void 0 : sub_menu.content_type_sub_menu_items.map((item) => item.title)) || [];
  }
  getHome() {
    return __awaiter(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("featured");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getVideos() {
    return __awaiter(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("videos");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getShorts() {
    return __awaiter(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("shorts");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getLiveStreams() {
    return __awaiter(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("streams");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getPlaylists() {
    return __awaiter(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("playlists");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getCommunity() {
    return __awaiter(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("community");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getChannels() {
    return __awaiter(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("channels");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getAbout() {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("about");
      return (_a7 = tab.memo.getType(ChannelAboutFullMetadata_default)) === null || _a7 === void 0 ? void 0 : _a7[0];
    });
  }
  search(query) {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      const tab = (_a7 = this.memo.getType(ExpandableTab_default)) === null || _a7 === void 0 ? void 0 : _a7[0];
      if (!tab)
        throw new InnertubeError("Search tab not found", this);
      const page = yield (_b = tab.endpoint) === null || _b === void 0 ? void 0 : _b.call(this.actions, { query, parse: true });
      return new Channel2(this.actions, page, true);
    });
  }
  get has_home() {
    return this.hasTabWithURL("featured");
  }
  get has_videos() {
    return this.hasTabWithURL("videos");
  }
  get has_shorts() {
    return this.hasTabWithURL("shorts");
  }
  get has_live_streams() {
    return this.hasTabWithURL("streams");
  }
  get has_playlists() {
    return this.hasTabWithURL("playlists");
  }
  get has_community() {
    return this.hasTabWithURL("community");
  }
  get has_channels() {
    return this.hasTabWithURL("channels");
  }
  get has_about() {
    return this.hasTabWithURL("about");
  }
  get has_search() {
    var _a7;
    return ((_a7 = this.memo.getType(ExpandableTab_default)) === null || _a7 === void 0 ? void 0 : _a7.length) > 0;
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuationData: { get: () => super.getContinuationData }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const page = yield _super.getContinuationData.call(this);
      if (!page)
        throw new InnertubeError("Could not get continuation data");
      return new ChannelListContinuation(this.actions, page, true);
    });
  }
};
__name(Channel2, "Channel");
var ChannelListContinuation = class extends Feed_default {
  constructor(actions, data2, already_parsed = false) {
    var _a7, _b;
    super(actions, data2, already_parsed);
    this.contents = ((_a7 = this.page.on_response_received_actions) === null || _a7 === void 0 ? void 0 : _a7.first()) || ((_b = this.page.on_response_received_endpoints) === null || _b === void 0 ? void 0 : _b.first());
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuationData: { get: () => super.getContinuationData }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const page = yield _super.getContinuationData.call(this);
      if (!page)
        throw new InnertubeError("Could not get continuation data");
      return new ChannelListContinuation(this.actions, page, true);
    });
  }
};
__name(ChannelListContinuation, "ChannelListContinuation");
var FilteredChannelList = class extends FilterableFeed_default {
  constructor(actions, data2, already_parsed = false) {
    super(actions, data2, already_parsed);
    this.applied_filter = this.memo.getType(ChipCloudChip_default).get({ is_selected: true });
    if (this.page.on_response_received_actions && this.page.on_response_received_actions.length > 1) {
      this.page.on_response_received_actions.shift();
    }
    this.contents = this.page.on_response_received_actions.first();
  }
  applyFilter(filter) {
    const _super = Object.create(null, {
      getFilteredFeed: { get: () => super.getFilteredFeed }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const feed = yield _super.getFilteredFeed.call(this, filter);
      return new FilteredChannelList(this.actions, feed.page, true);
    });
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuationData: { get: () => super.getContinuationData }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const page = yield _super.getContinuationData.call(this);
      if (!(page === null || page === void 0 ? void 0 : page.on_response_received_actions_memo))
        throw new InnertubeError("Unexpected continuation data", page);
      page.on_response_received_actions_memo.set("FeedFilterChipBar", this.memo.getType(FeedFilterChipBar_default));
      page.on_response_received_actions_memo.set("ChipCloudChip", this.memo.getType(ChipCloudChip_default));
      return new FilteredChannelList(this.actions, page, true);
    });
  }
};
__name(FilteredChannelList, "FilteredChannelList");

// dist/src/parser/youtube/Comments.js
var _Comments_page;
var _Comments_actions;
var _Comments_continuation;
var Comments = class {
  constructor(actions, data2, already_parsed = false) {
    var _a7, _b, _c;
    _Comments_page.set(this, void 0);
    _Comments_actions.set(this, void 0);
    _Comments_continuation.set(this, void 0);
    __classPrivateFieldSet(this, _Comments_page, already_parsed ? data2 : parser_default.parseResponse(data2), "f");
    __classPrivateFieldSet(this, _Comments_actions, actions, "f");
    const contents = __classPrivateFieldGet(this, _Comments_page, "f").on_response_received_endpoints;
    if (!contents)
      throw new InnertubeError("Comments page did not have any content.");
    const header_node = contents.at(0);
    const body_node = contents.at(1);
    this.header = (_a7 = header_node === null || header_node === void 0 ? void 0 : header_node.contents) === null || _a7 === void 0 ? void 0 : _a7.firstOfType(CommentsHeader_default);
    const threads = ((_b = body_node === null || body_node === void 0 ? void 0 : body_node.contents) === null || _b === void 0 ? void 0 : _b.filterType(CommentThread_default)) || [];
    this.contents = observe(threads.map((thread) => {
      var _a8;
      (_a8 = thread.comment) === null || _a8 === void 0 ? void 0 : _a8.setActions(__classPrivateFieldGet(this, _Comments_actions, "f"));
      thread.setActions(__classPrivateFieldGet(this, _Comments_actions, "f"));
      return thread;
    }));
    __classPrivateFieldSet(this, _Comments_continuation, (_c = body_node === null || body_node === void 0 ? void 0 : body_node.contents) === null || _c === void 0 ? void 0 : _c.firstOfType(ContinuationItem_default), "f");
  }
  applySort(sort) {
    var _a7, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.header)
        throw new InnertubeError("Page header is missing. Cannot apply sort option.");
      let button;
      if (sort === "TOP_COMMENTS") {
        button = (_b = (_a7 = this.header.sort_menu) === null || _a7 === void 0 ? void 0 : _a7.sub_menu_items) === null || _b === void 0 ? void 0 : _b.at(0);
      } else if (sort === "NEWEST_FIRST") {
        button = (_d = (_c = this.header.sort_menu) === null || _c === void 0 ? void 0 : _c.sub_menu_items) === null || _d === void 0 ? void 0 : _d.at(1);
      }
      if (!button)
        throw new InnertubeError("Could not find target button.");
      if (button.selected)
        return this;
      const response = yield button.endpoint.call(__classPrivateFieldGet(this, _Comments_actions, "f"), { parse: true });
      return new Comments(__classPrivateFieldGet(this, _Comments_actions, "f"), response, true);
    });
  }
  createComment(text) {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.header)
        throw new InnertubeError("Page header is missing. Cannot create comment.");
      const button = (_a7 = this.header.create_renderer) === null || _a7 === void 0 ? void 0 : _a7.as(CommentSimplebox_default).submit_button;
      if (!button)
        throw new InnertubeError("Could not find target button. You are probably not logged in.");
      if (!button.endpoint)
        throw new InnertubeError("Button does not have an endpoint.");
      const response = yield button.endpoint.call(__classPrivateFieldGet(this, _Comments_actions, "f"), { commentText: text });
      return response;
    });
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Comments_continuation, "f"))
        throw new InnertubeError("Continuation not found");
      const data2 = yield __classPrivateFieldGet(this, _Comments_continuation, "f").endpoint.call(__classPrivateFieldGet(this, _Comments_actions, "f"), { parse: true });
      const page = Object.assign({}, __classPrivateFieldGet(this, _Comments_page, "f"));
      if (!page.on_response_received_endpoints || !data2.on_response_received_endpoints)
        throw new InnertubeError("Invalid reponse format, missing on_response_received_endpoints.");
      page.on_response_received_endpoints.pop();
      page.on_response_received_endpoints.push(data2.on_response_received_endpoints[0]);
      return new Comments(__classPrivateFieldGet(this, _Comments_actions, "f"), page, true);
    });
  }
  get has_continuation() {
    return !!__classPrivateFieldGet(this, _Comments_continuation, "f");
  }
  get page() {
    return __classPrivateFieldGet(this, _Comments_page, "f");
  }
};
__name(Comments, "Comments");
_Comments_page = /* @__PURE__ */ new WeakMap(), _Comments_actions = /* @__PURE__ */ new WeakMap(), _Comments_continuation = /* @__PURE__ */ new WeakMap();
var Comments_default = Comments;

// dist/src/parser/youtube/Guide.js
var _Guide_page;
var Guide = class {
  constructor(data2) {
    _Guide_page.set(this, void 0);
    __classPrivateFieldSet(this, _Guide_page, parser_default2.parseResponse(data2), "f");
    this.contents = __classPrivateFieldGet(this, _Guide_page, "f").items.array().as(GuideSection_default, GuideSubscriptionsSection_default);
  }
  get page() {
    return __classPrivateFieldGet(this, _Guide_page, "f");
  }
};
__name(Guide, "Guide");
_Guide_page = /* @__PURE__ */ new WeakMap();
var Guide_default = Guide;

// dist/src/parser/youtube/History.js
var History = class extends Feed_default {
  constructor(actions, data2, already_parsed = false) {
    super(actions, data2, already_parsed);
    this.sections = this.memo.getType(ItemSection_default);
    this.feed_actions = this.memo.getType(BrowseFeedActions_default).first();
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.getContinuationData();
      if (!response)
        throw new Error("No continuation data found");
      return new History(this.actions, response, true);
    });
  }
};
__name(History, "History");
var History_default = History;

// dist/src/parser/youtube/HomeFeed.js
var HomeFeed = class extends FilterableFeed_default {
  constructor(actions, data2, already_parsed = false) {
    super(actions, data2, already_parsed);
    this.header = this.memo.getType(FeedTabbedHeader_default).first();
    this.contents = this.memo.getType(RichGrid_default).first() || this.page.on_response_received_actions.first();
  }
  applyFilter(filter) {
    const _super = Object.create(null, {
      getFilteredFeed: { get: () => super.getFilteredFeed }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const feed = yield _super.getFilteredFeed.call(this, filter);
      return new HomeFeed(this.actions, feed.page, true);
    });
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuation: { get: () => super.getContinuation }
    });
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      const feed = yield _super.getContinuation.call(this);
      feed.page.header = this.page.header;
      (_a7 = feed.page.header_memo) === null || _a7 === void 0 ? void 0 : _a7.set(this.header.type, [this.header]);
      return new HomeFeed(this.actions, feed.page, true);
    });
  }
};
__name(HomeFeed, "HomeFeed");

// dist/src/parser/youtube/HashtagFeed.js
var HashtagFeed = class extends FilterableFeed_default {
  constructor(actions, response) {
    super(actions, response);
    if (!this.page.contents_memo)
      throw new InnertubeError("Unexpected response", this.page);
    const tab = this.page.contents_memo.getType(Tab_default).first();
    if (!tab.content)
      throw new InnertubeError("Content tab has no content", tab);
    if (this.page.header) {
      this.header = this.page.header.item().as(HashtagHeader_default);
    }
    this.contents = tab.content.as(RichGrid_default);
  }
  applyFilter(filter) {
    const _super = Object.create(null, {
      getFilteredFeed: { get: () => super.getFilteredFeed }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield _super.getFilteredFeed.call(this, filter);
      return new HashtagFeed(this.actions, response.page);
    });
  }
};
__name(HashtagFeed, "HashtagFeed");

// dist/src/parser/youtube/ItemMenu.js
var _ItemMenu_page;
var _ItemMenu_actions;
var _ItemMenu_items;
var ItemMenu = class {
  constructor(data2, actions) {
    _ItemMenu_page.set(this, void 0);
    _ItemMenu_actions.set(this, void 0);
    _ItemMenu_items.set(this, void 0);
    __classPrivateFieldSet(this, _ItemMenu_page, data2, "f");
    __classPrivateFieldSet(this, _ItemMenu_actions, actions, "f");
    const menu = data2 === null || data2 === void 0 ? void 0 : data2.live_chat_item_context_menu_supported_renderers;
    if (!menu || !menu.is(Menu_default))
      throw new InnertubeError('Response did not have a "live_chat_item_context_menu_supported_renderers" property. The call may have failed.');
    __classPrivateFieldSet(this, _ItemMenu_items, menu.as(Menu_default).items, "f");
  }
  selectItem(item) {
    return __awaiter(this, void 0, void 0, function* () {
      let endpoint;
      if (item instanceof Button_default) {
        if (!item.endpoint)
          throw new InnertubeError("Item does not have an endpoint.");
        endpoint = item.endpoint;
      } else {
        const button = __classPrivateFieldGet(this, _ItemMenu_items, "f").find((button2) => {
          if (!button2.is(MenuServiceItem_default)) {
            return false;
          }
          const menuServiceItem = button2.as(MenuServiceItem_default);
          return menuServiceItem.icon_type === item;
        });
        if (!button || !button.is(MenuServiceItem_default))
          throw new InnertubeError(`Button "${item}" not found.`);
        endpoint = button.endpoint;
      }
      if (!endpoint)
        throw new InnertubeError("Target button does not have an endpoint.");
      const response = yield endpoint.call(__classPrivateFieldGet(this, _ItemMenu_actions, "f"), { parse: true });
      return response;
    });
  }
  items() {
    return __classPrivateFieldGet(this, _ItemMenu_items, "f");
  }
  page() {
    return __classPrivateFieldGet(this, _ItemMenu_page, "f");
  }
};
__name(ItemMenu, "ItemMenu");
_ItemMenu_page = /* @__PURE__ */ new WeakMap(), _ItemMenu_actions = /* @__PURE__ */ new WeakMap(), _ItemMenu_items = /* @__PURE__ */ new WeakMap();
var ItemMenu_default = ItemMenu;

// dist/src/parser/youtube/Playlist.js
var _Playlist_instances;
var _Playlist_getStat;
var Playlist2 = class extends Feed_default {
  constructor(actions, data2, already_parsed = false) {
    var _a7, _b, _c, _d;
    super(actions, data2, already_parsed);
    _Playlist_instances.add(this);
    const header = this.memo.getType(PlaylistHeader_default).first();
    const primary_info = this.memo.getType(PlaylistSidebarPrimaryInfo_default).first();
    const secondary_info = this.memo.getType(PlaylistSidebarSecondaryInfo_default).first();
    if (!primary_info && !secondary_info)
      throw new InnertubeError("This playlist does not exist");
    this.info = Object.assign(Object.assign({}, (_a7 = this.page.metadata) === null || _a7 === void 0 ? void 0 : _a7.item().as(PlaylistMetadata_default)), {
      author: (_c = (_b = secondary_info === null || secondary_info === void 0 ? void 0 : secondary_info.owner) === null || _b === void 0 ? void 0 : _b.as(VideoOwner_default).author) !== null && _c !== void 0 ? _c : header === null || header === void 0 ? void 0 : header.author,
      thumbnails: (_d = primary_info === null || primary_info === void 0 ? void 0 : primary_info.thumbnail_renderer) === null || _d === void 0 ? void 0 : _d.as(PlaylistVideoThumbnail_default, PlaylistCustomThumbnail_default).thumbnail,
      total_items: __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 0, primary_info),
      views: __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 1, primary_info),
      last_updated: __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 2, primary_info),
      can_share: header === null || header === void 0 ? void 0 : header.can_share,
      can_delete: header === null || header === void 0 ? void 0 : header.can_delete,
      is_editable: header === null || header === void 0 ? void 0 : header.is_editable,
      privacy: header === null || header === void 0 ? void 0 : header.privacy
    });
    this.menu = primary_info === null || primary_info === void 0 ? void 0 : primary_info.menu;
    this.endpoint = primary_info === null || primary_info === void 0 ? void 0 : primary_info.endpoint;
    this.messages = this.memo.getType(Message_default);
  }
  get items() {
    return this.videos;
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      const page = yield this.getContinuationData();
      if (!page)
        throw new InnertubeError("Could not get continuation data");
      return new Playlist2(this.actions, page, true);
    });
  }
};
__name(Playlist2, "Playlist");
_Playlist_instances = /* @__PURE__ */ new WeakSet(), _Playlist_getStat = /* @__PURE__ */ __name(function _Playlist_getStat2(index, primary_info) {
  var _a7;
  if (!primary_info || !primary_info.stats)
    return "N/A";
  return ((_a7 = primary_info.stats[index]) === null || _a7 === void 0 ? void 0 : _a7.toString()) || "N/A";
}, "_Playlist_getStat");
var Playlist_default2 = Playlist2;

// dist/src/parser/youtube/Library.js
var _Library_instances;
var _Library_getAll;
var Library = class extends Feed_default {
  constructor(actions, data2) {
    super(actions, data2);
    _Library_instances.add(this);
    if (!this.page.contents_memo)
      throw new InnertubeError("Page contents not found");
    const stats = this.page.contents_memo.getType(ProfileColumnStats_default).first();
    const user_info = this.page.contents_memo.getType(ProfileColumnUserInfo_default).first();
    this.profile = { stats, user_info };
    const shelves = this.page.contents_memo.getType(Shelf_default);
    this.sections = shelves.map((shelf) => {
      var _a7;
      return {
        type: shelf.icon_type,
        title: shelf.title,
        contents: ((_a7 = shelf.content) === null || _a7 === void 0 ? void 0 : _a7.key("items").array()) || [],
        getAll: () => __classPrivateFieldGet(this, _Library_instances, "m", _Library_getAll).call(this, shelf)
      };
    });
  }
  get history() {
    return this.sections.find((section) => section.type === "WATCH_HISTORY");
  }
  get watch_later() {
    return this.sections.find((section) => section.type === "WATCH_LATER");
  }
  get liked_videos() {
    return this.sections.find((section) => section.type === "LIKE");
  }
  get playlists_section() {
    return this.sections.find((section) => section.type === "PLAYLISTS");
  }
  get clips() {
    return this.sections.find((section) => section.type === "CONTENT_CUT");
  }
};
__name(Library, "Library");
_Library_instances = /* @__PURE__ */ new WeakSet(), _Library_getAll = /* @__PURE__ */ __name(function _Library_getAll2(shelf) {
  var _a7;
  return __awaiter(this, void 0, void 0, function* () {
    if (!((_a7 = shelf.menu) === null || _a7 === void 0 ? void 0 : _a7.as(Menu_default).hasKey("top_level_buttons")))
      throw new InnertubeError(`The ${shelf.title.text} shelf doesn't have more items`);
    const button = shelf.menu.as(Menu_default).top_level_buttons.firstOfType(Button_default);
    if (!button)
      throw new InnertubeError("Did not find target button.");
    const page = yield button.as(Button_default).endpoint.call(this.actions, { parse: true });
    switch (shelf.icon_type) {
      case "LIKE":
      case "WATCH_LATER":
        return new Playlist_default2(this.actions, page, true);
      case "WATCH_HISTORY":
        return new History_default(this.actions, page, true);
      case "CONTENT_CUT":
        return new Feed_default(this.actions, page, true);
      default:
        throw new InnertubeError("Target shelf not implemented.");
    }
  });
}, "_Library_getAll");
var Library_default = Library;

// dist/src/parser/youtube/SmoothedQueue.js
var _SmoothedQueue_last_update_time;
var _SmoothedQueue_estimated_update_interval;
var _SmoothedQueue_callback;
var _SmoothedQueue_action_queue;
var _SmoothedQueue_next_update_id;
var _SmoothedQueue_poll_response_delay_queue;
function flattenQueue(queue) {
  const nodes = [];
  for (const group of queue) {
    if (Array.isArray(group)) {
      for (const node of group) {
        nodes.push(node);
      }
    } else {
      nodes.push(group);
    }
  }
  return nodes;
}
__name(flattenQueue, "flattenQueue");
var DelayQueue = class {
  constructor() {
    this.front = [];
    this.back = [];
  }
  isEmpty() {
    return !this.front.length && !this.back.length;
  }
  clear() {
    this.front = [];
    this.back = [];
  }
  getValues() {
    return this.front.concat(this.back.reverse());
  }
};
__name(DelayQueue, "DelayQueue");
var SmoothedQueue = class {
  constructor() {
    _SmoothedQueue_last_update_time.set(this, void 0);
    _SmoothedQueue_estimated_update_interval.set(this, void 0);
    _SmoothedQueue_callback.set(this, void 0);
    _SmoothedQueue_action_queue.set(this, void 0);
    _SmoothedQueue_next_update_id.set(this, void 0);
    _SmoothedQueue_poll_response_delay_queue.set(this, void 0);
    __classPrivateFieldSet(this, _SmoothedQueue_last_update_time, null, "f");
    __classPrivateFieldSet(this, _SmoothedQueue_estimated_update_interval, null, "f");
    __classPrivateFieldSet(this, _SmoothedQueue_callback, null, "f");
    __classPrivateFieldSet(this, _SmoothedQueue_action_queue, [], "f");
    __classPrivateFieldSet(this, _SmoothedQueue_next_update_id, null, "f");
    __classPrivateFieldSet(this, _SmoothedQueue_poll_response_delay_queue, new DelayQueue(), "f");
  }
  enqueueActionGroup(group) {
    if (__classPrivateFieldGet(this, _SmoothedQueue_last_update_time, "f") !== null) {
      const delay = Date.now() - __classPrivateFieldGet(this, _SmoothedQueue_last_update_time, "f");
      __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").back.push(delay);
      if (5 < __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").front.length + __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").back.length) {
        if (!__classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").front.length) {
          __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").front = __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").back;
          __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").front.reverse();
          __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").back = [];
        }
        __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").front.pop();
      }
      __classPrivateFieldSet(this, _SmoothedQueue_estimated_update_interval, Math.max(...__classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f").getValues()), "f");
    }
    __classPrivateFieldSet(this, _SmoothedQueue_last_update_time, Date.now(), "f");
    __classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").push(group);
    if (__classPrivateFieldGet(this, _SmoothedQueue_next_update_id, "f") === null) {
      __classPrivateFieldSet(this, _SmoothedQueue_next_update_id, setTimeout(this.emitSmoothedActions.bind(this)), "f");
    }
  }
  emitSmoothedActions() {
    __classPrivateFieldSet(this, _SmoothedQueue_next_update_id, null, "f");
    if (__classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").length) {
      let delay = 1e4;
      if (__classPrivateFieldGet(this, _SmoothedQueue_estimated_update_interval, "f") !== null && __classPrivateFieldGet(this, _SmoothedQueue_last_update_time, "f") !== null) {
        delay = __classPrivateFieldGet(this, _SmoothedQueue_estimated_update_interval, "f") - Date.now() + __classPrivateFieldGet(this, _SmoothedQueue_last_update_time, "f");
      }
      delay = __classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").length < delay / 80 ? 1 : Math.ceil(__classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").length / (delay / 80));
      const actions = flattenQueue(__classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").splice(0, delay));
      if (__classPrivateFieldGet(this, _SmoothedQueue_callback, "f")) {
        __classPrivateFieldGet(this, _SmoothedQueue_callback, "f").call(this, actions);
      }
      if (__classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f") !== null) {
        delay == 1 ? (delay = __classPrivateFieldGet(this, _SmoothedQueue_estimated_update_interval, "f") / __classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f").length, delay *= Math.random() + 0.5, delay = Math.min(1e3, delay), delay = Math.max(80, delay)) : delay = 80;
        __classPrivateFieldSet(this, _SmoothedQueue_next_update_id, setTimeout(this.emitSmoothedActions.bind(this), delay), "f");
      }
    }
  }
  clear() {
    if (__classPrivateFieldGet(this, _SmoothedQueue_next_update_id, "f") !== null) {
      clearTimeout(__classPrivateFieldGet(this, _SmoothedQueue_next_update_id, "f"));
      __classPrivateFieldSet(this, _SmoothedQueue_next_update_id, null, "f");
    }
    __classPrivateFieldSet(this, _SmoothedQueue_action_queue, [], "f");
  }
  set callback(cb) {
    __classPrivateFieldSet(this, _SmoothedQueue_callback, cb, "f");
  }
  get callback() {
    return __classPrivateFieldGet(this, _SmoothedQueue_callback, "f");
  }
  get action_queue() {
    return __classPrivateFieldGet(this, _SmoothedQueue_action_queue, "f");
  }
  get estimated_update_interval() {
    return __classPrivateFieldGet(this, _SmoothedQueue_estimated_update_interval, "f");
  }
  get last_update_time() {
    return __classPrivateFieldGet(this, _SmoothedQueue_last_update_time, "f");
  }
  get next_update_id() {
    return __classPrivateFieldGet(this, _SmoothedQueue_next_update_id, "f");
  }
  get poll_response_delay_queue() {
    return __classPrivateFieldGet(this, _SmoothedQueue_poll_response_delay_queue, "f");
  }
};
__name(SmoothedQueue, "SmoothedQueue");
_SmoothedQueue_last_update_time = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_estimated_update_interval = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_callback = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_action_queue = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_next_update_id = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_poll_response_delay_queue = /* @__PURE__ */ new WeakMap();
var SmoothedQueue_default = SmoothedQueue;

// dist/src/parser/youtube/LiveChat.js
var _LiveChat_instances;
var _LiveChat_actions;
var _LiveChat_video_id;
var _LiveChat_channel_id;
var _LiveChat_continuation;
var _LiveChat_mcontinuation;
var _LiveChat_retry_count;
var _LiveChat_pollLivechat;
var _LiveChat_emitSmoothedActions;
var _LiveChat_pollMetadata;
var _LiveChat_wait;
var LiveChat2 = class extends EventEmitterLike_default {
  constructor(video_info) {
    var _a7, _b;
    super();
    _LiveChat_instances.add(this);
    _LiveChat_actions.set(this, void 0);
    _LiveChat_video_id.set(this, void 0);
    _LiveChat_channel_id.set(this, void 0);
    _LiveChat_continuation.set(this, void 0);
    _LiveChat_mcontinuation.set(this, void 0);
    _LiveChat_retry_count.set(this, 0);
    this.running = false;
    this.is_replay = false;
    __classPrivateFieldSet(this, _LiveChat_video_id, video_info.basic_info.id, "f");
    __classPrivateFieldSet(this, _LiveChat_channel_id, video_info.basic_info.channel_id, "f");
    __classPrivateFieldSet(this, _LiveChat_actions, video_info.actions, "f");
    __classPrivateFieldSet(this, _LiveChat_continuation, (_a7 = video_info.livechat) === null || _a7 === void 0 ? void 0 : _a7.continuation, "f");
    this.is_replay = ((_b = video_info.livechat) === null || _b === void 0 ? void 0 : _b.is_replay) || false;
    this.smoothed_queue = new SmoothedQueue_default();
    this.smoothed_queue.callback = (actions) => __awaiter(this, void 0, void 0, function* () {
      if (!actions.length) {
        yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
      } else if (actions.length < 10) {
        yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
      } else if (this.is_replay) {
        __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
        yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
      } else {
        __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
      }
      if (this.running) {
        __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
      }
    });
  }
  on(type, listener) {
    super.on(type, listener);
  }
  once(type, listener) {
    super.once(type, listener);
  }
  start() {
    if (!this.running) {
      this.running = true;
      __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
      __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollMetadata).call(this);
    }
  }
  stop() {
    this.smoothed_queue.clear();
    this.running = false;
  }
  sendMessage(text) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").execute("/live_chat/send_message", {
        params: proto_default.encodeMessageParams(__classPrivateFieldGet(this, _LiveChat_channel_id, "f"), __classPrivateFieldGet(this, _LiveChat_video_id, "f")),
        richMessage: { textSegments: [{ text }] },
        clientMessageId: Platform.shim.uuidv4(),
        client: "ANDROID",
        parse: true
      });
      if (!response.actions)
        throw new InnertubeError("Unexpected response from send_message", response);
      return response.actions.array().as(AddChatItemAction_default);
    });
  }
  applyFilter(filter) {
    var _a7, _b, _c, _d, _e, _f, _g;
    if (!this.initial_info)
      throw new InnertubeError("Cannot apply filter before initial info is retrieved.");
    const menu_items = (_c = (_b = (_a7 = this.initial_info) === null || _a7 === void 0 ? void 0 : _a7.header) === null || _b === void 0 ? void 0 : _b.view_selector) === null || _c === void 0 ? void 0 : _c.sub_menu_items;
    if (filter === "TOP_CHAT") {
      if ((_d = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(0)) === null || _d === void 0 ? void 0 : _d.selected)
        return;
      __classPrivateFieldSet(this, _LiveChat_continuation, (_e = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(0)) === null || _e === void 0 ? void 0 : _e.continuation, "f");
    } else {
      if ((_f = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(1)) === null || _f === void 0 ? void 0 : _f.selected)
        return;
      __classPrivateFieldSet(this, _LiveChat_continuation, (_g = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(1)) === null || _g === void 0 ? void 0 : _g.continuation, "f");
    }
  }
  getItemMenu(item) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!item.hasKey("menu_endpoint") || !item.key("menu_endpoint").isInstanceof(NavigationEndpoint_default))
        throw new InnertubeError("This item does not have a menu.", item);
      const response = yield item.key("menu_endpoint").instanceof(NavigationEndpoint_default).call(__classPrivateFieldGet(this, _LiveChat_actions, "f"), { parse: true });
      if (!response)
        throw new InnertubeError("Could not retrieve item menu.", item);
      return new ItemMenu_default(response, __classPrivateFieldGet(this, _LiveChat_actions, "f"));
    });
  }
  selectButton(button) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield button.endpoint.call(__classPrivateFieldGet(this, _LiveChat_actions, "f"), { parse: true });
      return response;
    });
  }
};
__name(LiveChat2, "LiveChat");
_LiveChat_actions = /* @__PURE__ */ new WeakMap(), _LiveChat_video_id = /* @__PURE__ */ new WeakMap(), _LiveChat_channel_id = /* @__PURE__ */ new WeakMap(), _LiveChat_continuation = /* @__PURE__ */ new WeakMap(), _LiveChat_mcontinuation = /* @__PURE__ */ new WeakMap(), _LiveChat_retry_count = /* @__PURE__ */ new WeakMap(), _LiveChat_instances = /* @__PURE__ */ new WeakSet(), _LiveChat_pollLivechat = /* @__PURE__ */ __name(function _LiveChat_pollLivechat2() {
  (() => __awaiter(this, void 0, void 0, function* () {
    var _a7, _b;
    try {
      const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").execute(this.is_replay ? "live_chat/get_live_chat_replay" : "live_chat/get_live_chat", { continuation: __classPrivateFieldGet(this, _LiveChat_continuation, "f"), parse: true });
      const contents = response.continuation_contents;
      if (!contents) {
        this.emit("error", new InnertubeError("Unexpected live chat incremental continuation response", response));
        this.emit("end");
        this.stop();
      }
      if (!(contents instanceof LiveChatContinuation)) {
        this.stop();
        this.emit("end");
        return;
      }
      __classPrivateFieldSet(this, _LiveChat_continuation, contents.continuation.token, "f");
      if (contents.header) {
        this.initial_info = contents;
        this.emit("start", contents);
        if (this.running)
          __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat2).call(this);
      } else {
        this.smoothed_queue.enqueueActionGroup(contents.actions);
      }
      __classPrivateFieldSet(this, _LiveChat_retry_count, 0, "f");
    } catch (err) {
      this.emit("error", err);
      if ((__classPrivateFieldSet(this, _LiveChat_retry_count, (_b = __classPrivateFieldGet(this, _LiveChat_retry_count, "f"), _a7 = _b++, _b), "f"), _a7) < 10) {
        yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
        __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat2).call(this);
      } else {
        this.emit("error", new InnertubeError("Reached retry limit for incremental continuation requests", err));
        this.emit("end");
        this.stop();
      }
    }
  }))();
}, "_LiveChat_pollLivechat"), _LiveChat_emitSmoothedActions = /* @__PURE__ */ __name(function _LiveChat_emitSmoothedActions2(action_queue) {
  return __awaiter(this, void 0, void 0, function* () {
    const base = 1e4;
    let delay = action_queue.length < base / 80 ? 1 : Math.ceil(action_queue.length / (base / 80));
    const emit_delay_ms = delay == 1 ? (delay = base / action_queue.length, delay *= Math.random() + 0.5, delay = Math.min(1e3, delay), delay = Math.max(80, delay)) : delay = 80;
    for (const action of action_queue) {
      yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, emit_delay_ms);
      this.emit("chat-update", action);
    }
  });
}, "_LiveChat_emitSmoothedActions"), _LiveChat_pollMetadata = /* @__PURE__ */ __name(function _LiveChat_pollMetadata2() {
  (() => __awaiter(this, void 0, void 0, function* () {
    var _a7, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    try {
      const payload = { videoId: __classPrivateFieldGet(this, _LiveChat_video_id, "f") };
      if (__classPrivateFieldGet(this, _LiveChat_mcontinuation, "f")) {
        payload.continuation = __classPrivateFieldGet(this, _LiveChat_mcontinuation, "f");
      }
      const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").execute("/updated_metadata", payload);
      const data2 = parser_default.parseResponse(response.data);
      __classPrivateFieldSet(this, _LiveChat_mcontinuation, (_a7 = data2.continuation) === null || _a7 === void 0 ? void 0 : _a7.token, "f");
      this.metadata = {
        title: ((_b = data2.actions) === null || _b === void 0 ? void 0 : _b.array().firstOfType(UpdateTitleAction_default)) || ((_c = this.metadata) === null || _c === void 0 ? void 0 : _c.title),
        description: ((_d = data2.actions) === null || _d === void 0 ? void 0 : _d.array().firstOfType(UpdateDescriptionAction_default)) || ((_e = this.metadata) === null || _e === void 0 ? void 0 : _e.description),
        views: ((_f = data2.actions) === null || _f === void 0 ? void 0 : _f.array().firstOfType(UpdateViewershipAction_default)) || ((_g = this.metadata) === null || _g === void 0 ? void 0 : _g.views),
        likes: ((_h = data2.actions) === null || _h === void 0 ? void 0 : _h.array().firstOfType(UpdateToggleButtonTextAction_default)) || ((_j = this.metadata) === null || _j === void 0 ? void 0 : _j.likes),
        date: ((_k = data2.actions) === null || _k === void 0 ? void 0 : _k.array().firstOfType(UpdateDateTextAction_default)) || ((_l = this.metadata) === null || _l === void 0 ? void 0 : _l.date)
      };
      this.emit("metadata-update", this.metadata);
      yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 5e3);
      if (this.running)
        __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollMetadata2).call(this);
    } catch (err) {
      yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
      if (this.running)
        __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollMetadata2).call(this);
    }
  }))();
}, "_LiveChat_pollMetadata"), _LiveChat_wait = /* @__PURE__ */ __name(function _LiveChat_wait2(ms) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
  });
}, "_LiveChat_wait");
var LiveChat_default2 = LiveChat2;

// dist/src/parser/youtube/NotificationsMenu.js
var _NotificationsMenu_page;
var _NotificationsMenu_actions;
var NotificationsMenu = class {
  constructor(actions, response) {
    _NotificationsMenu_page.set(this, void 0);
    _NotificationsMenu_actions.set(this, void 0);
    __classPrivateFieldSet(this, _NotificationsMenu_actions, actions, "f");
    __classPrivateFieldSet(this, _NotificationsMenu_page, parser_default.parseResponse(response.data), "f");
    this.header = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.getType(SimpleMenuHeader_default).first();
    this.contents = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.getType(Notification_default);
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      const continuation = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.getType(ContinuationItem_default).first();
      if (!continuation)
        throw new InnertubeError("Continuation not found");
      const response = yield continuation.endpoint.call(__classPrivateFieldGet(this, _NotificationsMenu_actions, "f"), { parse: false });
      return new NotificationsMenu(__classPrivateFieldGet(this, _NotificationsMenu_actions, "f"), response);
    });
  }
  get page() {
    return __classPrivateFieldGet(this, _NotificationsMenu_page, "f");
  }
};
__name(NotificationsMenu, "NotificationsMenu");
_NotificationsMenu_page = /* @__PURE__ */ new WeakMap(), _NotificationsMenu_actions = /* @__PURE__ */ new WeakMap();
var NotificationsMenu_default = NotificationsMenu;

// dist/src/parser/youtube/Search.js
var Search = class extends Feed_default {
  constructor(actions, data2, already_parsed = false) {
    var _a7, _b, _c, _d, _e, _f;
    super(actions, data2, already_parsed);
    const contents = ((_a7 = this.page.contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(SectionList_default).first().contents) || ((_b = this.page.on_response_received_commands) === null || _b === void 0 ? void 0 : _b.first().contents);
    if (!contents)
      throw new InnertubeError("No contents found in search response");
    this.results = (_c = contents.find((content) => content.is(ItemSection_default) && content.contents && content.contents.length > 0)) === null || _c === void 0 ? void 0 : _c.as(ItemSection_default).contents;
    this.refinements = this.page.refinements || [];
    this.estimated_results = this.page.estimated_results;
    this.sub_menu = (_d = this.page.contents_memo) === null || _d === void 0 ? void 0 : _d.getType(SearchSubMenu_default).first();
    this.watch_card = (_e = this.page.contents_memo) === null || _e === void 0 ? void 0 : _e.getType(UniversalWatchCard_default).first();
    this.refinement_cards = (_f = this.results) === null || _f === void 0 ? void 0 : _f.firstOfType(HorizontalCardList_default);
  }
  selectRefinementCard(card) {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      let target_card;
      if (typeof card === "string") {
        if (!this.refinement_cards)
          throw new InnertubeError("No refinement cards found.");
        target_card = (_b = (_a7 = this.refinement_cards) === null || _a7 === void 0 ? void 0 : _a7.cards.get({ query: card })) === null || _b === void 0 ? void 0 : _b.as(SearchRefinementCard_default);
        if (!target_card)
          throw new InnertubeError(`Refinement card "${card}" not found`, { available_cards: this.refinement_card_queries });
      } else if (card.type === "SearchRefinementCard") {
        target_card = card;
      } else {
        throw new InnertubeError("Invalid refinement card!");
      }
      const page = yield target_card.endpoint.call(this.actions, { parse: true });
      return new Search(this.actions, page, true);
    });
  }
  get refinement_card_queries() {
    var _a7;
    return ((_a7 = this.refinement_cards) === null || _a7 === void 0 ? void 0 : _a7.cards.as(SearchRefinementCard_default).map((card) => card.query)) || [];
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.getContinuationData();
      if (!response)
        throw new InnertubeError("Could not get continuation data");
      return new Search(this.actions, response, true);
    });
  }
};
__name(Search, "Search");
var Search_default = Search;

// dist/src/parser/youtube/Settings.js
var _Settings_page;
var _Settings_actions;
var Settings = class {
  constructor(actions, response) {
    var _a7, _b, _c, _d;
    _Settings_page.set(this, void 0);
    _Settings_actions.set(this, void 0);
    __classPrivateFieldSet(this, _Settings_actions, actions, "f");
    __classPrivateFieldSet(this, _Settings_page, parser_default.parseResponse(response.data), "f");
    this.sidebar = (_a7 = __classPrivateFieldGet(this, _Settings_page, "f").sidebar) === null || _a7 === void 0 ? void 0 : _a7.as(SettingsSidebar_default);
    if (!__classPrivateFieldGet(this, _Settings_page, "f").contents)
      throw new InnertubeError("Page contents not found");
    const tab = __classPrivateFieldGet(this, _Settings_page, "f").contents.item().as(TwoColumnBrowseResults_default).tabs.array().as(Tab_default).get({ selected: true });
    if (!tab)
      throw new InnertubeError("Target tab not found");
    const contents = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(SectionList_default).contents.as(ItemSection_default);
    this.introduction = (_d = (_c = contents === null || contents === void 0 ? void 0 : contents.shift()) === null || _c === void 0 ? void 0 : _c.contents) === null || _d === void 0 ? void 0 : _d.firstOfType(PageIntroduction_default);
    this.sections = contents === null || contents === void 0 ? void 0 : contents.map((el) => {
      var _a8;
      return {
        title: ((_a8 = el.header) === null || _a8 === void 0 ? void 0 : _a8.title.toString()) || null,
        contents: el.contents
      };
    });
  }
  selectSidebarItem(target_item) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.sidebar)
        throw new InnertubeError("Sidebar not available");
      let item;
      if (typeof target_item === "string") {
        item = this.sidebar.items.get({ title: target_item });
        if (!item)
          throw new InnertubeError(`Item "${target_item}" not found`, { available_items: this.sidebar_items });
      } else if (target_item === null || target_item === void 0 ? void 0 : target_item.is(CompactLink_default)) {
        item = target_item;
      } else {
        throw new InnertubeError("Invalid item", { target_item });
      }
      const response = yield item.endpoint.call(__classPrivateFieldGet(this, _Settings_actions, "f"), { parse: false });
      return new Settings(__classPrivateFieldGet(this, _Settings_actions, "f"), response);
    });
  }
  getSettingOption(name) {
    var _a7;
    if (!this.sections)
      throw new InnertubeError("Sections not available");
    for (const section of this.sections) {
      if (!section.contents)
        continue;
      for (const el of section.contents) {
        const options = el.as(SettingsOptions_default).options;
        if (options) {
          for (const option of options) {
            if (option.is(SettingsSwitch_default) && ((_a7 = option.title) === null || _a7 === void 0 ? void 0 : _a7.toString()) === name)
              return option;
          }
        }
      }
    }
    throw new InnertubeError(`Option "${name}" not found`, { available_options: this.setting_options });
  }
  get setting_options() {
    if (!this.sections)
      throw new InnertubeError("Sections not available");
    let options = [];
    for (const section of this.sections) {
      if (!section.contents)
        continue;
      for (const el of section.contents) {
        if (el.as(SettingsOptions_default).options)
          options = options.concat(el.as(SettingsOptions_default).options);
      }
    }
    return options.map((opt) => {
      var _a7;
      return (_a7 = opt.title) === null || _a7 === void 0 ? void 0 : _a7.toString();
    }).filter((el) => el);
  }
  get sidebar_items() {
    if (!this.sidebar)
      throw new InnertubeError("Sidebar not available");
    return this.sidebar.items.map((item) => item.title.toString());
  }
  get page() {
    return __classPrivateFieldGet(this, _Settings_page, "f");
  }
};
__name(Settings, "Settings");
_Settings_page = /* @__PURE__ */ new WeakMap(), _Settings_actions = /* @__PURE__ */ new WeakMap();
var Settings_default = Settings;

// dist/src/parser/youtube/TimeWatched.js
var _TimeWatched_page;
var TimeWatched = class {
  constructor(response) {
    var _a7;
    _TimeWatched_page.set(this, void 0);
    __classPrivateFieldSet(this, _TimeWatched_page, parser_default.parseResponse(response.data), "f");
    if (!__classPrivateFieldGet(this, _TimeWatched_page, "f").contents)
      throw new InnertubeError("Page contents not found");
    const tab = __classPrivateFieldGet(this, _TimeWatched_page, "f").contents.item().as(SingleColumnBrowseResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find target tab.");
    this.contents = (_a7 = tab.content) === null || _a7 === void 0 ? void 0 : _a7.as(SectionList_default).contents.as(ItemSection_default);
  }
  get page() {
    return __classPrivateFieldGet(this, _TimeWatched_page, "f");
  }
};
__name(TimeWatched, "TimeWatched");
_TimeWatched_page = /* @__PURE__ */ new WeakMap();
var TimeWatched_default = TimeWatched;

// dist/src/core/mixins/index.js
var mixins_exports = {};
__export(mixins_exports, {
  Feed: () => Feed_default,
  FilterableFeed: () => FilterableFeed_default,
  MediaInfo: () => MediaInfo_default,
  TabbedFeed: () => TabbedFeed_default
});

// dist/src/core/mixins/MediaInfo.js
var _MediaInfo_page;
var _MediaInfo_actions;
var _MediaInfo_cpn;
var _MediaInfo_playback_tracking;
var MediaInfo = class {
  constructor(data2, actions, cpn) {
    var _a7, _b;
    _MediaInfo_page.set(this, void 0);
    _MediaInfo_actions.set(this, void 0);
    _MediaInfo_cpn.set(this, void 0);
    _MediaInfo_playback_tracking.set(this, void 0);
    __classPrivateFieldSet(this, _MediaInfo_actions, actions, "f");
    const info = parser_default.parseResponse(data2[0].data);
    const next = ((_a7 = data2 === null || data2 === void 0 ? void 0 : data2[1]) === null || _a7 === void 0 ? void 0 : _a7.data) ? parser_default.parseResponse(data2[1].data) : void 0;
    __classPrivateFieldSet(this, _MediaInfo_page, [info, next], "f");
    __classPrivateFieldSet(this, _MediaInfo_cpn, cpn, "f");
    if (((_b = info.playability_status) === null || _b === void 0 ? void 0 : _b.status) === "ERROR")
      throw new InnertubeError("This video is unavailable", info.playability_status);
    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;
    __classPrivateFieldSet(this, _MediaInfo_playback_tracking, info.playback_tracking, "f");
  }
  toDash(url_transformer, format_filter) {
    return __awaiter(this, void 0, void 0, function* () {
      return FormatUtils_default.toDash(this.streaming_data, url_transformer, format_filter, __classPrivateFieldGet(this, _MediaInfo_cpn, "f"), __classPrivateFieldGet(this, _MediaInfo_actions, "f").session.player, __classPrivateFieldGet(this, _MediaInfo_actions, "f"));
    });
  }
  chooseFormat(options) {
    return FormatUtils_default.chooseFormat(options, this.streaming_data);
  }
  download(options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      return FormatUtils_default.download(options, __classPrivateFieldGet(this, _MediaInfo_actions, "f"), this.playability_status, this.streaming_data, __classPrivateFieldGet(this, _MediaInfo_actions, "f").session.player, this.cpn);
    });
  }
  addToWatchHistory(client_name = CLIENTS.WEB.NAME, client_version = CLIENTS.WEB.VERSION, replacement = "https://www.") {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _MediaInfo_playback_tracking, "f"))
        throw new InnertubeError("Playback tracking not available");
      const url_params = {
        cpn: __classPrivateFieldGet(this, _MediaInfo_cpn, "f"),
        fmt: 251,
        rtn: 0,
        rt: 0
      };
      const url = __classPrivateFieldGet(this, _MediaInfo_playback_tracking, "f").videostats_playback_url.replace("https://s.", replacement);
      const response = yield __classPrivateFieldGet(this, _MediaInfo_actions, "f").stats(url, {
        client_name,
        client_version
      }, url_params);
      return response;
    });
  }
  get actions() {
    return __classPrivateFieldGet(this, _MediaInfo_actions, "f");
  }
  get cpn() {
    return __classPrivateFieldGet(this, _MediaInfo_cpn, "f");
  }
  get page() {
    return __classPrivateFieldGet(this, _MediaInfo_page, "f");
  }
};
__name(MediaInfo, "MediaInfo");
_MediaInfo_page = /* @__PURE__ */ new WeakMap(), _MediaInfo_actions = /* @__PURE__ */ new WeakMap(), _MediaInfo_cpn = /* @__PURE__ */ new WeakMap(), _MediaInfo_playback_tracking = /* @__PURE__ */ new WeakMap();
var MediaInfo_default = MediaInfo;

// dist/src/parser/youtube/VideoInfo.js
var _VideoInfo_watch_next_continuation;
var VideoInfo = class extends MediaInfo_default {
  constructor(data2, actions, cpn) {
    var _a7, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15;
    super(data2, actions, cpn);
    _VideoInfo_watch_next_continuation.set(this, void 0);
    const [info, next] = this.page;
    if (info.microformat && !((_a7 = info.microformat) === null || _a7 === void 0 ? void 0 : _a7.is(PlayerMicroformat_default, MicroformatData_default)))
      throw new InnertubeError("Invalid microformat", info.microformat);
    this.basic_info = Object.assign(Object.assign(Object.assign({}, info.video_details), {
      embed: ((_b = info.microformat) === null || _b === void 0 ? void 0 : _b.is(PlayerMicroformat_default)) ? (_c = info.microformat) === null || _c === void 0 ? void 0 : _c.embed : null,
      channel: ((_d = info.microformat) === null || _d === void 0 ? void 0 : _d.is(PlayerMicroformat_default)) ? (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.channel : null,
      is_unlisted: (_f = info.microformat) === null || _f === void 0 ? void 0 : _f.is_unlisted,
      is_family_safe: (_g = info.microformat) === null || _g === void 0 ? void 0 : _g.is_family_safe,
      category: ((_h = info.microformat) === null || _h === void 0 ? void 0 : _h.is(PlayerMicroformat_default)) ? (_j = info.microformat) === null || _j === void 0 ? void 0 : _j.category : null,
      has_ypc_metadata: ((_k = info.microformat) === null || _k === void 0 ? void 0 : _k.is(PlayerMicroformat_default)) ? (_l = info.microformat) === null || _l === void 0 ? void 0 : _l.has_ypc_metadata : null,
      start_timestamp: ((_m = info.microformat) === null || _m === void 0 ? void 0 : _m.is(PlayerMicroformat_default)) ? info.microformat.start_timestamp : null,
      view_count: ((_o = info.microformat) === null || _o === void 0 ? void 0 : _o.is(PlayerMicroformat_default)) && isNaN((_p = info.video_details) === null || _p === void 0 ? void 0 : _p.view_count) ? info.microformat.view_count : (_q = info.video_details) === null || _q === void 0 ? void 0 : _q.view_count
    }), { like_count: void 0, is_liked: void 0, is_disliked: void 0 });
    this.annotations = info.annotations;
    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;
    this.captions = info.captions;
    this.cards = info.cards;
    const two_col = (_r = next === null || next === void 0 ? void 0 : next.contents) === null || _r === void 0 ? void 0 : _r.item().as(TwoColumnWatchNextResults_default);
    const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
    const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
    if (results && secondary_results) {
      if (((_s = info.microformat) === null || _s === void 0 ? void 0 : _s.is(PlayerMicroformat_default)) && ((_t = info.microformat) === null || _t === void 0 ? void 0 : _t.category) === "Gaming") {
        const row = (_w = (_v = (_u = results.firstOfType(VideoSecondaryInfo_default)) === null || _u === void 0 ? void 0 : _u.metadata) === null || _v === void 0 ? void 0 : _v.rows) === null || _w === void 0 ? void 0 : _w.firstOfType(RichMetadataRow_default);
        if (row === null || row === void 0 ? void 0 : row.is(RichMetadataRow_default)) {
          this.game_info = {
            title: (_y = (_x = row === null || row === void 0 ? void 0 : row.contents) === null || _x === void 0 ? void 0 : _x.firstOfType(RichMetadata_default)) === null || _y === void 0 ? void 0 : _y.title,
            release_year: (_0 = (_z = row === null || row === void 0 ? void 0 : row.contents) === null || _z === void 0 ? void 0 : _z.firstOfType(RichMetadata_default)) === null || _0 === void 0 ? void 0 : _0.subtitle
          };
        }
      }
      this.primary_info = results.firstOfType(VideoPrimaryInfo_default);
      this.secondary_info = results.firstOfType(VideoSecondaryInfo_default);
      this.merchandise = results.firstOfType(MerchandiseShelf_default);
      this.related_chip_cloud = (_1 = secondary_results.firstOfType(RelatedChipCloud_default)) === null || _1 === void 0 ? void 0 : _1.content.as(ChipCloud_default);
      if (two_col === null || two_col === void 0 ? void 0 : two_col.playlist) {
        this.playlist = two_col.playlist;
      }
      this.watch_next_feed = ((_2 = secondary_results.firstOfType(ItemSection_default)) === null || _2 === void 0 ? void 0 : _2.contents) || secondary_results;
      if (this.watch_next_feed && Array.isArray(this.watch_next_feed) && ((_3 = this.watch_next_feed[this.watch_next_feed.length - 1]) === null || _3 === void 0 ? void 0 : _3.is(ContinuationItem_default)))
        __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, (_4 = this.watch_next_feed.pop()) === null || _4 === void 0 ? void 0 : _4.as(ContinuationItem_default), "f");
      this.player_overlays = (_5 = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _5 === void 0 ? void 0 : _5.item().as(PlayerOverlay_default);
      if (two_col === null || two_col === void 0 ? void 0 : two_col.autoplay) {
        this.autoplay = two_col.autoplay;
      }
      const segmented_like_dislike_button = (_7 = (_6 = this.primary_info) === null || _6 === void 0 ? void 0 : _6.menu) === null || _7 === void 0 ? void 0 : _7.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      if (((_8 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _8 === void 0 ? void 0 : _8.is(ToggleButton_default)) && ((_9 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _9 === void 0 ? void 0 : _9.is(ToggleButton_default))) {
        this.basic_info.like_count = (_10 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _10 === void 0 ? void 0 : _10.like_count;
        this.basic_info.is_liked = (_11 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _11 === void 0 ? void 0 : _11.is_toggled;
        this.basic_info.is_disliked = (_12 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _12 === void 0 ? void 0 : _12.is_toggled;
      }
      const comments_entry_point = (_13 = results.get({ target_id: "comments-entry-point" })) === null || _13 === void 0 ? void 0 : _13.as(ItemSection_default);
      this.comments_entry_point_header = (_14 = comments_entry_point === null || comments_entry_point === void 0 ? void 0 : comments_entry_point.contents) === null || _14 === void 0 ? void 0 : _14.firstOfType(CommentsEntryPointHeader_default);
      this.livechat = (_15 = next === null || next === void 0 ? void 0 : next.contents_memo) === null || _15 === void 0 ? void 0 : _15.getType(LiveChat_default).first();
    }
  }
  selectFilter(target_filter) {
    var _a7, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.related_chip_cloud)
        throw new InnertubeError("Chip cloud not found, cannot apply filter");
      let cloud_chip;
      if (typeof target_filter === "string") {
        const filter = (_b = (_a7 = this.related_chip_cloud) === null || _a7 === void 0 ? void 0 : _a7.chips) === null || _b === void 0 ? void 0 : _b.get({ text: target_filter });
        if (!filter)
          throw new InnertubeError("Invalid filter", { available_filters: this.filters });
        cloud_chip = filter;
      } else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip_default)) {
        cloud_chip = target_filter;
      } else {
        throw new InnertubeError("Invalid cloud chip", target_filter);
      }
      if (cloud_chip.is_selected)
        return this;
      const response = yield (_c = cloud_chip.endpoint) === null || _c === void 0 ? void 0 : _c.call(this.actions, { parse: true });
      const data2 = (_d = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _d === void 0 ? void 0 : _d.get({ target_id: "watch-next-feed" });
      this.watch_next_feed = data2 === null || data2 === void 0 ? void 0 : data2.contents;
      return this;
    });
  }
  addToWatchHistory() {
    const _super = Object.create(null, {
      addToWatchHistory: { get: () => super.addToWatchHistory }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return _super.addToWatchHistory.call(this);
    });
  }
  getWatchNextContinuation() {
    var _a7, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f"))
        throw new InnertubeError("Watch next feed continuation not found");
      const response = yield (_a7 = __classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f")) === null || _a7 === void 0 ? void 0 : _a7.endpoint.call(this.actions, { parse: true });
      const data2 = (_b = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _b === void 0 ? void 0 : _b.get({ type: "appendContinuationItemsAction" });
      if (!data2)
        throw new InnertubeError("AppendContinuationItemsAction not found");
      this.watch_next_feed = data2 === null || data2 === void 0 ? void 0 : data2.contents;
      if ((_d = (_c = this.watch_next_feed) === null || _c === void 0 ? void 0 : _c[this.watch_next_feed.length - 1]) === null || _d === void 0 ? void 0 : _d.is(ContinuationItem_default)) {
        __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, (_e = this.watch_next_feed.pop()) === null || _e === void 0 ? void 0 : _e.as(ContinuationItem_default), "f");
      } else {
        __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, void 0, "f");
      }
      return this;
    });
  }
  like() {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      const segmented_like_dislike_button = (_b = (_a7 = this.primary_info) === null || _a7 === void 0 ? void 0 : _a7.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      const button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button;
      if (!button)
        throw new InnertubeError("Like button not found", { video_id: this.basic_info.id });
      if (!button.is(ToggleButton_default))
        throw new InnertubeError("Like button is not a toggle button. This action is likely disabled for this video.", { video_id: this.basic_info.id });
      if (button.is_toggled)
        throw new InnertubeError("This video is already liked", { video_id: this.basic_info.id });
      const response = yield button.endpoint.call(this.actions);
      return response;
    });
  }
  dislike() {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      const segmented_like_dislike_button = (_b = (_a7 = this.primary_info) === null || _a7 === void 0 ? void 0 : _a7.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      const button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button;
      if (!button)
        throw new InnertubeError("Dislike button not found", { video_id: this.basic_info.id });
      if (!button.is(ToggleButton_default))
        throw new InnertubeError("Dislike button is not a toggle button. This action is likely disabled for this video.", { video_id: this.basic_info.id });
      if (button.is_toggled)
        throw new InnertubeError("This video is already disliked", { video_id: this.basic_info.id });
      const response = yield button.endpoint.call(this.actions);
      return response;
    });
  }
  removeRating() {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      let button;
      const segmented_like_dislike_button = (_b = (_a7 = this.primary_info) === null || _a7 === void 0 ? void 0 : _a7.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      const like_button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button;
      const dislike_button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button;
      if (!(like_button === null || like_button === void 0 ? void 0 : like_button.is(ToggleButton_default)) || !(dislike_button === null || dislike_button === void 0 ? void 0 : dislike_button.is(ToggleButton_default)))
        throw new InnertubeError("Like/Dislike button is not a toggle button. This action is likely disabled for this video.", { video_id: this.basic_info.id });
      if (like_button === null || like_button === void 0 ? void 0 : like_button.is_toggled) {
        button = like_button;
      } else if (dislike_button === null || dislike_button === void 0 ? void 0 : dislike_button.is_toggled) {
        button = dislike_button;
      }
      if (!button)
        throw new InnertubeError("This video is not liked/disliked", { video_id: this.basic_info.id });
      const response = yield button.toggled_endpoint.call(this.actions);
      return response;
    });
  }
  getLiveChat() {
    if (!this.livechat)
      throw new InnertubeError("Live Chat is not available", { video_id: this.basic_info.id });
    return new LiveChat_default2(this);
  }
  getTrailerInfo() {
    var _a7, _b;
    if (this.has_trailer) {
      const player_response = (_b = (_a7 = this.playability_status.error_screen) === null || _a7 === void 0 ? void 0 : _a7.as(PlayerLegacyDesktopYpcTrailer_default).trailer) === null || _b === void 0 ? void 0 : _b.player_response;
      if (player_response) {
        return new VideoInfo([{ data: player_response }], this.actions, this.cpn);
      }
    }
    return null;
  }
  get filters() {
    var _a7, _b;
    return ((_b = (_a7 = this.related_chip_cloud) === null || _a7 === void 0 ? void 0 : _a7.chips) === null || _b === void 0 ? void 0 : _b.map((chip) => {
      var _a8;
      return (_a8 = chip.text) === null || _a8 === void 0 ? void 0 : _a8.toString();
    })) || [];
  }
  get wn_has_continuation() {
    return !!__classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f");
  }
  get autoplay_video_endpoint() {
    var _a7, _b, _c;
    return ((_c = (_b = (_a7 = this.autoplay) === null || _a7 === void 0 ? void 0 : _a7.sets) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.autoplay_video) || null;
  }
  get has_trailer() {
    var _a7;
    return !!((_a7 = this.playability_status.error_screen) === null || _a7 === void 0 ? void 0 : _a7.is(PlayerLegacyDesktopYpcTrailer_default));
  }
  get music_tracks() {
    return [];
  }
};
__name(VideoInfo, "VideoInfo");
_VideoInfo_watch_next_continuation = /* @__PURE__ */ new WeakMap();
var VideoInfo_default = VideoInfo;

// dist/src/parser/ytmusic/index.js
var ytmusic_exports = {};
__export(ytmusic_exports, {
  Album: () => Album_default,
  Artist: () => Artist_default,
  Explore: () => Explore_default,
  HomeFeed: () => HomeFeed_default,
  Library: () => Library_default2,
  LibraryContinuation: () => LibraryContinuation,
  Playlist: () => Playlist_default3,
  Recap: () => Recap_default,
  Search: () => Search_default2,
  TrackInfo: () => TrackInfo_default
});

// dist/src/parser/ytmusic/Album.js
var _Album_page;
var Album = class {
  constructor(response) {
    var _a7, _b, _c;
    _Album_page.set(this, void 0);
    __classPrivateFieldSet(this, _Album_page, parser_default.parseResponse(response.data), "f");
    this.header = (_a7 = __classPrivateFieldGet(this, _Album_page, "f").header) === null || _a7 === void 0 ? void 0 : _a7.item().as(MusicDetailHeader_default);
    this.url = ((_b = __classPrivateFieldGet(this, _Album_page, "f").microformat) === null || _b === void 0 ? void 0 : _b.as(MicroformatData_default).url_canonical) || null;
    if (!__classPrivateFieldGet(this, _Album_page, "f").contents_memo)
      throw new Error("No contents found in the response");
    this.contents = (_c = __classPrivateFieldGet(this, _Album_page, "f").contents_memo.getType(MusicShelf_default)) === null || _c === void 0 ? void 0 : _c.first().contents;
    this.sections = __classPrivateFieldGet(this, _Album_page, "f").contents_memo.getType(MusicCarouselShelf_default) || [];
  }
  get page() {
    return __classPrivateFieldGet(this, _Album_page, "f");
  }
};
__name(Album, "Album");
_Album_page = /* @__PURE__ */ new WeakMap();
var Album_default = Album;

// dist/src/parser/ytmusic/Artist.js
var _Artist_page;
var _Artist_actions;
var Artist = class {
  constructor(response, actions) {
    var _a7, _b, _c;
    _Artist_page.set(this, void 0);
    _Artist_actions.set(this, void 0);
    __classPrivateFieldSet(this, _Artist_page, parser_default.parseResponse(response.data), "f");
    __classPrivateFieldSet(this, _Artist_actions, actions, "f");
    this.header = (_a7 = this.page.header) === null || _a7 === void 0 ? void 0 : _a7.item().as(MusicImmersiveHeader_default, MusicVisualHeader_default, MusicHeader_default);
    const music_shelf = ((_b = __classPrivateFieldGet(this, _Artist_page, "f").contents_memo) === null || _b === void 0 ? void 0 : _b.getType(MusicShelf_default)) || [];
    const music_carousel_shelf = ((_c = __classPrivateFieldGet(this, _Artist_page, "f").contents_memo) === null || _c === void 0 ? void 0 : _c.getType(MusicCarouselShelf_default)) || [];
    this.sections = [...music_shelf, ...music_carousel_shelf];
  }
  getAllSongs() {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      const music_shelves = this.sections.filter((section) => section.type === "MusicShelf");
      if (!music_shelves.length)
        throw new InnertubeError("Could not find any node of type MusicShelf.");
      const shelf = music_shelves.find((shelf2) => shelf2.title.toString() === "Songs");
      if (!shelf)
        throw new InnertubeError("Could not find target shelf (Songs).");
      if (!shelf.endpoint)
        throw new InnertubeError("Target shelf (Songs) did not have an endpoint.");
      const page = yield shelf.endpoint.call(__classPrivateFieldGet(this, _Artist_actions, "f"), { client: "YTMUSIC", parse: true });
      const contents = (_b = (_a7 = page.contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(MusicPlaylistShelf_default)) === null || _b === void 0 ? void 0 : _b.first();
      return contents;
    });
  }
  get page() {
    return __classPrivateFieldGet(this, _Artist_page, "f");
  }
};
__name(Artist, "Artist");
_Artist_page = /* @__PURE__ */ new WeakMap(), _Artist_actions = /* @__PURE__ */ new WeakMap();
var Artist_default = Artist;

// dist/src/parser/ytmusic/Explore.js
var _Explore_page;
var Explore = class {
  constructor(response) {
    var _a7, _b, _c;
    _Explore_page.set(this, void 0);
    __classPrivateFieldSet(this, _Explore_page, parser_default.parseResponse(response.data), "f");
    const tab = (_a7 = __classPrivateFieldGet(this, _Explore_page, "f").contents) === null || _a7 === void 0 ? void 0 : _a7.item().as(SingleColumnBrowseResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find target tab.");
    const section_list = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(SectionList_default);
    if (!section_list)
      throw new InnertubeError("Target tab did not have any content.");
    this.top_buttons = ((_c = section_list.contents.firstOfType(Grid_default)) === null || _c === void 0 ? void 0 : _c.items.as(MusicNavigationButton_default)) || [];
    this.sections = section_list.contents.filterType(MusicCarouselShelf_default);
  }
  get page() {
    return __classPrivateFieldGet(this, _Explore_page, "f");
  }
};
__name(Explore, "Explore");
_Explore_page = /* @__PURE__ */ new WeakMap();
var Explore_default = Explore;

// dist/src/parser/ytmusic/HomeFeed.js
var _HomeFeed_page;
var _HomeFeed_actions;
var _HomeFeed_continuation;
var HomeFeed2 = class {
  constructor(response, actions) {
    var _a7, _b, _c, _d, _e, _f;
    _HomeFeed_page.set(this, void 0);
    _HomeFeed_actions.set(this, void 0);
    _HomeFeed_continuation.set(this, void 0);
    __classPrivateFieldSet(this, _HomeFeed_actions, actions, "f");
    __classPrivateFieldSet(this, _HomeFeed_page, parser_default.parseResponse(response.data), "f");
    const tab = (_a7 = __classPrivateFieldGet(this, _HomeFeed_page, "f").contents) === null || _a7 === void 0 ? void 0 : _a7.item().as(SingleColumnBrowseResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find Home tab.");
    if (tab.key("content").isNull()) {
      if (!__classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents)
        throw new InnertubeError("Continuation did not have any content.");
      __classPrivateFieldSet(this, _HomeFeed_continuation, __classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents.as(SectionListContinuation).continuation, "f");
      this.sections = (_b = __classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents.as(SectionListContinuation).contents) === null || _b === void 0 ? void 0 : _b.as(MusicCarouselShelf_default);
      return;
    }
    this.header = (_d = (_c = tab.content) === null || _c === void 0 ? void 0 : _c.as(SectionList_default).header) === null || _d === void 0 ? void 0 : _d.as(ChipCloud_default);
    __classPrivateFieldSet(this, _HomeFeed_continuation, (_e = tab.content) === null || _e === void 0 ? void 0 : _e.as(SectionList_default).continuation, "f");
    this.sections = (_f = tab.content) === null || _f === void 0 ? void 0 : _f.as(SectionList_default).contents.as(MusicCarouselShelf_default, MusicTastebuilderShelf_default);
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _HomeFeed_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      const response = yield __classPrivateFieldGet(this, _HomeFeed_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: __classPrivateFieldGet(this, _HomeFeed_continuation, "f")
      });
      return new HomeFeed2(response, __classPrivateFieldGet(this, _HomeFeed_actions, "f"));
    });
  }
  applyFilter(target_filter) {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      let cloud_chip;
      if (typeof target_filter === "string") {
        cloud_chip = (_b = (_a7 = this.header) === null || _a7 === void 0 ? void 0 : _a7.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip_default).get({ text: target_filter });
        if (!cloud_chip)
          throw new InnertubeError("Could not find filter with given name.", { available_filters: this.filters });
      } else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip_default)) {
        cloud_chip = target_filter;
      }
      if (!cloud_chip)
        throw new InnertubeError("Invalid filter", { available_filters: this.filters });
      if (cloud_chip === null || cloud_chip === void 0 ? void 0 : cloud_chip.is_selected)
        return this;
      if (!cloud_chip.endpoint)
        throw new InnertubeError("Selected filter does not have an endpoint.");
      const response = yield cloud_chip.endpoint.call(__classPrivateFieldGet(this, _HomeFeed_actions, "f"), { client: "YTMUSIC" });
      return new HomeFeed2(response, __classPrivateFieldGet(this, _HomeFeed_actions, "f"));
    });
  }
  get filters() {
    var _a7, _b;
    return ((_b = (_a7 = this.header) === null || _a7 === void 0 ? void 0 : _a7.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip_default).map((chip) => chip.text)) || [];
  }
  get has_continuation() {
    return !!__classPrivateFieldGet(this, _HomeFeed_continuation, "f");
  }
  get page() {
    return __classPrivateFieldGet(this, _HomeFeed_page, "f");
  }
};
__name(HomeFeed2, "HomeFeed");
_HomeFeed_page = /* @__PURE__ */ new WeakMap(), _HomeFeed_actions = /* @__PURE__ */ new WeakMap(), _HomeFeed_continuation = /* @__PURE__ */ new WeakMap();
var HomeFeed_default = HomeFeed2;

// dist/src/parser/ytmusic/Library.js
var _Library_page;
var _Library_actions;
var _Library_continuation;
var _LibraryContinuation_page;
var _LibraryContinuation_actions;
var _LibraryContinuation_continuation;
var Library2 = class {
  constructor(response, actions) {
    var _a7, _b, _c, _d, _e;
    _Library_page.set(this, void 0);
    _Library_actions.set(this, void 0);
    _Library_continuation.set(this, void 0);
    __classPrivateFieldSet(this, _Library_page, parser_default.parseResponse(response.data), "f");
    __classPrivateFieldSet(this, _Library_actions, actions, "f");
    const section_list = (_a7 = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(SectionList_default).first();
    this.header = (_b = section_list === null || section_list === void 0 ? void 0 : section_list.header) === null || _b === void 0 ? void 0 : _b.as(MusicSideAlignedItem_default);
    this.contents = (_c = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _c === void 0 ? void 0 : _c.as(Grid_default, MusicShelf_default);
    __classPrivateFieldSet(this, _Library_continuation, (_e = (_d = this.contents) === null || _d === void 0 ? void 0 : _d.find((list) => list.continuation)) === null || _e === void 0 ? void 0 : _e.continuation, "f");
  }
  applySort(sort_by) {
    var _a7, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return __awaiter(this, void 0, void 0, function* () {
      let target_item;
      if (typeof sort_by === "string") {
        const button = (_a7 = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(MusicSortFilterButton_default).first();
        const options = (_b = button === null || button === void 0 ? void 0 : button.menu) === null || _b === void 0 ? void 0 : _b.options.filter((item) => item instanceof MusicMultiSelectMenuItem_default);
        target_item = options === null || options === void 0 ? void 0 : options.find((item) => item.title === sort_by);
        if (!target_item)
          throw new InnertubeError(`Sort option "${sort_by}" not found`, { available_filters: options.map((item) => item.title) });
      } else if (sort_by instanceof MusicMultiSelectMenuItem_default) {
        target_item = sort_by;
      }
      if (!target_item)
        throw new InnertubeError("Invalid sort option");
      if (target_item.selected)
        return this;
      const cmd = (_f = (_e = (_d = (_c = target_item.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.commands) === null || _e === void 0 ? void 0 : _e.find((cmd2) => cmd2.browseSectionListReloadEndpoint)) === null || _f === void 0 ? void 0 : _f.browseSectionListReloadEndpoint;
      if (!cmd)
        throw new InnertubeError("Failed to find sort option command");
      const response = yield __classPrivateFieldGet(this, _Library_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: cmd.continuation.reloadContinuationData.continuation,
        parse: true
      });
      const previously_selected_item = (_h = (_g = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _g === void 0 ? void 0 : _g.getType(MusicMultiSelectMenuItem_default)) === null || _h === void 0 ? void 0 : _h.find((item) => item.selected);
      if (previously_selected_item)
        previously_selected_item.selected = false;
      target_item.selected = true;
      this.contents = (_k = (_j = response.continuation_contents) === null || _j === void 0 ? void 0 : _j.as(SectionListContinuation).contents) === null || _k === void 0 ? void 0 : _k.as(Grid_default, MusicShelf_default);
      return this;
    });
  }
  applyFilter(filter) {
    var _a7, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
      let target_chip;
      const chip_cloud = (_a7 = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(ChipCloud_default).first();
      if (typeof filter === "string") {
        target_chip = chip_cloud === null || chip_cloud === void 0 ? void 0 : chip_cloud.chips.get({ text: filter });
        if (!target_chip)
          throw new InnertubeError(`Filter "${filter}" not found`, { available_filters: this.filters });
      } else if (filter instanceof ChipCloudChip_default) {
        target_chip = filter;
      }
      if (!target_chip)
        throw new InnertubeError("Invalid filter", filter);
      const target_cmd = new NavigationEndpoint_default((_d = (_c = (_b = target_chip.endpoint) === null || _b === void 0 ? void 0 : _b.payload) === null || _c === void 0 ? void 0 : _c.commands) === null || _d === void 0 ? void 0 : _d[0]);
      const response = yield target_cmd.call(__classPrivateFieldGet(this, _Library_actions, "f"), { client: "YTMUSIC" });
      return new Library2(response, __classPrivateFieldGet(this, _Library_actions, "f"));
    });
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Library_continuation, "f"))
        throw new InnertubeError("No continuation available");
      const page = yield __classPrivateFieldGet(this, _Library_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: __classPrivateFieldGet(this, _Library_continuation, "f")
      });
      return new LibraryContinuation(page, __classPrivateFieldGet(this, _Library_actions, "f"));
    });
  }
  get has_continuation() {
    return !!__classPrivateFieldGet(this, _Library_continuation, "f");
  }
  get sort_options() {
    var _a7, _b;
    const button = (_a7 = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(MusicSortFilterButton_default).first();
    const options = (_b = button === null || button === void 0 ? void 0 : button.menu) === null || _b === void 0 ? void 0 : _b.options.filter((item) => item instanceof MusicMultiSelectMenuItem_default);
    return options.map((item) => item.title);
  }
  get filters() {
    var _a7, _b;
    return ((_b = (_a7 = __classPrivateFieldGet(this, _Library_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(ChipCloud_default)) === null || _b === void 0 ? void 0 : _b.first().chips.map((chip) => chip.text)) || [];
  }
  get page() {
    return __classPrivateFieldGet(this, _Library_page, "f");
  }
};
__name(Library2, "Library");
_Library_page = /* @__PURE__ */ new WeakMap(), _Library_actions = /* @__PURE__ */ new WeakMap(), _Library_continuation = /* @__PURE__ */ new WeakMap();
var LibraryContinuation = class {
  constructor(response, actions) {
    var _a7, _b;
    _LibraryContinuation_page.set(this, void 0);
    _LibraryContinuation_actions.set(this, void 0);
    _LibraryContinuation_continuation.set(this, void 0);
    __classPrivateFieldSet(this, _LibraryContinuation_page, parser_default.parseResponse(response.data), "f");
    __classPrivateFieldSet(this, _LibraryContinuation_actions, actions, "f");
    if (!__classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents)
      throw new InnertubeError("No continuation contents found");
    this.contents = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents.as(MusicShelfContinuation, GridContinuation);
    __classPrivateFieldSet(this, _LibraryContinuation_continuation, ((_a7 = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents) === null || _a7 === void 0 ? void 0 : _a7.key("continuation").isNull()) ? null : (_b = __classPrivateFieldGet(this, _LibraryContinuation_page, "f").continuation_contents) === null || _b === void 0 ? void 0 : _b.key("continuation").string(), "f");
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _LibraryContinuation_continuation, "f"))
        throw new InnertubeError("No continuation available");
      const response = yield __classPrivateFieldGet(this, _LibraryContinuation_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: __classPrivateFieldGet(this, _LibraryContinuation_continuation, "f")
      });
      return new LibraryContinuation(response, __classPrivateFieldGet(this, _LibraryContinuation_actions, "f"));
    });
  }
  get has_continuation() {
    return !!__classPrivateFieldGet(this, _LibraryContinuation_continuation, "f");
  }
  get page() {
    return __classPrivateFieldGet(this, _LibraryContinuation_page, "f");
  }
};
__name(LibraryContinuation, "LibraryContinuation");
_LibraryContinuation_page = /* @__PURE__ */ new WeakMap(), _LibraryContinuation_actions = /* @__PURE__ */ new WeakMap(), _LibraryContinuation_continuation = /* @__PURE__ */ new WeakMap();
var Library_default2 = Library2;

// dist/src/parser/ytmusic/Playlist.js
var _Playlist_instances2;
var _Playlist_page;
var _Playlist_actions;
var _Playlist_continuation;
var _Playlist_last_fetched_suggestions;
var _Playlist_suggestions_continuation;
var _Playlist_fetchSuggestions;
var Playlist3 = class {
  constructor(response, actions) {
    var _a7, _b, _c, _d, _e, _f, _g;
    _Playlist_instances2.add(this);
    _Playlist_page.set(this, void 0);
    _Playlist_actions.set(this, void 0);
    _Playlist_continuation.set(this, void 0);
    _Playlist_last_fetched_suggestions.set(this, void 0);
    _Playlist_suggestions_continuation.set(this, void 0);
    __classPrivateFieldSet(this, _Playlist_actions, actions, "f");
    __classPrivateFieldSet(this, _Playlist_page, parser_default.parseResponse(response.data), "f");
    __classPrivateFieldSet(this, _Playlist_last_fetched_suggestions, null, "f");
    __classPrivateFieldSet(this, _Playlist_suggestions_continuation, null, "f");
    if (__classPrivateFieldGet(this, _Playlist_page, "f").continuation_contents) {
      const data2 = (_a7 = __classPrivateFieldGet(this, _Playlist_page, "f").continuation_contents) === null || _a7 === void 0 ? void 0 : _a7.as(MusicPlaylistShelfContinuation);
      this.items = data2.contents;
      __classPrivateFieldSet(this, _Playlist_continuation, data2.continuation, "f");
    } else {
      if (((_b = __classPrivateFieldGet(this, _Playlist_page, "f").header) === null || _b === void 0 ? void 0 : _b.item().type) === "MusicEditablePlaylistDetailHeader") {
        this.header = (_d = (_c = __classPrivateFieldGet(this, _Playlist_page, "f").header) === null || _c === void 0 ? void 0 : _c.item().as(MusicEditablePlaylistDetailHeader_default).header) === null || _d === void 0 ? void 0 : _d.as(MusicDetailHeader_default);
      } else {
        this.header = (_e = __classPrivateFieldGet(this, _Playlist_page, "f").header) === null || _e === void 0 ? void 0 : _e.item().as(MusicDetailHeader_default);
      }
      this.items = ((_f = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo) === null || _f === void 0 ? void 0 : _f.getType(MusicPlaylistShelf_default).first().contents) || null;
      __classPrivateFieldSet(this, _Playlist_continuation, ((_g = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo) === null || _g === void 0 ? void 0 : _g.getType(MusicPlaylistShelf_default).first().continuation) || null, "f");
    }
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Playlist_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      const response = yield __classPrivateFieldGet(this, _Playlist_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: __classPrivateFieldGet(this, _Playlist_continuation, "f")
      });
      return new Playlist3(response, __classPrivateFieldGet(this, _Playlist_actions, "f"));
    });
  }
  getRelated() {
    var _a7, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
      let section_continuation = (_b = (_a7 = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(SectionList_default)) === null || _b === void 0 ? void 0 : _b[0].continuation;
      while (section_continuation) {
        const data2 = yield __classPrivateFieldGet(this, _Playlist_actions, "f").execute("/browse", {
          client: "YTMUSIC",
          continuation: section_continuation,
          parse: true
        });
        const section_list = (_c = data2.continuation_contents) === null || _c === void 0 ? void 0 : _c.as(SectionListContinuation);
        const sections = (_d = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _d === void 0 ? void 0 : _d.as(MusicCarouselShelf_default, MusicShelf_default);
        const related = (_e = sections === null || sections === void 0 ? void 0 : sections.matchCondition((section) => section.is(MusicCarouselShelf_default))) === null || _e === void 0 ? void 0 : _e.as(MusicCarouselShelf_default);
        if (related)
          return related;
        section_continuation = section_list === null || section_list === void 0 ? void 0 : section_list.continuation;
      }
      throw new InnertubeError("Target section not found.");
    });
  }
  getSuggestions(refresh = true) {
    return __awaiter(this, void 0, void 0, function* () {
      const require_fetch = refresh || !__classPrivateFieldGet(this, _Playlist_last_fetched_suggestions, "f");
      const fetch_promise = require_fetch ? __classPrivateFieldGet(this, _Playlist_instances2, "m", _Playlist_fetchSuggestions).call(this) : Promise.resolve(null);
      const fetch_result = yield fetch_promise;
      if (fetch_result) {
        __classPrivateFieldSet(this, _Playlist_last_fetched_suggestions, fetch_result.items, "f");
        __classPrivateFieldSet(this, _Playlist_suggestions_continuation, fetch_result.continuation, "f");
      }
      return (fetch_result === null || fetch_result === void 0 ? void 0 : fetch_result.items) || __classPrivateFieldGet(this, _Playlist_last_fetched_suggestions, "f");
    });
  }
  get page() {
    return __classPrivateFieldGet(this, _Playlist_page, "f");
  }
  get has_continuation() {
    return !!__classPrivateFieldGet(this, _Playlist_continuation, "f");
  }
};
__name(Playlist3, "Playlist");
_Playlist_page = /* @__PURE__ */ new WeakMap(), _Playlist_actions = /* @__PURE__ */ new WeakMap(), _Playlist_continuation = /* @__PURE__ */ new WeakMap(), _Playlist_last_fetched_suggestions = /* @__PURE__ */ new WeakMap(), _Playlist_suggestions_continuation = /* @__PURE__ */ new WeakMap(), _Playlist_instances2 = /* @__PURE__ */ new WeakSet(), _Playlist_fetchSuggestions = /* @__PURE__ */ __name(function _Playlist_fetchSuggestions2() {
  var _a7, _b, _c, _d, _e;
  return __awaiter(this, void 0, void 0, function* () {
    const continuation = __classPrivateFieldGet(this, _Playlist_suggestions_continuation, "f") || ((_b = (_a7 = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.get("SectionList")) === null || _b === void 0 ? void 0 : _b[0].as(SectionList_default).continuation);
    if (continuation) {
      const page = yield __classPrivateFieldGet(this, _Playlist_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation,
        parse: true
      });
      const section_list = (_c = page.continuation_contents) === null || _c === void 0 ? void 0 : _c.as(SectionListContinuation);
      const sections = (_d = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _d === void 0 ? void 0 : _d.as(MusicCarouselShelf_default, MusicShelf_default);
      const suggestions = (_e = sections === null || sections === void 0 ? void 0 : sections.matchCondition((section) => section.is(MusicShelf_default))) === null || _e === void 0 ? void 0 : _e.as(MusicShelf_default);
      return {
        items: (suggestions === null || suggestions === void 0 ? void 0 : suggestions.contents) || [],
        continuation: (suggestions === null || suggestions === void 0 ? void 0 : suggestions.continuation) || null
      };
    }
    return {
      items: [],
      continuation: null
    };
  });
}, "_Playlist_fetchSuggestions");
var Playlist_default3 = Playlist3;

// dist/src/parser/ytmusic/Recap.js
var _Recap_page;
var _Recap_actions;
var Recap = class {
  constructor(response, actions) {
    var _a7, _b, _c, _d, _e, _f, _g;
    _Recap_page.set(this, void 0);
    _Recap_actions.set(this, void 0);
    __classPrivateFieldSet(this, _Recap_page, parser_default.parseResponse(response.data), "f");
    __classPrivateFieldSet(this, _Recap_actions, actions, "f");
    const header = (_a7 = __classPrivateFieldGet(this, _Recap_page, "f").header) === null || _a7 === void 0 ? void 0 : _a7.item();
    this.header = (header === null || header === void 0 ? void 0 : header.is(MusicElementHeader_default)) ? (_d = (_c = (_b = __classPrivateFieldGet(this, _Recap_page, "f").header) === null || _b === void 0 ? void 0 : _b.item().as(MusicElementHeader_default).element) === null || _c === void 0 ? void 0 : _c.model) === null || _d === void 0 ? void 0 : _d.as(HighlightsCarousel_default) : (_e = __classPrivateFieldGet(this, _Recap_page, "f").header) === null || _e === void 0 ? void 0 : _e.item().as(MusicHeader_default);
    const tab = (_f = __classPrivateFieldGet(this, _Recap_page, "f").contents) === null || _f === void 0 ? void 0 : _f.item().as(SingleColumnBrowseResults_default).tabs.firstOfType(Tab_default);
    if (!tab)
      throw new InnertubeError("Target tab not found");
    this.sections = (_g = tab.content) === null || _g === void 0 ? void 0 : _g.as(SectionList_default).contents.as(ItemSection_default, MusicCarouselShelf_default, Message_default);
  }
  getPlaylist() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.header)
        throw new InnertubeError("Header not found");
      if (!this.header.is(HighlightsCarousel_default))
        throw new InnertubeError("Recap playlist not available, check back later.");
      const endpoint = this.header.panels[0].text_on_tap_endpoint;
      const response = yield endpoint.call(__classPrivateFieldGet(this, _Recap_actions, "f"), { client: "YTMUSIC" });
      return new Playlist_default3(response, __classPrivateFieldGet(this, _Recap_actions, "f"));
    });
  }
  get page() {
    return __classPrivateFieldGet(this, _Recap_page, "f");
  }
};
__name(Recap, "Recap");
_Recap_page = /* @__PURE__ */ new WeakMap(), _Recap_actions = /* @__PURE__ */ new WeakMap();
var Recap_default = Recap;

// dist/src/parser/ytmusic/Search.js
var _Search_page;
var _Search_actions;
var _Search_continuation;
var _SearchContinuation_actions;
var _SearchContinuation_page;
var Search2 = class {
  constructor(response, actions, is_filtered) {
    var _a7, _b, _c;
    _Search_page.set(this, void 0);
    _Search_actions.set(this, void 0);
    _Search_continuation.set(this, void 0);
    __classPrivateFieldSet(this, _Search_actions, actions, "f");
    __classPrivateFieldSet(this, _Search_page, parser_default.parseResponse(response.data), "f");
    if (!__classPrivateFieldGet(this, _Search_page, "f").contents || !__classPrivateFieldGet(this, _Search_page, "f").contents_memo)
      throw new InnertubeError("Response did not contain any contents.");
    const tab = __classPrivateFieldGet(this, _Search_page, "f").contents.item().as(TabbedSearchResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find target tab.");
    const tab_content = (_a7 = tab.content) === null || _a7 === void 0 ? void 0 : _a7.as(SectionList_default);
    if (!tab_content)
      throw new InnertubeError("Target tab did not have any content.");
    this.header = (_b = tab_content.header) === null || _b === void 0 ? void 0 : _b.as(ChipCloud_default);
    this.contents = tab_content.contents.as(MusicShelf_default, MusicCardShelf_default, ItemSection_default);
    if (is_filtered) {
      __classPrivateFieldSet(this, _Search_continuation, (_c = this.contents.firstOfType(MusicShelf_default)) === null || _c === void 0 ? void 0 : _c.continuation, "f");
    }
  }
  getMore(shelf) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!shelf || !shelf.endpoint)
        throw new InnertubeError("Cannot retrieve more items for this shelf because it does not have an endpoint.");
      const response = yield shelf.endpoint.call(__classPrivateFieldGet(this, _Search_actions, "f"), { client: "YTMUSIC" });
      if (!response)
        throw new InnertubeError("Endpoint did not return any data");
      return new Search2(response, __classPrivateFieldGet(this, _Search_actions, "f"), true);
    });
  }
  getContinuation() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Search_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      const response = yield __classPrivateFieldGet(this, _Search_actions, "f").execute("/search", {
        continuation: __classPrivateFieldGet(this, _Search_continuation, "f"),
        client: "YTMUSIC"
      });
      return new SearchContinuation(__classPrivateFieldGet(this, _Search_actions, "f"), response);
    });
  }
  applyFilter(target_filter) {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      let cloud_chip;
      if (typeof target_filter === "string") {
        cloud_chip = (_b = (_a7 = this.header) === null || _a7 === void 0 ? void 0 : _a7.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip_default).get({ text: target_filter });
        if (!cloud_chip)
          throw new InnertubeError("Could not find filter with given name.", { available_filters: this.filters });
      } else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip_default)) {
        cloud_chip = target_filter;
      }
      if (!cloud_chip)
        throw new InnertubeError("Invalid filter", { available_filters: this.filters });
      if (cloud_chip === null || cloud_chip === void 0 ? void 0 : cloud_chip.is_selected)
        return this;
      if (!cloud_chip.endpoint)
        throw new InnertubeError("Selected filter does not have an endpoint.");
      const response = yield cloud_chip.endpoint.call(__classPrivateFieldGet(this, _Search_actions, "f"), { client: "YTMUSIC" });
      return new Search2(response, __classPrivateFieldGet(this, _Search_actions, "f"), true);
    });
  }
  get filters() {
    var _a7, _b;
    return ((_b = (_a7 = this.header) === null || _a7 === void 0 ? void 0 : _a7.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip_default).map((chip) => chip.text)) || [];
  }
  get has_continuation() {
    return !!__classPrivateFieldGet(this, _Search_continuation, "f");
  }
  get did_you_mean() {
    var _a7;
    return (_a7 = __classPrivateFieldGet(this, _Search_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(DidYouMean_default).first();
  }
  get showing_results_for() {
    var _a7;
    return (_a7 = __classPrivateFieldGet(this, _Search_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(ShowingResultsFor_default).first();
  }
  get message() {
    var _a7;
    return (_a7 = __classPrivateFieldGet(this, _Search_page, "f").contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(Message_default).first();
  }
  get songs() {
    var _a7;
    return (_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.filterType(MusicShelf_default).find((section) => section.title.toString() === "Songs");
  }
  get videos() {
    var _a7;
    return (_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.filterType(MusicShelf_default).find((section) => section.title.toString() === "Videos");
  }
  get albums() {
    var _a7;
    return (_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.filterType(MusicShelf_default).find((section) => section.title.toString() === "Albums");
  }
  get artists() {
    var _a7;
    return (_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.filterType(MusicShelf_default).find((section) => section.title.toString() === "Artists");
  }
  get playlists() {
    var _a7;
    return (_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.filterType(MusicShelf_default).find((section) => section.title.toString() === "Community playlists");
  }
  get results() {
    var _a7, _b;
    return (_b = (_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.firstOfType(MusicShelf_default)) === null || _b === void 0 ? void 0 : _b.contents;
  }
  get sections() {
    var _a7;
    return (_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.filterType(MusicShelf_default);
  }
  get page() {
    return __classPrivateFieldGet(this, _Search_page, "f");
  }
};
__name(Search2, "Search");
_Search_page = /* @__PURE__ */ new WeakMap(), _Search_actions = /* @__PURE__ */ new WeakMap(), _Search_continuation = /* @__PURE__ */ new WeakMap();
var Search_default2 = Search2;
var SearchContinuation = class {
  constructor(actions, response) {
    var _a7, _b;
    _SearchContinuation_actions.set(this, void 0);
    _SearchContinuation_page.set(this, void 0);
    __classPrivateFieldSet(this, _SearchContinuation_actions, actions, "f");
    __classPrivateFieldSet(this, _SearchContinuation_page, parser_default.parseResponse(response.data), "f");
    this.header = (_a7 = __classPrivateFieldGet(this, _SearchContinuation_page, "f").header) === null || _a7 === void 0 ? void 0 : _a7.item().as(MusicHeader_default);
    this.contents = (_b = __classPrivateFieldGet(this, _SearchContinuation_page, "f").continuation_contents) === null || _b === void 0 ? void 0 : _b.as(MusicShelfContinuation);
  }
  getContinuation() {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      if (!((_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.continuation))
        throw new InnertubeError("Continuation not found.");
      const response = yield __classPrivateFieldGet(this, _SearchContinuation_actions, "f").execute("/search", {
        continuation: this.contents.continuation,
        client: "YTMUSIC"
      });
      return new SearchContinuation(__classPrivateFieldGet(this, _SearchContinuation_actions, "f"), response);
    });
  }
  get has_continuation() {
    var _a7;
    return !!((_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.continuation);
  }
  get page() {
    return __classPrivateFieldGet(this, _SearchContinuation_page, "f");
  }
};
__name(SearchContinuation, "SearchContinuation");
_SearchContinuation_actions = /* @__PURE__ */ new WeakMap(), _SearchContinuation_page = /* @__PURE__ */ new WeakMap();

// dist/src/parser/ytmusic/TrackInfo.js
var TrackInfo = class extends MediaInfo_default {
  constructor(data2, actions, cpn) {
    var _a7, _b, _c, _d, _e, _f, _g, _h, _j;
    super(data2, actions, cpn);
    const [info, next] = this.page;
    if (!((_a7 = info.microformat) === null || _a7 === void 0 ? void 0 : _a7.is(MicroformatData_default)))
      throw new InnertubeError("Invalid microformat", info.microformat);
    this.basic_info = Object.assign(Object.assign({}, info.video_details), {
      description: (_b = info.microformat) === null || _b === void 0 ? void 0 : _b.description,
      is_unlisted: (_c = info.microformat) === null || _c === void 0 ? void 0 : _c.is_unlisted,
      is_family_safe: (_d = info.microformat) === null || _d === void 0 ? void 0 : _d.is_family_safe,
      url_canonical: (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.url_canonical,
      tags: (_f = info.microformat) === null || _f === void 0 ? void 0 : _f.tags
    });
    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;
    if (next) {
      const tabbed_results = (_h = (_g = next.contents_memo) === null || _g === void 0 ? void 0 : _g.getType(WatchNextTabbedResults_default)) === null || _h === void 0 ? void 0 : _h[0];
      this.tabs = tabbed_results === null || tabbed_results === void 0 ? void 0 : tabbed_results.tabs.array().as(Tab_default);
      this.current_video_endpoint = next.current_video_endpoint;
      this.player_overlays = (_j = next.player_overlays) === null || _j === void 0 ? void 0 : _j.item().as(PlayerOverlay_default);
    }
  }
  getTab(title_or_page_type) {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.tabs)
        throw new InnertubeError("Could not find any tab");
      const target_tab = this.tabs.get({ title: title_or_page_type }) || this.tabs.matchCondition((tab) => {
        var _a8, _b2;
        return ((_b2 = (_a8 = tab.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a8 === void 0 ? void 0 : _a8.browseEndpointContextMusicConfig) === null || _b2 === void 0 ? void 0 : _b2.pageType) === title_or_page_type;
      }) || ((_a7 = this.tabs) === null || _a7 === void 0 ? void 0 : _a7[0]);
      if (!target_tab)
        throw new InnertubeError(`Tab "${title_or_page_type}" not found`, { available_tabs: this.available_tabs });
      if (target_tab.content)
        return target_tab.content;
      const page = yield target_tab.endpoint.call(this.actions, { client: "YTMUSIC", parse: true });
      if (((_b = page.contents) === null || _b === void 0 ? void 0 : _b.item().key("type").string()) === "Message")
        return page.contents.item().as(Message_default);
      if (!page.contents)
        throw new InnertubeError("Page contents was empty", page);
      return page.contents.item().as(SectionList_default).contents;
    });
  }
  getUpNext(automix = true) {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      const music_queue = yield this.getTab("Up next");
      if (!music_queue || !music_queue.content)
        throw new InnertubeError("Music queue was empty, the video id is probably invalid.", music_queue);
      const playlist_panel = music_queue.content.as(PlaylistPanel_default);
      if (!playlist_panel.playlist_id && automix) {
        const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo_default);
        if (!automix_preview_video)
          throw new InnertubeError("Automix item not found");
        const page = yield (_a7 = automix_preview_video.playlist_video) === null || _a7 === void 0 ? void 0 : _a7.endpoint.call(this.actions, {
          videoId: this.basic_info.id,
          client: "YTMUSIC",
          parse: true
        });
        if (!page || !page.contents_memo)
          throw new InnertubeError("Could not fetch automix");
        return (_b = page.contents_memo.getType(PlaylistPanel_default)) === null || _b === void 0 ? void 0 : _b[0];
      }
      return playlist_panel;
    });
  }
  getRelated() {
    return __awaiter(this, void 0, void 0, function* () {
      const tab = yield this.getTab("MUSIC_PAGE_TYPE_TRACK_RELATED");
      return tab;
    });
  }
  getLyrics() {
    return __awaiter(this, void 0, void 0, function* () {
      const tab = yield this.getTab("MUSIC_PAGE_TYPE_TRACK_LYRICS");
      return tab.firstOfType(MusicDescriptionShelf_default);
    });
  }
  addToWatchHistory() {
    const _super = Object.create(null, {
      addToWatchHistory: { get: () => super.addToWatchHistory }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return _super.addToWatchHistory.call(this, CLIENTS.YTMUSIC.NAME, CLIENTS.YTMUSIC.VERSION, "https://music.");
    });
  }
  get available_tabs() {
    return this.tabs ? this.tabs.map((tab) => tab.title) : [];
  }
};
__name(TrackInfo, "TrackInfo");
var TrackInfo_default = TrackInfo;

// dist/src/parser/ytkids/index.js
var ytkids_exports = {};
__export(ytkids_exports, {
  Channel: () => Channel_default2,
  HomeFeed: () => HomeFeed_default2,
  Search: () => Search_default3,
  VideoInfo: () => VideoInfo_default2
});

// dist/src/parser/ytkids/Channel.js
var Channel3 = class extends Feed_default {
  constructor(actions, data2, already_parsed = false) {
    var _a7, _b;
    super(actions, data2, already_parsed);
    this.header = (_a7 = this.page.header) === null || _a7 === void 0 ? void 0 : _a7.item().as(C4TabbedHeader_default);
    this.contents = this.memo.getType(ItemSection_default).first() || ((_b = this.page.continuation_contents) === null || _b === void 0 ? void 0 : _b.as(ItemSectionContinuation));
  }
  getContinuation() {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/browse", {
        continuation: (_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.continuation,
        client: "YTKIDS"
      });
      return new Channel3(this.actions, response);
    });
  }
  get has_continuation() {
    var _a7;
    return !!((_a7 = this.contents) === null || _a7 === void 0 ? void 0 : _a7.continuation);
  }
};
__name(Channel3, "Channel");
var Channel_default2 = Channel3;

// dist/src/parser/ytkids/HomeFeed.js
var HomeFeed3 = class extends Feed_default {
  constructor(actions, data2, already_parsed = false) {
    var _a7, _b;
    super(actions, data2, already_parsed);
    this.header = (_a7 = this.page.header) === null || _a7 === void 0 ? void 0 : _a7.item().as(KidsCategoriesHeader_default);
    this.contents = (_b = this.page.contents) === null || _b === void 0 ? void 0 : _b.item().as(KidsHomeScreen_default);
  }
  selectCategoryTab(tab) {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      let target_tab;
      if (typeof tab === "string") {
        target_tab = (_a7 = this.header) === null || _a7 === void 0 ? void 0 : _a7.category_tabs.find((t) => t.title.toString() === tab);
      } else if (tab === null || tab === void 0 ? void 0 : tab.is(KidsCategoryTab_default)) {
        target_tab = tab;
      }
      if (!target_tab)
        throw new InnertubeError(`Tab "${tab}" not found`);
      const page = yield target_tab.endpoint.call(this.actions, { client: "YTKIDS", parse: true });
      page.header = this.page.header;
      page.header_memo = this.page.header_memo;
      return new HomeFeed3(this.actions, page, true);
    });
  }
  get categories() {
    var _a7;
    return ((_a7 = this.header) === null || _a7 === void 0 ? void 0 : _a7.category_tabs.map((tab) => tab.title.toString())) || [];
  }
};
__name(HomeFeed3, "HomeFeed");
var HomeFeed_default2 = HomeFeed3;

// dist/src/parser/ytkids/Search.js
var Search3 = class extends Feed_default {
  constructor(actions, data2) {
    super(actions, data2);
    this.estimated_results = this.page.estimated_results;
    const item_section = this.memo.getType(ItemSection_default).first();
    if (!item_section)
      throw new InnertubeError("No item section found in search response.");
    this.contents = item_section.contents;
  }
};
__name(Search3, "Search");
var Search_default3 = Search3;

// dist/src/parser/ytkids/VideoInfo.js
var VideoInfo2 = class extends MediaInfo_default {
  constructor(data2, actions, cpn) {
    var _a7, _b, _c, _d, _e;
    super(data2, actions, cpn);
    const [info, next] = this.page;
    this.basic_info = info.video_details;
    this.captions = info.captions;
    const two_col = (_a7 = next === null || next === void 0 ? void 0 : next.contents) === null || _a7 === void 0 ? void 0 : _a7.item().as(TwoColumnWatchNextResults_default);
    const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
    const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
    if (results && secondary_results) {
      this.slim_video_metadata = (_c = (_b = results.firstOfType(ItemSection_default)) === null || _b === void 0 ? void 0 : _b.contents) === null || _c === void 0 ? void 0 : _c.firstOfType(SlimVideoMetadata_default);
      this.watch_next_feed = ((_d = secondary_results.firstOfType(ItemSection_default)) === null || _d === void 0 ? void 0 : _d.contents) || secondary_results;
      this.current_video_endpoint = next === null || next === void 0 ? void 0 : next.current_video_endpoint;
      this.player_overlays = (_e = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _e === void 0 ? void 0 : _e.item().as(PlayerOverlay_default);
    }
  }
  addToWatchHistory() {
    const _super = Object.create(null, {
      addToWatchHistory: { get: () => super.addToWatchHistory }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return _super.addToWatchHistory.call(this);
    });
  }
};
__name(VideoInfo2, "VideoInfo");
var VideoInfo_default2 = VideoInfo2;

// dist/src/parser/index.js
var parser_default = parser_default2;

// dist/src/parser/classes/misc/Author.js
var _Author_nav_text;
var Author = class {
  constructor(item, badges, thumbs, id) {
    var _a7, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
    _Author_nav_text.set(this, void 0);
    __classPrivateFieldSet(this, _Author_nav_text, new Text(item), "f");
    this.id = id || ((_e = (_d = (_c = (_b = (_a7 = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _a7 === void 0 ? void 0 : _a7.runs) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.endpoint) === null || _d === void 0 ? void 0 : _d.payload) === null || _e === void 0 ? void 0 : _e.browseId) || ((_h = (_g = (_f = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _f === void 0 ? void 0 : _f.endpoint) === null || _g === void 0 ? void 0 : _g.payload) === null || _h === void 0 ? void 0 : _h.browseId) || "N/A";
    this.name = ((_j = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _j === void 0 ? void 0 : _j.text) || "N/A";
    this.thumbnails = thumbs ? Thumbnail.fromResponse(thumbs) : [];
    this.endpoint = ((_m = (_l = (_k = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _k === void 0 ? void 0 : _k.runs) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.endpoint) || ((_o = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _o === void 0 ? void 0 : _o.endpoint);
    this.badges = Array.isArray(badges) ? parser_default.parseArray(badges) : observe([]);
    this.is_moderator = (_p = this.badges) === null || _p === void 0 ? void 0 : _p.some((badge) => badge.icon_type == "MODERATOR");
    this.is_verified = (_q = this.badges) === null || _q === void 0 ? void 0 : _q.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED");
    this.is_verified_artist = (_r = this.badges) === null || _r === void 0 ? void 0 : _r.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST");
    this.url = ((_w = (_v = (_u = (_t = (_s = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _s === void 0 ? void 0 : _s.runs) === null || _t === void 0 ? void 0 : _t[0]) === null || _u === void 0 ? void 0 : _u.endpoint) === null || _v === void 0 ? void 0 : _v.metadata) === null || _w === void 0 ? void 0 : _w.api_url) === "/browse" && `${URLS.YT_BASE}${((_1 = (_0 = (_z = (_y = (_x = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _x === void 0 ? void 0 : _x.runs) === null || _y === void 0 ? void 0 : _y[0]) === null || _z === void 0 ? void 0 : _z.endpoint) === null || _0 === void 0 ? void 0 : _0.payload) === null || _1 === void 0 ? void 0 : _1.canonicalBaseUrl) || `/u/${(_6 = (_5 = (_4 = (_3 = (_2 = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _2 === void 0 ? void 0 : _2.runs) === null || _3 === void 0 ? void 0 : _3[0]) === null || _4 === void 0 ? void 0 : _4.endpoint) === null || _5 === void 0 ? void 0 : _5.payload) === null || _6 === void 0 ? void 0 : _6.browseId}`}` || `${URLS.YT_BASE}${((_9 = (_8 = (_7 = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _7 === void 0 ? void 0 : _7.endpoint) === null || _8 === void 0 ? void 0 : _8.payload) === null || _9 === void 0 ? void 0 : _9.canonicalBaseUrl) || `/u/${(_12 = (_11 = (_10 = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _10 === void 0 ? void 0 : _10.endpoint) === null || _11 === void 0 ? void 0 : _11.payload) === null || _12 === void 0 ? void 0 : _12.browseId}`}`;
  }
  get best_thumbnail() {
    return this.thumbnails[0];
  }
};
__name(Author, "Author");
_Author_nav_text = /* @__PURE__ */ new WeakMap();
var Author_default = Author;

// dist/src/utils/user-agents.js
var user_agents_default = {
  "desktop": [
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.61",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
  ],
  "mobile": [
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 12; SM-G990U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/108.1  Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15G77 ChannelId(73) NebulaSDK/1.8.100112 Nebula PSDType(1) AlipayDefined(nt:4G,ws:320|504|2.0) AliApp(AP/10.1.30.300) AlipayClient/10.1.30.300 Alipay Language/zh-Hans",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 13; SM-N981U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 12; M2010J19SG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 11; M2102J20SG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1"
  ]
};

// node_modules/jintr/dist/nodes/index.js
var nodes_exports2 = {};
__export(nodes_exports2, {
  ArrayExpression: () => ArrayExpression,
  ArrowFunctionExpression: () => ArrowFunctionExpression,
  AssignmentExpression: () => AssignmentExpression,
  BinaryExpression: () => BinaryExpression,
  BlockStatement: () => BlockStatement,
  BreakStatement: () => BreakStatement,
  CallExpression: () => CallExpression,
  ConditionalExpression: () => ConditionalExpression,
  ContinueStatement: () => ContinueStatement,
  ExpressionStatement: () => ExpressionStatement,
  ForOfStatement: () => ForOfStatement,
  ForStatement: () => ForStatement,
  FunctionDeclaration: () => FunctionDeclaration,
  FunctionExpression: () => FunctionExpression,
  Identifier: () => Identifier,
  IfStatement: () => IfStatement,
  Literal: () => Literal,
  LogicalExpression: () => LogicalExpression,
  MemberExpression: () => MemberExpression,
  NewExpression: () => NewExpression,
  ObjectExpression: () => ObjectExpression,
  Property: () => Property,
  ReturnStatement: () => ReturnStatement,
  SequenceExpression: () => SequenceExpression,
  SwitchCase: () => SwitchCase,
  SwitchStatement: () => SwitchStatement,
  TemplateLiteral: () => TemplateLiteral,
  ThisExpression: () => ThisExpression,
  ThrowStatement: () => ThrowStatement,
  TryStatement: () => TryStatement,
  UnaryExpression: () => UnaryExpression,
  UpdateExpression: () => UpdateExpression,
  VariableDeclaration: () => VariableDeclaration,
  WhileStatement: () => WhileStatement
});

// node_modules/jintr/dist/nodes/BaseJSNode.js
var BaseJSNode = class {
  constructor(node, visitor) {
    this.node = node;
    this.visitor = visitor;
  }
  run() {
  }
};
__name(BaseJSNode, "BaseJSNode");

// node_modules/jintr/dist/nodes/ArrayExpression.js
var ArrayExpression = class extends BaseJSNode {
  run() {
    return this.node.elements.map((el) => this.visitor.visitNode(el));
  }
};
__name(ArrayExpression, "ArrayExpression");

// node_modules/jintr/dist/utils/index.js
var utils_exports = {};
__export(utils_exports, {
  JinterError: () => JinterError,
  namedFunction: () => namedFunction
});
var namedFunction = /* @__PURE__ */ __name((name, fn) => Object.defineProperty(fn, "name", { value: name }), "namedFunction");
var JinterError = class extends Error {
  constructor(message, info) {
    super(message);
    if (info) {
      this.info = info;
    }
  }
};
__name(JinterError, "JinterError");

// node_modules/jintr/dist/nodes/ArrowFunctionExpression.js
var ArrowFunctionExpression = class extends BaseJSNode {
  run() {
    const { params, body } = this.node;
    const fn = namedFunction("anonymous function", (args) => {
      let index = 0;
      for (const param of params) {
        this.visitor.visitNode(param);
        if (param.type === "Identifier") {
          this.visitor.scope.set(param.name, args[index]);
        } else {
          console.warn("Unhandled param type", param.type);
        }
        index++;
      }
      return this.visitor.visitNode(body);
    });
    return fn;
  }
};
__name(ArrowFunctionExpression, "ArrowFunctionExpression");

// node_modules/jintr/dist/nodes/AssignmentExpression.js
var AssignmentExpression = class extends BaseJSNode {
  run() {
    const operator = this.node.operator;
    const right_node = this.visitor.visitNode(this.node.right);
    switch (operator) {
      case "=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] = right_node;
        } else if (this.node.left.type === "Identifier") {
          this.visitor.scope.set(this.node.left.name, right_node);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
      case "+=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] += right_node;
        } else if (this.node.left.type === "Identifier") {
          const result = this.visitor.visitNode(this.node.left) + right_node;
          this.visitor.scope.set(this.node.left.name, result);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
      case "-=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] -= right_node;
        } else if (this.node.left.type === "Identifier") {
          const result = this.visitor.visitNode(this.node.left) - right_node;
          this.visitor.scope.set(this.node.left.name, result);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
      case "*=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] *= right_node;
        } else if (this.node.left.type === "Identifier") {
          const result = this.visitor.visitNode(this.node.left) * right_node;
          this.visitor.scope.set(this.node.left.name, result);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
      case "/=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] /= right_node;
        } else if (this.node.left.type === "Identifier") {
          const result = this.visitor.visitNode(this.node.left) / right_node;
          this.visitor.scope.set(this.node.left.name, result);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
      case "%=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] %= right_node;
        } else if (this.node.left.type === "Identifier") {
          const result = this.visitor.visitNode(this.node.left) % right_node;
          this.visitor.scope.set(this.node.left.name, result);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
      case "**=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] **= right_node;
        } else if (this.node.left.type === "Identifier") {
          const result = this.visitor.visitNode(this.node.left) ** right_node;
          this.visitor.scope.set(this.node.left.name, result);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
      case "<<=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] <<= right_node;
        } else if (this.node.left.type === "Identifier") {
          const result = this.visitor.visitNode(this.node.left) << right_node;
          this.visitor.scope.set(this.node.left.name, result);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
      case ">>=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] >>= right_node;
        } else if (this.node.left.type === "Identifier") {
          const result = this.visitor.visitNode(this.node.left) >> right_node;
          this.visitor.scope.set(this.node.left.name, result);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
      case ">>>=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] >>>= right_node;
        } else if (this.node.left.type === "Identifier") {
          const result = this.visitor.visitNode(this.node.left) >>> right_node;
          this.visitor.scope.set(this.node.left.name, result);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
      case "&=":
        if (this.node.left.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.left.object);
          const prop = this.visitor.visitNode(this.node.left.property);
          return obj[prop] &= right_node;
        } else if (this.node.left.type === "Identifier") {
          const result = this.visitor.visitNode(this.node.left) & right_node;
          this.visitor.scope.set(this.node.left.name, result);
          return this.visitor.scope.get(this.node.left.name);
        }
        console.warn("Unhandled left node", this.node.left);
        break;
    }
  }
};
__name(AssignmentExpression, "AssignmentExpression");

// node_modules/jintr/dist/nodes/BinaryExpression.js
var BinaryExpression = class extends BaseJSNode {
  run() {
    const operator = this.node.operator;
    const left_node = this.visitor.visitNode(this.node.left);
    const right_node = this.visitor.visitNode(this.node.right);
    switch (operator) {
      case "!=":
        return left_node != right_node;
      case "!==":
        return left_node !== right_node;
      case "%":
        return left_node % right_node;
      case "&":
        return left_node & right_node;
      case "*":
        return left_node * right_node;
      case "**":
        return left_node ** right_node;
      case "+":
        return left_node + right_node;
      case "-":
        return left_node - right_node;
      case "/":
        return left_node / right_node;
      case "<":
        return left_node < right_node;
      case "<<":
        return left_node << right_node;
      case "<=":
        return left_node <= right_node;
      case "==":
        return left_node == right_node;
      case "===":
        return left_node === right_node;
      case ">":
        return left_node > right_node;
      case ">=":
        return left_node >= right_node;
      case ">>":
        return left_node >> right_node;
      case ">>>":
        return left_node >>> right_node;
      case "^":
        return left_node ^ right_node;
      case "|":
        return left_node | right_node;
      case "in":
        return left_node in right_node;
      case "instanceof":
        return left_node instanceof right_node;
    }
  }
};
__name(BinaryExpression, "BinaryExpression");

// node_modules/jintr/dist/nodes/BlockStatement.js
var BlockStatement = class extends BaseJSNode {
  run() {
    for (const stmt of this.node.body) {
      const result = this.visitor.visitNode(stmt);
      if (stmt.type === "ReturnStatement")
        return result;
      if (result === "break" || result === "continue")
        return result;
      if ((stmt.type === "WhileStatement" || stmt.type === "IfStatement" || stmt.type === "ForStatement" || stmt.type === "TryStatement") && !!result) {
        return result;
      }
    }
  }
};
__name(BlockStatement, "BlockStatement");

// node_modules/jintr/dist/nodes/BreakStatement.js
var BreakStatement = class extends BaseJSNode {
  run() {
    return "break";
  }
};
__name(BreakStatement, "BreakStatement");

// node_modules/jintr/dist/nodes/CallExpression.js
var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CallExpression_instances;
var _CallExpression_throwError;
var _CallExpression_getCalleeString;
var CallExpression = class extends BaseJSNode {
  constructor() {
    super(...arguments);
    _CallExpression_instances.add(this);
  }
  run() {
    let exp_object;
    let exp_property;
    if (this.node.callee.type === "MemberExpression") {
      exp_object = this.visitor.getName(this.node.callee.object);
      exp_property = this.visitor.getName(this.node.callee.property);
    } else if (this.node.callee.type === "Identifier") {
      exp_property = this.node.callee.name;
    }
    if (exp_object && this.visitor.listeners[exp_object]) {
      const cb = this.visitor.listeners[exp_object](this.node, this.visitor);
      if (cb !== "__continue_exec") {
        return cb;
      }
    }
    if (exp_property && exp_property !== "toString" && this.visitor.listeners[exp_property]) {
      const cb = this.visitor.listeners[exp_property](this.node, this.visitor);
      if (cb !== "__continue_exec") {
        return cb;
      }
    }
    if (this.node.callee.type === "MemberExpression") {
      if (Builtins.has(this.node, this.visitor)) {
        return Builtins.execute(this.node, this.visitor);
      }
      const obj = this.visitor.visitNode(this.node.callee.object);
      const prop = this.node.callee.computed ? this.visitor.visitNode(this.node.callee.property) : this.visitor.getName(this.node.callee.property);
      const args2 = this.node.arguments.map((arg) => this.visitor.visitNode(arg));
      if (!obj)
        __classPrivateFieldGet2(this, _CallExpression_instances, "m", _CallExpression_throwError).call(this);
      if (typeof obj[prop] !== "function")
        __classPrivateFieldGet2(this, _CallExpression_instances, "m", _CallExpression_throwError).call(this);
      if (obj[prop].toString().includes("[native code]"))
        return obj[prop](...args2);
      return obj[prop](args2);
    }
    const fn = this.visitor.visitNode(this.node.callee);
    const args = this.node.arguments.map((arg) => this.visitor.visitNode(arg));
    if (typeof fn !== "function")
      __classPrivateFieldGet2(this, _CallExpression_instances, "m", _CallExpression_throwError).call(this);
    return fn(args);
  }
};
__name(CallExpression, "CallExpression");
_CallExpression_instances = /* @__PURE__ */ new WeakSet(), _CallExpression_throwError = /* @__PURE__ */ __name(function _CallExpression_throwError2() {
  if (this.node.callee.type === "MemberExpression" || this.node.callee.type === "Identifier") {
    const callee_string = __classPrivateFieldGet2(this, _CallExpression_instances, "m", _CallExpression_getCalleeString).call(this, this.node.callee);
    throw new JinterError(`${callee_string} is not a function`);
  } else if (this.node.callee.type === "SequenceExpression") {
    const call = [];
    const items = [];
    call.push("(");
    this.node.callee.expressions.forEach((expr) => {
      if (expr.type === "Literal") {
        items.push(expr.raw || "");
      } else if (expr.type === "Identifier") {
        items.push(expr.name);
      } else if (expr.type === "MemberExpression") {
        if (expr.computed) {
          items.push(`${this.visitor.getName(expr.object)}[${this.visitor.getName(expr.property) || "..."}]`);
        } else {
          items.push(`${this.visitor.getName(expr.object)}.${this.visitor.getName(expr.property)}`);
        }
      }
    });
    call.push(items.join(", "));
    call.push(")");
    throw new JinterError(`${call.join("")} is not a function`);
  }
}, "_CallExpression_throwError"), _CallExpression_getCalleeString = /* @__PURE__ */ __name(function _CallExpression_getCalleeString2(node) {
  if (node.type === "Identifier") {
    return node.name;
  } else if (node.type === "MemberExpression") {
    const object_string = __classPrivateFieldGet2(this, _CallExpression_instances, "m", _CallExpression_getCalleeString2).call(this, node.object);
    const property_string = node.computed ? `[${this.visitor.getName(node.property) || "..."}]` : `.${this.visitor.getName(node.property)}`;
    return `${object_string}${property_string}`;
  }
  return "<unknown>";
}, "_CallExpression_getCalleeString");
var Builtins = class {
  static has(node, visitor) {
    var _a7;
    if (node.callee.type === "MemberExpression") {
      return !!((_a7 = this.builtins) === null || _a7 === void 0 ? void 0 : _a7[visitor.getName(node.callee.property) || ""]);
    }
    return false;
  }
  static execute(node, visitor) {
    if (node.callee.type === "MemberExpression") {
      return this.builtins[visitor.getName(node.callee.property) || ""](node, visitor);
    }
  }
};
__name(Builtins, "Builtins");
Builtins.builtins = {
  forEach: (node, visitor) => {
    const args = node.arguments.map((arg) => visitor.visitNode(arg));
    if (node.callee.type === "MemberExpression") {
      const arr = visitor.visitNode(node.callee.object);
      if (args.length > 1) {
        visitor.scope.set("_this", args.slice(-1)[0]);
      }
      let index = 0;
      for (const element of arr) {
        args[0]([element, index++, arr]);
      }
    } else {
      console.warn("Unhandled callee type:", node.callee.type);
    }
  },
  toString: (node, visitor) => {
    if (node.callee.type === "MemberExpression") {
      return visitor.visitNode(node.callee.object).toString();
    }
  }
};

// node_modules/jintr/dist/nodes/ConditionalExpression.js
var ConditionalExpression = class extends BaseJSNode {
  run() {
    const { test, consequent, alternate } = this.node;
    const check = this.visitor.visitNode(test);
    if (check) {
      return this.visitor.visitNode(consequent);
    }
    return this.visitor.visitNode(alternate);
  }
};
__name(ConditionalExpression, "ConditionalExpression");

// node_modules/jintr/dist/nodes/ContinueStatement.js
var ContinueStatement = class extends BaseJSNode {
  run() {
    return "continue";
  }
};
__name(ContinueStatement, "ContinueStatement");

// node_modules/jintr/dist/nodes/ExpressionStatement.js
var ExpressionStatement = class extends BaseJSNode {
  run() {
    return this.visitor.visitNode(this.node.expression);
  }
};
__name(ExpressionStatement, "ExpressionStatement");

// node_modules/jintr/dist/nodes/ForOfStatement.js
var ForOfStatement = class extends BaseJSNode {
  run() {
    this.visitor.visitNode(this.node.left);
    const right_node = this.visitor.visitNode(this.node.right);
    for (const el of right_node) {
      if (this.node.left.type === "VariableDeclaration" && this.node.left.declarations[0].id.type === "Identifier") {
        this.visitor.scope.set(this.node.left.declarations[0].id.name, el);
      } else if (this.node.left.type === "VariableDeclaration" && this.node.left.declarations[0].id.type === "ObjectPattern") {
        for (const propert of this.node.left.declarations[0].id.properties) {
          if (propert.type === "Property" && (propert.value.type === "Identifier" && propert.key.type === "Identifier")) {
            this.visitor.scope.set(propert.value.name, el[propert.key.name]);
          }
        }
      }
      const body = this.visitor.visitNode(this.node.body);
      if (body === "break") {
        break;
      }
      if (body === "continue") {
        continue;
      }
      if (body && this.node.body.type !== "ExpressionStatement") {
        return body;
      }
    }
  }
};
__name(ForOfStatement, "ForOfStatement");

// node_modules/jintr/dist/nodes/ForStatement.js
var ForStatement = class extends BaseJSNode {
  run() {
    if (this.node.init) {
      this.visitor.visitNode(this.node.init);
    }
    const test = /* @__PURE__ */ __name(() => {
      return this.node.test ? this.visitor.visitNode(this.node.test) : true;
    }, "test");
    for (; ; ) {
      const _test = test();
      if (!_test) {
        break;
      }
      const body = this.visitor.visitNode(this.node.body);
      if (body === "continue") {
        continue;
      }
      if (body === "break") {
        break;
      }
      if (this.node.update) {
        this.visitor.visitNode(this.node.update);
      }
      if (body && this.node.body.type !== "ExpressionStatement") {
        return body;
      }
    }
  }
};
__name(ForStatement, "ForStatement");

// node_modules/jintr/dist/nodes/FunctionDeclaration.js
var FunctionDeclaration = class extends BaseJSNode {
  run() {
    const { params, body } = this.node;
    const id = this.visitor.visitNode(this.node.id);
    const fn = namedFunction(id, (args) => {
      let index = 0;
      for (const param of params) {
        this.visitor.visitNode(param);
        if (param.type === "Identifier") {
          this.visitor.scope.set(param.name, args[index]);
        } else {
          console.warn("Unhandled param type", param.type);
        }
        index++;
      }
      return this.visitor.visitNode(body);
    });
    this.visitor.scope.set(id, fn);
  }
};
__name(FunctionDeclaration, "FunctionDeclaration");

// node_modules/jintr/dist/nodes/FunctionExpression.js
var FunctionExpression = class extends BaseJSNode {
  run() {
    const { params, body } = this.node;
    const fn = namedFunction("anonymous function", (args) => {
      let index = 0;
      for (const param of params) {
        this.visitor.visitNode(param);
        if (param.type === "Identifier") {
          this.visitor.scope.set(param.name, args[index]);
        } else {
          console.warn("Unhandled param type", param.type);
        }
        index++;
      }
      return this.visitor.visitNode(body);
    });
    return fn;
  }
};
__name(FunctionExpression, "FunctionExpression");

// node_modules/jintr/dist/nodes/Identifier.js
var Identifier = class extends BaseJSNode {
  run() {
    if (this.visitor.listeners[this.node.name]) {
      const cb = this.visitor.listeners[this.node.name](this.node, this.visitor);
      if (cb !== "__continue_exec") {
        return cb;
      }
    }
    if (this.visitor.scope.has(this.node.name))
      return this.visitor.scope.get(this.node.name);
    return this.node.name;
  }
};
__name(Identifier, "Identifier");

// node_modules/jintr/dist/nodes/IfStatement.js
var IfStatement = class extends BaseJSNode {
  run() {
    const test = this.visitor.visitNode(this.node.test);
    if (test) {
      return this.visitor.visitNode(this.node.consequent);
    } else if (this.node.alternate) {
      return this.visitor.visitNode(this.node.alternate);
    }
  }
};
__name(IfStatement, "IfStatement");

// node_modules/jintr/dist/nodes/Literal.js
var Literal = class extends BaseJSNode {
  run() {
    return this.node.value;
  }
};
__name(Literal, "Literal");

// node_modules/jintr/dist/nodes/LogicalExpression.js
var LogicalExpression = class extends BaseJSNode {
  run() {
    const operator = this.node.operator;
    switch (operator) {
      case "&&": {
        const left_side = this.visitor.visitNode(this.node.left);
        if (left_side === true)
          return this.visitor.visitNode(this.node.right);
        return left_side;
      }
      case "||": {
        const left_side = this.visitor.visitNode(this.node.left);
        return left_side || this.visitor.visitNode(this.node.right);
      }
      case "??": {
        const left_side = this.visitor.visitNode(this.node.left);
        return left_side !== null && left_side !== void 0 ? left_side : this.visitor.visitNode(this.node.right);
      }
    }
  }
};
__name(LogicalExpression, "LogicalExpression");

// node_modules/jintr/dist/nodes/MemberExpression.js
var MemberExpression = class extends BaseJSNode {
  run() {
    const { object, property, computed } = this.node;
    const obj = this.visitor.visitNode(object);
    const prop = computed ? this.visitor.visitNode(property) : this.visitor.getName(property);
    if (prop !== void 0 || prop !== null) {
      if (this.visitor.listeners[prop]) {
        const cb = this.visitor.listeners[prop](this.node, this.visitor);
        if (cb !== "__continue_exec") {
          return cb;
        }
      }
      return obj === null || obj === void 0 ? void 0 : obj[prop];
    }
  }
};
__name(MemberExpression, "MemberExpression");

// node_modules/jintr/dist/nodes/NewExpression.js
var NewExpression = class extends BaseJSNode {
  run() {
    const callee = this.visitor.visitNode(this.node.callee);
    const args = this.node.arguments.map((arg) => this.visitor.visitNode(arg));
    return args.length ? new callee(args) : new callee();
  }
};
__name(NewExpression, "NewExpression");

// node_modules/jintr/dist/nodes/ObjectExpression.js
var ObjectExpression = class extends BaseJSNode {
  run() {
    let result = {};
    for (const prop of this.node.properties) {
      if (prop.type === "Property") {
        result = Object.assign(Object.assign({}, result), this.visitor.visitNode(prop));
      } else {
        throw new Error(`Unhandled property type: ${prop.type}`);
      }
    }
    return result;
  }
};
__name(ObjectExpression, "ObjectExpression");

// node_modules/jintr/dist/nodes/Property.js
var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Property_instances;
var _Property_init;
var _Property_get;
var _Property_set;
var Property = class extends BaseJSNode {
  constructor() {
    super(...arguments);
    _Property_instances.add(this);
  }
  run() {
    switch (this.node.kind) {
      case "init":
        return __classPrivateFieldGet3(this, _Property_instances, "m", _Property_init).call(this);
      case "get":
        return __classPrivateFieldGet3(this, _Property_instances, "m", _Property_get).call(this);
      case "set":
        return __classPrivateFieldGet3(this, _Property_instances, "m", _Property_set).call(this);
      default:
        throw new Error(`Unhandled property kind: ${this.node.kind}`);
    }
  }
};
__name(Property, "Property");
_Property_instances = /* @__PURE__ */ new WeakSet(), _Property_init = /* @__PURE__ */ __name(function _Property_init2() {
  const key = this.node.computed ? this.visitor.visitNode(this.node.key) : this.visitor.getName(this.node.key);
  const value = this.visitor.visitNode(this.node.value);
  if (key) {
    return { [key]: value };
  }
}, "_Property_init"), _Property_get = /* @__PURE__ */ __name(function _Property_get2() {
  throw new TypeError("Not implemented: Property.get");
}, "_Property_get"), _Property_set = /* @__PURE__ */ __name(function _Property_set2() {
  throw new TypeError("Not implemented: Property.set");
}, "_Property_set");

// node_modules/jintr/dist/nodes/ReturnStatement.js
var ReturnStatement = class extends BaseJSNode {
  run() {
    if (this.node.argument) {
      return this.visitor.visitNode(this.node.argument);
    }
  }
};
__name(ReturnStatement, "ReturnStatement");

// node_modules/jintr/dist/nodes/SequenceExpression.js
var SequenceExpression = class extends BaseJSNode {
  run() {
    let result;
    for (const expression of this.node.expressions) {
      result = this.visitor.visitNode(expression);
    }
    return result;
  }
};
__name(SequenceExpression, "SequenceExpression");

// node_modules/jintr/dist/nodes/SwitchCase.js
var SwitchCase = class extends BaseJSNode {
  run() {
    for (const stmt of this.node.consequent) {
      const result = this.visitor.visitNode(stmt);
      if (stmt.type === "ContinueStatement" || stmt.type === "BreakStatement") {
        return result;
      }
    }
  }
};
__name(SwitchCase, "SwitchCase");

// node_modules/jintr/dist/nodes/SwitchStatement.js
var SwitchStatement = class extends BaseJSNode {
  run() {
    const discriminant = this.visitor.visitNode(this.node.discriminant);
    let matched = false;
    let default_case = -1;
    let index = 0;
    while (true) {
      const _case = this.node.cases[index];
      if (matched) {
        const result = this.visitor.visitNode(_case);
        if (result === "break") {
          break;
        }
        if (result === "continue") {
          return result;
        }
        ++index;
        if (index >= this.node.cases.length) {
          index = 0;
          break;
        } else {
          continue;
        }
      }
      matched = _case && discriminant === this.visitor.visitNode(_case.test);
      if (matched === void 0 && index > this.node.cases.length)
        break;
      if (_case && !matched && !_case.test) {
        default_case = index;
        index += 1;
        continue;
      }
      if (!_case && !matched && default_case !== -1) {
        matched = true;
        index = default_case;
        continue;
      }
      if (!matched) {
        ++index;
      }
    }
  }
};
__name(SwitchStatement, "SwitchStatement");

// node_modules/jintr/dist/nodes/TemplateLiteral.js
var TemplateLiteral = class extends BaseJSNode {
  run() {
    let result = "";
    for (let i = 0; i < this.node.quasis.length; ++i) {
      const quasi = this.node.quasis[i];
      if (quasi.type === "TemplateElement") {
        if (quasi.value.cooked === null) {
          throw new Error(`Invalid template literal: ${quasi.value.raw}`);
        }
        if (quasi.value.cooked !== void 0) {
          result += quasi.value.cooked;
        }
        if (!quasi.tail) {
          const expr = this.node.expressions[i];
          if (expr !== void 0) {
            result += this.visitor.visitNode(expr);
          } else {
            throw new Error(`Expected expression after: ${quasi.value}`);
          }
        }
      } else {
        throw new Error(`Unhandled quasi type: ${quasi.type}`);
      }
    }
    return result;
  }
};
__name(TemplateLiteral, "TemplateLiteral");

// node_modules/jintr/dist/nodes/ThisExpression.js
var ThisExpression = class extends BaseJSNode {
  run() {
    return this.visitor.scope.get("_this");
  }
};
__name(ThisExpression, "ThisExpression");

// node_modules/jintr/dist/nodes/ThrowStatement.js
var ThrowStatement = class extends BaseJSNode {
  run() {
    const arg = this.visitor.visitNode(this.node.argument);
    throw arg;
  }
};
__name(ThrowStatement, "ThrowStatement");

// node_modules/jintr/dist/nodes/TryStatement.js
var TryStatement = class extends BaseJSNode {
  run() {
    try {
      return this.visitor.visitNode(this.node.block);
    } catch (e) {
      if (this.node.handler) {
        if (this.node.handler.param && this.node.handler.param.type === "Identifier") {
          this.visitor.scope.set(this.node.handler.param.name, e);
        }
        return this.visitor.visitNode(this.node.handler.body);
      }
    } finally {
      this.visitor.visitNode(this.node.finalizer);
    }
  }
};
__name(TryStatement, "TryStatement");

// node_modules/jintr/dist/nodes/UnaryExpression.js
var UnaryExpression = class extends BaseJSNode {
  run() {
    const operator = this.node.operator;
    switch (operator) {
      case "-": {
        const arg = this.visitor.visitNode(this.node.argument);
        return -arg;
      }
      case "+": {
        const arg = this.visitor.visitNode(this.node.argument);
        return +arg;
      }
      case "!": {
        const arg = this.visitor.visitNode(this.node.argument);
        return !arg;
      }
      case "~": {
        const arg = this.visitor.visitNode(this.node.argument);
        return ~arg;
      }
      case "void": {
        this.visitor.visitNode(this.node.argument);
        return void 0;
      }
      case "typeof": {
        const arg = this.visitor.visitNode(this.node.argument);
        return typeof arg;
      }
      case "delete": {
        if (this.node.argument.type === "MemberExpression") {
          const obj = this.visitor.visitNode(this.node.argument.object);
          const prop = this.node.argument.computed ? this.visitor.visitNode(this.node.argument.property) : this.visitor.getName(this.node.argument.property);
          return delete obj[prop];
        } else if (this.node.argument.type === "Identifier") {
          return this.visitor.scope.delete(this.node.argument.name);
        }
        return true;
      }
      default:
        console.warn("Unhandled UnaryExpression operator", operator);
    }
  }
};
__name(UnaryExpression, "UnaryExpression");

// node_modules/jintr/dist/nodes/UpdateExpression.js
var UpdateExpression = class extends BaseJSNode {
  run() {
    const operator = this.node.operator;
    switch (operator) {
      case "++":
        {
          if (this.node.argument.type === "MemberExpression") {
            const target_node = this.visitor.visitNode(this.node.argument.object);
            return target_node[this.visitor.visitNode(this.node.argument.property)]++;
          } else if (this.node.argument.type === "Identifier") {
            let target_node = this.visitor.visitNode(this.node.argument);
            this.visitor.scope.set(this.node.argument.name, target_node + 1);
            return this.node.prefix ? ++target_node : target_node;
          }
        }
        break;
      case "--":
        {
          if (this.node.argument.type === "MemberExpression") {
            const target_node = this.visitor.visitNode(this.node.argument.object);
            return target_node[this.visitor.visitNode(this.node.argument.property)]--;
          } else if (this.node.argument.type === "Identifier") {
            let target_node = this.visitor.visitNode(this.node.argument);
            this.visitor.scope.set(this.node.argument.name, target_node - 1);
            return this.node.prefix ? --target_node : target_node;
          }
        }
        break;
    }
  }
};
__name(UpdateExpression, "UpdateExpression");

// node_modules/jintr/dist/nodes/VariableDeclaration.js
var VariableDeclaration = class extends BaseJSNode {
  run() {
    this.node.declarations.forEach((declar) => {
      const { id, init } = declar;
      const key = this.visitor.getName(id);
      const value = init ? this.visitor.visitNode(init) : void 0;
      if (key)
        this.visitor.scope.set(key, value);
      if (typeof value === "object" && value !== null)
        this.visitor.scope.set("_this", value);
    });
  }
};
__name(VariableDeclaration, "VariableDeclaration");

// node_modules/jintr/dist/nodes/WhileStatement.js
var WhileStatement = class extends BaseJSNode {
  run() {
    while (this.visitor.visitNode(this.node.test)) {
      const body = this.visitor.visitNode(this.node.body);
      if (body === "break")
        break;
      if (body === "continue")
        continue;
      if (body)
        return body;
    }
  }
};
__name(WhileStatement, "WhileStatement");

// node_modules/jintr/dist/visitor.js
var __classPrivateFieldGet4 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Visitor_instances;
var _Visitor_getNode;
var Visitor = class {
  constructor() {
    _Visitor_instances.add(this);
    this.scope = /* @__PURE__ */ new Map();
    this.listeners = {};
    this.ast = [];
  }
  setAST(ast) {
    this.ast = ast;
  }
  run() {
    let result;
    for (const node of this.ast) {
      result = this.visitNode(node);
    }
    return result;
  }
  visitNode(node) {
    if (!node)
      return null;
    const target_node = __classPrivateFieldGet4(this, _Visitor_instances, "m", _Visitor_getNode).call(this, node.type);
    if (target_node) {
      const instance = new target_node(node, this);
      return instance.run();
    }
  }
  getName(node) {
    if (node.type === "Identifier")
      return node.name;
    else if (node.type === "Literal")
      return node.value;
  }
  on(node_name, listener) {
    this.listeners[node_name] = listener;
  }
};
__name(Visitor, "Visitor");
_Visitor_instances = /* @__PURE__ */ new WeakSet(), _Visitor_getNode = /* @__PURE__ */ __name(function _Visitor_getNode2(type) {
  const node = nodes_exports2[type];
  if (!node) {
    console.warn("[JINTER]:", `JavaScript node "${type}" not implemented!
If this is causing unexpected behavior, please report it at https://github.com/LuanRT/Jinter/issues/new`);
  }
  return node;
}, "_Visitor_getNode");

// node_modules/acorn/dist/acorn.mjs
var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};
var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
var keywords$1 = {
  5: ecma5AndLessKeywords,
  "5module": ecma5AndLessKeywords + " export import",
  6: ecma5AndLessKeywords + " const class extends export import super"
};
var keywordRelationalOperator = /^in(stanceof)?$/;
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
function isInAstralSet(code, set) {
  var pos = 65536;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) {
      return false;
    }
    pos += set[i + 1];
    if (pos >= code) {
      return true;
    }
  }
}
__name(isInAstralSet, "isInAstralSet");
function isIdentifierStart(code, astral) {
  if (code < 65) {
    return code === 36;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
__name(isIdentifierStart, "isIdentifierStart");
function isIdentifierChar(code, astral) {
  if (code < 48) {
    return code === 36;
  }
  if (code < 58) {
    return true;
  }
  if (code < 65) {
    return false;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
__name(isIdentifierChar, "isIdentifierChar");
var TokenType = /* @__PURE__ */ __name(function TokenType2(label, conf) {
  if (conf === void 0)
    conf = {};
  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
}, "TokenType");
function binop(name, prec) {
  return new TokenType(name, { beforeExpr: true, binop: prec });
}
__name(binop, "binop");
var beforeExpr = { beforeExpr: true };
var startsExpr = { startsExpr: true };
var keywords = {};
function kw(name, options) {
  if (options === void 0)
    options = {};
  options.keyword = name;
  return keywords[name] = new TokenType(name, options);
}
__name(kw, "kw");
var types$1 = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  privateId: new TokenType("privateId", startsExpr),
  eof: new TokenType("eof"),
  bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
  eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
  assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
  incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
  prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", { beforeExpr: true }),
  coalesce: binop("??", 1),
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", { isLoop: true, beforeExpr: true }),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", { isLoop: true }),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", { isLoop: true }),
  _with: kw("with"),
  _new: kw("new", { beforeExpr: true, startsExpr: true }),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import", startsExpr),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", { beforeExpr: true, binop: 7 }),
  _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
  _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
  _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
  _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
};
var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code) {
  return code === 10 || code === 13 || code === 8232 || code === 8233;
}
__name(isNewLine, "isNewLine");
function nextLineBreak(code, from, end) {
  if (end === void 0)
    end = code.length;
  for (var i = from; i < end; i++) {
    var next = code.charCodeAt(i);
    if (isNewLine(next)) {
      return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1;
    }
  }
  return -1;
}
__name(nextLineBreak, "nextLineBreak");
var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString = ref.toString;
var hasOwn = Object.hasOwn || function(obj, propName) {
  return hasOwnProperty.call(obj, propName);
};
var isArray = Array.isArray || function(obj) {
  return toString.call(obj) === "[object Array]";
};
function wordsRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$");
}
__name(wordsRegexp, "wordsRegexp");
function codePointToString(code) {
  if (code <= 65535) {
    return String.fromCharCode(code);
  }
  code -= 65536;
  return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
}
__name(codePointToString, "codePointToString");
var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
var Position = /* @__PURE__ */ __name(function Position2(line, col) {
  this.line = line;
  this.column = col;
}, "Position");
Position.prototype.offset = /* @__PURE__ */ __name(function offset(n) {
  return new Position(this.line, this.column + n);
}, "offset");
var SourceLocation = /* @__PURE__ */ __name(function SourceLocation2(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) {
    this.source = p.sourceFile;
  }
}, "SourceLocation");
function getLineInfo(input, offset2) {
  for (var line = 1, cur = 0; ; ) {
    var nextBreak = nextLineBreak(input, cur, offset2);
    if (nextBreak < 0) {
      return new Position(line, offset2 - cur);
    }
    ++line;
    cur = nextBreak;
  }
}
__name(getLineInfo, "getLineInfo");
var defaultOptions = {
  ecmaVersion: null,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowAwaitOutsideFunction: null,
  allowSuperOutsideMethod: null,
  allowHashBang: false,
  locations: false,
  onToken: null,
  onComment: null,
  ranges: false,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: false
};
var warnedAboutEcmaVersion = false;
function getOptions(opts) {
  var options = {};
  for (var opt in defaultOptions) {
    options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
  }
  if (options.ecmaVersion === "latest") {
    options.ecmaVersion = 1e8;
  } else if (options.ecmaVersion == null) {
    if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
      warnedAboutEcmaVersion = true;
      console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
    }
    options.ecmaVersion = 11;
  } else if (options.ecmaVersion >= 2015) {
    options.ecmaVersion -= 2009;
  }
  if (options.allowReserved == null) {
    options.allowReserved = options.ecmaVersion < 5;
  }
  if (opts.allowHashBang == null) {
    options.allowHashBang = options.ecmaVersion >= 14;
  }
  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function(token) {
      return tokens.push(token);
    };
  }
  if (isArray(options.onComment)) {
    options.onComment = pushComment(options, options.onComment);
  }
  return options;
}
__name(getOptions, "getOptions");
function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start,
      end
    };
    if (options.locations) {
      comment.loc = new SourceLocation(this, startLoc, endLoc);
    }
    if (options.ranges) {
      comment.range = [start, end];
    }
    array.push(comment);
  };
}
__name(pushComment, "pushComment");
var SCOPE_TOP = 1;
var SCOPE_FUNCTION = 2;
var SCOPE_ASYNC = 4;
var SCOPE_GENERATOR = 8;
var SCOPE_ARROW = 16;
var SCOPE_SIMPLE_CATCH = 32;
var SCOPE_SUPER = 64;
var SCOPE_DIRECT_SUPER = 128;
var SCOPE_CLASS_STATIC_BLOCK = 256;
var SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
}
__name(functionFlags, "functionFlags");
var BIND_NONE = 0;
var BIND_VAR = 1;
var BIND_LEXICAL = 2;
var BIND_FUNCTION = 3;
var BIND_SIMPLE_CATCH = 4;
var BIND_OUTSIDE = 5;
var Parser2 = /* @__PURE__ */ __name(function Parser3(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
  var reserved = "";
  if (options.allowReserved !== true) {
    reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
    if (options.sourceType === "module") {
      reserved += " await";
    }
  }
  this.reservedWords = wordsRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = wordsRegexp(reservedStrict);
  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);
  this.containsEsc = false;
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }
  this.type = types$1.eof;
  this.value = null;
  this.start = this.end = this.pos;
  this.startLoc = this.endLoc = this.curPosition();
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;
  this.context = this.initialContext();
  this.exprAllowed = true;
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);
  this.potentialArrowAt = -1;
  this.potentialArrowInForAwait = false;
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  this.labels = [];
  this.undefinedExports = /* @__PURE__ */ Object.create(null);
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
    this.skipLineComment(2);
  }
  this.scopeStack = [];
  this.enterScope(SCOPE_TOP);
  this.regexpState = null;
  this.privateNameStack = [];
}, "Parser");
var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
Parser2.prototype.parse = /* @__PURE__ */ __name(function parse() {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node);
}, "parse");
prototypeAccessors.inFunction.get = function() {
  return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
};
prototypeAccessors.inGenerator.get = function() {
  return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 && !this.currentVarScope().inClassFieldInit;
};
prototypeAccessors.inAsync.get = function() {
  return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 && !this.currentVarScope().inClassFieldInit;
};
prototypeAccessors.canAwait.get = function() {
  for (var i = this.scopeStack.length - 1; i >= 0; i--) {
    var scope = this.scopeStack[i];
    if (scope.inClassFieldInit || scope.flags & SCOPE_CLASS_STATIC_BLOCK) {
      return false;
    }
    if (scope.flags & SCOPE_FUNCTION) {
      return (scope.flags & SCOPE_ASYNC) > 0;
    }
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
prototypeAccessors.allowSuper.get = function() {
  var ref2 = this.currentThisScope();
  var flags = ref2.flags;
  var inClassFieldInit = ref2.inClassFieldInit;
  return (flags & SCOPE_SUPER) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod;
};
prototypeAccessors.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
};
prototypeAccessors.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
prototypeAccessors.allowNewDotTarget.get = function() {
  var ref2 = this.currentThisScope();
  var flags = ref2.flags;
  var inClassFieldInit = ref2.inClassFieldInit;
  return (flags & (SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK)) > 0 || inClassFieldInit;
};
prototypeAccessors.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
};
Parser2.extend = /* @__PURE__ */ __name(function extend() {
  var plugins = [], len = arguments.length;
  while (len--)
    plugins[len] = arguments[len];
  var cls = this;
  for (var i = 0; i < plugins.length; i++) {
    cls = plugins[i](cls);
  }
  return cls;
}, "extend");
Parser2.parse = /* @__PURE__ */ __name(function parse2(input, options) {
  return new this(options, input).parse();
}, "parse");
Parser2.parseExpressionAt = /* @__PURE__ */ __name(function parseExpressionAt(input, pos, options) {
  var parser = new this(options, input, pos);
  parser.nextToken();
  return parser.parseExpression();
}, "parseExpressionAt");
Parser2.tokenizer = /* @__PURE__ */ __name(function tokenizer(input, options) {
  return new this(options, input);
}, "tokenizer");
Object.defineProperties(Parser2.prototype, prototypeAccessors);
var pp$9 = Parser2.prototype;
var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
pp$9.strictDirective = function(start) {
  if (this.options.ecmaVersion < 5) {
    return false;
  }
  for (; ; ) {
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    var match = literal.exec(this.input.slice(start));
    if (!match) {
      return false;
    }
    if ((match[1] || match[2]) === "use strict") {
      skipWhiteSpace.lastIndex = start + match[0].length;
      var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
      var next = this.input.charAt(end);
      return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
    }
    start += match[0].length;
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    if (this.input[start] === ";") {
      start++;
    }
  }
};
pp$9.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true;
  } else {
    return false;
  }
};
pp$9.isContextual = function(name) {
  return this.type === types$1.name && this.value === name && !this.containsEsc;
};
pp$9.eatContextual = function(name) {
  if (!this.isContextual(name)) {
    return false;
  }
  this.next();
  return true;
};
pp$9.expectContextual = function(name) {
  if (!this.eatContextual(name)) {
    this.unexpected();
  }
};
pp$9.canInsertSemicolon = function() {
  return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$9.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) {
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
    }
    return true;
  }
};
pp$9.semicolon = function() {
  if (!this.eat(types$1.semi) && !this.insertSemicolon()) {
    this.unexpected();
  }
};
pp$9.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma) {
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
    }
    if (!notNext) {
      this.next();
    }
    return true;
  }
};
pp$9.expect = function(type) {
  this.eat(type) || this.unexpected();
};
pp$9.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};
var DestructuringErrors = /* @__PURE__ */ __name(function DestructuringErrors2() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}, "DestructuringErrors");
pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) {
    return;
  }
  if (refDestructuringErrors.trailingComma > -1) {
    this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
  }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) {
    this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) {
    return false;
  }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) {
    return shorthandAssign >= 0 || doubleProto >= 0;
  }
  if (shorthandAssign >= 0) {
    this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
  }
  if (doubleProto >= 0) {
    this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
  }
};
pp$9.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
    this.raise(this.yieldPos, "Yield expression cannot be a default value");
  }
  if (this.awaitPos) {
    this.raise(this.awaitPos, "Await expression cannot be a default value");
  }
};
pp$9.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression") {
    return this.isSimpleAssignTarget(expr.expression);
  }
  return expr.type === "Identifier" || expr.type === "MemberExpression";
};
var pp$8 = Parser2.prototype;
pp$8.parseTopLevel = function(node) {
  var exports = /* @__PURE__ */ Object.create(null);
  if (!node.body) {
    node.body = [];
  }
  while (this.type !== types$1.eof) {
    var stmt = this.parseStatement(null, true, exports);
    node.body.push(stmt);
  }
  if (this.inModule) {
    for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1) {
      var name = list[i];
      this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
    }
  }
  this.adaptDirectivePrologue(node.body);
  this.next();
  node.sourceType = this.options.sourceType;
  return this.finishNode(node, "Program");
};
var loopLabel = { kind: "loop" };
var switchLabel = { kind: "switch" };
pp$8.isLet = function(context) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  if (nextCh === 91 || nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
    return true;
  }
  if (context) {
    return false;
  }
  if (nextCh === 123) {
    return true;
  }
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true)) {
      ++pos;
    }
    if (nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
      return true;
    }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) {
      return true;
    }
  }
  return false;
};
pp$8.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, after;
  return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 55295 && after < 56320));
};
pp$8.parseStatement = function(context, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;
  if (this.isLet(context)) {
    starttype = types$1._var;
    kind = "let";
  }
  switch (starttype) {
    case types$1._break:
    case types$1._continue:
      return this.parseBreakContinueStatement(node, starttype.keyword);
    case types$1._debugger:
      return this.parseDebuggerStatement(node);
    case types$1._do:
      return this.parseDoStatement(node);
    case types$1._for:
      return this.parseForStatement(node);
    case types$1._function:
      if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
        this.unexpected();
      }
      return this.parseFunctionStatement(node, false, !context);
    case types$1._class:
      if (context) {
        this.unexpected();
      }
      return this.parseClass(node, true);
    case types$1._if:
      return this.parseIfStatement(node);
    case types$1._return:
      return this.parseReturnStatement(node);
    case types$1._switch:
      return this.parseSwitchStatement(node);
    case types$1._throw:
      return this.parseThrowStatement(node);
    case types$1._try:
      return this.parseTryStatement(node);
    case types$1._const:
    case types$1._var:
      kind = kind || this.value;
      if (context && kind !== "var") {
        this.unexpected();
      }
      return this.parseVarStatement(node, kind);
    case types$1._while:
      return this.parseWhileStatement(node);
    case types$1._with:
      return this.parseWithStatement(node);
    case types$1.braceL:
      return this.parseBlock(true, node);
    case types$1.semi:
      return this.parseEmptyStatement(node);
    case types$1._export:
    case types$1._import:
      if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 40 || nextCh === 46) {
          return this.parseExpressionStatement(node, this.parseExpression());
        }
      }
      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel) {
          this.raise(this.start, "'import' and 'export' may only appear at the top level");
        }
        if (!this.inModule) {
          this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
      }
      return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports);
    default:
      if (this.isAsyncFunction()) {
        if (context) {
          this.unexpected();
        }
        this.next();
        return this.parseFunctionStatement(node, true, !context);
      }
      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) {
        return this.parseLabeledStatement(node, maybeName, expr, context);
      } else {
        return this.parseExpressionStatement(node, expr);
      }
  }
};
pp$8.parseBreakContinueStatement = function(node, keyword) {
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types$1.semi) || this.insertSemicolon()) {
    node.label = null;
  } else if (this.type !== types$1.name) {
    this.unexpected();
  } else {
    node.label = this.parseIdent();
    this.semicolon();
  }
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) {
        break;
      }
      if (node.label && isBreak) {
        break;
      }
    }
  }
  if (i === this.labels.length) {
    this.raise(node.start, "Unsyntactic " + keyword);
  }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
};
pp$8.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement");
};
pp$8.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types$1._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6) {
    this.eat(types$1.semi);
  } else {
    this.semicolon();
  }
  return this.finishNode(node, "DoWhileStatement");
};
pp$8.parseForStatement = function(node) {
  this.next();
  var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types$1.parenL);
  if (this.type === types$1.semi) {
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, null);
  }
  var isLet = this.isLet();
  if (this.type === types$1._var || this.type === types$1._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types$1._in) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
        } else {
          node.await = awaitAt > -1;
        }
      }
      return this.parseForIn(node, init$1);
    }
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, init$1);
  }
  var startsWithLet = this.isContextual("let"), isForOf = false;
  var refDestructuringErrors = new DestructuringErrors();
  var init = this.parseExpression(awaitAt > -1 ? "await" : true, refDestructuringErrors);
  if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types$1._in) {
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
      } else {
        node.await = awaitAt > -1;
      }
    }
    if (startsWithLet && isForOf) {
      this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLValPattern(init);
    return this.parseForIn(node, init);
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) {
    this.unexpected(awaitAt);
  }
  return this.parseFor(node, init);
};
pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
};
pp$8.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  node.consequent = this.parseStatement("if");
  node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
  return this.finishNode(node, "IfStatement");
};
pp$8.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
    this.raise(this.start, "'return' outside of function");
  }
  this.next();
  if (this.eat(types$1.semi) || this.insertSemicolon()) {
    node.argument = null;
  } else {
    node.argument = this.parseExpression();
    this.semicolon();
  }
  return this.finishNode(node, "ReturnStatement");
};
pp$8.parseSwitchStatement = function(node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types$1.braceL);
  this.labels.push(switchLabel);
  this.enterScope(0);
  var cur;
  for (var sawDefault = false; this.type !== types$1.braceR; ) {
    if (this.type === types$1._case || this.type === types$1._default) {
      var isCase = this.type === types$1._case;
      if (cur) {
        this.finishNode(cur, "SwitchCase");
      }
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) {
          this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
        }
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types$1.colon);
    } else {
      if (!cur) {
        this.unexpected();
      }
      cur.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) {
    this.finishNode(cur, "SwitchCase");
  }
  this.next();
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement");
};
pp$8.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
    this.raise(this.lastTokEnd, "Illegal newline after throw");
  }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement");
};
var empty$1 = [];
pp$8.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types$1._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types$1.parenL)) {
      clause.param = this.parseBindingAtom();
      var simple = clause.param.type === "Identifier";
      this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
      this.checkLValPattern(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
      this.expect(types$1.parenR);
    } else {
      if (this.options.ecmaVersion < 10) {
        this.unexpected();
      }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer) {
    this.raise(node.start, "Missing catch or finally clause");
  }
  return this.finishNode(node, "TryStatement");
};
pp$8.parseVarStatement = function(node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration");
};
pp$8.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node, "WhileStatement");
};
pp$8.parseWithStatement = function(node) {
  if (this.strict) {
    this.raise(this.start, "'with' in strict mode");
  }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement("with");
  return this.finishNode(node, "WithStatement");
};
pp$8.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement");
};
pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
  for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1) {
    var label = list[i$1];
    if (label.name === maybeName) {
      this.raise(expr.start, "Label '" + maybeName + "' is already declared");
    }
  }
  var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this.labels[i];
    if (label$1.statementStart === node.start) {
      label$1.statementStart = this.start;
      label$1.kind = kind;
    } else {
      break;
    }
  }
  this.labels.push({ name: maybeName, kind, statementStart: this.start });
  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement");
};
pp$8.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement");
};
pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
  if (createNewLexicalScope === void 0)
    createNewLexicalScope = true;
  if (node === void 0)
    node = this.startNode();
  node.body = [];
  this.expect(types$1.braceL);
  if (createNewLexicalScope) {
    this.enterScope(0);
  }
  while (this.type !== types$1.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  if (exitStrict) {
    this.strict = false;
  }
  this.next();
  if (createNewLexicalScope) {
    this.exitScope();
  }
  return this.finishNode(node, "BlockStatement");
};
pp$8.parseFor = function(node, init) {
  node.init = init;
  this.expect(types$1.semi);
  node.test = this.type === types$1.semi ? null : this.parseExpression();
  this.expect(types$1.semi);
  node.update = this.type === types$1.parenR ? null : this.parseExpression();
  this.expect(types$1.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, "ForStatement");
};
pp$8.parseForIn = function(node, init) {
  var isForIn = this.type === types$1._in;
  this.next();
  if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
    this.raise(
      init.start,
      (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
    );
  }
  node.left = init;
  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types$1.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
};
pp$8.parseVar = function(node, isFor, kind) {
  node.declarations = [];
  node.kind = kind;
  for (; ; ) {
    var decl = this.startNode();
    this.parseVarId(decl, kind);
    if (this.eat(types$1.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (kind === "const" && !(this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      this.unexpected();
    } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types$1.comma)) {
      break;
    }
  }
  return node;
};
pp$8.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom();
  this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};
var FUNC_STATEMENT = 1;
var FUNC_HANGING_STATEMENT = 2;
var FUNC_NULLABLE_ID = 4;
pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    if (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT) {
      this.unexpected();
    }
    node.generator = this.eat(types$1.star);
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  if (statement & FUNC_STATEMENT) {
    node.id = statement & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent();
    if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
      this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
    }
  }
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(node.async, node.generator));
  if (!(statement & FUNC_STATEMENT)) {
    node.id = this.type === types$1.name ? this.parseIdent() : null;
  }
  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody, false, forInit);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
};
pp$8.parseFunctionParams = function(node) {
  this.expect(types$1.parenL);
  node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};
pp$8.parseClass = function(node, isStatement) {
  this.next();
  var oldStrict = this.strict;
  this.strict = true;
  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var privateNameMap = this.enterClassBody();
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types$1.braceL);
  while (this.type !== types$1.braceR) {
    var element = this.parseClassElement(node.superClass !== null);
    if (element) {
      classBody.body.push(element);
      if (element.type === "MethodDefinition" && element.kind === "constructor") {
        if (hadConstructor) {
          this.raise(element.start, "Duplicate constructor in the same class");
        }
        hadConstructor = true;
      } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
        this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
      }
    }
  }
  this.strict = oldStrict;
  this.next();
  node.body = this.finishNode(classBody, "ClassBody");
  this.exitClassBody();
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
};
pp$8.parseClassElement = function(constructorAllowsSuper) {
  if (this.eat(types$1.semi)) {
    return null;
  }
  var ecmaVersion = this.options.ecmaVersion;
  var node = this.startNode();
  var keyName = "";
  var isGenerator = false;
  var isAsync = false;
  var kind = "method";
  var isStatic = false;
  if (this.eatContextual("static")) {
    if (ecmaVersion >= 13 && this.eat(types$1.braceL)) {
      this.parseClassStaticBlock(node);
      return node;
    }
    if (this.isClassElementNameStart() || this.type === types$1.star) {
      isStatic = true;
    } else {
      keyName = "static";
    }
  }
  node.static = isStatic;
  if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
    if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
      isAsync = true;
    } else {
      keyName = "async";
    }
  }
  if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star)) {
    isGenerator = true;
  }
  if (!keyName && !isAsync && !isGenerator) {
    var lastValue = this.value;
    if (this.eatContextual("get") || this.eatContextual("set")) {
      if (this.isClassElementNameStart()) {
        kind = lastValue;
      } else {
        keyName = lastValue;
      }
    }
  }
  if (keyName) {
    node.computed = false;
    node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
    node.key.name = keyName;
    this.finishNode(node.key, "Identifier");
  } else {
    this.parseClassElementName(node);
  }
  if (ecmaVersion < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
    var isConstructor = !node.static && checkKeyName(node, "constructor");
    var allowsDirectSuper = isConstructor && constructorAllowsSuper;
    if (isConstructor && kind !== "method") {
      this.raise(node.key.start, "Constructor can't have get/set modifier");
    }
    node.kind = isConstructor ? "constructor" : kind;
    this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
  } else {
    this.parseClassField(node);
  }
  return node;
};
pp$8.isClassElementNameStart = function() {
  return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
};
pp$8.parseClassElementName = function(element) {
  if (this.type === types$1.privateId) {
    if (this.value === "constructor") {
      this.raise(this.start, "Classes can't have an element named '#constructor'");
    }
    element.computed = false;
    element.key = this.parsePrivateIdent();
  } else {
    this.parsePropertyName(element);
  }
};
pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
  var key = method.key;
  if (method.kind === "constructor") {
    if (isGenerator) {
      this.raise(key.start, "Constructor can't be a generator");
    }
    if (isAsync) {
      this.raise(key.start, "Constructor can't be an async method");
    }
  } else if (method.static && checkKeyName(method, "prototype")) {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
  if (method.kind === "get" && value.params.length !== 0) {
    this.raiseRecoverable(value.start, "getter should have no params");
  }
  if (method.kind === "set" && value.params.length !== 1) {
    this.raiseRecoverable(value.start, "setter should have exactly one param");
  }
  if (method.kind === "set" && value.params[0].type === "RestElement") {
    this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params");
  }
  return this.finishNode(method, "MethodDefinition");
};
pp$8.parseClassField = function(field) {
  if (checkKeyName(field, "constructor")) {
    this.raise(field.key.start, "Classes can't have a field named 'constructor'");
  } else if (field.static && checkKeyName(field, "prototype")) {
    this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
  }
  if (this.eat(types$1.eq)) {
    var scope = this.currentThisScope();
    var inClassFieldInit = scope.inClassFieldInit;
    scope.inClassFieldInit = true;
    field.value = this.parseMaybeAssign();
    scope.inClassFieldInit = inClassFieldInit;
  } else {
    field.value = null;
  }
  this.semicolon();
  return this.finishNode(field, "PropertyDefinition");
};
pp$8.parseClassStaticBlock = function(node) {
  node.body = [];
  var oldLabels = this.labels;
  this.labels = [];
  this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
  while (this.type !== types$1.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  this.next();
  this.exitScope();
  this.labels = oldLabels;
  return this.finishNode(node, "StaticBlock");
};
pp$8.parseClassId = function(node, isStatement) {
  if (this.type === types$1.name) {
    node.id = this.parseIdent();
    if (isStatement) {
      this.checkLValSimple(node.id, BIND_LEXICAL, false);
    }
  } else {
    if (isStatement === true) {
      this.unexpected();
    }
    node.id = null;
  }
};
pp$8.parseClassSuper = function(node) {
  node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(false) : null;
};
pp$8.enterClassBody = function() {
  var element = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  this.privateNameStack.push(element);
  return element.declared;
};
pp$8.exitClassBody = function() {
  var ref2 = this.privateNameStack.pop();
  var declared = ref2.declared;
  var used = ref2.used;
  var len = this.privateNameStack.length;
  var parent = len === 0 ? null : this.privateNameStack[len - 1];
  for (var i = 0; i < used.length; ++i) {
    var id = used[i];
    if (!hasOwn(declared, id.name)) {
      if (parent) {
        parent.used.push(id);
      } else {
        this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class");
      }
    }
  }
};
function isPrivateNameConflicted(privateNameMap, element) {
  var name = element.key.name;
  var curr = privateNameMap[name];
  var next = "true";
  if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
    next = (element.static ? "s" : "i") + element.kind;
  }
  if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
    privateNameMap[name] = "true";
    return false;
  } else if (!curr) {
    privateNameMap[name] = next;
    return false;
  } else {
    return true;
  }
}
__name(isPrivateNameConflicted, "isPrivateNameConflicted");
function checkKeyName(node, name) {
  var computed = node.computed;
  var key = node.key;
  return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
}
__name(checkKeyName, "checkKeyName");
pp$8.parseExport = function(node, exports) {
  this.next();
  if (this.eat(types$1.star)) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        node.exported = this.parseModuleExportName();
        this.checkExport(exports, node.exported, this.lastTokStart);
      } else {
        node.exported = null;
      }
    }
    this.expectContextual("from");
    if (this.type !== types$1.string) {
      this.unexpected();
    }
    node.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration");
  }
  if (this.eat(types$1._default)) {
    this.checkExport(exports, "default", this.lastTokStart);
    var isAsync;
    if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) {
        this.next();
      }
      node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
    } else if (this.type === types$1._class) {
      var cNode = this.startNode();
      node.declaration = this.parseClass(cNode, "nullableID");
    } else {
      node.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(null);
    if (node.declaration.type === "VariableDeclaration") {
      this.checkVariableExport(exports, node.declaration.declarations);
    } else {
      this.checkExport(exports, node.declaration.id, node.declaration.id.start);
    }
    node.specifiers = [];
    node.source = null;
  } else {
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      if (this.type !== types$1.string) {
        this.unexpected();
      }
      node.source = this.parseExprAtom();
    } else {
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        var spec = list[i];
        this.checkUnreserved(spec.local);
        this.checkLocalExport(spec.local);
        if (spec.local.type === "Literal") {
          this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
        }
      }
      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration");
};
pp$8.checkExport = function(exports, name, pos) {
  if (!exports) {
    return;
  }
  if (typeof name !== "string") {
    name = name.type === "Identifier" ? name.name : name.value;
  }
  if (hasOwn(exports, name)) {
    this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
  }
  exports[name] = true;
};
pp$8.checkPatternExport = function(exports, pat) {
  var type = pat.type;
  if (type === "Identifier") {
    this.checkExport(exports, pat, pat.start);
  } else if (type === "ObjectPattern") {
    for (var i = 0, list = pat.properties; i < list.length; i += 1) {
      var prop = list[i];
      this.checkPatternExport(exports, prop);
    }
  } else if (type === "ArrayPattern") {
    for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];
      if (elt) {
        this.checkPatternExport(exports, elt);
      }
    }
  } else if (type === "Property") {
    this.checkPatternExport(exports, pat.value);
  } else if (type === "AssignmentPattern") {
    this.checkPatternExport(exports, pat.left);
  } else if (type === "RestElement") {
    this.checkPatternExport(exports, pat.argument);
  } else if (type === "ParenthesizedExpression") {
    this.checkPatternExport(exports, pat.expression);
  }
};
pp$8.checkVariableExport = function(exports, decls) {
  if (!exports) {
    return;
  }
  for (var i = 0, list = decls; i < list.length; i += 1) {
    var decl = list[i];
    this.checkPatternExport(exports, decl.id);
  }
};
pp$8.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
pp$8.parseExportSpecifiers = function(exports) {
  var nodes = [], first = true;
  this.expect(types$1.braceL);
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var node = this.startNode();
    node.local = this.parseModuleExportName();
    node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
    this.checkExport(
      exports,
      node.exported,
      node.exported.start
    );
    nodes.push(this.finishNode(node, "ExportSpecifier"));
  }
  return nodes;
};
pp$8.parseImport = function(node) {
  this.next();
  if (this.type === types$1.string) {
    node.specifiers = empty$1;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration");
};
pp$8.parseImportSpecifiers = function() {
  var nodes = [], first = true;
  if (this.type === types$1.name) {
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLValSimple(node.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
    if (!this.eat(types$1.comma)) {
      return nodes;
    }
  }
  if (this.type === types$1.star) {
    var node$1 = this.startNode();
    this.next();
    this.expectContextual("as");
    node$1.local = this.parseIdent();
    this.checkLValSimple(node$1.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
    return nodes;
  }
  this.expect(types$1.braceL);
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var node$2 = this.startNode();
    node$2.imported = this.parseModuleExportName();
    if (this.eatContextual("as")) {
      node$2.local = this.parseIdent();
    } else {
      this.checkUnreserved(node$2.imported);
      node$2.local = node$2.imported;
    }
    this.checkLValSimple(node$2.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$2, "ImportSpecifier"));
  }
  return nodes;
};
pp$8.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
    var stringLiteral = this.parseLiteral(this.value);
    if (loneSurrogate.test(stringLiteral.value)) {
      this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
    }
    return stringLiteral;
  }
  return this.parseIdent(true);
};
pp$8.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$8.isDirectiveCandidate = function(statement) {
  return this.options.ecmaVersion >= 5 && statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && (this.input[statement.start] === '"' || this.input[statement.start] === "'");
};
var pp$7 = Parser2.prototype;
pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
      case "Identifier":
        if (this.inAsync && node.name === "await") {
          this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
        }
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        node.type = "ObjectPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        for (var i = 0, list = node.properties; i < list.length; i += 1) {
          var prop = list[i];
          this.toAssignable(prop, isBinding);
          if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
            this.raise(prop.argument.start, "Unexpected token");
          }
        }
        break;
      case "Property":
        if (node.kind !== "init") {
          this.raise(node.key.start, "Object pattern can't contain getter or setter");
        }
        this.toAssignable(node.value, isBinding);
        break;
      case "ArrayExpression":
        node.type = "ArrayPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        this.toAssignableList(node.elements, isBinding);
        break;
      case "SpreadElement":
        node.type = "RestElement";
        this.toAssignable(node.argument, isBinding);
        if (node.argument.type === "AssignmentPattern") {
          this.raise(node.argument.start, "Rest elements cannot have a default value");
        }
        break;
      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isBinding, refDestructuringErrors);
        break;
      case "ChainExpression":
        this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!isBinding) {
          break;
        }
      default:
        this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) {
    this.checkPatternErrors(refDestructuringErrors, true);
  }
  return node;
};
pp$7.toAssignableList = function(exprList, isBinding) {
  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) {
      this.toAssignable(elt, isBinding);
    }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
      this.unexpected(last.argument.start);
    }
  }
  return exprList;
};
pp$7.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement");
};
pp$7.parseRestBinding = function() {
  var node = this.startNode();
  this.next();
  if (this.options.ecmaVersion === 6 && this.type !== types$1.name) {
    this.unexpected();
  }
  node.argument = this.parseBindingAtom();
  return this.finishNode(node, "RestElement");
};
pp$7.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
      case types$1.bracketL:
        var node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(types$1.bracketR, true, true);
        return this.finishNode(node, "ArrayPattern");
      case types$1.braceL:
        return this.parseObj(true);
    }
  }
  return this.parseIdent();
};
pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this.expect(types$1.comma);
    }
    if (allowEmpty && this.type === types$1.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break;
    } else if (this.type === types$1.ellipsis) {
      var rest = this.parseRestBinding();
      this.parseBindingListItem(rest);
      elts.push(rest);
      if (this.type === types$1.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      this.expect(close);
      break;
    } else {
      var elem = this.parseMaybeDefault(this.start, this.startLoc);
      this.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts;
};
pp$7.parseBindingListItem = function(param) {
  return param;
};
pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) {
    return left;
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern");
};
pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  var isBind = bindingType !== BIND_NONE;
  switch (expr.type) {
    case "Identifier":
      if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
        this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
      }
      if (isBind) {
        if (bindingType === BIND_LEXICAL && expr.name === "let") {
          this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
        }
        if (checkClashes) {
          if (hasOwn(checkClashes, expr.name)) {
            this.raiseRecoverable(expr.start, "Argument name clash");
          }
          checkClashes[expr.name] = true;
        }
        if (bindingType !== BIND_OUTSIDE) {
          this.declareName(expr.name, bindingType, expr.start);
        }
      }
      break;
    case "ChainExpression":
      this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      if (isBind) {
        this.raiseRecoverable(expr.start, "Binding member expression");
      }
      break;
    case "ParenthesizedExpression":
      if (isBind) {
        this.raiseRecoverable(expr.start, "Binding parenthesized expression");
      }
      return this.checkLValSimple(expr.expression, bindingType, checkClashes);
    default:
      this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
  }
};
pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "ObjectPattern":
      for (var i = 0, list = expr.properties; i < list.length; i += 1) {
        var prop = list[i];
        this.checkLValInnerPattern(prop, bindingType, checkClashes);
      }
      break;
    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];
        if (elem) {
          this.checkLValInnerPattern(elem, bindingType, checkClashes);
        }
      }
      break;
    default:
      this.checkLValSimple(expr, bindingType, checkClashes);
  }
};
pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "Property":
      this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(expr.left, bindingType, checkClashes);
      break;
    case "RestElement":
      this.checkLValPattern(expr.argument, bindingType, checkClashes);
      break;
    default:
      this.checkLValPattern(expr, bindingType, checkClashes);
  }
};
var TokContext = /* @__PURE__ */ __name(function TokContext2(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
}, "TokContext");
var types = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function(p) {
    return p.tryReadTemplateToken();
  }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};
var pp$6 = Parser2.prototype;
pp$6.initialContext = function() {
  return [types.b_stat];
};
pp$6.curContext = function() {
  return this.context[this.context.length - 1];
};
pp$6.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types.f_expr || parent === types.f_stat) {
    return true;
  }
  if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr)) {
    return !parent.isExpr;
  }
  if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) {
    return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  }
  if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) {
    return true;
  }
  if (prevType === types$1.braceL) {
    return parent === types.b_stat;
  }
  if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) {
    return false;
  }
  return !this.exprAllowed;
};
pp$6.inGeneratorContext = function() {
  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this.context[i];
    if (context.token === "function") {
      return context.generator;
    }
  }
  return false;
};
pp$6.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types$1.dot) {
    this.exprAllowed = false;
  } else if (update = type.updateContext) {
    update.call(this, prevType);
  } else {
    this.exprAllowed = type.beforeExpr;
  }
};
pp$6.overrideContext = function(tokenCtx) {
  if (this.curContext() !== tokenCtx) {
    this.context[this.context.length - 1] = tokenCtx;
  }
};
types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return;
  }
  var out = this.context.pop();
  if (out === types.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};
types$1.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
  this.exprAllowed = true;
};
types$1.dollarBraceL.updateContext = function() {
  this.context.push(types.b_tmpl);
  this.exprAllowed = true;
};
types$1.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
  this.context.push(statementParens ? types.p_stat : types.p_expr);
  this.exprAllowed = true;
};
types$1.incDec.updateContext = function() {
};
types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types$1._else && !(prevType === types$1.semi && this.curContext() !== types.p_stat) && !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat)) {
    this.context.push(types.f_expr);
  } else {
    this.context.push(types.f_stat);
  }
  this.exprAllowed = false;
};
types$1.backQuote.updateContext = function() {
  if (this.curContext() === types.q_tmpl) {
    this.context.pop();
  } else {
    this.context.push(types.q_tmpl);
  }
  this.exprAllowed = false;
};
types$1.star.updateContext = function(prevType) {
  if (prevType === types$1._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types.f_expr) {
      this.context[index] = types.f_expr_gen;
    } else {
      this.context[index] = types.f_gen;
    }
  }
  this.exprAllowed = true;
};
types$1.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
    if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
      allowed = true;
    }
  }
  this.exprAllowed = allowed;
};
var pp$5 = Parser2.prototype;
pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
    return;
  }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
    return;
  }
  var key = prop.key;
  var name;
  switch (key.type) {
    case "Identifier":
      name = key.name;
      break;
    case "Literal":
      name = String(key.value);
      break;
    default:
      return;
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors) {
          if (refDestructuringErrors.doubleProto < 0) {
            refDestructuringErrors.doubleProto = key.start;
          }
        } else {
          this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
        }
      }
      propHash.proto = true;
    }
    return;
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition) {
      this.raiseRecoverable(key.start, "Redefinition of property");
    }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};
pp$5.parseExpression = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
  if (this.type === types$1.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types$1.comma)) {
      node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
    }
    return this.finishNode(node, "SequenceExpression");
  }
  return expr;
};
pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) {
      return this.parseYield(forInit);
    } else {
      this.exprAllowed = false;
    }
  }
  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    oldDoubleProto = refDestructuringErrors.doubleProto;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors();
    ownDestructuringErrors = true;
  }
  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types$1.parenL || this.type === types$1.name) {
    this.potentialArrowAt = this.start;
    this.potentialArrowInForAwait = forInit === "await";
  }
  var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
  if (afterLeftParse) {
    left = afterLeftParse.call(this, left, startPos, startLoc);
  }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    if (this.type === types$1.eq) {
      left = this.toAssignable(left, false, refDestructuringErrors);
    }
    if (!ownDestructuringErrors) {
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
    }
    if (refDestructuringErrors.shorthandAssign >= left.start) {
      refDestructuringErrors.shorthandAssign = -1;
    }
    if (this.type === types$1.eq) {
      this.checkLValPattern(left);
    } else {
      this.checkLValSimple(left);
    }
    node.left = left;
    this.next();
    node.right = this.parseMaybeAssign(forInit);
    if (oldDoubleProto > -1) {
      refDestructuringErrors.doubleProto = oldDoubleProto;
    }
    return this.finishNode(node, "AssignmentExpression");
  } else {
    if (ownDestructuringErrors) {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
  }
  if (oldParenAssign > -1) {
    refDestructuringErrors.parenthesizedAssign = oldParenAssign;
  }
  if (oldTrailingComma > -1) {
    refDestructuringErrors.trailingComma = oldTrailingComma;
  }
  return left;
};
pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(forInit, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  if (this.eat(types$1.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types$1.colon);
    node.alternate = this.parseMaybeAssign(forInit);
    return this.finishNode(node, "ConditionalExpression");
  }
  return expr;
};
pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
};
pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
  var prec = this.type.binop;
  if (prec != null && (!forInit || this.type !== types$1._in)) {
    if (prec > minPrec) {
      var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
      var coalesce = this.type === types$1.coalesce;
      if (coalesce) {
        prec = types$1.logicalAND.binop;
      }
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
      if (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) {
        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
      }
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
    }
  }
  return left;
};
pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  if (right.type === "PrivateIdentifier") {
    this.raise(right.start, "Private identifier can only be left side of binary expression");
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
};
pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && this.canAwait) {
    expr = this.parseAwait(forInit);
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types$1.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true, update, forInit);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) {
      this.checkLValSimple(node.argument);
    } else if (this.strict && node.operator === "delete" && node.argument.type === "Identifier") {
      this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
    } else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) {
      this.raiseRecoverable(node.start, "Private fields can not be deleted");
    } else {
      sawUnary = true;
    }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else if (!sawUnary && this.type === types$1.privateId) {
    if (forInit || this.privateNameStack.length === 0) {
      this.unexpected();
    }
    expr = this.parsePrivateIdent();
    if (this.type !== types$1._in) {
      this.unexpected();
    }
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.operator = this.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this.checkLValSimple(expr);
      this.next();
      expr = this.finishNode(node$1, "UpdateExpression");
    }
  }
  if (!incDec && this.eat(types$1.starstar)) {
    if (sawUnary) {
      this.unexpected(this.lastTokStart);
    } else {
      return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false);
    }
  } else {
    return expr;
  }
};
function isPrivateFieldAccess(node) {
  return node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" || node.type === "ChainExpression" && isPrivateFieldAccess(node.expression);
}
__name(isPrivateFieldAccess, "isPrivateFieldAccess");
pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors, forInit);
  if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
    return expr;
  }
  var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) {
      refDestructuringErrors.parenthesizedAssign = -1;
    }
    if (refDestructuringErrors.parenthesizedBind >= result.start) {
      refDestructuringErrors.parenthesizedBind = -1;
    }
    if (refDestructuringErrors.trailingComma >= result.start) {
      refDestructuringErrors.trailingComma = -1;
    }
  }
  return result;
};
pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
  var optionalChained = false;
  while (true) {
    var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
    if (element.optional) {
      optionalChained = true;
    }
    if (element === base || element.type === "ArrowFunctionExpression") {
      if (optionalChained) {
        var chainNode = this.startNodeAt(startPos, startLoc);
        chainNode.expression = element;
        element = this.finishNode(chainNode, "ChainExpression");
      }
      return element;
    }
    base = element;
  }
};
pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
  var optionalSupported = this.options.ecmaVersion >= 11;
  var optional = optionalSupported && this.eat(types$1.questionDot);
  if (noCalls && optional) {
    this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  }
  var computed = this.eat(types$1.bracketL);
  if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    if (computed) {
      node.property = this.parseExpression();
      this.expect(types$1.bracketR);
    } else if (this.type === types$1.privateId && base.type !== "Super") {
      node.property = this.parsePrivateIdent();
    } else {
      node.property = this.parseIdent(this.options.allowReserved !== "never");
    }
    node.computed = !!computed;
    if (optionalSupported) {
      node.optional = optional;
    }
    base = this.finishNode(node, "MemberExpression");
  } else if (!noCalls && this.eat(types$1.parenL)) {
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
    if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types$1.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0) {
        this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
      }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
    var node$1 = this.startNodeAt(startPos, startLoc);
    node$1.callee = base;
    node$1.arguments = exprList;
    if (optionalSupported) {
      node$1.optional = optional;
    }
    base = this.finishNode(node$1, "CallExpression");
  } else if (this.type === types$1.backQuote) {
    if (optional || optionalChained) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    }
    var node$2 = this.startNodeAt(startPos, startLoc);
    node$2.tag = base;
    node$2.quasi = this.parseTemplate({ isTagged: true });
    base = this.finishNode(node$2, "TaggedTemplateExpression");
  }
  return base;
};
pp$5.parseExprAtom = function(refDestructuringErrors, forInit) {
  if (this.type === types$1.slash) {
    this.readRegexp();
  }
  var node, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
    case types$1._super:
      if (!this.allowSuper) {
        this.raise(this.start, "'super' keyword outside a method");
      }
      node = this.startNode();
      this.next();
      if (this.type === types$1.parenL && !this.allowDirectSuper) {
        this.raise(node.start, "super() call outside constructor of a subclass");
      }
      if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL) {
        this.unexpected();
      }
      return this.finishNode(node, "Super");
    case types$1._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression");
    case types$1.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
        this.overrideContext(types.f_expr);
        return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
      }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types$1.arrow)) {
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
        }
        if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
          id = this.parseIdent(false);
          if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) {
            this.unexpected();
          }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
        }
      }
      return id;
    case types$1.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = { pattern: value.pattern, flags: value.flags };
      return node;
    case types$1.num:
    case types$1.string:
      return this.parseLiteral(this.value);
    case types$1._null:
    case types$1._true:
    case types$1._false:
      node = this.startNode();
      node.value = this.type === types$1._null ? null : this.type === types$1._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal");
    case types$1.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
          refDestructuringErrors.parenthesizedAssign = start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = start;
        }
      }
      return expr;
    case types$1.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node, "ArrayExpression");
    case types$1.braceL:
      this.overrideContext(types.b_expr);
      return this.parseObj(false, refDestructuringErrors);
    case types$1._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, 0);
    case types$1._class:
      return this.parseClass(this.startNode(), false);
    case types$1._new:
      return this.parseNew();
    case types$1.backQuote:
      return this.parseTemplate();
    case types$1._import:
      if (this.options.ecmaVersion >= 11) {
        return this.parseExprImport();
      } else {
        return this.unexpected();
      }
    default:
      this.unexpected();
  }
};
pp$5.parseExprImport = function() {
  var node = this.startNode();
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  }
  var meta = this.parseIdent(true);
  switch (this.type) {
    case types$1.parenL:
      return this.parseDynamicImport(node);
    case types$1.dot:
      node.meta = meta;
      return this.parseImportMeta(node);
    default:
      this.unexpected();
  }
};
pp$5.parseDynamicImport = function(node) {
  this.next();
  node.source = this.parseMaybeAssign();
  if (!this.eat(types$1.parenR)) {
    var errorPos = this.start;
    if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
    } else {
      this.unexpected(errorPos);
    }
  }
  return this.finishNode(node, "ImportExpression");
};
pp$5.parseImportMeta = function(node) {
  this.next();
  var containsEsc = this.containsEsc;
  node.property = this.parseIdent(true);
  if (node.property.name !== "meta") {
    this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
  }
  if (containsEsc) {
    this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
  }
  if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) {
    this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
  }
  return this.finishNode(node, "MetaProperty");
};
pp$5.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
    node.bigint = node.raw.slice(0, -1).replace(/_/g, "");
  }
  this.next();
  return this.finishNode(node, "Literal");
};
pp$5.parseParenExpression = function() {
  this.expect(types$1.parenL);
  var val = this.parseExpression();
  this.expect(types$1.parenR);
  return val;
};
pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    while (this.type !== types$1.parenR) {
      first ? first = false : this.expect(types$1.comma);
      if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
        lastIsComma = true;
        break;
      } else if (this.type === types$1.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === types$1.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        break;
      } else {
        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
      }
    }
    var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
    this.expect(types$1.parenR);
    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types$1.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
    }
    if (!exprList.length || lastIsComma) {
      this.unexpected(this.lastTokStart);
    }
    if (spreadStart) {
      this.unexpected(spreadStart);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }
  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression");
  } else {
    return val;
  }
};
pp$5.parseParenItem = function(item) {
  return item;
};
pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
};
var empty = [];
pp$5.parseNew = function() {
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  }
  var node = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(types$1.dot)) {
    node.meta = meta;
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target") {
      this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
    }
    if (containsEsc) {
      this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
    }
    if (!this.allowNewDotTarget) {
      this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
    }
    return this.finishNode(node, "MetaProperty");
  }
  var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types$1._import;
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true, false);
  if (isImport && node.callee.type === "ImportExpression") {
    this.raise(startPos, "Cannot use new with import()");
  }
  if (this.eat(types$1.parenL)) {
    node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false);
  } else {
    node.arguments = empty;
  }
  return this.finishNode(node, "NewExpression");
};
pp$5.parseTemplateElement = function(ref2) {
  var isTagged = ref2.isTagged;
  var elem = this.startNode();
  if (this.type === types$1.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types$1.backQuote;
  return this.finishNode(elem, "TemplateElement");
};
pp$5.parseTemplate = function(ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var isTagged = ref2.isTagged;
  if (isTagged === void 0)
    isTagged = false;
  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({ isTagged });
  node.quasis = [curElt];
  while (!curElt.tail) {
    if (this.type === types$1.eof) {
      this.raise(this.pos, "Unterminated template literal");
    }
    this.expect(types$1.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(types$1.braceR);
    node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral");
};
pp$5.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$5.parseObj = function(isPattern, refDestructuringErrors) {
  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var prop = this.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) {
      this.checkPropClash(prop, propHash, refDestructuringErrors);
    }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
};
pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types$1.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement");
    }
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    return this.finishNode(prop, "SpreadElement");
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern) {
      isGenerator = this.eat(types$1.star);
    }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
    this.parsePropertyName(prop, refDestructuringErrors);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property");
};
pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types$1.colon) {
    this.unexpected();
  }
  if (this.eat(types$1.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
    if (isPattern) {
      this.unexpected();
    }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get") {
        this.raiseRecoverable(start, "getter should have no params");
      } else {
        this.raiseRecoverable(start, "setter should have exactly one param");
      }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
        this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
      }
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    this.checkUnreserved(prop.key);
    if (prop.key.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = startPos;
    }
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else if (this.type === types$1.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0) {
        refDestructuringErrors.shorthandAssign = this.start;
      }
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else {
      prop.value = this.copyNode(prop.key);
    }
    prop.shorthand = true;
  } else {
    this.unexpected();
  }
};
pp$5.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types$1.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types$1.bracketR);
      return prop.key;
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
pp$5.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) {
    node.generator = node.expression = false;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = false;
  }
};
pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6) {
    node.generator = isGenerator;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
  this.expect(types$1.parenL);
  node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false, true, false);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "FunctionExpression");
};
pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true, false, forInit);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "ArrowFunctionExpression");
};
pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
  var isExpression = isArrowFunction && this.type !== types$1.braceL;
  var oldStrict = this.strict, useStrict = false;
  if (isExpression) {
    node.body = this.parseMaybeAssign(forInit);
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      if (useStrict && nonSimple) {
        this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      }
    }
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) {
      this.strict = true;
    }
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
    if (this.strict && node.id) {
      this.checkLValSimple(node.id, BIND_OUTSIDE);
    }
    node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();
};
pp$5.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1) {
    var param = list[i];
    if (param.type !== "Identifier") {
      return false;
    }
  }
  return true;
};
pp$5.checkParams = function(node, allowDuplicates) {
  var nameHash = /* @__PURE__ */ Object.create(null);
  for (var i = 0, list = node.params; i < list.length; i += 1) {
    var param = list[i];
    this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};
pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(types$1.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) {
        break;
      }
    } else {
      first = false;
    }
    var elt = void 0;
    if (allowEmpty && this.type === types$1.comma) {
      elt = null;
    } else if (this.type === types$1.ellipsis) {
      elt = this.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
    } else {
      elt = this.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts;
};
pp$5.checkUnreserved = function(ref2) {
  var start = ref2.start;
  var end = ref2.end;
  var name = ref2.name;
  if (this.inGenerator && name === "yield") {
    this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
  }
  if (this.inAsync && name === "await") {
    this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
  }
  if (this.currentThisScope().inClassFieldInit && name === "arguments") {
    this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
  }
  if (this.inClassStaticBlock && (name === "arguments" || name === "await")) {
    this.raise(start, "Cannot use " + name + " in class static initialization block");
  }
  if (this.keywords.test(name)) {
    this.raise(start, "Unexpected keyword '" + name + "'");
  }
  if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
    return;
  }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name)) {
    if (!this.inAsync && name === "await") {
      this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
    }
    this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
  }
};
pp$5.parseIdent = function(liberal, isBinding) {
  var node = this.startNode();
  if (this.type === types$1.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;
    if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
  } else {
    this.unexpected();
  }
  this.next(!!liberal);
  this.finishNode(node, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node);
    if (node.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = node.start;
    }
  }
  return node;
};
pp$5.parsePrivateIdent = function() {
  var node = this.startNode();
  if (this.type === types$1.privateId) {
    node.name = this.value;
  } else {
    this.unexpected();
  }
  this.next();
  this.finishNode(node, "PrivateIdentifier");
  if (this.privateNameStack.length === 0) {
    this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class");
  } else {
    this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
  }
  return node;
};
pp$5.parseYield = function(forInit) {
  if (!this.yieldPos) {
    this.yieldPos = this.start;
  }
  var node = this.startNode();
  this.next();
  if (this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types$1.star);
    node.argument = this.parseMaybeAssign(forInit);
  }
  return this.finishNode(node, "YieldExpression");
};
pp$5.parseAwait = function(forInit) {
  if (!this.awaitPos) {
    this.awaitPos = this.start;
  }
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, true, false, forInit);
  return this.finishNode(node, "AwaitExpression");
};
var pp$4 = Parser2.prototype;
pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos;
  err.loc = loc;
  err.raisedAt = this.pos;
  throw err;
};
pp$4.raiseRecoverable = pp$4.raise;
pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart);
  }
};
var pp$3 = Parser2.prototype;
var Scope = /* @__PURE__ */ __name(function Scope2(flags) {
  this.flags = flags;
  this.var = [];
  this.lexical = [];
  this.functions = [];
  this.inClassFieldInit = false;
}, "Scope");
pp$3.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};
pp$3.exitScope = function() {
  this.scopeStack.pop();
};
pp$3.treatFunctionsAsVarInScope = function(scope) {
  return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
};
pp$3.declareName = function(name, bindingType, pos) {
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope = this.currentScope();
    redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
    scope.lexical.push(name);
    if (this.inModule && scope.flags & SCOPE_TOP) {
      delete this.undefinedExports[name];
    }
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    if (this.treatFunctionsAsVar) {
      redeclared = scope$2.lexical.indexOf(name) > -1;
    } else {
      redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
    }
    scope$2.functions.push(name);
  } else {
    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
      var scope$3 = this.scopeStack[i];
      if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
        redeclared = true;
        break;
      }
      scope$3.var.push(name);
      if (this.inModule && scope$3.flags & SCOPE_TOP) {
        delete this.undefinedExports[name];
      }
      if (scope$3.flags & SCOPE_VAR) {
        break;
      }
    }
  }
  if (redeclared) {
    this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
  }
};
pp$3.checkLocalExport = function(id) {
  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
    this.undefinedExports[id.name] = id;
  }
};
pp$3.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
pp$3.currentVarScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR) {
      return scope;
    }
  }
};
pp$3.currentThisScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) {
      return scope;
    }
  }
};
var Node = /* @__PURE__ */ __name(function Node2(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations) {
    this.loc = new SourceLocation(parser, loc);
  }
  if (parser.options.directSourceFile) {
    this.sourceFile = parser.options.directSourceFile;
  }
  if (parser.options.ranges) {
    this.range = [pos, 0];
  }
}, "Node");
var pp$2 = Parser2.prototype;
pp$2.startNode = function() {
  return new Node(this, this.start, this.startLoc);
};
pp$2.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc);
};
function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations) {
    node.loc.end = loc;
  }
  if (this.options.ranges) {
    node.range[1] = pos;
  }
  return node;
}
__name(finishNodeAt, "finishNodeAt");
pp$2.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
};
pp$2.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc);
};
pp$2.copyNode = function(node) {
  var newNode = new Node(this, node.start, this.startLoc);
  for (var prop in node) {
    newNode[prop] = node[prop];
  }
  return newNode;
};
var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
var ecma11BinaryProperties = ecma10BinaryProperties;
var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
var ecma13BinaryProperties = ecma12BinaryProperties;
var unicodeBinaryProperties = {
  9: ecma9BinaryProperties,
  10: ecma10BinaryProperties,
  11: ecma11BinaryProperties,
  12: ecma12BinaryProperties,
  13: ecma13BinaryProperties
};
var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
var unicodeScriptValues = {
  9: ecma9ScriptValues,
  10: ecma10ScriptValues,
  11: ecma11ScriptValues,
  12: ecma12ScriptValues,
  13: ecma13ScriptValues
};
var data = {};
function buildUnicodeData(ecmaVersion) {
  var d = data[ecmaVersion] = {
    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
    nonBinary: {
      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
    }
  };
  d.nonBinary.Script_Extensions = d.nonBinary.Script;
  d.nonBinary.gc = d.nonBinary.General_Category;
  d.nonBinary.sc = d.nonBinary.Script;
  d.nonBinary.scx = d.nonBinary.Script_Extensions;
}
__name(buildUnicodeData, "buildUnicodeData");
for (i = 0, list = [9, 10, 11, 12, 13]; i < list.length; i += 1) {
  ecmaVersion = list[i];
  buildUnicodeData(ecmaVersion);
}
var ecmaVersion;
var i;
var list;
var pp$1 = Parser2.prototype;
var RegExpValidationState = /* @__PURE__ */ __name(function RegExpValidationState2(parser) {
  this.parser = parser;
  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "");
  this.unicodeProperties = data[parser.options.ecmaVersion >= 13 ? 13 : parser.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
}, "RegExpValidationState");
RegExpValidationState.prototype.reset = /* @__PURE__ */ __name(function reset(start, pattern, flags) {
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
}, "reset");
RegExpValidationState.prototype.raise = /* @__PURE__ */ __name(function raise(message) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
}, "raise");
RegExpValidationState.prototype.at = /* @__PURE__ */ __name(function at(i, forceU) {
  if (forceU === void 0)
    forceU = false;
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return -1;
  }
  var c = s.charCodeAt(i);
  if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l) {
    return c;
  }
  var next = s.charCodeAt(i + 1);
  return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
}, "at");
RegExpValidationState.prototype.nextIndex = /* @__PURE__ */ __name(function nextIndex(i, forceU) {
  if (forceU === void 0)
    forceU = false;
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return l;
  }
  var c = s.charCodeAt(i), next;
  if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) {
    return i + 1;
  }
  return i + 2;
}, "nextIndex");
RegExpValidationState.prototype.current = /* @__PURE__ */ __name(function current(forceU) {
  if (forceU === void 0)
    forceU = false;
  return this.at(this.pos, forceU);
}, "current");
RegExpValidationState.prototype.lookahead = /* @__PURE__ */ __name(function lookahead(forceU) {
  if (forceU === void 0)
    forceU = false;
  return this.at(this.nextIndex(this.pos, forceU), forceU);
}, "lookahead");
RegExpValidationState.prototype.advance = /* @__PURE__ */ __name(function advance(forceU) {
  if (forceU === void 0)
    forceU = false;
  this.pos = this.nextIndex(this.pos, forceU);
}, "advance");
RegExpValidationState.prototype.eat = /* @__PURE__ */ __name(function eat(ch, forceU) {
  if (forceU === void 0)
    forceU = false;
  if (this.current(forceU) === ch) {
    this.advance(forceU);
    return true;
  }
  return false;
}, "eat");
pp$1.validateRegExpFlags = function(state) {
  var validFlags = state.validFlags;
  var flags = state.flags;
  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this.raise(state.start, "Duplicate regular expression flag");
    }
  }
};
pp$1.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};
pp$1.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;
  this.regexp_disjunction(state);
  if (state.pos !== state.source.length) {
    if (state.eat(41)) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(93) || state.eat(125)) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
    var name = list[i];
    if (state.groupNames.indexOf(name) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};
pp$1.regexp_disjunction = function(state) {
  this.regexp_alternative(state);
  while (state.eat(124)) {
    this.regexp_alternative(state);
  }
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(123)) {
    state.raise("Lone quantifier brackets");
  }
};
pp$1.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
  }
};
pp$1.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true;
  }
  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true;
  }
  return false;
};
pp$1.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;
  if (state.eat(94) || state.eat(36)) {
    return true;
  }
  if (state.eat(92)) {
    if (state.eat(66) || state.eat(98)) {
      return true;
    }
    state.pos = start;
  }
  if (state.eat(40) && state.eat(63)) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(60);
    }
    if (state.eat(61) || state.eat(33)) {
      this.regexp_disjunction(state);
      if (!state.eat(41)) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true;
    }
  }
  state.pos = start;
  return false;
};
pp$1.regexp_eatQuantifier = function(state, noError) {
  if (noError === void 0)
    noError = false;
  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(63);
    return true;
  }
  return false;
};
pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
  return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
};
pp$1.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(123)) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(44) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(125)) {
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true;
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatAtom = function(state) {
  return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
};
pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatAtomEscape(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(40)) {
    if (state.eat(63) && state.eat(58)) {
      this.regexp_disjunction(state);
      if (state.eat(41)) {
        return true;
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatCapturingGroup = function(state) {
  if (state.eat(40)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 63) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(41)) {
      state.numCapturingParens += 1;
      return true;
    }
    state.raise("Unterminated group");
  }
  return false;
};
pp$1.regexp_eatExtendedAtom = function(state) {
  return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
};
pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false;
};
pp$1.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
function isSyntaxCharacter(ch) {
  return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
}
__name(isSyntaxCharacter, "isSyntaxCharacter");
pp$1.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start;
};
pp$1.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_groupSpecifier = function(state) {
  if (state.eat(63)) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return;
    }
    state.raise("Invalid group");
  }
};
pp$1.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) {
      return true;
    }
    state.raise("Invalid capture group name");
  }
  return false;
};
pp$1.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
    }
    return true;
  }
  return false;
};
pp$1.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
}
__name(isRegExpIdentifierStart, "isRegExpIdentifierStart");
pp$1.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
}
__name(isRegExpIdentifierPart, "isRegExpIdentifierPart");
pp$1.regexp_eatAtomEscape = function(state) {
  if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
    return true;
  }
  if (state.switchU) {
    if (state.current() === 99) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false;
};
pp$1.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n = state.lastIntValue;
    if (state.switchU) {
      if (n > state.maxBackReference) {
        state.maxBackReference = n;
      }
      return true;
    }
    if (n <= state.numCapturingParens) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatKGroupName = function(state) {
  if (state.eat(107)) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true;
    }
    state.raise("Invalid named reference");
  }
  return false;
};
pp$1.regexp_eatCharacterEscape = function(state) {
  return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
};
pp$1.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(99)) {
    if (this.regexp_eatControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatZero = function(state) {
  if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 116) {
    state.lastIntValue = 9;
    state.advance();
    return true;
  }
  if (ch === 110) {
    state.lastIntValue = 10;
    state.advance();
    return true;
  }
  if (ch === 118) {
    state.lastIntValue = 11;
    state.advance();
    return true;
  }
  if (ch === 102) {
    state.lastIntValue = 12;
    state.advance();
    return true;
  }
  if (ch === 114) {
    state.lastIntValue = 13;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
function isControlLetter(ch) {
  return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
}
__name(isControlLetter, "isControlLetter");
pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
  if (forceU === void 0)
    forceU = false;
  var start = state.pos;
  var switchU = forceU || state.switchU;
  if (state.eat(117)) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (switchU && lead >= 55296 && lead <= 56319) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 56320 && trail <= 57343) {
            state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
            return true;
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true;
    }
    if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) {
      return true;
    }
    if (switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }
  return false;
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 1114111;
}
__name(isValidUnicode, "isValidUnicode");
pp$1.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true;
    }
    if (state.eat(47)) {
      state.lastIntValue = 47;
      return true;
    }
    return false;
  }
  var ch = state.current();
  if (ch !== 99 && (!state.switchN || ch !== 107)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 49 && ch <= 57) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
      state.advance();
    } while ((ch = state.current()) >= 48 && ch <= 57);
    return true;
  }
  return false;
};
pp$1.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();
  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return true;
  }
  if (state.switchU && this.options.ecmaVersion >= 9 && (ch === 80 || ch === 112)) {
    state.lastIntValue = -1;
    state.advance();
    if (state.eat(123) && this.regexp_eatUnicodePropertyValueExpression(state) && state.eat(125)) {
      return true;
    }
    state.raise("Invalid property name");
  }
  return false;
};
function isCharacterClassEscape(ch) {
  return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
}
__name(isCharacterClassEscape, "isCharacterClassEscape");
pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
      return true;
    }
  }
  state.pos = start;
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
    return true;
  }
  return false;
};
pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
  if (!hasOwn(state.unicodeProperties.nonBinary, name)) {
    state.raise("Invalid property name");
  }
  if (!state.unicodeProperties.nonBinary[name].test(value)) {
    state.raise("Invalid property value");
  }
};
pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (!state.unicodeProperties.binary.test(nameOrValue)) {
    state.raise("Invalid property name");
  }
};
pp$1.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 95;
}
__name(isUnicodePropertyNameCharacter, "isUnicodePropertyNameCharacter");
pp$1.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
}
__name(isUnicodePropertyValueCharacter, "isUnicodePropertyValueCharacter");
pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state);
};
pp$1.regexp_eatCharacterClass = function(state) {
  if (state.eat(91)) {
    state.eat(94);
    this.regexp_classRanges(state);
    if (state.eat(93)) {
      return true;
    }
    state.raise("Unterminated character class");
  }
  return false;
};
pp$1.regexp_classRanges = function(state) {
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(45) && this.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};
pp$1.regexp_eatClassAtom = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatClassEscape(state)) {
      return true;
    }
    if (state.switchU) {
      var ch$1 = state.current();
      if (ch$1 === 99 || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  var ch = state.current();
  if (ch !== 93) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatClassEscape = function(state) {
  var start = state.pos;
  if (state.eat(98)) {
    state.lastIntValue = 8;
    return true;
  }
  if (state.switchU && state.eat(45)) {
    state.lastIntValue = 45;
    return true;
  }
  if (!state.switchU && state.eat(99)) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
};
pp$1.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 95) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(120)) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true;
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
    state.advance();
  }
  return state.pos !== start;
};
function isDecimalDigit(ch) {
  return ch >= 48 && ch <= 57;
}
__name(isDecimalDigit, "isDecimalDigit");
pp$1.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start;
};
function isHexDigit(ch) {
  return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
}
__name(isHexDigit, "isHexDigit");
function hexToInt(ch) {
  if (ch >= 65 && ch <= 70) {
    return 10 + (ch - 65);
  }
  if (ch >= 97 && ch <= 102) {
    return 10 + (ch - 97);
  }
  return ch - 48;
}
__name(hexToInt, "hexToInt");
pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true;
  }
  return false;
};
pp$1.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 48;
    state.advance();
    return true;
  }
  state.lastIntValue = 0;
  return false;
};
function isOctalDigit(ch) {
  return ch >= 48 && ch <= 55;
}
__name(isOctalDigit, "isOctalDigit");
pp$1.regexp_eatFixedHexDigits = function(state, length) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false;
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true;
};
var Token = /* @__PURE__ */ __name(function Token2(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations) {
    this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
  }
  if (p.options.ranges) {
    this.range = [p.start, p.end];
  }
}, "Token");
var pp = Parser2.prototype;
pp.next = function(ignoreEscapeSequenceInKeyword) {
  if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
  }
  if (this.options.onToken) {
    this.options.onToken(new Token(this));
  }
  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};
pp.getToken = function() {
  this.next();
  return new Token(this);
};
if (typeof Symbol !== "undefined") {
  pp[Symbol.iterator] = function() {
    var this$1$1 = this;
    return {
      next: function() {
        var token = this$1$1.getToken();
        return {
          done: token.type === types$1.eof,
          value: token
        };
      }
    };
  };
}
pp.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) {
    this.skipSpace();
  }
  this.start = this.pos;
  if (this.options.locations) {
    this.startLoc = this.curPosition();
  }
  if (this.pos >= this.input.length) {
    return this.finishToken(types$1.eof);
  }
  if (curContext.override) {
    return curContext.override(this);
  } else {
    this.readToken(this.fullCharCodeAtPos());
  }
};
pp.readToken = function(code) {
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
    return this.readWord();
  }
  return this.getTokenFromCode(code);
};
pp.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 55295 || code >= 56320) {
    return code;
  }
  var next = this.input.charCodeAt(this.pos + 1);
  return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
};
pp.skipBlockComment = function() {
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) {
    this.raise(this.pos - 2, "Unterminated comment");
  }
  this.pos = end + 2;
  if (this.options.locations) {
    for (var nextBreak = void 0, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1; ) {
      ++this.curLine;
      pos = this.lineStart = nextBreak;
    }
  }
  if (this.options.onComment) {
    this.options.onComment(
      true,
      this.input.slice(start + 2, end),
      start,
      this.pos,
      startLoc,
      this.curPosition()
    );
  }
};
pp.skipLineComment = function(startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment) {
    this.options.onComment(
      false,
      this.input.slice(start + startSkip, this.pos),
      start,
      this.pos,
      startLoc,
      this.curPosition()
    );
  }
};
pp.skipSpace = function() {
  loop:
    while (this.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.pos);
      switch (ch) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          if (this.input.charCodeAt(this.pos + 1) === 10) {
            ++this.pos;
          }
        case 10:
        case 8232:
        case 8233:
          ++this.pos;
          if (this.options.locations) {
            ++this.curLine;
            this.lineStart = this.pos;
          }
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break loop;
          }
          break;
        default:
          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
            ++this.pos;
          } else {
            break loop;
          }
      }
    }
};
pp.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) {
    this.endLoc = this.curPosition();
  }
  var prevType = this.type;
  this.type = type;
  this.value = val;
  this.updateContext(prevType);
};
pp.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) {
    return this.readNumber(true);
  }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
    this.pos += 3;
    return this.finishToken(types$1.ellipsis);
  } else {
    ++this.pos;
    return this.finishToken(types$1.dot);
  }
};
pp.readToken_slash = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) {
    ++this.pos;
    return this.readRegexp();
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.slash, 1);
};
pp.readToken_mult_modulo_exp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types$1.star : types$1.modulo;
  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
    ++size;
    tokentype = types$1.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, size + 1);
  }
  return this.finishOp(tokentype, size);
};
pp.readToken_pipe_amp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (this.options.ecmaVersion >= 12) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 === 61) {
        return this.finishOp(types$1.assign, 3);
      }
    }
    return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
};
pp.readToken_caret = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.bitwiseXOR, 1);
};
pp.readToken_plus_min = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken();
    }
    return this.finishOp(types$1.incDec, 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.plusMin, 1);
};
pp.readToken_lt_gt = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) {
      return this.finishOp(types$1.assign, size + 1);
    }
    return this.finishOp(types$1.bitShift, size);
  }
  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken();
  }
  if (next === 61) {
    size = 2;
  }
  return this.finishOp(types$1.relational, size);
};
pp.readToken_eq_excl = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
  }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
    this.pos += 2;
    return this.finishToken(types$1.arrow);
  }
  return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1);
};
pp.readToken_question = function() {
  var ecmaVersion = this.options.ecmaVersion;
  if (ecmaVersion >= 11) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 46) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 < 48 || next2 > 57) {
        return this.finishOp(types$1.questionDot, 2);
      }
    }
    if (next === 63) {
      if (ecmaVersion >= 12) {
        var next2$1 = this.input.charCodeAt(this.pos + 2);
        if (next2$1 === 61) {
          return this.finishOp(types$1.assign, 3);
        }
      }
      return this.finishOp(types$1.coalesce, 2);
    }
  }
  return this.finishOp(types$1.question, 1);
};
pp.readToken_numberSign = function() {
  var ecmaVersion = this.options.ecmaVersion;
  var code = 35;
  if (ecmaVersion >= 13) {
    ++this.pos;
    code = this.fullCharCodeAtPos();
    if (isIdentifierStart(code, true) || code === 92) {
      return this.finishToken(types$1.privateId, this.readWord1());
    }
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};
pp.getTokenFromCode = function(code) {
  switch (code) {
    case 46:
      return this.readToken_dot();
    case 40:
      ++this.pos;
      return this.finishToken(types$1.parenL);
    case 41:
      ++this.pos;
      return this.finishToken(types$1.parenR);
    case 59:
      ++this.pos;
      return this.finishToken(types$1.semi);
    case 44:
      ++this.pos;
      return this.finishToken(types$1.comma);
    case 91:
      ++this.pos;
      return this.finishToken(types$1.bracketL);
    case 93:
      ++this.pos;
      return this.finishToken(types$1.bracketR);
    case 123:
      ++this.pos;
      return this.finishToken(types$1.braceL);
    case 125:
      ++this.pos;
      return this.finishToken(types$1.braceR);
    case 58:
      ++this.pos;
      return this.finishToken(types$1.colon);
    case 96:
      if (this.options.ecmaVersion < 6) {
        break;
      }
      ++this.pos;
      return this.finishToken(types$1.backQuote);
    case 48:
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) {
        return this.readRadixNumber(16);
      }
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) {
          return this.readRadixNumber(8);
        }
        if (next === 98 || next === 66) {
          return this.readRadixNumber(2);
        }
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(code);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(code);
    case 124:
    case 38:
      return this.readToken_pipe_amp(code);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(code);
    case 60:
    case 62:
      return this.readToken_lt_gt(code);
    case 61:
    case 33:
      return this.readToken_eq_excl(code);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(types$1.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};
pp.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str);
};
pp.readRegexp = function() {
  var escaped, inClass, start = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(start, "Unterminated regular expression");
    }
    var ch = this.input.charAt(this.pos);
    if (lineBreak.test(ch)) {
      this.raise(start, "Unterminated regular expression");
    }
    if (!escaped) {
      if (ch === "[") {
        inClass = true;
      } else if (ch === "]" && inClass) {
        inClass = false;
      } else if (ch === "/" && !inClass) {
        break;
      }
      escaped = ch === "\\";
    } else {
      escaped = false;
    }
    ++this.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) {
    this.unexpected(flagsStart);
  }
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e) {
  }
  return this.finishToken(types$1.regexp, { pattern, flags, value });
};
pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
  var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
  var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
  var start = this.pos, total = 0, lastCode = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
    var code = this.input.charCodeAt(this.pos), val = void 0;
    if (allowSeparators && code === 95) {
      if (isLegacyOctalNumericLiteral) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
      }
      if (lastCode === 95) {
        this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
      }
      if (i === 0) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
      }
      lastCode = code;
      continue;
    }
    if (code >= 97) {
      val = code - 97 + 10;
    } else if (code >= 65) {
      val = code - 65 + 10;
    } else if (code >= 48 && code <= 57) {
      val = code - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      break;
    }
    lastCode = code;
    total = total * radix + val;
  }
  if (allowSeparators && lastCode === 95) {
    this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
  }
  if (this.pos === start || len != null && this.pos - start !== len) {
    return null;
  }
  return total;
};
function stringToNumber(str, isLegacyOctalNumericLiteral) {
  if (isLegacyOctalNumericLiteral) {
    return parseInt(str, 8);
  }
  return parseFloat(str.replace(/_/g, ""));
}
__name(stringToNumber, "stringToNumber");
function stringToBigInt(str) {
  if (typeof BigInt !== "function") {
    return null;
  }
  return BigInt(str.replace(/_/g, ""));
}
__name(stringToBigInt, "stringToBigInt");
pp.readRadixNumber = function(radix) {
  var start = this.pos;
  this.pos += 2;
  var val = this.readInt(radix);
  if (val == null) {
    this.raise(this.start + 2, "Expected number in radix " + radix);
  }
  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
    val = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
  } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  return this.finishToken(types$1.num, val);
};
pp.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10, void 0, true) === null) {
    this.raise(start, "Invalid number");
  }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) {
    this.raise(start, "Invalid number");
  }
  var next = this.input.charCodeAt(this.pos);
  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
    var val$1 = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
    if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    return this.finishToken(types$1.num, val$1);
  }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
    octal = false;
  }
  if (next === 46 && !octal) {
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) {
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) {
      ++this.pos;
    }
    if (this.readInt(10) === null) {
      this.raise(start, "Invalid number");
    }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  var val = stringToNumber(this.input.slice(start, this.pos), octal);
  return this.finishToken(types$1.num, val);
};
pp.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code;
  if (ch === 123) {
    if (this.options.ecmaVersion < 6) {
      this.unexpected();
    }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 1114111) {
      this.invalidStringToken(codePos, "Code point out of bounds");
    }
  } else {
    code = this.readHexChar(4);
  }
  return code;
};
pp.readString = function(quote) {
  var out = "", chunkStart = ++this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated string constant");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === quote) {
      break;
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(false);
      chunkStart = this.pos;
    } else if (ch === 8232 || ch === 8233) {
      if (this.options.ecmaVersion < 10) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
      if (this.options.locations) {
        this.curLine++;
        this.lineStart = this.pos;
      }
    } else {
      if (isNewLine(ch)) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types$1.string, out);
};
var INVALID_TEMPLATE_ESCAPE_ERROR = {};
pp.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err;
    }
  }
  this.inTemplateElement = false;
};
pp.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR;
  } else {
    this.raise(position, message);
  }
};
pp.readTmplToken = function() {
  var out = "", chunkStart = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated template");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
      if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
        if (ch === 36) {
          this.pos += 2;
          return this.finishToken(types$1.dollarBraceL);
        } else {
          ++this.pos;
          return this.finishToken(types$1.backQuote);
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(types$1.template, out);
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(true);
      chunkStart = this.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      switch (ch) {
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) {
            ++this.pos;
          }
        case 10:
          out += "\n";
          break;
        default:
          out += String.fromCharCode(ch);
          break;
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};
pp.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") {
          break;
        }
      case "`":
        return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  }
  this.raise(this.start, "Unterminated template");
};
pp.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
    case 110:
      return "\n";
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return codePointToString(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      if (this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
      }
    case 10:
      if (this.options.locations) {
        this.lineStart = this.pos;
        ++this.curLine;
      }
      return "";
    case 56:
    case 57:
      if (this.strict) {
        this.invalidStringToken(
          this.pos - 1,
          "Invalid escape sequence"
        );
      }
      if (inTemplate) {
        var codePos = this.pos - 1;
        this.invalidStringToken(
          codePos,
          "Invalid escape sequence in template string"
        );
        return null;
      }
    default:
      if (ch >= 48 && ch <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(
            this.pos - 1 - octalStr.length,
            inTemplate ? "Octal literal in template string" : "Octal literal in strict mode"
          );
        }
        return String.fromCharCode(octal);
      }
      if (isNewLine(ch)) {
        return "";
      }
      return String.fromCharCode(ch);
  }
};
pp.readHexChar = function(len) {
  var codePos = this.pos;
  var n = this.readInt(16, len);
  if (n === null) {
    this.invalidStringToken(codePos, "Bad character escape sequence");
  }
  return n;
};
pp.readWord1 = function() {
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this.pos += ch <= 65535 ? 1 : 2;
    } else if (ch === 92) {
      this.containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) !== 117) {
        this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
      }
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
        this.invalidStringToken(escStart, "Invalid Unicode escape");
      }
      word += codePointToString(esc);
      chunkStart = this.pos;
    } else {
      break;
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos);
};
pp.readWord = function() {
  var word = this.readWord1();
  var type = types$1.name;
  if (this.keywords.test(word)) {
    type = keywords[word];
  }
  return this.finishToken(type, word);
};
var version = "8.8.1";
Parser2.acorn = {
  Parser: Parser2,
  version,
  defaultOptions,
  Position,
  SourceLocation,
  getLineInfo,
  Node,
  TokenType,
  tokTypes: types$1,
  keywordTypes: keywords,
  TokContext,
  tokContexts: types,
  isIdentifierChar,
  isIdentifierStart,
  Token,
  isNewLine,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace
};
function parse3(input, options) {
  return Parser2.parse(input, options);
}
__name(parse3, "parse");

// node_modules/jintr/dist/main.js
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet5 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Jinter_ast;
var Jinter = class {
  constructor() {
    _Jinter_ast.set(this, []);
    this.visitor = new Visitor();
    this.scope = this.visitor.scope;
    this.scope.set("print", (args) => console.log(...args));
    this.defineObject("console", console);
    this.defineObject("Math", Math);
    this.defineObject("String", String);
    this.defineObject("Array", Array);
    this.defineObject("Date", Date);
  }
  defineObject(name, obj) {
    this.visitor.on(name, (node, visitor) => {
      if (node.type === "Identifier")
        return obj;
      if (node.type === "CallExpression" && node.callee.type === "MemberExpression") {
        const prop = visitor.visitNode(node.callee.property);
        const args = node.arguments.map((arg) => visitor.visitNode(arg));
        const callable = obj[prop];
        if (!callable)
          return "__continue_exec";
        return callable.apply(obj, args);
      }
      return "__continue_exec";
    });
  }
  evaluate(input) {
    try {
      const program = parse3(input, { ecmaVersion: 2020 });
      __classPrivateFieldSet2(this, _Jinter_ast, program.body, "f");
    } catch (e) {
      throw new JinterError(e.message);
    }
    this.visitor.setAST(__classPrivateFieldGet5(this, _Jinter_ast, "f"));
    return this.visitor.run();
  }
  static parseScript(input) {
    try {
      return parse3(input, { ecmaVersion: 2020 });
    } catch (e) {
      throw new JinterError(e.message);
    }
  }
};
__name(Jinter, "Jinter");
_Jinter_ast = /* @__PURE__ */ new WeakMap();

// dist/src/utils/Utils.js
var _a5;
var _Platform_shim;
var Platform = class {
  static load(platform) {
    __classPrivateFieldSet(Platform, _a5, platform, "f", _Platform_shim);
  }
  static get shim() {
    if (!__classPrivateFieldGet(Platform, _a5, "f", _Platform_shim)) {
      throw new Error("Platform is not loaded");
    }
    return __classPrivateFieldGet(Platform, _a5, "f", _Platform_shim);
  }
};
__name(Platform, "Platform");
_a5 = Platform;
_Platform_shim = { value: void 0 };
var InnertubeError = class extends Error {
  constructor(message, info) {
    super(message);
    if (info) {
      this.info = info;
    }
    this.date = new Date();
    this.version = Platform.shim.info.version;
  }
};
__name(InnertubeError, "InnertubeError");
var ParsingError = class extends InnertubeError {
};
__name(ParsingError, "ParsingError");
var MissingParamError = class extends InnertubeError {
};
__name(MissingParamError, "MissingParamError");
var OAuthError = class extends InnertubeError {
};
__name(OAuthError, "OAuthError");
var PlayerError = class extends Error {
};
__name(PlayerError, "PlayerError");
var SessionError = class extends Error {
};
__name(SessionError, "SessionError");
var ChannelError = class extends Error {
};
__name(ChannelError, "ChannelError");
function deepCompare(obj1, obj2) {
  const keys = Reflect.ownKeys(obj1);
  return keys.some((key) => {
    const is_text = obj2[key] instanceof Text;
    if (!is_text && typeof obj2[key] === "object") {
      return JSON.stringify(obj1[key]) === JSON.stringify(obj2[key]);
    }
    return obj1[key] === (is_text ? obj2[key].toString() : obj2[key]);
  });
}
__name(deepCompare, "deepCompare");
function getStringBetweenStrings(data2, start_string, end_string) {
  const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, "s");
  const match = data2.match(regex);
  return match ? match[1] : void 0;
}
__name(getStringBetweenStrings, "getStringBetweenStrings");
function escapeStringRegexp(input) {
  return input.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
__name(escapeStringRegexp, "escapeStringRegexp");
function getRandomUserAgent(type) {
  const available_agents = user_agents_default[type];
  const random_index = Math.floor(Math.random() * available_agents.length);
  return available_agents[random_index];
}
__name(getRandomUserAgent, "getRandomUserAgent");
function generateSidAuth(sid) {
  return __awaiter(this, void 0, void 0, function* () {
    const youtube = "https://www.youtube.com";
    const timestamp = Math.floor(new Date().getTime() / 1e3);
    const input = [timestamp, sid, youtube].join(" ");
    const gen_hash = yield Platform.shim.sha1Hash(input);
    return ["SAPISIDHASH", [timestamp, gen_hash].join("_")].join(" ");
  });
}
__name(generateSidAuth, "generateSidAuth");
function generateRandomString(length) {
  const result = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  for (let i = 0; i < length; i++) {
    result.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
  }
  return result.join("");
}
__name(generateRandomString, "generateRandomString");
function timeToSeconds(time) {
  const params = time.split(":").map((param) => parseInt(param.replace(/\D/g, "")));
  switch (params.length) {
    case 1:
      return params[0];
    case 2:
      return params[0] * 60 + params[1];
    case 3:
      return params[0] * 3600 + params[1] * 60 + params[2];
    default:
      throw new Error("Invalid time string");
  }
}
__name(timeToSeconds, "timeToSeconds");
function concatMemos(...iterables) {
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
__name(concatMemos, "concatMemos");
function throwIfMissing(params) {
  for (const [key, value] of Object.entries(params)) {
    if (!value)
      throw new MissingParamError(`${key} is missing`);
  }
}
__name(throwIfMissing, "throwIfMissing");
function hasKeys(params, ...keys) {
  for (const key of keys) {
    if (!Reflect.has(params, key) || params[key] === void 0)
      return false;
  }
  return true;
}
__name(hasKeys, "hasKeys");
function streamToIterable(stream) {
  return __asyncGenerator(this, arguments, /* @__PURE__ */ __name(function* streamToIterable_1() {
    const reader = stream.getReader();
    try {
      while (true) {
        const { done, value } = yield __await(reader.read());
        if (done) {
          return yield __await(void 0);
        }
        yield yield __await(value);
      }
    } finally {
      reader.releaseLock();
    }
  }, "streamToIterable_1"));
}
__name(streamToIterable, "streamToIterable");
var debugFetch = /* @__PURE__ */ __name((input, init) => {
  const url = typeof input === "string" ? new URL(input) : input instanceof URL ? input : new URL(input.url);
  const headers = (init === null || init === void 0 ? void 0 : init.headers) ? new Headers(init.headers) : input instanceof Request ? input.headers : new Headers();
  const arr_headers = [...headers];
  const body_contents = (init === null || init === void 0 ? void 0 : init.body) ? typeof init.body === "string" ? headers.get("content-type") === "application/json" ? JSON.stringify(JSON.parse(init.body), null, 2) : init.body : "    <binary>" : "    (none)";
  const headers_serialized = arr_headers.length > 0 ? `${arr_headers.map(([key, value]) => `    ${key}: ${value}`).join("\n")}` : "    (none)";
  console.log(`YouTube.js Fetch:
  url: ${url.toString()}
  method: ${(init === null || init === void 0 ? void 0 : init.method) || "GET"}
  headers:
${headers_serialized}
' + 
    '  body:
${body_contents}`);
  return Platform.shim.fetch(input, init);
}, "debugFetch");
function u8ToBase64(u8) {
  return btoa(String.fromCharCode.apply(null, Array.from(u8)));
}
__name(u8ToBase64, "u8ToBase64");
function base64ToU8(base64) {
  return new Uint8Array(atob(base64).split("").map((char) => char.charCodeAt(0)));
}
__name(base64ToU8, "base64ToU8");
function isTextRun(run) {
  return !("emoji" in run);
}
__name(isTextRun, "isTextRun");
function findFunction(source, args) {
  const { name, includes, regexp } = args;
  const node = Jinter.parseScript(source);
  const stack = [node];
  for (let i = 0; i < stack.length; i++) {
    const current2 = stack[i];
    if (current2.type === "ExpressionStatement" && (current2.expression.type === "AssignmentExpression" && current2.expression.left.type === "Identifier" && current2.expression.right.type === "FunctionExpression")) {
      const code = source.substring(current2.start, current2.end);
      if (name && current2.expression.left.name === name || includes && code.indexOf(includes) > -1 || regexp && regexp.test(code)) {
        return {
          start: current2.start,
          end: current2.end,
          name: current2.expression.left.name,
          node: current2,
          result: code
        };
      }
    }
    for (const key in current2) {
      const child = current2[key];
      if (Array.isArray(child)) {
        stack.push(...child);
      } else if (typeof child === "object" && child !== null) {
        stack.push(child);
      }
    }
  }
}
__name(findFunction, "findFunction");

// dist/src/platform/polyfills/web-crypto.js
function sha1Hash(str) {
  return __awaiter(this, void 0, void 0, function* () {
    const byteToHex = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "0a",
      "0b",
      "0c",
      "0d",
      "0e",
      "0f",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "1a",
      "1b",
      "1c",
      "1d",
      "1e",
      "1f",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "2a",
      "2b",
      "2c",
      "2d",
      "2e",
      "2f",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "3a",
      "3b",
      "3c",
      "3d",
      "3e",
      "3f",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "4a",
      "4b",
      "4c",
      "4d",
      "4e",
      "4f",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "5a",
      "5b",
      "5c",
      "5d",
      "5e",
      "5f",
      "60",
      "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "68",
      "69",
      "6a",
      "6b",
      "6c",
      "6d",
      "6e",
      "6f",
      "70",
      "71",
      "72",
      "73",
      "74",
      "75",
      "76",
      "77",
      "78",
      "79",
      "7a",
      "7b",
      "7c",
      "7d",
      "7e",
      "7f",
      "80",
      "81",
      "82",
      "83",
      "84",
      "85",
      "86",
      "87",
      "88",
      "89",
      "8a",
      "8b",
      "8c",
      "8d",
      "8e",
      "8f",
      "90",
      "91",
      "92",
      "93",
      "94",
      "95",
      "96",
      "97",
      "98",
      "99",
      "9a",
      "9b",
      "9c",
      "9d",
      "9e",
      "9f",
      "a0",
      "a1",
      "a2",
      "a3",
      "a4",
      "a5",
      "a6",
      "a7",
      "a8",
      "a9",
      "aa",
      "ab",
      "ac",
      "ad",
      "ae",
      "af",
      "b0",
      "b1",
      "b2",
      "b3",
      "b4",
      "b5",
      "b6",
      "b7",
      "b8",
      "b9",
      "ba",
      "bb",
      "bc",
      "bd",
      "be",
      "bf",
      "c0",
      "c1",
      "c2",
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "c9",
      "ca",
      "cb",
      "cc",
      "cd",
      "ce",
      "cf",
      "d0",
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "d6",
      "d7",
      "d8",
      "d9",
      "da",
      "db",
      "dc",
      "dd",
      "de",
      "df",
      "e0",
      "e1",
      "e2",
      "e3",
      "e4",
      "e5",
      "e6",
      "e7",
      "e8",
      "e9",
      "ea",
      "eb",
      "ec",
      "ed",
      "ee",
      "ef",
      "f0",
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "f9",
      "fa",
      "fb",
      "fc",
      "fd",
      "fe",
      "ff"
    ];
    function hex(arrayBuffer) {
      const buff = new Uint8Array(arrayBuffer);
      const hexOctets = [];
      for (let i = 0; i < buff.length; ++i)
        hexOctets.push(byteToHex[buff[i]]);
      return hexOctets.join("");
    }
    __name(hex, "hex");
    return hex(yield crypto.subtle.digest("SHA-1", new TextEncoder().encode(str)));
  });
}
__name(sha1Hash, "sha1Hash");

// dist/package.json
var package_default = {
  name: "volumio-youtubei.js",
  version: "0.3.9",
  description: "Modified version of YouTube.js library for use with Volumio's YouTube Music plugin.",
  type: "module",
  types: "./dist/src/platform/lib.d.ts",
  typesVersions: {
    "*": {
      agnostic: [
        "./dist/src/platform/lib.d.ts"
      ],
      web: [
        "./dist/src/platform/lib.d.ts"
      ],
      "web.bundle": [
        "./dist/src/platform/lib.d.ts"
      ],
      "web.bundle.min": [
        "./dist/src/platform/lib.d.ts"
      ]
    }
  },
  exports: {
    ".": {
      node: {
        import: "./dist/src/platform/node.js",
        require: "./bundle/node.cjs"
      },
      deno: "./dist/src/platform/deno.js",
      types: "./dist/src/platform/lib.d.ts",
      browser: "./dist/src/platform/web.js",
      default: "./dist/src/platform/web.js"
    },
    "./agnostic": {
      types: "./dist/src/platform/lib.d.ts",
      default: "./dist/src/platform/lib.js"
    },
    "./web": {
      types: "./dist/src/platform/lib.d.ts",
      default: "./dist/src/platform/web.js"
    },
    "./web.bundle": {
      types: "./dist/src/platform/lib.d.ts",
      default: "./bundle/browser.js"
    },
    "./web.bundle.min": {
      types: "./dist/src/platform/lib.d.ts",
      default: "./bundle/browser.min.js"
    }
  },
  author: "Original author: LuanRT <luan.lrt4@gmail.com> (https://github.com/LuanRT). Modified by Patrick Kan (https://github.com/patrickkfkan).",
  funding: [
    "https://github.com/sponsors/LuanRT"
  ],
  contributors: [
    "Wykerd (https://github.com/wykerd/)",
    "MasterOfBob777 (https://github.com/MasterOfBob777)",
    "patrickkfkan (https://github.com/patrickkfkan)",
    "akkadaska (https://github.com/akkadaska)"
  ],
  directories: {
    test: "./test",
    examples: "./examples",
    dist: "./dist"
  },
  scripts: {
    test: "npx jest --verbose",
    lint: "npx eslint ./src",
    "lint:fix": "npx eslint --fix ./src",
    build: "npm run build:parser-map && npm run build:proto && npm run build:esm && npm run bundle:node && npm run bundle:browser && npm run bundle:browser:prod",
    "build:parser-map": "node ./scripts/build-parser-map.cjs",
    "build:proto": 'npx pb-gen-ts --entry-path="src/proto" --out-dir="src/proto/generated" --ext-in-import=".js"',
    "build:esm": "npx tsc",
    "build:deno": `npx cpy ./src ./deno && npx cpy ./package.json ./deno && npx replace ".js';" ".ts';" ./deno -r && npx replace '.js";' '.ts";' ./deno -r && npx replace "'linkedom';" "'https://esm.sh/linkedom';" ./deno -r && npx replace "'jintr';" "'https://esm.sh/jintr';" ./deno -r && npx replace "new Jinter.default" "new Jinter" ./deno -r`,
    "bundle:node": 'npx esbuild ./dist/src/platform/node.js --bundle --target=node10 --keep-names --format=cjs --platform=node --outfile=./bundle/node.cjs --external:jintr --external:undici --external:linkedom --sourcemap --banner:js="/* eslint-disable */"',
    "bundle:browser": 'npx esbuild ./dist/src/platform/web.js --banner:js="/* eslint-disable */" --bundle --target=chrome58 --keep-names --format=esm --sourcemap --define:global=globalThis --conditions=module --outfile=./bundle/browser.js --platform=browser',
    "bundle:browser:prod": "npm run bundle:browser -- --outfile=./bundle/browser.min.js --minify",
    watch: "npx tsc --watch"
  },
  repository: {
    type: "git",
    url: "git+https://github.com/patrickkfkan/Volumio-YouTube.js.git"
  },
  license: "MIT",
  dependencies: {
    "event-target-polyfill": "0.0.3",
    jintr: "^2.1.1",
    linkedom: "^0.14.12",
    "node-fetch": "^2.6.7",
    tslib: "^2.5.0",
    uuid: "^9.0.0",
    "web-streams-polyfill": "^3.2.1"
  },
  devDependencies: {
    "@types/jest": "^28.1.7",
    "@types/node": "^17.0.45",
    "@types/node-fetch": "^2.6.11",
    "@types/uuid": "^10.0.0",
    "@typescript-eslint/eslint-plugin": "^5.30.6",
    "@typescript-eslint/parser": "^5.30.6",
    "cpy-cli": "^4.2.0",
    esbuild: "^0.14.49",
    eslint: "^8.19.0",
    "eslint-plugin-tsdoc": "^0.2.16",
    glob: "^8.0.3",
    jest: "^28.1.3",
    pbkit: "^0.0.59",
    replace: "^1.2.2",
    "ts-jest": "^28.0.8",
    typescript: "^5.0.0"
  },
  bugs: {
    url: "https://github.com/patrickkfkan/Volumio-YouTube.js/issues"
  },
  homepage: "https://github.com/patrickkfkan/Volumio-YouTube.js#readme",
  keywords: [
    "yt",
    "dl",
    "ytdl",
    "youtube",
    "youtubedl",
    "youtube-dl",
    "youtube-downloader",
    "youtube-music",
    "youtube-studio",
    "innertube",
    "unofficial",
    "downloader",
    "livechat",
    "studio",
    "upload",
    "ytmusic",
    "search",
    "music",
    "api"
  ]
};

// dist/src/core/Actions.js
var _Actions_instances;
var _Actions_session;
var _Actions_wrap;
var _Actions_isBrowse;
var _Actions_needsLogin;
var Actions = class {
  constructor(session) {
    _Actions_instances.add(this);
    _Actions_session.set(this, void 0);
    __classPrivateFieldSet(this, _Actions_session, session, "f");
  }
  get session() {
    return __classPrivateFieldGet(this, _Actions_session, "f");
  }
  stats(url, client, params) {
    return __awaiter(this, void 0, void 0, function* () {
      const s_url = new URL(url);
      s_url.searchParams.set("ver", "2");
      s_url.searchParams.set("c", client.client_name.toLowerCase());
      s_url.searchParams.set("cbrver", client.client_version);
      s_url.searchParams.set("cver", client.client_version);
      for (const key of Object.keys(params)) {
        s_url.searchParams.set(key, params[key]);
      }
      const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(s_url);
      return response;
    });
  }
  execute(endpoint, args) {
    var _a7, _b;
    return __awaiter(this, void 0, void 0, function* () {
      let data2;
      if (args && !args.protobuf) {
        data2 = Object.assign({}, args);
        if (Reflect.has(data2, "browseId")) {
          if (__classPrivateFieldGet(this, _Actions_instances, "m", _Actions_needsLogin).call(this, data2.browseId) && !__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
            throw new InnertubeError("You must be signed in to perform this operation.");
        }
        if (Reflect.has(data2, "override_endpoint"))
          delete data2.override_endpoint;
        if (Reflect.has(data2, "parse"))
          delete data2.parse;
        if (Reflect.has(data2, "request"))
          delete data2.request;
        if (Reflect.has(data2, "clientActions"))
          delete data2.clientActions;
        if (Reflect.has(data2, "settingItemIdForClient"))
          delete data2.settingItemIdForClient;
        if (Reflect.has(data2, "action")) {
          data2.actions = [data2.action];
          delete data2.action;
        }
        if (Reflect.has(data2, "boolValue")) {
          data2.newValue = { boolValue: data2.boolValue };
          delete data2.boolValue;
        }
        if (Reflect.has(data2, "token")) {
          data2.continuation = data2.token;
          delete data2.token;
        }
        if ((data2 === null || data2 === void 0 ? void 0 : data2.client) === "YTMUSIC") {
          data2.isAudioOnly = true;
        }
      } else if (args) {
        data2 = args.serialized_data;
      }
      const target_endpoint = Reflect.has(args || {}, "override_endpoint") ? args === null || args === void 0 ? void 0 : args.override_endpoint : endpoint;
      const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(target_endpoint, {
        method: "POST",
        body: (args === null || args === void 0 ? void 0 : args.protobuf) ? data2 : JSON.stringify(data2 || {}),
        headers: {
          "Content-Type": (args === null || args === void 0 ? void 0 : args.protobuf) ? "application/x-protobuf" : "application/json"
        }
      });
      if (args === null || args === void 0 ? void 0 : args.parse) {
        let parsed_response = parser_default.parseResponse(yield response.json());
        if (__classPrivateFieldGet(this, _Actions_instances, "m", _Actions_isBrowse).call(this, parsed_response) && ((_b = (_a7 = parsed_response.on_response_received_actions) === null || _a7 === void 0 ? void 0 : _a7.first()) === null || _b === void 0 ? void 0 : _b.type) === "navigateAction") {
          const navigate_action = parsed_response.on_response_received_actions.firstOfType(NavigateAction);
          if (navigate_action) {
            parsed_response = yield navigate_action.endpoint.call(this, { parse: true });
          }
        }
        return parsed_response;
      }
      return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
    });
  }
};
__name(Actions, "Actions");
_Actions_session = /* @__PURE__ */ new WeakMap(), _Actions_instances = /* @__PURE__ */ new WeakSet(), _Actions_wrap = /* @__PURE__ */ __name(function _Actions_wrap2(response) {
  return __awaiter(this, void 0, void 0, function* () {
    return {
      success: response.ok,
      status_code: response.status,
      data: JSON.parse(yield response.text())
    };
  });
}, "_Actions_wrap"), _Actions_isBrowse = /* @__PURE__ */ __name(function _Actions_isBrowse2(response) {
  return "on_response_received_actions" in response;
}, "_Actions_isBrowse"), _Actions_needsLogin = /* @__PURE__ */ __name(function _Actions_needsLogin2(id) {
  return [
    "FElibrary",
    "FEhistory",
    "FEsubscriptions",
    "FEmusic_listening_review",
    "FEmusic_library_landing",
    "SPaccount_overview",
    "SPaccount_notifications",
    "SPaccount_privacy",
    "SPtime_watched"
  ].includes(id);
}, "_Actions_needsLogin");
var Actions_default = Actions;

// dist/src/core/Player.js
var TAG2 = "Player";
var Player = class {
  constructor(player_id, signature_timestamp, sig_sc, nsig_sc) {
    this.player_id = player_id;
    this.sts = signature_timestamp;
    this.nsig_sc = nsig_sc;
    this.sig_sc = sig_sc;
  }
  static create(cache, fetch = Platform.shim.fetch) {
    return __awaiter(this, void 0, void 0, function* () {
      const url = new URL("/iframe_api", Constants_exports.URLS.YT_BASE);
      const res = yield fetch(url);
      if (res.status !== 200)
        throw new PlayerError("Failed to request player id");
      const js = yield res.text();
      const player_id = getStringBetweenStrings(js, "player\\/", "\\/");
      Log_default.info(TAG2, `Got player id (${player_id}). Checking for cached players..`);
      if (!player_id)
        throw new PlayerError("Failed to get player id");
      if (cache) {
        const cached_player = yield Player.fromCache(cache, player_id);
        if (cached_player) {
          Log_default.info(TAG2, "Found up-to-date player data in cache.");
          return cached_player;
        }
      }
      const player_url = new URL(`/s/player/${player_id}/player_ias.vflset/en_US/base.js`, Constants_exports.URLS.YT_BASE);
      Log_default.info(TAG2, `Could not find any cached player. Will download a new player from ${player_url}.`);
      const player_res = yield fetch(player_url, {
        headers: {
          "user-agent": getRandomUserAgent("desktop")
        }
      });
      if (!player_res.ok) {
        throw new PlayerError(`Failed to get player data: ${player_res.status}`);
      }
      const player_js = yield player_res.text();
      const sig_timestamp = this.extractSigTimestamp(player_js);
      const sig_sc = this.extractSigSourceCode(player_js);
      const nsig_sc = this.extractNSigSourceCode(player_js);
      Log_default.info(TAG2, `Got signature timestamp (${sig_timestamp}) and algorithms needed to decipher signatures.`);
      return yield Player.fromSource(player_id, sig_timestamp, cache, sig_sc, nsig_sc);
    });
  }
  decipher(url, signature_cipher, cipher, this_response_nsig_cache) {
    url = url || signature_cipher || cipher;
    if (!url)
      throw new PlayerError("No valid URL to decipher");
    const args = new URLSearchParams(url);
    const url_components = new URL(args.get("url") || url);
    if (this.sig_sc && (signature_cipher || cipher)) {
      const signature = Platform.shim.eval(this.sig_sc, {
        sig: args.get("s")
      });
      Log_default.info(TAG2, `Transformed signature from ${args.get("s")} to ${signature}.`);
      if (typeof signature !== "string")
        throw new PlayerError("Failed to decipher signature");
      const sp = args.get("sp");
      sp ? url_components.searchParams.set(sp, signature) : url_components.searchParams.set("signature", signature);
    }
    const n = url_components.searchParams.get("n");
    if (this.nsig_sc && n) {
      let nsig;
      if (this_response_nsig_cache && this_response_nsig_cache.has(n)) {
        nsig = this_response_nsig_cache.get(n);
      } else {
        nsig = Platform.shim.eval(this.nsig_sc, {
          nsig: n
        });
        Log_default.info(TAG2, `Transformed n signature from ${n} to ${nsig}.`);
        if (typeof nsig !== "string")
          throw new PlayerError("Failed to decipher nsig");
        if (nsig.startsWith("enhanced_except_")) {
          Log_default.warn(TAG2, "Could not transform nsig, download may be throttled.");
        } else if (this_response_nsig_cache) {
          this_response_nsig_cache.set(n, nsig);
        }
      }
      url_components.searchParams.set("n", nsig);
    }
    const client = url_components.searchParams.get("c");
    switch (client) {
      case "WEB":
        url_components.searchParams.set("cver", Constants_exports.CLIENTS.WEB.VERSION);
        break;
      case "WEB_REMIX":
        url_components.searchParams.set("cver", Constants_exports.CLIENTS.YTMUSIC.VERSION);
        break;
      case "WEB_KIDS":
        url_components.searchParams.set("cver", Constants_exports.CLIENTS.WEB_KIDS.VERSION);
        break;
      case "ANDROID":
        url_components.searchParams.set("cver", Constants_exports.CLIENTS.ANDROID.VERSION);
        break;
      case "ANDROID_MUSIC":
        url_components.searchParams.set("cver", Constants_exports.CLIENTS.YTMUSIC_ANDROID.VERSION);
        break;
      case "TVHTML5_SIMPLY_EMBEDDED_PLAYER":
        url_components.searchParams.set("cver", Constants_exports.CLIENTS.TV_EMBEDDED.VERSION);
        break;
    }
    const result = url_components.toString();
    Log_default.info(TAG2, `Deciphered URL: ${result}`);
    return url_components.toString();
  }
  static fromCache(cache, player_id) {
    return __awaiter(this, void 0, void 0, function* () {
      const buffer = yield cache.get(player_id);
      if (!buffer)
        return null;
      const view = new DataView(buffer);
      const version2 = view.getUint32(0, true);
      if (version2 !== Player.LIBRARY_VERSION)
        return null;
      const sig_timestamp = view.getUint32(4, true);
      const sig_len = view.getUint32(8, true);
      const sig_buf = buffer.slice(12, 12 + sig_len);
      const nsig_buf = buffer.slice(12 + sig_len);
      const sig_sc = LZW_exports.decompress(new TextDecoder().decode(sig_buf));
      const nsig_sc = LZW_exports.decompress(new TextDecoder().decode(nsig_buf));
      return new Player(player_id, sig_timestamp, sig_sc, nsig_sc);
    });
  }
  static fromSource(player_id, sig_timestamp, cache, sig_sc, nsig_sc) {
    return __awaiter(this, void 0, void 0, function* () {
      const player = new Player(player_id, sig_timestamp, sig_sc, nsig_sc);
      yield player.cache(cache);
      return player;
    });
  }
  cache(cache) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!cache || !this.sig_sc || !this.nsig_sc)
        return;
      const encoder = new TextEncoder();
      const sig_buf = encoder.encode(LZW_exports.compress(this.sig_sc));
      const nsig_buf = encoder.encode(LZW_exports.compress(this.nsig_sc));
      const buffer = new ArrayBuffer(12 + sig_buf.byteLength + nsig_buf.byteLength);
      const view = new DataView(buffer);
      view.setUint32(0, Player.LIBRARY_VERSION, true);
      view.setUint32(4, this.sts, true);
      view.setUint32(8, sig_buf.byteLength, true);
      new Uint8Array(buffer).set(sig_buf, 12);
      new Uint8Array(buffer).set(nsig_buf, 12 + sig_buf.byteLength);
      yield cache.set(this.player_id, new Uint8Array(buffer));
    });
  }
  static extractSigTimestamp(data2) {
    return parseInt(getStringBetweenStrings(data2, "signatureTimestamp:", ",") || "0");
  }
  static extractSigSourceCode(data2) {
    var _a7, _b, _c;
    const calls = getStringBetweenStrings(data2, 'function(a){a=a.split("")', 'return a.join("")}');
    const obj_name = (_c = (_b = (_a7 = calls === null || calls === void 0 ? void 0 : calls.split(/\.|\[/)) === null || _a7 === void 0 ? void 0 : _a7[0]) === null || _b === void 0 ? void 0 : _b.replace(";", "")) === null || _c === void 0 ? void 0 : _c.trim();
    const functions = getStringBetweenStrings(data2, `var ${obj_name}={`, "};");
    if (!functions || !calls)
      Log_default.warn(TAG2, "Failed to extract signature decipher algorithm.");
    return `function descramble_sig(a) { a = a.split(""); let ${obj_name}={${functions}}${calls} return a.join("") } descramble_sig(sig);`;
  }
  static extractNSigSourceCode(data2) {
    const nsig_function = findFunction(data2, { includes: "enhanced_except" });
    if (nsig_function) {
      return `${nsig_function.result} ${nsig_function.name}(nsig);`;
    }
  }
  get url() {
    return new URL(`/s/player/${this.player_id}/player_ias.vflset/en_US/base.js`, Constants_exports.URLS.YT_BASE).toString();
  }
  static get LIBRARY_VERSION() {
    return 11;
  }
};
__name(Player, "Player");

// dist/src/core/OAuth.js
var _OAuth_instances;
var _OAuth_identity;
var _OAuth_session;
var _OAuth_credentials;
var _OAuth_polling_interval;
var _OAuth_loadCachedCredentials;
var _OAuth_getUserCode;
var _OAuth_startPolling;
var _OAuth_refreshAccessToken;
var _OAuth_getClientIdentity;
var OAuth = class {
  constructor(session) {
    _OAuth_instances.add(this);
    _OAuth_identity.set(this, void 0);
    _OAuth_session.set(this, void 0);
    _OAuth_credentials.set(this, void 0);
    _OAuth_polling_interval.set(this, 5);
    __classPrivateFieldSet(this, _OAuth_session, session, "f");
  }
  init(credentials) {
    return __awaiter(this, void 0, void 0, function* () {
      __classPrivateFieldSet(this, _OAuth_credentials, credentials, "f");
      if (this.validateCredentials()) {
        if (!this.has_access_token_expired)
          __classPrivateFieldGet(this, _OAuth_session, "f").emit("auth", {
            credentials: __classPrivateFieldGet(this, _OAuth_credentials, "f"),
            status: "SUCCESS"
          });
      } else if (!(yield __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_loadCachedCredentials).call(this))) {
        yield __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_getUserCode).call(this);
      }
    });
  }
  cacheCredentials() {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      const encoder = new TextEncoder();
      const data2 = encoder.encode(JSON.stringify(__classPrivateFieldGet(this, _OAuth_credentials, "f")));
      yield (_a7 = __classPrivateFieldGet(this, _OAuth_session, "f").cache) === null || _a7 === void 0 ? void 0 : _a7.set("youtubei_oauth_credentials", data2.buffer);
    });
  }
  removeCache() {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      yield (_a7 = __classPrivateFieldGet(this, _OAuth_session, "f").cache) === null || _a7 === void 0 ? void 0 : _a7.remove("youtubei_oauth_credentials");
    });
  }
  refreshIfRequired() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.has_access_token_expired) {
        yield __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_refreshAccessToken).call(this);
      }
    });
  }
  revokeCredentials() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _OAuth_credentials, "f"))
        return;
      yield this.removeCache();
      return __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch_function(new URL(`/o/oauth2/revoke?token=${encodeURIComponent(__classPrivateFieldGet(this, _OAuth_credentials, "f").access_token)}`, URLS.YT_BASE), {
        method: "post"
      });
    });
  }
  get credentials() {
    return __classPrivateFieldGet(this, _OAuth_credentials, "f");
  }
  get has_access_token_expired() {
    const timestamp = __classPrivateFieldGet(this, _OAuth_credentials, "f") ? new Date(__classPrivateFieldGet(this, _OAuth_credentials, "f").expires).getTime() : -Infinity;
    return new Date().getTime() > timestamp;
  }
  validateCredentials() {
    return __classPrivateFieldGet(this, _OAuth_credentials, "f") && Reflect.has(__classPrivateFieldGet(this, _OAuth_credentials, "f"), "access_token") && Reflect.has(__classPrivateFieldGet(this, _OAuth_credentials, "f"), "refresh_token") && Reflect.has(__classPrivateFieldGet(this, _OAuth_credentials, "f"), "expires") || false;
  }
};
__name(OAuth, "OAuth");
_OAuth_identity = /* @__PURE__ */ new WeakMap(), _OAuth_session = /* @__PURE__ */ new WeakMap(), _OAuth_credentials = /* @__PURE__ */ new WeakMap(), _OAuth_polling_interval = /* @__PURE__ */ new WeakMap(), _OAuth_instances = /* @__PURE__ */ new WeakSet(), _OAuth_loadCachedCredentials = /* @__PURE__ */ __name(function _OAuth_loadCachedCredentials2() {
  var _a7;
  return __awaiter(this, void 0, void 0, function* () {
    const data2 = yield (_a7 = __classPrivateFieldGet(this, _OAuth_session, "f").cache) === null || _a7 === void 0 ? void 0 : _a7.get("youtubei_oauth_credentials");
    if (!data2)
      return false;
    const decoder = new TextDecoder();
    const credentials = JSON.parse(decoder.decode(data2));
    __classPrivateFieldSet(this, _OAuth_credentials, {
      access_token: credentials.access_token,
      refresh_token: credentials.refresh_token,
      expires: new Date(credentials.expires)
    }, "f");
    __classPrivateFieldGet(this, _OAuth_session, "f").emit("auth", {
      credentials: __classPrivateFieldGet(this, _OAuth_credentials, "f"),
      status: "SUCCESS"
    });
    return true;
  });
}, "_OAuth_loadCachedCredentials"), _OAuth_getUserCode = /* @__PURE__ */ __name(function _OAuth_getUserCode2() {
  return __awaiter(this, void 0, void 0, function* () {
    __classPrivateFieldSet(this, _OAuth_identity, yield __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_getClientIdentity).call(this), "f");
    const data2 = {
      client_id: __classPrivateFieldGet(this, _OAuth_identity, "f").client_id,
      scope: OAUTH.SCOPE,
      device_id: Platform.shim.uuidv4(),
      device_model: OAUTH.MODEL_NAME
    };
    const response = yield __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch_function(new URL("/o/oauth2/device/code", URLS.YT_BASE), {
      body: JSON.stringify(data2),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response_data = yield response.json();
    __classPrivateFieldGet(this, _OAuth_session, "f").emit("auth-pending", response_data);
    __classPrivateFieldSet(this, _OAuth_polling_interval, response_data.interval, "f");
    __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_startPolling).call(this, response_data.device_code);
  });
}, "_OAuth_getUserCode"), _OAuth_startPolling = /* @__PURE__ */ __name(function _OAuth_startPolling2(device_code) {
  const poller = setInterval(() => __awaiter(this, void 0, void 0, function* () {
    const data2 = Object.assign(Object.assign({}, __classPrivateFieldGet(this, _OAuth_identity, "f")), { code: device_code, grant_type: OAUTH.GRANT_TYPE });
    try {
      const response = yield __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch_function(new URL("/o/oauth2/token", URLS.YT_BASE), {
        body: JSON.stringify(data2),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response_data = yield response.json();
      if (response_data.error) {
        switch (response_data.error) {
          case "access_denied":
            __classPrivateFieldGet(this, _OAuth_session, "f").emit("auth-error", new OAuthError("Access was denied.", { status: "ACCESS_DENIED" }));
            break;
          case "expired_token":
            __classPrivateFieldGet(this, _OAuth_session, "f").emit("auth-error", new OAuthError("The device code has expired, restarting auth flow.", { status: "DEVICE_CODE_EXPIRED" }));
            clearInterval(poller);
            __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_getUserCode).call(this);
            break;
          default:
            break;
        }
        return;
      }
      const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1e3);
      __classPrivateFieldSet(this, _OAuth_credentials, {
        access_token: response_data.access_token,
        refresh_token: response_data.refresh_token,
        expires: expiration_date
      }, "f");
      __classPrivateFieldGet(this, _OAuth_session, "f").emit("auth", {
        credentials: __classPrivateFieldGet(this, _OAuth_credentials, "f"),
        status: "SUCCESS"
      });
      clearInterval(poller);
    } catch (err) {
      clearInterval(poller);
      return __classPrivateFieldGet(this, _OAuth_session, "f").emit("auth-error", new OAuthError("Could not obtain user code.", { status: "FAILED", error: err }));
    }
  }), __classPrivateFieldGet(this, _OAuth_polling_interval, "f") * 1e3);
}, "_OAuth_startPolling"), _OAuth_refreshAccessToken = /* @__PURE__ */ __name(function _OAuth_refreshAccessToken2() {
  return __awaiter(this, void 0, void 0, function* () {
    if (!__classPrivateFieldGet(this, _OAuth_credentials, "f"))
      return;
    __classPrivateFieldSet(this, _OAuth_identity, yield __classPrivateFieldGet(this, _OAuth_instances, "m", _OAuth_getClientIdentity).call(this), "f");
    const data2 = Object.assign(Object.assign({}, __classPrivateFieldGet(this, _OAuth_identity, "f")), { refresh_token: __classPrivateFieldGet(this, _OAuth_credentials, "f").refresh_token, grant_type: "refresh_token" });
    const response = yield __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch_function(new URL("/o/oauth2/token", URLS.YT_BASE), {
      body: JSON.stringify(data2),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response_data = yield response.json();
    const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1e3);
    __classPrivateFieldSet(this, _OAuth_credentials, {
      access_token: response_data.access_token,
      refresh_token: response_data.refresh_token || __classPrivateFieldGet(this, _OAuth_credentials, "f").refresh_token,
      expires: expiration_date
    }, "f");
    __classPrivateFieldGet(this, _OAuth_session, "f").emit("update-credentials", {
      credentials: __classPrivateFieldGet(this, _OAuth_credentials, "f"),
      status: "SUCCESS"
    });
  });
}, "_OAuth_refreshAccessToken"), _OAuth_getClientIdentity = /* @__PURE__ */ __name(function _OAuth_getClientIdentity2() {
  var _a7;
  return __awaiter(this, void 0, void 0, function* () {
    const response = yield __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch_function(new URL("/tv", URLS.YT_BASE), { headers: OAUTH.HEADERS });
    const response_data = yield response.text();
    const url_body = (_a7 = OAUTH.REGEX.AUTH_SCRIPT.exec(response_data)) === null || _a7 === void 0 ? void 0 : _a7[1];
    if (!url_body)
      throw new OAuthError("Could not obtain script url.", { status: "FAILED" });
    const script = yield __classPrivateFieldGet(this, _OAuth_session, "f").http.fetch(url_body, { baseURL: URLS.YT_BASE });
    const client_identity = (yield script.text()).replace(/\n/g, "").match(OAUTH.REGEX.CLIENT_IDENTITY);
    const groups = client_identity === null || client_identity === void 0 ? void 0 : client_identity.groups;
    if (!groups)
      throw new OAuthError("Could not obtain client identity.", { status: "FAILED" });
    return groups;
  });
}, "_OAuth_getClientIdentity");
var OAuth_default = OAuth;

// dist/src/core/Session.js
var _a6;
var _Session_api_version;
var _Session_key;
var _Session_context;
var _Session_account_index;
var _Session_player;
var _Session_retrieveSessionData;
var _Session_generateSessionData;
var ClientType;
(function(ClientType2) {
  ClientType2["WEB"] = "WEB";
  ClientType2["KIDS"] = "WEB_KIDS";
  ClientType2["MUSIC"] = "WEB_REMIX";
  ClientType2["ANDROID"] = "ANDROID";
  ClientType2["ANDROID_MUSIC"] = "ANDROID_MUSIC";
  ClientType2["ANDROID_CREATOR"] = "ANDROID_CREATOR";
  ClientType2["TV_EMBEDDED"] = "TVHTML5_SIMPLY_EMBEDDED_PLAYER";
})(ClientType || (ClientType = {}));
var Session = class extends EventEmitterLike_default {
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
    this.http = new HTTPClient_default(this, cookie, fetch);
    this.actions = new Actions_default(this);
    this.oauth = new OAuth_default(this);
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
      const { context, api_key, api_version, account_index } = yield Session.getSessionData(options.lang, options.location, options.account_index, options.visitor_data, options.enable_safety_mode, options.generate_session_locally, options.device_category, options.client_type, options.timezone, options.fetch);
      return new Session(context, api_key, api_version, account_index, options.retrieve_player === false ? void 0 : yield Player.create(options.cache, options.fetch), options.cookie, options.fetch, options.cache);
    });
  }
  static getSessionData(lang = "", location = "", account_index = 0, visitor_data = "", enable_safety_mode = false, generate_session_locally = false, device_category = "desktop", client_name = ClientType.WEB, tz = Intl.DateTimeFormat().resolvedOptions().timeZone, fetch = Platform.shim.fetch) {
    return __awaiter(this, void 0, void 0, function* () {
      let session_data;
      if (generate_session_locally) {
        session_data = __classPrivateFieldGet(this, _a6, "m", _Session_generateSessionData).call(this, { lang, location, time_zone: tz, device_category, client_name, enable_safety_mode, visitor_data });
      } else {
        session_data = yield __classPrivateFieldGet(this, _a6, "m", _Session_retrieveSessionData).call(this, { lang, location, time_zone: tz, device_category, client_name, enable_safety_mode, visitor_data }, fetch);
      }
      return Object.assign(Object.assign({}, session_data), { account_index });
    });
  }
  signIn(credentials) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const error_handler = /* @__PURE__ */ __name((err) => reject(err), "error_handler");
        this.once("auth", (data2) => {
          this.off("auth-error", error_handler);
          if (data2.status === "SUCCESS") {
            this.logged_in = true;
            resolve();
          }
          reject(data2);
        });
        this.once("auth-error", error_handler);
        try {
          yield this.oauth.init(credentials);
          if (this.oauth.validateCredentials()) {
            yield this.oauth.refreshIfRequired();
            this.logged_in = true;
            resolve();
          }
        } catch (err) {
          reject(err);
        }
      }));
    });
  }
  signOut() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield this.oauth.revokeCredentials();
      this.logged_in = false;
      return response;
    });
  }
  get key() {
    return __classPrivateFieldGet(this, _Session_key, "f");
  }
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
};
__name(Session, "Session");
_a6 = Session, _Session_api_version = /* @__PURE__ */ new WeakMap(), _Session_key = /* @__PURE__ */ new WeakMap(), _Session_context = /* @__PURE__ */ new WeakMap(), _Session_account_index = /* @__PURE__ */ new WeakMap(), _Session_player = /* @__PURE__ */ new WeakMap(), _Session_retrieveSessionData = /* @__PURE__ */ __name(function _Session_retrieveSessionData2(options, fetch = Platform.shim.fetch) {
  return __awaiter(this, void 0, void 0, function* () {
    const url = new URL("/sw.js_data", URLS.YT_BASE);
    let visitor_id = generateRandomString(11);
    if (options.visitor_data) {
      const decoded_visitor_data = proto_default.decodeVisitorData(options.visitor_data);
      visitor_id = decoded_visitor_data.id;
    }
    const res = yield fetch(url, {
      headers: {
        "accept-language": options.lang || "en-US",
        "user-agent": getRandomUserAgent("desktop"),
        "accept": "*/*",
        "referer": "https://www.youtube.com/sw.js",
        "cookie": `PREF=tz=${options.time_zone.replace("/", ".")};VISITOR_INFO1_LIVE=${visitor_id};`
      }
    });
    if (!res.ok)
      throw new SessionError(`Failed to retrieve session data: ${res.status}`);
    const text = yield res.text();
    const data2 = JSON.parse(text.replace(/^\)\]\}'/, ""));
    const ytcfg = data2[0][2];
    const api_version = `v1`;
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
        clientName: options.client_name,
        clientVersion: device_info[16],
        osName: device_info[17],
        osVersion: device_info[18],
        platform: options.device_category.toUpperCase(),
        clientFormFactor: "UNKNOWN_FORM_FACTOR",
        userInterfaceTheme: "USER_INTERFACE_THEME_LIGHT",
        timeZone: device_info[79] || options.time_zone,
        browserName: device_info[86],
        browserVersion: device_info[87],
        originalUrl: URLS.YT_BASE,
        deviceMake: device_info[11],
        deviceModel: device_info[12],
        utcOffsetMinutes: -new Date().getTimezoneOffset()
      },
      user: {
        enableSafetyMode: options.enable_safety_mode,
        lockedSafetyMode: false
      }
    };
    return { context, api_key, api_version };
  });
}, "_Session_retrieveSessionData"), _Session_generateSessionData = /* @__PURE__ */ __name(function _Session_generateSessionData2(options) {
  let visitor_id = generateRandomString(11);
  if (options.visitor_data) {
    const decoded_visitor_data = proto_default.decodeVisitorData(options.visitor_data);
    visitor_id = decoded_visitor_data.id;
  }
  const context = {
    client: {
      hl: options.lang || "en",
      gl: options.location || "US",
      screenDensityFloat: 1,
      screenHeightPoints: 1080,
      screenPixelDensity: 1,
      screenWidthPoints: 1920,
      visitorData: proto_default.encodeVisitorData(visitor_id, Math.floor(Date.now() / 1e3)),
      clientName: options.client_name,
      clientVersion: CLIENTS.WEB.VERSION,
      osName: "Windows",
      osVersion: "10.0",
      platform: options.device_category.toUpperCase(),
      clientFormFactor: "UNKNOWN_FORM_FACTOR",
      userInterfaceTheme: "USER_INTERFACE_THEME_LIGHT",
      timeZone: options.time_zone,
      originalUrl: URLS.YT_BASE,
      deviceMake: "",
      deviceModel: "",
      utcOffsetMinutes: -new Date().getTimezoneOffset()
    },
    user: {
      enableSafetyMode: options.enable_safety_mode,
      lockedSafetyMode: false
    }
  };
  return { context, api_key: CLIENTS.WEB.API_KEY, api_version: CLIENTS.WEB.API_VERSION };
}, "_Session_generateSessionData");
var Session_default = Session;

// dist/src/core/clients/index.js
var clients_exports = {};
__export(clients_exports, {
  Kids: () => Kids_default,
  Music: () => Music_default,
  Studio: () => Studio_default
});

// dist/src/core/endpoints/index.js
var endpoints_exports = {};
__export(endpoints_exports, {
  Account: () => account_exports,
  Browse: () => browse_exports,
  BrowseEndpoint: () => BrowseEndpoint_exports,
  Channel: () => channel_exports,
  Comment: () => comment_exports,
  GetNotificationMenuEndpoint: () => GetNotificationMenuEndpoint_exports,
  GuideEndpoint: () => GuideEndpoint_exports,
  Like: () => like_exports,
  Music: () => music_exports,
  NextEndpoint: () => NextEndpoint_exports,
  Notification: () => notification_exports,
  PlayerEndpoint: () => PlayerEndpoint_exports,
  Playlist: () => playlist_exports,
  ResolveURLEndpoint: () => ResolveURLEndpoint_exports,
  SearchEndpoint: () => SearchEndpoint_exports,
  Subscription: () => subscription_exports,
  Upload: () => upload_exports
});

// dist/src/core/endpoints/BrowseEndpoint.js
var BrowseEndpoint_exports = {};
__export(BrowseEndpoint_exports, {
  PATH: () => PATH,
  build: () => build
});
var PATH = "/browse";
function build(opts) {
  return Object.assign({
    browseId: opts.browse_id,
    params: opts.params,
    continuation: opts.continuation,
    client: opts.client
  });
}
__name(build, "build");

// dist/src/core/endpoints/GetNotificationMenuEndpoint.js
var GetNotificationMenuEndpoint_exports = {};
__export(GetNotificationMenuEndpoint_exports, {
  PATH: () => PATH2,
  build: () => build2
});
var PATH2 = "/notification/get_notification_menu";
function build2(opts) {
  return Object.assign({
    notificationsMenuRequestType: opts.notifications_menu_request_type
  });
}
__name(build2, "build");

// dist/src/core/endpoints/GuideEndpoint.js
var GuideEndpoint_exports = {};
__export(GuideEndpoint_exports, {
  PATH: () => PATH3
});
var PATH3 = "/guide";

// dist/src/core/endpoints/NextEndpoint.js
var NextEndpoint_exports = {};
__export(NextEndpoint_exports, {
  PATH: () => PATH4,
  build: () => build3
});
var PATH4 = "/next";
function build3(opts) {
  return Object.assign({
    videoId: opts.video_id,
    playlistId: opts.playlist_id,
    params: opts.params,
    playlistIndex: opts.playlist_index,
    client: opts.client,
    continuation: opts.continuation
  });
}
__name(build3, "build");

// dist/src/core/endpoints/PlayerEndpoint.js
var PlayerEndpoint_exports = {};
__export(PlayerEndpoint_exports, {
  PATH: () => PATH5,
  build: () => build4
});
var PATH5 = "/player";
function build4(opts) {
  return Object.assign({ playbackContext: {
    contentPlaybackContext: Object.assign({ vis: 0, splay: false, referer: opts.playlist_id ? `https://www.youtube.com/watch?v=${opts.video_id}&list=${opts.playlist_id}` : `https://www.youtube.com/watch?v=${opts.video_id}`, currentUrl: opts.playlist_id ? `/watch?v=${opts.video_id}&list=${opts.playlist_id}` : `/watch?v=${opts.video_id}`, autonavState: "STATE_ON", autoCaptionsDefaultOn: false, html5Preference: "HTML5_PREF_WANTS", lactMilliseconds: "-1" }, {
      signatureTimestamp: opts.sts
    })
  }, attestationRequest: {
    omitBotguardData: true
  }, racyCheckOk: true, contentCheckOk: true, videoId: opts.video_id }, {
    client: opts.client,
    playlistId: opts.playlist_id,
    params: "8AEB"
  });
}
__name(build4, "build");

// dist/src/core/endpoints/ResolveURLEndpoint.js
var ResolveURLEndpoint_exports = {};
__export(ResolveURLEndpoint_exports, {
  PATH: () => PATH6,
  build: () => build5
});
var PATH6 = "/navigation/resolve_url";
function build5(opts) {
  return Object.assign({
    url: opts.url
  });
}
__name(build5, "build");

// dist/src/core/endpoints/SearchEndpoint.js
var SearchEndpoint_exports = {};
__export(SearchEndpoint_exports, {
  PATH: () => PATH7,
  build: () => build6
});
var PATH7 = "/search";
function build6(opts) {
  return Object.assign({
    query: opts.query,
    params: opts.params,
    continuation: opts.continuation,
    client: opts.client
  });
}
__name(build6, "build");

// dist/src/core/endpoints/account/index.js
var account_exports = {};
__export(account_exports, {
  AccountListEndpoint: () => AccountListEndpoint_exports
});

// dist/src/core/endpoints/account/AccountListEndpoint.js
var AccountListEndpoint_exports = {};
__export(AccountListEndpoint_exports, {
  PATH: () => PATH8,
  build: () => build7
});
var PATH8 = "/account/accounts_list";
function build7() {
  return {
    client: "ANDROID"
  };
}
__name(build7, "build");

// dist/src/core/endpoints/browse/index.js
var browse_exports = {};
__export(browse_exports, {
  EditPlaylistEndpoint: () => EditPlaylistEndpoint_exports
});

// dist/src/core/endpoints/browse/EditPlaylistEndpoint.js
var EditPlaylistEndpoint_exports = {};
__export(EditPlaylistEndpoint_exports, {
  PATH: () => PATH9,
  build: () => build8
});
var PATH9 = "/browse/edit_playlist";
function build8(opts) {
  return {
    playlistId: opts.playlist_id,
    actions: opts.actions.map((action) => Object.assign({ action: action.action }, {
      addedVideoId: action.added_video_id,
      setVideoId: action.set_video_id,
      movedSetVideoIdPredecessor: action.moved_set_video_id_predecessor
    }))
  };
}
__name(build8, "build");

// dist/src/core/endpoints/channel/index.js
var channel_exports = {};
__export(channel_exports, {
  EditDescriptionEndpoint: () => EditDescriptionEndpoint_exports,
  EditNameEndpoint: () => EditNameEndpoint_exports
});

// dist/src/core/endpoints/channel/EditNameEndpoint.js
var EditNameEndpoint_exports = {};
__export(EditNameEndpoint_exports, {
  PATH: () => PATH10,
  build: () => build9
});
var PATH10 = "/channel/edit_name";
function build9(options) {
  return {
    givenName: options.given_name,
    client: "ANDROID"
  };
}
__name(build9, "build");

// dist/src/core/endpoints/channel/EditDescriptionEndpoint.js
var EditDescriptionEndpoint_exports = {};
__export(EditDescriptionEndpoint_exports, {
  PATH: () => PATH11,
  build: () => build10
});
var PATH11 = "/channel/edit_description";
function build10(options) {
  return {
    givenDescription: options.given_description,
    client: "ANDROID"
  };
}
__name(build10, "build");

// dist/src/core/endpoints/comment/index.js
var comment_exports = {};
__export(comment_exports, {
  CreateCommentEndpoint: () => CreateCommentEndpoint_exports,
  PerformCommentActionEndpoint: () => PerformCommentActionEndpoint_exports
});

// dist/src/core/endpoints/comment/PerformCommentActionEndpoint.js
var PerformCommentActionEndpoint_exports = {};
__export(PerformCommentActionEndpoint_exports, {
  PATH: () => PATH12,
  build: () => build11
});
var PATH12 = "/comment/perform_comment_action";
function build11(options) {
  return Object.assign({ actions: options.actions }, {
    client: options.client
  });
}
__name(build11, "build");

// dist/src/core/endpoints/comment/CreateCommentEndpoint.js
var CreateCommentEndpoint_exports = {};
__export(CreateCommentEndpoint_exports, {
  PATH: () => PATH13,
  build: () => build12
});
var PATH13 = "/comment/create_comment";
function build12(options) {
  return Object.assign({ commentText: options.comment_text, createCommentParams: options.create_comment_params }, {
    client: options.client
  });
}
__name(build12, "build");

// dist/src/core/endpoints/like/index.js
var like_exports = {};
__export(like_exports, {
  DislikeEndpoint: () => DislikeEndpoint_exports,
  LikeEndpoint: () => LikeEndpoint_exports,
  RemoveLikeEndpoint: () => RemoveLikeEndpoint_exports
});

// dist/src/core/endpoints/like/LikeEndpoint.js
var LikeEndpoint_exports = {};
__export(LikeEndpoint_exports, {
  PATH: () => PATH14,
  build: () => build13
});
var PATH14 = "/like/like";
function build13(options) {
  return Object.assign({ target: {
    videoId: options.target.video_id
  } }, {
    client: options.client
  });
}
__name(build13, "build");

// dist/src/core/endpoints/like/DislikeEndpoint.js
var DislikeEndpoint_exports = {};
__export(DislikeEndpoint_exports, {
  PATH: () => PATH15,
  build: () => build14
});
var PATH15 = "/like/dislike";
function build14(options) {
  return Object.assign({ target: {
    videoId: options.target.video_id
  } }, {
    client: options.client
  });
}
__name(build14, "build");

// dist/src/core/endpoints/like/RemoveLikeEndpoint.js
var RemoveLikeEndpoint_exports = {};
__export(RemoveLikeEndpoint_exports, {
  PATH: () => PATH16,
  build: () => build15
});
var PATH16 = "/like/removelike";
function build15(options) {
  return Object.assign({ target: {
    videoId: options.target.video_id
  } }, {
    client: options.client
  });
}
__name(build15, "build");

// dist/src/core/endpoints/music/index.js
var music_exports = {};
__export(music_exports, {
  GetSearchSuggestionsEndpoint: () => GetSearchSuggestionsEndpoint_exports
});

// dist/src/core/endpoints/music/GetSearchSuggestionsEndpoint.js
var GetSearchSuggestionsEndpoint_exports = {};
__export(GetSearchSuggestionsEndpoint_exports, {
  PATH: () => PATH17,
  build: () => build16
});
var PATH17 = "/music/get_search_suggestions";
function build16(opts) {
  return {
    input: opts.input,
    client: "YTMUSIC"
  };
}
__name(build16, "build");

// dist/src/core/endpoints/notification/index.js
var notification_exports = {};
__export(notification_exports, {
  GetUnseenCountEndpoint: () => GetUnseenCountEndpoint_exports,
  ModifyChannelPreferenceEndpoint: () => ModifyChannelPreferenceEndpoint_exports
});

// dist/src/core/endpoints/notification/GetUnseenCountEndpoint.js
var GetUnseenCountEndpoint_exports = {};
__export(GetUnseenCountEndpoint_exports, {
  PATH: () => PATH18
});
var PATH18 = "/notification/get_unseen_count";

// dist/src/core/endpoints/notification/ModifyChannelPreferenceEndpoint.js
var ModifyChannelPreferenceEndpoint_exports = {};
__export(ModifyChannelPreferenceEndpoint_exports, {
  PATH: () => PATH19,
  build: () => build17
});
var PATH19 = "/notification/modify_channel_preference";
function build17(options) {
  return Object.assign({ params: options.params }, {
    client: options.client
  });
}
__name(build17, "build");

// dist/src/core/endpoints/playlist/index.js
var playlist_exports = {};
__export(playlist_exports, {
  CreateEndpoint: () => CreateEndpoint_exports,
  DeleteEndpoint: () => DeleteEndpoint_exports
});

// dist/src/core/endpoints/playlist/CreateEndpoint.js
var CreateEndpoint_exports = {};
__export(CreateEndpoint_exports, {
  PATH: () => PATH20,
  build: () => build18
});
var PATH20 = "/playlist/create";
function build18(opts) {
  return {
    title: opts.title,
    ids: opts.ids
  };
}
__name(build18, "build");

// dist/src/core/endpoints/playlist/DeleteEndpoint.js
var DeleteEndpoint_exports = {};
__export(DeleteEndpoint_exports, {
  PATH: () => PATH21,
  build: () => build19
});
var PATH21 = "/playlist/delete";
function build19(opts) {
  return {
    playlistId: opts.playlist_id
  };
}
__name(build19, "build");

// dist/src/core/endpoints/subscription/index.js
var subscription_exports = {};
__export(subscription_exports, {
  SubscribeEndpoint: () => SubscribeEndpoint_exports,
  UnsubscribeEndpoint: () => UnsubscribeEndpoint_exports
});

// dist/src/core/endpoints/subscription/SubscribeEndpoint.js
var SubscribeEndpoint_exports = {};
__export(SubscribeEndpoint_exports, {
  PATH: () => PATH22,
  build: () => build20
});
var PATH22 = "/subscription/subscribe";
function build20(options) {
  return Object.assign({ channelIds: options.channel_ids }, {
    client: options.client,
    params: options.params
  });
}
__name(build20, "build");

// dist/src/core/endpoints/subscription/UnsubscribeEndpoint.js
var UnsubscribeEndpoint_exports = {};
__export(UnsubscribeEndpoint_exports, {
  PATH: () => PATH23,
  build: () => build21
});
var PATH23 = "/subscription/unsubscribe";
function build21(options) {
  return Object.assign({ channelIds: options.channel_ids }, {
    client: options.client,
    params: options.params
  });
}
__name(build21, "build");

// dist/src/core/endpoints/upload/index.js
var upload_exports = {};
__export(upload_exports, {
  CreateVideoEndpoint: () => CreateVideoEndpoint_exports
});

// dist/src/core/endpoints/upload/CreateVideoEndpoint.js
var CreateVideoEndpoint_exports = {};
__export(CreateVideoEndpoint_exports, {
  PATH: () => PATH24,
  build: () => build22
});
var PATH24 = "/upload/createvideo";
function build22(opts) {
  return Object.assign({ resourceId: {
    scottyResourceId: {
      id: opts.resource_id.scotty_resource_id.id
    }
  }, frontendUploadId: opts.frontend_upload_id, initialMetadata: {
    title: {
      newTitle: opts.initial_metadata.title.new_title
    },
    description: {
      newDescription: opts.initial_metadata.description.new_description,
      shouldSegment: opts.initial_metadata.description.should_segment
    },
    privacy: {
      newPrivacy: opts.initial_metadata.privacy.new_privacy
    },
    draftState: {
      isDraft: !!opts.initial_metadata.draft_state.is_draft
    }
  } }, {
    client: opts.client
  });
}
__name(build22, "build");

// dist/src/core/clients/Kids.js
var _Kids_session;
var Kids = class {
  constructor(session) {
    _Kids_session.set(this, void 0);
    __classPrivateFieldSet(this, _Kids_session, session, "f");
  }
  search(query) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _Kids_session, "f").actions.execute(SearchEndpoint_exports.PATH, SearchEndpoint_exports.build({ client: "YTKIDS", query }));
      return new Search_default3(__classPrivateFieldGet(this, _Kids_session, "f").actions, response);
    });
  }
  getInfo(video_id) {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      const player_payload = PlayerEndpoint_exports.build({
        sts: (_a7 = __classPrivateFieldGet(this, _Kids_session, "f").player) === null || _a7 === void 0 ? void 0 : _a7.sts,
        client: "YTKIDS",
        video_id
      });
      const next_payload = NextEndpoint_exports.build({
        video_id,
        client: "YTKIDS"
      });
      const player_response = __classPrivateFieldGet(this, _Kids_session, "f").actions.execute(PlayerEndpoint_exports.PATH, player_payload);
      const next_response = __classPrivateFieldGet(this, _Kids_session, "f").actions.execute(NextEndpoint_exports.PATH, next_payload);
      const response = yield Promise.all([player_response, next_response]);
      const cpn = generateRandomString(16);
      return new VideoInfo_default2(response, __classPrivateFieldGet(this, _Kids_session, "f").actions, cpn);
    });
  }
  getChannel(channel_id) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _Kids_session, "f").actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: channel_id,
        client: "YTKIDS"
      }));
      return new Channel_default2(__classPrivateFieldGet(this, _Kids_session, "f").actions, response);
    });
  }
  getHomeFeed() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _Kids_session, "f").actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "FEkids_home",
        client: "YTKIDS"
      }));
      return new HomeFeed_default2(__classPrivateFieldGet(this, _Kids_session, "f").actions, response);
    });
  }
};
__name(Kids, "Kids");
_Kids_session = /* @__PURE__ */ new WeakMap();
var Kids_default = Kids;

// dist/src/core/clients/Music.js
var _Music_instances;
var _Music_session;
var _Music_actions;
var _Music_fetchInfoFromVideoId;
var _Music_fetchInfoFromListItem;
var Music = class {
  constructor(session) {
    _Music_instances.add(this);
    _Music_session.set(this, void 0);
    _Music_actions.set(this, void 0);
    __classPrivateFieldSet(this, _Music_session, session, "f");
    __classPrivateFieldSet(this, _Music_actions, session.actions, "f");
  }
  getInfo(target) {
    if (target instanceof MusicTwoRowItem_default) {
      return __classPrivateFieldGet(this, _Music_instances, "m", _Music_fetchInfoFromListItem).call(this, target);
    } else if (typeof target === "string") {
      return __classPrivateFieldGet(this, _Music_instances, "m", _Music_fetchInfoFromVideoId).call(this, target);
    }
    throw new InnertubeError("Invalid target, expected either a video id or a valid MusicTwoRowItem", target);
  }
  search(query, filters = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ query });
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(SearchEndpoint_exports.PATH, SearchEndpoint_exports.build({
        query,
        client: "YTMUSIC",
        params: filters.type && filters.type !== "all" ? proto_default.encodeMusicSearchFilters(filters) : void 0
      }));
      return new Search_default2(response, __classPrivateFieldGet(this, _Music_actions, "f"), Reflect.has(filters, "type") && filters.type !== "all");
    });
  }
  getHomeFeed() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "FEmusic_home",
        client: "YTMUSIC"
      }));
      return new HomeFeed_default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
    });
  }
  getExplore() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC",
        browse_id: "FEmusic_explore"
      }));
      return new Explore_default(response);
    });
  }
  getLibrary() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC",
        browse_id: "FEmusic_library_landing"
      }));
      return new Library_default2(response, __classPrivateFieldGet(this, _Music_actions, "f"));
    });
  }
  getArtist(artist_id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ artist_id });
      if (!artist_id.startsWith("UC") && !artist_id.startsWith("FEmusic_library_privately_owned_artist"))
        throw new InnertubeError("Invalid artist id", artist_id);
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC",
        browse_id: artist_id
      }));
      return new Artist_default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
    });
  }
  getAlbum(album_id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ album_id });
      if (!album_id.startsWith("MPR") && !album_id.startsWith("FEmusic_library_privately_owned_release"))
        throw new InnertubeError("Invalid album id", album_id);
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC",
        browse_id: album_id
      }));
      return new Album_default(response);
    });
  }
  getPlaylist(playlist_id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id });
      if (!playlist_id.startsWith("VL")) {
        playlist_id = `VL${playlist_id}`;
      }
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC",
        browse_id: playlist_id
      }));
      return new Playlist_default3(response, __classPrivateFieldGet(this, _Music_actions, "f"));
    });
  }
  getUpNext(video_id, automix = true) {
    var _a7, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(NextEndpoint_exports.PATH, Object.assign(Object.assign({}, NextEndpoint_exports.build({ video_id, client: "YTMUSIC" })), { parse: true }));
      const tabs = (_a7 = response.contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(Tab_default);
      const tab = tabs === null || tabs === void 0 ? void 0 : tabs.first();
      if (!tab)
        throw new InnertubeError("Could not find target tab.");
      const music_queue = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(MusicQueue_default);
      if (!music_queue || !music_queue.content)
        throw new InnertubeError("Music queue was empty, the given id is probably invalid.", music_queue);
      const playlist_panel = music_queue.content.as(PlaylistPanel_default);
      if (!playlist_panel.playlist_id && automix) {
        const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo_default);
        if (!automix_preview_video)
          throw new InnertubeError("Automix item not found");
        const page = yield (_c = automix_preview_video.playlist_video) === null || _c === void 0 ? void 0 : _c.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), {
          videoId: video_id,
          client: "YTMUSIC",
          parse: true
        });
        if (!page || !page.contents_memo)
          throw new InnertubeError("Could not fetch automix");
        return page.contents_memo.getType(PlaylistPanel_default).first();
      }
      return playlist_panel;
    });
  }
  getRelated(video_id) {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(NextEndpoint_exports.PATH, Object.assign(Object.assign({}, NextEndpoint_exports.build({ video_id, client: "YTMUSIC" })), { parse: true }));
      const tabs = (_a7 = response.contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(Tab_default);
      const tab = tabs === null || tabs === void 0 ? void 0 : tabs.matchCondition((tab2) => {
        var _a8, _b;
        return ((_b = (_a8 = tab2.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a8 === void 0 ? void 0 : _a8.browseEndpointContextMusicConfig) === null || _b === void 0 ? void 0 : _b.pageType) === "MUSIC_PAGE_TYPE_TRACK_RELATED";
      });
      if (!tab)
        throw new InnertubeError("Could not find target tab.");
      const page = yield tab.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), { client: "YTMUSIC", parse: true });
      if (!page.contents)
        throw new InnertubeError("Unexpected response", page);
      const shelves = page.contents.item().as(SectionList_default).contents.as(MusicCarouselShelf_default, MusicDescriptionShelf_default);
      return shelves;
    });
  }
  getLyrics(video_id) {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(NextEndpoint_exports.PATH, Object.assign(Object.assign({}, NextEndpoint_exports.build({ video_id, client: "YTMUSIC" })), { parse: true }));
      const tabs = (_a7 = response.contents_memo) === null || _a7 === void 0 ? void 0 : _a7.getType(Tab_default);
      const tab = tabs === null || tabs === void 0 ? void 0 : tabs.matchCondition((tab2) => {
        var _a8, _b;
        return ((_b = (_a8 = tab2.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a8 === void 0 ? void 0 : _a8.browseEndpointContextMusicConfig) === null || _b === void 0 ? void 0 : _b.pageType) === "MUSIC_PAGE_TYPE_TRACK_LYRICS";
      });
      if (!tab)
        throw new InnertubeError("Could not find target tab.");
      const page = yield tab.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), { client: "YTMUSIC", parse: true });
      if (!page.contents)
        throw new InnertubeError("Unexpected response", page);
      if (page.contents.item().key("type").string() === "Message")
        throw new InnertubeError(page.contents.item().as(Message_default).text.toString(), video_id);
      const section_list = page.contents.item().as(SectionList_default).contents;
      return section_list.firstOfType(MusicDescriptionShelf_default);
    });
  }
  getRecap() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC_ANDROID",
        browse_id: "FEmusic_listening_review"
      }));
      return new Recap_default(response, __classPrivateFieldGet(this, _Music_actions, "f"));
    });
  }
  getSearchSuggestions(query) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _Music_actions, "f").execute(GetSearchSuggestionsEndpoint_exports.PATH, Object.assign(Object.assign({}, GetSearchSuggestionsEndpoint_exports.build({ input: query })), { parse: true }));
      if (!response.contents_memo)
        throw new InnertubeError("Unexpected response", response);
      const search_suggestions_section = response.contents_memo.getType(SearchSuggestionsSection_default).first();
      return search_suggestions_section.contents;
    });
  }
};
__name(Music, "Music");
_Music_session = /* @__PURE__ */ new WeakMap(), _Music_actions = /* @__PURE__ */ new WeakMap(), _Music_instances = /* @__PURE__ */ new WeakSet(), _Music_fetchInfoFromVideoId = /* @__PURE__ */ __name(function _Music_fetchInfoFromVideoId2(video_id) {
  var _a7;
  return __awaiter(this, void 0, void 0, function* () {
    const player_payload = PlayerEndpoint_exports.build({
      video_id,
      sts: (_a7 = __classPrivateFieldGet(this, _Music_session, "f").player) === null || _a7 === void 0 ? void 0 : _a7.sts,
      client: "YTMUSIC"
    });
    const next_payload = NextEndpoint_exports.build({
      video_id,
      client: "YTMUSIC"
    });
    const player_response = __classPrivateFieldGet(this, _Music_actions, "f").execute(PlayerEndpoint_exports.PATH, player_payload);
    const next_response = __classPrivateFieldGet(this, _Music_actions, "f").execute(NextEndpoint_exports.PATH, next_payload);
    const response = yield Promise.all([player_response, next_response]);
    const cpn = generateRandomString(16);
    return new TrackInfo_default(response, __classPrivateFieldGet(this, _Music_actions, "f"), cpn);
  });
}, "_Music_fetchInfoFromVideoId"), _Music_fetchInfoFromListItem = /* @__PURE__ */ __name(function _Music_fetchInfoFromListItem2(list_item) {
  var _a7;
  return __awaiter(this, void 0, void 0, function* () {
    if (!list_item)
      throw new InnertubeError("List item cannot be undefined");
    if (!list_item.endpoint)
      throw new Error("This item does not have an endpoint.");
    const player_response = list_item.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), {
      client: "YTMUSIC",
      playbackContext: {
        contentPlaybackContext: Object.assign({
          signatureTimestamp: (_a7 = __classPrivateFieldGet(this, _Music_session, "f").player) === null || _a7 === void 0 ? void 0 : _a7.sts
        })
      }
    });
    const next_response = list_item.endpoint.call(__classPrivateFieldGet(this, _Music_actions, "f"), {
      client: "YTMUSIC",
      enablePersistentPlaylistPanel: true,
      override_endpoint: "/next"
    });
    const cpn = generateRandomString(16);
    const response = yield Promise.all([player_response, next_response]);
    return new TrackInfo_default(response, __classPrivateFieldGet(this, _Music_actions, "f"), cpn);
  });
}, "_Music_fetchInfoFromListItem");
var Music_default = Music;

// dist/src/core/clients/Studio.js
var _Studio_instances;
var _Studio_session;
var _Studio_getInitialUploadData;
var _Studio_uploadVideo;
var _Studio_setVideoMetadata;
var Studio = class {
  constructor(session) {
    _Studio_instances.add(this);
    _Studio_session.set(this, void 0);
    __classPrivateFieldSet(this, _Studio_session, session, "f");
  }
  setThumbnail(video_id, buffer) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Studio_session, "f").logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      if (!video_id || !buffer)
        throw new MissingParamError("One or more parameters are missing.");
      const payload = proto_default.encodeCustomThumbnailPayload(video_id, buffer);
      const response = yield __classPrivateFieldGet(this, _Studio_session, "f").actions.execute("/video_manager/metadata_update", {
        protobuf: true,
        serialized_data: payload
      });
      return response;
    });
  }
  updateVideoMetadata(video_id, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Studio_session, "f").logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const payload = proto_default.encodeVideoMetadataPayload(video_id, metadata);
      const response = yield __classPrivateFieldGet(this, _Studio_session, "f").actions.execute("/video_manager/metadata_update", {
        protobuf: true,
        serialized_data: payload
      });
      return response;
    });
  }
  upload(file, metadata = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _Studio_session, "f").logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const initial_data = yield __classPrivateFieldGet(this, _Studio_instances, "m", _Studio_getInitialUploadData).call(this);
      const upload_result = yield __classPrivateFieldGet(this, _Studio_instances, "m", _Studio_uploadVideo).call(this, initial_data.upload_url, file);
      if (upload_result.status !== "STATUS_SUCCESS")
        throw new InnertubeError("Could not process video.");
      const response = yield __classPrivateFieldGet(this, _Studio_instances, "m", _Studio_setVideoMetadata).call(this, initial_data, upload_result, metadata);
      return response;
    });
  }
};
__name(Studio, "Studio");
_Studio_session = /* @__PURE__ */ new WeakMap(), _Studio_instances = /* @__PURE__ */ new WeakSet(), _Studio_getInitialUploadData = /* @__PURE__ */ __name(function _Studio_getInitialUploadData2() {
  return __awaiter(this, void 0, void 0, function* () {
    const frontend_upload_id = `innertube_android:${Platform.shim.uuidv4()}:0:v=3,api=1,cf=3`;
    const payload = {
      frontendUploadId: frontend_upload_id,
      deviceDisplayName: "Pixel 6 Pro",
      fileId: `goog-edited-video://generated?videoFileUri=content://media/external/video/media/${Platform.shim.uuidv4()}`,
      mp4MoovAtomRelocationStatus: "UNSUPPORTED",
      transcodeResult: "DISABLED",
      connectionType: "WIFI"
    };
    const response = yield __classPrivateFieldGet(this, _Studio_session, "f").http.fetch("/upload/youtubei", {
      baseURL: URLS.YT_UPLOAD,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-goog-upload-command": "start",
        "x-goog-upload-protocol": "resumable"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok)
      throw new InnertubeError("Could not get initial upload data");
    return {
      frontend_upload_id,
      upload_id: response.headers.get("x-guploader-uploadid"),
      upload_url: response.headers.get("x-goog-upload-url"),
      scotty_resource_id: response.headers.get("x-goog-upload-header-scotty-resource-id"),
      chunk_granularity: response.headers.get("x-goog-upload-chunk-granularity")
    };
  });
}, "_Studio_getInitialUploadData"), _Studio_uploadVideo = /* @__PURE__ */ __name(function _Studio_uploadVideo2(upload_url, file) {
  return __awaiter(this, void 0, void 0, function* () {
    const response = yield __classPrivateFieldGet(this, _Studio_session, "f").http.fetch_function(upload_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-goog-upload-command": "upload, finalize",
        "x-goog-upload-file-name": `file-${Date.now()}`,
        "x-goog-upload-offset": "0"
      },
      body: file
    });
    if (!response.ok)
      throw new InnertubeError("Could not upload video");
    const data2 = yield response.json();
    return data2;
  });
}, "_Studio_uploadVideo"), _Studio_setVideoMetadata = /* @__PURE__ */ __name(function _Studio_setVideoMetadata2(initial_data, upload_result, metadata) {
  return __awaiter(this, void 0, void 0, function* () {
    const response = yield __classPrivateFieldGet(this, _Studio_session, "f").actions.execute(CreateVideoEndpoint_exports.PATH, CreateVideoEndpoint_exports.build({
      resource_id: {
        scotty_resource_id: {
          id: upload_result.scottyResourceId
        }
      },
      frontend_upload_id: initial_data.frontend_upload_id,
      initial_metadata: {
        title: {
          new_title: metadata.title || new Date().toDateString()
        },
        description: {
          new_description: metadata.description || "",
          should_segment: true
        },
        privacy: {
          new_privacy: metadata.privacy || "PRIVATE"
        },
        draft_state: {
          is_draft: metadata.is_draft
        }
      },
      client: "ANDROID"
    }));
    return response;
  });
}, "_Studio_setVideoMetadata");
var Studio_default = Studio;

// dist/src/core/managers/index.js
var managers_exports = {};
__export(managers_exports, {
  AccountManager: () => AccountManager_default,
  InteractionManager: () => InteractionManager_default,
  PlaylistManager: () => PlaylistManager_default
});

// dist/src/core/managers/AccountManager.js
var _AccountManager_actions;
var AccountManager = class {
  constructor(actions) {
    _AccountManager_actions.set(this, void 0);
    __classPrivateFieldSet(this, _AccountManager_actions, actions, "f");
    this.channel = {
      editName: (new_name) => {
        if (!__classPrivateFieldGet(this, _AccountManager_actions, "f").session.logged_in)
          throw new InnertubeError("You must be signed in to perform this operation.");
        return __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(channel_exports.EditNameEndpoint.PATH, channel_exports.EditNameEndpoint.build({
          given_name: new_name
        }));
      },
      editDescription: (new_description) => {
        if (!__classPrivateFieldGet(this, _AccountManager_actions, "f").session.logged_in)
          throw new InnertubeError("You must be signed in to perform this operation.");
        return __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(channel_exports.EditDescriptionEndpoint.PATH, channel_exports.EditDescriptionEndpoint.build({
          given_description: new_description
        }));
      },
      getBasicAnalytics: () => this.getAnalytics()
    };
  }
  getInfo() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!__classPrivateFieldGet(this, _AccountManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(account_exports.AccountListEndpoint.PATH, account_exports.AccountListEndpoint.build());
      return new AccountInfo_default(response);
    });
  }
  getTimeWatched() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "SPtime_watched",
        client: "ANDROID"
      }));
      return new TimeWatched_default(response);
    });
  }
  getSettings() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "SPaccount_overview"
      }));
      return new Settings_default(__classPrivateFieldGet(this, _AccountManager_actions, "f"), response);
    });
  }
  getAnalytics() {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      const info = yield this.getInfo();
      const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "FEanalytics_screen",
        params: proto_default.encodeChannelAnalyticsParams((_a7 = info.footers) === null || _a7 === void 0 ? void 0 : _a7.endpoint.payload.browseId),
        client: "ANDROID"
      }));
      return new Analytics_default(response);
    });
  }
};
__name(AccountManager, "AccountManager");
_AccountManager_actions = /* @__PURE__ */ new WeakMap();
var AccountManager_default = AccountManager;

// dist/src/core/managers/PlaylistManager.js
var _PlaylistManager_actions;
var PlaylistManager = class {
  constructor(actions) {
    _PlaylistManager_actions.set(this, void 0);
    __classPrivateFieldSet(this, _PlaylistManager_actions, actions, "f");
  }
  create(title, video_ids) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ title, video_ids });
      if (!__classPrivateFieldGet(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(CreateEndpoint_exports.PATH, CreateEndpoint_exports.build({
        ids: video_ids,
        title
      }));
      return {
        success: response.success,
        status_code: response.status_code,
        playlist_id: response.data.playlistId,
        data: response.data
      };
    });
  }
  delete(playlist_id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id });
      if (!__classPrivateFieldGet(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(DeleteEndpoint_exports.PATH, DeleteEndpoint_exports.build({
        playlist_id
      }));
      return {
        playlist_id,
        success: response.success,
        status_code: response.status_code,
        data: response.data
      };
    });
  }
  addVideos(playlist_id, video_ids) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id, video_ids });
      if (!__classPrivateFieldGet(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(EditPlaylistEndpoint_exports.PATH, EditPlaylistEndpoint_exports.build({
        actions: video_ids.map((id) => ({
          action: "ACTION_ADD_VIDEO",
          added_video_id: id
        })),
        playlist_id
      }));
      return {
        playlist_id,
        action_result: response.data.actions
      };
    });
  }
  removeVideos(playlist_id, video_ids) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id, video_ids });
      if (!__classPrivateFieldGet(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const info = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(BrowseEndpoint_exports.PATH, Object.assign(Object.assign({}, BrowseEndpoint_exports.build({ browse_id: `VL${playlist_id}` })), { parse: true }));
      const playlist = new Playlist_default2(__classPrivateFieldGet(this, _PlaylistManager_actions, "f"), info, true);
      if (!playlist.info.is_editable)
        throw new InnertubeError("This playlist cannot be edited.", playlist_id);
      const payload = { playlist_id, actions: [] };
      const getSetVideoIds = /* @__PURE__ */ __name((pl) => __awaiter(this, void 0, void 0, function* () {
        const videos = pl.videos.filter((video) => video_ids.includes(video.key("id").string()));
        videos.forEach((video) => payload.actions.push({
          action: "ACTION_REMOVE_VIDEO",
          set_video_id: video.key("set_video_id").string()
        }));
        if (payload.actions.length < video_ids.length) {
          const next = yield pl.getContinuation();
          return getSetVideoIds(next);
        }
      }), "getSetVideoIds");
      yield getSetVideoIds(playlist);
      if (!payload.actions.length)
        throw new InnertubeError("Given video ids were not found in this playlist.", video_ids);
      const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(EditPlaylistEndpoint_exports.PATH, EditPlaylistEndpoint_exports.build(payload));
      return {
        playlist_id,
        action_result: response.data.actions
      };
    });
  }
  moveVideo(playlist_id, moved_video_id, predecessor_video_id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id, moved_video_id, predecessor_video_id });
      if (!__classPrivateFieldGet(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const info = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(BrowseEndpoint_exports.PATH, Object.assign(Object.assign({}, BrowseEndpoint_exports.build({ browse_id: `VL${playlist_id}` })), { parse: true }));
      const playlist = new Playlist_default2(__classPrivateFieldGet(this, _PlaylistManager_actions, "f"), info, true);
      if (!playlist.info.is_editable)
        throw new InnertubeError("This playlist cannot be edited.", playlist_id);
      const payload = { playlist_id, actions: [] };
      let set_video_id_0, set_video_id_1;
      const getSetVideoIds = /* @__PURE__ */ __name((pl) => __awaiter(this, void 0, void 0, function* () {
        const video_0 = pl.videos.find((video) => moved_video_id === video.key("id").string());
        const video_1 = pl.videos.find((video) => predecessor_video_id === video.key("id").string());
        set_video_id_0 = set_video_id_0 || (video_0 === null || video_0 === void 0 ? void 0 : video_0.key("set_video_id").string());
        set_video_id_1 = set_video_id_1 || (video_1 === null || video_1 === void 0 ? void 0 : video_1.key("set_video_id").string());
        if (!set_video_id_0 || !set_video_id_1) {
          const next = yield pl.getContinuation();
          return getSetVideoIds(next);
        }
      }), "getSetVideoIds");
      yield getSetVideoIds(playlist);
      payload.actions.push({
        action: "ACTION_MOVE_VIDEO_AFTER",
        set_video_id: set_video_id_0,
        moved_set_video_id_predecessor: set_video_id_1
      });
      const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(EditPlaylistEndpoint_exports.PATH, EditPlaylistEndpoint_exports.build(payload));
      return {
        playlist_id,
        action_result: response.data.actions
      };
    });
  }
};
__name(PlaylistManager, "PlaylistManager");
_PlaylistManager_actions = /* @__PURE__ */ new WeakMap();
var PlaylistManager_default = PlaylistManager;

// dist/src/core/managers/InteractionManager.js
var _InteractionManager_actions;
var InteractionManager = class {
  constructor(actions) {
    _InteractionManager_actions.set(this, void 0);
    __classPrivateFieldSet(this, _InteractionManager_actions, actions, "f");
  }
  like(video_id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(LikeEndpoint_exports.PATH, LikeEndpoint_exports.build({
        client: "ANDROID",
        target: { video_id }
      }));
      return action;
    });
  }
  dislike(video_id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(DislikeEndpoint_exports.PATH, DislikeEndpoint_exports.build({
        client: "ANDROID",
        target: { video_id }
      }));
      return action;
    });
  }
  removeRating(video_id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(RemoveLikeEndpoint_exports.PATH, RemoveLikeEndpoint_exports.build({
        client: "ANDROID",
        target: { video_id }
      }));
      return action;
    });
  }
  subscribe(channel_id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ channel_id });
      if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(SubscribeEndpoint_exports.PATH, SubscribeEndpoint_exports.build({
        client: "ANDROID",
        channel_ids: [channel_id],
        params: "EgIIAhgA"
      }));
      return action;
    });
  }
  unsubscribe(channel_id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ channel_id });
      if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(UnsubscribeEndpoint_exports.PATH, UnsubscribeEndpoint_exports.build({
        client: "ANDROID",
        channel_ids: [channel_id],
        params: "CgIIAhgA"
      }));
      return action;
    });
  }
  comment(video_id, text) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ video_id, text });
      if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(CreateCommentEndpoint_exports.PATH, CreateCommentEndpoint_exports.build({
        comment_text: text,
        create_comment_params: proto_default.encodeCommentParams(video_id),
        client: "ANDROID"
      }));
      return action;
    });
  }
  translate(text, target_language, args = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ text, target_language });
      const target_action = proto_default.encodeCommentActionParams(22, Object.assign({ text, target_language }, args));
      const response = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(PerformCommentActionEndpoint_exports.PATH, PerformCommentActionEndpoint_exports.build({
        client: "ANDROID",
        actions: [target_action]
      }));
      const mutation = response.data.frameworkUpdates.entityBatchUpdate.mutations[0].payload.commentEntityPayload;
      return {
        success: response.success,
        status_code: response.status_code,
        translated_content: mutation.translatedContent.content,
        data: response.data
      };
    });
  }
  setNotificationPreferences(channel_id, type) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ channel_id, type });
      if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const pref_types = {
        PERSONALIZED: 1,
        ALL: 2,
        NONE: 3
      };
      if (!Object.keys(pref_types).includes(type.toUpperCase()))
        throw new Error(`Invalid notification preference type: ${type}`);
      const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(ModifyChannelPreferenceEndpoint_exports.PATH, ModifyChannelPreferenceEndpoint_exports.build({
        client: "WEB",
        params: proto_default.encodeNotificationPref(channel_id, pref_types[type.toUpperCase()])
      }));
      return action;
    });
  }
};
__name(InteractionManager, "InteractionManager");
_InteractionManager_actions = /* @__PURE__ */ new WeakMap();
var InteractionManager_default = InteractionManager;

// dist/src/Innertube.js
var _Innertube_session;
var Innertube = class {
  constructor(session) {
    _Innertube_session.set(this, void 0);
    __classPrivateFieldSet(this, _Innertube_session, session, "f");
  }
  static create(config = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Innertube(yield Session_default.create(config));
    });
  }
  getInfo(target, client) {
    var _a7, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ target });
      let next_payload;
      if (target instanceof NavigationEndpoint_default) {
        next_payload = NextEndpoint_exports.build({
          video_id: (_a7 = target.payload) === null || _a7 === void 0 ? void 0 : _a7.videoId,
          playlist_id: (_b = target.payload) === null || _b === void 0 ? void 0 : _b.playlistId,
          params: (_c = target.payload) === null || _c === void 0 ? void 0 : _c.params,
          playlist_index: (_d = target.payload) === null || _d === void 0 ? void 0 : _d.index
        });
      } else if (typeof target === "string") {
        next_payload = NextEndpoint_exports.build({
          video_id: target
        });
      } else {
        throw new InnertubeError("Invalid target, expected either a video id or a valid NavigationEndpoint", target);
      }
      if (!next_payload.videoId)
        throw new InnertubeError("Video id cannot be empty", next_payload);
      const player_payload = PlayerEndpoint_exports.build({
        video_id: next_payload.videoId,
        playlist_id: next_payload === null || next_payload === void 0 ? void 0 : next_payload.playlistId,
        client,
        sts: (_e = __classPrivateFieldGet(this, _Innertube_session, "f").player) === null || _e === void 0 ? void 0 : _e.sts
      });
      const player_response = this.actions.execute(PlayerEndpoint_exports.PATH, player_payload);
      const next_response = this.actions.execute(NextEndpoint_exports.PATH, next_payload);
      const response = yield Promise.all([player_response, next_response]);
      const cpn = generateRandomString(16);
      return new VideoInfo_default(response, this.actions, cpn);
    });
  }
  getBasicInfo(video_id, client) {
    var _a7;
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const response = yield this.actions.execute(PlayerEndpoint_exports.PATH, PlayerEndpoint_exports.build({
        video_id,
        client,
        sts: (_a7 = __classPrivateFieldGet(this, _Innertube_session, "f").player) === null || _a7 === void 0 ? void 0 : _a7.sts
      }));
      const cpn = generateRandomString(16);
      return new VideoInfo_default([response], this.actions, cpn);
    });
  }
  search(query, filters = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ query });
      const response = yield this.actions.execute(SearchEndpoint_exports.PATH, SearchEndpoint_exports.build({
        query,
        params: filters ? proto_default.encodeSearchFilters(filters) : void 0
      }));
      return new Search_default(this.actions, response);
    });
  }
  getSearchSuggestions(query) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ query });
      const url = new URL(`${URLS.YT_SUGGESTIONS}search`);
      url.searchParams.set("q", query);
      url.searchParams.set("hl", __classPrivateFieldGet(this, _Innertube_session, "f").context.client.hl);
      url.searchParams.set("gl", __classPrivateFieldGet(this, _Innertube_session, "f").context.client.gl);
      url.searchParams.set("ds", "yt");
      url.searchParams.set("client", "youtube");
      url.searchParams.set("xssi", "t");
      url.searchParams.set("oe", "UTF");
      const response = yield __classPrivateFieldGet(this, _Innertube_session, "f").http.fetch(url);
      const response_data = yield response.text();
      const data2 = JSON.parse(response_data.replace(")]}'", ""));
      const suggestions = data2[1].map((suggestion) => suggestion[0]);
      return suggestions;
    });
  }
  getComments(video_id, sort_by) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const response = yield this.actions.execute(NextEndpoint_exports.PATH, NextEndpoint_exports.build({
        continuation: proto_default.encodeCommentsSectionParams(video_id, {
          sort_by: sort_by || "TOP_COMMENTS"
        })
      }));
      return new Comments_default(this.actions, response.data);
    });
  }
  getHomeFeed() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({ browse_id: "FEwhat_to_watch" }));
      return new HomeFeed(this.actions, response);
    });
  }
  getGuide() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(GuideEndpoint_exports.PATH);
      return new Guide_default(response.data);
    });
  }
  getLibrary() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({ browse_id: "FElibrary" }));
      return new Library_default(this.actions, response);
    });
  }
  getHistory() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({ browse_id: "FEhistory" }));
      return new History_default(this.actions, response);
    });
  }
  getTrending() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, Object.assign(Object.assign({}, BrowseEndpoint_exports.build({ browse_id: "FEtrending" })), { parse: true }));
      return new TabbedFeed_default(this.actions, response);
    });
  }
  getSubscriptionsFeed() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, Object.assign(Object.assign({}, BrowseEndpoint_exports.build({ browse_id: "FEsubscriptions" })), { parse: true }));
      return new Feed_default(this.actions, response);
    });
  }
  getChannel(id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ id });
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({ browse_id: id }));
      return new Channel2(this.actions, response);
    });
  }
  getNotifications() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(GetNotificationMenuEndpoint_exports.PATH, GetNotificationMenuEndpoint_exports.build({
        notifications_menu_request_type: "NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX"
      }));
      return new NotificationsMenu_default(this.actions, response);
    });
  }
  getUnseenNotificationsCount() {
    var _a7, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(GetUnseenCountEndpoint_exports.PATH);
      return ((_a7 = response.data) === null || _a7 === void 0 ? void 0 : _a7.unseenCount) || ((_d = (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.actions) === null || _c === void 0 ? void 0 : _c[0].updateNotificationsUnseenCountAction) === null || _d === void 0 ? void 0 : _d.unseenCount) || 0;
    });
  }
  getPlaylist(id) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ id });
      if (!id.startsWith("VL")) {
        id = `VL${id}`;
      }
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({ browse_id: id }));
      return new Playlist_default2(this.actions, response);
    });
  }
  getHashtag(hashtag) {
    return __awaiter(this, void 0, void 0, function* () {
      throwIfMissing({ hashtag });
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "FEhashtag",
        params: proto_default.encodeHashtag(hashtag)
      }));
      return new HashtagFeed(this.actions, response);
    });
  }
  getStreamingData(video_id, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const info = yield this.getBasicInfo(video_id);
      return info.chooseFormat(options);
    });
  }
  download(video_id, options) {
    return __awaiter(this, void 0, void 0, function* () {
      const info = yield this.getBasicInfo(video_id, options === null || options === void 0 ? void 0 : options.client);
      return info.download(options);
    });
  }
  resolveURL(url) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(ResolveURLEndpoint_exports.PATH, Object.assign(Object.assign({}, ResolveURLEndpoint_exports.build({ url })), { parse: true }));
      return response.endpoint;
    });
  }
  call(endpoint, args) {
    return endpoint.call(this.actions, args);
  }
  get music() {
    return new Music_default(__classPrivateFieldGet(this, _Innertube_session, "f"));
  }
  get studio() {
    return new Studio_default(__classPrivateFieldGet(this, _Innertube_session, "f"));
  }
  get kids() {
    return new Kids_default(__classPrivateFieldGet(this, _Innertube_session, "f"));
  }
  get account() {
    return new AccountManager_default(__classPrivateFieldGet(this, _Innertube_session, "f").actions);
  }
  get playlist() {
    return new PlaylistManager_default(__classPrivateFieldGet(this, _Innertube_session, "f").actions);
  }
  get interact() {
    return new InteractionManager_default(__classPrivateFieldGet(this, _Innertube_session, "f").actions);
  }
  get actions() {
    return __classPrivateFieldGet(this, _Innertube_session, "f").actions;
  }
  get session() {
    return __classPrivateFieldGet(this, _Innertube_session, "f");
  }
};
__name(Innertube, "Innertube");
_Innertube_session = /* @__PURE__ */ new WeakMap();
var Innertube_default = Innertube;

// dist/src/types/index.js
var types_exports = {};

// dist/src/platform/lib.js
var lib_default = Innertube_default;

// dist/src/platform/jsruntime/jinter.js
var TAG3 = "JsRuntime";
function evaluate(code, env) {
  Log_default.debug(TAG3, "Evaluating JavaScript:\n", code);
  const runtime = new Jinter();
  for (const [key, value] of Object.entries(env)) {
    runtime.scope.set(key, value);
  }
  const result = runtime.evaluate(code);
  Log_default.debug(TAG3, "Done. Result:", result);
  return result;
}
__name(evaluate, "evaluate");

// dist/src/platform/web.js
var _Cache_instances;
var _Cache_persistent_directory;
var _Cache_persistent;
var _Cache_getBrowserDB;
var Cache = class {
  constructor(persistent = false, persistent_directory) {
    _Cache_instances.add(this);
    _Cache_persistent_directory.set(this, void 0);
    _Cache_persistent.set(this, void 0);
    __classPrivateFieldSet(this, _Cache_persistent_directory, persistent_directory || "", "f");
    __classPrivateFieldSet(this, _Cache_persistent, persistent, "f");
  }
  get cache_dir() {
    return __classPrivateFieldGet(this, _Cache_persistent, "f") ? __classPrivateFieldGet(this, _Cache_persistent_directory, "f") : "";
  }
  get(key) {
    return __awaiter(this, void 0, void 0, function* () {
      const db = yield __classPrivateFieldGet(this, _Cache_instances, "m", _Cache_getBrowserDB).call(this);
      if (!db)
        return;
      return new Promise((resolve, reject) => {
        const request = db.transaction("kv-store", "readonly").objectStore("kv-store").get(key);
        request.onerror = reject;
        request.onsuccess = function() {
          var _a7;
          const result = (_a7 = this.result) === null || _a7 === void 0 ? void 0 : _a7.v;
          resolve(result ? result.buffer : void 0);
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
        const request = db.transaction("kv-store", "readwrite").objectStore("kv-store").put({ k: key, v: value });
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
        const request = db.transaction("kv-store", "readwrite").objectStore("kv-store").delete(key);
        request.onerror = reject;
        request.onsuccess = () => resolve();
      });
    });
  }
};
__name(Cache, "Cache");
_Cache_persistent_directory = /* @__PURE__ */ new WeakMap(), _Cache_persistent = /* @__PURE__ */ new WeakMap(), _Cache_instances = /* @__PURE__ */ new WeakSet(), _Cache_getBrowserDB = /* @__PURE__ */ __name(function _Cache_getBrowserDB2() {
  const indexedDB = Reflect.get(globalThis, "indexedDB") || Reflect.get(globalThis, "webkitIndexedDB") || Reflect.get(globalThis, "mozIndexedDB") || Reflect.get(globalThis, "msIndexedDB");
  if (!indexedDB)
    return console.log("IndexedDB is not supported. No cache will be used.");
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("youtubei.js", 1);
    request.onsuccess = function() {
      resolve(this.result);
    };
    request.onerror = function(event) {
      reject("indexedDB request error");
      console.error(event);
    };
    request.onupgradeneeded = function() {
      const store = this.result.createObjectStore("kv-store", {
        keyPath: "k"
      });
      store.transaction.oncomplete = function() {
        resolve(this.db);
      };
    };
  });
}, "_Cache_getBrowserDB");
Platform.load({
  runtime: "browser",
  server: false,
  info: {
    version: package_default.version,
    bugs_url: package_default.bugs.url,
    repo_url: package_default.homepage.split("#")[0]
  },
  Cache,
  sha1Hash,
  uuidv4() {
    var _a7;
    if ((_a7 = globalThis.crypto) === null || _a7 === void 0 ? void 0 : _a7.randomUUID()) {
      return globalThis.crypto.randomUUID();
    }
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (cc) => {
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
  ReadableStream: globalThis.ReadableStream,
  CustomEvent: globalThis.CustomEvent
});
var web_default = lib_default;
export {
  Actions_default as Actions,
  AppendContinuationItemsAction2 as AppendContinuationItemsAction,
  ClientType,
  clients_exports as Clients,
  Constants_exports as Constants,
  Continuation,
  endpoints_exports as Endpoints,
  EventEmitterLike_default as EventEmitter,
  FormatUtils_default as FormatUtils,
  generator_exports as Generator,
  GridContinuation,
  HTTPClient_default as HTTPClient,
  helpers_exports as Helpers,
  Innertube_default as Innertube,
  ItemSectionContinuation,
  LZW_exports as LZW,
  LiveChatContinuation,
  Log_default as Log,
  managers_exports as Managers,
  misc_exports as Misc,
  mixins_exports as Mixins,
  MusicPlaylistShelfContinuation,
  MusicShelfContinuation,
  NavigateAction,
  OAuth_default as OAuth,
  parser_default as Parser,
  Platform,
  Player,
  PlaylistPanelContinuation,
  proto_default as Proto,
  ReloadContinuationItemsCommand,
  SectionListContinuation,
  Session_default as Session,
  types_exports as Types,
  Cache_default as UniversalCache,
  Utils_exports as Utils,
  youtube_exports as YT,
  ytkids_exports as YTKids,
  ytmusic_exports as YTMusic,
  nodes_exports as YTNodes,
  web_default as default
};
//# sourceMappingURL=browser.js.map
