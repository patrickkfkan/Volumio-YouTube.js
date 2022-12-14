import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class SubFeedSelector extends YTNode {
    static type: string;
    title: Text;
    options: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default SubFeedSelector;
