import Format from './classes/misc/Format';
import VideoDetails from './classes/misc/VideoDetails';
import Endscreen from './classes/Endscreen';
import CardCollection from './classes/CardCollection';
import NavigationEndpoint from './classes/NavigationEndpoint';
import PlayerStoryboardSpec from './classes/PlayerStoryboardSpec';
import PlayerCaptionsTracklist from './classes/PlayerCaptionsTracklist';
import PlayerLiveStoryboardSpec from './classes/PlayerLiveStoryboardSpec';
import PlayerAnnotationsExpanded from './classes/PlayerAnnotationsExpanded';
import { YTNode, YTNodeConstructor, SuperParsedResult, ObservedArray, Memo } from './helpers';
import AudioOnlyPlayability from './classes/AudioOnlyPlayability';
export declare class AppendContinuationItemsAction extends YTNode {
    static readonly type = "appendContinuationItemsAction";
    contents: ObservedArray<YTNode> | null;
    constructor(data: any);
}
export declare class ReloadContinuationItemsCommand extends YTNode {
    static readonly type = "reloadContinuationItemsCommand";
    target_id: string;
    contents: ObservedArray<YTNode> | null;
    constructor(data: any);
}
export declare class SectionListContinuation extends YTNode {
    static readonly type = "sectionListContinuation";
    continuation: string;
    contents: ObservedArray<YTNode> | null;
    constructor(data: any);
}
export declare class MusicPlaylistShelfContinuation extends YTNode {
    static readonly type = "musicPlaylistShelfContinuation";
    continuation: string;
    contents: ObservedArray<YTNode> | null;
    constructor(data: any);
}
export declare class MusicShelfContinuation extends YTNode {
    static readonly type = "musicShelfContinuation";
    continuation: string;
    contents: ObservedArray<YTNode> | null;
    constructor(data: any);
}
export declare class GridContinuation extends YTNode {
    static readonly type = "gridContinuation";
    continuation: string;
    items: ObservedArray<YTNode> | null;
    constructor(data: any);
    get contents(): ObservedArray<YTNode> | null;
}
export declare class PlaylistPanelContinuation extends YTNode {
    static readonly type = "playlistPanelContinuation";
    continuation: string;
    contents: ObservedArray<YTNode> | null;
    constructor(data: any);
}
export declare class TimedContinuation extends YTNode {
    static readonly type = "timedContinuationData";
    timeout_ms: number;
    token: string;
    constructor(data: any);
}
export declare class LiveChatContinuation extends YTNode {
    static readonly type = "liveChatContinuation";
    actions: ObservedArray<YTNode>;
    action_panel: YTNode | null;
    item_list: YTNode | null;
    header: YTNode | null;
    participants_list: YTNode | null;
    popout_message: YTNode | null;
    emojis: any[] | null;
    continuation: TimedContinuation;
    viewer_name: string;
    constructor(data: any);
}
export default class Parser {
    #private;
    /**
     * Parses InnerTube response.
     */
    static parseResponse(data: any): {
        actions: SuperParsedResult<YTNode> | null;
        actions_memo: Memo;
        contents: SuperParsedResult<YTNode>;
        contents_memo: Memo;
        on_response_received_actions: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: Memo;
        on_response_received_endpoints: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: Memo;
        on_response_received_commands: ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: Memo;
        continuation: TimedContinuation | null | undefined;
        continuation_contents: SectionListContinuation | LiveChatContinuation | MusicPlaylistShelfContinuation | MusicShelfContinuation | GridContinuation | PlaylistPanelContinuation | null | undefined;
        metadata: SuperParsedResult<YTNode>;
        header: SuperParsedResult<YTNode>;
        microformat: YTNode | null;
        sidebar: YTNode | null;
        overlay: YTNode | null;
        refinements: any;
        estimated_results: number | null;
        player_overlays: SuperParsedResult<YTNode>;
        playback_tracking: {
            videostats_watchtime_url: any;
            videostats_playback_url: any;
        } | null;
        playability_status: {
            status: string;
            error_screen: SuperParsedResult<YTNode>;
            audio_only_playablility: AudioOnlyPlayability | null;
            embeddable: boolean;
            reason: any;
        } | undefined;
        streaming_data: {
            expires: Date;
            formats: Format[];
            adaptive_formats: Format[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        } | undefined;
        current_video_endpoint: NavigationEndpoint | null;
        captions: PlayerCaptionsTracklist | null;
        video_details: VideoDetails | undefined;
        annotations: ObservedArray<PlayerAnnotationsExpanded>;
        storyboards: PlayerStoryboardSpec | PlayerLiveStoryboardSpec | null;
        endscreen: Endscreen | null;
        cards: CardCollection | null;
    };
    static parseC(data: any): TimedContinuation | undefined;
    static parseLC(data: any): SectionListContinuation | LiveChatContinuation | MusicPlaylistShelfContinuation | MusicShelfContinuation | GridContinuation | PlaylistPanelContinuation | undefined;
    static parseRR(actions: any[]): ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction>;
    static parseActions(data: any): SuperParsedResult<YTNode>;
    static parseFormats(formats: any[]): Format[];
    static parseItem<T extends YTNode = YTNode>(data: any, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]): T | null;
    static parseArray<T extends YTNode = YTNode>(data: any[], validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]): ObservedArray<T>;
    static parse<T extends YTNode = YTNode>(data: any, requireArray: true, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]): ObservedArray<T> | null;
    static parse<T extends YTNode = YTNode>(data: any, requireArray?: false | undefined, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]): SuperParsedResult<T>;
    static applyMutations(memo: Memo, mutations: Array<any>): void;
    static formatError({ classname, classdata, err }: {
        classname: string;
        classdata: any;
        err: any;
    }): void;
    static sanitizeClassName(input: string): string;
    static ignore_list: Set<string>;
    static shouldIgnore(classname: string): boolean;
}
export declare type ParsedResponse = ReturnType<typeof Parser.parseResponse>;
