import NavigationEndpoint from './classes/NavigationEndpoint.js';
import type { YTNodeConstructor } from './helpers.js';
import { YTNode } from './helpers.js';
export type MiscInferenceType = {
    type: 'misc';
    misc_type: 'NavigationEndpoint';
    optional: boolean;
    endpoint: NavigationEndpoint;
} | {
    type: 'misc';
    misc_type: 'Text';
    optional: boolean;
    text: string;
    endpoint?: NavigationEndpoint;
} | {
    type: 'misc';
    misc_type: 'Thumbnail';
    optional: boolean;
} | {
    type: 'misc';
    misc_type: 'Author';
    optional: boolean;
    params: [string, string?];
};
export type InferenceType = {
    type: 'renderer';
    renderers: string[];
    optional: boolean;
} | {
    type: 'renderer_list';
    renderers: string[];
    optional: boolean;
} | MiscInferenceType | {
    type: 'object';
    keys: KeyInfo;
    optional: boolean;
} | {
    type: 'primative';
    typeof: ('string' | 'number' | 'boolean' | 'bigint' | 'symbol' | 'undefined' | 'function')[];
    optional: boolean;
} | {
    type: 'unknown';
    optional: boolean;
};
export type KeyInfo = (readonly [string, InferenceType])[];
export declare class YTNodeGenerator {
    #private;
    /**
     * Is this key ignored by the parser?
     * @param key - The key to check
     * @returns Whether or not the key is ignored
     */
    static isIgnoredKey(key: string | symbol): boolean;
    /**
     * Merges two sets of key info, resolving any conflicts
     * @param key_info - The current key info
     * @param new_key_info - The new key info
     * @returns The merged key info
     */
    static mergeKeyInfo(key_info: KeyInfo, new_key_info: KeyInfo): {
        resolved_key_info: [string, InferenceType][];
        changed_keys: [string, InferenceType][];
    };
    /**
     * Given a classname and its resolved key info, create a new class
     * @param classname - The name of the class
     * @param key_info - The resolved key info
     * @returns Class based on the key info extending YTNode
     */
    static createRuntimeClass(classname: string, key_info: KeyInfo): YTNodeConstructor;
    /**
     * Introspect an example of a class in order to determine its key info and dependencies
     * @param classdata - The example of the class
     * @returns The key info and any unimplemented dependencies
     */
    static introspect(classdata: string): {
        key_info: (readonly [string, InferenceType])[];
        unimplemented_dependencies: [string, any][];
    };
    /**
     * Given example data for a class, introspect, implement dependencies, and create a new class
     * @param classname - The name of the class
     * @param classdata - The example of the class
     * @returns Class based on the example classdata extending YTNode
     */
    static generateRuntimeClass(classname: string, classdata: any): YTNodeConstructor<YTNode>;
    /**
     * Generate a typescript class based on the key info
     * @param classname - The name of the class
     * @param key_info - The key info, as returned by {@link YTNodeGenerator.introspect}
     * @returns Typescript class file
     */
    static generateTypescriptClass(classname: string, key_info: KeyInfo): string;
    /**
     * For a given inference type, get the typescript type declaration
     * @param inference_type - The inference type to get the declaration for
     * @param indentation - The indentation level (used for objects)
     * @returns Typescript type declaration
     */
    static toTypeDeclaration(inference_type: InferenceType, indentation?: number): string;
    /**
     * Generate statements to parse a given inference type
     * @param key - The key to parse
     * @param inference_type - The inference type to parse
     * @param key_path - The path to the key (excluding the key itself)
     * @param indentation - The indentation level (used for objects)
     * @returns Statement to parse the given key
     */
    static toParser(key: string, inference_type: InferenceType, key_path?: string[], indentation?: number): string;
    /**
     * Parse a value from a given key path using the given inference type
     * @param key - The key to parse
     * @param inference_type - The inference type to parse
     * @param data - The data to parse from
     * @param key_path - The path to the key (excluding the key itself)
     * @returns The parsed value
     */
    static parse(key: string, inference_type: InferenceType, data: any, key_path?: string[]): any;
    /**
     * Infer the type of a key given its value
     * @param key - The key to infer the type of
     * @param value - The value of the key
     * @returns The inferred type
     */
    static inferType(key: string, value: any): InferenceType;
    /**
     * Checks if the given value is an array of renderers
     * @param value - The value to check
     * @returns If it is a renderer list, return an object with keys being the classnames, and values being an example of that class.
     * Otherwise, return false.
     */
    static isRendererList(value: any): false | {
        [k: string]: any;
    };
    /**
     * Check if the given value is a misc type.
     * @param key - The key of the value
     * @param value - The value to check
     * @returns If it is a misc type, return the InferenceType. Otherwise, return false.
     */
    static isMiscType(key: string, value: any): MiscInferenceType | false;
    /**
     * Check if the given value is a renderer
     * @param value - The value to check
     * @returns If it is a renderer, return the class name. Otherwise, return false.
     */
    static isRenderer(value: any): string | false;
}
