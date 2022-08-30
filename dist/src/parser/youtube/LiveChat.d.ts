import { LiveChatContinuation } from '../index';
import EventEmitter from '../../utils/EventEmitterLike';
import VideoInfo from './VideoInfo';
import AddChatItemAction from '../classes/livechat/AddChatItemAction';
import AddLiveChatTickerItemAction from '../classes/livechat/AddLiveChatTickerItemAction';
import MarkChatItemAsDeletedAction from '../classes/livechat/MarkChatItemAsDeletedAction';
import MarkChatItemsByAuthorAsDeletedAction from '../classes/livechat/MarkChatItemsByAuthorAsDeletedAction';
import ReplaceChatItemAction from '../classes/livechat/ReplaceChatItemAction';
import ReplayChatItemAction from '../classes/livechat/ReplayChatItemAction';
import ShowLiveChatActionPanelAction from '../classes/livechat/ShowLiveChatActionPanelAction';
import UpdateTitleAction from '../classes/livechat/UpdateTitleAction';
import UpdateDescriptionAction from '../classes/livechat/UpdateDescriptionAction';
import UpdateViewershipAction from '../classes/livechat/UpdateViewershipAction';
import UpdateDateTextAction from '../classes/livechat/UpdateDateTextAction';
import UpdateToggleButtonTextAction from '../classes/livechat/UpdateToggleButtonTextAction';
import AddBannerToLiveChatCommand from '../classes/livechat/AddBannerToLiveChatCommand';
import RemoveBannerForLiveChatCommand from '../classes/livechat/RemoveBannerForLiveChatCommand';
import ShowLiveChatTooltipCommand from '../classes/livechat/ShowLiveChatTooltipCommand';
import { ObservedArray } from '../helpers';
export declare type ChatAction = AddChatItemAction | AddBannerToLiveChatCommand | AddLiveChatTickerItemAction | MarkChatItemAsDeletedAction | MarkChatItemsByAuthorAsDeletedAction | RemoveBannerForLiveChatCommand | ReplaceChatItemAction | ReplayChatItemAction | ShowLiveChatActionPanelAction | ShowLiveChatTooltipCommand;
export interface LiveMetadata {
    title: UpdateTitleAction | undefined;
    description: UpdateDescriptionAction | undefined;
    views: UpdateViewershipAction | undefined;
    likes: UpdateToggleButtonTextAction | undefined;
    date: UpdateDateTextAction | undefined;
}
declare class LiveChat extends EventEmitter {
    #private;
    initial_info?: LiveChatContinuation;
    metadata?: LiveMetadata;
    running: boolean;
    is_replay: boolean;
    constructor(video_info: VideoInfo);
    start(): void;
    stop(): void;
    /**
     * Sends a message.
     */
    sendMessage(text: string): Promise<ObservedArray<AddChatItemAction>>;
}
export default LiveChat;
