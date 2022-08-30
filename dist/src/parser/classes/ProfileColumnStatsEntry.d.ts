import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class ProfileColumnStatsEntry extends YTNode {
    static type: string;
    label: Text;
    value: Text;
    constructor(data: any);
}
export default ProfileColumnStatsEntry;
