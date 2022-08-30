import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class PlayerErrorMessage extends YTNode {
    static type: string;
    subreason: Text;
    reason: Text;
    proceed_button: import("../helpers").SuperParsedResult<YTNode>;
    thumbnails: Thumbnail[];
    icon_type: string;
    constructor(data: any);
}
export default PlayerErrorMessage;
