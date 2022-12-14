"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Author_1 = __importDefault(require("./misc/Author"));
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class BackstagePost extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.postId;
        this.author = new Author_1.default(Object.assign(Object.assign({}, data.authorText), { navigationEndpoint: data.authorEndpoint }), null, data.authorThumbnail);
        this.content = new Text_1.default(data.contentText);
        this.published = new Text_1.default(data.publishedTimeText);
        this.poll_status = data.pollStatus;
        this.vote_status = data.voteStatus;
        this.likes = new Text_1.default(data.voteCount);
        this.menu = index_1.default.parse(data.actionMenu) || null;
        this.actions = index_1.default.parse(data.actionButtons);
        this.vote_button = index_1.default.parse(data.voteButton);
        this.surface = data.surface;
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.attachment = index_1.default.parse(data.backstageAttachment) || null;
    }
}
BackstagePost.type = 'BackstagePost';
exports.default = BackstagePost;
//# sourceMappingURL=BackstagePost.js.map