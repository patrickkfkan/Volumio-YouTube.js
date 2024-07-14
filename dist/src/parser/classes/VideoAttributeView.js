import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import ContentPreviewImageView from './ContentPreviewImageView.js';
import { Parser } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
class VideoAttributeView extends YTNode {
    constructor(data) {
        var _a;
        super();
        if ((_a = data.image) === null || _a === void 0 ? void 0 : _a.sources) {
            this.image = Thumbnail.fromResponse(data.image);
        }
        else {
            this.image = Parser.parseItem(data.image, ContentPreviewImageView);
        }
        this.image_style = data.imageStyle;
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.secondary_subtitle = {
            content: data.secondarySubtitle.content
        };
        this.orientation = data.orientation;
        this.sizing_rule = data.sizingRule;
        this.overflow_menu_on_tap = new NavigationEndpoint(data.overflowMenuOnTap);
        this.overflow_menu_a11y_label = data.overflowMenuA11yLabel;
    }
}
VideoAttributeView.type = 'VideoAttributeView';
export default VideoAttributeView;
//# sourceMappingURL=VideoAttributeView.js.map