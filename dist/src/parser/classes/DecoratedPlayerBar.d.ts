import { YTNode } from '../helpers.js';
import type Button from './Button.js';
import type MultiMarkersPlayerBar from './MultiMarkersPlayerBar.js';
import type { RawNode } from '../index.js';
declare class DecoratedPlayerBar extends YTNode {
    static type: string;
    player_bar: MultiMarkersPlayerBar | null;
    player_bar_action_button: Button | null;
    constructor(data: RawNode);
}
export default DecoratedPlayerBar;
