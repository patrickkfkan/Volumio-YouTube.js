import Parser from '../index.js';
import ToggleButton from './ToggleButton.js';
import { YTNode } from '../helpers.js';
class SegmentedLikeDislikeButton extends YTNode {
    constructor(data) {
        super();
        this.like_button = Parser.parseItem(data.likeButton, ToggleButton);
        this.dislike_button = Parser.parseItem(data.dislikeButton, ToggleButton);
    }
}
SegmentedLikeDislikeButton.type = 'SegmentedLikeDislikeButton';
export default SegmentedLikeDislikeButton;
//# sourceMappingURL=SegmentedLikeDislikeButton.js.map