import Text from './misc/Text.js';
import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class EmergencyOnebox extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.first_option = Parser.parse(data.firstOption);
        this.menu = Parser.parse(data.menu);
    }
}
EmergencyOnebox.type = 'EmergencyOnebox';
export default EmergencyOnebox;
//# sourceMappingURL=EmergencyOnebox.js.map