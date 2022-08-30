export declare const URLS: Readonly<{
    YT_BASE: "https://www.youtube.com";
    YT_MUSIC_BASE: "https://music.youtube.com";
    YT_SUGGESTIONS: "https://suggestqueries.google.com/complete/";
    YT_UPLOAD: "https://upload.youtube.com/";
    API: Readonly<{
        BASE: "https://youtubei.googleapis.com";
        PRODUCTION: "https://youtubei.googleapis.com/youtubei/";
        STAGING: "https://green-youtubei.sandbox.googleapis.com/youtubei/";
        RELEASE: "https://release-youtubei.sandbox.googleapis.com/youtubei/";
        TEST: "https://test-youtubei.sandbox.googleapis.com/youtubei/";
        CAMI: "http://cami-youtubei.sandbox.googleapis.com/youtubei/";
        UYTFE: "https://uytfe.sandbox.google.com/youtubei/";
    }>;
}>;
export declare const OAUTH: Readonly<{
    SCOPE: "http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content";
    GRANT_TYPE: "http://oauth.net/grant_type/device/1.0";
    MODEL_NAME: "ytlr::";
    HEADERS: Readonly<{
        accept: "*/*";
        origin: "https://www.youtube.com";
        'user-agent': "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version";
        'content-type': "application/json";
        referer: "https://www.youtube.com/tv";
        'accept-language': "en-US";
    }>;
    REGEX: Readonly<{
        AUTH_SCRIPT: RegExp;
        CLIENT_IDENTITY: RegExp;
    }>;
}>;
export declare const CLIENTS: Readonly<{
    WEB: {
        NAME: string;
    };
    YTMUSIC: {
        NAME: string;
        VERSION: string;
    };
    ANDROID: {
        NAME: string;
        VERSION: string;
        SDK_VERSION: string;
    };
}>;
export declare const STREAM_HEADERS: Readonly<{
    accept: "*/*";
    origin: "https://www.youtube.com";
    referer: "https://www.youtube.com";
    DNT: "?1";
}>;
export declare const INNERTUBE_HEADERS_BASE: Readonly<{
    accept: "*/*";
    'accept-encoding': "gzip, deflate";
    'content-type': "application/json";
}>;
export declare const ACCOUNT_SETTINGS: Readonly<{
    SUBSCRIPTIONS: "NOTIFICATION_SUBSCRIPTION_NOTIFICATIONS";
    RECOMMENDED_VIDEOS: "NOTIFICATION_RECOMMENDATION_WEB_CONTROL";
    CHANNEL_ACTIVITY: "NOTIFICATION_COMMENT_WEB_CONTROL";
    COMMENT_REPLIES: "NOTIFICATION_COMMENT_REPLY_OTHER_WEB_CONTROL";
    USER_MENTION: "NOTIFICATION_USER_MENTION_WEB_CONTROL";
    SHARED_CONTENT: "NOTIFICATION_RETUBING_WEB_CONTROL";
    PLAYLISTS_PRIVACY: "PRIVACY_DISCOVERABLE_SAVED_PLAYLISTS";
    SUBSCRIPTIONS_PRIVACY: "PRIVACY_DISCOVERABLE_SUBSCRIPTIONS";
}>;
export declare const BASE64_DIALECT: Readonly<{
    NORMAL: string[];
    REVERSE: string[];
}>;
export declare const SIG_REGEX: Readonly<{
    ACTIONS: RegExp;
    FUNCTIONS: RegExp;
}>;
export declare const NTOKEN_REGEX: Readonly<{
    CALLS: RegExp;
    PLACEHOLDERS: RegExp;
    FUNCTIONS: RegExp;
}>;
export declare const FUNCS: Readonly<{
    PUSH: "d.push(e)";
    REVERSE_1: "d.reverse()";
    REVERSE_2: "function(d){for(var";
    SPLICE: "d.length;d.splice(e,1)";
    SWAP0_1: "d[0])[0])";
    SWAP0_2: "f=d[0];d[0]";
    ROTATE_1: "reverse().forEach";
    ROTATE_2: "unshift(d.pop())";
    BASE64_DIA: "function(){for(var";
    TRANSLATE_1: "function(d,e){for(var f";
    TRANSLATE_2: "function(d,e,f){var";
}>;
declare const _default: {
    URLS: Readonly<{
        YT_BASE: "https://www.youtube.com";
        YT_MUSIC_BASE: "https://music.youtube.com";
        YT_SUGGESTIONS: "https://suggestqueries.google.com/complete/";
        YT_UPLOAD: "https://upload.youtube.com/";
        API: Readonly<{
            BASE: "https://youtubei.googleapis.com";
            PRODUCTION: "https://youtubei.googleapis.com/youtubei/";
            STAGING: "https://green-youtubei.sandbox.googleapis.com/youtubei/";
            RELEASE: "https://release-youtubei.sandbox.googleapis.com/youtubei/";
            TEST: "https://test-youtubei.sandbox.googleapis.com/youtubei/";
            CAMI: "http://cami-youtubei.sandbox.googleapis.com/youtubei/";
            UYTFE: "https://uytfe.sandbox.google.com/youtubei/";
        }>;
    }>;
    OAUTH: Readonly<{
        SCOPE: "http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content";
        GRANT_TYPE: "http://oauth.net/grant_type/device/1.0";
        MODEL_NAME: "ytlr::";
        HEADERS: Readonly<{
            accept: "*/*";
            origin: "https://www.youtube.com";
            'user-agent': "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version";
            'content-type': "application/json";
            referer: "https://www.youtube.com/tv";
            'accept-language': "en-US";
        }>;
        REGEX: Readonly<{
            AUTH_SCRIPT: RegExp;
            CLIENT_IDENTITY: RegExp;
        }>;
    }>;
    CLIENTS: Readonly<{
        WEB: {
            NAME: string;
        };
        YTMUSIC: {
            NAME: string;
            VERSION: string;
        };
        ANDROID: {
            NAME: string;
            VERSION: string;
            SDK_VERSION: string;
        };
    }>;
    STREAM_HEADERS: Readonly<{
        accept: "*/*";
        origin: "https://www.youtube.com";
        referer: "https://www.youtube.com";
        DNT: "?1";
    }>;
    INNERTUBE_HEADERS_BASE: Readonly<{
        accept: "*/*";
        'accept-encoding': "gzip, deflate";
        'content-type': "application/json";
    }>;
    ACCOUNT_SETTINGS: Readonly<{
        SUBSCRIPTIONS: "NOTIFICATION_SUBSCRIPTION_NOTIFICATIONS";
        RECOMMENDED_VIDEOS: "NOTIFICATION_RECOMMENDATION_WEB_CONTROL";
        CHANNEL_ACTIVITY: "NOTIFICATION_COMMENT_WEB_CONTROL";
        COMMENT_REPLIES: "NOTIFICATION_COMMENT_REPLY_OTHER_WEB_CONTROL";
        USER_MENTION: "NOTIFICATION_USER_MENTION_WEB_CONTROL";
        SHARED_CONTENT: "NOTIFICATION_RETUBING_WEB_CONTROL";
        PLAYLISTS_PRIVACY: "PRIVACY_DISCOVERABLE_SAVED_PLAYLISTS";
        SUBSCRIPTIONS_PRIVACY: "PRIVACY_DISCOVERABLE_SUBSCRIPTIONS";
    }>;
    BASE64_DIALECT: Readonly<{
        NORMAL: string[];
        REVERSE: string[];
    }>;
    SIG_REGEX: Readonly<{
        ACTIONS: RegExp;
        FUNCTIONS: RegExp;
    }>;
    NTOKEN_REGEX: Readonly<{
        CALLS: RegExp;
        PLACEHOLDERS: RegExp;
        FUNCTIONS: RegExp;
    }>;
    FUNCS: Readonly<{
        PUSH: "d.push(e)";
        REVERSE_1: "d.reverse()";
        REVERSE_2: "function(d){for(var";
        SPLICE: "d.length;d.splice(e,1)";
        SWAP0_1: "d[0])[0])";
        SWAP0_2: "f=d[0];d[0]";
        ROTATE_1: "reverse().forEach";
        ROTATE_2: "unshift(d.pop())";
        BASE64_DIA: "function(){for(var";
        TRANSLATE_1: "function(d,e){for(var f";
        TRANSLATE_2: "function(d,e,f){var";
    }>;
};
export default _default;
