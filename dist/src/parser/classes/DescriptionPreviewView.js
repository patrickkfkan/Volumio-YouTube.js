import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import EngagementPanelSectionList from './EngagementPanelSectionList.js';
import Text from './misc/Text.js';
class DescriptionPreviewView extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        super();
        this.description = Text.fromAttributed(data.description);
        this.max_lines = parseInt(data.maxLines);
        this.truncation_text = Text.fromAttributed(data.truncationText);
        this.always_show_truncation_text = !!data.alwaysShowTruncationText;
        if ((_c = (_b = (_a = data.rendererContext.commandContext) === null || _a === void 0 ? void 0 : _a.onTap) === null || _b === void 0 ? void 0 : _b.innertubeCommand) === null || _c === void 0 ? void 0 : _c.showEngagementPanelEndpoint) {
            const endpoint = (_f = (_e = (_d = data.rendererContext.commandContext) === null || _d === void 0 ? void 0 : _d.onTap) === null || _e === void 0 ? void 0 : _e.innertubeCommand) === null || _f === void 0 ? void 0 : _f.showEngagementPanelEndpoint;
            this.more_endpoint = {
                show_engagement_panel_endpoint: {
                    engagement_panel: Parser.parseItem(endpoint.engagementPanel, EngagementPanelSectionList),
                    engagement_panel_popup_type: endpoint.engagementPanelPresentationConfigs.engagementPanelPopupPresentationConfig.popupType,
                    identifier: {
                        surface: endpoint.identifier.surface,
                        tag: endpoint.identifier.tag
                    }
                }
            };
        }
    }
}
DescriptionPreviewView.type = 'DescriptionPreviewView';
export default DescriptionPreviewView;
//# sourceMappingURL=DescriptionPreviewView.js.map