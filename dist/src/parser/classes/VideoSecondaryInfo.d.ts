import Text from './misc/Text.js';
import Button from './Button.js';
import VideoOwner from './VideoOwner.js';
import SubscribeButton from './SubscribeButton.js';
import MetadataRowContainer from './MetadataRowContainer.js';
import { YTNode } from '../helpers.js';
declare class VideoSecondaryInfo extends YTNode {
    static type: string;
    owner: VideoOwner | null;
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
