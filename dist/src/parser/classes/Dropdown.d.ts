import { ObservedArray, YTNode } from '../helpers';
import DropdownItem from './DropdownItem';
declare class Dropdown extends YTNode {
    static type: string;
    label: string;
    entries: ObservedArray<DropdownItem>;
    constructor(data: any);
}
export default Dropdown;
