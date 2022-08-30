import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class ChannelAboutFullMetadata extends YTNode {
    static type: string;
    id: string;
    name: Text;
    avatar: Thumbnail[];
    canonical_channel_url: string;
    views: Text;
    joined: Text;
    description: Text;
    email_reveal: NavigationEndpoint;
    can_reveal_email: boolean;
    country: Text;
    buttons: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default ChannelAboutFullMetadata;
