import type Chapter from './Chapter.js';
import type Heatmap from './Heatmap.js';
import type { RawNode } from '../index.js';
import { ObservedArray, YTNode } from '../helpers.js';
declare class Marker extends YTNode {
    static type: string;
    marker_key: string;
    value: {
        heatmap?: Heatmap | null;
        chapters?: Chapter[];
    };
    constructor(data: RawNode);
}
declare class MultiMarkersPlayerBar extends YTNode {
    static type: string;
    markers_map: ObservedArray<Marker>;
    constructor(data: RawNode);
}
export { Marker };
export default MultiMarkersPlayerBar;
