import Text from './misc/Text';
import Parser from '../index';
import MusicThumbnail from './MusicThumbnail';

import { YTNode } from '../helpers';
import Button from './Button';

class MusicImmersiveHeader extends YTNode {
  static type = 'MusicImmersiveHeader';

  title: Text;
  description: Text;
  thumbnail: MusicThumbnail | null;
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
     */
    this.play_button = Parser.parseItem(data.playButton, Button);
    this.start_radio_button = Parser.parseItem(data.startRadioButton, Button);
  }
}

export default MusicImmersiveHeader;