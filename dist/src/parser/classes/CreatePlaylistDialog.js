"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const helpers_1 = require("../helpers");
const Dropdown_1 = __importDefault(require("./Dropdown"));
const Text_1 = __importDefault(require("./misc/Text"));
class CreatePlaylistDialog extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text_1.default(data.dialogTitle).toString();
        this.title_placeholder = data.titlePlaceholder || '';
        this.privacy_option = ((_a = __1.default.parseItem(data.privacyOption, Dropdown_1.default)) === null || _a === void 0 ? void 0 : _a.entries) || null;
        this.create_button = __1.default.parseItem(data.cancelButton);
        this.cancel_button = __1.default.parseItem(data.cancelButton);
    }
}
CreatePlaylistDialog.type = 'CreatePlaylistDialog';
exports.default = CreatePlaylistDialog;
//# sourceMappingURL=CreatePlaylistDialog.js.map