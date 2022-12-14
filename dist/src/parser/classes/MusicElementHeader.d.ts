import Element from './Element';
import { YTNode } from '../helpers';
declare class MusicElementHeader extends YTNode {
    static type: string;
    element: Element | null;
    constructor(data: any);
}
export default MusicElementHeader;
