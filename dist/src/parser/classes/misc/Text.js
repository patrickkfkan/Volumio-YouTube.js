import TextRun from './TextRun.js';
import EmojiRun from './EmojiRun.js';
export function escape(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
class Text {
    constructor(data) {
        if ((data === null || data === void 0 ? void 0 : data.hasOwnProperty('runs')) && Array.isArray(data.runs)) {
            this.runs = data.runs.map((run) => run.emoji ?
                new EmojiRun(run) :
                new TextRun(run));
            this.text = this.runs.map((run) => run.text).join('');
        }
        else {
            this.text = (data === null || data === void 0 ? void 0 : data.simpleText) || 'N/A';
        }
    }
    toHTML() {
        return this.runs ? this.runs.map((run) => run.toHTML()).join('') : this.text;
    }
    toString() {
        return this.text;
    }
}
export default Text;
//# sourceMappingURL=Text.js.map