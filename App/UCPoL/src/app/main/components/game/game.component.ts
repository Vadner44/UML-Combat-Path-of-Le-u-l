import { Component, OnInit,HostListener } from '@angular/core';
import { LogsComponent} from '../logs/logs.component';
import { BarsComponent } from '../bars/bars.component';
import { I18nSelectPipe } from '@angular/common';
import { LOGS } from '../logs/log';
import {COLLIDERS1,COLLIDERS2,MAPS} from "../../../dev/colliders"


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


export class GameComponent implements OnInit {
/*
  userY : number;
  userX : number;
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    this.userY = e.clientY;
    this.userX = e.clientX;
    console.log(this.userX+" "+this.userY);
  }
 */
  colliders = COLLIDERS1;
  logs = LOGS;
  path = "../../../../assets/img/";
  anims = ["1.png","2.png","3.png","4.png"];
  animwsk = 0;
  src = this.path+"char.png";
  y=250;
  x=200;
  bars = new BarsComponent();
  //logs = new LogsComponent();
  attack: string = 'Otrzymałeś obrażenia : ';
  heal: string = 'Wyleczyłeś obrażenia : ';

  enemyHP = 100;

  enemy1Beaten = false;
  won = false;
  lost = false;
  constructor() {

   }
   

  ngOnInit(): void {
    document.documentElement.style.setProperty('--y', `${this.y}px`);
    document.documentElement.style.setProperty('--x', `${this.x}px`);
    document.documentElement.style.setProperty('--vprops', `visible`);
    document.documentElement.style.setProperty('--vbattle', `hidden`);
    document.documentElement.style.setProperty('--currMap', `url(../../../../assets/img/env/1.png)`);
    
    this.colliders = JSON.parse(localStorage.getItem("colliders"));
    for(let pos of this.colliders){console.log(pos);}

  }
  
  
sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

  async move(newy,newx) {
      if(this.collisionChecking(this.x + (16*newx),this.y + (16*newy))){
    for(let i = 0; i < 16; i++){
      this.y+=newy;
      this.x+=newx;
      
    document.documentElement.style.setProperty('--y', `${this.y}px`);
    document.documentElement.style.setProperty('--x', `${this.x}px`);
    
    await this.sleep(20);
    }
    console.log("yx"+this.y+" "+this.x);
    
  }
  
    console.log(this.x+" "+this.y);
    if(this.x > 430 && (this.y > 110 && this.y < 186)){
      this.changemap(1);
    }
    /*
    if((this.x >300 && this.x<444)&&(this.y > 220 && this.y<316) ){
      if(!this.won) {
        this.battle();
        console.log(this.won);
      }
      
    }
    else  if((this.x >232 && this.x<408)&&(this.y > 24 && this.y<174) ){
        this.changeHP(20);    } */
  }
  
  changeHP(amount: number): void {
    this.bars.changeHP(amount);
    if(amount < 0 ){
    this.addLog("Otrzymałeś obrażeń:",amount);
    
    }
    else{
      this.addLog("wyleczyłeś obrażeń:",amount);
    }
   /* if( amount > 0 && this.bars.hp < 100){
    this.logs.addLog(this.heal,amount);
    }
    else if (amount < 0 && this.bars.hp > 0){
      this.logs.addLog(this.attack,amount);
    } */
  }
  addLog(newMessage:string,newValue:number){
    this.logs.push({message:newMessage,value:newValue});
}
  battle():void{
    document.documentElement.style.setProperty('--vprops', `hidden`);
    document.documentElement.style.setProperty('--vbattle', `visible`);
    document.documentElement.style.setProperty('--venemy1', `hidden`);
    this.addLog("Rozpoczynasz walke!",null);
  }
  run():void{
    document.documentElement.style.setProperty('--vprops', `visible`);
    document.documentElement.style.setProperty('--vbattle', `hidden`);
    if(!this.won) document.documentElement.style.setProperty('--venemy1', `visible`);
    
    this.enemyHP = 100;
  }
  atk():void{
    this.enemyHP -=20; 
    this.addLog("Zadajesz przeciwnikowi obrażenia:",20)
    if(this.enemyHP > 0){
    this.counter();
    }
    else{
      console.log("zabiles go :O");
      this.won = true;
      console.log(this.won);

    }
  }
  def():void{

  }
  itm():void{

  }
  restart():void{
    window.location.reload();
  }

  collisionChecking(newx,newy) :boolean{
    for(let pos of this.colliders){
      console.log(newx+" "+newy);
     if((newx > pos.x1 && newx < pos.x2) && (newy > pos.y1 && newy < pos.y2)){
       return false;
     }
    }
    return true
  }


  maps = MAPS;
  
 
  changemap(mapID) :void{
    document.documentElement.style.setProperty('--currMap', `url(../../../../assets/img/env/${this.maps[mapID].path})`);
    document.documentElement.style.setProperty('--mapSize', `${this.maps[mapID].size}`);
    this.x = this.maps[mapID].startX
    this.y = this.maps[mapID].startY
    document.documentElement.style.setProperty('--y', `${this.y}px`);
    document.documentElement.style.setProperty('--x', `${this.x}px`);

    console.log(this.maps[mapID]);
  }

  counter():void{
    let option = Math.floor(Math.random() *2);
    if (option == 1){
      let dmg = Math.floor(Math.random() * (-10 - (-30))) + (-30);
      this.addLog("wróg zadaje Ci obrażenia:",dmg);
      this.changeHP(dmg);
      if(this.bars.hp <= 0){
        this.lost = true;
      }
    }
    else if(option == 0){
      let heal = Math.floor(Math.random() *(10 - (30))) + (30);
      this.addLog("Wróg leczy się o",heal);
      this.enemyHP += heal;
    }
  }
}
