import Actions from './Actions';
import Analytics from '../parser/youtube/Analytics';
import TimeWatched from '../parser/youtube/TimeWatched';
import AccountInfo from '../parser/youtube/AccountInfo';
declare class AccountManager {
    #private;
    channel: {
        /**
         * Edits channel name.
         */
        editName: (new_name: string) => Promise<{
            success: boolean;
            status_code: number;
            data: any;
        }>;
        /**
         * Edits channel description.
         *
         */
        editDescription: (new_description: string) => Promise<{
            success: boolean;
            status_code: number;
            data: any;
        }>;
        /**
         * Retrieves basic channel analytics.
         */
        getBasicAnalytics: () => Promise<Analytics>;
    };
    settings: {
        notifications: {
            /**
             * Notify about activity from the channels you're subscribed to.
             * @param option - ON | OFF
             */
            setSubscriptions: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: any;
            }>;
            /**
             * Recommended content notifications.
             * @param option - ON | OFF
             */
            setRecommendedVideos: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: any;
            }>;
            /**
             * Notify about activity on your channel.
             * @param option - ON | OFF
             */
            setChannelActivity: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: any;
            }>;
            /**
             * Notify about replies to your comments.
             * @param option - ON | OFF
             */
            setCommentReplies: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: any;
            }>;
            /**
             * Notify when others mention your channel.
             * @param option - ON | OFF
             */
            setMentions: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: any;
            }>;
            /**
             * Notify when others share your content on their channels.
             * @param option - ON | OFF
             */
            setSharedContent: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: any;
            }>;
        };
        privacy: {
            /**
             * If set to true, your subscriptions won't be visible to others.
             * @param option - ON | OFF
             */
            setSubscriptionsPrivate: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: any;
            }>;
            /**
             * If set to true, saved playlists won't appear on your channel.
             * @param option - ON | OFF
             */
            setSavedPlaylistsPrivate: (option: boolean) => Promise<{
                success: boolean;
                status_code: number;
                data: any;
            }>;
        };
    };
    constructor(actions: Actions);
    /**
     * Retrieves channel info.
     */
    getInfo(): Promise<AccountInfo>;
    /**
     * Retrieves time watched statistics.
     */
    getTimeWatched(): Promise<TimeWatched>;
    /**
     * Retrieves basic channel analytics.
     */
    getAnalytics(): Promise<Analytics>;
}
export default AccountManager;
