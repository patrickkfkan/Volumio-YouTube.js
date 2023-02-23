import Menu from './menus/Menu.js';
import Button from './Button.js';
import WatchNextEndScreen from './WatchNextEndScreen.js';
import PlayerOverlayAutoplay from './PlayerOverlayAutoplay.js';
import type DecoratedPlayerBar from './DecoratedPlayerBar.js';
import { YTNode } from '../helpers.js';
declare class PlayerOverlay extends YTNode {
    static type: string;
    end_screen: WatchNextEndScreen | null;
    autoplay: PlayerOverlayAutoplay | null;
    share_button: Button | null;
    add_to_menu: Menu | null;
    fullscreen_engagement: import("../helpers.js").SuperParsedResult<YTNode>;
    actions: import("../helpers.js").ObservedArray<YTNode>;
    browser_media_session: YTNode | null;
    decorated_player_bar: DecoratedPlayerBar | null;
    constructor(data: any);
}
export default PlayerOverlay;
