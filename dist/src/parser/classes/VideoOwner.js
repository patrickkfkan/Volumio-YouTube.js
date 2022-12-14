"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Author_1 = __importDefault(require("./misc/Author"));
const helpers_1 = require("../helpers");
class VideoOwner extends helpers_1.YTNode {
    constructor(data) {
        super();
        // TODO: check this
        this.subscription_button = data.subscriptionButton || null;
        this.subscriber_count = new Text_1.default(data.subscriberCountText);
        this.author = new Author_1.default(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.badges, data.thumbnail);
    }
}
VideoOwner.type = 'VideoOwner';
exports.default = VideoOwner;
//# sourceMappingURL=VideoOwner.js.map