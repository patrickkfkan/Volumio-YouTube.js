import { YTNode } from '../helpers.js';
import { Text } from '../misc.js';
class ContentMetadataView extends YTNode {
    constructor(data) {
        super();
        this.metadata_rows = data.metadataRows.map((row) => {
            var _a;
            return ({
                metadata_parts: (_a = row.metadataParts) === null || _a === void 0 ? void 0 : _a.map((part) => ({
                    text: Text.fromAttributed(part.text)
                }))
            });
        });
        this.delimiter = data.delimiter;
    }
}
ContentMetadataView.type = 'ContentMetadataView';
export default ContentMetadataView;
//# sourceMappingURL=ContentMetadataView.js.map