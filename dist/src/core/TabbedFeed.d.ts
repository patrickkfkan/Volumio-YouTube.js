import Actions from './Actions';
import Feed from './Feed';
declare class TabbedFeed extends Feed {
    #private;
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    get tabs(): string[];
    getTab(title: string): Promise<TabbedFeed>;
    get title(): string | undefined;
}
export default TabbedFeed;
