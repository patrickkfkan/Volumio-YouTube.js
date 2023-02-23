import { YTNode } from '../helpers.js';
import SearchRefinementCard from './SearchRefinementCard.js';
import Button from './Button.js';
import MacroMarkersListItem from './MacroMarkersListItem.js';
declare class HorizontalCardList extends YTNode {
    static type: string;
    cards: import("../helpers.js").ObservedArray<SearchRefinementCard | MacroMarkersListItem>;
    header: YTNode | null;
    previous_button: Button | null;
    next_button: Button | null;
    constructor(data: any);
}
export default HorizontalCardList;
