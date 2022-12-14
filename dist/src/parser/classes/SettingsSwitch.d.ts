import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class SettingsSwitch extends YTNode {
    static type: string;
    title: Text;
    subtitle: Text;
    enabled: boolean;
    enable_endpoint: NavigationEndpoint;
    disable_endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default SettingsSwitch;
