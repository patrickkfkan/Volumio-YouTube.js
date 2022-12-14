"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class PageIntroduction extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.header_text = new Text_1.default(data.headerText).toString();
        this.body_text = new Text_1.default(data.bodyText).toString();
        this.page_title = new Text_1.default(data.pageTitle).toString();
        this.header_icon_type = data.headerIcon.iconType;
    }
}
PageIntroduction.type = 'PageIntroduction';
exports.default = PageIntroduction;
//# sourceMappingURL=PageIntroduction.js.map