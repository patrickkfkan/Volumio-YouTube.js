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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Author_nav_text;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const NavigatableText_1 = __importDefault(require("./NavigatableText"));
const Thumbnail_1 = __importDefault(require("./Thumbnail"));
const Constants_1 = __importDefault(require("../../../utils/Constants"));
class Author {
    constructor(item, badges, thumbs) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;
        _Author_nav_text.set(this, void 0);
        __classPrivateFieldSet(this, _Author_nav_text, new NavigatableText_1.default(item), "f");
        this.id =
            ((_d = (_c = (_b = (_a = __classPrivateFieldGet(this, _Author_nav_text, "f").runs) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.endpoint) === null || _c === void 0 ? void 0 : _c.browse) === null || _d === void 0 ? void 0 : _d.id) ||
                ((_g = (_f = (_e = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _e === void 0 ? void 0 : _e.endpoint) === null || _f === void 0 ? void 0 : _f.browse) === null || _g === void 0 ? void 0 : _g.id) || 'N/A';
        this.name = __classPrivateFieldGet(this, _Author_nav_text, "f").text || 'N/A';
        this.thumbnails = thumbs ? Thumbnail_1.default.fromResponse(thumbs) : [];
        this.endpoint = ((_j = (_h = __classPrivateFieldGet(this, _Author_nav_text, "f").runs) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.endpoint) || __classPrivateFieldGet(this, _Author_nav_text, "f").endpoint;
        this.badges = Array.isArray(badges) ? index_1.default.parseArray(badges) : [];
        this.is_verified = ((_k = this.badges) === null || _k === void 0 ? void 0 : _k.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED')) || null;
        this.is_verified_artist = ((_l = this.badges) === null || _l === void 0 ? void 0 : _l.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST')) || null;
        this.url =
            ((_q = (_p = (_o = (_m = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _m === void 0 ? void 0 : _m.runs) === null || _o === void 0 ? void 0 : _o[0]) === null || _p === void 0 ? void 0 : _p.endpoint) === null || _q === void 0 ? void 0 : _q.browse) &&
                `${Constants_1.default.URLS.YT_BASE}${((_v = (_u = (_t = (_s = (_r = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _r === void 0 ? void 0 : _r.runs) === null || _s === void 0 ? void 0 : _s[0]) === null || _t === void 0 ? void 0 : _t.endpoint) === null || _u === void 0 ? void 0 : _u.browse) === null || _v === void 0 ? void 0 : _v.base_url) || `/u/${(_0 = (_z = (_y = (_x = (_w = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _w === void 0 ? void 0 : _w.runs) === null || _x === void 0 ? void 0 : _x[0]) === null || _y === void 0 ? void 0 : _y.endpoint) === null || _z === void 0 ? void 0 : _z.browse) === null || _0 === void 0 ? void 0 : _0.id}`}` ||
                `${Constants_1.default.URLS.YT_BASE}${((_3 = (_2 = (_1 = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _1 === void 0 ? void 0 : _1.endpoint) === null || _2 === void 0 ? void 0 : _2.browse) === null || _3 === void 0 ? void 0 : _3.base_url) || `/u/${(_6 = (_5 = (_4 = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _4 === void 0 ? void 0 : _4.endpoint) === null || _5 === void 0 ? void 0 : _5.browse) === null || _6 === void 0 ? void 0 : _6.id}`}` ||
                null;
    }
    get best_thumbnail() {
        return this.thumbnails[0];
    }
}
_Author_nav_text = new WeakMap();
exports.default = Author;
//# sourceMappingURL=Author.js.map