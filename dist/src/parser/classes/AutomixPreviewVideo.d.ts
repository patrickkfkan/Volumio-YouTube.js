import { YTNode } from '../helpers';
import NavigationEndpoint from './NavigationEndpoint';
declare class AutomixPreviewVideo extends YTNode {
    static type: string;
    playlist_video?: {
        endpoint: NavigationEndpoint;
    };
    constructor(data: any);
}
export default AutomixPreviewVideo;
