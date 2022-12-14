import Text from './Text';
import NavigationEndpoint from '../NavigationEndpoint';
declare class NavigatableText extends Text {
    static type: string;
    endpoint: NavigationEndpoint | null;
    constructor(node: any);
    toJSON(): NavigatableText;
}
export default NavigatableText;
