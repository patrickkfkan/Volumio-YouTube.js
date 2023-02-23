import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class EmergencyOnebox extends YTNode {
    static type: string;
    title: Text;
    first_option: import("../helpers.js").SuperParsedResult<YTNode>;
    menu: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default EmergencyOnebox;
