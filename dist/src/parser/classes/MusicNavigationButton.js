"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class MusicNavigationButton extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.button_text = new Text_1.default(data.buttonText).toString();
        this.endpoint = new NavigationEndpoint_1.default(data.clickCommand);
    }
}
MusicNavigationButton.type = 'MusicNavigationButton';
exports.default = MusicNavigationButton;
//# sourceMappingURL=MusicNavigationButton.js.map