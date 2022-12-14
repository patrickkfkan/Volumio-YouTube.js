"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Utils_1 = require("../../utils/Utils");
const helpers_1 = require("../helpers");
class WatchCardCompactVideo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.subtitle = new Text_1.default(data.subtitle);
        this.duration = {
            text: new Text_1.default(data.lengthText).toString(),
            seconds: (0, Utils_1.timeToSeconds)(data.lengthText.simpleText)
        };
        this.style = data.style;
    }
}
WatchCardCompactVideo.type = 'WatchCardCompactVideo';
exports.default = WatchCardCompactVideo;
//# sourceMappingURL=WatchCardCompactVideo.js.map