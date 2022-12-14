"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const PlaylistAuthor_1 = __importDefault(require("./misc/PlaylistAuthor"));
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class PlaylistHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.playlistId;
        this.title = new Text_1.default(data.title);
        this.stats = data.stats.map((stat) => new Text_1.default(stat));
        this.brief_stats = data.briefStats.map((stat) => new Text_1.default(stat));
        this.author = new PlaylistAuthor_1.default(Object.assign(Object.assign({}, data.ownerText), { navigationEndpoint: data.ownerEndpoint }), data.ownerBadges, null);
        this.description = new Text_1.default(data.descriptionText);
        this.num_videos = new Text_1.default(data.numVideosText);
        this.view_count = new Text_1.default(data.viewCountText);
        this.can_share = data.shareData.canShare;
        this.can_delete = data.editableDetails.canDelete;
        this.is_editable = data.isEditable;
        this.privacy = data.privacy;
        this.save_button = index_1.default.parse(data.saveButton);
        this.shuffle_play_button = index_1.default.parse(data.shufflePlayButton);
        this.menu = index_1.default.parse(data.moreActionsMenu);
    }
}
PlaylistHeader.type = 'PlaylistHeader';
exports.default = PlaylistHeader;
//# sourceMappingURL=PlaylistHeader.js.map