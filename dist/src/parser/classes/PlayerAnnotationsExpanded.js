import Parser from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class PlayerAnnotationsExpanded extends YTNode {
    constructor(data) {
        super();
        this.featured_channel = {
            start_time_ms: data.featuredChannel.startTimeMs,
            end_time_ms: data.featuredChannel.endTimeMs,
            watermark: Thumbnail.fromResponse(data.featuredChannel.watermark),
            channel_name: data.featuredChannel.channelName,
            endpoint: new NavigationEndpoint(data.featuredChannel.navigationEndpoint),
            subscribe_button: Parser.parse(data.featuredChannel.subscribeButton)
        };
        this.allow_swipe_dismiss = data.allowSwipeDismiss;
        this.annotation_id = data.annotationId;
    }
}
PlayerAnnotationsExpanded.type = 'PlayerAnnotationsExpanded';
export default PlayerAnnotationsExpanded;
//# sourceMappingURL=PlayerAnnotationsExpanded.js.map