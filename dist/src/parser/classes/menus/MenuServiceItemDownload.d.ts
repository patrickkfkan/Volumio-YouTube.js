import NavigationEndpoint from '../NavigationEndpoint';
import { YTNode } from '../../helpers';
declare class MenuServiceItemDownload extends YTNode {
    static type: string;
    has_separator: boolean;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default MenuServiceItemDownload;
