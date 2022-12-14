import Video from './AnalyticsVideo';
import { YTNode } from '../../helpers';
declare class AnalyticsVodCarouselCard extends YTNode {
    static type: string;
    title: string;
    videos: Video[] | null;
    no_data_message?: string;
    constructor(data: any);
}
export default AnalyticsVodCarouselCard;
