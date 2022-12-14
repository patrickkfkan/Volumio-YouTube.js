"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const CompactLink_1 = __importDefault(require("./CompactLink"));
const helpers_1 = require("../helpers");
class SettingsSidebar extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.items = index_1.default.parseArray(data.items, CompactLink_1.default);
    }
    get contents() {
        return this.items;
    }
}
SettingsSidebar.type = 'SettingsSidebar';
exports.default = SettingsSidebar;
//# sourceMappingURL=SettingsSidebar.js.map