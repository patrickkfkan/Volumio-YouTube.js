"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Menu_1 = __importDefault(require("./menus/Menu"));
const Button_1 = __importDefault(require("./Button"));
const WatchNextEndScreen_1 = __importDefault(require("./WatchNextEndScreen"));
const PlayerOverlayAutoplay_1 = __importDefault(require("./PlayerOverlayAutoplay"));
const helpers_1 = require("../helpers");
class PlayerOverlay extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.end_screen = index_1.default.parseItem(data.endScreen, WatchNextEndScreen_1.default);
        this.autoplay = index_1.default.parseItem(data.autoplay, PlayerOverlayAutoplay_1.default);
        this.share_button = index_1.default.parseItem(data.shareButton, Button_1.default);
        this.add_to_menu = index_1.default.parseItem(data.addToMenu, Menu_1.default);
        this.fullscreen_engagement = index_1.default.parse(data.fullscreenEngagement);
        this.actions = index_1.default.parseArray(data.actions);
        this.browser_media_session = index_1.default.parseItem(data.browserMediaSession);
    }
}
PlayerOverlay.type = 'PlayerOverlay';
exports.default = PlayerOverlay;
//# sourceMappingURL=PlayerOverlay.js.map