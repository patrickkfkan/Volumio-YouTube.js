import Actions, { AxioslikeResponse } from '../../core/Actions';
import Notification from '../classes/Notification';
import SimpleMenuHeader from '../classes/menus/SimpleMenuHeader';
declare class NotificationsMenu {
    #private;
    header: SimpleMenuHeader | null;
    contents: Notification[];
    constructor(actions: Actions, response: AxioslikeResponse);
    getContinuation(): Promise<NotificationsMenu>;
}
export default NotificationsMenu;
