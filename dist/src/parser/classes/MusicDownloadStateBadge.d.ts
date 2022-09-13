import { YTNode } from '../helpers';
declare class MusicDownloadStateBadge extends YTNode {
    static type: string;
    playlist_id: string;
    supported_download_states: string[];
    constructor(data: any);
}
export default MusicDownloadStateBadge;
