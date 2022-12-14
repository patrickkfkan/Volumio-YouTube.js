"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const MusicResponsiveListItem_1 = __importDefault(require("./MusicResponsiveListItem"));
const helpers_1 = require("../helpers");
class MusicPlaylistShelf extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.playlist_id = data.playlistId;
        this.contents = index_1.default.parseArray(data.contents, MusicResponsiveListItem_1.default);
        this.collapsed_item_count = data.collapsedItemCount;
        this.continuation = ((_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || null;
    }
}
MusicPlaylistShelf.type = 'MusicPlaylistShelf';
exports.default = MusicPlaylistShelf;
//# sourceMappingURL=MusicPlaylistShelf.js.map