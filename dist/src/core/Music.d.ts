import Session from './Session';
import TrackInfo from '../parser/ytmusic/TrackInfo';
import Search from '../parser/ytmusic/Search';
import HomeFeed from '../parser/ytmusic/HomeFeed';
import Explore from '../parser/ytmusic/Explore';
import Library from '../parser/ytmusic/Library';
import Artist from '../parser/ytmusic/Artist';
import Album from '../parser/ytmusic/Album';
import Playlist from '../parser/ytmusic/Playlist';
import Recap from '../parser/ytmusic/Recap';
import { YTNode } from '../parser/helpers';
import PlaylistPanel from '../parser/classes/PlaylistPanel';
import MusicDescriptionShelf from '../parser/classes/MusicDescriptionShelf';
import MusicCarouselShelf from '../parser/classes/MusicCarouselShelf';
declare class Music {
    #private;
    constructor(session: Session);
    /**
     * Retrieves track info.
     */
    /**
     * 'playlist_id': ID of the *watch* playlist, which if provided will be used to generate the playback tracking URL.
     * When `addToWatchHistory()` is called:
     * - If playlist_id not provided, then the song / video will be added to 'Recent Activity'.
     * - If provided, then the list itself (which can correspond to a playlist or album) will be added to 'Recent Activity'.
     * Full history (Recent Activity - Show All) will always include the song / video, even if playlist_id is provided.
     * Similar changes have been made (not by me) to the YouTube.js repo, but keeping the following as it is to maintain
     * compatibility with the ytmusic plugin.
     */
    getInfo(video_id: string, playlist_id?: string): Promise<TrackInfo>;
    /**
     * Searches on YouTube Music.
     */
    search(query: string, filters?: {
        type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';
    }): Promise<Search>;
    /**
     * Retrieves the home feed.
     */
    getHomeFeed(): Promise<HomeFeed>;
    /**
     * Retrieves the Explore feed.
     */
    getExplore(): Promise<Explore>;
    /**
     * Retrieves the Library.
     */
    getLibrary(): Library;
    /**
     * Retrieves artist's info & content.
     */
    getArtist(artist_id: string): Promise<Artist>;
    /**
     * Retrieves album.
     */
    getAlbum(album_id: string): Promise<Album>;
    /**
     * Retrieves playlist.
     */
    getPlaylist(playlist_id: string): Promise<Playlist>;
    /**
     * Retrieves song lyrics.
     */
    getLyrics(video_id: string): Promise<{
        text: string | undefined;
        footer: import("../parser/classes/misc/Text").default | undefined;
    }>;
    /**
     * Retrieves up next.
     */
    getUpNext(video_id: string): Promise<PlaylistPanel>;
    /**
     * Retrieves related content.
     */
    getRelated(video_id: string): Promise<import("../parser/helpers").ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>>;
    getRecap(): Promise<Recap>;
    /**
     * Retrieves search suggestions for the given query.
     */
    getSearchSuggestions(query: string): Promise<import("../parser/helpers").ObservedArray<YTNode>>;
}
export default Music;
