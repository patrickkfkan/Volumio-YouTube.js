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
var _AccountManager_instances, _AccountManager_actions, _AccountManager_setSetting;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../proto/index"));
const Constants_1 = __importDefault(require("../utils/Constants"));
const Utils_1 = require("../utils/Utils");
const Analytics_1 = __importDefault(require("../parser/youtube/Analytics"));
const TimeWatched_1 = __importDefault(require("../parser/youtube/TimeWatched"));
const AccountInfo_1 = __importDefault(require("../parser/youtube/AccountInfo"));
class AccountManager {
    constructor(actions) {
        _AccountManager_instances.add(this);
        _AccountManager_actions.set(this, void 0);
        __classPrivateFieldSet(this, _AccountManager_actions, actions, "f");
        this.channel = {
            /**
             * Edits channel name.
             */
            editName: (new_name) => __classPrivateFieldGet(this, _AccountManager_actions, "f").channel('channel/edit_name', { new_name }),
            /**
             * Edits channel description.
             *
             */
            editDescription: (new_description) => __classPrivateFieldGet(this, _AccountManager_actions, "f").channel('channel/edit_description', { new_description }),
            /**
             * Retrieves basic channel analytics.
             */
            getBasicAnalytics: () => this.getAnalytics()
        };
        this.settings = {
            notifications: {
                /**
                 * Notify about activity from the channels you're subscribed to.
                 * @param option - ON | OFF
                 */
                setSubscriptions: (option) => __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_setSetting).call(this, Constants_1.default.ACCOUNT_SETTINGS.SUBSCRIPTIONS, 'SPaccount_notifications', option),
                /**
                 * Recommended content notifications.
                 * @param option - ON | OFF
                 */
                setRecommendedVideos: (option) => __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_setSetting).call(this, Constants_1.default.ACCOUNT_SETTINGS.RECOMMENDED_VIDEOS, 'SPaccount_notifications', option),
                /**
                 * Notify about activity on your channel.
                 * @param option - ON | OFF
                 */
                setChannelActivity: (option) => __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_setSetting).call(this, Constants_1.default.ACCOUNT_SETTINGS.CHANNEL_ACTIVITY, 'SPaccount_notifications', option),
                /**
                 * Notify about replies to your comments.
                 * @param option - ON | OFF
                 */
                setCommentReplies: (option) => __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_setSetting).call(this, Constants_1.default.ACCOUNT_SETTINGS.COMMENT_REPLIES, 'SPaccount_notifications', option),
                /**
                 * Notify when others mention your channel.
                 * @param option - ON | OFF
                 */
                setMentions: (option) => __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_setSetting).call(this, Constants_1.default.ACCOUNT_SETTINGS.USER_MENTION, 'SPaccount_notifications', option),
                /**
                 * Notify when others share your content on their channels.
                 * @param option - ON | OFF
                 */
                setSharedContent: (option) => __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_setSetting).call(this, Constants_1.default.ACCOUNT_SETTINGS.SHARED_CONTENT, 'SPaccount_notifications', option)
            },
            privacy: {
                /**
                 * If set to true, your subscriptions won't be visible to others.
                 * @param option - ON | OFF
                 */
                setSubscriptionsPrivate: (option) => __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_setSetting).call(this, Constants_1.default.ACCOUNT_SETTINGS.SUBSCRIPTIONS_PRIVACY, 'SPaccount_privacy', option),
                /**
                 * If set to true, saved playlists won't appear on your channel.
                 * @param option - ON | OFF
                 */
                setSavedPlaylistsPrivate: (option) => __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_setSetting).call(this, Constants_1.default.ACCOUNT_SETTINGS.PLAYLISTS_PRIVACY, 'SPaccount_privacy', option)
            }
        };
    }
    /**
     * Retrieves channel info.
     */
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute('/account/accounts_list', { client: 'ANDROID' });
            return new AccountInfo_1.default(response);
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
            return new TimeWatched_1.default(response);
        });
    }
    /**
     * Retrieves basic channel analytics.
     */
    getAnalytics() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.getInfo();
            const params = index_1.default.encodeChannelAnalyticsParams((_a = info.footers) === null || _a === void 0 ? void 0 : _a.endpoint.payload.browseId);
            const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").browse('FEanalytics_screen', { params, client: 'ANDROID' });
            return new Analytics_1.default(response);
        });
    }
}
_AccountManager_actions = new WeakMap(), _AccountManager_instances = new WeakSet(), _AccountManager_setSetting = function _AccountManager_setSetting(setting_id, type, new_value) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, Utils_1.throwIfMissing)({ setting_id, type, new_value });
        const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").browse(type);
        const contents = (() => {
            switch (type.trim()) {
                case 'SPaccount_notifications':
                    return (0, Utils_1.findNode)(response.data, 'contents', 'Your preferences', 13, false).options;
                case 'SPaccount_privacy':
                    return (0, Utils_1.findNode)(response.data, 'contents', 'settingsSwitchRenderer', 13, false).options;
                default:
                    // This is just for maximum compatibility, this is most definitely a bad way to handle this
                    throw new TypeError('undefined is not a function');
            }
        })();
        const option = contents.find((option) => option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemIdForClient == setting_id);
        const setting_item_id = option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemId;
        const set_setting = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").account('account/set_setting', {
            new_value: type == 'SPaccount_privacy' ? !new_value : new_value,
            setting_item_id
        });
        return set_setting;
    });
};
exports.default = AccountManager;
//# sourceMappingURL=AccountManager.js.map