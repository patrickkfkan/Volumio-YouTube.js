import { YTNode } from '../helpers';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import Menu from './menus/Menu';
declare class MusicVisualHeader extends YTNode {
    static type: string;
    title: Text;
    thumbnails: Thumbnail[];
    menu: Menu | null;
    foreground_thumbnails: Thumbnail[];
    constructor(data: any);
}
export default MusicVisualHeader;
