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
var _Album_page, _Album_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const MusicDetailHeader_1 = __importDefault(require("../classes/MusicDetailHeader"));
const MicroformatData_1 = __importDefault(require("../classes/MicroformatData"));
const MusicShelf_1 = __importDefault(require("../classes/MusicShelf"));
class Album {
    constructor(response, actions) {
        var _a, _b;
        _Album_page.set(this, void 0);
        _Album_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Album_page, index_1.default.parseResponse(response.data), "f");
        __classPrivateFieldSet(this, _Album_actions, actions, "f");
        this.header = __classPrivateFieldGet(this, _Album_page, "f").header.item().as(MusicDetailHeader_1.default);
        this.url = ((_a = __classPrivateFieldGet(this, _Album_page, "f").microformat) === null || _a === void 0 ? void 0 : _a.as(MicroformatData_1.default).url_canonical) || null;
        this.contents = (_b = __classPrivateFieldGet(this, _Album_page, "f").contents_memo.get('MusicShelf')) === null || _b === void 0 ? void 0 : _b[0].as(MusicShelf_1.default).contents;
        this.sections = __classPrivateFieldGet(this, _Album_page, "f").contents_memo.get('MusicCarouselShelf') || [];
    }
    get page() {
        return __classPrivateFieldGet(this, _Album_page, "f");
    }
}
_Album_page = new WeakMap(), _Album_actions = new WeakMap();
exports.default = Album;
//# sourceMappingURL=Album.js.map