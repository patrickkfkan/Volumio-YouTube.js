import AccountItemSectionHeader from './AccountItemSectionHeader.js';
import { YTNode } from '../helpers.js';
declare class AccountItemSection extends YTNode {
    static type: string;
    contents: any;
    header: AccountItemSectionHeader | null;
    constructor(data: any);
}
export default AccountItemSection;
