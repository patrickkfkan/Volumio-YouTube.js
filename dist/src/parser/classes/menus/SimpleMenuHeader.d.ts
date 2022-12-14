import Text from '../misc/Text';
import { YTNode } from '../../helpers';
declare class SimpleMenuHeader extends YTNode {
    static type: string;
    title: Text;
    buttons: import("../../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default SimpleMenuHeader;
