"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _TabbedFeed_tabs, _TabbedFeed_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const Tab_1 = __importDefault(require("../parser/classes/Tab"));
const Utils_1 = require("../utils/Utils");
const Feed_1 = __importDefault(require("./Feed"));
class TabbedFeed extends Feed_1.default {
    constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        _TabbedFeed_tabs.set(this, void 0);
        _TabbedFeed_actions.set(this, void 0);
        __classPrivateFieldSet(this, _TabbedFeed_actions, actions, "f");
        __classPrivateFieldSet(this, _TabbedFeed_tabs, this.page.contents_memo.getType(Tab_1.default), "f");
    }
    get tabs() {
        return __classPrivateFieldGet(this, _TabbedFeed_tabs, "f").map((tab) => tab.title.toString());
    }
    getTab(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = __classPrivateFieldGet(this, _TabbedFeed_tabs, "f").find((tab) => tab.title.toLowerCase() === title.toLowerCase());
            if (!tab)
                throw new Utils_1.InnertubeError(`Tab "${title}" not found`);
            if (tab.selected)
                return this;
            const response = yield tab.endpoint.call(__classPrivateFieldGet(this, _TabbedFeed_actions, "f"));
            if (!response)
                throw new Utils_1.InnertubeError('Failed to call endpoint');
            return new TabbedFeed(__classPrivateFieldGet(this, _TabbedFeed_actions, "f"), response.data, false);
        });
    }
    get title() {
        var _a, _b;
        return (_b = (_a = this.page.contents_memo.getType(Tab_1.default)) === null || _a === void 0 ? void 0 : _a.find((tab) => tab.selected)) === null || _b === void 0 ? void 0 : _b.title.toString();
    }
}
_TabbedFeed_tabs = new WeakMap(), _TabbedFeed_actions = new WeakMap();
exports.default = TabbedFeed;
//# sourceMappingURL=TabbedFeed.js.map