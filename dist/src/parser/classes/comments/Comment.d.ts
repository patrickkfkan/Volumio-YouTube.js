import Text from '../misc/Text';
import Thumbnail from '../misc/Thumbnail';
import Author from '../misc/Author';
import AuthorCommentBadge from './AuthorCommentBadge';
import Actions from '../../../core/Actions';
import { YTNode, SuperParsedResult } from '../../helpers';
declare class Comment extends YTNode {
    #private;
    static type: string;
    content: Text;
    published: Text;
    author_is_channel_owner: boolean;
    current_user_reply_thumbnail: Thumbnail[];
    author_badge: AuthorCommentBadge | null;
    author: Author;
    action_menu: SuperParsedResult<YTNode>;
    action_buttons: SuperParsedResult<YTNode>;
    comment_id: string;
    vote_status: string;
    vote_count: {
        text: string;
        short_text: string;
    };
    reply_count: number;
    is_liked: boolean;
    is_disliked: boolean;
    is_pinned: boolean;
    constructor(data: any);
    /**
     * Likes the comment.
     */
    like(): Promise<import("../../../core/Actions").AxioslikeResponse>;
    /**
     * Dislikes the comment.
     */
    dislike(): Promise<import("../../../core/Actions").AxioslikeResponse>;
    /**
     * Creates a reply to the comment.
     */
    reply(text: string): Promise<import("../../../core/Actions").AxioslikeResponse>;
    /**
     * Translates the comment to the given language.
     * @param target_language - Ex; en, ja
     */
    translate(target_language: string): Promise<{
        content: any;
        success: boolean;
        status_code: number;
        data: any;
    }>;
    setActions(actions: Actions | undefined): void;
}
export default Comment;
