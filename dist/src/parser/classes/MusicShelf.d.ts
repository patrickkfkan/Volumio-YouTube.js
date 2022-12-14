import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import MusicResponsiveListItem from './MusicResponsiveListItem';
import { YTNode } from '../helpers';
import Button from './Button';
declare class MusicShelf extends YTNode {
    static type: string;
    title: Text;
    contents: import("../helpers").ObservedArray<MusicResponsiveListItem>;
    endpoint: NavigationEndpoint | null;
    continuation: string | null;
    bottom_text: Text | null;
    bottom_button?: Button | null;
    subheaders?: Array<any>;
    constructor(data: any);
}
export default MusicShelf;
