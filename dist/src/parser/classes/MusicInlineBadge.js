"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
class MusicInlineBadge extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.icon_type = data.icon.iconType;
        this.label = data.accessibilityData.accessibilityData.label;
    }
}
MusicInlineBadge.type = 'MusicInlineBadge';
exports.default = MusicInlineBadge;
//# sourceMappingURL=MusicInlineBadge.js.map