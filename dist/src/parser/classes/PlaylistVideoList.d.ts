import { YTNode } from '../helpers';
declare class PlaylistVideoList extends YTNode {
    static type: string;
    id: string;
    is_editable: boolean;
    can_reorder: boolean;
    videos: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default PlaylistVideoList;
