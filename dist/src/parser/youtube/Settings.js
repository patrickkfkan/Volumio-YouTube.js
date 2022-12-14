"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Settings_page, _Settings_actions;
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Utils_1 = require("../../utils/Utils");
const Tab_1 = __importDefault(require("../classes/Tab"));
const TwoColumnBrowseResults_1 = __importDefault(require("../classes/TwoColumnBrowseResults"));
const SectionList_1 = __importDefault(require("../classes/SectionList"));
const ItemSection_1 = __importDefault(require("../classes/ItemSection"));
const PageIntroduction_1 = __importDefault(require("../classes/PageIntroduction"));
const SettingsOptions_1 = __importDefault(require("../classes/SettingsOptions"));
const SettingsSwitch_1 = __importDefault(require("../classes/SettingsSwitch"));
const SettingsSidebar_1 = __importDefault(require("../classes/SettingsSidebar"));
class Settings {
    constructor(actions, response) {
        var _a, _b, _c, _d, _e;
        _Settings_page.set(this, void 0);
        _Settings_actions.set(this, void 0);
        __classPrivateFieldSet(this, _Settings_actions, actions, "f");
        __classPrivateFieldSet(this, _Settings_page, __1.default.parseResponse(response.data), "f");
        this.sidebar = (_a = __classPrivateFieldGet(this, _Settings_page, "f").sidebar) === null || _a === void 0 ? void 0 : _a.as(SettingsSidebar_1.default);
        const tab = __classPrivateFieldGet(this, _Settings_page, "f").contents.item().as(TwoColumnBrowseResults_1.default).tabs.array().as(Tab_1.default).get({ selected: true });
        if (!tab)
            throw new Utils_1.InnertubeError('Target tab not found');
        const contents = (_b = tab.content) === null || _b === void 0 ? void 0 : _b.as(SectionList_1.default).contents.array().as(ItemSection_1.default);
        this.introduction = (_e = (_d = (_c = contents === null || contents === void 0 ? void 0 : contents.shift()) === null || _c === void 0 ? void 0 : _c.contents) === null || _d === void 0 ? void 0 : _d.get({ type: 'PageIntroduction' })) === null || _e === void 0 ? void 0 : _e.as(PageIntroduction_1.default);
        this.sections = contents === null || contents === void 0 ? void 0 : contents.map((el) => {
            var _a;
            return ({
                title: ((_a = el.header) === null || _a === void 0 ? void 0 : _a.title.toString()) || null,
                contents: el.contents
            });
        });
    }
    /**
     * Selects an item from the sidebar menu. Use {@link sidebar_items} to see available items.
     */
    selectSidebarItem(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sidebar)
                throw new Utils_1.InnertubeError('Sidebar not available');
            const item = this.sidebar.items.get({ title: name });
            if (!item)
                throw new Utils_1.InnertubeError(`Item "${name}" not found`, { available_items: this.sidebar_items });
            const response = yield item.endpoint.callTest(__classPrivateFieldGet(this, _Settings_actions, "f"), { parse: false });
            return new Settings(__classPrivateFieldGet(this, _Settings_actions, "f"), response);
        });
    }
    /**
     * Finds a setting by name and returns it. Use {@link setting_options} to see available options.
     */
    getSettingOption(name) {
        var _a;
        if (!this.sections)
            throw new Utils_1.InnertubeError('Sections not available');
        for (const section of this.sections) {
            if (!section.contents)
                continue;
            for (const el of section.contents) {
                const options = el.as(SettingsOptions_1.default).options;
                if (options) {
                    for (const option of options) {
                        if (option.is(SettingsSwitch_1.default) &&
                            ((_a = option.title) === null || _a === void 0 ? void 0 : _a.toString()) === name)
                            return option;
                    }
                }
            }
        }
        throw new Utils_1.InnertubeError(`Option "${name}" not found`, { available_options: this.setting_options });
    }
    /**
     * Returns settings available in the page.
     */
    get setting_options() {
        if (!this.sections)
            throw new Utils_1.InnertubeError('Sections not available');
        let options = [];
        for (const section of this.sections) {
            if (!section.contents)
                continue;
            for (const el of section.contents) {
                if (el.as(SettingsOptions_1.default).options)
                    options = options.concat(el.as(SettingsOptions_1.default).options);
            }
        }
        return options.map((opt) => { var _a; return (_a = opt.title) === null || _a === void 0 ? void 0 : _a.toString(); }).filter((el) => el);
    }
    /**
     * Returns options available in the sidebar.
     */
    get sidebar_items() {
        if (!this.sidebar)
            throw new Utils_1.InnertubeError('Sidebar not available');
        return this.sidebar.items.map((item) => item.title.toString());
    }
}
_Settings_page = new WeakMap(), _Settings_actions = new WeakMap();
exports.default = Settings;
//# sourceMappingURL=Settings.js.map