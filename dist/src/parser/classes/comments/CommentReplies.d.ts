import Thumbnail from '../misc/Thumbnail.js';
import type Button from '../Button.js';
import { YTNode } from '../../helpers.js';
declare class CommentReplies extends YTNode {
    static type: string;
    contents: import("../../helpers.js").ObservedArray<YTNode>;
    view_replies: Button | null;
    hide_replies: Button | null;
    view_replies_creator_thumbnail: Thumbnail[];
    has_channel_owner_replied: boolean;
    constructor(data: any);
}
export default CommentReplies;
