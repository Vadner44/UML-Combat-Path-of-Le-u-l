import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { GameComponent } from './components/game/game.component';
import { LogsComponent } from './components/logs/logs.component';
import { BarsComponent } from './components/bars/bars.component';



@NgModule({
  declarations: [GameComponent, LogsComponent, BarsComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
     GameComponent,
       LogsComponent,
        BarsComponent,
  ]
})
export class MainModule { }
