Modified version of [YouTube.js](https://github.com/LuanRT/YouTube.js) library for use with Volumio's YouTube Music plugin.

## Objectives

### Compatibility with Node v14

Achieved through polyfills and using [node-fetch](https://github.com/node-fetch/node-fetch) instead of [undici](https://undici.nodejs.org) for HTTP requests.

### Multilanguage support

The YouTube Music plugin supports languages other than English. This is done by directly setting the `session.context.client.hl` property of the `InnerTube` instance created by the library.

Note that there is no `setLanguage()` function, because multilanguage support is not actually achievable in YouTube.js. The library extracts certain pieces of information by string-matching. An example would be getting an artist's subscriber count by matching the corresponding item's subtitle against the pattern '[decimal digit] subscribers'. If the subtitle is not in English, then the subscriber count could not be obtained.

Fortunately, this is fine for the most part as the YouTube Music plugin does not utilize language-dependent data. On the other hand, some aspects of YouTube.js will fail and would have to be fixed, e.g. `Music#getUpNext()`.


## Changelog:

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

