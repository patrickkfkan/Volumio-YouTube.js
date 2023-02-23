import Parser from '../index.js';
import ChildElement from './misc/ChildElement.js';
import { YTNode } from '../helpers.js';
class Element extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        if (Reflect.has(data, 'elementRenderer')) {
            return Parser.parseItem(data, Element);
        }
        const type = data.newElement.type.componentType;
        this.model = Parser.parse(type === null || type === void 0 ? void 0 : type.model);
        if ((_a = data.newElement) === null || _a === void 0 ? void 0 : _a.childElements) {
            this.child_elements = ((_c = (_b = data.newElement) === null || _b === void 0 ? void 0 : _b.childElements) === null || _c === void 0 ? void 0 : _c.map((el) => new ChildElement(el))) || null;
        }
    }
}
Element.type = 'Element';
export default Element;
//# sourceMappingURL=Element.js.map