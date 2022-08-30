import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class RichListHeader extends YTNode {
    static type: string;
    title: Text;
    icon_type: string;
    constructor(data: any);
}
export default RichListHeader;
