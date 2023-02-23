import { Run } from './Text.js';
import Thumbnail from './Thumbnail.js';
declare class EmojiRun implements Run {
    text: string;
    emoji: {
        emoji_id: string;
        shortcuts: string[];
        search_terms: string[];
        image: Thumbnail[];
        is_custom: boolean;
    };
    constructor(data: any);
    toString(): string;
    toHTML(): string;
}
export default EmojiRun;
