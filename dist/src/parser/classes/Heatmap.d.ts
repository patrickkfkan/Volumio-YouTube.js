import type HeatMarker from './HeatMarker.js';
import { YTNode } from '../helpers.js';
declare class Heatmap extends YTNode {
    static type: string;
    max_height_dp: number;
    min_height_dp: number;
    show_hide_animation_duration_millis: number;
    heat_markers: HeatMarker[];
    heat_markers_decorations: any;
    constructor(data: any);
}
export default Heatmap;