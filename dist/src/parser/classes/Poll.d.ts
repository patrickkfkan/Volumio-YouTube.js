import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class Poll extends YTNode {
    static type: string;
    choices: {
        text: string;
        select_endpoint: NavigationEndpoint | null;
        deselect_endpoint: NavigationEndpoint | null;
        vote_ratio_if_selected: number | string | null;
        vote_percentage_if_selected: number | string | null;
        vote_ratio_if_not_selected: number | string | null;
        vote_percentage_if_not_selected: number | string | null;
        image: Thumbnail[] | null;
    }[];
    poll_type: any;
    total_votes: Text | undefined;
    live_chat_poll_id: any;
    constructor(data: any);
}
export default Poll;
