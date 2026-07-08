import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { MusicPlayerService } from '../services/music-player.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-sound2',
  templateUrl: './sound2.component.html',
  styleUrls: ['./sound2.component.css']
})
export class Sound2Component implements OnInit {

  constructor(
    public musicService: MusicPlayerService,
     public favoriteService: FavoriteService
  ){
  
  }

  lovestory: string = 'assets/sounds/fearless/lovestory.mp3';
  ybwm: string = 'assets/sounds/fearless/ybwm.mp3';
  whitehorse: string = 'assets/sounds/fearless/whitehorse.mp3';
  fifteen: string = 'assets/sounds/fearless/fifteen.mp3';

  songs : Song[] = [
          {
            name: 'Love Story',
            url: this.lovestory,
            album: 'Fearless',
            image:'assets/images/fearless/lovestory.jfif'
          },
          {
            name: 'You Belong with Me',
            url: this.ybwm,
            album: 'Fearless',
            image:'assets/images/fearless/ybwm.jfif'
          },
          {
            name: 'White Horse',
            url: this.whitehorse,
            album: 'Fearless',
            image:'assets/images/fearless/whitehorse.jfif'
          },
          {
            name: 'Fifteen',
            url: this.fifteen,
            album: 'Fearless',
            image:'assets/images/fearless/fifteen.jfif'
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
