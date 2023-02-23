import NavigationEndpoint from '../NavigationEndpoint.js';
import { YTNode } from '../../helpers.js';
declare class MenuServiceItemDownload extends YTNode {
    static type: string;
    has_separator: boolean;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default MenuServiceItemDownload;
