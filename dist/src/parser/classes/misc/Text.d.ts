import TextRun from './TextRun';
import EmojiRun from './EmojiRun';
declare class Text {
    text: string;
    runs: (TextRun | EmojiRun)[] | undefined;
    constructor(data: any);
    toString(): string;
}
export default Text;
