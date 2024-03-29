import type { UpdateVideoMetadataOptions } from '../types/index.js';
import * as VisitorData from './generated/messages/youtube/VisitorData.js';
declare class Proto {
    static encodeVisitorData(id: string, timestamp: number): string;
    static decodeVisitorData(visitor_data: string): VisitorData.Type;
    static encodeChannelAnalyticsParams(channel_id: string): string;
    static encodeSearchFilters(filters: {
        upload_date?: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year';
        type?: 'all' | 'video' | 'channel' | 'playlist' | 'movie';
        duration?: 'all' | 'short' | 'medium' | 'long';
        sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count';
        features?: ('hd' | 'subtitles' | 'creative_commons' | '3d' | 'live' | 'purchased' | '4k' | '360' | 'location' | 'hdr' | 'vr180')[];
    }): string;
    static encodeMusicSearchFilters(filters: {
        type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';
    }): string;
    static encodeMessageParams(channel_id: string, video_id: string): string;
    static encodeCommentsSectionParams(video_id: string, options?: {
        type?: number;
        sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST';
    }): string;
    static encodeCommentParams(video_id: string): string;
    static encodeCommentActionParams(type: number, args?: {
        comment_id?: string;
        video_id?: string;
        text?: string;
        target_language?: string;
    }): string;
    static encodeNotificationPref(channel_id: string, index: number): string;
    static encodeVideoMetadataPayload(video_id: string, metadata: UpdateVideoMetadataOptions): Uint8Array;
    static encodeCustomThumbnailPayload(video_id: string, bytes: Uint8Array): Uint8Array;
    static encodeHashtag(hashtag: string): string;
}
export default Proto;
