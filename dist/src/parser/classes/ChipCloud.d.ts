import { YTNode } from '../helpers';
import ChipCloudChip from './ChipCloudChip';
declare class ChipCloud extends YTNode {
    static type: string;
    chips: import("../helpers").ObservedArray<ChipCloudChip>;
    next_button: import("../helpers").SuperParsedResult<YTNode>;
    previous_button: import("../helpers").SuperParsedResult<YTNode>;
    horizontal_scrollable: any;
    constructor(data: any);
}
export default ChipCloud;
