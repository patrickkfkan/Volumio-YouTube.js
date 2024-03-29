var _EventEmitterLike_legacy_listeners;
import { __classPrivateFieldGet } from "tslib";
import { Platform } from './Utils.js';
/*** Volumio-YouTube.js ***/
// eslint-disable-next-line
require('event-target-polyfill');
class EventEmitterLike extends EventTarget {
    constructor() {
        super();
        _EventEmitterLike_legacy_listeners.set(this, new Map());
    }
    emit(type, ...args) {
        const event = new Platform.shim.CustomEvent(type, { detail: args });
        this.dispatchEvent(event);
    }
    on(type, listener) {
        const wrapper = (ev) => {
            if (ev instanceof Platform.shim.CustomEvent) {
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
            if (ev instanceof Platform.shim.CustomEvent) {
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
_EventEmitterLike_legacy_listeners = new WeakMap();
export default EventEmitterLike;
//# sourceMappingURL=EventEmitterLike.js.map