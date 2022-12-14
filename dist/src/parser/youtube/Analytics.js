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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Analytics_page;
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Element_1 = __importDefault(require("../classes/Element"));
class Analytics {
    constructor(response) {
        var _a, _b;
        _Analytics_page.set(this, void 0);
        __classPrivateFieldSet(this, _Analytics_page, __1.default.parseResponse(response.data), "f");
        this.sections = (_b = (_a = __classPrivateFieldGet(this, _Analytics_page, "f").contents_memo) === null || _a === void 0 ? void 0 : _a.get('Element')) === null || _b === void 0 ? void 0 : _b.map((el) => { var _a; return (_a = el.as(Element_1.default).model) === null || _a === void 0 ? void 0 : _a.item(); });
    }
    get page() {
        return __classPrivateFieldGet(this, _Analytics_page, "f");
    }
}
_Analytics_page = new WeakMap();
exports.default = Analytics;
//# sourceMappingURL=Analytics.js.map