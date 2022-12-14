"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataModelSection_1 = __importDefault(require("./DataModelSection"));
const helpers_1 = require("../../helpers");
class AnalyticsMainAppKeyMetrics extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.period = data.cardData.periodLabel;
        const metrics_data = data.cardData.sections[0].analyticsKeyMetricsData;
        this.sections = metrics_data.dataModel.sections.map((section) => new DataModelSection_1.default(section));
    }
}
AnalyticsMainAppKeyMetrics.type = 'AnalyticsMainAppKeyMetrics';
exports.default = AnalyticsMainAppKeyMetrics;
//# sourceMappingURL=AnalyticsMainAppKeyMetrics.js.map