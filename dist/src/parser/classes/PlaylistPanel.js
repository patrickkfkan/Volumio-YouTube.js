"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class PlaylistPanel extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        super();
        this.title = data.title;
        this.title_text = new Text_1.default(data.titleText);
        this.contents = index_1.default.parseArray(data.contents);
        this.playlist_id = data.playlistId;
        this.is_infinite = data.isInfinite;
        this.continuation = ((_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.nextRadioContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || ((_f = (_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.nextContinuationData) === null || _f === void 0 ? void 0 : _f.continuation);
        this.is_editable = data.isEditable;
        this.preview_description = data.previewDescription;
        this.num_items_to_show = data.numItemsToShow;
    }
}
PlaylistPanel.type = 'PlaylistPanel';
exports.default = PlaylistPanel;
//# sourceMappingURL=PlaylistPanel.js.map