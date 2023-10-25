import { Component } from '@angular/core';

@Component({
  selector: 'app-sound1',
  templateUrl: './sound1.component.html',
  styleUrls: ['./sound1.component.css']
})
export class Sound1Component {

  blankspace: string = '../../assets/sounds/1989/blankspace.mp3';
  shakeitoff: string = '../../assets/sounds/1989/shakeitoff.mp3';
  badblood: string = '../../assets/sounds/1989/badblood.mp3';
  style: string = '../../assets/sounds/1989/style.mp3';
  outofwoods: string = '../../assets/sounds/1989/outofwoods.mp3';
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
























  // audio:HTMLAudioElement = new Audio();

// songs:string[] = [
//    '../../assets/sound1/blankspace.mp3',
//    '../../assets/sound1/clauv.mp3',
// ];

//   selectedSong:string = this.songs[0];

//   currentAudio:HTMLAudioElement | null = null;

//   playSound(){

//     if(this.currentAudio){
//       this.currentAudio.pause();
//     }


//     this.audio.src = this.selectedSong;
//     this.audio.load();
//     this.audio.play();

//     this.currentAudio = this.audio;

//   }

//   pauseSound() {
//     if (this.currentAudio) {
//       this.currentAudio.pause();
//     }
//   }

//   getSongName(songPath: string): string {
//     // Extract the filename from the path
//     const parts = songPath.split('/');
//     return parts[parts.length - 1];
//   }

}

