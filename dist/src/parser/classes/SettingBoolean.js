"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class SettingBoolean extends helpers_1.YTNode {
    constructor(data) {
        super();
        if (data.title) {
            this.title = new Text_1.default(data.title);
        }
        if (data.summary) {
            this.summary = new Text_1.default(data.summary);
        }
        if (data.enableServiceEndpoint) {
            this.enable_endpoint = new NavigationEndpoint_1.default(data.enableServiceEndpoint);
        }
        if (data.disableServiceEndpoint) {
            this.disable_endpoint = new NavigationEndpoint_1.default(data.disableServiceEndpoint);
        }
        this.item_id = data.itemId;
    }
}
SettingBoolean.type = 'SettingBoolean';
exports.default = SettingBoolean;
//# sourceMappingURL=SettingBoolean.js.map