import Button from './Button';
import ChipCloudChip from './ChipCloudChip';
import { YTNode } from '../helpers';
declare class ChipCloud extends YTNode {
    static type: string;
    chips: import("../helpers").ObservedArray<ChipCloudChip>;
    next_button: Button | null;
    previous_button: Button | null;
    horizontal_scrollable: any;
    constructor(data: any);
}
export default ChipCloud;
