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
var _Analytics_page;
import Parser from '../index.js';
import Element from '../classes/Element.js';
class Analytics {
    constructor(response) {
        var _a;
        _Analytics_page.set(this, void 0);
        __classPrivateFieldSet(this, _Analytics_page, Parser.parseResponse(response.data), "f");
        this.sections = (_a = __classPrivateFieldGet(this, _Analytics_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.getType(Element).map((el) => { var _a; return (_a = el.model) === null || _a === void 0 ? void 0 : _a.item(); }).flatMap((el) => !el ? [] : el);
    }
    get page() {
        return __classPrivateFieldGet(this, _Analytics_page, "f");
    }
}
_Analytics_page = new WeakMap();
export default Analytics;
//# sourceMappingURL=Analytics.js.map