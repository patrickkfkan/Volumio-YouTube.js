import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class ThumbnailOverlayLoadingPreview extends YTNode {
    static type: string;
    text: Text;
    constructor(data: any);
}
export default ThumbnailOverlayLoadingPreview;
