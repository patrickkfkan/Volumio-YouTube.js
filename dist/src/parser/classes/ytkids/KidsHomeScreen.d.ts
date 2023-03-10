import type AnchoredSection from './AnchoredSection.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class KidsHomeScreen extends YTNode {
    static type: string;
    anchors: import("../../helpers.js").ObservedArray<AnchoredSection>;
    constructor(data: RawNode);
}
export default KidsHomeScreen;
