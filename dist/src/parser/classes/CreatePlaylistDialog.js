import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Dropdown from './Dropdown.js';
import Text from './misc/Text.js';
class CreatePlaylistDialog extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text(data.dialogTitle).toString();
        this.title_placeholder = data.titlePlaceholder || '';
        this.privacy_option = ((_a = Parser.parseItem(data.privacyOption, Dropdown)) === null || _a === void 0 ? void 0 : _a.entries) || null;
        this.create_button = Parser.parseItem(data.cancelButton);
        this.cancel_button = Parser.parseItem(data.cancelButton);
    }
}
CreatePlaylistDialog.type = 'CreatePlaylistDialog';
export default CreatePlaylistDialog;
//# sourceMappingURL=CreatePlaylistDialog.js.map