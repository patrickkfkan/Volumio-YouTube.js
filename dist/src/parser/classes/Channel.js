"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("./misc/Author"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class Channel extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.channelId;
        this.author = new Author_1.default(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.ownerBadges, data.thumbnail);
        this.subscribers = new Text_1.default(data.subscriberCountText);
        this.videos = new Text_1.default(data.videoCountText);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.description_snippet = new Text_1.default(data.descriptionSnippet);
    }
}
Channel.type = 'Channel';
exports.default = Channel;
//# sourceMappingURL=Channel.js.map