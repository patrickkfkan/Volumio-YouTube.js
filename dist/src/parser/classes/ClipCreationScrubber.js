import { YTNode } from '../helpers.js';
class ClipCreationScrubber extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        super();
        this.length_template = data.lengthTemplate;
        this.max_length_ms = data.maxLengthMs;
        this.min_length_ms = data.minLengthMs;
        this.default_length_ms = data.defaultLengthMs;
        this.window_size_ms = data.windowSizeMs;
        this.start_label = (_b = (_a = data.startAccessibility) === null || _a === void 0 ? void 0 : _a.accessibilityData) === null || _b === void 0 ? void 0 : _b.label;
        this.end_label = (_d = (_c = data.endAccessibility) === null || _c === void 0 ? void 0 : _c.accessibilityData) === null || _d === void 0 ? void 0 : _d.label;
        this.duration_label = (_f = (_e = data.durationAccessibility) === null || _e === void 0 ? void 0 : _e.accessibilityData) === null || _f === void 0 ? void 0 : _f.label;
    }
}
ClipCreationScrubber.type = 'ClipCreationScrubber';
export default ClipCreationScrubber;
//# sourceMappingURL=ClipCreationScrubber.js.map