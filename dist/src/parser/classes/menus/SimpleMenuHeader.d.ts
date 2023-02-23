import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
declare class SimpleMenuHeader extends YTNode {
    static type: string;
    title: Text;
    buttons: import("../../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default SimpleMenuHeader;
