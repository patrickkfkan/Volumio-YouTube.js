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
var _Recap_page, _Recap_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Playlist_1 = __importDefault(require("./Playlist"));
const MusicHeader_1 = __importDefault(require("../classes/MusicHeader"));
const MusicCarouselShelf_1 = __importDefault(require("../classes/MusicCarouselShelf"));
const MusicElementHeader_1 = __importDefault(require("../classes/MusicElementHeader"));
const HighlightsCarousel_1 = __importDefault(require("../classes/HighlightsCarousel"));
const SingleColumnBrowseResults_1 = __importDefault(require("../classes/SingleColumnBrowseResults"));
const Tab_1 = __importDefault(require("../classes/Tab"));
const ItemSection_1 = __importDefault(require("../classes/ItemSection"));
const SectionList_1 = __importDefault(require("../classes/SectionList"));
const Message_1 = __importDefault(require("../classes/Message"));
const Utils_1 = require("../../utils/Utils");
class Recap {
    constructor(response, actions) {
        var _a, _b, _c;
        _Recap_page.set(this, void 0);
        _Recap_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Recap_page, index_1.default.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _Recap_actions, actions, "f");
        const header = __classPrivateFieldGet(this, _Recap_page, "f").header.item();
        this.header = header.is(MusicElementHeader_1.default) ?
            (_b = (_a = __classPrivateFieldGet(this, _Recap_page, "f").header.item().as(MusicElementHeader_1.default).element) === null || _a === void 0 ? void 0 : _a.model) === null || _b === void 0 ? void 0 : _b.item().as(HighlightsCarousel_1.default) :
            __classPrivateFieldGet(this, _Recap_page, "f").header.item().as(MusicHeader_1.default);
        const tab = __classPrivateFieldGet(this, _Recap_page, "f").contents.item().as(SingleColumnBrowseResults_1.default).tabs.firstOfType(Tab_1.default);
        if (!tab)
            throw new Utils_1.InnertubeError('Target tab not found');
        this.sections = (_c = tab.content) === null || _c === void 0 ? void 0 : _c.as(SectionList_1.default).contents.array().as(ItemSection_1.default, MusicCarouselShelf_1.default, Message_1.default);
    }
    /**
     * Retrieves recap playlist.
     */
    getPlaylist() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.header)
                throw new Utils_1.InnertubeError('Header not found');
            if (!this.header.is(HighlightsCarousel_1.default))
                throw new Utils_1.InnertubeError('Recap playlist not available, check back later.');
            const endpoint = this.header.panels[0].text_on_tap_endpoint;
            const response = yield endpoint.callTest(__classPrivateFieldGet(this, _Recap_actions, "f"), { client: 'YTMUSIC' });
            return new Playlist_1.default(response, __classPrivateFieldGet(this, _Recap_actions, "f"));
        });
    }
    get page() {
        return __classPrivateFieldGet(this, _Recap_page, "f");
    }
}
_Recap_page = new WeakMap(), _Recap_actions = new WeakMap();
exports.default = Recap;
//# sourceMappingURL=Recap.js.map