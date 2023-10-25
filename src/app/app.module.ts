import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sound1Component } from './1989/sound1.component';
import { Sound2Component } from './fearless/sound2.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RedComponent } from './red/red.component';
import { SpeaknowComponent } from './speaknow/speaknow.component';
import { ReputationComponent } from './reputation/reputation.component';
import { LoverComponent } from './lover/lover.component';

@NgModule({
  declarations: [
    AppComponent,
    Sound1Component,
    Sound2Component,
    HomeComponent,
    RedComponent,
    SpeaknowComponent,
    ReputationComponent,
    LoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
