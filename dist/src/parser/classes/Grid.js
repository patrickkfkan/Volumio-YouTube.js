"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class Grid extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.items = index_1.default.parse(data.items);
        this.is_collapsible = data.isCollapsible;
        this.visible_row_count = data.visibleRowCount;
        this.target_id = data.targetId;
        this.continuation = ((_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || null;
        if (data.header) {
            this.header = index_1.default.parse(data.header);
        }
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
Grid.type = 'Grid';
exports.default = Grid;
//# sourceMappingURL=Grid.js.map