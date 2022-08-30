declare class Proto {
    /**
     * Encodes visitor data.
     */
    static encodeVisitorData(id: string, timestamp: number): string;
    /**
     * Encodes basic channel analytics parameters.
     */
    static encodeChannelAnalyticsParams(channel_id: string): string;
    /**
     * Encodes search filters.
     */
    static encodeSearchFilters(filters: {
        upload_date?: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year';
        type?: 'all' | 'video' | 'channel' | 'playlist' | 'movie';
        duration?: 'all' | 'short' | 'medium' | 'long';
        sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count';
    }): string;
    /**
     * Encodes YouTube Music search filters.
     */
    static encodeMusicSearchFilters(filters: {
        type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';
    }): string;
    /**
     * Encodes livechat message parameters.
     */
    static encodeMessageParams(channel_id: string, video_id: string): string;
    /**
     * Encodes comment section parameters.
     */
    static encodeCommentsSectionParams(video_id: string, options?: {
        type?: number;
        sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST';
    }): string;
    /**
     * Encodes comment replies parameters.
     */
    static encodeCommentRepliesParams(video_id: string, comment_id: string): string;
    /**
     * Encodes comment parameters.
     */
    static encodeCommentParams(video_id: string): string;
    /**
     * Encodes comment reply parameters.
     */
    static encodeCommentReplyParams(comment_id: string, video_id: string): string;
    /**
     * Encodes comment action parameters.
     */
    static encodeCommentActionParams(type: number, args?: {
        comment_id?: string;
        video_id?: string;
        text?: string;
        target_language?: string;
    }): string;
    /**
     * Encodes notification preference parameters.
     */
    static encodeNotificationPref(channel_id: string, index: number): string;
    /**
     * Encodes a custom thumbnail payload.
     */
    static encodeCustomThumbnailPayload(video_id: string, bytes: Uint8Array): Uint8Array;
    /**
     * Encodes sound info parameters.
     */
    static encodeSoundInfoParams(id: string): string;
}
export default Proto;
