"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
class MusicDownloadStateBadge extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.playlist_id = data.playlistId;
        this.supported_download_states = data.supportedDownloadStates;
    }
}
MusicDownloadStateBadge.type = 'MusicDownloadStateBadge';
exports.default = MusicDownloadStateBadge;
//# sourceMappingURL=MusicDownloadStateBadge.js.map