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
var _AccountManager_actions;
import Proto from '../proto/index.js';
import Analytics from '../parser/youtube/Analytics.js';
import TimeWatched from '../parser/youtube/TimeWatched.js';
import AccountInfo from '../parser/youtube/AccountInfo.js';
import Settings from '../parser/youtube/Settings.js';
import { InnertubeError } from '../utils/Utils.js';
class AccountManager {
    constructor(actions) {
        _AccountManager_actions.set(this, void 0);
        __classPrivateFieldSet(this, _AccountManager_actions, actions, "f");
        this.channel = {
            /**
             * Edits channel name.
             * @param new_name - The new channel name.
             */
            editName: (new_name) => {
                if (!__classPrivateFieldGet(this, _AccountManager_actions, "f").session.logged_in)
                    throw new InnertubeError('You must be signed in to perform this operation.');
                return __classPrivateFieldGet(this, _AccountManager_actions, "f").execute('/channel/edit_name', {
                    givenName: new_name,
                    client: 'ANDROID'
                });
            },
            /**
             * Edits channel description.
             * @param new_description - The new description.
             */
            editDescription: (new_description) => {
                if (!__classPrivateFieldGet(this, _AccountManager_actions, "f").session.logged_in)
                    throw new InnertubeError('You must be signed in to perform this operation.');
                return __classPrivateFieldGet(this, _AccountManager_actions, "f").execute('/channel/edit_description', {
                    givenDescription: new_description,
                    client: 'ANDROID'
                });
            },
            /**
             * Retrieves basic channel analytics.
             */
            getBasicAnalytics: () => this.getAnalytics()
        };
    }
    /**
     * Retrieves channel info.
     */
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _AccountManager_actions, "f").session.logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute('/account/accounts_list', { client: 'ANDROID' });
            return new AccountInfo(response);
        });
    }
    /**
     * Retrieves time watched statistics.
     */
    getTimeWatched() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute('/browse', {
                browseId: 'SPtime_watched',
                client: 'ANDROID'
            });
            return new TimeWatched(response);
        });
    }
    /**
     * Opens YouTube settings.
     */
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute('/browse', {
                browseId: 'SPaccount_overview'
            });
            return new Settings(__classPrivateFieldGet(this, _AccountManager_actions, "f"), response);
        });
    }
    /**
     * Retrieves basic channel analytics.
     */
    getAnalytics() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.getInfo();
            const params = Proto.encodeChannelAnalyticsParams((_a = info.footers) === null || _a === void 0 ? void 0 : _a.endpoint.payload.browseId);
            const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute('/browse', {
                browseId: 'FEanalytics_screen',
                client: 'ANDROID',
                params
            });
            return new Analytics(response);
        });
    }
}
_AccountManager_actions = new WeakMap();
export default AccountManager;
//# sourceMappingURL=AccountManager.js.map