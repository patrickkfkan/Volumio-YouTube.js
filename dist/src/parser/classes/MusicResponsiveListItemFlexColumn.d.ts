import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class MusicResponsiveListItemFlexColumn extends YTNode {
    static type: string;
    title: Text;
    display_priority: string;
    constructor(data: any);
}
export default MusicResponsiveListItemFlexColumn;
