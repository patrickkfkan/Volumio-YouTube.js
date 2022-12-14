"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("../misc/Text"));
const helpers_1 = require("../../helpers");
class UpdateDateTextAction extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.date_text = new Text_1.default(data.dateText).toString();
    }
}
UpdateDateTextAction.type = 'UpdateDateTextAction';
exports.default = UpdateDateTextAction;
//# sourceMappingURL=UpdateDateTextAction.js.map