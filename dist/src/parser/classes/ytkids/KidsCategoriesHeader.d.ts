import type Button from '../Button.js';
import type KidsCategoryTab from './KidsCategoryTab.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class KidsCategoriesHeader extends YTNode {
    static type: string;
    category_tabs: KidsCategoryTab[];
    privacy_button: Button | null;
    constructor(data: RawNode);
}
export default KidsCategoriesHeader;
