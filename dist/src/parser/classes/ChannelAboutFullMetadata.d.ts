import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type Button from './Button.js';
import { YTNode } from '../helpers.js';
declare class ChannelAboutFullMetadata extends YTNode {
    static type: string;
    id: string;
    name: Text;
    avatar: Thumbnail[];
    canonical_channel_url: string;
    primary_links: {
        endpoint: NavigationEndpoint;
        icon: Thumbnail[];
        title: Text;
    }[];
    views: Text;
    joined: Text;
    description: Text;
    email_reveal: NavigationEndpoint;
    can_reveal_email: boolean;
    country: Text;
    buttons: Button[];
    constructor(data: any);
}
export default ChannelAboutFullMetadata;
