import { YTNode } from '../helpers';
import MusicMultiSelectMenu from './menus/MusicMultiSelectMenu';
declare class MusicSortFilterButton extends YTNode {
    static type: string;
    title: string;
    icon_type: string;
    menu: MusicMultiSelectMenu | null;
    constructor(data: any);
}
export default MusicSortFilterButton;
