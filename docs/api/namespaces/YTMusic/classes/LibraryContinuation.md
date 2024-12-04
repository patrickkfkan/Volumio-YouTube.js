[youtubei.js](../../../README.md) / [YTMusic](../README.md) / LibraryContinuation

# Class: LibraryContinuation

## Constructors

### new LibraryContinuation()

> **new LibraryContinuation**(`response`, `actions`): [`LibraryContinuation`](LibraryContinuation.md)

#### Parameters

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`LibraryContinuation`](LibraryContinuation.md)

#### Defined in

[src/parser/ytmusic/Library.ts:158](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/ytmusic/Library.ts#L158)

## Properties

### contents

> **contents**: [`MusicShelfContinuation`](../../../classes/MusicShelfContinuation.md) \| [`GridContinuation`](../../../classes/GridContinuation.md)

#### Defined in

[src/parser/ytmusic/Library.ts:156](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/ytmusic/Library.ts#L156)

## Accessors

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/ytmusic/Library.ts:182](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/ytmusic/Library.ts#L182)

***

### page

> `get` **page**(): [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Returns

[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Defined in

[src/parser/ytmusic/Library.ts:186](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/ytmusic/Library.ts#L186)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<[`LibraryContinuation`](LibraryContinuation.md)\>

#### Returns

`Promise`\<[`LibraryContinuation`](LibraryContinuation.md)\>

#### Defined in

[src/parser/ytmusic/Library.ts:170](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/ytmusic/Library.ts#L170)
