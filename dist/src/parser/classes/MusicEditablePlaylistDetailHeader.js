import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class MusicEditablePlaylistDetailHeader extends YTNode {
    constructor(data) {
        super();
        this.header = Parser.parse(data.header);
        // TODO: Should we also parse data.editHeader.musicPlaylistEditHeaderRenderer?
        // It doesn't seem practical to do so...
    }
}
MusicEditablePlaylistDetailHeader.type = 'MusicEditablePlaylistDetailHeader';
export default MusicEditablePlaylistDetailHeader;
//# sourceMappingURL=MusicEditablePlaylistDetailHeader.js.map