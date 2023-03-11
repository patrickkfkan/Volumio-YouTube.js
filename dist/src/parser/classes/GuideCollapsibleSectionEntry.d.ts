import { YTNode } from '../helpers.js';
declare class GuideCollapsibleSectionEntry extends YTNode {
    static type: string;
    header_entry: YTNode | null;
    expander_icon: string;
    collapser_icon: string;
    section_items: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
}
export default GuideCollapsibleSectionEntry;
