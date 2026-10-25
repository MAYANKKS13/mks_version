import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private STORAGE_KEY = 'favoriteSongs';
  private favoritesSubject = new BehaviorSubject<Song[]>(this.loadFavoritesFromStorage());
  favorites$: Observable<Song[]> = this.favoritesSubject.asObservable();

  constructor() { }

  private loadFavoritesFromStorage(): Song[] {
    try {
      const songs = localStorage.getItem(this.STORAGE_KEY);
      return songs ? JSON.parse(songs) : [];
    } catch {
      return [];
    }
  }

  getFavorites(): Song[] {
    return this.favoritesSubject.value;
  }

  isFavorite(song: Song): boolean {
    return this.getFavorites().some(
      fav => fav.url === song.url
    );
  }

  toggleFavorite(song: Song): void {
    let favorites = [...this.getFavorites()];
    const index = favorites.findIndex(fav => fav.url === song.url);
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(song);
    }

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(favorites)
    );
    this.favoritesSubject.next(favorites);
  }

  removeFavorite(song: Song): void {
    const favorites = this.getFavorites().filter(fav => fav.url !== song.url);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }

  clearFavorites(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.favoritesSubject.next([]);
  }
}
