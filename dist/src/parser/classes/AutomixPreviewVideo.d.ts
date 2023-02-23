import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
declare class AutomixPreviewVideo extends YTNode {
    static type: string;
    playlist_video?: {
        endpoint: NavigationEndpoint;
    };
    constructor(data: any);
}
export default AutomixPreviewVideo;
