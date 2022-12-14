"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class ChannelFeaturedContent extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.items = index_1.default.parse(data.items);
    }
}
ChannelFeaturedContent.type = 'ChannelFeaturedContent';
exports.default = ChannelFeaturedContent;
//# sourceMappingURL=ChannelFeaturedContent.js.map