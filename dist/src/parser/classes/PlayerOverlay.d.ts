import { YTNode } from '../helpers';
declare class PlayerOverlay extends YTNode {
    static type: string;
    end_screen: import("../helpers").SuperParsedResult<YTNode>;
    autoplay: import("../helpers").SuperParsedResult<YTNode>;
    share_button: import("../helpers").SuperParsedResult<YTNode>;
    add_to_menu: import("../helpers").SuperParsedResult<YTNode>;
    fullscreen_engagement: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default PlayerOverlay;
