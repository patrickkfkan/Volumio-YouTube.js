import AccountItemSectionHeader from './AccountItemSectionHeader';
import { YTNode } from '../helpers';
declare class AccountItemSection extends YTNode {
    static type: string;
    contents: any;
    header: AccountItemSectionHeader | null;
    constructor(data: any);
}
export default AccountItemSection;
