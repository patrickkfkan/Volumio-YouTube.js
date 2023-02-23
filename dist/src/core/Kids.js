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
var _Kids_session;
import Search from '../parser/ytkids/Search.js';
import HomeFeed from '../parser/ytkids/HomeFeed.js';
import VideoInfo from '../parser/ytkids/VideoInfo.js';
import Channel from '../parser/ytkids/Channel.js';
import { generateRandomString } from '../utils/Utils.js';
class Kids {
    constructor(session) {
        _Kids_session.set(this, void 0);
        __classPrivateFieldSet(this, _Kids_session, session, "f");
    }
    /**
     * Searches the given query.
     * @param query - The query.
     */
    search(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Kids_session, "f").actions.execute('/search', { query, client: 'YTKIDS' });
            return new Search(__classPrivateFieldGet(this, _Kids_session, "f").actions, response);
        });
    }
    /**
     * Retrieves video info.
     * @param video_id - The video id.
     */
    getInfo(video_id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const cpn = generateRandomString(16);
            const initial_info = __classPrivateFieldGet(this, _Kids_session, "f").actions.execute('/player', {
                cpn,
                client: 'YTKIDS',
                videoId: video_id,
                playbackContext: {
                    contentPlaybackContext: {
                        signatureTimestamp: ((_a = __classPrivateFieldGet(this, _Kids_session, "f").player) === null || _a === void 0 ? void 0 : _a.sts) || 0
                    }
                }
            });
            const continuation = __classPrivateFieldGet(this, _Kids_session, "f").actions.execute('/next', { videoId: video_id, client: 'YTKIDS' });
            const response = yield Promise.all([initial_info, continuation]);
            return new VideoInfo(response, __classPrivateFieldGet(this, _Kids_session, "f").actions, cpn);
        });
    }
    /**
     * Retrieves the contents of the given channel.
    * @param channel_id - The channel id.
     */
    getChannel(channel_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Kids_session, "f").actions.execute('/browse', { browseId: channel_id, client: 'YTKIDS' });
            return new Channel(__classPrivateFieldGet(this, _Kids_session, "f").actions, response);
        });
    }
    /**
     * Retrieves the home feed.
     */
    getHomeFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Kids_session, "f").actions.execute('/browse', { browseId: 'FEkids_home', client: 'YTKIDS' });
            return new HomeFeed(__classPrivateFieldGet(this, _Kids_session, "f").actions, response);
        });
    }
}
_Kids_session = new WeakMap();
export default Kids;
//# sourceMappingURL=Kids.js.map