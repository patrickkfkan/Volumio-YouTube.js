import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class CardCollection extends YTNode {
    static type: string;
    cards: import("../helpers").ObservedArray<YTNode>;
    header: Text;
    allow_teaser_dismiss: boolean;
    constructor(data: any);
}
export default CardCollection;
