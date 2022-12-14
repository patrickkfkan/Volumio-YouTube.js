import MetadataBadge from './MetadataBadge';
import Thumbnail from './misc/Thumbnail';
declare class LiveChatAuthorBadge extends MetadataBadge {
    static type: string;
    custom_thumbnail: Thumbnail[] | null;
    constructor(data: any);
}
export default LiveChatAuthorBadge;
