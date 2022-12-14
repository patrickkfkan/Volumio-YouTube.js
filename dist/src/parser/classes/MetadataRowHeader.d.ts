import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class MetadataRowHeader extends YTNode {
    static type: string;
    content: Text;
    has_divider_line: boolean;
    constructor(data: any);
}
export default MetadataRowHeader;
