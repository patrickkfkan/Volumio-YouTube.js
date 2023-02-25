import Thumbnail from '../misc/Thumbnail.js';
import { YTNode } from '../../helpers.js';
declare class SponsorCommentBadge extends YTNode {
    static type: string;
    custom_badge: Thumbnail[];
    tooltip: string;
    constructor(data: any);
}
export default SponsorCommentBadge;