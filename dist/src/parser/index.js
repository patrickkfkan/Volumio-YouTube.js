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
var _a, _Parser_memo, _Parser_clearMemo, _Parser_createMemo, _Parser_addToMemo, _Parser_getMemo;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveChatContinuation = exports.TimedContinuation = exports.PlaylistPanelContinuation = exports.GridContinuation = exports.MusicShelfContinuation = exports.MusicPlaylistShelfContinuation = exports.SectionListContinuation = exports.ReloadContinuationItemsCommand = exports.AppendContinuationItemsAction = void 0;
const Format_1 = __importDefault(require("./classes/misc/Format"));
const VideoDetails_1 = __importDefault(require("./classes/misc/VideoDetails"));
const map_1 = __importDefault(require("./map"));
const Endscreen_1 = __importDefault(require("./classes/Endscreen"));
const CardCollection_1 = __importDefault(require("./classes/CardCollection"));
const NavigationEndpoint_1 = __importDefault(require("./classes/NavigationEndpoint"));
const PlayerStoryboardSpec_1 = __importDefault(require("./classes/PlayerStoryboardSpec"));
const PlayerCaptionsTracklist_1 = __importDefault(require("./classes/PlayerCaptionsTracklist"));
const PlayerLiveStoryboardSpec_1 = __importDefault(require("./classes/PlayerLiveStoryboardSpec"));
const PlayerAnnotationsExpanded_1 = __importDefault(require("./classes/PlayerAnnotationsExpanded"));
const Utils_1 = require("../utils/Utils");
const helpers_1 = require("./helpers");
const package_json_1 = __importDefault(require("../../package.json"));
const MusicMultiSelectMenuItem_1 = __importDefault(require("./classes/menus/MusicMultiSelectMenuItem"));
class AppendContinuationItemsAction extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.contents = Parser.parse(data.continuationItems, true);
    }
}
exports.AppendContinuationItemsAction = AppendContinuationItemsAction;
AppendContinuationItemsAction.type = 'appendContinuationItemsAction';
class ReloadContinuationItemsCommand extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.target_id = data.targetId;
        this.contents = Parser.parse(data.continuationItems, true);
    }
}
exports.ReloadContinuationItemsCommand = ReloadContinuationItemsCommand;
ReloadContinuationItemsCommand.type = 'reloadContinuationItemsCommand';
class SectionListContinuation extends helpers_1.YTNode {
    constructor(data) {
        var _b;
        super();
        this.contents = Parser.parse(data.contents, true);
        this.continuation = ((_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData.continuation) || null;
    }
}
exports.SectionListContinuation = SectionListContinuation;
SectionListContinuation.type = 'sectionListContinuation';
class MusicPlaylistShelfContinuation extends helpers_1.YTNode {
    constructor(data) {
        var _b;
        super();
        this.contents = Parser.parse(data.contents, true);
        this.continuation = ((_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData.continuation) || null;
    }
}
exports.MusicPlaylistShelfContinuation = MusicPlaylistShelfContinuation;
MusicPlaylistShelfContinuation.type = 'musicPlaylistShelfContinuation';
class MusicShelfContinuation extends helpers_1.YTNode {
    constructor(data) {
        var _b, _c, _d, _e;
        super();
        this.contents = Parser.parse(data.contents, true);
        this.continuation =
            ((_c = (_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) ||
                ((_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0].reloadContinuationData) === null || _e === void 0 ? void 0 : _e.continuation) || null;
    }
}
exports.MusicShelfContinuation = MusicShelfContinuation;
MusicShelfContinuation.type = 'musicShelfContinuation';
class GridContinuation extends helpers_1.YTNode {
    constructor(data) {
        var _b;
        super();
        this.items = Parser.parse(data.items, true);
        this.continuation = ((_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData.continuation) || null;
    }
    get contents() {
        return this.items;
    }
}
exports.GridContinuation = GridContinuation;
GridContinuation.type = 'gridContinuation';
class PlaylistPanelContinuation extends helpers_1.YTNode {
    constructor(data) {
        var _b, _c, _d, _e, _f, _g;
        super();
        this.contents = Parser.parse(data.contents, true);
        this.continuation = ((_d = (_c = (_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.nextContinuationData) === null || _d === void 0 ? void 0 : _d.continuation) ||
            ((_g = (_f = (_e = data.continuations) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.nextRadioContinuationData) === null || _g === void 0 ? void 0 : _g.continuation) || null;
    }
}
exports.PlaylistPanelContinuation = PlaylistPanelContinuation;
PlaylistPanelContinuation.type = 'playlistPanelContinuation';
class TimedContinuation extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.timeout_ms = data.timeoutMs || data.timeUntilLastMessageMsec;
        this.token = data.continuation;
    }
}
exports.TimedContinuation = TimedContinuation;
TimedContinuation.type = 'timedContinuationData';
class LiveChatContinuation extends helpers_1.YTNode {
    constructor(data) {
        var _b, _c, _d, _e, _f;
        super();
        this.actions = Parser.parse((_b = data.actions) === null || _b === void 0 ? void 0 : _b.map((action) => {
            delete action.clickTrackingParams;
            return action;
        }), true) || (0, helpers_1.observe)([]);
        this.action_panel = Parser.parseItem(data.actionPanel);
        this.item_list = Parser.parseItem(data.itemList);
        this.header = Parser.parseItem(data.header);
        this.participants_list = Parser.parseItem(data.participantsList);
        this.popout_message = Parser.parseItem(data.popoutMessage);
        this.emojis = ((_c = data.emojis) === null || _c === void 0 ? void 0 : _c.map((emoji) => ({
            emoji_id: emoji.emojiId,
            shortcuts: emoji.shortcuts,
            search_terms: emoji.searchTerms,
            image: emoji.image,
            is_custom_emoji: emoji.isCustomEmoji
        }))) || null;
        this.continuation = new TimedContinuation(((_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0].timedContinuationData) ||
            ((_e = data.continuations) === null || _e === void 0 ? void 0 : _e[0].invalidationContinuationData) ||
            ((_f = data.continuations) === null || _f === void 0 ? void 0 : _f[0].liveChatReplayContinuationData));
        this.viewer_name = data.viewerName;
    }
}
exports.LiveChatContinuation = LiveChatContinuation;
LiveChatContinuation.type = 'liveChatContinuation';
class Parser {
    /**
     * Parses InnerTube response.
     */
    static parseResponse(data) {
        var _b, _c, _d, _e, _f;
        // Memoize the response objects by classname
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        // TODO: is this parseItem?
        const contents = Parser.parse(data.contents);
        const contents_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        // End of memoization
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const on_response_received_actions = data.onResponseReceivedActions ? Parser.parseRR(data.onResponseReceivedActions) : null;
        const on_response_received_actions_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const on_response_received_endpoints = data.onResponseReceivedEndpoints ? Parser.parseRR(data.onResponseReceivedEndpoints) : null;
        const on_response_received_endpoints_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const on_response_received_commands = data.onResponseReceivedCommands ? Parser.parseRR(data.onResponseReceivedCommands) : null;
        const on_response_received_commands_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const actions = data.actions ? Parser.parseActions(data.actions) : null;
        const actions_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        this.applyMutations(contents_memo, (_c = (_b = data.frameworkUpdates) === null || _b === void 0 ? void 0 : _b.entityBatchUpdate) === null || _c === void 0 ? void 0 : _c.mutations);
        return {
            actions,
            actions_memo,
            contents,
            contents_memo,
            on_response_received_actions,
            on_response_received_actions_memo,
            on_response_received_endpoints,
            on_response_received_endpoints_memo,
            on_response_received_commands,
            on_response_received_commands_memo,
            continuation: data.continuation ? Parser.parseC(data.continuation) : null,
            continuation_contents: data.continuationContents ? Parser.parseLC(data.continuationContents) : null,
            metadata: Parser.parse(data.metadata),
            header: Parser.parse(data.header),
            microformat: data.microformat ? Parser.parseItem(data.microformat) : null,
            sidebar: Parser.parseItem(data.sidebar),
            overlay: Parser.parseItem(data.overlay),
            refinements: data.refinements || null,
            estimated_results: data.estimatedResults ? parseInt(data.estimatedResults) : null,
            player_overlays: Parser.parse(data.playerOverlays),
            playback_tracking: data.playbackTracking ? {
                videostats_watchtime_url: data.playbackTracking.videostatsWatchtimeUrl.baseUrl,
                videostats_playback_url: data.playbackTracking.videostatsPlaybackUrl.baseUrl
            } : null,
            playability_status: data.playabilityStatus ? {
                status: data.playabilityStatus.status,
                error_screen: Parser.parse(data.playabilityStatus.errorScreen),
                embeddable: !!data.playabilityStatus.playableInEmbed || false,
                reason: ((_d = data.playabilityStatus) === null || _d === void 0 ? void 0 : _d.reason) || ''
            } : undefined,
            streaming_data: data.streamingData ? {
                expires: new Date(Date.now() + parseInt(data.streamingData.expiresInSeconds) * 1000),
                formats: Parser.parseFormats(data.streamingData.formats),
                adaptive_formats: Parser.parseFormats(data.streamingData.adaptiveFormats),
                dash_manifest_url: ((_e = data.streamingData) === null || _e === void 0 ? void 0 : _e.dashManifestUrl) || null,
                dls_manifest_url: ((_f = data.streamingData) === null || _f === void 0 ? void 0 : _f.dashManifestUrl) || null
            } : undefined,
            current_video_endpoint: data.currentVideoEndpoint ? new NavigationEndpoint_1.default(data.currentVideoEndpoint) : null,
            captions: Parser.parseItem(data.captions, PlayerCaptionsTracklist_1.default),
            video_details: data.videoDetails ? new VideoDetails_1.default(data.videoDetails) : undefined,
            annotations: Parser.parseArray(data.annotations, PlayerAnnotationsExpanded_1.default),
            storyboards: Parser.parseItem(data.storyboards, [PlayerStoryboardSpec_1.default, PlayerLiveStoryboardSpec_1.default]),
            endscreen: Parser.parseItem(data.endscreen, Endscreen_1.default),
            cards: Parser.parseItem(data.cards, CardCollection_1.default)
        };
    }
    static parseC(data) {
        if (data.timedContinuationData)
            return new TimedContinuation(data.timedContinuationData);
    }
    static parseLC(data) {
        if (data.sectionListContinuation)
            return new SectionListContinuation(data.sectionListContinuation);
        if (data.liveChatContinuation)
            return new LiveChatContinuation(data.liveChatContinuation);
        if (data.musicPlaylistShelfContinuation)
            return new MusicPlaylistShelfContinuation(data.musicPlaylistShelfContinuation);
        if (data.musicShelfContinuation)
            return new MusicShelfContinuation(data.musicShelfContinuation);
        if (data.gridContinuation)
            return new GridContinuation(data.gridContinuation);
        if (data.playlistPanelContinuation)
            return new PlaylistPanelContinuation(data.playlistPanelContinuation);
    }
    static parseRR(actions) {
        return (0, helpers_1.observe)(actions.map((action) => {
            if (action.reloadContinuationItemsCommand)
                return new ReloadContinuationItemsCommand(action.reloadContinuationItemsCommand);
            if (action.appendContinuationItemsAction)
                return new AppendContinuationItemsAction(action.appendContinuationItemsAction);
        }).filter((item) => item));
    }
    static parseActions(data) {
        if (Array.isArray(data)) {
            return Parser.parse(data.map((action) => {
                delete action.clickTrackingParams;
                return action;
            }));
        }
        return new helpers_1.SuperParsedResult(Parser.parseItem(data));
    }
    static parseFormats(formats) {
        return (formats === null || formats === void 0 ? void 0 : formats.map((format) => new Format_1.default(format))) || [];
    }
    static parseItem(data, validTypes) {
        if (!data)
            return null;
        const keys = Object.keys(data);
        const classname = this.sanitizeClassName(keys[0]);
        if (!this.shouldIgnore(classname)) {
            try {
                const TargetClass = (0, map_1.default)(classname);
                if (validTypes) {
                    if (Array.isArray(validTypes)) {
                        if (!validTypes.some((type) => type.type === TargetClass.type))
                            throw new Utils_1.ParsingError(`Type mismatch, got ${classname} but expected one of ${validTypes.map((type) => type.type).join(', ')}`);
                    }
                    else if (TargetClass.type !== validTypes.type)
                        throw new Utils_1.ParsingError(`Type mismatch, got ${classname} but expected ${validTypes.type}`);
                }
                const result = new TargetClass(data[keys[0]]);
                __classPrivateFieldGet(this, _a, "m", _Parser_addToMemo).call(this, classname, result);
                return result;
            }
            catch (err) {
                this.formatError({ classname, classdata: data[keys[0]], err });
                return null;
            }
        }
        return null;
    }
    static parseArray(data, validTypes) {
        if (Array.isArray(data)) {
            const results = [];
            for (const item of data) {
                const result = this.parseItem(item, validTypes);
                if (result) {
                    results.push(result);
                }
            }
            return (0, helpers_1.observe)(results);
        }
        else if (!data) {
            return (0, helpers_1.observe)([]);
        }
        throw new Utils_1.ParsingError('Expected array but got a single item');
    }
    /**
     * Parses the `contents` property of the response as well as its nodes.
     */
    static parse(data, requireArray, validTypes) {
        if (!data)
            return null;
        if (Array.isArray(data)) {
            const results = [];
            for (const item of data) {
                const result = this.parseItem(item, validTypes);
                if (result) {
                    results.push(result);
                }
            }
            const res = (0, helpers_1.observe)(results);
            return requireArray ? res : new helpers_1.SuperParsedResult((0, helpers_1.observe)(results));
        }
        else if (requireArray) {
            throw new Utils_1.ParsingError('Expected array but got a single item');
        }
        return new helpers_1.SuperParsedResult(this.parseItem(data, validTypes));
    }
    static applyMutations(memo, mutations) {
        var _b;
        // Apply mutations to MusicMultiSelectMenuItems
        const musicMultiSelectMenuItems = memo.getType(MusicMultiSelectMenuItem_1.default);
        if (musicMultiSelectMenuItems.length > 0 && !mutations) {
            console.warn(new Utils_1.InnertubeError('Mutation data required for processing MusicMultiSelectMenuItems, but none found.\n' +
                `This is a bug, please report it at ${package_json_1.default.bugs.url}`));
        }
        else {
            const missingOrInvalidMutations = [];
            for (const menuItem of musicMultiSelectMenuItems) {
                const mutation = mutations.find((mutation) => { var _b, _c; return ((_c = (_b = mutation.payload) === null || _b === void 0 ? void 0 : _b.musicFormBooleanChoice) === null || _c === void 0 ? void 0 : _c.id) === menuItem.form_item_entity_key; });
                const choice = mutation === null || mutation === void 0 ? void 0 : mutation.payload.musicFormBooleanChoice;
                if ((choice === null || choice === void 0 ? void 0 : choice.selected) !== undefined && (choice === null || choice === void 0 ? void 0 : choice.opaqueToken)) {
                    menuItem.selected = choice.selected;
                    if ((_b = menuItem.endpoint) === null || _b === void 0 ? void 0 : _b.browse) {
                        menuItem.endpoint.browse.form_data = {
                            selectedValues: [choice.opaqueToken]
                        };
                    }
                }
                else {
                    missingOrInvalidMutations.push(`'${menuItem.title}'`);
                }
            }
            if (missingOrInvalidMutations.length > 0) {
                console.warn(new Utils_1.InnertubeError(`Mutation data missing or invalid for ${missingOrInvalidMutations.length} out of ${musicMultiSelectMenuItems.length} MusicMultiSelectMenuItems. ` +
                    `The titles of the failed items are: ${missingOrInvalidMutations.join(', ')}.\n` +
                    `This is a bug, please report it at ${package_json_1.default.bugs.url}`));
            }
        }
    }
    static formatError({ classname, classdata, err }) {
        if (err.code == 'MODULE_NOT_FOUND') {
            return console.warn(new Utils_1.InnertubeError(`${classname} not found!\n` +
                `This is a bug, please report it at ${package_json_1.default.bugs.url}`, classdata));
        }
        console.warn(new Utils_1.InnertubeError(`Something went wrong at ${classname}!\n` +
            `This is a bug, please report it at ${package_json_1.default.bugs.url}`, { stack: err.stack }));
    }
    static sanitizeClassName(input) {
        return (input.charAt(0).toUpperCase() + input.slice(1))
            .replace(/Renderer|Model/g, '')
            .replace(/Radio/g, 'Mix').trim();
    }
    static shouldIgnore(classname) {
        return this.ignore_list.has(classname);
    }
}
exports.default = Parser;
_a = Parser, _Parser_clearMemo = function _Parser_clearMemo() {
    __classPrivateFieldSet(Parser, _a, null, "f", _Parser_memo);
}, _Parser_createMemo = function _Parser_createMemo() {
    __classPrivateFieldSet(Parser, _a, new helpers_1.Memo(), "f", _Parser_memo);
}, _Parser_addToMemo = function _Parser_addToMemo(classname, result) {
    if (!__classPrivateFieldGet(Parser, _a, "f", _Parser_memo))
        return;
    const list = __classPrivateFieldGet(Parser, _a, "f", _Parser_memo).get(classname);
    if (!list)
        return __classPrivateFieldGet(Parser, _a, "f", _Parser_memo).set(classname, [result]);
    list.push(result);
}, _Parser_getMemo = function _Parser_getMemo() {
    if (!__classPrivateFieldGet(Parser, _a, "f", _Parser_memo))
        throw new Error('Parser#getMemo() called before Parser#createMemo()');
    return __classPrivateFieldGet(Parser, _a, "f", _Parser_memo);
};
_Parser_memo = { value: null };
Parser.ignore_list = new Set([
    'DisplayAd',
    'SearchPyv',
    'MealbarPromo',
    'BackgroundPromo',
    'PromotedSparklesWeb',
    'RunAttestationCommand',
    'CompactPromotedVideo',
    'StatementBanner'
]);
//# sourceMappingURL=index.js.map