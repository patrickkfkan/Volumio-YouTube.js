import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class BackstageImage extends YTNode {
    static type: string;
    image: Thumbnail[];
    constructor(data: any);
}
export default BackstageImage;
