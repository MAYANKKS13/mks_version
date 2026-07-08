export interface Song {
  name: string;
  url: string;
  album: string;
  image?: string;
  audio?: HTMLAudioElement;
}