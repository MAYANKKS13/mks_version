import { Component, OnInit, HostListener } from '@angular/core';
import { MusicPlayerService } from '../services/music-player.service';
import { Song } from '../models/song';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  currentSongName: string = 'No song playing';
  albumName: string = 'Music App';
  currentSongImage: string | undefined = '';
  playing = false;
  currentTime = 0;
  duration = 0;
  isPlaying: boolean = false;
  volume: number = 1;
  isMuted: boolean = false;
  showQueue: boolean = false;
  currentRate: number = 1;
  playbackRates: number[] = [1, 1.25, 1.5, 0.75];

  // Micro side-popups for Shuffle & Repeat
  shuffleToastMessage: string = '';
  shuffleToastVisible: boolean = false;
  private shuffleTimer: any = null;

  repeatToastMessage: string = '';
  repeatToastVisible: boolean = false;
  private repeatTimer: any = null;

  constructor(
    public musicService: MusicPlayerService
  ){}

  shuffle = this.musicService.shuffle;
  repeatMode = this.musicService.repeatMode;

  toggleShuffle() {
    this.musicService.toggleShuffle();
    const isShuffled = this.musicService.shuffle.value;
    this.showShuffleToast(isShuffled ? '🔀 Shuffle: ON' : '➡️ Shuffle: OFF');
  }

  toggleRepeat() {
    this.musicService.toggleRepeat();
    const mode = this.musicService.repeatMode.value;
    if (mode === 0) {
      this.showRepeatToast('➡️ Repeat: OFF');
    } else if (mode === 1) {
      this.showRepeatToast('🔁 Repeat: ALL');
    } else if (mode === 2) {
      this.showRepeatToast('🔂 Repeat: THIS SONG');
    }
  }

  showShuffleToast(msg: string) {
    if (this.shuffleTimer) clearTimeout(this.shuffleTimer);
    this.shuffleToastMessage = msg;
    this.shuffleToastVisible = true;
    this.shuffleTimer = setTimeout(() => {
      this.shuffleToastVisible = false;
    }, 2400);
  }

  showRepeatToast(msg: string) {
    if (this.repeatTimer) clearTimeout(this.repeatTimer);
    this.repeatToastMessage = msg;
    this.repeatToastVisible = true;
    this.repeatTimer = setTimeout(() => {
      this.repeatToastVisible = false;
    }, 2400);
  }

  ngOnInit() {
    this.musicService.currentSongName.subscribe(song => {
      this.currentSongName = song;
    });

    this.musicService.currentAlbumName.subscribe(album => {
      this.albumName = album;
    });

    this.musicService.currentSong.subscribe(song => {
      this.currentSongImage = song?.image;
    });

    this.musicService.isPlaying.subscribe(value => {
      this.playing = value;
      this.isPlaying = value;
    });

    this.musicService.currentTime.subscribe(time => {
      this.currentTime = time;
    });

    this.musicService.duration.subscribe(duration => {
      this.duration = duration;
    });

    this.musicService.volume.subscribe(vol => {
      this.volume = vol;
    });

    this.musicService.isMuted.subscribe(muted => {
      this.isMuted = muted;
    });

    this.musicService.playbackRate.subscribe(rate => {
      this.currentRate = rate;
    });
  }

  togglePlayPause() {
    this.musicService.togglePlayPause();  
  }

  nextSong() {
    this.musicService.playNextSong();
  }

  previousSong() {
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

  onSeek(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    this.musicService.seek(value);
  }

  onVolumeChange(event: Event) {
    const val = Number((event.target as HTMLInputElement).value);
    this.musicService.setVolume(val);
  }

  toggleMute() {
    this.musicService.toggleMute();
  }

  toggleQueue() {
    this.showQueue = !this.showQueue;
  }

  closeQueue() {
    this.showQueue = false;
  }

  playQueueSong(song: Song) {
    this.musicService.playSong(song, this.musicService.playlist);
  }

  cyclePlaybackRate() {
    const currentIdx = this.playbackRates.indexOf(this.currentRate);
    const nextIdx = (currentIdx + 1) % this.playbackRates.length;
    const newRate = this.playbackRates[nextIdx];
    this.musicService.setPlaybackRate(newRate);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
      return;
    }

    if (event.code === 'Space') {
      event.preventDefault();
      this.togglePlayPause();
    } else if (event.code === 'ArrowRight') {
      event.preventDefault();
      this.musicService.seek(Math.min(this.duration, this.currentTime + 5));
    } else if (event.code === 'ArrowLeft') {
      event.preventDefault();
      this.musicService.seek(Math.max(0, this.currentTime - 5));
    } else if (event.key === 'm' || event.key === 'M') {
      this.toggleMute();
    } else if (event.key === 'n' || event.key === 'N') {
      this.nextSong();
    } else if (event.key === 'p' || event.key === 'P') {
      this.previousSong();
    }
  }
}
