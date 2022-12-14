import EndScreenVideo from './EndScreenVideo';
import EndScreenPlaylist from './EndScreenPlaylist';
import { YTNode } from '../helpers';
declare class WatchNextEndScreen extends YTNode {
    static type: string;
    results: import("../helpers").ObservedArray<EndScreenPlaylist | EndScreenVideo>;
    title: string;
    constructor(data: any);
}
export default WatchNextEndScreen;
