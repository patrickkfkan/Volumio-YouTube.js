import NavigationEndpoint from './NavigationEndpoint';
import SectionList from './SectionList';
import MusicQueue from './MusicQueue';
import RichGrid from './RichGrid';
import { YTNode } from '../helpers';
declare class Tab extends YTNode {
    static type: string;
    title: string;
    selected: boolean;
    endpoint: NavigationEndpoint;
    content: MusicQueue | RichGrid | SectionList | null;
    constructor(data: any);
}
export default Tab;
