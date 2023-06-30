import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
export default class ChipCloudChip extends YTNode {
    static type: string;
    is_selected: boolean;
    endpoint?: NavigationEndpoint;
    text: string;
    /*** Volumio-YouTube.js ***/
    deselect_endpoint?: NavigationEndpoint;
    constructor(data: RawNode);
}
