"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class WatchNextEndScreen extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.results = index_1.default.parse(data.results);
        this.title = new Text_1.default(data.title).toString();
    }
}
WatchNextEndScreen.type = 'WatchNextEndScreen';
exports.default = WatchNextEndScreen;
//# sourceMappingURL=WatchNextEndScreen.js.map