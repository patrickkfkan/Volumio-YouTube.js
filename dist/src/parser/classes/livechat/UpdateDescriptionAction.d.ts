import Text from '../misc/Text';
import { YTNode } from '../../helpers';
declare class UpdateDescriptionAction extends YTNode {
    static type: string;
    description: Text;
    constructor(data: any);
}
export default UpdateDescriptionAction;
