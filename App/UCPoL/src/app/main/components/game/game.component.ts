import { Component, OnInit } from '@angular/core';
import { BarsComponent } from '../bars/bars.component';
import { LogsComponent} from '../logs/logs.component';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


export class GameComponent implements OnInit {

  bars = new BarsComponent();
  logs = new LogsComponent();
  attack: string = 'Otrzymałeś obrażenia : ';
  heal: string = 'Wyleczyłeś obrażenia : ';
  constructor() {

   }

  ngOnInit(): void {

  }
  changeHP(amount: number): void {
    this.bars.changeHP(amount);
    if( amount > 0 && this.bars.hp < 100){
    this.logs.addLog(this.heal,amount);
    }
    else if (amount < 0 && this.bars.hp > 0){
      this.logs.addLog(this.attack,amount);
    }
  }

}
