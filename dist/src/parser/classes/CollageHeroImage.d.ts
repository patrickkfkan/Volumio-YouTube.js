import NavigationEndpoint from './NavigationEndpoint';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class CollageHeroImage extends YTNode {
    static type: string;
    left: Thumbnail[];
    top_right: Thumbnail[];
    bottom_right: Thumbnail[];
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default CollageHeroImage;
