export interface IPlayerStats {
    player?: string;
    videoId?: string;
    videoInfo?: {
        videoId: string;
        title: string;
        url: string;
        img: string;
        order: string;
    };
    status: string;
    playlist: boolean;
}
