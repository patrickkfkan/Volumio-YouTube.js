import PlaylistPanel from './PlaylistPanel';
import { YTNode } from '../helpers';
declare class MusicQueue extends YTNode {
    static type: string;
    content: PlaylistPanel | null;
    constructor(data: any);
}
export default MusicQueue;
