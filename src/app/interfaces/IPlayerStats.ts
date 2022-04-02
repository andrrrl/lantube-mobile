export interface IPlayerStats {
  player?: string;
  videoId?: string;
  videoInfo?: {
    videoId: string;
    title: string;
    url: string;
    img: string;
  };
  status: 'playing' | 'stopped' | 'paused' | 'loading' | 'idle';
  playlist: boolean;
}
