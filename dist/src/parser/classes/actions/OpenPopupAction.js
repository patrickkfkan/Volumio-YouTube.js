"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const helpers_1 = require("../../helpers");
class OpenPopupAction extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.popup = index_1.default.parse(data.popup);
        this.popup_type = data.popupType;
    }
}
OpenPopupAction.type = 'OpenPopupAction';
exports.default = OpenPopupAction;
//# sourceMappingURL=OpenPopupAction.js.map