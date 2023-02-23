import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem.js';
import MusicMenuItemDivider from './MusicMenuItemDivider.js';
import { YTNode } from '../../helpers.js';
declare class MusicMultiSelectMenu extends YTNode {
    static type: string;
    title: string;
    options: Array<MusicMultiSelectMenuItem | MusicMenuItemDivider>;
    constructor(data: any);
}
export default MusicMultiSelectMenu;
