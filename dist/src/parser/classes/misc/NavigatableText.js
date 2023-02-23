import Text from './Text.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
class NavigatableText extends Text {
    constructor(node) {
        var _a, _b;
        super(node);
        // TODO: is this needed? Text now supports this itself
        this.endpoint =
            ((_b = (_a = node === null || node === void 0 ? void 0 : node.runs) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.navigationEndpoint) ?
                new NavigationEndpoint(node === null || node === void 0 ? void 0 : node.runs[0].navigationEndpoint) :
                (node === null || node === void 0 ? void 0 : node.navigationEndpoint) ?
                    new NavigationEndpoint(node === null || node === void 0 ? void 0 : node.navigationEndpoint) :
                    (node === null || node === void 0 ? void 0 : node.titleNavigationEndpoint) ?
                        new NavigationEndpoint(node === null || node === void 0 ? void 0 : node.titleNavigationEndpoint) : null;
    }
    toJSON() {
        return this;
    }
}
NavigatableText.type = 'NavigatableText';
export default NavigatableText;
//# sourceMappingURL=NavigatableText.js.map