import { ParsedResponse, SectionListContinuation } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
declare class HomeFeed {
    #private;
    sections: import("../helpers").ObservedArray<MusicCarouselShelf> | undefined;
    constructor(response: AxioslikeResponse | ParsedResponse, actions: Actions);
    /**
     * Retrieves home feed continuation.
     */
    getContinuation(): Promise<HomeFeed>;
    get has_continuation(): boolean;
    get page(): {
        actions: import("../helpers").SuperParsedResult<import("../helpers").YTNode> | null;
        actions_memo: import("../helpers").Memo;
        contents: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        contents_memo: import("../helpers").Memo;
        on_response_received_actions: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: import("../helpers").Memo;
        on_response_received_endpoints: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: import("../helpers").Memo;
        on_response_received_commands: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: import("../helpers").Memo;
        continuation: import("../index").TimedContinuation | null | undefined;
        continuation_contents: SectionListContinuation | import("../index").LiveChatContinuation | import("../index").MusicPlaylistShelfContinuation | import("../index").MusicShelfContinuation | import("../index").GridContinuation | import("../index").PlaylistPanelContinuation | null | undefined;
        metadata: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        header: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        microformat: import("../helpers").YTNode | null;
        sidebar: import("../helpers").YTNode | null;
        overlay: import("../helpers").YTNode | null;
        refinements: any;
        estimated_results: number | null;
        player_overlays: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        playback_tracking: {
            videostats_watchtime_url: any;
            videostats_playback_url: any;
        } | null;
        playability_status: {
            status: string;
            error_screen: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
            audio_only_playablility: import("../classes/AudioOnlyPlayability").default | null;
            embeddable: boolean;
            reason: any;
        } | undefined;
        streaming_data: {
            expires: Date;
            formats: import("../classes/misc/Format").default[];
            adaptive_formats: import("../classes/misc/Format").default[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        } | undefined;
        current_video_endpoint: import("../classes/NavigationEndpoint").default | null;
        captions: import("../classes/PlayerCaptionsTracklist").default | null;
        video_details: import("../classes/misc/VideoDetails").default | undefined;
        annotations: import("../helpers").ObservedArray<import("../classes/PlayerAnnotationsExpanded").default>;
        storyboards: import("../classes/PlayerStoryboardSpec").default | import("../classes/PlayerLiveStoryboardSpec").default | null;
        endscreen: import("../classes/Endscreen").default | null;
        cards: import("../classes/CardCollection").default | null;
    };
}
export default HomeFeed;
