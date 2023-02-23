import Thumbnail from '../misc/Thumbnail.js';
import Text from '../misc/Text.js';
import type Button from '../Button.js';
import { YTNode } from '../../helpers.js';
declare class CommentSimplebox extends YTNode {
    static type: string;
    submit_button: Button | null;
    cancel_button: Button | null;
    author_thumbnails: Thumbnail[];
    placeholder: Text;
    avatar_size: any;
    constructor(data: any);
}
export default CommentSimplebox;
