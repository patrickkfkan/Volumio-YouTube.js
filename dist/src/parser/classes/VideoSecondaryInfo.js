"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Button_1 = __importDefault(require("./Button"));
const SubscribeButton_1 = __importDefault(require("./SubscribeButton"));
const MetadataRowContainer_1 = __importDefault(require("./MetadataRowContainer"));
const helpers_1 = require("../helpers");
class VideoSecondaryInfo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.owner = index_1.default.parse(data.owner);
        this.description = new Text_1.default(data.description);
        this.subscribe_button = index_1.default.parseItem(data.subscribeButton, [SubscribeButton_1.default, Button_1.default]);
        this.metadata = index_1.default.parseItem(data.metadataRowContainer, MetadataRowContainer_1.default);
        this.show_more_text = data.showMoreText;
        this.show_less_text = data.showLessText;
        this.default_expanded = data.defaultExpanded;
        this.description_collapsed_lines = data.descriptionCollapsedLines;
    }
}
VideoSecondaryInfo.type = 'VideoSecondaryInfo';
exports.default = VideoSecondaryInfo;
//# sourceMappingURL=VideoSecondaryInfo.js.map