"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class SectionList extends helpers_1.YTNode {
    constructor(data) {
        super();
        if (data.targetId) {
            this.target_id = data.targetId;
        }
        this.contents = index_1.default.parse(data.contents);
        if (data.continuations) {
            if (data.continuations[0].nextContinuationData) {
                this.continuation = data.continuations[0].nextContinuationData.continuation;
            }
            else if (data.continuations[0].reloadContinuationData) {
                this.continuation = data.continuations[0].reloadContinuationData.continuation;
            }
        }
        if (data.header) {
            this.header = index_1.default.parse(data.header);
        }
    }
}
SectionList.type = 'SectionList';
exports.default = SectionList;
//# sourceMappingURL=SectionList.js.map