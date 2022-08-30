"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
class MetadataBadge extends helpers_1.YTNode {
    constructor(data) {
        super();
        if (data === null || data === void 0 ? void 0 : data.icon) {
            this.icon_type = data.icon.iconType;
        }
        if (data === null || data === void 0 ? void 0 : data.style) {
            this.style = data.style;
        }
        this.tooltip = (data === null || data === void 0 ? void 0 : data.tooltip) || (data === null || data === void 0 ? void 0 : data.iconTooltip) || null;
    }
}
MetadataBadge.type = 'MetadataBadge';
exports.default = MetadataBadge;
//# sourceMappingURL=MetadataBadge.js.map