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
    reply(text: string): Promise<{
        actions: SuperParsedResult<YTNode> | null;
        actions_memo: import("../../helpers").Memo;
        contents: SuperParsedResult<YTNode>;
        contents_memo: import("../../helpers").Memo;
        on_response_received_actions: import("../../helpers").ObservedArray<import("../../index").ReloadContinuationItemsCommand | import("../../index").AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: import("../../helpers").Memo;
        on_response_received_endpoints: import("../../helpers").ObservedArray<import("../../index").ReloadContinuationItemsCommand | import("../../index").AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: import("../../helpers").Memo;
        on_response_received_commands: import("../../helpers").ObservedArray<import("../../index").ReloadContinuationItemsCommand | import("../../index").AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: import("../../helpers").Memo;
        continuation: import("../../index").TimedContinuation | null | undefined;
        continuation_contents: import("../../index").SectionListContinuation | import("../../index").LiveChatContinuation | import("../../index").MusicPlaylistShelfContinuation | import("../../index").MusicShelfContinuation | import("../../index").GridContinuation | import("../../index").PlaylistPanelContinuation | null | undefined;
        metadata: SuperParsedResult<YTNode>;
        header: SuperParsedResult<YTNode>;
        microformat: YTNode | null;
        sidebar: YTNode | null;
        overlay: YTNode | null;
        refinements: any;
        estimated_results: number | null;
        player_overlays: SuperParsedResult<YTNode>;
        playability_status: {
            status: string;
            error_screen: SuperParsedResult<YTNode>;
            embeddable: boolean;
            reason: any;
        } | undefined;
        streaming_data: {
            expires: Date;
            formats: import("../misc/Format").default[];
            adaptive_formats: import("../misc/Format").default[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        } | undefined;
        current_video_endpoint: import("../NavigationEndpoint").default | null;
        captions: import("../PlayerCaptionsTracklist").default | null;
        video_details: import("../misc/VideoDetails").default | undefined;
        annotations: SuperParsedResult<YTNode>;
        storyboards: SuperParsedResult<YTNode>;
        endscreen: import("../Endscreen").default | null;
        cards: import("../CardCollection").default | null;
    }>;
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
