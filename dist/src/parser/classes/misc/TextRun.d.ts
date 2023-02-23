import NavigationEndpoint from '../NavigationEndpoint.js';
import { Run } from './Text.js';
declare class TextRun implements Run {
    text: string;
    endpoint: NavigationEndpoint | undefined;
    bold: boolean;
    italics: boolean;
    strikethrough: boolean;
    constructor(data: any);
    toString(): string;
    toHTML(): string;
}
export default TextRun;
