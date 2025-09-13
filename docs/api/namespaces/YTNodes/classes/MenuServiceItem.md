[youtubei.js](../../../README.md) / [YTNodes](../README.md) / MenuServiceItem

# Class: MenuServiceItem

## Extends

- [`Button`](Button.md)

## Constructors

### new MenuServiceItem()

> **new MenuServiceItem**(`data`): [`MenuServiceItem`](MenuServiceItem.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`MenuServiceItem`](MenuServiceItem.md)

#### Overrides

[`Button`](Button.md).[`constructor`](Button.md#constructors)

#### Defined in

[src/parser/classes/menus/MenuServiceItem.ts:7](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/menus/MenuServiceItem.ts#L7)

## Properties

### accessibility?

> `optional` **accessibility**: `AccessibilitySupportedDatas`

#### Inherited from

[`Button`](Button.md).[`accessibility`](Button.md#accessibility)

#### Defined in

[src/parser/classes/Button.ts:19](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Button.ts#L19)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Inherited from

[`Button`](Button.md).[`endpoint`](Button.md#endpoint)

#### Defined in

[src/parser/classes/Button.ts:18](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Button.ts#L18)

***

### icon\_type?

> `optional` **icon\_type**: `string`

#### Inherited from

[`Button`](Button.md).[`icon_type`](Button.md#icon_type)

#### Defined in

[src/parser/classes/Button.ts:15](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Button.ts#L15)

***

### is\_disabled?

> `optional` **is\_disabled**: `boolean`

#### Inherited from

[`Button`](Button.md).[`is_disabled`](Button.md#is_disabled)

#### Defined in

[src/parser/classes/Button.ts:16](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Button.ts#L16)

***

### label?

> `optional` **label**: `string`

#### Inherited from

[`Button`](Button.md).[`label`](Button.md#label)

#### Defined in

[src/parser/classes/Button.ts:11](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Button.ts#L11)

***

### size?

> `optional` **size**: `string`

#### Inherited from

[`Button`](Button.md).[`size`](Button.md#size)

#### Defined in

[src/parser/classes/Button.ts:14](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Button.ts#L14)

***

### style?

> `optional` **style**: `string`

#### Inherited from

[`Button`](Button.md).[`style`](Button.md#style)

#### Defined in

[src/parser/classes/Button.ts:13](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Button.ts#L13)

***

### target\_id?

> `optional` **target\_id**: `string`

#### Inherited from

[`Button`](Button.md).[`target_id`](Button.md#target_id)

#### Defined in

[src/parser/classes/Button.ts:17](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Button.ts#L17)

***

### text?

> `optional` **text**: `string`

#### Inherited from

[`Button`](Button.md).[`text`](Button.md#text)

#### Defined in

[src/parser/classes/Button.ts:10](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Button.ts#L10)

***

### tooltip?

> `optional` **tooltip**: `string`

#### Inherited from

[`Button`](Button.md).[`tooltip`](Button.md#tooltip)

#### Defined in

[src/parser/classes/Button.ts:12](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Button.ts#L12)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`Button`](Button.md).[`type`](Button.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'MenuServiceItem'`

#### Overrides

[`Button`](Button.md).[`type`](Button.md#type-1)

#### Defined in

[src/parser/classes/menus/MenuServiceItem.ts:5](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/menus/MenuServiceItem.ts#L5)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`Button`](Button.md).[`as`](Button.md#as)

#### Defined in

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L29)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is MenuServiceItem & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is MenuServiceItem & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`Button`](Button.md).[`hasKey`](Button.md#haskey)

#### Defined in

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L41)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Check if the node is of the given type.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`Button`](Button.md).[`is`](Button.md#is)

#### Defined in

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L19)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Assert that the node has the given key and return it.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

[`Maybe`](../../Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`Button`](Button.md).[`key`](Button.md#key)

#### Defined in

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L51)
