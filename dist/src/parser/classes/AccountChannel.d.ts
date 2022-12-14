import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class AccountChannel extends YTNode {
    static type: string;
    title: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default AccountChannel;
