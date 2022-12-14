"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
class AutomixPreviewVideo extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b;
        super();
        if ((_b = (_a = data === null || data === void 0 ? void 0 : data.content) === null || _a === void 0 ? void 0 : _a.automixPlaylistVideoRenderer) === null || _b === void 0 ? void 0 : _b.navigationEndpoint) {
            this.playlist_video = {
                endpoint: new NavigationEndpoint_1.default(data.content.automixPlaylistVideoRenderer.navigationEndpoint)
            };
        }
    }
}
AutomixPreviewVideo.type = 'AutomixPreviewVideo';
exports.default = AutomixPreviewVideo;
//# sourceMappingURL=AutomixPreviewVideo.js.map