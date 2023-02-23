import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode, SuperParsedResult } from '../helpers.js';
declare class PlayerAnnotationsExpanded extends YTNode {
    static type: string;
    featured_channel: {
        start_time_ms: number;
        end_time_ms: number;
        watermark: Thumbnail[];
        channel_name: string;
        endpoint: NavigationEndpoint;
        subscribe_button: SuperParsedResult<YTNode>;
    };
    allow_swipe_dismiss: boolean;
    annotation_id: string;
    constructor(data: any);
}
export default PlayerAnnotationsExpanded;
