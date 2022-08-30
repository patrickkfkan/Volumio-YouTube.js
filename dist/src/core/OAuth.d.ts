import Session from './Session';
import { OAuthError } from '../utils/Utils';
export interface Credentials {
    /**
     * Token used to sign in.
     */
    access_token: string;
    /**
     * Token used to get a new access token.
     */
    refresh_token: string;
    /**
     * Access token's expiration date, which is usually 24hrs-ish.
     */
    expires: Date;
}
export declare type OAuthAuthPendingData = any;
export declare type OAuthAuthEventHandler = (data: {
    credentials: Credentials;
    status: 'SUCCESS';
}) => any;
export declare type OAuthAuthPendingEventHandler = (data: OAuthAuthPendingData) => any;
export declare type OAuthAuthErrorEventHandler = (err: OAuthError) => any;
declare class OAuth {
    #private;
    constructor(session: Session);
    /**
     * Starts the auth flow in case no valid credentials are available.
     */
    init(credentials?: Credentials): Promise<void>;
    cacheCredentials(): Promise<void>;
    removeCache(): Promise<void>;
    /**
     * Refresh access token if the same has expired.
     */
    refreshIfRequired(): Promise<void>;
    revokeCredentials(): Promise<any>;
    get credentials(): Credentials | undefined;
    get has_access_token_expired(): boolean;
    validateCredentials(): this is this & {
        credentials: Credentials;
    };
}
export default OAuth;
