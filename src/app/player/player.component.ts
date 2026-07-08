import { Component, OnInit } from '@angular/core';
import { MusicPlayerService } from '../services/music-player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  currentSongName: string = 'No song playing';
  albumName: string = 'Music App';
  playing = false;
  currentTime = 0;
  duration = 0;
  isPlaying: boolean = false;

  constructor(
    private musicService: MusicPlayerService
  ){}

  shuffle=this.musicService.shuffle;
  toggleShuffle(){
    this.musicService.toggleShuffle();
  }

  repeatMode = this.musicService.repeatMode;
  toggleRepeat() {
    this.musicService.toggleRepeat();
  }

  ngOnInit() {
    this.musicService.currentSongName.subscribe(song => {
      this.currentSongName = song;
    });

    this.musicService.currentAlbumName.subscribe(album => {
      this.albumName = album;
    });

    this.musicService.isPlaying.subscribe(value => {
      this.playing = value;
    });

    this.musicService.currentTime.subscribe(time => {
      this.currentTime = time;
    });

    this.musicService.duration.subscribe(duration => {
      this.duration = duration;
    });

    this.musicService.isPlaying.subscribe(value => {
      this.isPlaying = value;
    });
  }

  togglePlayPause(){
    this.musicService.togglePlayPause();  
}

nextSong(){
  this.musicService.playNextSong();
}

previousSong(){
  this.musicService.playPreviousSong();
}

formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) {
        return '0:00';
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  seek(event: Event) {
  const value = Number((event.target as HTMLInputElement).value);
  this.musicService.seek(value);
}

onSeek(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    this.musicService.seek(value);
}

}
