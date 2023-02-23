import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
class UpsellDialog extends YTNode {
    constructor(data) {
        super();
        this.message_title = new Text(data.dialogMessageTitle);
        this.message_text = new Text(data.dialogMessageText);
        this.action_button = Parser.parseItem(data.actionButton);
        this.dismiss_button = Parser.parseItem(data.dismissButton);
        this.is_visible = data.isVisible;
    }
}
UpsellDialog.type = 'UpsellDialog';
export default UpsellDialog;
//# sourceMappingURL=UpsellDialog.js.map