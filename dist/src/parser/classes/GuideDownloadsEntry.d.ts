import GuideEntry from './GuideEntry.js';
declare class GuideDownloadsEntry extends GuideEntry {
    static type: string;
    always_show: boolean;
    constructor(data: any);
}
export default GuideDownloadsEntry;
