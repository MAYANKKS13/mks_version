import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { FavoriteService } from '../services/favorite.service';
import { MusicPlayerService } from '../services/music-player.service';
import { SongCatalogService } from '../services/song-catalog.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  songs: Song[] = [];
  currentSong: Song | null = null;
  currentTime: number = 0;

  constructor(
    public favoriteService: FavoriteService,
    public musicService: MusicPlayerService,
    private songCatalog: SongCatalogService
  ) {}

  ngOnInit(): void {
    this.favoriteService.favorites$.subscribe(favorites => {
      this.songs = favorites;
    });

    this.musicService.currentSong.subscribe(song => {
      this.currentSong = song;
    });

    this.musicService.currentTime.subscribe(time => {
      this.currentTime = time;
    });
  }

  playSong(song: Song): void {
    this.musicService.playSong(song, this.songs);
  }

  isCurrentSong(song: Song): boolean {
    return this.currentSong?.url === song.url;
  }

  getCurrentLyric(name: string): string {
    return this.songCatalog.getCurrentLyric(name, this.currentTime);
  }

  removeFavorite(song: Song, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.favoriteService.toggleFavorite(song);
  }

  playAll(): void {
    if (this.songs.length > 0) {
      this.musicService.playSong(this.songs[0], this.songs);
    }
  }

  clearAll(): void {
    if (confirm('Are you sure you want to remove all songs from your favorites?')) {
      this.favoriteService.clearFavorites();
    }
  }
}
