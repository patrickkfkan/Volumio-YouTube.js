import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class ProfileColumnUserInfo extends YTNode {
    static type: string;
    title: Text;
    thumbnails: Thumbnail[];
    constructor(data: any);
}
export default ProfileColumnUserInfo;
