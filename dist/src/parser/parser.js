var _a, _Parser_errorHandler, _Parser_memo, _Parser_clearMemo, _Parser_createMemo, _Parser_addToMemo, _Parser_getMemo, _Parser_printError, _Parser_rt_nodes, _Parser_dynamic_nodes;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import AudioOnlyPlayability from './classes/AudioOnlyPlayability.js';
import CardCollection from './classes/CardCollection.js';
import Endscreen from './classes/Endscreen.js';
import PlayerAnnotationsExpanded from './classes/PlayerAnnotationsExpanded.js';
import PlayerCaptionsTracklist from './classes/PlayerCaptionsTracklist.js';
import PlayerLiveStoryboardSpec from './classes/PlayerLiveStoryboardSpec.js';
import PlayerStoryboardSpec from './classes/PlayerStoryboardSpec.js';
import Message from './classes/Message.js';
import LiveChatParticipantsList from './classes/LiveChatParticipantsList.js';
import LiveChatHeader from './classes/LiveChatHeader.js';
import LiveChatItemList from './classes/LiveChatItemList.js';
import Alert from './classes/Alert.js';
import MusicMultiSelectMenuItem from './classes/menus/MusicMultiSelectMenuItem.js';
import Format from './classes/misc/Format.js';
import VideoDetails from './classes/misc/VideoDetails.js';
import NavigationEndpoint from './classes/NavigationEndpoint.js';
import Thumbnail from './classes/misc/Thumbnail.js';
import { InnertubeError, ParsingError, Platform } from '../utils/Utils.js';
import { Memo, observe, SuperParsedResult, YTNode } from './helpers.js';
import * as YTNodes from './nodes.js';
import { YTNodeGenerator } from './generator.js';
class Parser {
    static setParserErrorHandler(handler) {
        __classPrivateFieldSet(this, _a, handler, "f", _Parser_errorHandler);
    }
    /**
     * Parses given InnerTube response.
     * @param data - Raw data.
     */
    static parseResponse(data) {
        var _b, _c, _d, _e;
        const parsed_data = {};
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const contents = this.parse(data.contents);
        const contents_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        if (contents) {
            parsed_data.contents = contents;
            parsed_data.contents_memo = contents_memo;
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const on_response_received_actions = data.onResponseReceivedActions ? this.parseRR(data.onResponseReceivedActions) : null;
        const on_response_received_actions_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        if (on_response_received_actions) {
            parsed_data.on_response_received_actions = on_response_received_actions;
            parsed_data.on_response_received_actions_memo = on_response_received_actions_memo;
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const on_response_received_endpoints = data.onResponseReceivedEndpoints ? this.parseRR(data.onResponseReceivedEndpoints) : null;
        const on_response_received_endpoints_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        if (on_response_received_endpoints) {
            parsed_data.on_response_received_endpoints = on_response_received_endpoints;
            parsed_data.on_response_received_endpoints_memo = on_response_received_endpoints_memo;
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const on_response_received_commands = data.onResponseReceivedCommands ? this.parseRR(data.onResponseReceivedCommands) : null;
        const on_response_received_commands_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        if (on_response_received_commands) {
            parsed_data.on_response_received_commands = on_response_received_commands;
            parsed_data.on_response_received_commands_memo = on_response_received_commands_memo;
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const continuation_contents = data.continuationContents ? this.parseLC(data.continuationContents) : null;
        const continuation_contents_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        if (continuation_contents) {
            parsed_data.continuation_contents = continuation_contents;
            parsed_data.continuation_contents_memo = continuation_contents_memo;
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const actions = data.actions ? this.parseActions(data.actions) : null;
        const actions_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        if (actions) {
            parsed_data.actions = actions;
            parsed_data.actions_memo = actions_memo;
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const live_chat_item_context_menu_supported_renderers = data.liveChatItemContextMenuSupportedRenderers ? this.parseItem(data.liveChatItemContextMenuSupportedRenderers) : null;
        const live_chat_item_context_menu_supported_renderers_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        if (live_chat_item_context_menu_supported_renderers) {
            parsed_data.live_chat_item_context_menu_supported_renderers = live_chat_item_context_menu_supported_renderers;
            parsed_data.live_chat_item_context_menu_supported_renderers_memo = live_chat_item_context_menu_supported_renderers_memo;
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const header = data.header ? this.parse(data.header) : null;
        const header_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        if (header) {
            parsed_data.header = header;
            parsed_data.header_memo = header_memo;
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const sidebar = data.sidebar ? this.parseItem(data.sidebar) : null;
        const sidebar_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        if (sidebar) {
            parsed_data.sidebar = sidebar;
            parsed_data.sidebar_memo = sidebar_memo;
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        this.applyMutations(contents_memo, (_c = (_b = data.frameworkUpdates) === null || _b === void 0 ? void 0 : _b.entityBatchUpdate) === null || _c === void 0 ? void 0 : _c.mutations);
        /*** Volumio-YouTube.js ***/
        // TODO: Push to YouTube.js repo
        this.applyMutations(continuation_contents_memo, (_e = (_d = data.frameworkUpdates) === null || _d === void 0 ? void 0 : _d.entityBatchUpdate) === null || _e === void 0 ? void 0 : _e.mutations);
        const continuation = data.continuation ? this.parseC(data.continuation) : null;
        if (continuation) {
            parsed_data.continuation = continuation;
        }
        const metadata = this.parse(data.metadata);
        if (metadata) {
            parsed_data.metadata = metadata;
        }
        const microformat = this.parseItem(data.microformat);
        if (microformat) {
            parsed_data.microformat = microformat;
        }
        const overlay = this.parseItem(data.overlay);
        if (overlay) {
            parsed_data.overlay = overlay;
        }
        const alerts = this.parseArray(data.alerts, Alert);
        if (alerts.length) {
            parsed_data.alerts = alerts;
        }
        const refinements = data.refinements;
        if (refinements) {
            parsed_data.refinements = refinements;
        }
        const estimated_results = data.estimatedResults ? parseInt(data.estimatedResults) : null;
        if (estimated_results) {
            parsed_data.estimated_results = estimated_results;
        }
        const player_overlays = this.parse(data.playerOverlays);
        if (player_overlays) {
            parsed_data.player_overlays = player_overlays;
        }
        const playback_tracking = data.playbackTracking ? {
            videostats_watchtime_url: data.playbackTracking.videostatsWatchtimeUrl.baseUrl,
            videostats_playback_url: data.playbackTracking.videostatsPlaybackUrl.baseUrl
        } : null;
        if (playback_tracking) {
            parsed_data.playback_tracking = playback_tracking;
        }
        const playability_status = data.playabilityStatus ? {
            status: data.playabilityStatus.status,
            reason: data.playabilityStatus.reason || '',
            embeddable: !!data.playabilityStatus.playableInEmbed || false,
            audio_only_playablility: this.parseItem(data.playabilityStatus.audioOnlyPlayability, AudioOnlyPlayability),
            error_screen: this.parseItem(data.playabilityStatus.errorScreen)
        } : null;
        if (playability_status) {
            parsed_data.playability_status = playability_status;
        }
        const streaming_data = data.streamingData ? {
            expires: new Date(Date.now() + parseInt(data.streamingData.expiresInSeconds) * 1000),
            formats: Parser.parseFormats(data.streamingData.formats),
            adaptive_formats: Parser.parseFormats(data.streamingData.adaptiveFormats),
            dash_manifest_url: data.streamingData.dashManifestUrl || null,
            hls_manifest_url: data.streamingData.hlsManifestUrl || null
        } : undefined;
        if (streaming_data) {
            parsed_data.streaming_data = streaming_data;
        }
        const current_video_endpoint = data.currentVideoEndpoint ? new NavigationEndpoint(data.currentVideoEndpoint) : null;
        if (current_video_endpoint) {
            parsed_data.current_video_endpoint = current_video_endpoint;
        }
        const endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
        if (endpoint) {
            parsed_data.endpoint = endpoint;
        }
        const captions = this.parseItem(data.captions, PlayerCaptionsTracklist);
        if (captions) {
            parsed_data.captions = captions;
        }
        const video_details = data.videoDetails ? new VideoDetails(data.videoDetails) : null;
        if (video_details) {
            parsed_data.video_details = video_details;
        }
        const annotations = this.parseArray(data.annotations, PlayerAnnotationsExpanded);
        if (annotations.length) {
            parsed_data.annotations = annotations;
        }
        const storyboards = this.parseItem(data.storyboards, [PlayerStoryboardSpec, PlayerLiveStoryboardSpec]);
        if (storyboards) {
            parsed_data.storyboards = storyboards;
        }
        const endscreen = this.parseItem(data.endscreen, Endscreen);
        if (endscreen) {
            parsed_data.endscreen = endscreen;
        }
        const cards = this.parseItem(data.cards, CardCollection);
        if (cards) {
            parsed_data.cards = cards;
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_createMemo).call(this);
        const items = this.parse(data.items);
        if (items) {
            parsed_data.items = items;
            parsed_data.items_memo = __classPrivateFieldGet(this, _a, "m", _Parser_getMemo).call(this);
        }
        __classPrivateFieldGet(this, _a, "m", _Parser_clearMemo).call(this);
        return parsed_data;
    }
    static parseItem(data, validTypes) {
        if (!data)
            return null;
        const keys = Object.keys(data);
        if (!keys.length)
            return null;
        const classname = this.sanitizeClassName(keys[0]);
        if (!this.shouldIgnore(classname)) {
            try {
                const has_target_class = this.hasParser(classname);
                const TargetClass = has_target_class ? this.getParserByName(classname) : YTNodeGenerator.generateRuntimeClass(classname, data[keys[0]]);
                if (validTypes) {
                    if (Array.isArray(validTypes)) {
                        if (!validTypes.some((type) => type.type === TargetClass.type))
                            throw new ParsingError(`Type mismatch, got ${classname} but expected one of ${validTypes.map((type) => type.type).join(', ')}`);
                    }
                    else if (TargetClass.type !== validTypes.type)
                        throw new ParsingError(`Type mismatch, got ${classname} but expected ${validTypes.type}`);
                }
                const result = new TargetClass(data[keys[0]]);
                __classPrivateFieldGet(this, _a, "m", _Parser_addToMemo).call(this, classname, result);
                return result;
            }
            catch (err) {
                __classPrivateFieldGet(this, _a, "f", _Parser_errorHandler).call(this, { classname, classdata: data[keys[0]], err });
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
            return observe(results);
        }
        else if (!data) {
            return observe([]);
        }
        throw new ParsingError('Expected array but got a single item');
    }
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
            const res = observe(results);
            return requireArray ? res : new SuperParsedResult(observe(results));
        }
        else if (requireArray) {
            throw new ParsingError('Expected array but got a single item');
        }
        return new SuperParsedResult(this.parseItem(data, validTypes));
    }
    static parseC(data) {
        if (data.timedContinuationData)
            return new Continuation({ continuation: data.timedContinuationData, type: 'timed' });
        return null;
    }
    static parseLC(data) {
        if (data.itemSectionContinuation)
            return new ItemSectionContinuation(data.itemSectionContinuation);
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
        return null;
    }
    static parseRR(actions) {
        return observe(actions.map((action) => {
            if (action.navigateAction)
                return new NavigateAction(action.navigateAction);
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
        return new SuperParsedResult(this.parseItem(data));
    }
    static parseFormats(formats) {
        return (formats === null || formats === void 0 ? void 0 : formats.map((format) => new Format(format))) || [];
    }
    static applyMutations(memo, mutations) {
        var _b, _c;
        // Apply mutations to MusicMultiSelectMenuItems
        const music_multi_select_menu_items = memo.getType(MusicMultiSelectMenuItem);
        if (music_multi_select_menu_items.length > 0 && !mutations) {
            console.warn(new InnertubeError('Mutation data required for processing MusicMultiSelectMenuItems, but none found.\n' +
                `This is a bug, please report it at ${Platform.shim.info.bugs_url}`));
        }
        else {
            const missing_or_invalid_mutations = [];
            for (const menu_item of music_multi_select_menu_items) {
                const mutation = mutations
                    .find((mutation) => { var _b, _c; return ((_c = (_b = mutation.payload) === null || _b === void 0 ? void 0 : _b.musicFormBooleanChoice) === null || _c === void 0 ? void 0 : _c.id) === menu_item.form_item_entity_key; });
                const choice = mutation === null || mutation === void 0 ? void 0 : mutation.payload.musicFormBooleanChoice;
                /*** Volumio-YouTube.js ***/
                // TODO: Push to YouTube.js repo
                if ((choice === null || choice === void 0 ? void 0 : choice.selected) !== undefined) {
                    //if (choice?.selected !== undefined && choice?.opaqueToken) {
                    menu_item.selected = choice.selected;
                }
                else {
                    missing_or_invalid_mutations.push(`'${menu_item.title}'`);
                }
                /*** Volumio-YouTube.js ***/
                // TODO: Push to YouTube.js repo
                // Include `opaqueToken` in endpoint of menu items that invoke `musicBrowseFormBinderCommand` when clicked (e.g. Explore -> Charts).
                // the command's `browseEndpoint`
                if (choice === null || choice === void 0 ? void 0 : choice.opaqueToken) {
                    const command = (_c = (_b = menu_item.endpoint) === null || _b === void 0 ? void 0 : _b.payload.commands) === null || _c === void 0 ? void 0 : _c.find((c) => { var _b; return (_b = c.musicBrowseFormBinderCommand) === null || _b === void 0 ? void 0 : _b.browseEndpoint; });
                    if (command) {
                        command.musicBrowseFormBinderCommand.browseEndpoint.formData = {
                            selectedValues: [choice.opaqueToken]
                        };
                    }
                }
            }
            if (missing_or_invalid_mutations.length > 0) {
                console.warn(new InnertubeError(`Mutation data missing or invalid for ${missing_or_invalid_mutations.length} out of ${music_multi_select_menu_items.length} MusicMultiSelectMenuItems. ` +
                    `The titles of the failed items are: ${missing_or_invalid_mutations.join(', ')}.\n` +
                    `This is a bug, please report it at ${Platform.shim.info.bugs_url}`));
            }
        }
    }
    static sanitizeClassName(input) {
        return (input.charAt(0).toUpperCase() + input.slice(1))
            .replace(/Renderer|Model/g, '')
            .replace(/Radio/g, 'Mix').trim();
    }
    static shouldIgnore(classname) {
        return this.ignore_list.has(classname);
    }
    static getParserByName(classname) {
        const ParserConstructor = __classPrivateFieldGet(this, _a, "f", _Parser_rt_nodes).get(classname);
        if (!ParserConstructor) {
            const error = new Error(`Module not found: ${classname}`);
            error.code = 'MODULE_NOT_FOUND';
            throw error;
        }
        return ParserConstructor;
    }
    static hasParser(classname) {
        return __classPrivateFieldGet(this, _a, "f", _Parser_rt_nodes).has(classname);
    }
    static addRuntimeParser(classname, ParserConstructor) {
        __classPrivateFieldGet(this, _a, "f", _Parser_rt_nodes).set(classname, ParserConstructor);
        __classPrivateFieldGet(this, _a, "f", _Parser_dynamic_nodes).set(classname, ParserConstructor);
    }
    static getDynamicParsers() {
        return Object.fromEntries(__classPrivateFieldGet(this, _a, "f", _Parser_dynamic_nodes));
    }
}
_a = Parser, _Parser_clearMemo = function _Parser_clearMemo() {
    __classPrivateFieldSet(Parser, _a, null, "f", _Parser_memo);
}, _Parser_createMemo = function _Parser_createMemo() {
    __classPrivateFieldSet(Parser, _a, new Memo(), "f", _Parser_memo);
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
}, _Parser_printError = function _Parser_printError({ classname, classdata, err }) {
    if (err.code == 'MODULE_NOT_FOUND') {
        return console.warn(new InnertubeError(`${classname} not found!\n` +
            `This is a bug, want to help us fix it? Follow the instructions at ${Platform.shim.info.repo_url.split('#')[0]}/blob/main/docs/updating-the-parser.md or report it at ${Platform.shim.info.bugs_url}!`, classdata));
    }
    console.warn(new InnertubeError(`Something went wrong at ${classname}!\n` +
        `This is a bug, please report it at ${Platform.shim.info.bugs_url}`, { stack: err.stack }));
};
_Parser_errorHandler = { value: __classPrivateFieldGet(Parser, _a, "m", _Parser_printError) };
_Parser_memo = { value: null };
Parser.ignore_list = new Set([
    'AdSlot',
    'DisplayAd',
    'SearchPyv',
    'MealbarPromo',
    'PrimetimePromo',
    'BackgroundPromo',
    'PromotedSparklesWeb',
    'RunAttestationCommand',
    'CompactPromotedVideo',
    'BrandVideoShelf',
    'BrandVideoSingleton',
    'StatementBanner',
    'GuideSigninPromo'
]);
_Parser_rt_nodes = { value: new Map(Object.entries(YTNodes)) };
_Parser_dynamic_nodes = { value: new Map() };
export default Parser;
// Continuation
export class ItemSectionContinuation extends YTNode {
    constructor(data) {
        var _b, _c, _d;
        super();
        this.contents = Parser.parseArray(data.contents);
        if (Array.isArray(data.continuations)) {
            /*** Volumio-YouTube.js ***/
            this.continuation = (_d = (_c = (_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.nextContinuationData) === null || _d === void 0 ? void 0 : _d.continuation;
            //this.continuation = data.continuations?.at(0)?.nextContinuationData?.continuation;
        }
    }
}
ItemSectionContinuation.type = 'itemSectionContinuation';
export class NavigateAction extends YTNode {
    constructor(data) {
        super();
        this.endpoint = new NavigationEndpoint(data.endpoint);
    }
}
NavigateAction.type = 'navigateAction';
export class AppendContinuationItemsAction extends YTNode {
    constructor(data) {
        super();
        this.contents = Parser.parseArray(data.continuationItems);
    }
}
AppendContinuationItemsAction.type = 'appendContinuationItemsAction';
export class ReloadContinuationItemsCommand extends YTNode {
    constructor(data) {
        super();
        this.target_id = data.targetId;
        this.contents = Parser.parse(data.continuationItems, true);
        this.slot = data === null || data === void 0 ? void 0 : data.slot;
    }
}
ReloadContinuationItemsCommand.type = 'reloadContinuationItemsCommand';
export class SectionListContinuation extends YTNode {
    constructor(data) {
        var _b, _c, _d, _e, _f, _g;
        super();
        this.contents = Parser.parse(data.contents, true);
        this.continuation =
            ((_d = (_c = (_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.nextContinuationData) === null || _d === void 0 ? void 0 : _d.continuation) ||
                ((_g = (_f = (_e = data.continuations) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.reloadContinuationData) === null || _g === void 0 ? void 0 : _g.continuation) || null;
        /*** Volumio-YouTube.js ***/
        if (data.header) {
            this.header = Parser.parse(data.header);
        }
    }
}
SectionListContinuation.type = 'sectionListContinuation';
export class MusicPlaylistShelfContinuation extends YTNode {
    constructor(data) {
        var _b;
        super();
        this.contents = Parser.parse(data.contents, true);
        this.continuation = ((_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData.continuation) || null;
    }
}
MusicPlaylistShelfContinuation.type = 'musicPlaylistShelfContinuation';
export class MusicShelfContinuation extends YTNode {
    constructor(data) {
        var _b, _c, _d, _e;
        super();
        this.contents = Parser.parseArray(data.contents);
        this.continuation =
            ((_c = (_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0].nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) ||
                ((_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0].reloadContinuationData) === null || _e === void 0 ? void 0 : _e.continuation) || null;
    }
}
MusicShelfContinuation.type = 'musicShelfContinuation';
export class GridContinuation extends YTNode {
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
GridContinuation.type = 'gridContinuation';
export class PlaylistPanelContinuation extends YTNode {
    constructor(data) {
        var _b, _c, _d, _e, _f, _g;
        super();
        this.contents = Parser.parseArray(data.contents);
        this.continuation = ((_d = (_c = (_b = data.continuations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.nextContinuationData) === null || _d === void 0 ? void 0 : _d.continuation) ||
            ((_g = (_f = (_e = data.continuations) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.nextRadioContinuationData) === null || _g === void 0 ? void 0 : _g.continuation) || null;
    }
}
PlaylistPanelContinuation.type = 'playlistPanelContinuation';
export class Continuation extends YTNode {
    constructor(data) {
        var _b, _c, _d;
        super();
        this.continuation_type = data.type;
        this.timeout_ms = (_b = data.continuation) === null || _b === void 0 ? void 0 : _b.timeoutMs;
        this.time_until_last_message_ms = (_c = data.continuation) === null || _c === void 0 ? void 0 : _c.timeUntilLastMessageMsec;
        this.token = (_d = data.continuation) === null || _d === void 0 ? void 0 : _d.continuation;
    }
}
Continuation.type = 'continuation';
export class LiveChatContinuation extends YTNode {
    constructor(data) {
        var _b, _c, _d, _e, _f, _g, _h, _j;
        super();
        this.actions = Parser.parse((_b = data.actions) === null || _b === void 0 ? void 0 : _b.map((action) => {
            delete action.clickTrackingParams;
            return action;
        }), true) || observe([]);
        this.action_panel = Parser.parseItem(data.actionPanel);
        this.item_list = Parser.parseItem(data.itemList, LiveChatItemList);
        this.header = Parser.parseItem(data.header, LiveChatHeader);
        this.participants_list = Parser.parseItem(data.participantsList, LiveChatParticipantsList);
        this.popout_message = Parser.parseItem(data.popoutMessage, Message);
        this.emojis = ((_c = data.emojis) === null || _c === void 0 ? void 0 : _c.map((emoji) => ({
            emoji_id: emoji.emojiId,
            shortcuts: emoji.shortcuts,
            search_terms: emoji.searchTerms,
            image: Thumbnail.fromResponse(emoji.image),
            is_custom_emoji: emoji.isCustomEmoji
        }))) || [];
        let continuation, type;
        if ((_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0].timedContinuationData) {
            type = 'timed';
            continuation = (_e = data.continuations) === null || _e === void 0 ? void 0 : _e[0].timedContinuationData;
        }
        else if ((_f = data.continuations) === null || _f === void 0 ? void 0 : _f[0].invalidationContinuationData) {
            type = 'invalidation';
            continuation = (_g = data.continuations) === null || _g === void 0 ? void 0 : _g[0].invalidationContinuationData;
        }
        else if ((_h = data.continuations) === null || _h === void 0 ? void 0 : _h[0].liveChatReplayContinuationData) {
            type = 'replay';
            continuation = (_j = data.continuations) === null || _j === void 0 ? void 0 : _j[0].liveChatReplayContinuationData;
        }
        this.continuation = new Continuation({ continuation, type });
        this.viewer_name = data.viewerName;
    }
}
LiveChatContinuation.type = 'liveChatContinuation';
//# sourceMappingURL=parser.js.map