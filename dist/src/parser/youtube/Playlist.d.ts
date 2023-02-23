import Feed from '../../core/Feed.js';
import Message from '../classes/Message.js';
import Thumbnail from '../classes/misc/Thumbnail.js';
import NavigationEndpoint from '../classes/NavigationEndpoint.js';
import { ObservedArray } from '../helpers.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
declare class Playlist extends Feed<IBrowseResponse> {
    #private;
    info: {
        author: import("../classes/misc/Author.js").default;
        thumbnails: Thumbnail[];
        total_items: string;
        views: string;
        last_updated: string;
        can_share: boolean;
        can_delete: boolean;
        is_editable: boolean;
        privacy: string;
        title?: string | undefined;
        description?: string | undefined;
        type?: string | undefined;
    };
    menu: import("../helpers.js").YTNode | null;
    endpoint?: NavigationEndpoint;
    messages: ObservedArray<Message>;
    constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed?: boolean);
    get items(): ObservedArray<import("../classes/CompactVideo.js").default | import("../classes/GridVideo.js").default | import("../classes/PlaylistPanelVideo.js").default | import("../classes/PlaylistVideo.js").default | import("../classes/ReelItem.js").default | import("../classes/Video.js").default | import("../classes/WatchCardCompactVideo.js").default>;
    getContinuation(): Promise<Playlist>;
}
export default Playlist;
