import Parser from '../index.js';
import Menu from './menus/Menu.js';
import Button from './Button.js';
import WatchNextEndScreen from './WatchNextEndScreen.js';
import PlayerOverlayAutoplay from './PlayerOverlayAutoplay.js';
import { YTNode } from '../helpers.js';
class PlayerOverlay extends YTNode {
    constructor(data) {
        super();
        this.end_screen = Parser.parseItem(data.endScreen, WatchNextEndScreen);
        this.autoplay = Parser.parseItem(data.autoplay, PlayerOverlayAutoplay);
        this.share_button = Parser.parseItem(data.shareButton, Button);
        this.add_to_menu = Parser.parseItem(data.addToMenu, Menu);
        this.fullscreen_engagement = Parser.parse(data.fullscreenEngagement);
        this.actions = Parser.parseArray(data.actions);
        this.browser_media_session = Parser.parseItem(data.browserMediaSession);
        this.decorated_player_bar = Parser.parseItem(data.decoratedPlayerBarRenderer);
    }
}
PlayerOverlay.type = 'PlayerOverlay';
export default PlayerOverlay;
//# sourceMappingURL=PlayerOverlay.js.map