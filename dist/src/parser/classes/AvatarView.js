import { YTNode } from '../helpers.js';
import { Thumbnail } from '../misc.js';
class AvatarView extends YTNode {
    constructor(data) {
        super();
        this.image = Thumbnail.fromResponse(data.image);
        this.image_processor = {
            border_image_processor: {
                circular: data.image.processor.borderImageProcessor.circular
            }
        };
        this.avatar_image_size = data.avatarImageSize;
    }
}
AvatarView.type = 'AvatarView';
export default AvatarView;
//# sourceMappingURL=AvatarView.js.map