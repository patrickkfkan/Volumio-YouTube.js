import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
declare class GuideEntry extends YTNode {
    static type: string;
    title: Text;
    endpoint: NavigationEndpoint;
    icon_type?: string;
    thumbnails?: Thumbnail[];
    badges?: any;
    is_primary: boolean;
    constructor(data: any);
}
export default GuideEntry;
