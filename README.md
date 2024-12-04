Customized version of [YouTube.js](https://github.com/LuanRT/YouTube.js) library for use with Volumio's [YouTube Music](https://github.com/patrickkfkan/volumio-ytmusic) and [YouTube2](https://github.com/patrickkfkan/volumio-youtube2) plugins.

## Changelog:

1.3.0
- Merge from YouTube.js v11.0.1 (commit [bbaefb1](https://github.com/LuanRT/YouTube.js/commit/bbaefb12b3a5b6302794cd7c0d1b24ae3861b827))
- Cookie-based session fixes and additions ([PR](https://github.com/LuanRT/YouTube.js/pull/821) submitted to YouTube.js repo):
  - Fix `on_behalf_of_user` arg not applied
  - `AccountManager#getInfo()`: add option to fetch full accounts list

1.2.1
- Merge from YouTube.js v11.0.1 (commit [126a66f](https://github.com/LuanRT/YouTube.js/commit/126a66f317da0c6b486202ad04483b9799bfaf4c))

1.2.0
- Parser changes (for ytmusic plugin podcast support):
  - Expand `MusicShelf` content type to include `MusicMultiRowListItem`
  - Add `podcast_show` item type to `MusicTwoRowItem`
  - Change `continuation_contents` to array. So, for instance, it can now have both `SectionListContinuation` and `MusicShelfContinuation` instances.

1.1.1
- ytmusic: restore private song parsing

1.1.0
- Migrate to YouTube.js v11.0.1 (commit [4e9c2a5](https://github.com/LuanRT/YouTube.js/commit/4e9c2a585bf84751dd4e3964f70fba284c8b8e38))

1.0.0
- Release for Bookworm-based Volumio
- Migrate to YouTube.js v10.5.0 (commit [91d3081](https://github.com/LuanRT/YouTube.js/commit/91d308149691cf8037e54c294e173a91864c48fa))

0.3.9
- Backport `Player.ts` changes up to [refactor(Player): Generate and parse player script's AST](https://github.com/LuanRT/YouTube.js/pull/713)

0.3.8
- Backport from [fix(Player): Fix extracting the n-token decipher algorithm](https://github.com/LuanRT/YouTube.js/pull/698)

0.3.7
- Backport `PageHeader` and related parser classes

0.3.6
- Backport from [fix(Player): Fix extracting the n-token decipher algorithm](https://github.com/LuanRT/YouTube.js/pull/682)

0.3.5
- Bump YT Music Android client version to v7 (originally v5 which does not support synced lyrics)

0.3.4:
- Add `MusicResponsiveHeader` parser class (backported from YouTube.js v10.0.0)

0.3.3:
- "Fix" invalid API version obtained from YT session data - "fix" in double-quotes as it simply sets API version to `v1` (as opposed to processing session data). Meant to be temporary until YouTube.js releases a full fix.

0.3.2:
- Add fields to Parser classes for use by YouTube Music plugin
  - `ChipCloudChip`: `deselect_endpoint`
  - `MusicNavigationButton`: `icon_type`
  - `SectionList`: `continuation_type`
- Fix private artist and album information not returned in `MusicDetailHeader`, `MusicResponsiveListItem` and `PlaylistPanelVideo`

0.3.1:
- OAuth: fix parsing of client identity.

0.3.0:
- Migrate to YouTube.js v5.1.0 (commit [a11e596](https://github.com/LuanRT/YouTube.js/commit/a11e5962c6eb73b14623a9de1e6c8c2534146b1e)).

0.2.1-b.3:
- Replace more `Array.at(...)` with `[...]`

0.2.1-b.2:
- (yt) Add `GridMix` parser (PR submitted to YouTube.js repo: [#356](https://github.com/LuanRT/YouTube.js/pull/356))

0.2.1-b.1:
- (yt) Add `getGuide()` (PR submitted and merged with YouTube.js repo: [#335](https://github.com/LuanRT/YouTube.js/pull/335)).
- (yt) Add `banner` to `PlaylistHeader` (PR submitted and merged with YouTube.js repo: [#337](https://github.com/LuanRT/YouTube.js/pull/337)).
- (yt) `TwoColumnWatchNextResults`: add `playlist` and `autoplay` (PR submitted and merged with YouTube.js repo: [#342](https://github.com/LuanRT/YouTube.js/pull/342)).
- (yt) Add `play_all_button` to `Shelf` (PR submitted and merged with YouTube.js repo: [#345](https://github.com/LuanRT/YouTube.js/pull/345)).
- Merge from YouTube.js v3.3.0 (commit [2b29244](https://github.com/LuanRT/YouTube.js/commit/2b29244b411791e4109990985d6b3147ad942945)).
- (yt) `SearchFilter` (PR submitted and merged with YouTube.js repo: [#347](https://github.com/LuanRT/YouTube.js/pull/347)): 
  - Add `status` and related getters
  - Parse `data.navigationEndpoint`
- (yt) Add `view_playlist` to `Playlist` (PR submitted and merged with YouTube.js repo: [#348](https://github.com/LuanRT/YouTube.js/pull/348)).
- (yt) Add support for movie items and trailers (PR submitted and merged with YouTube.js repo: [#349](https://github.com/LuanRT/YouTube.js/pull/349)).
- Replace `<Array>.at(...)` with `\[...\] ` for compatibility with old Node version.

0.2.0-a.2
- Replace `crypto.randomUUID` with [uuid](https://www.npmjs.com/package/uuid) since it is not available with the lower Node version on Volumio rPi.

0.2.0-a.1:
- Migrate to YouTube.js v3.0.0 (commit [a0bfe16](https://github.com/LuanRT/YouTube.js/commit/a0bfe164279ec27b0c49c6b0c32222c1a92df5c3)).
- Add `header` to `SectionListContinuation` (required by ytmusic plugin's Library model).
- Handle `formData` in `Parser#applyMutations()` (this was present before but subsequently removed; required by country selector in Explore -> Charts).

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

