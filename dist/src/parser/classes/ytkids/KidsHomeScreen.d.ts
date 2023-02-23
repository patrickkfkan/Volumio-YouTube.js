import type AnchoredSection from './AnchoredSection.js';
import { YTNode } from '../../helpers.js';
declare class KidsHomeScreen extends YTNode {
    static type: string;
    anchors: import("../../helpers.js").ObservedArray<AnchoredSection>;
    constructor(data: any);
}
export default KidsHomeScreen;
