import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class EmergencyOnebox extends YTNode {
    static type: string;
    title: Text;
    first_option: import("../helpers").SuperParsedResult<YTNode>;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default EmergencyOnebox;
