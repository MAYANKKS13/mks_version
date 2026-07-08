import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { MusicPlayerService } from '../services/music-player.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  constructor(
    public musicService: MusicPlayerService,
     public favoriteService: FavoriteService
  ){
  
  }

  tt: string = 'assets/sounds/red/22.mp3';
  ikywit: string = 'assets/sounds/red/ikywit.mp3';
  wanegbt: string = 'assets/sounds/red/wanegbt.mp3';
  fifteen: string = 'assets/sounds/fearless/fifteen.mp3';

  songs : Song[] = [
    {
      name: '22',
      url: this.tt,
      album: 'Red',
      image:'assets/images/red/22.jfif'
    },
    {
      name: 'I Knew You Were Trouble',
      url: this.ikywit,
      album: 'Red',
      image:'assets/images/red/ikywit.jfif'
    },
    {
      name: 'We Are Never Ever Getting Back Together',
      url: this.wanegbt,
      album: 'Red',
      image:'assets/images/red/wanegbt.jfif'
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
