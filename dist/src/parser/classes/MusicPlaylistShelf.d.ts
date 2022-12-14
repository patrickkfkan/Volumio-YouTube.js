import MusicResponsiveListItem from './MusicResponsiveListItem';
import { YTNode } from '../helpers';
declare class MusicPlaylistShelf extends YTNode {
    static type: string;
    playlist_id: string;
    contents: import("../helpers").ObservedArray<MusicResponsiveListItem>;
    collapsed_item_count: number;
    continuation: string | null;
    constructor(data: any);
}
export default MusicPlaylistShelf;
