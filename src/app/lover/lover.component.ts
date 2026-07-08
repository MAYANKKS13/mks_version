import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { MusicPlayerService } from '../services/music-player.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-lover',
  templateUrl: './lover.component.html',
  styleUrls: ['./lover.component.css']
})
export class LoverComponent implements OnInit  {

  constructor(
  public musicService: MusicPlayerService,
   public favoriteService: FavoriteService
){

}
   
  calmdown: string = 'assets/sounds/lover/calmdown.mp3';
  cornelliastreet: string = 'assets/sounds/lover/cornelliastreet.mp3';
  cruelsummer: string = 'assets/sounds/lover/cruelsummer.mp3';
  daylight: string = 'assets/sounds/lover/daylight.mp3';
  londonboy: string = 'assets/sounds/lover/londonboy.mp3';
  lover: string = 'assets/sounds/lover/lover.mp3';
  paperrings: string = 'assets/sounds/lover/paperrings.mp3';
  theman: string = 'assets/sounds/lover/theman.mp3';
  met: string = 'assets/sounds/lover/met.mp3';

  songs : Song[] = [
            {
              name: 'Lover',
              url: this.lover,
              album: 'Lover',
              image:'assets/images/lover/lover.jfif'
            },
            {
              name: 'Daylight',
              url: this.daylight,
              album: 'Lover',
              image:'assets/images/lover/daylight.jfif'
            },
            {
              name: 'Me!',
              url: this.met,
              album: 'Lover',
              image:'assets/images/lover/me.jfif'
            },
            {
              name: 'You Need to Calm Down',
              url: this.calmdown,
              album: 'Lover',
              image:'assets/images/lover/calmdown.jfif'
            },
            {
              name: 'Cornellia Street',
              url: this.cornelliastreet,
              album: 'Lover',
              image:'assets/images/lover/cornelliastreet.jfif'
            },
            {
              name: 'Cruel Summer',
              url: this.cruelsummer,
              album: 'Lover',
              image:'assets/images/lover/cruelsummer.jfif'
            },
            {
              name: 'London Boy',
              url: this.londonboy,
              album: 'Lover',
              image:'assets/images/lover/cornelliastreet.jfif'
            },
            {
              name: 'Paper Rings',
              url: this.paperrings,
              album: 'Lover',
              image:'assets/images/lover/daylight.jfif'
            },
            {
              name: 'The Man',
              url: this.theman,
              album: 'Lover',
              image:'assets/images/lover/the man.jfif'
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
