import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BarsComponent } from './components/bars/bars.component';
import { GameComponent } from './components/game/game.component';
import { StatsComponent } from './components/stats/stats.component';
import { LogsComponent } from './components/logs/logs.component';


@NgModule({
  declarations: [BarsComponent, GameComponent, StatsComponent, LogsComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
