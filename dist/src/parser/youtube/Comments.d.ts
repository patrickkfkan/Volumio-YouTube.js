import { ParsedResponse } from '..';
import Actions, { ActionsResponse } from '../../core/Actions';
import CommentsHeader from '../classes/comments/CommentsHeader';
import CommentThread from '../classes/comments/CommentThread';
declare class Comments {
    #private;
    header: CommentsHeader | undefined;
    contents: CommentThread[];
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    /**
     * Creates a top-level comment.
     */
    createComment(text: string): Promise<ActionsResponse>;
    /**
     * Retrieves next batch of comments.
     */
    getContinuation(): Promise<Comments>;
    get page(): ParsedResponse;
}
export default Comments;
