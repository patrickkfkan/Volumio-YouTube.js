"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Text_1 = __importDefault(require("./misc/Text"));
const Dropdown_1 = __importDefault(require("./Dropdown"));
const SettingsSwitch_1 = __importDefault(require("./SettingsSwitch"));
const SettingsCheckbox_1 = __importDefault(require("./SettingsCheckbox"));
const ChannelOptions_1 = __importDefault(require("./ChannelOptions"));
const CopyLink_1 = __importDefault(require("./CopyLink"));
const helpers_1 = require("../helpers");
class SettingsOptions extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        if (Reflect.has(data, 'text')) {
            this.text = new Text_1.default(data.text).toString();
        }
        if (Reflect.has(data, 'options')) {
            this.options = __1.default.parseArray(data.options, [
                SettingsSwitch_1.default, Dropdown_1.default, CopyLink_1.default,
                SettingsCheckbox_1.default, ChannelOptions_1.default
            ]);
        }
    }
}
SettingsOptions.type = 'SettingsOptions';
exports.default = SettingsOptions;
//# sourceMappingURL=SettingsOptions.js.map