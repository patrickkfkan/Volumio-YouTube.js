"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class ToggleButton extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        super();
        this.text = new Text_1.default(data.defaultText);
        this.toggled_text = new Text_1.default(data.toggledText);
        this.tooltip = data.defaultTooltip;
        this.toggled_tooltip = data.toggledTooltip;
        this.is_toggled = data.isToggled;
        this.is_disabled = data.isDisabled;
        this.icon_type = data.defaultIcon.iconType;
        const acc_label = ((_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.defaultText) === null || _a === void 0 ? void 0 : _a.accessibility) === null || _b === void 0 ? void 0 : _b.accessibilityData) === null || _c === void 0 ? void 0 : _c.label) ||
            ((_e = (_d = data === null || data === void 0 ? void 0 : data.accessibilityData) === null || _d === void 0 ? void 0 : _d.accessibilityData) === null || _e === void 0 ? void 0 : _e.label) ||
            ((_f = data === null || data === void 0 ? void 0 : data.accessibility) === null || _f === void 0 ? void 0 : _f.label);
        if (this.icon_type == 'LIKE') {
            this.like_count = parseInt(acc_label.replace(/\D/g, ''));
            this.short_like_count = new Text_1.default(data.defaultText).toString();
        }
        this.endpoint =
            ((_h = (_g = data.defaultServiceEndpoint) === null || _g === void 0 ? void 0 : _g.commandExecutorCommand) === null || _h === void 0 ? void 0 : _h.commands) ?
                new NavigationEndpoint_1.default(data.defaultServiceEndpoint.commandExecutorCommand.commands.pop()) :
                new NavigationEndpoint_1.default(data.defaultServiceEndpoint);
        this.toggled_endpoint = new NavigationEndpoint_1.default(data.toggledServiceEndpoint);
        this.button_id = ((_k = (_j = data.toggleButtonSupportedData) === null || _j === void 0 ? void 0 : _j.toggleButtonIdData) === null || _k === void 0 ? void 0 : _k.id) || null;
        this.target_id = data.targetId || null;
    }
}
ToggleButton.type = 'ToggleButton';
exports.default = ToggleButton;
//# sourceMappingURL=ToggleButton.js.map