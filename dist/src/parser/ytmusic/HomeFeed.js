"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var _HomeFeed_page, _HomeFeed_actions, _HomeFeed_continuation;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importStar(require("../index"));
const Utils_1 = require("../../utils/Utils");
const SectionList_1 = __importDefault(require("../classes/SectionList"));
const SingleColumnBrowseResults_1 = __importDefault(require("../classes/SingleColumnBrowseResults"));
const MusicCarouselShelf_1 = __importDefault(require("../classes/MusicCarouselShelf"));
class HomeFeed {
    constructor(response, actions) {
        var _a, _b, _c;
        _HomeFeed_page.set(this, void 0);
        _HomeFeed_actions.set(this, void 0);
        _HomeFeed_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _HomeFeed_actions, actions, "f");
        __classPrivateFieldSet(this, _HomeFeed_page, index_1.default.parseResponse(response.data), "f");
        const tab = __classPrivateFieldGet(this, _HomeFeed_page, "f").contents.item().as(SingleColumnBrowseResults_1.default).tabs.get({ selected: true });
        if (!tab)
            throw new Utils_1.InnertubeError('Could not get Home tab.');
        if (tab.key('content').isNull()) {
            if (!__classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents)
                throw new Utils_1.InnertubeError('Continuation did not have any content.');
            __classPrivateFieldSet(this, _HomeFeed_continuation, __classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents.as(index_1.SectionListContinuation).continuation, "f");
            this.sections = (_a = __classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents.as(index_1.SectionListContinuation).contents) === null || _a === void 0 ? void 0 : _a.as(MusicCarouselShelf_1.default);
            return;
        }
        __classPrivateFieldSet(this, _HomeFeed_continuation, (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(SectionList_1.default).continuation, "f");
        this.sections = (_c = tab.content) === null || _c === void 0 ? void 0 : _c.as(SectionList_1.default).contents.array().as(MusicCarouselShelf_1.default);
    }
    /**
     * Retrieves home feed continuation.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _HomeFeed_continuation, "f"))
                throw new Utils_1.InnertubeError('Continuation not found.');
            const response = yield __classPrivateFieldGet(this, _HomeFeed_actions, "f").browse(__classPrivateFieldGet(this, _HomeFeed_continuation, "f"), { is_ctoken: true, client: 'YTMUSIC' });
            return new HomeFeed(response, __classPrivateFieldGet(this, _HomeFeed_actions, "f"));
        });
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _HomeFeed_continuation, "f");
    }
    get page() {
        return __classPrivateFieldGet(this, _HomeFeed_page, "f");
    }
}
_HomeFeed_page = new WeakMap(), _HomeFeed_actions = new WeakMap(), _HomeFeed_continuation = new WeakMap();
exports.default = HomeFeed;
//# sourceMappingURL=HomeFeed.js.map