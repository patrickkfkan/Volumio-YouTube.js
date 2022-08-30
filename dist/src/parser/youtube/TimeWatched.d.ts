import { ParsedResponse } from '..';
import { AxioslikeResponse } from '../../core/Actions';
import ItemSection from '../classes/ItemSection';
declare class TimeWatched {
    #private;
    contents: import("../helpers").ObservedArray<ItemSection> | undefined;
    constructor(response: AxioslikeResponse);
    get page(): ParsedResponse;
}
export default TimeWatched;
