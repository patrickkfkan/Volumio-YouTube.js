import type { RawNode } from '../index.js';
import Video from './Video.js';
export default class VideoCard extends Video {
    static type: string;
    constructor(data: RawNode);
}
