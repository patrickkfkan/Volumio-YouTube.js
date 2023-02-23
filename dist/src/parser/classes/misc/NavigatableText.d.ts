import Text from './Text.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
declare class NavigatableText extends Text {
    static type: string;
    endpoint: NavigationEndpoint | null;
    constructor(node: any);
    toJSON(): NavigatableText;
}
export default NavigatableText;
