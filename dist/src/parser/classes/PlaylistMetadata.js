"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
class PlaylistMetadata extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        this.description = data.description || null;
        // XXX: Appindexing should be in microformat
    }
}
PlaylistMetadata.type = 'PlaylistMetadata';
exports.default = PlaylistMetadata;
//# sourceMappingURL=PlaylistMetadata.js.map