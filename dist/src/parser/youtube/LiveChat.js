"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _LiveChat_instances, _LiveChat_actions, _LiveChat_video_info, _LiveChat_continuation, _LiveChat_mcontinuation, _LiveChat_lc_polling_interval_ms, _LiveChat_md_polling_interval_ms, _LiveChat_pollLivechat, _LiveChat_emitSmoothedActions, _LiveChat_pollMetadata, _LiveChat_wait;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importStar(require("../index"));
const EventEmitterLike_1 = __importDefault(require("../../utils/EventEmitterLike"));
const AddChatItemAction_1 = __importDefault(require("../classes/livechat/AddChatItemAction"));
const UpdateTitleAction_1 = __importDefault(require("../classes/livechat/UpdateTitleAction"));
const UpdateDescriptionAction_1 = __importDefault(require("../classes/livechat/UpdateDescriptionAction"));
const UpdateViewershipAction_1 = __importDefault(require("../classes/livechat/UpdateViewershipAction"));
const UpdateDateTextAction_1 = __importDefault(require("../classes/livechat/UpdateDateTextAction"));
const UpdateToggleButtonTextAction_1 = __importDefault(require("../classes/livechat/UpdateToggleButtonTextAction"));
const Utils_1 = require("../../utils/Utils");
class LiveChat extends EventEmitterLike_1.default {
    constructor(video_info) {
        var _a, _b;
        super();
        _LiveChat_instances.add(this);
        _LiveChat_actions.set(this, void 0);
        _LiveChat_video_info.set(this, void 0);
        _LiveChat_continuation.set(this, void 0);
        _LiveChat_mcontinuation.set(this, void 0);
        _LiveChat_lc_polling_interval_ms.set(this, 1000);
        _LiveChat_md_polling_interval_ms.set(this, 5000);
        this.running = false;
        this.is_replay = false;
        __classPrivateFieldSet(this, _LiveChat_video_info, video_info, "f");
        __classPrivateFieldSet(this, _LiveChat_actions, video_info.actions, "f");
        __classPrivateFieldSet(this, _LiveChat_continuation, ((_a = video_info.livechat) === null || _a === void 0 ? void 0 : _a.continuation) || undefined, "f");
        this.is_replay = ((_b = video_info.livechat) === null || _b === void 0 ? void 0 : _b.is_replay) || false;
    }
    start() {
        if (!this.running) {
            this.running = true;
            __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
            __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollMetadata).call(this);
        }
    }
    stop() {
        this.running = false;
    }
    /**
     * Sends a message.
     */
    sendMessage(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").livechat('live_chat/send_message', Object.assign({ text }, {
                video_id: __classPrivateFieldGet(this, _LiveChat_video_info, "f").basic_info.id,
                channel_id: __classPrivateFieldGet(this, _LiveChat_video_info, "f").basic_info.channel_id
            }));
            const data = index_1.default.parseResponse(response.data);
            if (!data.actions)
                throw new Utils_1.InnertubeError('Response did not have an "actions" property. The call may have failed.');
            return data.actions.array().as(AddChatItemAction_1.default);
        });
    }
}
_LiveChat_actions = new WeakMap(), _LiveChat_video_info = new WeakMap(), _LiveChat_continuation = new WeakMap(), _LiveChat_mcontinuation = new WeakMap(), _LiveChat_lc_polling_interval_ms = new WeakMap(), _LiveChat_md_polling_interval_ms = new WeakMap(), _LiveChat_instances = new WeakSet(), _LiveChat_pollLivechat = function _LiveChat_pollLivechat() {
    const lc_poller = setTimeout(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            const endpoint = this.is_replay ? 'live_chat/get_live_chat_replay' : 'live_chat/get_live_chat';
            const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").livechat(endpoint, { ctoken: __classPrivateFieldGet(this, _LiveChat_continuation, "f") });
            const data = index_1.default.parseResponse(response.data);
            const contents = data.continuation_contents;
            if (!(contents instanceof index_1.LiveChatContinuation))
                throw new Utils_1.InnertubeError('Continuation is not a LiveChatContinuation');
            __classPrivateFieldSet(this, _LiveChat_continuation, contents.continuation.token, "f");
            __classPrivateFieldSet(this, _LiveChat_lc_polling_interval_ms, contents.continuation.timeout_ms, "f");
            // Header only exists in the first request
            if (contents.header) {
                this.initial_info = contents;
                this.emit('start', contents);
            }
            else {
                yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, contents.actions);
            }
            clearTimeout(lc_poller);
            this.running && __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
        }))().catch((err) => Promise.reject(err));
    }, __classPrivateFieldGet(this, _LiveChat_lc_polling_interval_ms, "f"));
}, _LiveChat_emitSmoothedActions = function _LiveChat_emitSmoothedActions(actions) {
    return __awaiter(this, void 0, void 0, function* () {
        const base = 1E4;
        let delay = actions.length < base / 80 ? 1 : 0;
        const emit_delay_ms = delay == 1 ? (delay = base / actions.length,
            delay *= Math.random() + 0.5,
            delay = Math.min(1E3, delay),
            delay = Math.max(80, delay)) : delay = 80;
        for (const action of actions) {
            yield __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, emit_delay_ms);
            this.emit('chat-update', action);
        }
    });
}, _LiveChat_pollMetadata = function _LiveChat_pollMetadata() {
    const md_poller = setTimeout(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            const payload = {
                video_id: __classPrivateFieldGet(this, _LiveChat_video_info, "f").basic_info.id,
                ctoken: undefined
            };
            if (__classPrivateFieldGet(this, _LiveChat_mcontinuation, "f")) {
                payload.ctoken = __classPrivateFieldGet(this, _LiveChat_mcontinuation, "f");
            }
            const response = yield __classPrivateFieldGet(this, _LiveChat_actions, "f").livechat('updated_metadata', payload);
            const data = index_1.default.parseResponse(response.data);
            __classPrivateFieldSet(this, _LiveChat_mcontinuation, (_a = data.continuation) === null || _a === void 0 ? void 0 : _a.token, "f");
            __classPrivateFieldSet(this, _LiveChat_md_polling_interval_ms, ((_b = data.continuation) === null || _b === void 0 ? void 0 : _b.timeout_ms) || __classPrivateFieldGet(this, _LiveChat_md_polling_interval_ms, "f"), "f");
            this.metadata = {
                title: ((_c = data.actions) === null || _c === void 0 ? void 0 : _c.array().firstOfType(UpdateTitleAction_1.default)) || ((_d = this.metadata) === null || _d === void 0 ? void 0 : _d.title),
                description: ((_e = data.actions) === null || _e === void 0 ? void 0 : _e.array().firstOfType(UpdateDescriptionAction_1.default)) || ((_f = this.metadata) === null || _f === void 0 ? void 0 : _f.description),
                views: ((_g = data.actions) === null || _g === void 0 ? void 0 : _g.array().firstOfType(UpdateViewershipAction_1.default)) || ((_h = this.metadata) === null || _h === void 0 ? void 0 : _h.views),
                likes: ((_j = data.actions) === null || _j === void 0 ? void 0 : _j.array().firstOfType(UpdateToggleButtonTextAction_1.default)) || ((_k = this.metadata) === null || _k === void 0 ? void 0 : _k.likes),
                date: ((_l = data.actions) === null || _l === void 0 ? void 0 : _l.array().firstOfType(UpdateDateTextAction_1.default)) || ((_m = this.metadata) === null || _m === void 0 ? void 0 : _m.date)
            };
            this.emit('metadata-update', this.metadata);
            clearTimeout(md_poller);
            this.running && __classPrivateFieldGet(this, _LiveChat_instances, "m", _LiveChat_pollMetadata).call(this);
        }))().catch((err) => Promise.reject(err));
    }, __classPrivateFieldGet(this, _LiveChat_md_polling_interval_ms, "f"));
}, _LiveChat_wait = function _LiveChat_wait(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => setTimeout(() => resolve(), ms));
    });
};
exports.default = LiveChat;
//# sourceMappingURL=LiveChat.js.map