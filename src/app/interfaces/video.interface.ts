export interface Video {
  videoId: string;
  title: string;
  url: string;
  img: string;
  duration: string;
  order: number;
  hasError?: boolean
}

export interface VideoResult {
  title: string;
  url: string;
  duration: string;
  img: string;
}
