import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { IParsedResponse } from '../types/ParsedResponse.js';
import { YTNode } from '../helpers.js';
import CreatePlaylistDialog from './CreatePlaylistDialog.js';
declare class NavigationEndpoint extends YTNode {
    static type: string;
    payload: any;
    dialog?: import("../helpers.js").SuperParsedResult<YTNode> | CreatePlaylistDialog | null | undefined;
    metadata: {
        url?: string;
        api_url?: string;
        page_type?: string;
        send_post?: boolean;
    };
    constructor(data: any);
    /**
     * Sometimes InnerTube does not return an API url, in that case the library should set it based on the name of the payload object.
     */
    getEndpoint(name: string): "/browse" | "/player" | "/search" | "/next" | "live_chat/get_item_context_menu" | undefined;
    call<T extends IParsedResponse>(actions: Actions, args: {
        [key: string]: any;
        parse: true;
    }): Promise<T>;
    call(actions: Actions, args?: {
        [key: string]: any;
        parse?: false;
    }): Promise<ApiResponse>;
    toURL(): string | undefined;
}
export default NavigationEndpoint;
