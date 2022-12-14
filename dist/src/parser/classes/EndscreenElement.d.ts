import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class EndscreenElement extends YTNode {
    static type: string;
    style: string;
    title: Text;
    endpoint: NavigationEndpoint;
    image: Thumbnail[] | undefined;
    icon: Thumbnail[] | undefined;
    metadata: Text | undefined;
    call_to_action: Text | undefined;
    hovercard_button: YTNode | null | undefined;
    is_subscribe: boolean | undefined;
    playlist_length: Text | undefined;
    thumbnail_overlays: import("../helpers").ObservedArray<YTNode> | undefined;
    left: number;
    top: number;
    width: number;
    aspect_ratio: number;
    start_ms: number;
    end_ms: number;
    id: string;
    constructor(data: any);
}
export default EndscreenElement;
