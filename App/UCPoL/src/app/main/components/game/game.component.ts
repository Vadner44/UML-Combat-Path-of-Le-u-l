import { Component, OnInit } from '@angular/core';
import { BarsComponent } from '../bars/bars.component';
import { LogsComponent} from '../logs/logs.component';
import { I18nSelectPipe } from '@angular/common';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


export class GameComponent implements OnInit {
  path = "../../../../assets/img/";
  anims = ["1.png","2.png","3.png","4.png"];
  animwsk = 0;
  src = this.path+"char.png";
  y=200;
  x=200;
  bars = new BarsComponent();
  //logs = new LogsComponent();
  attack: string = 'Otrzymałeś obrażenia : ';
  heal: string = 'Wyleczyłeś obrażenia : ';
  constructor() {

   }
   

  ngOnInit(): void {
    document.documentElement.style.setProperty('--y', `${this.y}px`);
    document.documentElement.style.setProperty('--x', `${this.x}px`);

  }
  
  
sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

  async move(newy,newx) {
    for(let i = 0; i < 16; i++){
      this.y+=newy;
      this.x+=newx;
    document.documentElement.style.setProperty('--y', `${this.y}px`);
    document.documentElement.style.setProperty('--x', `${this.x}px`);
    
    await this.sleep(20);
    }
    console.log(this.x+" "+this.y);
    if((this.x >300 && this.x<444)&&(this.y > 220 && this.y<316) ){
      this.changeHP(-20);    }
    else  if((this.x >232 && this.x<408)&&(this.y > 24 && this.y<174) ){
        this.changeHP(20);    }
  }
  
  changeHP(amount: number): void {
    this.bars.changeHP(amount);
   /* if( amount > 0 && this.bars.hp < 100){
    this.logs.addLog(this.heal,amount);
    }
    else if (amount < 0 && this.bars.hp > 0){
      this.logs.addLog(this.attack,amount);
    } */
  }
  

}
