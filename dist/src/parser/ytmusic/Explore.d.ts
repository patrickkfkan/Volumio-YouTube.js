import { ParsedResponse } from '..';
import { AxioslikeResponse } from '../../core/Actions';
import MusicNavigationButton from '../classes/MusicNavigationButton';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
declare class Explore {
    #private;
    top_buttons: MusicNavigationButton[];
    sections: MusicCarouselShelf[];
    constructor(response: AxioslikeResponse);
    get page(): ParsedResponse;
}
export default Explore;
