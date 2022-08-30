import Actions from '../../core/Actions';
import TabbedFeed from '../../core/TabbedFeed';
import C4TabbedHeader from '../classes/C4TabbedHeader';
import ChannelAboutFullMetadata from '../classes/ChannelAboutFullMetadata';
import Tab from '../classes/Tab';
declare class Channel extends TabbedFeed {
    header: C4TabbedHeader;
    metadata: {
        url_canonical?: string | undefined;
        title: string;
        description: string;
        thumbnail?: import("../classes/misc/Thumbnail").default[] | null | undefined;
        site_name?: string | undefined;
        app_name?: string | undefined;
        android_package?: string | undefined;
        ios_app_store_id?: string | undefined;
        ios_app_arguments?: string | undefined;
        og_type?: string | undefined;
        url_applinks_web?: string | undefined;
        url_applinks_ios?: string | undefined;
        url_applinks_android?: string | undefined;
        url_twitter_ios?: string | undefined;
        url_twitter_android?: string | undefined;
        twitter_card_type?: string | undefined;
        twitter_site_handle?: string | undefined;
        schema_dot_org_type?: string | undefined;
        noindex?: string | undefined;
        is_unlisted?: boolean | undefined;
        is_family_safe: boolean;
        tags?: any;
        available_countries: string[];
        type: string;
        url: string;
        rss_urls: any;
        vanity_channel_url: string;
        external_id: string;
        keywords: string[];
        avatar: import("../classes/misc/Thumbnail").default[];
        android_deep_link: string;
        android_appindexing_link: string;
        ios_appindexing_link: string;
    };
    sponsor_button: import("../helpers").YTNode | null | undefined;
    subscribe_button: import("../helpers").YTNode | null | undefined;
    current_tab: Tab | undefined;
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    getVideos(): Promise<Channel>;
    getPlaylists(): Promise<Channel>;
    getHome(): Promise<Channel>;
    getCommunity(): Promise<Channel>;
    getChannels(): Promise<Channel>;
    /**
     * Retrieves the channel about page.
     * Note that this does not return a new {@link Channel} object.
     */
    getAbout(): Promise<ChannelAboutFullMetadata>;
}
export default Channel;
