import Actions from './Actions';
import Analytics from '../parser/youtube/Analytics';
import TimeWatched from '../parser/youtube/TimeWatched';
import AccountInfo from '../parser/youtube/AccountInfo';
import Settings from '../parser/youtube/Settings';
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
     * Opens YouTube settings.
     */
    getSettings(): Promise<Settings>;
    /**
     * Retrieves basic channel analytics.
     */
    getAnalytics(): Promise<Analytics>;
}
export default AccountManager;
