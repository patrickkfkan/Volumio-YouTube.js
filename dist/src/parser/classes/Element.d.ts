import ChildElement from './misc/ChildElement.js';
import { YTNode } from '../helpers.js';
declare class Element extends YTNode {
    static type: string;
    model: import("../helpers.js").SuperParsedResult<YTNode> | undefined;
    child_elements?: ChildElement[];
    constructor(data: any);
}
export default Element;
