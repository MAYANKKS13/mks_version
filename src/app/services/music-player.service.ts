import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  isPlaying = new BehaviorSubject<boolean>(false);
  shuffle = new BehaviorSubject<boolean>(false);
  repeatMode = new BehaviorSubject<number>(0);
  playlist: Song[] = [];
  currentIndex: number = 0;
  currentSongName = new BehaviorSubject<string>('No song playing');
  currentAlbumName = new BehaviorSubject<string>('Music App');
  currentSong = new BehaviorSubject<Song | null>(null);
  currentTime = new BehaviorSubject<number>(0);
  duration = new BehaviorSubject<number>(0);
  volume = new BehaviorSubject<number>(1);
  isMuted = new BehaviorSubject<boolean>(false);
  playbackRate = new BehaviorSubject<number>(1);
  currentLyric = new BehaviorSubject<string>('');
  private previousVolume: number = 1;

  audio = new Audio();

  constructor(private zone: NgZone) { 
    this.audio.volume = 1;

    this.audio.ontimeupdate = () => {
      this.zone.run(() => {
        this.currentTime.next(this.audio.currentTime);
        this.updateCurrentLyric();
      });
    };

    this.audio.onloadedmetadata = () => {
      this.zone.run(() => {
        this.duration.next(this.audio.duration);
      });
    };

    this.audio.onplay = () => {
      this.zone.run(() => {
        this.isPlaying.next(true);
        this.updateCurrentLyric();
      });
    };

    this.audio.onpause = () => {
      this.zone.run(() => {
        this.isPlaying.next(false);
      });
    };

    this.audio.onended = () => {
      this.zone.run(() => {
        switch (this.repeatMode.value) {
          case 0:
            this.playNextSong();
            break;
          case 1:
            this.playNextSong();
            break;
          case 2:
            this.audio.currentTime = 0;
            this.audio.play();
            break;
        }
      });
    };
  }

  updateCurrentLyric() {
    const song = this.currentSong.value;
    if (!song) {
      this.currentLyric.next('');
      return;
    }
    const time = this.audio.currentTime || 0;
    if (song.timedLyrics && song.timedLyrics.length > 0) {
      if (time < song.timedLyrics[0].time) {
        this.currentLyric.next('♪ Intro • Music Playing ♪');
        return;
      }
      for (let i = song.timedLyrics.length - 1; i >= 0; i--) {
        if (time >= song.timedLyrics[i].time) {
          this.currentLyric.next(song.timedLyrics[i].text);
          return;
        }
      }
      this.currentLyric.next(song.timedLyrics[0].text);
    } else {
      this.currentLyric.next(song.lyrics || '♪ Music Playing ♪');
    }
  }

  playNextSong(){
    if(this.playlist.length === 0){
      return;
    }

    if(this.shuffle.value){
      let random;
      do{
          random = Math.floor(Math.random()*this.playlist.length);
      }
      while(
          this.playlist.length > 1 &&
          random === this.currentIndex
      );
      this.currentIndex = random;
    }
    else{
      if(this.currentIndex === -1){
          this.currentIndex = 0;
      }
      else{
          this.currentIndex++;
      }
      if (this.currentIndex >= this.playlist.length) {
            if (this.repeatMode.value === 1) {
                this.currentIndex = 0;
            }
            else {
                this.audio.pause();
                this.currentTime.next(0);
                this.isPlaying.next(false);
                this.currentLyric.next('');
                return;
            }
        }
   }
    this.playSong(this.playlist[this.currentIndex], this.playlist);
  }

  playPreviousSong(){
    if(this.playlist.length === 0){
        return;
    }
    if(this.currentIndex === -1){
        return;
    }
    if(this.currentIndex === 0){
        return;
    }

    this.currentIndex--;
    this.playSong(this.playlist[this.currentIndex], this.playlist);
  } 

  togglePlayPause(){
    if(!this.audio.src){
        return;
    }
    if(this.audio.paused){
        this.audio.play();
    }
    else{
        this.audio.pause();
    }
  }

  loadPlaylist(songs: Song[]){
    this.playlist = songs;
    this.currentIndex = -1;

    this.currentSong.next(null);
    this.currentSongName.next('No song playing');
    this.currentAlbumName.next('Music App');
    this.currentLyric.next('');

    this.currentTime.next(0);
    this.duration.next(0);
  }

  seek(seconds: number) {
    if (!this.audio.src) {
        return;
    }
    this.audio.currentTime = seconds; 
    this.currentTime.next(seconds);
    this.updateCurrentLyric();
  }

  setVolume(volume: number) {
    const clamped = Math.max(0, Math.min(1, volume));
    this.audio.volume = clamped;
    this.volume.next(clamped);
    if (clamped > 0 && this.isMuted.value) {
      this.isMuted.next(false);
    }
  }

  toggleMute() {
    if (this.isMuted.value) {
      const restore = this.previousVolume > 0 ? this.previousVolume : 1;
      this.audio.volume = restore;
      this.volume.next(restore);
      this.isMuted.next(false);
    } else {
      this.previousVolume = this.audio.volume > 0 ? this.audio.volume : 1;
      this.audio.volume = 0;
      this.volume.next(0);
      this.isMuted.next(true);
    }
  }

  playSong(song: Song, playlist: Song[]) {
    if (this.audio.src.endsWith(song.url)) {
        this.togglePlayPause();
        return;
    }
    this.playlist = playlist;
    this.currentIndex = this.playlist.findIndex(s => s.url === song.url);
    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.src = song.url;
    this.currentTime.next(0);
    this.currentSongName.next(song.name);
    this.currentAlbumName.next(song.album);
    this.currentSong.next(song);
    this.updateCurrentLyric();

    this.audio.play();
  }

  toggleShuffle(){
    this.shuffle.next(!this.shuffle.value);
  }

  toggleRepeat() {
    let mode = this.repeatMode.value;
    mode++;
    if (mode > 2) {
        mode = 0;
    }
    this.repeatMode.next(mode);
  }

  setPlaybackRate(rate: number) {
    this.audio.playbackRate = rate;
    this.playbackRate.next(rate);
  }
}
