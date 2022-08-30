import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class SimpleTextSection extends YTNode {
    static type: string;
    lines: Text[];
    style: string;
    constructor(data: any);
}
export default SimpleTextSection;
