import { Log } from '../../../utils/index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import EmojiRun from './EmojiRun.js';
import TextRun from './TextRun.js';
export function escape(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
// Place this here, instead of in a private static property,
// To avoid the performance penalty of the private field polyfill
const TAG = 'Text';
export default class Text {
    constructor(data) {
        var _a, _b, _c, _d;
        if (typeof data === 'object' && data !== null && Reflect.has(data, 'runs') && Array.isArray(data.runs)) {
            this.runs = data.runs.map((run) => run.emoji ?
                new EmojiRun(run) :
                new TextRun(run));
            this.text = this.runs.map((run) => run.text).join('');
        }
        else {
            this.text = data === null || data === void 0 ? void 0 : data.simpleText;
        }
        if (typeof data === 'object' && data !== null && Reflect.has(data, 'navigationEndpoint')) {
            this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        }
        if (typeof data === 'object' && data !== null && Reflect.has(data, 'titleNavigationEndpoint')) {
            this.endpoint = new NavigationEndpoint(data.titleNavigationEndpoint);
        }
        if (!this.endpoint) {
            if ((_b = (_a = this.runs) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.endpoint) {
                this.endpoint = (_d = (_c = this.runs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.endpoint;
            }
        }
    }
    static fromAttributed(data) {
        var _a, _b, _c;
        const { content, styleRuns: style_runs, commandRuns: command_runs, attachmentRuns: attachment_runs } = data;
        const runs = [
            {
                text: content,
                startIndex: 0
            }
        ];
        if (style_runs || command_runs || attachment_runs) {
            if (style_runs) {
                for (const style_run of style_runs) {
                    if (style_run.italic ||
                        style_run.strikethrough === 'LINE_STYLE_SINGLE' ||
                        style_run.weightLabel === 'FONT_WEIGHT_MEDIUM' ||
                        style_run.weightLabel === 'FONT_WEIGHT_BOLD') {
                        const matching_run = findMatchingRun(runs, style_run);
                        if (!matching_run) {
                            Log.warn(TAG, 'Unable to find matching run for style run. Skipping...', {
                                style_run,
                                input_data: data,
                                // For performance reasons, web browser consoles only expand an object, when the user clicks on it,
                                // So if we log the original runs object, it might have changed by the time the user looks at it.
                                // Deep clone, so that we log the exact state of the runs at this point.
                                parsed_runs: JSON.parse(JSON.stringify(runs))
                            });
                            continue;
                        }
                        // Comments use MEDIUM for bold text and video descriptions use BOLD for bold text
                        insertSubRun(runs, matching_run, style_run, {
                            bold: style_run.weightLabel === 'FONT_WEIGHT_MEDIUM' || style_run.weightLabel === 'FONT_WEIGHT_BOLD',
                            italics: style_run.italic,
                            strikethrough: style_run.strikethrough === 'LINE_STYLE_SINGLE'
                        });
                    }
                    else {
                        Log.debug(TAG, 'Skipping style run as it is doesn\'t have any information that we parse.', {
                            style_run,
                            input_data: data
                        });
                    }
                }
            }
            if (command_runs) {
                for (const command_run of command_runs) {
                    if (command_run.onTap) {
                        const matching_run = findMatchingRun(runs, command_run);
                        if (!matching_run) {
                            Log.warn(TAG, 'Unable to find matching run for command run. Skipping...', {
                                command_run,
                                input_data: data,
                                // For performance reasons, web browser consoles only expand an object, when the user clicks on it,
                                // So if we log the original runs object, it might have changed by the time the user looks at it.
                                // Deep clone, so that we log the exact state of the runs at this point.
                                parsed_runs: JSON.parse(JSON.stringify(runs))
                            });
                            continue;
                        }
                        insertSubRun(runs, matching_run, command_run, {
                            navigationEndpoint: command_run.onTap
                        });
                    }
                    else {
                        Log.debug(TAG, 'Skipping command run as it is missing the "doTap" property.', {
                            command_run,
                            input_data: data
                        });
                    }
                }
            }
            if (attachment_runs) {
                for (const attachment_run of attachment_runs) {
                    const matching_run = findMatchingRun(runs, attachment_run);
                    if (!matching_run) {
                        Log.warn(TAG, 'Unable to find matching run for attachment run. Skipping...', {
                            attachment_run,
                            input_data: data,
                            // For performance reasons, web browser consoles only expand an object, when the user clicks on it,
                            // So if we log the original runs object, it might have changed by the time the user looks at it.
                            // Deep clone, so that we log the exact state of the runs at this point.
                            parsed_runs: JSON.parse(JSON.stringify(runs))
                        });
                        continue;
                    }
                    if (attachment_run.length === 0) {
                        matching_run.attachment = attachment_run;
                    }
                    else {
                        const offset_start_index = attachment_run.startIndex - matching_run.startIndex;
                        const text = matching_run.text.substring(offset_start_index, offset_start_index + attachment_run.length);
                        const is_custom_emoji = (/^:[^:]+:$/).test(text);
                        if (((_c = (_b = (_a = attachment_run.element) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.imageType) === null || _c === void 0 ? void 0 : _c.image) && (is_custom_emoji || (/^(?:\p{Emoji}|\u200d)+$/u).test(text))) {
                            const emoji = {
                                image: attachment_run.element.type.imageType.image,
                                isCustomEmoji: is_custom_emoji,
                                shortcuts: is_custom_emoji ? [text] : undefined
                            };
                            insertSubRun(runs, matching_run, attachment_run, { emoji });
                        }
                        else {
                            insertSubRun(runs, matching_run, attachment_run, {
                                attachment: attachment_run
                            });
                        }
                    }
                }
            }
        }
        return new Text({ runs });
    }
    /**
     * Converts the text to HTML.
     * @returns The HTML.
     */
    toHTML() {
        return this.runs ? this.runs.map((run) => run.toHTML()).join('') : this.text;
    }
    /**
     * Checks if the text is empty.
     * @returns Whether the text is empty.
     */
    isEmpty() {
        return this.text === undefined;
    }
    /**
     * Converts the text to a string.
     * @returns The text.
     */
    toString() {
        return this.text || 'N/A';
    }
}
function findMatchingRun(runs, response_run) {
    return runs.find((run) => {
        return run.startIndex <= response_run.startIndex &&
            response_run.startIndex + response_run.length <= run.startIndex + run.text.length;
    });
}
function insertSubRun(runs, original_run, response_run, properties_to_add) {
    const replace_index = runs.indexOf(original_run);
    const replacement_runs = [];
    const offset_start_index = response_run.startIndex - original_run.startIndex;
    // Stuff before the run
    if (response_run.startIndex > original_run.startIndex) {
        replacement_runs.push(Object.assign(Object.assign({}, original_run), { text: original_run.text.substring(0, offset_start_index) }));
    }
    replacement_runs.push(Object.assign(Object.assign(Object.assign({}, original_run), { text: original_run.text.substring(offset_start_index, offset_start_index + response_run.length), startIndex: response_run.startIndex }), properties_to_add));
    // Stuff after the run
    if (response_run.startIndex + response_run.length < original_run.startIndex + original_run.text.length) {
        replacement_runs.push(Object.assign(Object.assign({}, original_run), { text: original_run.text.substring(offset_start_index + response_run.length), startIndex: response_run.startIndex + response_run.length }));
    }
    runs.splice(replace_index, 1, ...replacement_runs);
}
//# sourceMappingURL=Text.js.map