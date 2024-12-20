
export const URLS = Object.freeze({
  YT_BASE: 'https://www.youtube.com',
  YT_MUSIC_BASE: 'https://music.youtube.com',
  YT_SUGGESTIONS: 'https://suggestqueries.google.com/complete/',
  YT_UPLOAD: 'https://upload.youtube.com/',
  API: Object.freeze({
    BASE: 'https://youtubei.googleapis.com',
    PRODUCTION_1: 'https://www.youtube.com/youtubei/',
    PRODUCTION_2: 'https://youtubei.googleapis.com/youtubei/',
    STAGING: 'https://green-youtubei.sandbox.googleapis.com/youtubei/',
    RELEASE: 'https://release-youtubei.sandbox.googleapis.com/youtubei/',
    TEST: 'https://test-youtubei.sandbox.googleapis.com/youtubei/',
    CAMI: 'http://cami-youtubei.sandbox.googleapis.com/youtubei/',
    UYTFE: 'https://uytfe.sandbox.google.com/youtubei/'
  }),
  GOOGLE_SEARCH_BASE: 'https://www.google.com/'
});
export const OAUTH = Object.freeze({
  REGEX: Object.freeze({
    TV_SCRIPT: new RegExp('<script\\s+id="base-js"\\s+src="([^"]+)"[^>]*><\\/script>'),
    CLIENT_IDENTITY: new RegExp('clientId:"(?<client_id>[^"]+)",[^"]*?:"(?<client_secret>[^"]+)"')
  })
});
export const CLIENTS = Object.freeze({
  IOS: {
    NAME_ID: '5',
    NAME: 'iOS',
    VERSION: '18.06.35',
    USER_AGENT: 'com.google.ios.youtube/18.06.35 (iPhone; CPU iPhone OS 14_4 like Mac OS X; en_US)',
    DEVICE_MODEL: 'iPhone10,6'
  },
  WEB: {
    NAME_ID: '1',
    NAME: 'WEB',
    VERSION: '2.20241121.01.00',
    API_KEY: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
    API_VERSION: 'v1',
    STATIC_VISITOR_ID: '6zpwvWUNAco'
  },
  MWEB: {
    NAME_ID: '2',
    NAME: 'MWEB',
    VERSION: '2.20241205.01.00',
    API_VERSION: 'v1'
  },
  WEB_KIDS: {
    NAME_ID: '76',
    NAME: 'WEB_KIDS',
    VERSION: '2.20230111.00.00'
  },
  YTMUSIC: {
    NAME_ID: '67',
    NAME: 'WEB_REMIX',
    VERSION: '1.20211213.00.00'
  },
  ANDROID: {
    NAME_ID: '3',
    NAME: 'ANDROID',
    VERSION: '19.35.36',
    SDK_VERSION: 33,
    USER_AGENT: 'com.google.android.youtube/19.35.36(Linux; U; Android 13; en_US; SM-S908E Build/TP1A.220624.014) gzip'
  },
  YTSTUDIO_ANDROID: {
    NAME_ID: '14',
    NAME: 'ANDROID_CREATOR',
    VERSION: '22.43.101'
  },
  YTMUSIC_ANDROID: {
    NAME_ID: '21',
    NAME: 'ANDROID_MUSIC',
    VERSION: '7.07.51'
  },
  TV: {
    NAME_ID: '7',
    NAME: 'TVHTML5',
    VERSION: '7.20241016.15.00',
    USER_AGENT: 'Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version'
  },
  TV_EMBEDDED: {
    NAME_ID: '85',
    NAME: 'TVHTML5_SIMPLY_EMBEDDED_PLAYER',
    VERSION: '2.0'
  },
  WEB_EMBEDDED: {
    NAME_ID: '56',
    NAME: 'WEB_EMBEDDED_PLAYER',
    VERSION: '2.20240111.09.00',
    API_KEY: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
    API_VERSION: 'v1',
    STATIC_VISITOR_ID: '6zpwvWUNAco'
  },
  WEB_CREATOR: {
    NAME_ID: '62',
    NAME: 'WEB_CREATOR',
    VERSION: '1.20240918.03.00',
    API_KEY: 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
    API_VERSION: 'v1',
    STATIC_VISITOR_ID: '6zpwvWUNAco'
  }
});
export const STREAM_HEADERS = Object.freeze({
  'accept': '*/*',
  'origin': 'https://www.youtube.com',
  'referer': 'https://www.youtube.com',
  'DNT': '?1'
});
export const INNERTUBE_HEADERS_BASE = Object.freeze({
  'accept': '*/*',
  'accept-encoding': 'gzip, deflate',
  'content-type': 'application/json'
});

export const SUPPORTED_CLIENTS = [ 'IOS', 'WEB', 'MWEB', 'YTKIDS', 'YTMUSIC', 'ANDROID', 'YTSTUDIO_ANDROID', 'YTMUSIC_ANDROID', 'TV', 'TV_EMBEDDED', 'WEB_EMBEDDED', 'WEB_CREATOR' ];