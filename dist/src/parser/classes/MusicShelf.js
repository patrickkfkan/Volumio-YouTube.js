"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const MusicResponsiveListItem_1 = __importDefault(require("./MusicResponsiveListItem"));
const helpers_1 = require("../helpers");
const Button_1 = __importDefault(require("./Button"));
class MusicShelf extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        this.title = new Text_1.default(data.title);
        this.contents = index_1.default.parseArray(data.contents, MusicResponsiveListItem_1.default);
        this.endpoint = Reflect.has(data, 'bottomEndpoint') ? new NavigationEndpoint_1.default(data.bottomEndpoint) : null;
        this.continuation =
            ((_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0].nextContinuationData) === null || _b === void 0 ? void 0 : _b.continuation) ||
                ((_d = (_c = data.continuations) === null || _c === void 0 ? void 0 : _c[0].reloadContinuationData) === null || _d === void 0 ? void 0 : _d.continuation) || null;
        this.bottom_text = Reflect.has(data, 'bottomText') ? new Text_1.default(data.bottomText) : null;
        this.bottom_button = index_1.default.parseItem(data.bottomButton, Button_1.default);
        if (data.subheaders) {
            this.subheaders = index_1.default.parseArray(data.subheaders);
        }
    }
}
MusicShelf.type = 'MusicShelf';
exports.default = MusicShelf;
//# sourceMappingURL=MusicShelf.js.map