import MusicTwoRowItem from './MusicTwoRowItem.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';
import MusicCarouselShelfBasicHeader from './MusicCarouselShelfBasicHeader.js';
import MusicNavigationButton from './MusicNavigationButton.js';
import { YTNode } from '../helpers.js';
declare class MusicCarouselShelf extends YTNode {
    static type: string;
    header: MusicCarouselShelfBasicHeader | null;
    contents: Array<MusicTwoRowItem | MusicResponsiveListItem | MusicNavigationButton>;
    num_items_per_column: number | null;
    constructor(data: any);
}
export default MusicCarouselShelf;
