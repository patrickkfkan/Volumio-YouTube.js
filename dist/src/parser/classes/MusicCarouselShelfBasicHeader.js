"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
const MusicThumbnail_1 = __importDefault(require("./MusicThumbnail"));
const __1 = __importDefault(require(".."));
const Button_1 = __importDefault(require("./Button"));
const IconLink_1 = __importDefault(require("./IconLink"));
class MusicCarouselShelfBasicHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        if (data.strapline) {
            this.strapline = new Text_1.default(data.strapline);
        }
        this.title = new Text_1.default(data.title);
        // This.label = data.accessibilityData.accessibilityData.label;
        // ^^ redundant?
        if (data.thumbnail) {
            this.thumbnail = __1.default.parseItem(data.thumbnail, MusicThumbnail_1.default);
        }
        if (data.moreContentButton) {
            this.more_content = __1.default.parseItem(data.moreContentButton, Button_1.default);
        }
        if (data.endIcons) {
            this.end_icons = __1.default.parseArray(data.endIcons, IconLink_1.default);
        }
    }
}
MusicCarouselShelfBasicHeader.type = 'MusicCarouselShelfBasicHeader';
exports.default = MusicCarouselShelfBasicHeader;
//# sourceMappingURL=MusicCarouselShelfBasicHeader.js.map