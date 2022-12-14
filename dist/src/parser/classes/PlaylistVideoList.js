"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class PlaylistVideoList extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.playlistId;
        this.is_editable = data.isEditable;
        this.can_reorder = data.canReorder;
        this.videos = index_1.default.parse(data.contents);
    }
}
PlaylistVideoList.type = 'PlaylistVideoList';
exports.default = PlaylistVideoList;
//# sourceMappingURL=PlaylistVideoList.js.map