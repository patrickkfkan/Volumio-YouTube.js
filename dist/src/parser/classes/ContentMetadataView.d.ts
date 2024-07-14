import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Text } from '../misc.js';
export type MetadataRow = {
    metadata_parts?: {
        text: Text;
    }[];
};
export default class ContentMetadataView extends YTNode {
    static type: string;
    metadata_rows: MetadataRow[];
    delimiter: string;
    constructor(data: RawNode);
}
