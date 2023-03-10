import Session, { SessionOptions } from './core/Session.js';
import NavigationEndpoint from './parser/classes/NavigationEndpoint.js';
import Channel from './parser/youtube/Channel.js';
import Comments from './parser/youtube/Comments.js';
import History from './parser/youtube/History.js';
import Library from './parser/youtube/Library.js';
import NotificationsMenu from './parser/youtube/NotificationsMenu.js';
import Playlist from './parser/youtube/Playlist.js';
import Search from './parser/youtube/Search.js';
import VideoInfo from './parser/youtube/VideoInfo.js';
import HashtagFeed from './parser/youtube/HashtagFeed.js';
import AccountManager from './core/AccountManager.js';
import Feed from './core/Feed.js';
import InteractionManager from './core/InteractionManager.js';
import YTKids from './core/Kids.js';
import YTMusic from './core/Music.js';
import PlaylistManager from './core/PlaylistManager.js';
import YTStudio from './core/Studio.js';
import TabbedFeed from './core/TabbedFeed.js';
import HomeFeed from './parser/youtube/HomeFeed.js';
import Guide from './parser/youtube/Guide.js';
import type Actions from './core/Actions.js';
import type Format from './parser/classes/misc/Format.js';
import type { ApiResponse } from './core/Actions.js';
import type { IBrowseResponse, IParsedResponse } from './parser/types/index.js';
import type { DownloadOptions, FormatOptions } from './utils/FormatUtils.js';
export type InnertubeConfig = SessionOptions;
export interface SearchFilters {
    upload_date?: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year';
    type?: 'all' | 'video' | 'channel' | 'playlist' | 'movie';
    duration?: 'all' | 'short' | 'medium' | 'long';
    sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count';
    features?: ('hd' | 'subtitles' | 'creative_commons' | '3d' | 'live' | 'purchased' | '4k' | '360' | 'location' | 'hdr' | 'vr180')[];
}
export type InnerTubeClient = 'WEB' | 'ANDROID' | 'YTMUSIC_ANDROID' | 'YTMUSIC' | 'YTSTUDIO_ANDROID' | 'TV_EMBEDDED' | 'YTKIDS';
declare class Innertube {
    session: Session;
    account: AccountManager;
    playlist: PlaylistManager;
    interact: InteractionManager;
    music: YTMusic;
    studio: YTStudio;
    kids: YTKids;
    actions: Actions;
    constructor(session: Session);
    static create(config?: InnertubeConfig): Promise<Innertube>;
    /**
     * Retrieves video info.
     * @param target - The video id or `NavigationEndpoint`.
     * @param client - The client to use.
     */
    getInfo(target: string | NavigationEndpoint, client?: InnerTubeClient): Promise<VideoInfo>;
    /**
     * Retrieves basic video info.
     * @param video_id - The video id.
     * @param client - The client to use.
     */
    getBasicInfo(video_id: string, client?: InnerTubeClient): Promise<VideoInfo>;
    /**
     * Searches a given query.
     * @param query - The search query.
     * @param filters - Search filters.
     */
    search(query: string, filters?: SearchFilters): Promise<Search>;
    /**
     * Retrieves search suggestions for a given query.
     * @param query - The search query.
     */
    getSearchSuggestions(query: string): Promise<string[]>;
    /**
     * Retrieves comments for a video.
     * @param video_id - The video id.
     * @param sort_by - Sorting options.
     */
    getComments(video_id: string, sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST'): Promise<Comments>;
    /**
     * Retrieves YouTube's home feed (aka recommendations).
     */
    getHomeFeed(): Promise<HomeFeed>;
    /**
     * Retrieves YouTube's content guide.
     */
    getGuide(): Promise<Guide>;
    /**
     * Returns the account's library.
     */
    getLibrary(): Promise<Library>;
    /**
     * Retrieves watch history.
     * Which can also be achieved with {@link getLibrary}.
     */
    getHistory(): Promise<History>;
    /**
     * Retrieves trending content.
     */
    getTrending(): Promise<TabbedFeed<IBrowseResponse>>;
    /**
     * Retrieves subscriptions feed.
     */
    getSubscriptionsFeed(): Promise<Feed<IBrowseResponse>>;
    /**
     * Retrieves contents for a given channel.
     * @param id - Channel id
     */
    getChannel(id: string): Promise<Channel>;
    /**
     * Retrieves notifications.
     */
    getNotifications(): Promise<NotificationsMenu>;
    /**
     * Retrieves unseen notifications count.
     */
    getUnseenNotificationsCount(): Promise<number>;
    /**
     * Retrieves playlist contents.
     * @param id - Playlist id
     */
    getPlaylist(id: string): Promise<Playlist>;
    /**
     * Retrieves a given hashtag's page.
     * @param hashtag - The hashtag to fetch.
     */
    getHashtag(hashtag: string): Promise<HashtagFeed>;
    /**
     * An alternative to {@link download}.
     * Returns deciphered streaming data.
     *
     * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
     * @param video_id - The video id.
     * @param options - Format options.
     */
    getStreamingData(video_id: string, options?: FormatOptions): Promise<Format>;
    /**
     * Downloads a given video. If you only need the direct download link see {@link getStreamingData}.
     * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
     * @param video_id - The video id.
     * @param options - Download options.
     */
    download(video_id: string, options?: DownloadOptions): Promise<ReadableStream<Uint8Array>>;
    /**
     * Resolves the given URL.
     * @param url - The URL.
     */
    resolveURL(url: string): Promise<NavigationEndpoint>;
    /**
     * Utility method to call an endpoint without having to use {@link Actions}.
     * @param endpoint -The endpoint to call.
     * @param args - Call arguments.
     */
    call<T extends IParsedResponse>(endpoint: NavigationEndpoint, args: {
        [key: string]: any;
        parse: true;
    }): Promise<T>;
    call(endpoint: NavigationEndpoint, args?: {
        [key: string]: any;
        parse?: false;
    }): Promise<ApiResponse>;
}
export default Innertube;
