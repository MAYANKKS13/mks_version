import { Component } from '@angular/core';

export interface Album {
  name: string;
  year: string;
  theme: string;
  image: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  albums: Album[] = [
    {
      name: '1989',
      year: '2014',
      theme: 'Synth-Pop Era',
      image: 'assets/images/1989/blankspace.jfif',
      route: '/1989',
      color: '#0288d1'
    },
    {
      name: 'Fearless',
      year: '2008',
      theme: 'Golden Country Era',
      image: 'assets/images/fearless/lovestory.jfif',
      route: '/fearless',
      color: '#fbc02d'
    },
    {
      name: 'Red',
      year: '2012',
      theme: 'Heartbreak & Pop Era',
      image: 'assets/images/red/22.jfif',
      route: '/red',
      color: '#d32f2f'
    },
    {
      name: 'Speak Now',
      year: '2010',
      theme: 'Enchanted Fairytale Era',
      image: 'assets/images/speaknow/enchanted.jpg',
      route: '/speaknow',
      color: '#7b1fa2'
    },
    {
      name: 'Lover',
      year: '2019',
      theme: 'Pastel Dream Era',
      image: 'assets/images/lover/lover.jfif',
      route: '/lover',
      color: '#ec407a'
    },
    {
      name: 'Reputation',
      year: '2017',
      theme: 'Dark & Edgy Era',
      image: 'assets/images/reputation/reputation.jpg',
      route: '/reputation',
      color: '#37474f'
    },
    {
      name: 'Folklore',
      year: '2020',
      theme: 'Indie Folk & Cabin Era',
      image: 'assets/images/folklore/cardigan.jfif',
      route: '/folklore',
      color: '#2d4a3e'
    },
    {
      name: 'Midnights',
      year: '2022',
      theme: 'Dream Pop & Midnights Era',
      image: 'assets/images/midnights/antihero.jfif',
      route: '/midnights',
      color: '#1d264f'
    }
  ];

  scrollToAlbums(): void {
    const el = document.getElementById('albums-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
