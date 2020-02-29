import { Component, OnInit } from '@angular/core';
import { LOGS } from '../logs/log';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
    logs = LOGS;
  constructor() { }

  ngOnInit(): void {

  }

  addLog(newMessage:string,newValue:number){
      this.logs.push({date:new Date(),message:newMessage,value:newValue});
      console.log("zadzialo sie");
  }


}
