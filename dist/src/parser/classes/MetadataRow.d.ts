import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class MetadataRow extends YTNode {
    static type: string;
    title: Text;
    contents: Text[];
    constructor(data: any);
}
export default MetadataRow;
