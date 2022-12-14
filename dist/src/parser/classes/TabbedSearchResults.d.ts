import { YTNode } from '../helpers';
import Tab from './Tab';
declare class TabbedSearchResults extends YTNode {
    static type: string;
    tabs: import("../helpers").ObservedArray<Tab>;
    constructor(data: any);
}
export default TabbedSearchResults;
