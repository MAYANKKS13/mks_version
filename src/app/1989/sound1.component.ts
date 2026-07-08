import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { FavoriteService } from '../services/favorite.service';
import { MusicPlayerService } from '../services/music-player.service';

@Component({
  selector: 'app-sound1',
  templateUrl: './sound1.component.html',
  styleUrls: ['./sound1.component.css']
})
export class Sound1Component implements OnInit {

  constructor(
    public musicService: MusicPlayerService,
     public favoriteService: FavoriteService
  ){
  
  }

  blankspace: string = 'assets/sounds/1989/blankspace.mp3';
  shakeitoff: string = 'assets/sounds/1989/shakeitoff.mp3';
  badblood: string = 'assets/sounds/1989/badblood.mp3';
  style: string = 'assets/sounds/1989/style.mp3';
  outofwoods: string = 'assets/sounds/1989/outofwoods.mp3';

  songs : Song[] = [
        {
          name: 'Blank Space',
          url: this.blankspace,
          album: '1989',
           image:'assets/images/1989/blankspace.jfif'
        },
        {
          name: 'Shake It Off',
          url: this.shakeitoff,
          album: '1989',
           image:'assets/images/1989/shakeitoff.jfif'
        },
        {
          name: 'Bad Blood',
          url: this.badblood,
          album: '1989',
           image:'assets/images/1989/badblood.jfif'
        },
        {
          name: 'Style',
          url: this.style,
          album: '1989',
           image:'assets/images/1989/style.jfif'
        },
        {
          name: 'Out of the Woods',
          url: this.outofwoods,
          album: '1989',
           image:'assets/images/1989/outofwoods.jfif'
        }
        ];


   currentIndex: number = 0;
   currentSong: Song | null = null;

  ngOnInit() {
    this.musicService.currentSong.subscribe(song => {
        this.currentSong = song;
    });
}

  playSong(song: Song) {
      this.musicService.playSong(song, this.songs);
  }

  isCurrentSong(song: Song): boolean {
    return this.currentSong?.url === song.url;
}
























  // audio:HTMLAudioElement = new Audio();

// songs:string[] = [
//    '../../assets/sound1/blankspace.mp3',
//    '../../assets/sound1/clauv.mp3',
// ];

//   selectedSong:string = this.songs[0];

//   currentAudio:HTMLAudioElement | null = null;

//   playSound(){

//     if(this.currentAudio){
//       this.currentAudio.pause();
//     }


//     this.audio.src = this.selectedSong;
//     this.audio.load();
//     this.audio.play();

//     this.currentAudio = this.audio;

//   }

//   pauseSound() {
//     if (this.currentAudio) {
//       this.currentAudio.pause();
//     }
//   }

//   getSongName(songPath: string): string {
//     // Extract the filename from the path
//     const parts = songPath.split('/');
//     return parts[parts.length - 1];
//   }

}

