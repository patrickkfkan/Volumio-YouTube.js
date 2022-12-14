"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
class RemoveBannerForLiveChatCommand extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.target_action_id = data.targetActionId;
    }
}
RemoveBannerForLiveChatCommand.type = 'RemoveBannerForLiveChatCommand';
exports.default = RemoveBannerForLiveChatCommand;
//# sourceMappingURL=RemoveBannerForLiveChatCommand.js.map