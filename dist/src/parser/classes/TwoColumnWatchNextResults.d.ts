import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type Menu from './menus/Menu.js';
type AutoplaySet = {
    autoplay_video: NavigationEndpoint;
    next_button_video?: NavigationEndpoint;
};
declare class TwoColumnWatchNextResults extends YTNode {
    #private;
    static type: string;
    results: import("../helpers.js").ObservedArray<YTNode>;
    secondary_results: import("../helpers.js").ObservedArray<YTNode>;
    conversation_bar: YTNode | null;
    playlist?: {
        id: string;
        title: string;
        author: Text | PlaylistAuthor;
        contents: YTNode[];
        current_index: number;
        is_infinite: boolean;
        menu: Menu | null;
    };
    autoplay?: {
        sets: AutoplaySet[];
        modified_sets?: AutoplaySet[];
        count_down_secs?: number;
    };
    constructor(data: any);
}
export default TwoColumnWatchNextResults;
