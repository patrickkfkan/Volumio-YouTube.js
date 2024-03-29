var _a, _YTNodeGenerator_ignored_keys, _YTNodeGenerator_renderers_examples, _YTNodeGenerator_camelToSnake, _YTNodeGenerator_logNewClass, _YTNodeGenerator_logChangedKeys, _YTNodeGenerator_accessDataFromKeyPath, _YTNodeGenerator_hasDataFromKeyPath, _YTNodeGenerator_passOne, _YTNodeGenerator_passTwo, _YTNodeGenerator_introspect;
import { __classPrivateFieldGet, __classPrivateFieldSet, __setFunctionName } from "tslib";
/* eslint-disable no-cond-assign */
import { Platform } from '../utils/Utils.js';
import Author from './classes/misc/Author.js';
import Text from './classes/misc/Text.js';
import Thumbnail from './classes/misc/Thumbnail.js';
import NavigationEndpoint from './classes/NavigationEndpoint.js';
import { YTNode } from './helpers.js';
import Parser from './parser.js';
export class YTNodeGenerator {
    /**
     * Is this key ignored by the parser?
     * @param key - The key to check
     * @returns Whether or not the key is ignored
     */
    static isIgnoredKey(key) {
        return typeof key === 'string' && __classPrivateFieldGet(this, _a, "f", _YTNodeGenerator_ignored_keys).has(key);
    }
    /**
     * Merges two sets of key info, resolving any conflicts
     * @param key_info - The current key info
     * @param new_key_info - The new key info
     * @returns The merged key info
     */
    static mergeKeyInfo(key_info, new_key_info) {
        const changed_keys = new Map();
        const current_keys = new Set(key_info.map(([key]) => key));
        const new_keys = new Set(new_key_info.map(([key]) => key));
        const added_keys = new_key_info.filter(([key]) => !current_keys.has(key));
        const removed_keys = key_info.filter(([key]) => !new_keys.has(key));
        const common_keys = key_info.filter(([key]) => new_keys.has(key));
        const new_key_map = new Map(new_key_info);
        for (const [key, type] of common_keys) {
            const new_type = new_key_map.get(key);
            if (!new_type)
                continue;
            if (type.type !== new_type.type) {
                // We've got a type mismatch, this is unknown, we do not resolve unions
                changed_keys.set(key, {
                    type: 'unknown',
                    optional: true
                });
                continue;
            }
            // We've got the same type, so we can now resolve the changes
            switch (type.type) {
                case 'object':
                    {
                        if (new_type.type !== 'object')
                            continue;
                        const { resolved_key_info } = this.mergeKeyInfo(type.keys, new_type.keys);
                        const resolved_key = {
                            type: 'object',
                            keys: resolved_key_info,
                            optional: type.optional || new_type.optional
                        };
                        const did_change = JSON.stringify(resolved_key) !== JSON.stringify(type);
                        if (did_change)
                            changed_keys.set(key, resolved_key);
                    }
                    break;
                case 'renderer':
                    {
                        if (new_type.type !== 'renderer')
                            continue;
                        const union_map = Object.assign(Object.assign({}, type.renderers), new_type.renderers);
                        const either_optional = type.optional || new_type.optional;
                        const resolved_key = {
                            type: 'renderer',
                            renderers: union_map,
                            optional: either_optional
                        };
                        const did_change = JSON.stringify(Object.assign(Object.assign({}, resolved_key), { renderers: Object.keys(resolved_key.renderers) })) !== JSON.stringify(Object.assign(Object.assign({}, type), { renderers: Object.keys(type.renderers) }));
                        if (did_change)
                            changed_keys.set(key, resolved_key);
                    }
                    break;
                case 'renderer_list':
                    {
                        if (new_type.type !== 'renderer_list')
                            continue;
                        const union_map = Object.assign(Object.assign({}, type.renderers), new_type.renderers);
                        const either_optional = type.optional || new_type.optional;
                        const resolved_key = {
                            type: 'renderer_list',
                            renderers: union_map,
                            optional: either_optional
                        };
                        const did_change = JSON.stringify(Object.assign(Object.assign({}, resolved_key), { renderers: Object.keys(resolved_key.renderers) })) !== JSON.stringify(Object.assign(Object.assign({}, type), { renderers: Object.keys(type.renderers) }));
                        if (did_change)
                            changed_keys.set(key, resolved_key);
                    }
                    break;
                case 'misc':
                    {
                        if (new_type.type !== 'misc')
                            continue;
                        if (type.misc_type !== new_type.misc_type) {
                            // We've got a type mismatch, this is unknown, we do not resolve unions
                            changed_keys.set(key, {
                                type: 'unknown',
                                optional: true
                            });
                        }
                        switch (type.misc_type) {
                            case 'Author':
                                {
                                    if (new_type.misc_type !== 'Author')
                                        break;
                                    const had_optional_param = type.params[1] || new_type.params[1];
                                    const either_optional = type.optional || new_type.optional;
                                    const resolved_key = {
                                        type: 'misc',
                                        misc_type: 'Author',
                                        optional: either_optional,
                                        params: [new_type.params[0], had_optional_param]
                                    };
                                    const did_change = JSON.stringify(resolved_key) !== JSON.stringify(type);
                                    if (did_change)
                                        changed_keys.set(key, resolved_key);
                                }
                                break;
                            // Other cases can not change
                        }
                    }
                    break;
                case 'primative':
                    {
                        if (new_type.type !== 'primative')
                            continue;
                        const resolved_key = {
                            type: 'primative',
                            typeof: Array.from(new Set([...new_type.typeof, ...type.typeof])),
                            optional: type.optional || new_type.optional
                        };
                        const did_change = JSON.stringify(resolved_key) !== JSON.stringify(type);
                        if (did_change)
                            changed_keys.set(key, resolved_key);
                    }
                    break;
            }
        }
        for (const [key, type] of added_keys) {
            changed_keys.set(key, Object.assign(Object.assign({}, type), { optional: true }));
        }
        for (const [key, type] of removed_keys) {
            changed_keys.set(key, Object.assign(Object.assign({}, type), { optional: true }));
        }
        const unchanged_keys = key_info.filter(([key]) => !changed_keys.has(key));
        const resolved_key_info_map = new Map([...unchanged_keys, ...changed_keys]);
        const resolved_key_info = [...resolved_key_info_map.entries()];
        return {
            resolved_key_info,
            changed_keys: [...changed_keys.entries()]
        };
    }
    /**
     * Given a classname and its resolved key info, create a new class
     * @param classname - The name of the class
     * @param key_info - The resolved key info
     * @returns Class based on the key info extending YTNode
     */
    static createRuntimeClass(classname, key_info) {
        var _b, _key_info;
        __classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_logNewClass).call(this, classname, key_info);
        const node = (_b = class extends YTNode {
                static set key_info(key_info) {
                    __classPrivateFieldSet(this, _b, new Map(key_info), "f", _key_info);
                }
                static get key_info() {
                    return [...__classPrivateFieldGet(this, _b, "f", _key_info).entries()];
                }
                constructor(data) {
                    super();
                    const { key_info, unimplemented_dependencies } = YTNodeGenerator.introspect(data);
                    const { resolved_key_info, changed_keys } = YTNodeGenerator.mergeKeyInfo(node.key_info, key_info);
                    const did_change = changed_keys.length > 0;
                    if (did_change) {
                        node.key_info = resolved_key_info;
                        __classPrivateFieldGet(YTNodeGenerator, _a, "m", _YTNodeGenerator_logChangedKeys).call(YTNodeGenerator, classname, node.key_info, changed_keys);
                    }
                    for (const [name, data] of unimplemented_dependencies)
                        YTNodeGenerator.generateRuntimeClass(name, data);
                    for (const [key, value] of key_info) {
                        let snake_key = __classPrivateFieldGet(YTNodeGenerator, _a, "m", _YTNodeGenerator_camelToSnake).call(YTNodeGenerator, key);
                        if (value.type === 'misc' && value.misc_type === 'NavigationEndpoint')
                            snake_key = 'endpoint';
                        Reflect.set(this, snake_key, YTNodeGenerator.parse(key, value, data));
                    }
                }
            },
            __setFunctionName(_b, "node"),
            _b.type = classname,
            _key_info = { value: new Map() },
            _b);
        node.key_info = key_info;
        Object.defineProperty(node, 'name', { value: classname, writable: false });
        return node;
    }
    /**
     * Introspect an example of a class in order to determine its key info and dependencies
     * @param classdata - The example of the class
     * @returns The key info and any unimplemented dependencies
     */
    static introspect(classdata) {
        const key_info = __classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_introspect).call(this, classdata);
        const dependencies = new Map();
        for (const [, value] of key_info) {
            if (value.type === 'renderer' || value.type === 'renderer_list')
                for (const renderer of value.renderers) {
                    const example = __classPrivateFieldGet(this, _a, "f", _YTNodeGenerator_renderers_examples)[renderer];
                    if (example)
                        dependencies.set(renderer, example);
                }
        }
        const unimplemented_dependencies = Array.from(dependencies).filter(([classname]) => !Parser.hasParser(classname));
        return {
            key_info,
            unimplemented_dependencies
        };
    }
    /**
     * Given example data for a class, introspect, implement dependencies, and create a new class
     * @param classname - The name of the class
     * @param classdata - The example of the class
     * @returns Class based on the example classdata extending YTNode
     */
    static generateRuntimeClass(classname, classdata) {
        const { key_info, unimplemented_dependencies } = this.introspect(classdata);
        const JITNode = this.createRuntimeClass(classname, key_info);
        Parser.addRuntimeParser(classname, JITNode);
        for (const [name, data] of unimplemented_dependencies)
            this.generateRuntimeClass(name, data);
        return JITNode;
    }
    /**
     * Generate a typescript class based on the key info
     * @param classname - The name of the class
     * @param key_info - The key info, as returned by {@link YTNodeGenerator.introspect}
     * @returns Typescript class file
     */
    static generateTypescriptClass(classname, key_info) {
        const props = [];
        const constructor_lines = [
            'super();'
        ];
        for (const [key, value] of key_info) {
            let snake_key = __classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_camelToSnake).call(this, key);
            if (value.type === 'misc' && value.misc_type === 'NavigationEndpoint')
                snake_key = 'endpoint';
            props.push(`${snake_key}${value.optional ? '?' : ''}: ${this.toTypeDeclaration(value)};`);
            constructor_lines.push(`this.${snake_key} = ${this.toParser(key, value)};`);
        }
        return `class ${classname} extends YTNode {\n  static type = '${classname}';\n\n  ${props.join('\n  ')}\n\n  constructor(data: RawNode) {\n    ${constructor_lines.join('\n    ')}\n  }\n}\n`;
    }
    /**
     * For a given inference type, get the typescript type declaration
     * @param inference_type - The inference type to get the declaration for
     * @param indentation - The indentation level (used for objects)
     * @returns Typescript type declaration
     */
    static toTypeDeclaration(inference_type, indentation = 0) {
        switch (inference_type.type) {
            case 'renderer':
                {
                    return `${inference_type.renderers.map((type) => `YTNodes.${type}`).join(' | ')} | null`;
                }
            case 'renderer_list':
                {
                    return `ObservedArray<${inference_type.renderers.map((type) => `YTNodes.${type}`).join(' | ')}> | null`;
                }
            case 'object':
                {
                    return `{\n${inference_type.keys.map(([key, value]) => `${' '.repeat((indentation + 2) * 2)}${__classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_camelToSnake).call(this, key)}${value.optional ? '?' : ''}: ${this.toTypeDeclaration(value, indentation + 1)}`).join(',\n')}\n${' '.repeat((indentation + 1) * 2)}}`;
                }
            case 'misc':
                switch (inference_type.misc_type) {
                    case 'Thumbnail':
                        return 'Thumbnail[]';
                    default:
                        return inference_type.misc_type;
                }
            case 'primative':
                return inference_type.typeof.join(' | ');
            case 'unknown':
                return '/* TODO: determine correct type */ unknown';
        }
    }
    /**
     * Generate statements to parse a given inference type
     * @param key - The key to parse
     * @param inference_type - The inference type to parse
     * @param key_path - The path to the key (excluding the key itself)
     * @param indentation - The indentation level (used for objects)
     * @returns Statement to parse the given key
     */
    static toParser(key, inference_type, key_path = ['data'], indentation = 1) {
        let parser = 'undefined';
        switch (inference_type.type) {
            case 'renderer':
                {
                    parser = `Parser.parseItem(${key_path.join('.')}.${key}, [ ${inference_type.renderers.map((type) => `YTNodes.${type}`).join(', ')} ])`;
                }
                break;
            case 'renderer_list':
                {
                    parser = `Parser.parse(${key_path.join('.')}.${key}, true, [ ${inference_type.renderers.map((type) => `YTNodes.${type}`).join(', ')} ])`;
                }
                break;
            case 'object':
                {
                    const new_keypath = [...key_path, key];
                    parser = `{\n${inference_type.keys.map(([key, value]) => `${' '.repeat((indentation + 2) * 2)}${__classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_camelToSnake).call(this, key)}: ${this.toParser(key, value, new_keypath, indentation + 1)}`).join(',\n')}\n${' '.repeat((indentation + 1) * 2)}}`;
                }
                break;
            case 'misc':
                switch (inference_type.misc_type) {
                    case 'Thumbnail':
                        parser = `Thumbnail.fromResponse(${key_path.join('.')}.${key})`;
                        break;
                    case 'Author':
                        {
                            const author_parser = `new Author(${key_path.join('.')}.${inference_type.params[0]}, ${inference_type.params[1] ? `${key_path.join('.')}.${inference_type.params[1]}` : 'undefined'})`;
                            if (inference_type.optional)
                                return `Reflect.has(${key_path.join('.')}, '${inference_type.params[0]}') ? ${author_parser} : undefined`;
                            return author_parser;
                        }
                    default:
                        parser = `new ${inference_type.misc_type}(${key_path.join('.')}.${key})`;
                        break;
                }
                if (parser === 'undefined')
                    throw new Error('Unreachable code reached! Switch missing case!');
                break;
            case 'primative':
            case 'unknown':
                parser = `${key_path.join('.')}.${key}`;
                break;
        }
        if (inference_type.optional)
            return `Reflect.has(${key_path.join('.')}, '${key}') ? ${parser} : undefined`;
        return parser;
    }
    /**
     * Parse a value from a given key path using the given inference type
     * @param key - The key to parse
     * @param inference_type - The inference type to parse
     * @param data - The data to parse from
     * @param key_path - The path to the key (excluding the key itself)
     * @returns The parsed value
     */
    static parse(key, inference_type, data, key_path = ['data']) {
        const should_optional = !inference_type.optional || __classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_hasDataFromKeyPath).call(this, { data }, [...key_path, key]);
        switch (inference_type.type) {
            case 'renderer':
                {
                    return should_optional ? Parser.parseItem(__classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data }, [...key_path, key]), inference_type.renderers.map((type) => Parser.getParserByName(type))) : undefined;
                }
            case 'renderer_list':
                {
                    return should_optional ? Parser.parse(__classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data }, [...key_path, key]), true, inference_type.renderers.map((type) => Parser.getParserByName(type))) : undefined;
                }
            case 'object':
                {
                    const obj = {};
                    const new_key_path = [...key_path, key];
                    for (const [key, value] of inference_type.keys) {
                        obj[key] = should_optional ? this.parse(key, value, data, new_key_path) : undefined;
                    }
                    return obj;
                }
            case 'misc':
                switch (inference_type.misc_type) {
                    case 'NavigationEndpoint':
                        return should_optional ? new NavigationEndpoint(__classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data }, [...key_path, key])) : undefined;
                    case 'Text':
                        return should_optional ? new Text(__classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data }, [...key_path, key])) : undefined;
                    case 'Thumbnail':
                        return should_optional ? Thumbnail.fromResponse(__classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data }, [...key_path, key])) : undefined;
                    case 'Author':
                        {
                            const author_should_optional = !inference_type.optional || __classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_hasDataFromKeyPath).call(this, { data }, [...key_path, inference_type.params[0]]);
                            return author_should_optional ? new Author(__classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data }, [...key_path, inference_type.params[0]]), inference_type.params[1] ?
                                __classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data }, [...key_path, inference_type.params[1]]) : undefined) : undefined;
                        }
                }
                throw new Error('Unreachable code reached! Switch missing case!');
            case 'primative':
            case 'unknown':
                return __classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_accessDataFromKeyPath).call(this, { data }, [...key_path, key]);
        }
    }
    /**
     * Infer the type of a key given its value
     * @param key - The key to infer the type of
     * @param value - The value of the key
     * @returns The inferred type
     */
    static inferType(key, value) {
        let return_value = false;
        if (return_value = this.isRenderer(value)) {
            __classPrivateFieldGet(this, _a, "f", _YTNodeGenerator_renderers_examples)[return_value] = value[Reflect.ownKeys(value)[0]];
            return {
                type: 'renderer',
                renderers: [return_value],
                optional: false
            };
        }
        if (return_value = this.isRendererList(value)) {
            for (const [key, value] of Object.entries(return_value)) {
                __classPrivateFieldGet(this, _a, "f", _YTNodeGenerator_renderers_examples)[key] = value;
            }
            return {
                type: 'renderer_list',
                renderers: Object.keys(return_value),
                optional: false
            };
        }
        if (return_value = this.isMiscType(key, value)) {
            return return_value;
        }
        const primative_type = typeof value;
        if (primative_type === 'object')
            return {
                type: 'object',
                keys: Object.entries(value).map(([key, value]) => [key, this.inferType(key, value)]),
                optional: false
            };
        return {
            type: 'primative',
            typeof: [primative_type],
            optional: false
        };
    }
    /**
     * Checks if the given value is an array of renderers
     * @param value - The value to check
     * @returns If it is a renderer list, return an object with keys being the classnames, and values being an example of that class.
     * Otherwise, return false.
     */
    static isRendererList(value) {
        const arr = Array.isArray(value);
        const is_list = arr && value.every((item) => this.isRenderer(item));
        return (is_list ?
            Object.fromEntries(value.map((item) => {
                const key = Reflect.ownKeys(item)[0].toString();
                return [Parser.sanitizeClassName(key), item[key]];
            })) :
            false);
    }
    /**
     * Check if the given value is a misc type.
     * @param key - The key of the value
     * @param value - The value to check
     * @returns If it is a misc type, return the InferenceType. Otherwise, return false.
     */
    static isMiscType(key, value) {
        // NavigationEndpoint
        if ((key.endsWith('Endpoint') || key.endsWith('Command') || key === 'endpoint') && typeof value === 'object') {
            return {
                type: 'misc',
                endpoint: new NavigationEndpoint(value),
                optional: false,
                misc_type: 'NavigationEndpoint'
            };
        }
        // Text
        if (typeof value === 'object' && (Reflect.has(value, 'simpleText') || Reflect.has(value, 'runs'))) {
            const textNode = new Text(value);
            return {
                type: 'misc',
                misc_type: 'Text',
                optional: false,
                endpoint: textNode.endpoint,
                text: textNode.toString()
            };
        }
        // Thumbnail
        if (typeof value === 'object' && Reflect.has(value, 'thumbnails') && Array.isArray(value.thumbnails)) {
            return {
                type: 'misc',
                misc_type: 'Thumbnail',
                optional: false
            };
        }
        return false;
    }
    /**
     * Check if the given value is a renderer
     * @param value - The value to check
     * @returns If it is a renderer, return the class name. Otherwise, return false.
     */
    static isRenderer(value) {
        const is_object = typeof value === 'object';
        if (!is_object)
            return false;
        const keys = Reflect.ownKeys(value);
        if (keys.length === 1 && keys[0].toString().includes('Renderer')) {
            return Parser.sanitizeClassName(keys[0].toString());
        }
        return false;
    }
}
_a = YTNodeGenerator, _YTNodeGenerator_camelToSnake = function _YTNodeGenerator_camelToSnake(str) {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}, _YTNodeGenerator_logNewClass = function _YTNodeGenerator_logNewClass(classname, key_info) {
    console.warn(`${classname} not found!\nThis is a bug, want to help us fix it? Follow the instructions at ${Platform.shim.info.repo_url}/blob/main/docs/updating-the-parser.md or report it at ${Platform.shim.info.bugs_url}!\nIntrospected and JIT generated this class in the meantime:\n${this.generateTypescriptClass(classname, key_info)}`);
}, _YTNodeGenerator_logChangedKeys = function _YTNodeGenerator_logChangedKeys(classname, key_info, changed_keys) {
    console.warn(`${classname} changed!\nThe following keys where altered: ${changed_keys.map(([key]) => __classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_camelToSnake).call(this, key)).join(', ')}\nThe class has changed to:\n${this.generateTypescriptClass(classname, key_info)}`);
}, _YTNodeGenerator_accessDataFromKeyPath = function _YTNodeGenerator_accessDataFromKeyPath(root, key_path) {
    let data = root;
    for (const key of key_path)
        data = data[key];
    return data;
}, _YTNodeGenerator_hasDataFromKeyPath = function _YTNodeGenerator_hasDataFromKeyPath(root, key_path) {
    let data = root;
    for (const key of key_path)
        if (!Reflect.has(data, key))
            return false;
        else
            data = data[key];
    return true;
}, _YTNodeGenerator_passOne = function _YTNodeGenerator_passOne(classdata) {
    const keys = Reflect.ownKeys(classdata).filter((key) => !this.isIgnoredKey(key)).filter((key) => typeof key === 'string');
    const key_info = keys.map((key) => {
        const value = classdata[key];
        const inferred_type = this.inferType(key, value);
        return [
            key,
            inferred_type
        ];
    });
    return key_info;
}, _YTNodeGenerator_passTwo = function _YTNodeGenerator_passTwo(key_info) {
    var _b;
    // The second pass will detect Author
    const channel_nav = key_info.filter(([, value]) => {
        var _b;
        if (value.type !== 'misc')
            return false;
        if (!(value.misc_type === 'NavigationEndpoint' || value.misc_type === 'Text'))
            return false;
        return ((_b = value.endpoint) === null || _b === void 0 ? void 0 : _b.metadata.page_type) === 'WEB_PAGE_TYPE_CHANNEL';
    });
    // Whichever one has the longest text is the most probable match
    const most_probable_match = channel_nav.sort(([, a], [, b]) => {
        if (a.type !== 'misc' || b.type !== 'misc')
            return 0;
        if (a.misc_type !== 'Text' || b.misc_type !== 'Text')
            return 0;
        return b.text.length - a.text.length;
    });
    const excluded_keys = new Set();
    const cannonical_channel_nav = most_probable_match[0];
    let author;
    // We've found an author
    if (cannonical_channel_nav) {
        excluded_keys.add(cannonical_channel_nav[0]);
        // Now to locate its metadata
        // We'll first get all the keys in the classdata
        const keys = key_info.map(([key]) => key);
        // Check for anything ending in 'Badges' equals 'badges'
        const badges = keys.filter((key) => key.endsWith('Badges') || key === 'badges');
        // The likely candidate is the one with some prefix (owner, author)
        const likely_badges = badges.filter((key) => key.startsWith('owner') || key.startsWith('author'));
        // If we have a likely candidate, we'll use that
        const cannonical_badges = (_b = likely_badges[0]) !== null && _b !== void 0 ? _b : badges[0];
        // Now we have the author and its badges
        // Verify that its actually badges
        const badge_key_info = key_info.find(([key]) => key === cannonical_badges);
        const is_badges = badge_key_info ?
            badge_key_info[1].type === 'renderer_list' && Reflect.has(badge_key_info[1].renderers, 'MetadataBadge') :
            false;
        if (is_badges && cannonical_badges)
            excluded_keys.add(cannonical_badges);
        // TODO: next we check for the author's thumbnail
        author = {
            type: 'misc',
            misc_type: 'Author',
            optional: false,
            params: [
                cannonical_channel_nav[0],
                is_badges ? cannonical_badges : undefined
            ]
        };
    }
    if (author) {
        key_info.push(['author', author]);
    }
    return key_info.filter(([key]) => !excluded_keys.has(key));
}, _YTNodeGenerator_introspect = function _YTNodeGenerator_introspect(classdata) {
    const key_info = __classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_passOne).call(this, classdata);
    return __classPrivateFieldGet(this, _a, "m", _YTNodeGenerator_passTwo).call(this, key_info);
};
_YTNodeGenerator_ignored_keys = { value: new Set([
        'trackingParams', 'accessibility', 'accessibilityData'
    ]) };
_YTNodeGenerator_renderers_examples = { value: {} };
//# sourceMappingURL=generator.js.map