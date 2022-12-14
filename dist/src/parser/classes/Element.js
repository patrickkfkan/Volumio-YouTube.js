"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const ChildElement_1 = __importDefault(require("./misc/ChildElement"));
const helpers_1 = require("../helpers");
class Element extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        if (Reflect.has(data, 'elementRenderer')) {
            return index_1.default.parseItem(data, Element);
        }
        const type = data.newElement.type.componentType;
        this.model = index_1.default.parse(type === null || type === void 0 ? void 0 : type.model);
        if ((_a = data.newElement) === null || _a === void 0 ? void 0 : _a.childElements) {
            this.child_elements = ((_c = (_b = data.newElement) === null || _b === void 0 ? void 0 : _b.childElements) === null || _c === void 0 ? void 0 : _c.map((el) => new ChildElement_1.default(el))) || null;
        }
    }
}
Element.type = 'Element';
exports.default = Element;
//# sourceMappingURL=Element.js.map