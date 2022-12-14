import Text from './misc/Text';
import CompactLink from './CompactLink';
import { ObservedArray, YTNode } from '../helpers';
declare class SettingsSidebar extends YTNode {
    static type: string;
    title: Text;
    items: ObservedArray<CompactLink>;
    constructor(data: any);
    get contents(): ObservedArray<CompactLink>;
}
export default SettingsSidebar;
