"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextRun_1 = __importDefault(require("./TextRun"));
const EmojiRun_1 = __importDefault(require("./EmojiRun"));
class Text {
    constructor(data) {
        if ((data === null || data === void 0 ? void 0 : data.hasOwnProperty('runs')) && Array.isArray(data.runs)) {
            this.runs = data.runs.map((run) => run.emoji ?
                new EmojiRun_1.default(run) :
                new TextRun_1.default(run));
            this.text = this.runs.map((run) => run.text).join('');
        }
        else {
            this.text = (data === null || data === void 0 ? void 0 : data.simpleText) || 'N/A';
        }
    }
    toString() {
        return this.text;
    }
}
exports.default = Text;
//# sourceMappingURL=Text.js.map