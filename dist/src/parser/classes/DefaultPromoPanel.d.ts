import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
declare class DefaultPromoPanel extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    endpoint: NavigationEndpoint;
    large_form_factor_background_thumbnail: YTNode | null;
    small_form_factor_background_thumbnail: YTNode | null;
    scrim_color_values: number[];
    min_panel_display_duration_ms: number;
    min_video_play_duration_ms: number;
    scrim_duration: number;
    metadata_order: string;
    panel_layout: string;
    constructor(data: any);
}
export default DefaultPromoPanel;
