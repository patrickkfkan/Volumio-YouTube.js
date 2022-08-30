import Comment from './Comment';
import Actions from '../../../core/Actions';
import { YTNode } from '../../helpers';
declare class CommentThread extends YTNode {
    #private;
    static type: string;
    is_moderated_elq_comment: boolean;
    comment: Comment | null;
    replies: Comment[] | undefined;
    constructor(data: any);
    /**
     * Retrieves replies to this comment thread.
     */
    getReplies(): Promise<this>;
    /**
     * Retrieves next batch of replies.
     */
    getContinuation(): Promise<this>;
    setActions(actions: Actions): void;
}
export default CommentThread;
