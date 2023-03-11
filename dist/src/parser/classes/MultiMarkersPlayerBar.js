import Parser from '../index.js';
import { observe, YTNode } from '../helpers.js';
class Marker extends YTNode {
    constructor(data) {
        super();
        this.marker_key = data.key;
        this.value = {};
        if (data.value.heatmap) {
            this.value.heatmap = Parser.parseItem(data.value.heatmap);
        }
        if (data.value.chapters) {
            this.value.chapters = Parser.parseArray(data.value.chapters);
        }
    }
}
Marker.type = 'Marker';
class MultiMarkersPlayerBar extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.markers_map = observe(((_a = data.markersMap) === null || _a === void 0 ? void 0 : _a.map((marker) => new Marker(marker))) || []);
    }
}
MultiMarkersPlayerBar.type = 'MultiMarkersPlayerBar';
export { Marker };
export default MultiMarkersPlayerBar;
//# sourceMappingURL=MultiMarkersPlayerBar.js.map