"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var _NotificationsMenu_page, _NotificationsMenu_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Utils_1 = require("../../utils/Utils");
const SimpleMenuHeader_1 = __importDefault(require("../classes/menus/SimpleMenuHeader"));
const ContinuationItem_1 = __importDefault(require("../classes/ContinuationItem"));
class NotificationsMenu {
    constructor(actions, response) {
        var _a, _b;
        _NotificationsMenu_page.set(this, void 0);
        _NotificationsMenu_actions.set(this, void 0);
        __classPrivateFieldSet(this, _NotificationsMenu_actions, actions, "f");
        __classPrivateFieldSet(this, _NotificationsMenu_page, __1.default.parseResponse(response.data), "f");
        this.header = ((_b = (_a = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.get('SimpleMenuHeader')) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.as(SimpleMenuHeader_1.default)) || null;
        this.contents = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.get('Notification');
    }
    getContinuation() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const continuation = (_a = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.get('ContinuationItem')) === null || _a === void 0 ? void 0 : _a[0].as(ContinuationItem_1.default);
            if (!continuation)
                throw new Utils_1.InnertubeError('Continuation not found');
            const response = yield continuation.endpoint.callTest(__classPrivateFieldGet(this, _NotificationsMenu_actions, "f"), { parse: false });
            return new NotificationsMenu(__classPrivateFieldGet(this, _NotificationsMenu_actions, "f"), response);
        });
    }
}
_NotificationsMenu_page = new WeakMap(), _NotificationsMenu_actions = new WeakMap();
exports.default = NotificationsMenu;
//# sourceMappingURL=NotificationsMenu.js.map