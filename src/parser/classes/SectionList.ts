import { type ObservedArray, YTNode } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';

export default class SectionList extends YTNode {
  static type = 'SectionList';

  contents: ObservedArray<YTNode>;
  target_id?: string;
  continuation?: string;
  header?: YTNode;
  sub_menu?: YTNode;

  /*** Volumio-YouTube.js ***/
  continuation_type?: 'next' | 'reload';

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);

    if (Reflect.has(data, 'targetId')) {
      this.target_id = data.targetId;
    }

    if (Reflect.has(data, 'continuations')) {
      if (Reflect.has(data.continuations[0], 'nextContinuationData')) {
        this.continuation = data.continuations[0].nextContinuationData.continuation;
        this.continuation_type = 'next'
      } else if (Reflect.has(data.continuations[0], 'reloadContinuationData')) {
        this.continuation = data.continuations[0].reloadContinuationData.continuation;
        this.continuation_type = 'reload';
      }
    }

    if (Reflect.has(data, 'header')) {
      this.header = Parser.parseItem(data.header);
    }

    if (Reflect.has(data, 'subMenu')) {
      this.sub_menu = Parser.parseItem(data.subMenu);
    }
  }
}