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
var _AccountInfo_page;
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const AccountSectionList_1 = __importDefault(require("../classes/AccountSectionList"));
class AccountInfo {
    constructor(response) {
        _AccountInfo_page.set(this, void 0);
        __classPrivateFieldSet(this, _AccountInfo_page, __1.default.parseResponse(response.data), "f");
        const account_section_list = __classPrivateFieldGet(this, _AccountInfo_page, "f").contents.array().as(AccountSectionList_1.default)[0];
        this.contents = account_section_list.contents;
        this.footers = account_section_list.footers;
    }
    get page() {
        return __classPrivateFieldGet(this, _AccountInfo_page, "f");
    }
}
_AccountInfo_page = new WeakMap();
exports.default = AccountInfo;
//# sourceMappingURL=AccountInfo.js.map