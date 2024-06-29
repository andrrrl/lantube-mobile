export interface Video {
  videoId: string;
  title: string;
  userTitle?: string;
  url: string;
  img: string;
  duration: {
    timestamp: string
  };
  order: number;
  hasError?: boolean
}

export interface VideoResult {
  title: string;
  url: string;
  duration: {
    timestamp: string
  };
  img: string;
}