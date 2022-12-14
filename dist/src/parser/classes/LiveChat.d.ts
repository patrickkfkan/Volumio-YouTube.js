import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class LiveChat extends YTNode {
    static type: string;
    header: import("../helpers").SuperParsedResult<YTNode>;
    initial_display_state: string;
    continuation: string;
    client_messages: {
        reconnect_message: Text;
        unable_to_reconnect_message: Text;
        fatal_error: Text;
        reconnected_message: Text;
        generic_error: Text;
    };
    is_replay: boolean;
    constructor(data: any);
}
export default LiveChat;
