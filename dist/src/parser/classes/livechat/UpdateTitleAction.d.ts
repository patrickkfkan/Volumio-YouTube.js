import Text from '../misc/Text';
import { YTNode } from '../../helpers';
declare class UpdateTitleAction extends YTNode {
    static type: string;
    title: Text;
    constructor(data: any);
}
export default UpdateTitleAction;
