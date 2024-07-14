import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import ButtonView from './ButtonView.js';
export default class ToggleButtonView extends YTNode {
    static type: string;
    default_button: ButtonView | null;
    toggled_button: ButtonView | null;
    identifier?: string;
    is_toggling_disabled: boolean;
    constructor(data: RawNode);
}
