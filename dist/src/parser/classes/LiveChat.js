"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class LiveChat extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.header = index_1.default.parse(data.header);
        this.initial_display_state = data.initialDisplayState;
        this.continuation = (_b = (_a = data.continuations[0]) === null || _a === void 0 ? void 0 : _a.reloadContinuationData) === null || _b === void 0 ? void 0 : _b.continuation;
        this.client_messages = {
            reconnect_message: new Text_1.default(data.clientMessages.reconnectMessage),
            unable_to_reconnect_message: new Text_1.default(data.clientMessages.unableToReconnectMessage),
            fatal_error: new Text_1.default(data.clientMessages.fatalError),
            reconnected_message: new Text_1.default(data.clientMessages.reconnectedMessage),
            generic_error: new Text_1.default(data.clientMessages.genericError)
        };
        this.is_replay = data.isReplay || false;
    }
}
LiveChat.type = 'LiveChat';
exports.default = LiveChat;
//# sourceMappingURL=LiveChat.js.map