"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class SubscribeButton extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.title = new Text_1.default(data.buttonText);
        this.subscribed = data.subscribed;
        this.enabled = data.enabled;
        this.item_type = data.type;
        this.channel_id = data.channelId;
        this.show_preferences = data.showPreferences;
        this.subscribed_text = new Text_1.default(data.subscribedButtonText);
        this.unsubscribed_text = new Text_1.default(data.unsubscribedButtonText);
        this.notification_preference_button = index_1.default.parse(data.notificationPreferenceButton);
        this.endpoint = new NavigationEndpoint_1.default(((_a = data.serviceEndpoints) === null || _a === void 0 ? void 0 : _a[0]) || ((_b = data.onSubscribeEndpoints) === null || _b === void 0 ? void 0 : _b[0]));
    }
}
SubscribeButton.type = 'SubscribeButton';
exports.default = SubscribeButton;
//# sourceMappingURL=SubscribeButton.js.map