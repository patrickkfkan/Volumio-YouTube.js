"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class HeaderLink {
    constructor(data) {
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.icon = Thumbnail_1.default.fromResponse(data.icon);
        this.title = new Text_1.default(data.title);
    }
}
class ChannelHeaderLinks extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.primary = ((_a = data.primaryLinks) === null || _a === void 0 ? void 0 : _a.map((link) => new HeaderLink(link))) || [];
        this.secondary = ((_b = data.secondaryLinks) === null || _b === void 0 ? void 0 : _b.map((link) => new HeaderLink(link))) || [];
    }
}
ChannelHeaderLinks.type = 'ChannelHeaderLinks';
exports.default = ChannelHeaderLinks;
//# sourceMappingURL=ChannelHeaderLinks.js.map