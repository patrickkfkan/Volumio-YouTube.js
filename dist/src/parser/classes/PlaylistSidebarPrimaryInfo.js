"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class PlaylistSidebarPrimaryInfo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.stats = data.stats.map((stat) => new Text_1.default(stat));
        this.thumbnail_renderer = index_1.default.parse(data.thumbnailRenderer);
        this.title = new Text_1.default(data.title);
        this.menu = data.menu && index_1.default.parse(data.menu);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.description = new Text_1.default(data.description);
    }
}
PlaylistSidebarPrimaryInfo.type = 'PlaylistSidebarPrimaryInfo';
exports.default = PlaylistSidebarPrimaryInfo;
//# sourceMappingURL=PlaylistSidebarPrimaryInfo.js.map