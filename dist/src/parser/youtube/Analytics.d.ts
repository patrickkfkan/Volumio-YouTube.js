import { ParsedResponse } from '..';
import { AxioslikeResponse } from '../../core/Actions';
declare class Analytics {
    #private;
    sections: (import("../helpers").YTNode | undefined)[] | undefined;
    constructor(response: AxioslikeResponse);
    get page(): ParsedResponse;
}
export default Analytics;
