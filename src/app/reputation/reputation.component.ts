import { Component } from '@angular/core';

@Component({
  selector: 'app-reputation',
  templateUrl: './reputation.component.html',
  styleUrls: ['./reputation.component.css']
})
export class ReputationComponent {

  blameme: string = '../../assets/sounds/reputation/blameme.mp3';
  delicate: string = '../../assets/sounds/reputation/delicate.mp3';
  endgame: string = '../../assets/sounds/reputation/endgame.mp3';
  gatewaycar: string = '../../assets/sounds/reputation/gatewaycar.mp3';
  gorgeous: string = '../../assets/sounds/reputation/gorgeous.mp3';
  kingheart: string = '../../assets/sounds/reputation/kingheart.mp3';
  lwymmd: string = '../../assets/sounds/reputation/lwymmd.mp3';
  nicethings: string = '../../assets/sounds/reputation/nicethings.mp3';
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
