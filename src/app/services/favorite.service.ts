import { Injectable } from '@angular/core';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private STORAGE_KEY = 'favoriteSongs';

  constructor() { }

  getFavorites(): Song[] {
    const songs = localStorage.getItem(this.STORAGE_KEY);
    return songs ? JSON.parse(songs) : [];

  }

  isFavorite(song: Song): boolean {
    return this.getFavorites().some(
      fav => fav.url === song.url
    );

  }

  toggleFavorite(song: Song): void {
    let favorites = this.getFavorites();
    if(this.isFavorite(song)){
      favorites = favorites.filter(
        fav => fav.url !== song.url
      );
    }

    else{
      favorites.push(song);
    }

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(favorites)
    );

  }

}