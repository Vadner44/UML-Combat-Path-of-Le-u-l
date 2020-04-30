import { Component, OnInit } from '@angular/core';
import { LOGS } from '../logs/log';
import {GameComponent} from '../game/game.component';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
    logs = LOGS;
    game = new GameComponent();
  constructor() { }

  ngOnInit(): void {

  }

  addLog(newMessage:string,newValue:number){
      this.logs.push({message:newMessage,value:newValue});
  }
  move(newx,newy){
    this.game.move(newx,newy)
  }


}
