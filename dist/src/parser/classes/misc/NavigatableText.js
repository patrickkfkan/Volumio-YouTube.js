"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./Text"));
const NavigationEndpoint_1 = __importDefault(require("../NavigationEndpoint"));
class NavigatableText extends Text_1.default {
    constructor(node) {
        var _a, _b;
        super(node);
        // TODO: is this needed? Text now supports this itself
        this.endpoint =
            ((_b = (_a = node.runs) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.navigationEndpoint) ?
                new NavigationEndpoint_1.default(node.runs[0].navigationEndpoint) :
                node.navigationEndpoint ?
                    new NavigationEndpoint_1.default(node.navigationEndpoint) :
                    node.titleNavigationEndpoint ?
                        new NavigationEndpoint_1.default(node.titleNavigationEndpoint) : null;
    }
    toJSON() {
        return this;
    }
}
NavigatableText.type = 'NavigatableText';
exports.default = NavigatableText;
//# sourceMappingURL=NavigatableText.js.map