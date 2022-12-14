import Text from './misc/Text';
import Button from './Button';
import SubscribeButton from './SubscribeButton';
import MetadataRowContainer from './MetadataRowContainer';
import { YTNode } from '../helpers';
declare class VideoSecondaryInfo extends YTNode {
    static type: string;
    owner: import("../helpers").SuperParsedResult<YTNode>;
    description: Text;
    subscribe_button: Button | SubscribeButton | null;
    metadata: MetadataRowContainer | null;
    show_more_text: string;
    show_less_text: string;
    default_expanded: string;
    description_collapsed_lines: string;
    constructor(data: any);
}
export default VideoSecondaryInfo;
