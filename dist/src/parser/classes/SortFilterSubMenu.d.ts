import { YTNode } from '../helpers';
declare class SortFilterSubMenu extends YTNode {
    static type: string;
    sub_menu_items: {
        title: string;
        selected: boolean;
        continuation: string;
        subtitle: string;
    }[];
    label: string;
    constructor(data: any);
}
export default SortFilterSubMenu;
