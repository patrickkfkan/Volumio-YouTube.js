"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class SettingsSwitch extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.subtitle = new Text_1.default(data.subtitle);
        this.enabled = data.enabled;
        this.enable_endpoint = new NavigationEndpoint_1.default(data.enableServiceEndpoint);
        this.disable_endpoint = new NavigationEndpoint_1.default(data.disableServiceEndpoint);
    }
}
SettingsSwitch.type = 'SettingsSwitch';
exports.default = SettingsSwitch;
//# sourceMappingURL=SettingsSwitch.js.map