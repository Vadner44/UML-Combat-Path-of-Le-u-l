import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BarsComponent } from './components/bars/bars.component';
import { GameComponent } from './components/game/game.component';
import { LogsComponent } from './components/logs/logs.component';
import {RegisterComponent} from './components/register/register.component';

@NgModule({
  declarations: [BarsComponent, GameComponent, LogsComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    BarsComponent,
     GameComponent,
    RegisterComponent,
       LogsComponent
  ]
})
export class MainModule { }
