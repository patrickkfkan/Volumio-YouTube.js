import AccountChannel from './AccountChannel';
import AccountItemSection from './AccountItemSection';
import { YTNode } from '../helpers';
declare class AccountSectionList extends YTNode {
    static type: string;
    contents: AccountItemSection | null;
    footers: AccountChannel | null;
    constructor(data: any);
}
export default AccountSectionList;
