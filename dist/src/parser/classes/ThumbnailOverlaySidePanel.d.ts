import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class ThumbnailOverlaySidePanel extends YTNode {
    static type: string;
    text: Text;
    icon_type: string;
    constructor(data: any);
}
export default ThumbnailOverlaySidePanel;
