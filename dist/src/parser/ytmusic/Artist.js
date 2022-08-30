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
var _Artist_page, _Artist_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Utils_1 = require("../../utils/Utils");
const MusicPlaylistShelf_1 = __importDefault(require("../classes/MusicPlaylistShelf"));
const MusicImmersiveHeader_1 = __importDefault(require("../classes/MusicImmersiveHeader"));
class Artist {
    constructor(response, actions) {
        _Artist_page.set(this, void 0);
        _Artist_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Artist_page, index_1.default.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _Artist_actions, actions, "f");
        this.header = this.page.header.item().as(MusicImmersiveHeader_1.default);
        const music_shelf = __classPrivateFieldGet(this, _Artist_page, "f").contents_memo.get('MusicShelf') || [];
        const music_carousel_shelf = __classPrivateFieldGet(this, _Artist_page, "f").contents_memo.get('MusicCarouselShelf') || [];
        this.sections = [...music_shelf, ...music_carousel_shelf];
    }
    getAllSongs() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const music_shelves = this.sections.filter((section) => section.type === 'MusicShelf');
            if (!music_shelves.length)
                throw new Utils_1.InnertubeError('Could not find any node of type MusicShelf.');
            const shelf = music_shelves.find((shelf) => shelf.title.toString() === 'Songs');
            if (!shelf)
                throw new Utils_1.InnertubeError('Could not find target shelf (Songs).');
            if (!shelf.endpoint)
                throw new Utils_1.InnertubeError('Target shelf (Songs) did not have an endpoint.');
            const page = yield shelf.endpoint.call(__classPrivateFieldGet(this, _Artist_actions, "f"), 'YTMUSIC', true);
            const contents = ((_b = (_a = page.contents_memo.get('MusicPlaylistShelf')) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.as(MusicPlaylistShelf_1.default)) || null;
            return contents;
        });
    }
    get page() {
        return __classPrivateFieldGet(this, _Artist_page, "f");
    }
}
_Artist_page = new WeakMap(), _Artist_actions = new WeakMap();
exports.default = Artist;
//# sourceMappingURL=Artist.js.map