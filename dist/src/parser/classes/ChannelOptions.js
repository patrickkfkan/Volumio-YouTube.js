"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class ChannelOptions extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.avatar = Thumbnail_1.default.fromResponse(data.avatar);
        this.endpoint = new NavigationEndpoint_1.default(data.avatarEndpoint);
        this.name = data.name;
        this.links = data.links.map((link) => new Text_1.default(link));
    }
}
ChannelOptions.type = 'ChannelOptions';
exports.default = ChannelOptions;
//# sourceMappingURL=ChannelOptions.js.map