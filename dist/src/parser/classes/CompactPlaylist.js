"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Playlist_1 = __importDefault(require("./Playlist"));
class CompactPlaylist extends Playlist_1.default {
    constructor(data) {
        super(data);
    }
}
CompactPlaylist.type = 'CompactPlaylist';
exports.default = CompactPlaylist;
//# sourceMappingURL=CompactPlaylist.js.map