"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TabbedFeed_1 = __importDefault(require("../../core/TabbedFeed"));
const C4TabbedHeader_1 = __importDefault(require("../classes/C4TabbedHeader"));
const ChannelAboutFullMetadata_1 = __importDefault(require("../classes/ChannelAboutFullMetadata"));
const ChannelMetadata_1 = __importDefault(require("../classes/ChannelMetadata"));
const MicroformatData_1 = __importDefault(require("../classes/MicroformatData"));
const Tab_1 = __importDefault(require("../classes/Tab"));
class Channel extends TabbedFeed_1.default {
    constructor(actions, data, already_parsed = false) {
        var _a;
        super(actions, data, already_parsed);
        this.header = this.page.header.item().as(C4TabbedHeader_1.default);
        const metadata = this.page.metadata.item().as(ChannelMetadata_1.default);
        const microformat = (_a = this.page.microformat) === null || _a === void 0 ? void 0 : _a.as(MicroformatData_1.default);
        this.metadata = Object.assign(Object.assign({}, metadata), (microformat || {}));
        this.sponsor_button = this.header.sponsor_button;
        this.subscribe_button = this.header.subscribe_button;
        const tab = this.page.contents.item().key('tabs').parsed().array().filterType(Tab_1.default).get({ selected: true });
        this.current_tab = tab;
    }
    getVideos() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Videos');
            return new Channel(this.actions, tab.page, true);
        });
    }
    getPlaylists() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Playlists');
            return new Channel(this.actions, tab.page, true);
        });
    }
    getHome() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Home');
            return new Channel(this.actions, tab.page, true);
        });
    }
    getCommunity() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Community');
            return new Channel(this.actions, tab.page, true);
        });
    }
    getChannels() {
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('Channels');
            return new Channel(this.actions, tab.page, true);
        });
    }
    /**
     * Retrieves the channel about page.
     * Note that this does not return a new {@link Channel} object.
     */
    getAbout() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getTab('About');
            return (_a = tab.memo.getType(ChannelAboutFullMetadata_1.default)) === null || _a === void 0 ? void 0 : _a[0];
        });
    }
}
exports.default = Channel;
//# sourceMappingURL=Channel.js.map