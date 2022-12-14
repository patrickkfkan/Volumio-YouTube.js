import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class MusicNavigationButton extends YTNode {
    static type: string;
    button_text: string;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default MusicNavigationButton;
