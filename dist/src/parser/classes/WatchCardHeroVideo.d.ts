import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class WatchCardHeroVideo extends YTNode {
    static type: string;
    endpoint: NavigationEndpoint;
    call_to_action_button: import("../helpers").SuperParsedResult<YTNode>;
    hero_image: import("../helpers").SuperParsedResult<YTNode>;
    label: string;
    constructor(data: any);
}
export default WatchCardHeroVideo;
