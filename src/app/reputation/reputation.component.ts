import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { MusicPlayerService } from '../services/music-player.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-reputation',
  templateUrl: './reputation.component.html',
  styleUrls: ['./reputation.component.css']
})
export class ReputationComponent implements OnInit {
  
  constructor(
    public musicService: MusicPlayerService,
     public favoriteService: FavoriteService
  ){
  
  }

  blameme: string = 'assets/sounds/reputation/blameme.mp3';
  delicate: string = 'assets/sounds/reputation/delicate.mp3';
  endgame: string = 'assets/sounds/reputation/endgame.mp3';
  gatewaycar: string = 'assets/sounds/reputation/gatewaycar.mp3';
  gorgeous: string = 'assets/sounds/reputation/gorgeous.mp3';
  kingheart: string = 'assets/sounds/reputation/kingheart.mp3';
  lwymmd: string = 'assets/sounds/reputation/lwymmd.mp3';
  nicethings: string = 'assets/sounds/reputation/nicethings.mp3';

  songs : Song[] = [
      {
        name: 'Delicate',
        url: this.delicate,
        album: 'Reputation',
        image:'assets/images/reputation/delicate.jfif'
      },
      {
        name: 'Gateway Car',
        url: this.gatewaycar,
        album: 'Reputation',
        image:'assets/images/reputation/reputation.jfif'
      },
      {
        name: 'Look What You Made Me Do',
        url: this.lwymmd,
        album: 'Reputation',
        image:'assets/images/reputation/lwymmd.jfif'
        
      },
      {
        name: 'Gorgeous',
        url: this.gorgeous,
        album: 'Reputation',
        image:'assets/images/reputation/gorgeous.jfif'
      },
      {
        name: 'End Game',
        url: this.endgame,
        album: 'Reputation',
        image:'assets/images/reputation/endgame.jfif'
      },
      {
        name: 'This Is Why We Can\'t Have Nice Things',
        url: this.nicethings,
        album: 'Reputation',
        image:'assets/images/reputation/reputation.jfif'
      },  
      {
        name: 'Blame Me',
        url: this.blameme,
        album: 'Reputation',
        image:'assets/images/reputation/blameme.jfif'
      },    
      {
        name: 'King Heart',
        url: this.kingheart,
        album: 'Reputation',
        image:'assets/images/reputation/reputation.jfif'
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
