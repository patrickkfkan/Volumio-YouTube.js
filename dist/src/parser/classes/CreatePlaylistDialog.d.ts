import { ObservedArray, YTNode } from '../helpers';
import Button from './Button';
import DropdownItem from './DropdownItem';
declare class CreatePlaylistDialog extends YTNode {
    static type: string;
    title: string;
    title_placeholder: string;
    privacy_option: ObservedArray<DropdownItem> | null;
    cancel_button: Button | null;
    create_button: Button | null;
    constructor(data: any);
}
export default CreatePlaylistDialog;
