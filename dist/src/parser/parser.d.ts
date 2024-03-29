import Message from './classes/Message.js';
import LiveChatParticipantsList from './classes/LiveChatParticipantsList.js';
import LiveChatHeader from './classes/LiveChatHeader.js';
import LiveChatItemList from './classes/LiveChatItemList.js';
import type { IParsedResponse, IRawResponse, RawData, RawNode } from './types/index.js';
import Format from './classes/misc/Format.js';
import NavigationEndpoint from './classes/NavigationEndpoint.js';
import Thumbnail from './classes/misc/Thumbnail.js';
import type { ObservedArray, YTNodeConstructor } from './helpers.js';
import { Memo, SuperParsedResult, YTNode } from './helpers.js';
export type ParserError = {
    classname: string;
    classdata: any;
    err: any;
};
export type ParserErrorHandler = (error: ParserError) => void;
export default class Parser {
    #private;
    static setParserErrorHandler(handler: ParserErrorHandler): void;
    /**
     * Parses given InnerTube response.
     * @param data - Raw data.
     */
    static parseResponse<T extends IParsedResponse = IParsedResponse>(data: IRawResponse): T;
    /**
     * Parses a single item.
     * @param data - The data to parse.
     * @param validTypes - YTNode types that are allowed to be parsed.
     */
    static parseItem<T extends YTNode, K extends YTNodeConstructor<T>[]>(data: RawNode | undefined, validTypes: K): InstanceType<K[number]> | null;
    static parseItem<T extends YTNode>(data: RawNode | undefined, validTypes: YTNodeConstructor<T>): T | null;
    static parseItem(data?: RawNode): YTNode;
    /**
     * Parses an array of items.
     * @param data - The data to parse.
     * @param validTypes - YTNode types that are allowed to be parsed.
     */
    static parseArray<T extends YTNode, K extends YTNodeConstructor<T>[]>(data: RawNode[] | undefined, validTypes: K): ObservedArray<InstanceType<K[number]>>;
    static parseArray<T extends YTNode = YTNode>(data: RawNode[] | undefined, validType: YTNodeConstructor<T>): ObservedArray<T>;
    static parseArray(data: RawNode[] | undefined): ObservedArray<YTNode>;
    /**
     * Parses an item or an array of items.
     * @param data - The data to parse.
     * @param requireArray - Whether the data should be parsed as an array.
     * @param validTypes - YTNode types that are allowed to be parsed.
     */
    static parse<T extends YTNode, K extends YTNodeConstructor<T>[]>(data: RawData, requireArray: true, validTypes?: K): ObservedArray<InstanceType<K[number]>> | null;
    static parse<T extends YTNode = YTNode>(data?: RawData, requireArray?: false | undefined, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]): SuperParsedResult<T>;
    static parseC(data: RawNode): Continuation | null;
    static parseLC(data: RawNode): ItemSectionContinuation | SectionListContinuation | LiveChatContinuation | MusicPlaylistShelfContinuation | MusicShelfContinuation | GridContinuation | PlaylistPanelContinuation | null;
    static parseRR(actions: RawNode[]): ObservedArray<ReloadContinuationItemsCommand | AppendContinuationItemsAction>;
    static parseActions(data: RawData): SuperParsedResult<YTNode>;
    static parseFormats(formats: RawNode[]): Format[];
    static applyMutations(memo: Memo, mutations: RawNode[]): void;
    static sanitizeClassName(input: string): string;
    static ignore_list: Set<string>;
    static shouldIgnore(classname: string): boolean;
    static getParserByName(classname: string): YTNodeConstructor<YTNode>;
    static hasParser(classname: string): boolean;
    static addRuntimeParser(classname: string, ParserConstructor: YTNodeConstructor): void;
    static getDynamicParsers(): {
        [k: string]: YTNodeConstructor<YTNode>;
    };
}
export declare class ItemSectionContinuation extends YTNode {
    static readonly type = "itemSectionContinuation";
    contents: ObservedArray<YTNode> | null;
    continuation?: string;
    constructor(data: RawNode);
}
export declare class NavigateAction extends YTNode {
    static readonly type = "navigateAction";
    endpoint: NavigationEndpoint;
    constructor(data: RawNode);
}
export declare class AppendContinuationItemsAction extends YTNode {
    static readonly type = "appendContinuationItemsAction";
    contents: ObservedArray<YTNode> | null;
    constructor(data: RawNode);
}
export declare class ReloadContinuationItemsCommand extends YTNode {
    static readonly type = "reloadContinuationItemsCommand";
    target_id: string;
    contents: ObservedArray<YTNode> | null;
    slot?: string;
    constructor(data: RawNode);
}
export declare class SectionListContinuation extends YTNode {
    static readonly type = "sectionListContinuation";
    continuation: string;
    contents: ObservedArray<YTNode> | null;
    header?: SuperParsedResult<YTNode> | undefined;
    constructor(data: RawNode);
}
export declare class MusicPlaylistShelfContinuation extends YTNode {
    static readonly type = "musicPlaylistShelfContinuation";
    continuation: string;
    contents: ObservedArray<YTNode> | null;
    constructor(data: RawNode);
}
export declare class MusicShelfContinuation extends YTNode {
    static readonly type = "musicShelfContinuation";
    continuation: string;
    contents: ObservedArray<YTNode> | null;
    constructor(data: RawNode);
}
export declare class GridContinuation extends YTNode {
    static readonly type = "gridContinuation";
    continuation: string;
    items: ObservedArray<YTNode> | null;
    constructor(data: RawNode);
    get contents(): ObservedArray<YTNode> | null;
}
export declare class PlaylistPanelContinuation extends YTNode {
    static readonly type = "playlistPanelContinuation";
    continuation: string;
    contents: ObservedArray<YTNode> | null;
    constructor(data: RawNode);
}
export declare class Continuation extends YTNode {
    static readonly type = "continuation";
    continuation_type: string;
    timeout_ms?: number;
    time_until_last_message_ms?: number;
    token: string;
    constructor(data: RawNode);
}
export declare class LiveChatContinuation extends YTNode {
    static readonly type = "liveChatContinuation";
    actions: ObservedArray<YTNode>;
    action_panel: YTNode | null;
    item_list: LiveChatItemList | null;
    header: LiveChatHeader | null;
    participants_list: LiveChatParticipantsList | null;
    popout_message: Message | null;
    emojis: {
        emoji_id: string;
        shortcuts: string[];
        search_terms: string[];
        image: Thumbnail[];
    }[];
    continuation: Continuation;
    viewer_name: string;
    constructor(data: RawNode);
}
