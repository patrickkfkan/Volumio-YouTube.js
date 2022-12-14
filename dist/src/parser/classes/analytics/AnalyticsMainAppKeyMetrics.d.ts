import DataModelSection from './DataModelSection';
import { YTNode } from '../../helpers';
declare class AnalyticsMainAppKeyMetrics extends YTNode {
    static type: string;
    period: string;
    sections: DataModelSection[];
    constructor(data: any);
}
export default AnalyticsMainAppKeyMetrics;
