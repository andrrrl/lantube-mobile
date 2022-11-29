export interface PlayerStats {
  player?: string;
  videoId?: any;
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
