import NavigationEndpoint from '../NavigationEndpoint.js';
import type SectionList from '../SectionList.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class AnchoredSection extends YTNode {
    static type: string;
    title: string;
    content: SectionList | null;
    endpoint: NavigationEndpoint;
    category_assets: {
        asset_key: string;
        background_color: string;
    };
    category_type: string;
    constructor(data: RawNode);
}
export default AnchoredSection;
