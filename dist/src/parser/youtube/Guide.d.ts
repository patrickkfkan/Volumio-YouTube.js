import { IRawResponse } from '../index.js';
import { ObservedArray } from '../helpers.js';
import GuideSection from '../classes/GuideSection.js';
export default class Guide {
    #private;
    contents: ObservedArray<GuideSection>;
    constructor(data: IRawResponse);
}
