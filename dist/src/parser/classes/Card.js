"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class Card extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.teaser = index_1.default.parse(data.teaser);
        this.content = index_1.default.parse(data.content);
        this.card_id = data.cardId;
        this.feature = data.feature;
        this.cue_ranges = data.cueRanges.map((cr) => ({
            start_card_active_ms: cr.startCardActiveMs,
            end_card_active_ms: cr.endCardActiveMs,
            teaser_duration_ms: cr.teaserDurationMs,
            icon_after_teaser_ms: cr.iconAfterTeaserMs
        }));
    }
}
Card.type = 'Card';
exports.default = Card;
//# sourceMappingURL=Card.js.map