import { Component } from '@angular/core';

@Component({
  selector: 'app-lover',
  templateUrl: './lover.component.html',
  styleUrls: ['./lover.component.css']
})
export class LoverComponent {
   
  calmdown: string = '../../assets/sounds/lover/calmdown.mp3';
  cornelliastreet: string = '../../assets/sounds/lover/cornelliastreet.mp3';
  cruelsummer: string = '../../assets/sounds/lover/cruelsummer.mp3';
  daylight: string = '../../assets/sounds/lover/daylight.mp3';
  londonboy: string = '../../assets/sounds/lover/londonboy.mp3';
  lover: string = '../../assets/sounds/lover/lover.mp3';
  paperrings: string = '../../assets/sounds/lover/paperrings.mp3';
  theman: string = '../../assets/sounds/lover/theman.mp3';
  met: string = '../../assets/sounds/lover/met.mp3';

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
