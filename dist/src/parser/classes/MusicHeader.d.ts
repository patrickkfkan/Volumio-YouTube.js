import { YTNode } from '../helpers';
import Text from './misc/Text';
declare class MusicHeader extends YTNode {
    static type: string;
    header?: import("../helpers").SuperParsedResult<YTNode> | undefined;
    title?: Text;
    constructor(data: any);
}
export default MusicHeader;
