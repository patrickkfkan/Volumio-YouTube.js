"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class ProfileColumnUserInfo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
    }
}
ProfileColumnUserInfo.type = 'ProfileColumnUserInfo';
exports.default = ProfileColumnUserInfo;
//# sourceMappingURL=ProfileColumnUserInfo.js.map