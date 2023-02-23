import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
declare class MusicHeader extends YTNode {
    static type: string;
    header?: import("../helpers.js").SuperParsedResult<YTNode> | undefined;
    title?: Text;
    constructor(data: any);
}
export default MusicHeader;
