import Author from './misc/Author.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type CommentActionButtons from './comments/CommentActionButtons.js';
import type Menu from './menus/Menu.js';
import { YTNode } from '../helpers.js';
declare class BackstagePost extends YTNode {
    static type: string;
    id: string;
    author: Author;
    content: Text;
    published: Text;
    poll_status?: string;
    vote_status?: string;
    vote_count?: Text;
    menu?: Menu | null;
    action_buttons: CommentActionButtons | null | undefined;
    vote_button: YTNode | null | undefined;
    surface: string;
    endpoint?: NavigationEndpoint;
    attachment: YTNode | null | undefined;
    constructor(data: any);
}
export default BackstagePost;
