[youtubei.js](../../../README.md) / [YT](../README.md) / FilteredChannelList

# Class: FilteredChannelList

## Extends

- [`FilterableFeed`](../../Mixins/classes/FilterableFeed.md)\<[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

## Constructors

### new FilteredChannelList()

> **new FilteredChannelList**(`actions`, `data`, `already_parsed`): [`FilteredChannelList`](FilteredChannelList.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **data**: [`ApiResponse`](../../../interfaces/ApiResponse.md) \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

• **already\_parsed**: `boolean` = `false`

#### Returns

[`FilteredChannelList`](FilteredChannelList.md)

#### Overrides

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`constructor`](../../Mixins/classes/FilterableFeed.md#constructors)

#### Defined in

[src/parser/youtube/Channel.ts:320](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/youtube/Channel.ts#L320)

## Properties

### applied\_filter?

> `optional` **applied\_filter**: [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Defined in

[src/parser/youtube/Channel.ts:317](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/youtube/Channel.ts#L317)

***

### contents?

> `optional` **contents**: [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`AppendContinuationItemsAction`](../../YTNodes/classes/AppendContinuationItemsAction.md)

#### Defined in

[src/parser/youtube/Channel.ts:318](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/youtube/Channel.ts#L318)

## Accessors

### actions

> `get` **actions**(): [`Actions`](../../../classes/Actions.md)

#### Returns

[`Actions`](../../../classes/Actions.md)

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`actions`](../../Mixins/classes/FilterableFeed.md#actions)

#### Defined in

[src/core/mixins/Feed.ts:180](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L180)

***

### channels

> `get` **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Get all the channels in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`channels`](../../Mixins/classes/FilterableFeed.md#channels)

#### Defined in

[src/core/mixins/Feed.ts:125](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L125)

***

### filter\_chips

> `get` **filter\_chips**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)\>

Returns the filter chips.

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`filter_chips`](../../Mixins/classes/FilterableFeed.md#filter_chips)

#### Defined in

[src/core/mixins/FilterableFeed.ts:20](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/FilterableFeed.ts#L20)

***

### filters

> `get` **filters**(): `string`[]

Returns available filters.

#### Returns

`string`[]

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`filters`](../../Mixins/classes/FilterableFeed.md#filters)

#### Defined in

[src/core/mixins/FilterableFeed.ts:38](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/FilterableFeed.ts#L38)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

Checks if the feed has continuation.

#### Returns

`boolean`

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`has_continuation`](../../Mixins/classes/FilterableFeed.md#has_continuation)

#### Defined in

[src/core/mixins/Feed.ts:194](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L194)

***

### memo

> `get` **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`memo`](../../Mixins/classes/FilterableFeed.md#memo)

#### Defined in

[src/core/mixins/Feed.ts:136](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L136)

***

### page

> `get` **page**(): `T`

Get the original page data

#### Returns

`T`

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`page`](../../Mixins/classes/FilterableFeed.md#page)

#### Defined in

[src/core/mixins/Feed.ts:187](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L187)

***

### page\_contents

> `get` **page\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md)

Returns contents from the page.

#### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md)

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`page_contents`](../../Mixins/classes/FilterableFeed.md#page_contents)

#### Defined in

[src/core/mixins/Feed.ts:143](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L143)

***

### playlists

> `get` **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`playlists`](../../Mixins/classes/FilterableFeed.md#playlists)

#### Defined in

[src/core/mixins/Feed.ts:132](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L132)

***

### posts

> `get` **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md) \| [`Post`](../../YTNodes/classes/Post.md)\>

Get all the community posts in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md) \| [`Post`](../../YTNodes/classes/Post.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`posts`](../../Mixins/classes/FilterableFeed.md#posts)

#### Defined in

[src/core/mixins/Feed.ts:118](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L118)

***

### secondary\_contents

> `get` **secondary\_contents**(): `undefined` \| [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Returns secondary contents from the page.

#### Returns

`undefined` \| [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`secondary_contents`](../../Mixins/classes/FilterableFeed.md#secondary_contents)

#### Defined in

[src/core/mixins/Feed.ts:168](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L168)

***

### shelves

> `get` **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Returns all segments/sections from the page.

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`shelves`](../../Mixins/classes/FilterableFeed.md#shelves)

#### Defined in

[src/core/mixins/Feed.ts:154](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L154)

***

### videos

> `get` **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Video`](../../YTNodes/classes/Video.md) \| [`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all the videos in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Video`](../../YTNodes/classes/Video.md) \| [`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`videos`](../../Mixins/classes/FilterableFeed.md#videos)

#### Defined in

[src/core/mixins/Feed.ts:111](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L111)

## Methods

### applyFilter()

> **applyFilter**(`filter`): `Promise`\<[`FilteredChannelList`](FilteredChannelList.md)\>

Applies given filter to the list.

#### Parameters

• **filter**: `string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

The filter to apply

#### Returns

`Promise`\<[`FilteredChannelList`](FilteredChannelList.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:340](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/youtube/Channel.ts#L340)

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`FilteredChannelList`](FilteredChannelList.md)\>

Retrieves list continuation.

#### Returns

`Promise`\<[`FilteredChannelList`](FilteredChannelList.md)\>

#### Overrides

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getContinuation`](../../Mixins/classes/FilterableFeed.md#getcontinuation)

#### Defined in

[src/parser/youtube/Channel.ts:348](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/youtube/Channel.ts#L348)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<`undefined` \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

Retrieves continuation data as it is.

#### Returns

`Promise`\<`undefined` \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getContinuationData`](../../Mixins/classes/FilterableFeed.md#getcontinuationdata)

#### Defined in

[src/core/mixins/Feed.ts:201](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L201)

***

### getFilteredFeed()

> **getFilteredFeed**(`filter`): `Promise`\<[`Feed`](../../Mixins/classes/Feed.md)\<[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

Applies given filter and returns a new [Feed](../../Mixins/classes/Feed.md) object.

#### Parameters

• **filter**: `string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<[`Feed`](../../Mixins/classes/Feed.md)\<[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getFilteredFeed`](../../Mixins/classes/FilterableFeed.md#getfilteredfeed)

#### Defined in

[src/core/mixins/FilterableFeed.ts:45](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/FilterableFeed.ts#L45)

***

### getShelf()

> **getShelf**(`title`): `undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

Finds shelf by title.

#### Parameters

• **title**: `string`

#### Returns

`undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getShelf`](../../Mixins/classes/FilterableFeed.md#getshelf)

#### Defined in

[src/core/mixins/Feed.ts:161](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L161)

***

### getPlaylistsFromMemo()

> `static` **getPlaylistsFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists on a given page via memo

#### Parameters

• **memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getPlaylistsFromMemo`](../../Mixins/classes/FilterableFeed.md#getplaylistsfrommemo)

#### Defined in

[src/core/mixins/Feed.ts:93](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L93)

***

### getVideosFromMemo()

> `static` **getVideosFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Video`](../../YTNodes/classes/Video.md) \| [`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all videos on a given page via memo

#### Parameters

• **memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Video`](../../YTNodes/classes/Video.md) \| [`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getVideosFromMemo`](../../Mixins/classes/FilterableFeed.md#getvideosfrommemo)

#### Defined in

[src/core/mixins/Feed.ts:77](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/mixins/Feed.ts#L77)