import type { Memo, ObservedArray, SuperParsedResult, YTNode } from '../../parser/helpers.js';
import { ReloadContinuationItemsCommand } from '../../parser/index.js';
import type Actions from '../Actions.js';
import BackstagePost from '../../parser/classes/BackstagePost.js';
import SharedPost from '../../parser/classes/SharedPost.js';
import Channel from '../../parser/classes/Channel.js';
import CompactVideo from '../../parser/classes/CompactVideo.js';
import GridChannel from '../../parser/classes/GridChannel.js';
import GridPlaylist from '../../parser/classes/GridPlaylist.js';
import GridVideo from '../../parser/classes/GridVideo.js';
import Playlist from '../../parser/classes/Playlist.js';
import PlaylistPanelVideo from '../../parser/classes/PlaylistPanelVideo.js';
import PlaylistVideo from '../../parser/classes/PlaylistVideo.js';
import Post from '../../parser/classes/Post.js';
import ReelItem from '../../parser/classes/ReelItem.js';
import ReelShelf from '../../parser/classes/ReelShelf.js';
import RichShelf from '../../parser/classes/RichShelf.js';
import Shelf from '../../parser/classes/Shelf.js';
import Video from '../../parser/classes/Video.js';
import WatchCardCompactVideo from '../../parser/classes/WatchCardCompactVideo.js';
import type MusicQueue from '../../parser/classes/MusicQueue.js';
import type RichGrid from '../../parser/classes/RichGrid.js';
import type SectionList from '../../parser/classes/SectionList.js';
import type { IParsedResponse } from '../../parser/types/index.js';
import type { ApiResponse } from '../Actions.js';
export default class Feed<T extends IParsedResponse = IParsedResponse> {
    #private;
    constructor(actions: Actions, response: ApiResponse | IParsedResponse, already_parsed?: boolean);
    /**
     * Get all videos on a given page via memo
     */
    static getVideosFromMemo(memo: Memo): ObservedArray<CompactVideo | Video | GridVideo | PlaylistPanelVideo | PlaylistVideo | ReelItem | WatchCardCompactVideo>;
    /**
     * Get all playlists on a given page via memo
     */
    static getPlaylistsFromMemo(memo: Memo): ObservedArray<Playlist | GridPlaylist>;
    /**
     * Get all the videos in the feed
     */
    get videos(): ObservedArray<CompactVideo | Video | GridVideo | PlaylistPanelVideo | PlaylistVideo | ReelItem | WatchCardCompactVideo>;
    /**
     * Get all the community posts in the feed
     */
    get posts(): ObservedArray<BackstagePost | Post | SharedPost>;
    /**
     * Get all the channels in the feed
     */
    get channels(): ObservedArray<Channel | GridChannel>;
    /**
     * Get all playlists in the feed
     */
    get playlists(): ObservedArray<Playlist | GridPlaylist>;
    get memo(): Memo;
    /**
     * Returns contents from the page.
     */
    get page_contents(): SectionList | MusicQueue | RichGrid | ReloadContinuationItemsCommand;
    /**
     * Returns all segments/sections from the page.
     */
    get shelves(): ObservedArray<ReelShelf | RichShelf | Shelf>;
    /**
     * Finds shelf by title.
     */
    getShelf(title: string): ReelShelf | RichShelf | Shelf | undefined;
    /**
     * Returns secondary contents from the page.
     */
    get secondary_contents(): SuperParsedResult<YTNode> | undefined;
    get actions(): Actions;
    /**
     * Get the original page data
     */
    get page(): T;
    /**
     * Checks if the feed has continuation.
     */
    get has_continuation(): boolean;
    /**
     * Retrieves continuation data as it is.
     */
    getContinuationData(): Promise<T | undefined>;
    /**
     * Retrieves next batch of contents and returns a new {@link Feed} object.
     */
    getContinuation(): Promise<Feed<T>>;
}
