import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sound1Component } from './1989/sound1.component';
import { Sound2Component } from './fearless/sound2.component';
import { HomeComponent } from './home/home.component';
import { RedComponent } from './red/red.component';
import { SpeaknowComponent } from './speaknow/speaknow.component';
import { ReputationComponent } from './reputation/reputation.component';
import { LoverComponent } from './lover/lover.component';

const routes: Routes = [
  {path:'1989', component:Sound1Component},
  {path:'fearless', component:Sound2Component},
  {path:'red', component:RedComponent},
  {path:'speaknow', component:SpeaknowComponent},
  {path:'reputation', component:ReputationComponent},
  {path:'lover', component:LoverComponent},
  {path:'', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
