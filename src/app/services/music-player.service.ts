import { Injectable } from '@angular/core';
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

  audio = new Audio();

  constructor() { 
    this.audio.ontimeupdate = () => {
        this.currentTime.next(this.audio.currentTime);
    };

    this.audio.onloadedmetadata = () => {
        this.duration.next(this.audio.duration);
    };

    this.audio.onplay = () => {
        this.isPlaying.next(true);
    };

    this.audio.onpause = () => {
        this.isPlaying.next(false);
    };

    this.audio.onended = () => {
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
    };
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

    this.currentSongName.next('No song playing');
    this.currentAlbumName.next('Music App');

    this.currentTime.next(0);
    this.duration.next(0);

  }

  seek(seconds: number) {
    if (!this.audio.src) {
        return;
    }
    this.audio.currentTime = seconds; 
    this.currentTime.next(seconds);

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

}