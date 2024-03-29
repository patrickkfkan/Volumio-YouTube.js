var _VideoSecondaryInfo_instances, _VideoSecondaryInfo_convertAttributedDescriptionToRuns;
import { __classPrivateFieldGet } from "tslib";
import Parser from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';
import VideoOwner from './VideoOwner.js';
import SubscribeButton from './SubscribeButton.js';
import MetadataRowContainer from './MetadataRowContainer.js';
import { YTNode } from '../helpers.js';
class VideoSecondaryInfo extends YTNode {
    constructor(data) {
        super();
        _VideoSecondaryInfo_instances.add(this);
        this.owner = Parser.parseItem(data.owner, VideoOwner);
        this.description = new Text(data.description);
        if (Reflect.has(data, 'attributedDescription')) {
            this.description = new Text(__classPrivateFieldGet(this, _VideoSecondaryInfo_instances, "m", _VideoSecondaryInfo_convertAttributedDescriptionToRuns).call(this, data.attributedDescription));
        }
        this.subscribe_button = Parser.parseItem(data.subscribeButton, [SubscribeButton, Button]);
        this.metadata = Parser.parseItem(data.metadataRowContainer, MetadataRowContainer);
        this.show_more_text = data.showMoreText;
        this.show_less_text = data.showLessText;
        this.default_expanded = data.defaultExpanded;
        this.description_collapsed_lines = data.descriptionCollapsedLines;
    }
}
_VideoSecondaryInfo_instances = new WeakSet(), _VideoSecondaryInfo_convertAttributedDescriptionToRuns = function _VideoSecondaryInfo_convertAttributedDescriptionToRuns(description) {
    const runs = [];
    const content = description.content;
    const command_runs = description.commandRuns;
    let last_end_index = 0;
    if (command_runs) {
        for (const item of command_runs) {
            const length = item.length;
            const start_index = item.startIndex;
            if (start_index > last_end_index) {
                runs.push({
                    text: content.slice(last_end_index, start_index)
                });
            }
            if (Reflect.has(item, 'onTap')) {
                let attachment = null;
                if (Reflect.has(description, 'attachmentRuns')) {
                    const attachment_runs = description.attachmentRuns;
                    for (const attatchment_run of attachment_runs) {
                        if ((attatchment_run.startIndex - 2) == start_index) {
                            attachment = attatchment_run;
                            break;
                        }
                    }
                }
                if (attachment) {
                    runs.push({
                        text: content.slice(start_index, start_index + length),
                        navigationEndpoint: item.onTap,
                        attachment
                    });
                }
                else {
                    runs.push({
                        text: content.slice(start_index, start_index + length),
                        navigationEndpoint: item.onTap
                    });
                }
            }
            last_end_index = start_index + length;
        }
        if (last_end_index < content.length) {
            runs.push({
                text: content.slice(last_end_index)
            });
        }
    }
    else {
        runs.push({
            text: content
        });
    }
    return { runs };
};
VideoSecondaryInfo.type = 'VideoSecondaryInfo';
export default VideoSecondaryInfo;
//# sourceMappingURL=VideoSecondaryInfo.js.map