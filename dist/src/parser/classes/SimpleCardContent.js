"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class SimpleCardContent extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.image = Thumbnail_1.default.fromResponse(data.image);
        this.title = new Text_1.default(data.title);
        this.display_domain = new Text_1.default(data.displayDomain);
        this.show_link_icon = data.showLinkIcon;
        this.call_to_action = data.callToAction;
        this.endpoint = new NavigationEndpoint_1.default(data.command);
    }
}
SimpleCardContent.type = 'SimpleCardContent';
exports.default = SimpleCardContent;
//# sourceMappingURL=SimpleCardContent.js.map