import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import MusicThumbnail from './MusicThumbnail.js';
import Text from './misc/Text.js';
/*** Volumio-YouTube.js ***/
import Button from './Button.js';
class MusicImmersiveHeader extends YTNode {
    constructor(data) {
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
MusicImmersiveHeader.type = 'MusicImmersiveHeader';
export default MusicImmersiveHeader;
//# sourceMappingURL=MusicImmersiveHeader.js.map