import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class WatchCardHeroVideo extends YTNode {
    static type: string;
    endpoint: NavigationEndpoint;
    call_to_action_button: YTNode | null;
    hero_image: YTNode | null;
    label: string;
    constructor(data: any);
}
export default WatchCardHeroVideo;
