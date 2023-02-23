import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Button from './Button.js';
class HorizontalCardList extends YTNode {
    constructor(data) {
        super();
        this.cards = Parser.parseArray(data.cards);
        this.header = Parser.parseItem(data.header);
        this.previous_button = Parser.parseItem(data.previousButton, Button);
        this.next_button = Parser.parseItem(data.nextButton, Button);
    }
}
HorizontalCardList.type = 'HorizontalCardList';
export default HorizontalCardList;
//# sourceMappingURL=HorizontalCardList.js.map