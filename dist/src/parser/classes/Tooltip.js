"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class Tooltip extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.promo_config = {
            promo_id: data.promoConfig.promoId,
            impression_endpoints: data.promoConfig.impressionEndpoints
                .map((endpoint) => new NavigationEndpoint_1.default(endpoint)),
            accept: new NavigationEndpoint_1.default(data.promoConfig.acceptCommand),
            dismiss: new NavigationEndpoint_1.default(data.promoConfig.dismissCommand)
        };
        this.target_id = data.targetId;
        this.details = new Text_1.default(data.detailsText);
        this.suggested_position = data.suggestedPosition.type;
        this.dismiss_stratedy = data.dismissStrategy.type;
        this.dwell_time_ms = parseInt(data.dwellTimeMs);
    }
}
Tooltip.type = 'Tooltip';
exports.default = Tooltip;
//# sourceMappingURL=Tooltip.js.map