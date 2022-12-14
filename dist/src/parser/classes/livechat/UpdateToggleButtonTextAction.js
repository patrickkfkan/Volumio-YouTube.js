"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("../misc/Text"));
const helpers_1 = require("../../helpers");
class UpdateToggleButtonTextAction extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.default_text = new Text_1.default(data.defaultText).toString();
        this.toggled_text = new Text_1.default(data.toggledText).toString();
        this.button_id = data.buttonId;
    }
}
UpdateToggleButtonTextAction.type = 'UpdateToggleButtonTextAction';
exports.default = UpdateToggleButtonTextAction;
//# sourceMappingURL=UpdateToggleButtonTextAction.js.map