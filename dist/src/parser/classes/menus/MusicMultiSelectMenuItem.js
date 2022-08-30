"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const Text_1 = __importDefault(require("../misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("../NavigationEndpoint"));
class MusicMultiSelectMenuItem extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        this.title = new Text_1.default(data.title).text;
        this.form_item_entity_key = data.formItemEntityKey;
        this.selected_icon_type = ((_a = data.selectedIcon) === null || _a === void 0 ? void 0 : _a.iconType) || null;
        const command = (_d = (_c = (_b = data.selectedCommand) === null || _b === void 0 ? void 0 : _b.commandExecutorCommand) === null || _c === void 0 ? void 0 : _c.commands) === null || _d === void 0 ? void 0 : _d.find((command) => { var _a; return (_a = command.musicBrowseFormBinderCommand) === null || _a === void 0 ? void 0 : _a.browseEndpoint; });
        if (command) {
            /**
             * At this point, endpoint will still be missing `form_data` field which is required for
             * selection to take effect. This can only be obtained from the response data which
             * we don't have here. We shall delegate this task back to `Parser`.
             */
            this.endpoint = new NavigationEndpoint_1.default(command.musicBrowseFormBinderCommand);
        }
        /**
         * Inferring selected state from existence of endpoint. `Parser` shall
         * update this with the definitive value obtained from response data.
         */
        this.selected = !!this.endpoint;
    }
}
MusicMultiSelectMenuItem.type = 'MusicMultiSelectMenuItem';
exports.default = MusicMultiSelectMenuItem;
//# sourceMappingURL=MusicMultiSelectMenuItem.js.map