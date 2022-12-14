"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Text_1 = __importDefault(require("./misc/Text"));
const Utils_1 = require("../../utils/Utils");
const helpers_1 = require("../helpers");
class ChildVideo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text_1.default(data.title);
        this.duration = {
            text: data.lengthText.simpleText,
            seconds: (0, Utils_1.timeToSeconds)(data.lengthText.simpleText)
        };
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
    }
}
ChildVideo.type = 'ChildVideo';
exports.default = ChildVideo;
//# sourceMappingURL=ChildVideo.js.map