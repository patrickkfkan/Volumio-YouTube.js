[youtubei.js](../../../README.md) / [Generator](../README.md) / toParser

# Function: toParser()

> **toParser**(`key`, `inference_type`, `key_path`, `indentation`): `string`

Generate statements to parse a given inference type

## Parameters

• **key**: `string`

The key to parse

• **inference\_type**: [`InferenceType`](../type-aliases/InferenceType.md)

The inference type to parse

• **key\_path**: `string`[] = `...`

The path to the key (excluding the key itself)

• **indentation**: `number` = `1`

The indentation level (used for objects)

## Returns

`string`

Statement to parse the given key

## Defined in

[src/parser/generator.ts:578](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/generator.ts#L578)
