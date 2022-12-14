import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem';
import MusicMenuItemDivider from './MusicMenuItemDivider';
import { YTNode } from '../../helpers';
declare class MusicMultiSelectMenu extends YTNode {
    static type: string;
    title: string;
    options: Array<MusicMultiSelectMenuItem | MusicMenuItemDivider>;
    constructor(data: any);
}
export default MusicMultiSelectMenu;
