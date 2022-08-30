import Session from './Session';
import TrackInfo from '../parser/ytmusic/TrackInfo';
import Search from '../parser/ytmusic/Search';
import HomeFeed from '../parser/ytmusic/HomeFeed';
import Explore from '../parser/ytmusic/Explore';
import Library from '../parser/ytmusic/Library';
import Artist from '../parser/ytmusic/Artist';
import Album from '../parser/ytmusic/Album';
import Playlist from '../parser/ytmusic/Playlist';
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
    getInfo(video_id: string): Promise<TrackInfo>;
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
    /**
     * Retrieves search suggestions for the given query.
     */
    getSearchSuggestions(query: string): Promise<import("../parser/helpers").ObservedArray<YTNode>>;
}
export default Music;
