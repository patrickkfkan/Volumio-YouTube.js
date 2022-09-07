import { ParsedResponse } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import Playlist from './Playlist';
import MusicHeader from '../classes/MusicHeader';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import HighlightsCarousel from '../classes/HighlightsCarousel';
import ItemSection from '../classes/ItemSection';
import Message from '../classes/Message';
declare class Recap {
    #private;
    header: HighlightsCarousel | MusicHeader | undefined;
    sections: import("../helpers").ObservedArray<ItemSection | Message | MusicCarouselShelf> | undefined;
    constructor(response: AxioslikeResponse, actions: Actions);
    /**
     * Retrieves recap playlist.
     */
    getPlaylist(): Promise<Playlist>;
    get page(): ParsedResponse;
}
export default Recap;
