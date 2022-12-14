import { ParsedResponse } from '..';
import { AxioslikeResponse } from '../../core/Actions';
import AccountItemSection from '../classes/AccountItemSection';
import AccountChannel from '../classes/AccountChannel';
declare class AccountInfo {
    #private;
    contents: AccountItemSection | null;
    footers: AccountChannel | null;
    constructor(response: AxioslikeResponse);
    get page(): ParsedResponse;
}
export default AccountInfo;
