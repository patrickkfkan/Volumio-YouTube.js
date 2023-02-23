import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
declare class UpdateViewershipAction extends YTNode {
    static type: string;
    view_count: Text;
    extra_short_view_count: Text;
    is_live: boolean;
    constructor(data: any);
}
export default UpdateViewershipAction;
