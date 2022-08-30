import Session from './Session';
import { AxioslikeResponse } from './Actions';
export interface UploadResult {
    status: string;
    scottyResourceId: string;
}
export interface InitialUploadData {
    frontend_upload_id: string;
    upload_id: string;
    upload_url: string;
    scotty_resource_id: string;
    chunk_granularity: string;
}
export interface VideoMetadata {
    title?: string;
    description?: string;
    privacy?: 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
    is_draft?: boolean;
}
declare class Studio {
    #private;
    constructor(session: Session);
    /**
     * Uploads a custom thumbnail and sets it for a video.
     * @example
     * ```ts
     * const buffer = fs.readFileSync('./my_awesome_thumbnail.jpg');
     * const response = await yt.studio.setThumbnail(video_id, buffer);
     * ```
     */
    setThumbnail(video_id: string, buffer: Uint8Array): Promise<AxioslikeResponse>;
    /**
     * Uploads a video to YouTube.
     * @example
     * ```ts
     * const buffer = fs.readFileSync('./my_awesome_video.mp4');
     * const response = await yt.studio.upload(buffer, { title: 'Wow!' });
     * ```
     */
    upload(file: BodyInit, metadata?: VideoMetadata): Promise<AxioslikeResponse>;
}
export default Studio;
