import Text from './misc/Text';
import { YTNode } from '../helpers';
import MusicThumbnail from './MusicThumbnail';
import Button from './Button';
import IconLink from './IconLink';
declare class MusicCarouselShelfBasicHeader extends YTNode {
    static type: string;
    strapline?: Text;
    title: Text;
    thumbnail?: MusicThumbnail | null;
    more_content?: Button | null;
    end_icons?: Array<IconLink>;
    constructor(data: any);
}
export default MusicCarouselShelfBasicHeader;
