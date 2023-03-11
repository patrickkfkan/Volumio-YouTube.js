import type Button from '../Button.js';
import type ToggleButton from '../ToggleButton.js';
import type CreatorHeart from './CreatorHeart.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class CommentActionButtons extends YTNode {
    static type: string;
    like_button: ToggleButton | null;
    dislike_button: ToggleButton | null;
    reply_button: Button | null;
    creator_heart: CreatorHeart | null;
    constructor(data: RawNode);
}
export default CommentActionButtons;
