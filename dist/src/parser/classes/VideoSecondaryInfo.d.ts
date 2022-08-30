import Text from './misc/Text';
import { YTNode } from '../helpers';
import MetadataRowContainer from './MetadataRowContainer';
declare class VideoSecondaryInfo extends YTNode {
    static type: string;
    owner: import("../helpers").SuperParsedResult<YTNode>;
    description: Text;
    subscribe_button: import("../helpers").SuperParsedResult<YTNode>;
    metadata: MetadataRowContainer | null;
    show_more_text: string;
    show_less_text: string;
    default_expanded: string;
    description_collapsed_lines: string;
    constructor(data: any);
}
export default VideoSecondaryInfo;
