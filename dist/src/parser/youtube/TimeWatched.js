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
var _TimeWatched_page;
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const ItemSection_1 = __importDefault(require("../classes/ItemSection"));
const SingleColumnBrowseResults_1 = __importDefault(require("../classes/SingleColumnBrowseResults"));
const SectionList_1 = __importDefault(require("../classes/SectionList"));
const Utils_1 = require("../../utils/Utils");
class TimeWatched {
    constructor(response) {
        var _a;
        _TimeWatched_page.set(this, void 0);
        __classPrivateFieldSet(this, _TimeWatched_page, __1.default.parseResponse(response.data), "f");
        const tab = __classPrivateFieldGet(this, _TimeWatched_page, "f").contents.item().as(SingleColumnBrowseResults_1.default).tabs.get({ selected: true });
        if (!tab)
            throw new Utils_1.InnertubeError('Could not find target tab.');
        this.contents = (_a = tab.content) === null || _a === void 0 ? void 0 : _a.as(SectionList_1.default).contents.array().as(ItemSection_1.default);
    }
    get page() {
        return __classPrivateFieldGet(this, _TimeWatched_page, "f");
    }
}
_TimeWatched_page = new WeakMap();
exports.default = TimeWatched;
//# sourceMappingURL=TimeWatched.js.map