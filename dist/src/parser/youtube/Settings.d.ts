import Actions, { AxioslikeResponse } from '../../core/Actions';
import PageIntroduction from '../classes/PageIntroduction';
import SettingsSwitch from '../classes/SettingsSwitch';
import SettingsSidebar from '../classes/SettingsSidebar';
declare class Settings {
    #private;
    sidebar: SettingsSidebar | null | undefined;
    introduction: PageIntroduction | null | undefined;
    sections: {
        title: string | null;
        contents: import("../helpers").ObservedArray<import("../helpers").YTNode> | null;
    }[] | undefined;
    constructor(actions: Actions, response: AxioslikeResponse);
    /**
     * Selects an item from the sidebar menu. Use {@link sidebar_items} to see available items.
     */
    selectSidebarItem(name: string): Promise<Settings>;
    /**
     * Finds a setting by name and returns it. Use {@link setting_options} to see available options.
     */
    getSettingOption(name: string): SettingsSwitch;
    /**
     * Returns settings available in the page.
     */
    get setting_options(): string[];
    /**
     * Returns options available in the sidebar.
     */
    get sidebar_items(): string[];
}
export default Settings;
