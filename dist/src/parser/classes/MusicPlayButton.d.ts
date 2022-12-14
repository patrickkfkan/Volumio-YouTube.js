import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class MusicPlayButton extends YTNode {
    static type: string;
    endpoint: NavigationEndpoint;
    play_icon_type: string;
    pause_icon_type: string;
    play_label: any;
    pause_label: any;
    icon_color: string;
    constructor(data: any);
}
export default MusicPlayButton;
