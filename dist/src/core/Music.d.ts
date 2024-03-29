import Album from '../parser/ytmusic/Album.js';
import Artist from '../parser/ytmusic/Artist.js';
import Explore from '../parser/ytmusic/Explore.js';
import HomeFeed from '../parser/ytmusic/HomeFeed.js';
import Library from '../parser/ytmusic/Library.js';
import Playlist from '../parser/ytmusic/Playlist.js';
import Recap from '../parser/ytmusic/Recap.js';
import Search from '../parser/ytmusic/Search.js';
import TrackInfo from '../parser/ytmusic/TrackInfo.js';
import MusicCarouselShelf from '../parser/classes/MusicCarouselShelf.js';
import MusicDescriptionShelf from '../parser/classes/MusicDescriptionShelf.js';
import MusicTwoRowItem from '../parser/classes/MusicTwoRowItem.js';
import PlaylistPanel from '../parser/classes/PlaylistPanel.js';
import type { ObservedArray, YTNode } from '../parser/helpers.js';
import type Session from './Session.js';
export type SearchFilters = {
    type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';
};
declare class Music {
    #private;
    constructor(session: Session);
    /**
     * Retrieves track info. Passing a list item of type MusicTwoRowItem automatically starts a radio.
     * @param target - Video id or a list item.
     */
    getInfo(target: string | MusicTwoRowItem): Promise<TrackInfo>;
    /**
     * Searches on YouTube Music.
     * @param query - Search query.
     * @param filters - Search filters.
     */
    search(query: string, filters?: SearchFilters): Promise<Search>;
    /**
     * Retrieves the home feed.
     */
    getHomeFeed(): Promise<HomeFeed>;
    /**
     * Retrieves the Explore feed.
     */
    getExplore(): Promise<Explore>;
    /**
     * Retrieves the library.
     */
    getLibrary(): Promise<Library>;
    /**
     * Retrieves artist's info & content.
     * @param artist_id - The artist id.
     */
    getArtist(artist_id: string): Promise<Artist>;
    /**
     * Retrieves album.
     * @param album_id - The album id.
     */
    getAlbum(album_id: string): Promise<Album>;
    /**
     * Retrieves playlist.
     * @param playlist_id - The playlist id.
     */
    getPlaylist(playlist_id: string): Promise<Playlist>;
    /**
     * Retrieves up next.
     * @param video_id - The video id.
     * @param automix - Whether to enable automix.
     */
    getUpNext(video_id: string, automix?: boolean): Promise<PlaylistPanel>;
    /**
     * Retrieves related content.
     * @param video_id - The video id.
     */
    getRelated(video_id: string): Promise<ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>>;
    /**
     * Retrieves song lyrics.
     * @param video_id - The video id.
     */
    getLyrics(video_id: string): Promise<MusicDescriptionShelf | undefined>;
    /**
     * Retrieves recap.
     */
    getRecap(): Promise<Recap>;
    /**
     * Retrieves search suggestions for the given query.
     * @param query - The query.
     */
    getSearchSuggestions(query: string): Promise<ObservedArray<YTNode>>;
}
export default Music;
