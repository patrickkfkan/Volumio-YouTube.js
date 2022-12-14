import MusicTwoRowItem from './MusicTwoRowItem';
import MusicResponsiveListItem from './MusicResponsiveListItem';
import MusicCarouselShelfBasicHeader from './MusicCarouselShelfBasicHeader';
import MusicNavigationButton from './MusicNavigationButton';
import { YTNode } from '../helpers';
declare class MusicCarouselShelf extends YTNode {
    static type: string;
    header: MusicCarouselShelfBasicHeader | null;
    contents: Array<MusicTwoRowItem | MusicResponsiveListItem | MusicNavigationButton>;
    num_items_per_column: number | null;
    constructor(data: any);
}
export default MusicCarouselShelf;
