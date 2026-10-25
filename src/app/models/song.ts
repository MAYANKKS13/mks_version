export interface LyricLine {
  time: number;
  text: string;
}

export interface Song {
  name: string;
  url: string;
  album: string;
  image?: string;
  audio?: HTMLAudioElement;
  lyrics?: string;
  timedLyrics?: LyricLine[];
}
