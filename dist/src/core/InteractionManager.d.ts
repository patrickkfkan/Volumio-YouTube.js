import Actions from './Actions';
declare class InteractionManager {
    #private;
    constructor(actions: Actions);
    /**
     * Likes a given video.
     */
    like(video_id: string): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Dislikes a given video.
     */
    dislike(video_id: string): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Removes a like/dislike.
     */
    removeLike(video_id: string): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Subscribes to a given channel.
     */
    subscribe(channel_id: string): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Unsubscribes from a given channel.
     */
    unsubscribe(channel_id: string): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Posts a comment on a given video.
     */
    comment(video_id: string, text: string): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Translates a given text using YouTube's comment translate feature.
     *
     * @param target_language - an ISO language code
     * @param args - optional arguments
     */
    translate(text: string, target_language: string, args?: {
        video_id?: string;
        comment_id?: string;
    }): Promise<{
        success: boolean;
        status_code: number;
        translated_content: any;
        data: any;
    }>;
    /**
     * Changes notification preferences for a given channel.
     * Only works with channels you are subscribed to.
     */
    setNotificationPreferences(channel_id: string, type: 'PERSONALIZED' | 'ALL' | 'NONE'): Promise<{
        success: boolean;
        status_code: number;
        data: any;
    }>;
}
export default InteractionManager;
