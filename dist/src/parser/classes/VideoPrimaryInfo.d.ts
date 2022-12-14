import Text from './misc/Text';
import { YTNode } from '../helpers';
import Menu from './menus/Menu';
declare class VideoPrimaryInfo extends YTNode {
    static type: string;
    title: Text;
    super_title_link: Text;
    view_count: Text;
    short_view_count: Text;
    published: Text;
    menu: Menu | null;
    constructor(data: any);
}
export default VideoPrimaryInfo;
