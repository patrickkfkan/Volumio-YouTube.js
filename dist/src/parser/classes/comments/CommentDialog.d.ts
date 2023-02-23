import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import type Button from '../Button.js';
import { YTNode } from '../../helpers.js';
declare class CommentDialog extends YTNode {
    static type: string;
    editable_text: Text;
    author_thumbnail: Thumbnail[];
    submit_button: Button | null;
    cancel_button: Button | null;
    placeholder: Text;
    emoji_button: Button | null;
    emoji_picker: any | null;
    constructor(data: any);
}
export default CommentDialog;
