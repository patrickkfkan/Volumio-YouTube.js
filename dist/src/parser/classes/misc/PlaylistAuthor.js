"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("./Author"));
class PlaylistAuthor extends Author_1.default {
    constructor(item, badges, thumbs) {
        super(item, badges, thumbs);
        delete this.badges;
        delete this.is_verified;
        delete this.is_verified_artist;
    }
}
exports.default = PlaylistAuthor;
//# sourceMappingURL=PlaylistAuthor.js.map