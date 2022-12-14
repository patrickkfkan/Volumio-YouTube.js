import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class ChildVideo extends YTNode {
    static type: string;
    id: string;
    title: Text;
    duration: {
        text: string;
        seconds: number;
    };
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default ChildVideo;
