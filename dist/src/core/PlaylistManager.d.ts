import Actions from './Actions';
declare class PlaylistManager {
    #private;
    constructor(actions: Actions);
    /**
     * Creates a playlist.
     */
    create(title: string, video_ids: string[]): Promise<{
        success: boolean;
        status_code: number;
        playlist_id: any;
        data: any;
    }>;
    /**
     * Deletes a given playlist.
     */
    delete(playlist_id: string): Promise<{
        playlist_id: string;
        success: boolean;
        status_code: number;
        data: any;
    }>;
    /**
     * Adds videos to a given playlist.
     */
    addVideos(playlist_id: string, video_ids: string[]): Promise<{
        playlist_id: string;
        action_result: any;
    }>;
    /**
     * Removes videos from a given playlist.
     */
    removeVideos(playlist_id: string, video_ids: string[]): Promise<{
        playlist_id: string;
        action_result: any;
    }>;
    /**
     * Moves a video to a new position within a given playlist.
     */
    moveVideo(playlist_id: string, moved_video_id: string, predecessor_video_id: string): Promise<{
        playlist_id: string;
        action_result: any;
    }>;
}
export default PlaylistManager;
