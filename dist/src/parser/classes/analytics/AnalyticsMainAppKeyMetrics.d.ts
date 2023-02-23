import DataModelSection from './DataModelSection.js';
import { YTNode } from '../../helpers.js';
declare class AnalyticsMainAppKeyMetrics extends YTNode {
    static type: string;
    period: string;
    sections: DataModelSection[];
    constructor(data: any);
}
export default AnalyticsMainAppKeyMetrics;
