import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class Alert extends YTNode {
    static type: string;
    text: Text;
    alert_type: string;
    constructor(data: any);
}
export default Alert;
