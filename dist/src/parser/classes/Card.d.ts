import { YTNode } from '../helpers.js';
declare class Card extends YTNode {
    static type: string;
    teaser: YTNode | null;
    content: YTNode | null;
    card_id: string | null;
    feature: string | null;
    cue_ranges: {
        start_card_active_ms: string;
        end_card_active_ms: string;
        teaser_duration_ms: string;
        icon_after_teaser_ms: string;
    }[];
    constructor(data: any);
}
export default Card;
