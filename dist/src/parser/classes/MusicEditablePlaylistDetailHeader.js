"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class MusicEditablePlaylistDetailHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.header = index_1.default.parse(data.header);
        // TODO: Should we also parse data.editHeader.musicPlaylistEditHeaderRenderer?
        // It doesn't seem practical to do so...
    }
}
MusicEditablePlaylistDetailHeader.type = 'MusicEditablePlaylistDetailHeader';
exports.default = MusicEditablePlaylistDetailHeader;
//# sourceMappingURL=MusicEditablePlaylistDetailHeader.js.map