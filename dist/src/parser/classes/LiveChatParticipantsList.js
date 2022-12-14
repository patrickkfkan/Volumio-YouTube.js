"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class LiveChatParticipantsList extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.participants = index_1.default.parse(data.participants);
    }
}
LiveChatParticipantsList.type = 'LiveChatParticipantsList';
exports.default = LiveChatParticipantsList;
//# sourceMappingURL=LiveChatParticipantsList.js.map