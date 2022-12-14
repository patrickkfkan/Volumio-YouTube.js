"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class LiveChatParticipant extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.name = new Text_1.default(data.authorName);
        this.photo = Thumbnail_1.default.fromResponse(data.authorPhoto);
        this.badges = index_1.default.parse(data.authorBadges);
    }
}
LiveChatParticipant.type = 'LiveChatParticipant';
exports.default = LiveChatParticipant;
//# sourceMappingURL=LiveChatParticipant.js.map