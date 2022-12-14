"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class SingleActionEmergencySupport extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.action_text = new Text_1.default(data.actionText);
        this.nav_text = new Text_1.default(data.navigationText);
        this.details = new Text_1.default(data.detailsText);
        this.icon_type = data.icon.iconType;
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
    }
}
SingleActionEmergencySupport.type = 'SingleActionEmergencySupport';
exports.default = SingleActionEmergencySupport;
//# sourceMappingURL=SingleActionEmergencySupport.js.map