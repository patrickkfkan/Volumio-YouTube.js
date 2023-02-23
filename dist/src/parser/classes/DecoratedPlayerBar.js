import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class DecoratedPlayerBar extends YTNode {
    constructor(data) {
        super();
        this.player_bar = Parser.parseItem(data.playerBar);
        this.player_bar_action_button = Parser.parseItem(data.playerBarActionButton);
    }
}
DecoratedPlayerBar.type = 'DecoratedPlayerBar';
export default DecoratedPlayerBar;
//# sourceMappingURL=DecoratedPlayerBar.js.map