import { Component, OnInit } from '@angular/core';
import {DevModule} from '../dev.module';
import { MapComponent } from '../map/map.component';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  dev = new MapComponent;
  constructor() { }

  ngOnInit(): void {
  }
  collider(): void {
    this.dev.change();
    console.log(this.dev.collider);
  }

}
