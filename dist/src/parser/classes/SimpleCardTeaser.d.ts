import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class SimpleCardTeaser extends YTNode {
    static type: string;
    message: Text;
    prominent: boolean;
    constructor(data: any);
}
export default SimpleCardTeaser;
