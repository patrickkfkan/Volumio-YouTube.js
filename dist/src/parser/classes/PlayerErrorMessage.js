"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class PlayerErrorMessage extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.subreason = new Text_1.default(data.subreason);
        this.reason = new Text_1.default(data.reason);
        this.proceed_button = index_1.default.parse(data.proceedButton);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.icon_type = data.icon.iconType;
    }
}
PlayerErrorMessage.type = 'PlayerErrorMessage';
exports.default = PlayerErrorMessage;
//# sourceMappingURL=PlayerErrorMessage.js.map