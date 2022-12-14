"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const AccountChannel_1 = __importDefault(require("./AccountChannel"));
const AccountItemSection_1 = __importDefault(require("./AccountItemSection"));
const helpers_1 = require("../helpers");
class AccountSectionList extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.contents = __1.default.parseItem(data.contents[0], AccountItemSection_1.default);
        this.footers = __1.default.parseItem(data.footers[0], AccountChannel_1.default);
    }
}
AccountSectionList.type = 'AccountSectionList';
exports.default = AccountSectionList;
//# sourceMappingURL=AccountSectionList.js.map