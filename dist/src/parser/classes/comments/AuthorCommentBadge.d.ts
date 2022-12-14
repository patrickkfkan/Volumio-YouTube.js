import { YTNode } from '../../helpers';
declare class AuthorCommentBadge extends YTNode {
    #private;
    static type: string;
    icon_type: string | null;
    tooltip: string;
    style?: string;
    constructor(data: any);
    get orig_badge(): any;
}
export default AuthorCommentBadge;
