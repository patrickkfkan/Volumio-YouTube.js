import Thumbnail from '../misc/Thumbnail';
import Text from '../misc/Text';
import { YTNode } from '../../helpers';
declare class CommentSimplebox extends YTNode {
    static type: string;
    submit_button: import("../../helpers").SuperParsedResult<YTNode>;
    cancel_button: import("../../helpers").SuperParsedResult<YTNode>;
    author_thumbnails: Thumbnail[];
    placeholder: Text;
    avatar_size: any;
    constructor(data: any);
}
export default CommentSimplebox;
