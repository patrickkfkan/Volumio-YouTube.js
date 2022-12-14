"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class PlaylistSidebarSecondaryInfo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.owner = index_1.default.parse(data.videoOwner) || null;
        this.button = index_1.default.parse(data.button) || null;
    }
}
PlaylistSidebarSecondaryInfo.type = 'PlaylistSidebarSecondaryInfo';
exports.default = PlaylistSidebarSecondaryInfo;
//# sourceMappingURL=PlaylistSidebarSecondaryInfo.js.map