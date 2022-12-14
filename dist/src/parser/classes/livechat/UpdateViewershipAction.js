"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("../misc/Text"));
const helpers_1 = require("../../helpers");
class UpdateViewershipAction extends helpers_1.YTNode {
    constructor(data) {
        super();
        const view_count_renderer = data.viewCount.videoViewCountRenderer;
        this.view_count = new Text_1.default(view_count_renderer.viewCount);
        this.extra_short_view_count = new Text_1.default(view_count_renderer.extraShortViewCount);
        this.is_live = view_count_renderer.isLive;
    }
}
UpdateViewershipAction.type = 'UpdateViewershipAction';
exports.default = UpdateViewershipAction;
//# sourceMappingURL=UpdateViewershipAction.js.map