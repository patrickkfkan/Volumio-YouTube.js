import AccountChannel from './AccountChannel.js';
import AccountItemSection from './AccountItemSection.js';
import { YTNode } from '../helpers.js';
declare class AccountSectionList extends YTNode {
    static type: string;
    contents: AccountItemSection | null;
    footers: AccountChannel | null;
    constructor(data: any);
}
export default AccountSectionList;
