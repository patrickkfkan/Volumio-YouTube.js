import Text from './misc/Text';
import PlaylistPanelVideo from './PlaylistPanelVideo';
import { YTNode } from '../helpers';
import AutomixPreviewVideo from './AutomixPreviewVideo';
import PlaylistPanelVideoWrapper from './PlaylistPanelVideoWrapper';
declare class PlaylistPanel extends YTNode {
    static type: string;
    title: string;
    title_text: Text;
    contents: import("../helpers").ObservedArray<AutomixPreviewVideo | PlaylistPanelVideo | PlaylistPanelVideoWrapper>;
    playlist_id: string;
    is_infinite: boolean;
    continuation: string;
    is_editable: boolean;
    preview_description: string;
    num_items_to_show: string;
    constructor(data: any);
}
export default PlaylistPanel;
