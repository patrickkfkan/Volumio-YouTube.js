import { ParsedResponse } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import MusicDetailHeader from '../classes/MusicDetailHeader';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
declare class Album {
    #private;
    header: MusicDetailHeader;
    contents: import("../helpers").ObservedArray<import("../classes/MusicResponsiveListItem").default> | undefined;
    sections: MusicCarouselShelf[];
    url: string | null;
    constructor(response: AxioslikeResponse, actions: Actions);
    get page(): ParsedResponse;
}
export default Album;
