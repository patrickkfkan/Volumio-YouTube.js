"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class SubscriptionNotificationToggleButton extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.states = data.states.map((data) => ({
            id: data.stateId,
            next_id: data.nextStateId,
            state: index_1.default.parse(data.state)
        }));
        this.current_state_id = data.currentStateId;
        this.target_id = data.targetId;
    }
}
SubscriptionNotificationToggleButton.type = 'SubscriptionNotificationToggleButton';
exports.default = SubscriptionNotificationToggleButton;
//# sourceMappingURL=SubscriptionNotificationToggleButton.js.map