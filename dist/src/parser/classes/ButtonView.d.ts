import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
export default class ButtonView extends YTNode {
    static type: string;
    icon_name: string;
    title: string;
    accessibility_text: string;
    style: string;
    is_full_width: boolean;
    button_type: string;
    button_size: string;
    on_tap: NavigationEndpoint;
    constructor(data: RawNode);
}
