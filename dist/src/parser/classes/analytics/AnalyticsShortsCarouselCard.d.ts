import { YTNode } from '../../helpers';
import NavigationEndpoint from '../NavigationEndpoint';
declare class AnalyticsShortsCarouselCard extends YTNode {
    static type: string;
    title: string;
    shorts: {
        description: string;
        thumbnail_url: string;
        endpoint: NavigationEndpoint;
    }[];
    constructor(data: any);
}
export default AnalyticsShortsCarouselCard;
