"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
const Menu_1 = __importDefault(require("./menus/Menu"));
class VideoPrimaryInfo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.super_title_link = new Text_1.default(data.superTitleLink);
        this.view_count = new Text_1.default(data.viewCount.videoViewCountRenderer.viewCount);
        this.short_view_count = new Text_1.default(data.viewCount.videoViewCountRenderer.shortViewCount);
        this.published = new Text_1.default(data.dateText);
        this.menu = index_1.default.parseItem(data.videoActions, Menu_1.default);
    }
}
VideoPrimaryInfo.type = 'VideoPrimaryInfo';
exports.default = VideoPrimaryInfo;
//# sourceMappingURL=VideoPrimaryInfo.js.map