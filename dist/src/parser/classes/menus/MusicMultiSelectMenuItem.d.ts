import { YTNode } from '../../helpers';
import NavigationEndpoint from '../NavigationEndpoint';
declare class MusicMultiSelectMenuItem extends YTNode {
    static type: string;
    title: string;
    form_item_entity_key: string;
    selected_icon_type: string;
    endpoint?: NavigationEndpoint;
    selected: boolean;
    constructor(data: any);
}
export default MusicMultiSelectMenuItem;
