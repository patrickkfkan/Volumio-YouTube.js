import type { RawNode } from '../../index.js';

export default class Thumbnail {
  url: string;
  width: number;
  height: number;

  constructor(data: RawNode) {
    this.url = data.url;
    this.width = data.width;
    this.height = data.height;
  }

  /**
   * Get thumbnails from response object.
   */
  static fromResponse(data: any): Thumbnail[] {
    /*** Volumio-YouTube.js ***/
    if (!data || (!data.thumbnails && !data.sources)) return [];
    //if (!data || !data.thumbnails) return [];
    return (data.thumbnails || data.sources).map((x: any) => new Thumbnail(x)).sort((a: Thumbnail, b: Thumbnail) => b.width - a.width);
    //return data.thumbnails.map((x: any) => new Thumbnail(x)).sort((a: Thumbnail, b: Thumbnail) => b.width - a.width);
  }
}