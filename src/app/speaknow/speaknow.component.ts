import { Component } from '@angular/core';

@Component({
  selector: 'app-speaknow',
  templateUrl: './speaknow.component.html',
  styleUrls: ['./speaknow.component.css']
})
export class SpeaknowComponent {
   
  btd: string = '../../assets/sounds/speaknow/btd.mp3';
  enchanted: string = '../../assets/sounds/speaknow/enchanted.mp3';
  haunted: string = '../../assets/sounds/speaknow/haunted.mp3';
  lastkiss: string = '../../assets/sounds/speaknow/lastkiss.mp3';
  ll: string = '../../assets/sounds/speaknow/ll.mp3';
  mean: string = '../../assets/sounds/speaknow/mean.mp3';
  mine: string = '../../assets/sounds/speaknow/mine.mp3';
  sparksfly: string = '../../assets/sounds/speaknow/sparksfly.mp3';

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
