import { ParsedResponse } from '..';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import Feed from '../../core/Feed';
import History from './History';
import Playlist from './Playlist';
import ProfileColumnStats from '../classes/ProfileColumnStats';
import ProfileColumnUserInfo from '../classes/ProfileColumnUserInfo';
declare class Library {
    #private;
    profile: {
        stats: ProfileColumnStats | null;
        user_info: ProfileColumnUserInfo | null;
    };
    sections: {
        type: any;
        title: any;
        contents: any;
        getAll: () => Promise<Feed | Playlist | History>;
    }[];
    constructor(response: AxioslikeResponse, actions: Actions);
    get history(): {
        type: any;
        title: any;
        contents: any;
        getAll: () => Promise<Feed | Playlist | History>;
    } | undefined;
    get watch_later(): {
        type: any;
        title: any;
        contents: any;
        getAll: () => Promise<Feed | Playlist | History>;
    } | undefined;
    get liked_videos(): {
        type: any;
        title: any;
        contents: any;
        getAll: () => Promise<Feed | Playlist | History>;
    } | undefined;
    get playlists(): {
        type: any;
        title: any;
        contents: any;
        getAll: () => Promise<Feed | Playlist | History>;
    } | undefined;
    get clips(): {
        type: any;
        title: any;
        contents: any;
        getAll: () => Promise<Feed | Playlist | History>;
    } | undefined;
    get page(): ParsedResponse;
}
export default Library;
