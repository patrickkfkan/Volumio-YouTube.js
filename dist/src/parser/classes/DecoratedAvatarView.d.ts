import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import AvatarView from './AvatarView.js';
export default class DecoratedAvatarView extends YTNode {
    static type: string;
    avatar: AvatarView | null;
    a11y_label: string;
    on_tap_endpoint?: NavigationEndpoint;
    constructor(data: RawNode);
}
