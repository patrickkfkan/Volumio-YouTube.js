"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const helpers_1 = require("../../helpers");
class ReplayChatItemAction extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.actions = index_1.default.parse((_a = data.actions) === null || _a === void 0 ? void 0 : _a.map((action) => {
            delete action.clickTrackingParams;
            return action;
        })) || [];
        this.video_offset_time_msec = data.videoOffsetTimeMsec;
    }
}
ReplayChatItemAction.type = 'ReplayChatItemAction';
exports.default = ReplayChatItemAction;
//# sourceMappingURL=ReplayChatItemAction.js.map