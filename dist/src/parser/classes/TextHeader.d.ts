import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class TextHeader extends YTNode {
    static type: string;
    title: Text;
    style: string;
    constructor(data: any);
}
export default TextHeader;
