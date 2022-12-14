import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class SingleHeroImage extends YTNode {
    static type: string;
    thumbnails: Thumbnail[];
    style: string;
    constructor(data: any);
}
export default SingleHeroImage;
