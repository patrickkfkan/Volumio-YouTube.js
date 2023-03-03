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
var _Guide_page;
import { Parser } from '../index.js';
import GuideSection from '../classes/GuideSection.js';
import GuideSubscriptionsSection from '../classes/GuideSubscriptionsSection.js';
export default class Guide {
    constructor(data) {
        _Guide_page.set(this, void 0);
        __classPrivateFieldSet(this, _Guide_page, Parser.parseResponse(data), "f");
        this.contents = __classPrivateFieldGet(this, _Guide_page, "f").items.array().as(GuideSection, GuideSubscriptionsSection);
    }
}
_Guide_page = new WeakMap();
//# sourceMappingURL=Guide.js.map