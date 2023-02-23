import Text from './misc/Text.js';
import Parser from '../index.js';
import MusicThumbnail from './MusicThumbnail.js';

import { YTNode } from '../helpers.js';

/*** Volumio-YouTube.js ***/
import Button from './Button.js';

class MusicImmersiveHeader extends YTNode {
  static type = 'MusicImmersiveHeader';

  title: Text;
  description: Text;
  thumbnail: MusicThumbnail | null;

  /*** Volumio-YouTube.js ***/
  play_button: Button | null;
  start_radio_button: Button | null;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.thumbnail = Parser.parseItem<MusicThumbnail>(data.thumbnail, MusicThumbnail);
    /**
         Not useful for now.
         this.menu = Parser.parse(data.menu);
         this.play_button = Parser.parse(data.playButton);
         this.start_radio_button = Parser.parse(data.startRadioButton);
     */

    /*** Volumio-YouTube.js ***/
    this.play_button = Parser.parseItem(data.playButton, Button);
    this.start_radio_button = Parser.parseItem(data.startRadioButton, Button);
  }
}

export default MusicImmersiveHeader;