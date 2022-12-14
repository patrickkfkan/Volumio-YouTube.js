"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class LikeButton extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.target = {
            video_id: data.target.videoId
        };
        this.like_status = data.likeStatus;
        this.likes_allowed = data.likesAllowed;
        if (data.serviceEndpoints) {
            this.endpoints = (_a = data.serviceEndpoints) === null || _a === void 0 ? void 0 : _a.map((endpoint) => new NavigationEndpoint_1.default(endpoint));
        }
    }
}
LikeButton.type = 'LikeButton';
exports.default = LikeButton;
//# sourceMappingURL=LikeButton.js.map