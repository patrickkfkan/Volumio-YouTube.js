import NavigationEndpoint from '../NavigationEndpoint';
import Thumbnail from './Thumbnail';
declare class Author {
    #private;
    id: string;
    name: string;
    thumbnails: Thumbnail[];
    endpoint: NavigationEndpoint | null;
    badges?: any;
    is_verified?: boolean | null;
    is_verified_artist?: boolean | null;
    url: string | null;
    constructor(item: any, badges?: any, thumbs?: any);
    get best_thumbnail(): Thumbnail | undefined;
}
export default Author;
