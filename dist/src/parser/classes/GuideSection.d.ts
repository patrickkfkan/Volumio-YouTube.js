import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class GuideSection extends YTNode {
    static type: string;
    title?: Text;
    items: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
}
export default GuideSection;
