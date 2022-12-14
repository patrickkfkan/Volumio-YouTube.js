"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const MusicTwoRowItem_1 = __importDefault(require("./MusicTwoRowItem"));
const MusicResponsiveListItem_1 = __importDefault(require("./MusicResponsiveListItem"));
const MusicCarouselShelfBasicHeader_1 = __importDefault(require("./MusicCarouselShelfBasicHeader"));
const MusicNavigationButton_1 = __importDefault(require("./MusicNavigationButton"));
const helpers_1 = require("../helpers");
class MusicCarouselShelf extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.header = index_1.default.parseItem(data.header, MusicCarouselShelfBasicHeader_1.default);
        this.contents = index_1.default.parseArray(data.contents, [MusicTwoRowItem_1.default, MusicResponsiveListItem_1.default, MusicNavigationButton_1.default]);
        this.num_items_per_column = Reflect.has(data, 'numItemsPerColumn') ? parseInt(data.numItemsPerColumn) : null;
    }
}
MusicCarouselShelf.type = 'MusicCarouselShelf';
exports.default = MusicCarouselShelf;
//# sourceMappingURL=MusicCarouselShelf.js.map