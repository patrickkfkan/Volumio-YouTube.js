"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
class AudioOnlyPlayability extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.audio_only_availability = data.audioOnlyAvailability;
    }
}
AudioOnlyPlayability.type = 'AudioOnlyPlayability';
exports.default = AudioOnlyPlayability;
//# sourceMappingURL=AudioOnlyPlayability.js.map