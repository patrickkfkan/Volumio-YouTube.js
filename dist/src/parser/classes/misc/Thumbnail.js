export default class Thumbnail {
    constructor(data) {
        this.url = data.url;
        this.width = data.width;
        this.height = data.height;
    }
    /**
     * Get thumbnails from response object.
     */
    static fromResponse(data) {
        /*** Volumio-YouTube.js ***/
        if (!data || (!data.thumbnails && !data.sources))
            return [];
        //if (!data || !data.thumbnails) return [];
        return (data.thumbnails || data.sources).map((x) => new Thumbnail(x)).sort((a, b) => b.width - a.width);
        //return data.thumbnails.map((x: any) => new Thumbnail(x)).sort((a: Thumbnail, b: Thumbnail) => b.width - a.width);
    }
}
//# sourceMappingURL=Thumbnail.js.map