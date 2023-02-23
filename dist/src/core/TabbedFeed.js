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
var _TabbedFeed_tabs, _TabbedFeed_actions;
import Tab from '../parser/classes/Tab.js';
import Feed from './Feed.js';
import { InnertubeError } from '../utils/Utils.js';
class TabbedFeed extends Feed {
    constructor(actions, data, already_parsed = false) {
        var _a;
        super(actions, data, already_parsed);
        _TabbedFeed_tabs.set(this, void 0);
        _TabbedFeed_actions.set(this, void 0);
        __classPrivateFieldSet(this, _TabbedFeed_actions, actions, "f");
        __classPrivateFieldSet(this, _TabbedFeed_tabs, (_a = this.page.contents_memo) === null || _a === void 0 ? void 0 : _a.getType(Tab), "f");
    }
    get tabs() {
        var _a, _b;
        return (_b = (_a = __classPrivateFieldGet(this, _TabbedFeed_tabs, "f")) === null || _a === void 0 ? void 0 : _a.map((tab) => tab.title.toString())) !== null && _b !== void 0 ? _b : [];
    }
    getTabByName(title) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const tab = (_a = __classPrivateFieldGet(this, _TabbedFeed_tabs, "f")) === null || _a === void 0 ? void 0 : _a.find((tab) => tab.title.toLowerCase() === title.toLowerCase());
            if (!tab)
                throw new InnertubeError(`Tab "${title}" not found`);
            if (tab.selected)
                return this;
            const response = yield tab.endpoint.call(__classPrivateFieldGet(this, _TabbedFeed_actions, "f"));
            return new TabbedFeed(__classPrivateFieldGet(this, _TabbedFeed_actions, "f"), response, false);
        });
    }
    getTabByURL(url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const tab = (_a = __classPrivateFieldGet(this, _TabbedFeed_tabs, "f")) === null || _a === void 0 ? void 0 : _a.find((tab) => { var _a; return ((_a = tab.endpoint.metadata.url) === null || _a === void 0 ? void 0 : _a.split('/').pop()) === url; });
            if (!tab)
                throw new InnertubeError(`Tab "${url}" not found`);
            if (tab.selected)
                return this;
            const response = yield tab.endpoint.call(__classPrivateFieldGet(this, _TabbedFeed_actions, "f"));
            return new TabbedFeed(__classPrivateFieldGet(this, _TabbedFeed_actions, "f"), response, false);
        });
    }
    hasTabWithURL(url) {
        var _a, _b;
        return (_b = (_a = __classPrivateFieldGet(this, _TabbedFeed_tabs, "f")) === null || _a === void 0 ? void 0 : _a.some((tab) => { var _a; return ((_a = tab.endpoint.metadata.url) === null || _a === void 0 ? void 0 : _a.split('/').pop()) === url; })) !== null && _b !== void 0 ? _b : false;
    }
    get title() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.page.contents_memo) === null || _a === void 0 ? void 0 : _a.getType(Tab)) === null || _b === void 0 ? void 0 : _b.find((tab) => tab.selected)) === null || _c === void 0 ? void 0 : _c.title.toString();
    }
}
_TabbedFeed_tabs = new WeakMap(), _TabbedFeed_actions = new WeakMap();
export default TabbedFeed;
//# sourceMappingURL=TabbedFeed.js.map