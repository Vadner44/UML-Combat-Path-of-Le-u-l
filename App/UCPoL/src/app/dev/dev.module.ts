import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { MapComponent } from './map/map.component';
import { DevWindowComponent } from './dev-window/dev-window.component';
import { OptionsComponent } from './options/options.component';


@NgModule({
  declarations: [MapComponent, DevWindowComponent, OptionsComponent],
  imports: [
    CommonModule,
    DevRoutingModule
  ],
  exports: [ MapComponent, DevWindowComponent ]
})
export class DevModule { }
