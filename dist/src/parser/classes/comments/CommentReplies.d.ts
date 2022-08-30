import { YTNode } from '../../helpers';
declare class CommentReplies extends YTNode {
    static type: string;
    contents: import("../../helpers").SuperParsedResult<YTNode>;
    view_replies: import("../../helpers").SuperParsedResult<YTNode>;
    hide_replies: import("../../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default CommentReplies;
