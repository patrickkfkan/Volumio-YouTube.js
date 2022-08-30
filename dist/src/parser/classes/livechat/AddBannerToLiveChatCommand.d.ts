import { YTNode } from '../../helpers';
declare class AddBannerToLiveChatCommand extends YTNode {
    static type: string;
    banner: import("../../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default AddBannerToLiveChatCommand;
