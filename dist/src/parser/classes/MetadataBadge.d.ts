import { YTNode } from '../helpers';
declare class MetadataBadge extends YTNode {
    static type: string;
    icon_type?: string;
    style?: string;
    tooltip: string | null;
    constructor(data: any);
}
export default MetadataBadge;
