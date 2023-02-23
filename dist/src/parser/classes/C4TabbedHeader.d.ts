import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import type Button from './Button.js';
import type ChannelHeaderLinks from './ChannelHeaderLinks.js';
import type SubscribeButton from './SubscribeButton.js';
import { YTNode } from '../helpers.js';
declare class C4TabbedHeader extends YTNode {
    static type: string;
    author: Author;
    banner?: Thumbnail[];
    tv_banner?: Thumbnail[];
    mobile_banner?: Thumbnail[];
    subscribers?: Text;
    videos_count?: Text;
    sponsor_button?: Button | null;
    subscribe_button?: SubscribeButton | null;
    header_links?: ChannelHeaderLinks | null;
    channel_handle?: Text;
    channel_id?: string;
    constructor(data: any);
}
export default C4TabbedHeader;
