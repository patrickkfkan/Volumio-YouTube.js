"use strict";
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
var _CustomEvent_detail, _EventEmitterLike_legacy_listeners;
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line
require('event-target-polyfill');
// Polyfill CustomEvents on node
if (!Reflect.has(globalThis, 'CustomEvent')) {
    // See https://github.com/nodejs/node/issues/40678#issuecomment-1126944677
    class CustomEvent extends Event {
        constructor(type, options) {
            var _a;
            super(type, options);
            _CustomEvent_detail.set(this, void 0);
            __classPrivateFieldSet(this, _CustomEvent_detail, (_a = options === null || options === void 0 ? void 0 : options.detail) !== null && _a !== void 0 ? _a : null, "f");
        }
        get detail() {
            return __classPrivateFieldGet(this, _CustomEvent_detail, "f");
        }
    }
    _CustomEvent_detail = new WeakMap();
    Reflect.set(globalThis, 'CustomEvent', CustomEvent);
}
class EventEmitterLike extends EventTarget {
    constructor() {
        super();
        _EventEmitterLike_legacy_listeners.set(this, new Map());
    }
    emit(type, ...args) {
        const event = new CustomEvent(type, { detail: args });
        this.dispatchEvent(event);
    }
    on(type, listener) {
        const wrapper = (ev) => {
            if (ev instanceof CustomEvent) {
                listener(...ev.detail);
            }
            else {
                listener(ev);
            }
        };
        __classPrivateFieldGet(this, _EventEmitterLike_legacy_listeners, "f").set(listener, wrapper);
        this.addEventListener(type, wrapper);
    }
    once(type, listener) {
        const wrapper = (ev) => {
            if (ev instanceof CustomEvent) {
                listener(...ev.detail);
            }
            else {
                listener(ev);
            }
            this.off(type, listener);
        };
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
}
exports.default = EventEmitterLike;
_EventEmitterLike_legacy_listeners = new WeakMap();
//# sourceMappingURL=EventEmitterLike.js.map