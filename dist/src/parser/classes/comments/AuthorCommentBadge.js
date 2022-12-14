"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AuthorCommentBadge_data;
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
class AuthorCommentBadge extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        _AuthorCommentBadge_data.set(this, void 0);
        this.icon_type = ((_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType) || null;
        this.tooltip = data.iconTooltip;
        // *** For consistency
        this.tooltip === 'Verified' &&
            (this.style = 'BADGE_STYLE_TYPE_VERIFIED') &&
            (data.style = 'BADGE_STYLE_TYPE_VERIFIED');
        __classPrivateFieldSet(this, _AuthorCommentBadge_data, data, "f");
    }
    get orig_badge() {
        return __classPrivateFieldGet(this, _AuthorCommentBadge_data, "f");
    }
}
_AuthorCommentBadge_data = new WeakMap();
AuthorCommentBadge.type = 'AuthorCommentBadge';
exports.default = AuthorCommentBadge;
//# sourceMappingURL=AuthorCommentBadge.js.map