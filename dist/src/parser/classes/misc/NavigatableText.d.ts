import Text from './Text.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import type { RawNode } from '../../index.js';
declare class NavigatableText extends Text {
    static type: string;
    endpoint: NavigationEndpoint | null;
    constructor(node: RawNode);
    toJSON(): NavigatableText;
}
export default NavigatableText;
