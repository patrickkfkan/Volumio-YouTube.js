import { YTNode } from '../helpers';
declare class PlaylistMetadata extends YTNode {
    static type: string;
    title: string;
    description: string;
    constructor(data: any);
}
export default PlaylistMetadata;
