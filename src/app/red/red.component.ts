import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { MusicPlayerService } from '../services/music-player.service';
import { FavoriteService } from '../services/favorite.service';
import { SongCatalogService, AlbumEraInfo } from '../services/song-catalog.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  eraInfo: AlbumEraInfo | undefined;
  songs: Song[] = [];
  currentIndex: number = 0;
  currentSong: Song | null = null;

  constructor(
    public musicService: MusicPlayerService,
    public favoriteService: FavoriteService,
    private songCatalog: SongCatalogService
  ){
    this.eraInfo = this.songCatalog.getEraInfo('Red');
    this.songs = this.songCatalog.getSongsByAlbum('Red');
  }

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

  playAll() {
    if (this.songs.length > 0) {
      this.musicService.playSong(this.songs[0], this.songs);
    }
  }

  get likedCount(): number {
    return this.songs.filter(s => this.favoriteService.isFavorite(s)).length;
  }

  get likedPercent(): number {
    return this.songs.length ? Math.round((this.likedCount / this.songs.length) * 100) : 0;
  }

  shufflePlay() {
    if (this.songs.length > 0) {
      if (!this.musicService.shuffle.value) {
        this.musicService.toggleShuffle();
      }
      const randomIdx = Math.floor(Math.random() * this.songs.length);
      this.musicService.playSong(this.songs[randomIdx], this.songs);
    }
  }
}
