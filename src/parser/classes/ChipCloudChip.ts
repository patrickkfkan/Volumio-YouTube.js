import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ChipCloudChip extends YTNode {
  static type = 'ChipCloudChip';

  is_selected: boolean;
  endpoint?: NavigationEndpoint;
  text: string;

  /*** Volumio-YouTube.js ***/
  // TODO: Push to YouTube.js repo
  deselect_endpoint?: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.is_selected = data.isSelected;
    if (Reflect.has(data, 'navigationEndpoint')) {
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }

    /*** Volumio-YouTube.js ***/
    // TODO: Push to YouTube.js repo
    if (Reflect.has(data, 'onDeselectedCommand')) {
      this.deselect_endpoint = new NavigationEndpoint(data.onDeselectedCommand);
    }

    this.text = new Text(data.text).toString();
  }
}