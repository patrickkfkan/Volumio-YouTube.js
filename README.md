Modified version of [YouTube.js](https://github.com/LuanRT/YouTube.js) library for use with Volumio's [YouTube Music plugin](https://github.com/patrickkfkan/volumio-ytmusic).

## Objectives

### Compatibility with Node v14

Achieved through polyfills and using [node-fetch](https://github.com/node-fetch/node-fetch) instead of [undici](https://undici.nodejs.org) for HTTP requests.

### Multilanguage support

The YouTube Music plugin supports languages other than English. This is done by directly setting the `session.context.client.hl` property of the `InnerTube` instance created by the library.

Note that there is no `setLanguage()` function, because multilanguage support is not actually achievable in YouTube.js. The library extracts certain pieces of information by string-matching. An example would be getting an artist's subscriber count by matching the corresponding item's subtitle against the pattern '[decimal digit] subscribers'. If the subtitle is not in English, then the subscriber count could not be obtained.

Fortunately, this is fine for the most part as the YouTube Music plugin does not utilize language-dependent data. On the other hand, some aspects of YouTube.js will fail and would have to be fixed, e.g. `Music#getUpNext()`.


## Changelog:

0.1.1-b.2:
- Add text fields to `ShowingResultsFor` parser class. Needed by ytmusic plugin to display the 'Showing results for...' text in search results.

0.1.1-b.1:
- Merge from YouTube.js repo (up to commit [2aaa209](https://github.com/LuanRT/YouTube.js/commit/2aaa209906f1770a9067803dca82b0aad121226b)). This includes commit [3a7da21](https://github.com/LuanRT/YouTube.js/commit/3a7da21fd18c52a839b966184f87710182567f1b) which improves sig decipher code extraction that has been causing errors at the ytmusic plugin init stage.

0.1.0-b.7:
- Add `PlaylistPanelVideoWrapper` parser class (PR submitted and merged with YouTube.js repo: [#176](https://github.com/LuanRT/YouTube.js/pull/176)). This is needed when parsing 'Up Next' contents with a YouTube Premium account.

0.1.0-b.6:
- Merge from YouTube.js repo (up to commit [5b3109a](https://github.com/LuanRT/YouTube.js/commit/5b3109afefc0a27ea07a6d95c33acd1cc0fd11f6)).
- Fix `Music#getArtist()` failing for private artists (PR submitted and merged with YouTube.js repo: [#170](https://github.com/LuanRT/YouTube.js/pull/170)).
- Add `playlist_id` arg to `Music#getInfo()` and related functions (for generation of playback tracking URLs that encapsulate list info).

0.1.0-b.5:
- Merge from YouTube.js repo (up to commit [60ef3ea](https://github.com/LuanRT/YouTube.js/commit/60ef3eabd37d2f9b25df99219bcb8741aaa35bd7)).
- Fix `Music#getAlbum()` failing for private albums (PR submitted and merged with YouTube.js repo: [#162](https://github.com/LuanRT/YouTube.js/pull/162)).

0.1.0-b.4:
- Add missing fields in `NavigationEndpoint` and `PlaylistPanelContinuation` (PR submitted and merged with YouTube.js repo: [#159](https://github.com/LuanRT/YouTube.js/pull/159)).
- In `MusicResponsiveListItem`, return song and video titles as `Text` object - needed by YouTube Music plugin to obtain watch endpoint for creating Autoplay context.


0.1.0-b.3:
- Add `subtitle` for more item types in `MusicResponsiveListItem` - needed by YouTube Music plugin to better handle display of items.
- Add `MusicVisualHeader` which fixes `Music#Artist` parse errors for certain artists / channels (PR submitted and merged with YouTube.js repo: [#157](https://github.com/LuanRT/YouTube.js/pull/157)).
- Fix `DidYouMean` endpoints and add `text` property (PR submitted and merged with YouTube.js repo: [#158](https://github.com/LuanRT/YouTube.js/pull/158)).
- Include pre-built dist files for quicker npm install.


0.1.0-b.2:
- Add `subtitle` to `MusicResponsiveListItem` - needed by YouTube Music plugin to perform custom retrieval of artists.
- Fix `Music#Artist` parse error if missing shelves (PR submitted and merged with YouTube.js repo: [#155](https://github.com/LuanRT/YouTube.js/pull/155)).
- Some cleaning up here and there. Stripped down build process to only compile TS.

0.1.0-b.1:
- Restore play buttons in `MusicImmersiveHeader` - needed by YouTube Music plugin to play an 'artist'.

0.1.0-a:
- Alpha release based on YouTube.js bleeding edge (commit [05b4593](https://github.com/LuanRT/YouTube.js/tree/05b4593e0a8f13cfd8fc56470eecbc429aa15da8)).

