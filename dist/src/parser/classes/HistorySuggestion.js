"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchSuggestion_1 = __importDefault(require("./SearchSuggestion"));
class HistorySuggestion extends SearchSuggestion_1.default {
    constructor(data) {
        super(data);
    }
}
HistorySuggestion.type = 'HistorySuggestion';
exports.default = HistorySuggestion;
//# sourceMappingURL=HistorySuggestion.js.map