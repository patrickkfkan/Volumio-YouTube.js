"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const AccountItemSectionHeader_1 = __importDefault(require("./AccountItemSectionHeader"));
const helpers_1 = require("../helpers");
class AccountItem {
    constructor(data) {
        this.account_name = new Text_1.default(data.accountName);
        this.account_photo = Thumbnail_1.default.fromResponse(data.accountPhoto);
        this.is_selected = data.isSelected;
        this.is_disabled = data.isDisabled;
        this.has_channel = data.hasChannel;
        this.endpoint = new NavigationEndpoint_1.default(data.serviceEndpoint);
        this.account_byline = new Text_1.default(data.accountByline);
    }
}
AccountItem.type = 'AccountItem';
class AccountItemSection extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.contents = data.contents.map((ac) => new AccountItem(ac.accountItem));
        this.header = __1.default.parseItem(data.header, AccountItemSectionHeader_1.default);
    }
}
AccountItemSection.type = 'AccountItemSection';
exports.default = AccountItemSection;
//# sourceMappingURL=AccountItemSection.js.map