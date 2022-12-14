import Text from './misc/Text';
import Author from './misc/Author';
import { YTNode } from '../helpers';
declare class VideoOwner extends YTNode {
    static type: string;
    subscription_button: any;
    subscriber_count: Text;
    author: Author;
    constructor(data: any);
}
export default VideoOwner;
