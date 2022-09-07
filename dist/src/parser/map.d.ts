import { YTNodeConstructor } from './helpers';
export declare const YTNodes: Record<string, YTNodeConstructor<import("./helpers").YTNode>>;
/**
 * @param name - Name of the node to be parsed
 */
export default function GetParserByName(name: string): YTNodeConstructor<import("./helpers").YTNode>;
