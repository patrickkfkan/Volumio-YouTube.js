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
var _NotificationsMenu_page, _NotificationsMenu_actions;
import Parser from '../index.js';
import ContinuationItem from '../classes/ContinuationItem.js';
import SimpleMenuHeader from '../classes/menus/SimpleMenuHeader.js';
import Notification from '../classes/Notification.js';
import { InnertubeError } from '../../utils/Utils.js';
class NotificationsMenu {
    constructor(actions, response) {
        _NotificationsMenu_page.set(this, void 0);
        _NotificationsMenu_actions.set(this, void 0);
        __classPrivateFieldSet(this, _NotificationsMenu_actions, actions, "f");
        __classPrivateFieldSet(this, _NotificationsMenu_page, Parser.parseResponse(response.data), "f");
        this.header = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.getType(SimpleMenuHeader).first();
        this.contents = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.getType(Notification);
    }
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            const continuation = __classPrivateFieldGet(this, _NotificationsMenu_page, "f").actions_memo.getType(ContinuationItem).first();
            if (!continuation)
                throw new InnertubeError('Continuation not found');
            const response = yield continuation.endpoint.call(__classPrivateFieldGet(this, _NotificationsMenu_actions, "f"), { parse: false });
            return new NotificationsMenu(__classPrivateFieldGet(this, _NotificationsMenu_actions, "f"), response);
        });
    }
    get page() {
        return __classPrivateFieldGet(this, _NotificationsMenu_page, "f");
    }
}
_NotificationsMenu_page = new WeakMap(), _NotificationsMenu_actions = new WeakMap();
export default NotificationsMenu;
//# sourceMappingURL=NotificationsMenu.js.map