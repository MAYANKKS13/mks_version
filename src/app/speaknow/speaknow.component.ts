import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { FavoriteService } from '../services/favorite.service';
import { MusicPlayerService } from '../services/music-player.service';

@Component({
  selector: 'app-speaknow',
  templateUrl: './speaknow.component.html',
  styleUrls: ['./speaknow.component.css']
})
export class SpeaknowComponent implements OnInit {

  constructor(
    public musicService: MusicPlayerService,
     public favoriteService: FavoriteService
  ){
  
  }
   
  btd: string = 'assets/sounds/speaknow/btd.mp3';
  enchanted: string = 'assets/sounds/speaknow/enchanted.mp3';
  haunted: string = 'assets/sounds/speaknow/haunted.mp3';
  lastkiss: string = 'assets/sounds/speaknow/lastkiss.mp3';
  ll: string = 'assets/sounds/speaknow/ll.mp3';
  mean: string = 'assets/sounds/speaknow/mean.mp3';
  mine: string = 'assets/sounds/speaknow/mine.mp3';
  sparksfly: string = 'assets/sounds/speaknow/sparksfly.mp3';

  songs : Song[] = [
              {
                name: 'Back to December',
                url: this.btd,
                album: 'Speak Now',
                image:'assets/images/speaknow/btd.jfif'
              },
              {
                name: 'Enchanted',
                url: this.enchanted,
                album: 'Speak Now',
                image:'assets/images/speaknow/enchanted.jpg'
              },
              {
                name: 'Last Kiss',
                url: this.lastkiss,
                album: 'Speak Now',
                image:'assets/images/speaknow/lastkiss.jfif'
              },
              {
                name: 'Haunted',
                url: this.haunted,
                album: 'Speak Now',
                image:'assets/images/speaknow/haunted.jfif'
              },
              {
                name: 'Mean',
                url: this.mean,
                album: 'Speak Now',
                image:'assets/images/speaknow/mean.jfif'
              },
              {
                name: 'Long Live',
                url: this.ll,
                album: 'Speak Now',
                image:'assets/images/speaknow/ll.jfif'
              },
              {
                name: 'Mine',
                url: this.mine,
                album: 'Speak Now',
                image:'assets/images/speaknow/mine.jfif'
              },
              {
                name: 'Sparks Fly',
                url: this.sparksfly,
                album: 'Speak Now',
                image:'assets/images/speaknow/sparksfly.jfif'
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

}
