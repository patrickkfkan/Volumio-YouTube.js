"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const index_1 = __importDefault(require("../index"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class Shelf extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.title = new Text_1.default(data.title);
        if (data.endpoint) {
            this.endpoint = new NavigationEndpoint_1.default(data.endpoint);
        }
        this.content = index_1.default.parse(data.content) || null;
        if ((_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType) {
            this.icon_type = (_b = data.icon) === null || _b === void 0 ? void 0 : _b.iconType;
        }
        if (data.menu) {
            this.menu = index_1.default.parse(data.menu);
        }
    }
}
Shelf.type = 'Shelf';
exports.default = Shelf;
//# sourceMappingURL=Shelf.js.map