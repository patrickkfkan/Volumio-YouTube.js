import { YTNode } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import MusicThumbnail from './MusicThumbnail.js';
import Text from './misc/Text.js';

/*** Volumio-YouTube.js ***/
import Button from './Button.js';

export default class MusicImmersiveHeader extends YTNode {
  static type = 'MusicImmersiveHeader';

  title: Text;
  description: Text;
  thumbnail: MusicThumbnail | null;

  /*** Volumio-YouTube.js ***/
  play_button: Button | null;
  start_radio_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.thumbnail = Parser.parseItem(data.thumbnail, MusicThumbnail);
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