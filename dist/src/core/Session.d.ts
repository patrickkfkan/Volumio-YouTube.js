import EventEmitterLike from '../utils/EventEmitterLike.js';
import Actions from './Actions.js';
import Player from './Player.js';
import type { ICache } from '../types/Cache.js';
import type { FetchFunction } from '../types/PlatformShim.js';
import HTTPClient from '../utils/HTTPClient.js';
import type { DeviceCategory } from '../utils/Utils.js';
import type { Credentials, OAuthAuthErrorEventHandler, OAuthAuthEventHandler, OAuthAuthPendingEventHandler } from './OAuth.js';
import OAuth from './OAuth.js';
export declare enum ClientType {
    WEB = "WEB",
    KIDS = "WEB_KIDS",
    MUSIC = "WEB_REMIX",
    ANDROID = "ANDROID",
    ANDROID_MUSIC = "ANDROID_MUSIC",
    ANDROID_CREATOR = "ANDROID_CREATOR",
    TV_EMBEDDED = "TVHTML5_SIMPLY_EMBEDDED_PLAYER"
}
export interface Context {
    client: {
        hl: string;
        gl: string;
        remoteHost?: string;
        screenDensityFloat: number;
        screenHeightPoints: number;
        screenPixelDensity: number;
        screenWidthPoints: number;
        visitorData: string;
        clientName: string;
        clientVersion: string;
        clientScreen?: string;
        androidSdkVersion?: string;
        osName: string;
        osVersion: string;
        platform: string;
        clientFormFactor: string;
        userInterfaceTheme: string;
        timeZone: string;
        userAgent?: string;
        browserName?: string;
        browserVersion?: string;
        originalUrl: string;
        deviceMake: string;
        deviceModel: string;
        utcOffsetMinutes: number;
        kidsAppInfo?: {
            categorySettings: {
                enabledCategories: string[];
            };
            contentSettings: {
                corpusPreference: string;
                kidsNoSearchMode: string;
            };
        };
    };
    user: {
        enableSafetyMode: boolean;
        lockedSafetyMode: boolean;
    };
    thirdParty?: {
        embedUrl: string;
    };
}
export interface SessionOptions {
    /**
     * Language.
     */
    lang?: string;
    /**
     * Geolocation.
     */
    location?: string;
    /**
     * The account index to use. This is useful if you have multiple accounts logged in.
     * **NOTE:**
     * Only works if you are signed in with cookies.
     */
    account_index?: number;
    /**
     * Specifies whether to retrieve the JS player. Disabling this will make session creation faster.
     * **NOTE:** Deciphering formats is not possible without the JS player.
     */
    retrieve_player?: boolean;
    /**
     * Specifies whether to enable safety mode. This will prevent the session from loading any potentially unsafe content.
     */
    enable_safety_mode?: boolean;
    /**
     * Specifies whether to generate the session data locally or retrieve it from YouTube.
     * This can be useful if you need more performance.
     */
    generate_session_locally?: boolean;
    /**
     * Platform to use for the session.
     */
    device_category?: DeviceCategory;
    /**
     * InnerTube client type.
     */
    client_type?: ClientType;
    /**
     * The time zone.
     */
    timezone?: string;
    /**
     * Used to cache the deciphering functions from the JS player.
     */
    cache?: ICache;
    /**
     * YouTube cookies.
     */
    cookie?: string;
    /**
     * Setting this to a valid and persistent visitor data string will allow YouTube to give this session tailored content even when not logged in.
     * A good way to get a valid one is by either grabbing it from a browser or calling InnerTube's `/visitor_id` endpoint.
     */
    visitor_data?: string;
    /**
     * Fetch function to use.
     */
    fetch?: FetchFunction;
}
export interface SessionData {
    context: Context;
    api_key: string;
    api_version: string;
}
/**
 * Represents an InnerTube session. This holds all the data needed to make requests to YouTube.
 */
export default class Session extends EventEmitterLike {
    #private;
    oauth: OAuth;
    http: HTTPClient;
    logged_in: boolean;
    actions: Actions;
    cache?: ICache;
    constructor(context: Context, api_key: string, api_version: string, account_index: number, player?: Player, cookie?: string, fetch?: FetchFunction, cache?: ICache);
    on(type: 'auth', listener: OAuthAuthEventHandler): void;
    on(type: 'auth-pending', listener: OAuthAuthPendingEventHandler): void;
    on(type: 'auth-error', listener: OAuthAuthErrorEventHandler): void;
    on(type: 'update-credentials', listener: OAuthAuthEventHandler): void;
    once(type: 'auth', listener: OAuthAuthEventHandler): void;
    once(type: 'auth-pending', listener: OAuthAuthPendingEventHandler): void;
    once(type: 'auth-error', listener: OAuthAuthErrorEventHandler): void;
    static create(options?: SessionOptions): Promise<Session>;
    static getSessionData(lang?: string, location?: string, account_index?: number, visitor_data?: string, enable_safety_mode?: boolean, generate_session_locally?: boolean, device_category?: DeviceCategory, client_name?: ClientType, tz?: string, fetch?: FetchFunction): Promise<{
        account_index: number;
        context: Context;
        api_key: string;
        api_version: string;
    }>;
    signIn(credentials?: Credentials): Promise<void>;
    /**
     * Signs out of the current account and revokes the credentials.
     */
    signOut(): Promise<Response | undefined>;
    /**
     * InnerTube API key.
     */
    get key(): string;
    /**
     * InnerTube API version.
     */
    get api_version(): string;
    get client_version(): string;
    get client_name(): string;
    get account_index(): number;
    get context(): Context;
    get player(): Player | undefined;
    get lang(): string;
}
