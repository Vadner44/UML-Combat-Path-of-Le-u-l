import { Component, OnInit } from '@angular/core';
import { BarsComponent } from '../bars/bars.component';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


export class GameComponent implements OnInit {

  bars = new BarsComponent();
  constructor() {

   }

  ngOnInit(): void {

  }
  changeHP(amount: number): void {
    this.bars.changeHP(amount);
  }

}
