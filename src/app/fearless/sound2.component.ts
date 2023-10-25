import { Component } from '@angular/core';

@Component({
  selector: 'app-sound2',
  templateUrl: './sound2.component.html',
  styleUrls: ['./sound2.component.css']
})
export class Sound2Component {

  lovestory: string = '../../assets/sounds/fearless/lovestory.mp3';
  ybwm: string = '../../assets/sounds/fearless/ybwm.mp3';
  whitehorse: string = '../../assets/sounds/fearless/whitehorse.mp3';
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
