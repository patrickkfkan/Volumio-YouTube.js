import { YTNode } from '../../helpers';
declare class Menu extends YTNode {
    static type: string;
    items: import("../../helpers").ObservedArray<YTNode>;
    top_level_buttons: import("../../helpers").ObservedArray<YTNode>;
    label: any;
    constructor(data: any);
    get contents(): import("../../helpers").ObservedArray<YTNode>;
}
export default Menu;
