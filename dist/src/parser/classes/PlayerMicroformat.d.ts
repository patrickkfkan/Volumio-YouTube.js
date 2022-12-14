import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class PlayerMicroformat extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    thumbnails: Thumbnail[];
    embed: {
        iframe_url: string;
        flash_url: string;
        flash_secure_url: string;
        width: any;
        height: any;
    };
    length_seconds: number;
    channel: {
        id: string;
        name: string;
        url: string;
    };
    is_family_safe: boolean;
    is_unlisted: boolean;
    has_ypc_metadata: boolean;
    view_count: number;
    category: string;
    publish_date: string;
    upload_date: string;
    available_countries: string[];
    constructor(data: any);
}
export default PlayerMicroformat;
