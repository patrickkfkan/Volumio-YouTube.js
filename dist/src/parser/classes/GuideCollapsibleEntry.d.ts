import { YTNode } from '../helpers.js';
declare class GuideCollapsibleEntry extends YTNode {
    static type: string;
    expander_item: {
        title: string;
        icon_type: string;
    };
    collapser_item: {
        title: string;
        icon_type: string;
    };
    expandable_items: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
}
export default GuideCollapsibleEntry;
