import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { SongCatalogService } from './services/song-catalog.service';
import { MusicPlayerService } from './services/music-player.service';
import { Song } from './models/song';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('navbarCollapse')
  navbarCollapse!: ElementRef;

  title = 'musicapp';
  searchQuery: string = '';
  searchResults: Song[] = [];
  showResults: boolean = false;

  constructor(
    private songCatalog: SongCatalogService,
    private musicPlayer: MusicPlayerService
  ) {}

  closeNavbar() {
    if (this.navbarCollapse) {
      const navbar = this.navbarCollapse.nativeElement;
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);
      bsCollapse.hide();
    }
  }

  onSearchChange(): void {
    if (this.searchQuery.trim().length > 0) {
      this.searchResults = this.songCatalog.searchSongs(this.searchQuery);
      this.showResults = true;
    } else {
      this.searchResults = [];
      this.showResults = false;
    }
  }

  playSearchedSong(song: Song): void {
    this.musicPlayer.playSong(song, this.songCatalog.getAllSongs());
    this.searchQuery = '';
    this.showResults = false;
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.showResults = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.search-container')) {
      this.showResults = false;
    }
  }
}
