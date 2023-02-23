import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class AddBannerToLiveChatCommand extends YTNode {
    constructor(data) {
        super();
        this.banner = Parser.parseItem(data.bannerRenderer);
    }
}
AddBannerToLiveChatCommand.type = 'AddBannerToLiveChatCommand';
export default AddBannerToLiveChatCommand;
//# sourceMappingURL=AddBannerToLiveChatCommand.js.map