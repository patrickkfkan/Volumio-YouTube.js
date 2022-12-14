"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MetadataBadge_1 = __importDefault(require("./MetadataBadge"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
class LiveChatAuthorBadge extends MetadataBadge_1.default {
    constructor(data) {
        super(data);
        this.custom_thumbnail = data.customThumbnail ? Thumbnail_1.default.fromResponse(data.customThumbnail) : null;
    }
}
LiveChatAuthorBadge.type = 'LiveChatAuthorBadge';
exports.default = LiveChatAuthorBadge;
//# sourceMappingURL=LiveChatAuthorBadge.js.map