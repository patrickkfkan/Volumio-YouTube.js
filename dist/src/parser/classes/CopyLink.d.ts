import Button from './Button';
import { YTNode } from '../helpers';
declare class CopyLink extends YTNode {
    static type: string;
    copy_button: Button | null;
    short_url: string;
    style: string;
    constructor(data: any);
}
export default CopyLink;
