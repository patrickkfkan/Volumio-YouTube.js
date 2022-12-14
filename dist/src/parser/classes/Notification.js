"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class Notification extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.video_thumbnails = Thumbnail_1.default.fromResponse(data.videoThumbnail);
        this.short_message = new Text_1.default(data.shortMessage);
        this.sent_time = new Text_1.default(data.sentTimeText);
        this.notification_id = data.notificationId;
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.record_click_endpoint = new NavigationEndpoint_1.default(data.recordClickEndpoint);
        this.menu = index_1.default.parse(data.contextualMenu);
        this.read = data.read;
    }
}
Notification.type = 'Notification';
exports.default = Notification;
//# sourceMappingURL=Notification.js.map