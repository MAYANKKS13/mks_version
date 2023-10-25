import { Component } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent {

  tt: string = '../../assets/sounds/red/22.mp3';
  ikywit: string = '../../assets/sounds/red/ikywit.mp3';
  wanegbt: string = '../../assets/sounds/red/wanegbt.mp3';
  fifteen: string = '../../assets/sounds/fearless/fifteen.mp3';

  isPlaying: HTMLAudioElement | null = null;
   
  
  onPlay(event: Event) {
    if (this.isPlaying && this.isPlaying !== event.target) {
      this.isPlaying.pause(); 
      this.isPlaying.currentTime = 0;
    }
    this.isPlaying = event.target as HTMLAudioElement;
  }


  onPause(event: Event) {
    if (this.isPlaying === event.target) {
      this.isPlaying = null; 
    }
  }

}
