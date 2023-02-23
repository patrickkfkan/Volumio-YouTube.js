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
var _AccountInfo_page;
import Parser from '../index.js';
import AccountSectionList from '../classes/AccountSectionList.js';
import { InnertubeError } from '../../utils/Utils.js';
class AccountInfo {
    constructor(response) {
        _AccountInfo_page.set(this, void 0);
        __classPrivateFieldSet(this, _AccountInfo_page, Parser.parseResponse(response.data), "f");
        if (!__classPrivateFieldGet(this, _AccountInfo_page, "f").contents)
            throw new InnertubeError('Page contents not found');
        const account_section_list = __classPrivateFieldGet(this, _AccountInfo_page, "f").contents.array().as(AccountSectionList).first();
        if (!account_section_list)
            throw new InnertubeError('Account section list not found');
        this.contents = account_section_list.contents;
        this.footers = account_section_list.footers;
    }
    get page() {
        return __classPrivateFieldGet(this, _AccountInfo_page, "f");
    }
}
_AccountInfo_page = new WeakMap();
export default AccountInfo;
//# sourceMappingURL=AccountInfo.js.map