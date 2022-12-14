import { YTNode } from '../helpers';
import PlaylistPanelVideo from './PlaylistPanelVideo';
declare class PlaylistPanelVideoWrapper extends YTNode {
    static type: string;
    primary: PlaylistPanelVideo | null;
    counterpart: Array<PlaylistPanelVideo | null>;
    constructor(data: any);
}
export default PlaylistPanelVideoWrapper;
