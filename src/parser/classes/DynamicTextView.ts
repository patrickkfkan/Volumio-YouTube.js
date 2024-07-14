import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class DynamicTextView extends YTNode {
  static type = 'DynamicTextView';

  text: Text;
  max_lines: number;

  constructor(data: RawNode) {
    super();
    this.text = Text.fromAttributed(data.text);
    this.max_lines = parseInt(data.maxLines);
  }
}