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
var _Playlist_instances, _Playlist_page, _Playlist_actions, _Playlist_continuation, _Playlist_suggestions_continuation, _Playlist_last_fetched_suggestions, _Playlist_fetchSuggestions;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importStar(require("../index"));
const MusicCarouselShelf_1 = __importDefault(require("../classes/MusicCarouselShelf"));
const MusicPlaylistShelf_1 = __importDefault(require("../classes/MusicPlaylistShelf"));
const SectionList_1 = __importDefault(require("../classes/SectionList"));
const Utils_1 = require("../../utils/Utils");
const MusicEditablePlaylistDetailHeader_1 = __importDefault(require("../classes/MusicEditablePlaylistDetailHeader"));
const MusicShelf_1 = __importDefault(require("../classes/MusicShelf"));
class Playlist {
    constructor(response, actions) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        _Playlist_instances.add(this);
        _Playlist_page.set(this, void 0);
        _Playlist_actions.set(this, void 0);
        _Playlist_continuation.set(this, void 0);
        _Playlist_suggestions_continuation.set(this, void 0);
        _Playlist_last_fetched_suggestions.set(this, void 0);
        __classPrivateFieldSet(this, _Playlist_actions, actions, "f");
        __classPrivateFieldSet(this, _Playlist_page, index_1.default.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _Playlist_actions, actions, "f");
        __classPrivateFieldSet(this, _Playlist_suggestions_continuation, ((_b = (_a = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo.getType(MusicShelf_1.default)) === null || _a === void 0 ? void 0 : _a.find((shelf) => shelf.title.toString() === 'Suggestions')) === null || _b === void 0 ? void 0 : _b.continuation) || null, "f");
        __classPrivateFieldSet(this, _Playlist_last_fetched_suggestions, null, "f");
        if (__classPrivateFieldGet(this, _Playlist_page, "f").continuation_contents) {
            const data = (_c = __classPrivateFieldGet(this, _Playlist_page, "f").continuation_contents) === null || _c === void 0 ? void 0 : _c.as(index_1.MusicPlaylistShelfContinuation);
            this.items = data.contents;
            __classPrivateFieldSet(this, _Playlist_continuation, data.continuation, "f");
        }
        else {
            if (((_d = __classPrivateFieldGet(this, _Playlist_page, "f").header) === null || _d === void 0 ? void 0 : _d.item().type) === 'MusicEditablePlaylistDetailHeader') {
                this.header = (_e = __classPrivateFieldGet(this, _Playlist_page, "f").header) === null || _e === void 0 ? void 0 : _e.item().as(MusicEditablePlaylistDetailHeader_1.default).header.item();
            }
            else {
                this.header = ((_f = __classPrivateFieldGet(this, _Playlist_page, "f").header) === null || _f === void 0 ? void 0 : _f.item()) || null;
            }
            this.items = (_g = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo.getType(MusicPlaylistShelf_1.default)) === null || _g === void 0 ? void 0 : _g[0].contents;
            __classPrivateFieldSet(this, _Playlist_continuation, ((_h = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo.getType(MusicPlaylistShelf_1.default)) === null || _h === void 0 ? void 0 : _h[0].continuation) || null, "f");
        }
    }
    get page() {
        return __classPrivateFieldGet(this, _Playlist_page, "f");
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _Playlist_continuation, "f");
    }
    /**
     * Retrieves playlist item continuation.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _Playlist_continuation, "f")) {
                const response = yield __classPrivateFieldGet(this, _Playlist_actions, "f").browse(__classPrivateFieldGet(this, _Playlist_continuation, "f"), { is_ctoken: true, client: 'YTMUSIC' });
                return new Playlist(response, __classPrivateFieldGet(this, _Playlist_actions, "f"));
            }
            throw new Utils_1.InnertubeError('Continuation not found.');
        });
    }
    /**
     * Retrieves related playlists
     */
    getRelated() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let section_continuation = (_a = __classPrivateFieldGet(this, _Playlist_page, "f").contents_memo.get('SectionList')) === null || _a === void 0 ? void 0 : _a[0].as(SectionList_1.default).continuation;
            while (section_continuation) {
                const response = yield __classPrivateFieldGet(this, _Playlist_actions, "f").browse(section_continuation, { is_ctoken: true, client: 'YTMUSIC' });
                const data = index_1.default.parseResponse(response.data);
                const section_list = (_b = data.continuation_contents) === null || _b === void 0 ? void 0 : _b.as(index_1.SectionListContinuation);
                const sections = (_c = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _c === void 0 ? void 0 : _c.as(MusicCarouselShelf_1.default);
                const related = sections === null || sections === void 0 ? void 0 : sections.filter((section) => { var _a; return ((_a = section.header) === null || _a === void 0 ? void 0 : _a.title.toString()) === 'Related playlists'; })[0];
                if (related) {
                    return related.contents || [];
                }
                section_continuation = section_list === null || section_list === void 0 ? void 0 : section_list.continuation;
            }
            return [];
        });
    }
    getSuggestions(refresh = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const require_fetch = refresh || !__classPrivateFieldGet(this, _Playlist_last_fetched_suggestions, "f");
            const fetch_promise = require_fetch ? __classPrivateFieldGet(this, _Playlist_instances, "m", _Playlist_fetchSuggestions).call(this, __classPrivateFieldGet(this, _Playlist_suggestions_continuation, "f")) : Promise.resolve(null);
            const fetch_result = yield fetch_promise;
            if (fetch_result) {
                __classPrivateFieldSet(this, _Playlist_last_fetched_suggestions, fetch_result.items, "f");
                __classPrivateFieldSet(this, _Playlist_suggestions_continuation, fetch_result.continuation, "f");
            }
            return (fetch_result === null || fetch_result === void 0 ? void 0 : fetch_result.items) || __classPrivateFieldGet(this, _Playlist_last_fetched_suggestions, "f");
        });
    }
}
_Playlist_page = new WeakMap(), _Playlist_actions = new WeakMap(), _Playlist_continuation = new WeakMap(), _Playlist_suggestions_continuation = new WeakMap(), _Playlist_last_fetched_suggestions = new WeakMap(), _Playlist_instances = new WeakSet(), _Playlist_fetchSuggestions = function _Playlist_fetchSuggestions(continuation) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (continuation) {
            const response = yield __classPrivateFieldGet(this, _Playlist_actions, "f").browse(continuation, { is_ctoken: true, client: 'YTMUSIC' });
            const page = index_1.default.parseResponse(response.data);
            const data = (_a = page.continuation_contents) === null || _a === void 0 ? void 0 : _a.as(index_1.MusicShelfContinuation);
            return {
                items: (data === null || data === void 0 ? void 0 : data.contents) || [],
                continuation: (data === null || data === void 0 ? void 0 : data.continuation) || null
            };
        }
        return {
            items: [],
            continuation: null
        };
    });
};
exports.default = Playlist;
//# sourceMappingURL=Playlist.js.map