import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SectionList from './SectionList.js';
import MusicQueue from './MusicQueue.js';
import RichGrid from './RichGrid.js';
import { YTNode } from '../helpers.js';

export default class Tab extends YTNode {
  static type = 'Tab';

  title: string;
  selected: boolean;
  endpoint: NavigationEndpoint;
  content: SectionList | MusicQueue | RichGrid | null;

  constructor(data: RawNode) {
    super();
    this.title = data.title || 'N/A';
    this.selected = !!data.selected;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.content = null;
    if (typeof data.content === 'object') {
      // Parser.parseItem only parses the first item in data.content, but there could be 
      // multiple with a subsequent item containing the actual content. E.g. YouTube Music category.
      let hasContent = false;
      if (Reflect.has(data.content, 'sectionListRenderer')) {
        const sectionList = this.content = Parser.parseItem({sectionListRenderer: data.content.sectionListRenderer}, SectionList);
        hasContent = !!sectionList && sectionList.contents.length > 0;
      }
      if (!hasContent && Reflect.has(data.content, 'musicQueueRenderer')) {
        const musicQueue = this.content = Parser.parseItem({musicQueueRenderer: data.content.musicQueueRenderer}, MusicQueue);
        hasContent = !!musicQueue && !!musicQueue.content;
      }
      if (!hasContent && Reflect.has(data.content, 'richGridRenderer')) {
        this.content = Parser.parseItem({richGridRenderer: data.content.richGridRenderer}, RichGrid);
      }
    }
  }
}