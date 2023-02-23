import ToggleButton from './ToggleButton.js';
import { YTNode } from '../helpers.js';
declare class SegmentedLikeDislikeButton extends YTNode {
    static type: string;
    like_button: ToggleButton | null;
    dislike_button: ToggleButton | null;
    constructor(data: any);
}
export default SegmentedLikeDislikeButton;
