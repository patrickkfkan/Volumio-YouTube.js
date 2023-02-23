import TextRun from './TextRun.js';
import EmojiRun from './EmojiRun.js';
export interface Run {
    text: string;
    toString(): string;
    toHTML(): string;
}
export declare function escape(text: string): string;
declare class Text {
    text: string;
    runs: (TextRun | EmojiRun)[] | undefined;
    constructor(data: any);
    toHTML(): string;
    toString(): string;
}
export default Text;
