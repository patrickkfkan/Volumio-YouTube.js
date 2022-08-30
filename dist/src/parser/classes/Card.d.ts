import { YTNode } from '../helpers';
declare class Card extends YTNode {
    static type: string;
    teaser: import("../helpers").SuperParsedResult<YTNode>;
    content: import("../helpers").SuperParsedResult<YTNode>;
    card_id: string;
    feature: string;
    cue_ranges: {
        start_card_active_ms: string;
        end_card_active_ms: string;
        teaser_duration_ms: string;
        icon_after_teaser_ms: string;
    }[];
    constructor(data: any);
}
export default Card;
