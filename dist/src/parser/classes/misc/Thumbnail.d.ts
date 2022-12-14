declare class Thumbnail {
    url: string;
    width: number;
    height: number;
    constructor(data: any);
    /**
     * Get thumbnails from response object.
     */
    static fromResponse(data: any): Thumbnail[];
}
export default Thumbnail;
