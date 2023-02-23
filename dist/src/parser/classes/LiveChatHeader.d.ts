import type Menu from './menus/Menu.js';
import type Button from './Button.js';
import type SortFilterSubMenu from './SortFilterSubMenu.js';
import { YTNode } from '../helpers.js';
declare class LiveChatHeader extends YTNode {
    static type: string;
    overflow_menu: Menu | null;
    collapse_button: Button | null;
    view_selector: SortFilterSubMenu | null;
    constructor(data: any);
}
export default LiveChatHeader;
