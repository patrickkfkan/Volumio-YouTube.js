"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class BrowserMediaSession extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.album = new Text_1.default(data.album);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnailDetails);
    }
}
BrowserMediaSession.type = 'BrowserMediaSession';
exports.default = BrowserMediaSession;
//# sourceMappingURL=BrowserMediaSession.js.map