import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class MusicResponsiveListItemFixedColumn extends YTNode {
    static type: string;
    title: Text;
    display_priority: string;
    constructor(data: any);
}
export default MusicResponsiveListItemFixedColumn;
