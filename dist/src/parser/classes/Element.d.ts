import ChildElement from './misc/ChildElement';
import { YTNode } from '../helpers';
declare class Element extends YTNode {
    static type: string;
    model: import("../helpers").SuperParsedResult<YTNode> | undefined;
    child_elements?: ChildElement[];
    constructor(data: any);
}
export default Element;
