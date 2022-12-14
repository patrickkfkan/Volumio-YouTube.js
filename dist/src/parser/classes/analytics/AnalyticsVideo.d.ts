import Thumbnail from '../misc/Thumbnail';
import { YTNode } from '../../helpers';
declare class AnalyticsVideo extends YTNode {
    static type: string;
    title: string;
    metadata: {
        views: string;
        published: string;
        thumbnails: Thumbnail[];
        duration: string;
        is_short: boolean;
    };
    constructor(data: any);
}
export default AnalyticsVideo;
