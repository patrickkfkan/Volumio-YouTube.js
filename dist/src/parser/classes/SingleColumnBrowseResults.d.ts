import Tab from './Tab';
import { YTNode } from '../helpers';
declare class SingleColumnBrowseResults extends YTNode {
    static type: string;
    tabs: import("../helpers").ObservedArray<Tab>;
    constructor(data: any);
}
export default SingleColumnBrowseResults;
