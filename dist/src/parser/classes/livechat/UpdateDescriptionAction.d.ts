import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
declare class UpdateDescriptionAction extends YTNode {
    static type: string;
    description: Text;
    constructor(data: any);
}
export default UpdateDescriptionAction;
