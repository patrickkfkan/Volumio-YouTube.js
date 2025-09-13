[youtubei.js](../../../README.md) / [YT](../README.md) / ChannelListContinuation

# Class: ChannelListContinuation

## Extends

- [`Feed`](../../Mixins/classes/Feed.md)\<[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

## Constructors

### new ChannelListContinuation()

> **new ChannelListContinuation**(`actions`, `data`, `already_parsed`): [`ChannelListContinuation`](ChannelListContinuation.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **data**: [`ApiResponse`](../../../interfaces/ApiResponse.md) \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

• **already\_parsed**: `boolean` = `false`

#### Returns

[`ChannelListContinuation`](ChannelListContinuation.md)

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`constructor`](../../Mixins/classes/Feed.md#constructors)

#### Defined in

[src/parser/youtube/Channel.ts:311](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Channel.ts#L311)

## Properties

### contents?

> `optional` **contents**: [`OpenPopupAction`](../../YTNodes/classes/OpenPopupAction.md) \| [`AppendContinuationItemsAction`](../../YTNodes/classes/AppendContinuationItemsAction.md) \| [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`NavigateAction`](../../../classes/NavigateAction.md) \| [`ShowMiniplayerCommand`](../../../classes/ShowMiniplayerCommand.md)

#### Defined in

[src/parser/youtube/Channel.ts:309](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Channel.ts#L309)

## Accessors

### actions

> `get` **actions**(): [`Actions`](../../../classes/Actions.md)

#### Returns

[`Actions`](../../../classes/Actions.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`actions`](../../Mixins/classes/Feed.md#actions)

#### Defined in

[src/core/mixins/Feed.ts:181](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L181)

***

### channels

> `get` **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Get all the channels in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`channels`](../../Mixins/classes/Feed.md#channels)

#### Defined in

[src/core/mixins/Feed.ts:126](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L126)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

Checks if the feed has continuation.

#### Returns

`boolean`

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`has_continuation`](../../Mixins/classes/Feed.md#has_continuation)

#### Defined in

[src/core/mixins/Feed.ts:195](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L195)

***

### memo

> `get` **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`memo`](../../Mixins/classes/Feed.md#memo)

#### Defined in

[src/core/mixins/Feed.ts:137](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L137)

***

### page

> `get` **page**(): `T`

Get the original page data

#### Returns

`T`

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`page`](../../Mixins/classes/Feed.md#page)

#### Defined in

[src/core/mixins/Feed.ts:188](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L188)

***

### page\_contents

> `get` **page\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md)

Returns contents from the page.

#### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`page_contents`](../../Mixins/classes/Feed.md#page_contents)

#### Defined in

[src/core/mixins/Feed.ts:144](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L144)

***

### playlists

> `get` **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`playlists`](../../Mixins/classes/Feed.md#playlists)

#### Defined in

[src/core/mixins/Feed.ts:133](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L133)

***

### posts

> `get` **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Get all the community posts in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`posts`](../../Mixins/classes/Feed.md#posts)

#### Defined in

[src/core/mixins/Feed.ts:119](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L119)

***

### secondary\_contents

> `get` **secondary\_contents**(): `null` \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md)

Returns secondary contents from the page.

#### Returns

`null` \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`secondary_contents`](../../Mixins/classes/Feed.md#secondary_contents)

#### Defined in

[src/core/mixins/Feed.ts:169](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L169)

***

### shelves

> `get` **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Returns all segments/sections from the page.

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`shelves`](../../Mixins/classes/Feed.md#shelves)

#### Defined in

[src/core/mixins/Feed.ts:155](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L155)

***

### videos

> `get` **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all the videos in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`videos`](../../Mixins/classes/Feed.md#videos)

#### Defined in

[src/core/mixins/Feed.ts:112](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L112)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<[`ChannelListContinuation`](ChannelListContinuation.md)\>

Retrieves next batch of contents and returns a new [Feed](../../Mixins/classes/Feed.md) object.

#### Returns

`Promise`\<[`ChannelListContinuation`](ChannelListContinuation.md)\>

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`getContinuation`](../../Mixins/classes/Feed.md#getcontinuation)

#### Defined in

[src/parser/youtube/Channel.ts:318](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Channel.ts#L318)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<`undefined` \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

Retrieves continuation data as it is.

#### Returns

`Promise`\<`undefined` \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getContinuationData`](../../Mixins/classes/Feed.md#getcontinuationdata)

#### Defined in

[src/core/mixins/Feed.ts:202](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L202)

***

### getShelf()

> **getShelf**(`title`): `undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

Finds shelf by title.

#### Parameters

• **title**: `string`

#### Returns

`undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getShelf`](../../Mixins/classes/Feed.md#getshelf)

#### Defined in

[src/core/mixins/Feed.ts:162](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L162)

***

### getPlaylistsFromMemo()

> `static` **getPlaylistsFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists on a given page via memo

#### Parameters

• **memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getPlaylistsFromMemo`](../../Mixins/classes/Feed.md#getplaylistsfrommemo)

#### Defined in

[src/core/mixins/Feed.ts:94](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L94)

***

### getVideosFromMemo()

> `static` **getVideosFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all videos on a given page via memo

#### Parameters

• **memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getVideosFromMemo`](../../Mixins/classes/Feed.md#getvideosfrommemo)

#### Defined in

[src/core/mixins/Feed.ts:78](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/mixins/Feed.ts#L78)
