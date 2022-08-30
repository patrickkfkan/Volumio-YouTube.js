import { YTNode } from '../../helpers';
declare class CommentActionButtons extends YTNode {
    static type: string;
    like_button: import("../../helpers").SuperParsedResult<YTNode>;
    dislike_button: import("../../helpers").SuperParsedResult<YTNode>;
    reply_button: import("../../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default CommentActionButtons;
