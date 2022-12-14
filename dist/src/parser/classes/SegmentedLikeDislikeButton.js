"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const ToggleButton_1 = __importDefault(require("./ToggleButton"));
const helpers_1 = require("../helpers");
class SegmentedLikeDislikeButton extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.like_button = __1.default.parseItem(data.likeButton, ToggleButton_1.default);
        this.dislike_button = __1.default.parseItem(data.dislikeButton, ToggleButton_1.default);
    }
}
SegmentedLikeDislikeButton.type = 'SegmentedLikeDislikeButton';
exports.default = SegmentedLikeDislikeButton;
//# sourceMappingURL=SegmentedLikeDislikeButton.js.map