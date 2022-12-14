import { YTNode } from '../helpers';
import { ParsedResponse } from '../index';
import Actions, { ActionsResponse } from '../../core/Actions';
import CreatePlaylistDialog from './CreatePlaylistDialog';
declare class NavigationEndpoint extends YTNode {
    #private;
    static type: string;
    payload: any;
    dialog?: import("../helpers").SuperParsedResult<YTNode> | CreatePlaylistDialog | null | undefined;
    metadata: {
        url?: string;
        api_url?: string;
        page_type?: string;
        send_post?: boolean;
    };
    browse?: {
        id: string;
        params: string | null;
        base_url: string | null;
        page_type: string | null;
        form_data?: {};
    };
    watch: {
        video_id: any;
        playlist_id: any;
        params: any;
        index: any;
        supported_onesie_config: any;
        music_video_type: any;
    } | undefined;
    search: {
        query: any;
        params: any;
    } | undefined;
    subscribe: {
        channel_ids: any;
        params: any;
    } | undefined;
    unsubscribe: {
        channel_ids: any;
        params: any;
    } | undefined;
    like: {
        status: any;
        target: {
            video_id: any;
            playlist_id: any;
        };
        params: any;
    } | undefined;
    perform_comment_action: {
        action: any;
    } | undefined;
    offline_video: {
        video_id: any;
        on_add_command: {
            get_download_action: {
                video_id: any;
                params: any;
            };
        };
    } | undefined;
    continuation: {
        request: any;
        token: any;
    } | undefined;
    feedback: {
        token: any;
    } | undefined;
    watch_playlist: {
        playlist_id: any;
        params: any;
    } | undefined;
    playlist_edit: {
        playlist_id: any;
        actions: any;
    } | undefined;
    add_to_playlist: {
        video_id: any;
    } | undefined;
    create_playlist: {} | undefined;
    get_report_form: {
        params: any;
    } | undefined;
    live_chat_item_context_menu: {
        params: any;
    } | undefined;
    send_live_chat_vote: {
        params: any;
    } | undefined;
    constructor(data: any);
    /**
     * Sometimes InnerTube does not return an API url, in that case the library should set it based on the name of the payload object.
     */
    getEndpoint(name: string): "/browse" | "/player" | "/next" | undefined;
    callTest(actions: Actions, args: {
        [key: string]: any;
        parse: true;
    }): Promise<ParsedResponse>;
    callTest(actions: Actions, args?: {
        [key: string]: any;
        parse?: false;
    }): Promise<ActionsResponse>;
    call(actions: Actions, client: string | undefined, parse: true): Promise<ParsedResponse | undefined>;
    call(actions: Actions, client?: string, parse?: false): Promise<ActionsResponse | undefined>;
}
export default NavigationEndpoint;
