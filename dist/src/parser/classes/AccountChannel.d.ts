import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class AccountChannel extends YTNode {
    static type: string;
    title: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default AccountChannel;
