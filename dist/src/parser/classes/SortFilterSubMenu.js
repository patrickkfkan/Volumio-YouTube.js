"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
class SortFilterSubMenu extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.sub_menu_items = data.subMenuItems.map((item) => {
            var _a;
            return ({
                title: item.title,
                selected: item.selected,
                continuation: (_a = item.continuation) === null || _a === void 0 ? void 0 : _a.reloadContinuationData.continuation,
                subtitle: item.subtitle
            });
        });
        this.label = data.accessibility.accessibilityData.label;
    }
}
SortFilterSubMenu.type = 'SortFilterSubMenu';
exports.default = SortFilterSubMenu;
//# sourceMappingURL=SortFilterSubMenu.js.map