import Thumbnail from './Thumbnail';
declare class EmojiRun {
    text: string;
    emoji: {
        emoji_id: string;
        shortcuts: string[];
        search_terms: string[];
        image: Thumbnail[];
    };
    constructor(data: any);
}
export default EmojiRun;
