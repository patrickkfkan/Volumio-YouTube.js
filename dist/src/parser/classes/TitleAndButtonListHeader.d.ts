import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class TitleAndButtonListHeader extends YTNode {
    static type: string;
    title: Text;
    constructor(data: any);
}
export default TitleAndButtonListHeader;
