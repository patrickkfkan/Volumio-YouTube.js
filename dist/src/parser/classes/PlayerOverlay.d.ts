import Menu from './menus/Menu';
import Button from './Button';
import WatchNextEndScreen from './WatchNextEndScreen';
import PlayerOverlayAutoplay from './PlayerOverlayAutoplay';
import { YTNode } from '../helpers';
declare class PlayerOverlay extends YTNode {
    static type: string;
    end_screen: WatchNextEndScreen | null;
    autoplay: PlayerOverlayAutoplay | null;
    share_button: Button | null;
    add_to_menu: Menu | null;
    fullscreen_engagement: import("../helpers").SuperParsedResult<YTNode>;
    actions: import("../helpers").ObservedArray<YTNode>;
    browser_media_session: YTNode | null;
    constructor(data: any);
}
export default PlayerOverlay;
