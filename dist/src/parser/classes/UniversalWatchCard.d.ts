import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class UniversalWatchCard extends YTNode {
    static type: string;
    header: YTNode | null;
    call_to_action: YTNode | null;
    sections: import("../helpers.js").ObservedArray<YTNode>;
    collapsed_label?: Text;
    constructor(data: any);
}
export default UniversalWatchCard;
