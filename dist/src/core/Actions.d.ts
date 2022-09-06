import Session from './Session';
import { ParsedResponse } from '../parser/index';
export interface BrowseArgs {
    params?: string | null;
    is_ytm?: boolean;
    is_ctoken?: boolean;
    form_data?: {};
    client?: string;
}
export interface EngageArgs {
    video_id?: string;
    channel_id?: string;
    comment_id?: string;
    comment_action?: string;
    params?: string;
    text?: string;
    target_language?: string;
}
export interface AccountArgs {
    new_value?: string | boolean;
    setting_item_id?: string;
    client?: string;
}
export interface SearchArgs {
    query?: string;
    options?: {
        period?: string;
        duration?: string;
        order?: string;
    };
    client?: string;
    ctoken?: string;
    params?: string;
    filters?: any;
}
export interface AxioslikeResponse {
    success: boolean;
    status_code: number;
    data: any;
}
export declare type ActionsResponse = Promise<AxioslikeResponse>;
declare class Actions {
    #private;
    constructor(session: Session);
    get session(): Session;
    /**
     * Covers `/browse` endpoint, mostly used to access
     * YouTube's sections such as the home feed, etc
     * and sometimes to retrieve continuations.
     *
     * @param id - browseId or a continuation token
     * @param args - additional arguments
     */
    browse(id: string, args?: BrowseArgs): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Covers endpoints used to perform direct interactions
     * on YouTube.
     */
    engage(action: string, args?: EngageArgs): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Covers endpoints related to account management.
     */
    account(action: string, args?: AccountArgs): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Endpoint used for search.
     */
    search(args?: SearchArgs): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Endpoint used fo Shorts' sound search.
     */
    searchSound(args: {
        query: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Channel management endpoints.
     */
    channel(action: string, args?: {
        new_name?: string;
        new_description?: string;
        client?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Covers endpoints used for playlist management.
     */
    playlist(action: string, args?: {
        title?: string;
        ids?: string[];
        playlist_id?: string;
        action?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Covers endpoints used for notifications management.
     */
    notifications(action: string, args?: {
        pref?: string;
        channel_id?: string;
        ctoken?: string;
        params?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Covers livechat endpoints.
     */
    livechat(action: string, args?: {
        text?: string;
        video_id?: string;
        channel_id?: string;
        ctoken?: string;
        params?: string;
        client?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Endpoint used to retrieve video thumbnails.
     */
    thumbnails(args: {
        video_id: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Place Autocomplete endpoint, found it in the APK but
     * doesn't seem to be used anywhere on YouTube (maybe for ads?).
     *
     * Ex:
     * ```js
     * const places = await session.actions.geo('place_autocomplete', { input: 'San diego cafe' });
     * console.info(places.data);
     * ```
     */
    geo(action: string, args: {
        input: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Covers endpoints used to report content.
     */
    flag(action: string, args: {
        action: string;
        params?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Covers specific YouTube Music endpoints.
     */
    music(action: string, args: {
        input?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Mostly used for pagination and specific operations.
     */
    next(args?: {
        video_id?: string;
        ctoken?: string;
        client?: string;
        playlist_id?: string;
        params?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Used to retrieve video info.
     */
    getVideoInfo(id: string, cpn?: string, client?: string): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Endpoint used to retrieve user mention suggestions.
     */
    getUserMentionSuggestions(args: {
        input: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Makes calls to the playback tracking API.
     */
    stats(url: string, client: {
        client_name: string;
        client_version: string;
    }, params: {
        [key: string]: any;
    }): Promise<any>;
    /**
     * Executes an API call.
     * @param action - endpoint
     * @param args - call arguments
     */
    execute(action: string, args: {
        [key: string]: any;
        parse: true;
        protobuf?: false;
        serialized_data?: any;
    }): Promise<ParsedResponse>;
    execute(action: string, args: {
        [key: string]: any;
        parse?: false;
        protobuf?: true;
        serialized_data?: any;
    }): Promise<ActionsResponse>;
}
export default Actions;
