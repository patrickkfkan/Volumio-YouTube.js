import BackstagePost from './BackstagePost';
declare class Post extends BackstagePost {
    static type: string;
    constructor(data: any);
}
export default Post;
