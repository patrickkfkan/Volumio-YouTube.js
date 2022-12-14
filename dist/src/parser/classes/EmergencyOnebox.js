"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class EmergencyOnebox extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.first_option = index_1.default.parse(data.firstOption);
        this.menu = index_1.default.parse(data.menu);
    }
}
EmergencyOnebox.type = 'EmergencyOnebox';
exports.default = EmergencyOnebox;
//# sourceMappingURL=EmergencyOnebox.js.map