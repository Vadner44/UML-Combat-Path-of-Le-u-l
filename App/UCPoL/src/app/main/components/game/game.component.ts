import { Component, OnInit,HostListener } from '@angular/core';
import { LogsComponent} from '../logs/logs.component';
import { BarsComponent } from '../bars/bars.component';
import { I18nSelectPipe } from '@angular/common';
import { LOGS } from '../logs/log';
import {COLLIDERS1,COLLIDERS2,MAPS,colliderInt} from "../../../dev/colliders"
import { map } from 'rxjs/operators';


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
 bossphase = false;
  currmap = 0;
  colliders:colliderInt[]=JSON.parse(localStorage.getItem("map1"));
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
  colsMaps = ['map1','map2','map3'];
  enemyHP = 100;
  maps = MAPS;
  enemy1Beaten = false;
  won = false;
  lost = false;
  constructor() {

   }
   

  ngOnInit(): void {
    document.documentElement.style.setProperty('--y', `${this.y}px`);
    document.documentElement.style.setProperty('--x', `${this.x}px`);
    document.documentElement.style.setProperty('--vprops', `hidden`);
    document.documentElement.style.setProperty('--hero', `visible`);
    document.documentElement.style.setProperty('--vbattle', `hidden`);
    document.documentElement.style.setProperty('--vdial', `hidden`);
    document.documentElement.style.setProperty('--boss', `hidden`);
    if(localStorage.getItem('currmap') == null){
      this.currmap = 0;
    }
    else{
      this.currmap = Number(localStorage.getItem('currmap'));
    }
    this.changemap(this.currmap);

  }
  
  
sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

  async move(newy,newx) {
      if(this.collisionChecking(this.x + (16*newx),this.y + (16*newy),this.colliders)){
    for(let i = 0; i < 16; i++){
      this.y+=newy;
      this.x+=newx;
      
    document.documentElement.style.setProperty('--y', `${this.y}px`);
    document.documentElement.style.setProperty('--x', `${this.x}px`);
    
    await this.sleep(20);
    }
   console.log(this.y+" "+this.x);
    
  }
  
  this.currmap = Number(localStorage.getItem('currmap'));
    if((this.x > this.maps[this.currmap].next[0]&&this.x < this.maps[this.currmap].next[1] )&& (this.y > this.maps[this.currmap].next[2] && this.y < this.maps[this.currmap].next[3])){
      this.changemap(this.currmap+1);
    }
    if(this.bossphase == true){
      if((this.x < 408)){
        this.battle();
      }
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
      this.addLog("Wyleczyłeś obrażeń:",amount);
    }
   /* if( amount > 0 && this.bars.hp < 100){
    this.logs.addLog(this.heal,amount);
    }
    else if (amount < 0 && this.bars.hp > 0){
      this.logs.addLog(this.attack,amount);
    } */
  }

  changeEXP(amount: number): void {
    this.bars.changeEXP(amount);
    if(amount > 0 ){
    this.addLog("Otrzymałeś doświadczenie:",amount);
    }
  }

  addLog(newMessage:string,newValue:number){
    this.logs.push({message:newMessage,value:newValue});
}
  battle():void{
    document.documentElement.style.setProperty('--vprops', `hidden`);
    document.documentElement.style.setProperty('--vbattle', `visible`);
    document.documentElement.style.setProperty('--venemy1', `hidden`);
    document.documentElement.style.setProperty('--hero', `hidden`);
    document.documentElement.style.setProperty('--boss', `hidden`);
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

  collisionChecking(newx,newy,colls) :boolean{
    if(colls != null){
    for(let pos of colls){
      console.log(newx+" "+newy);
     if((newx > pos.x1 && newx < pos.x2) && (newy > pos.y1 && newy < pos.y2)){
       return false;
     }
    }
  }
    return true
  }


  
  
 
  changemap(mapID) :void{
    localStorage.setItem('currmap',mapID);
    console.log(localStorage.getItem('currmap'));
    document.documentElement.style.setProperty('--currMap', `url(../../../../assets/img/env/${this.maps[mapID].path})`);
    document.documentElement.style.setProperty('--mapSize', `${this.maps[mapID].size}`);
    this.x = this.maps[mapID].startX
    this.y = this.maps[mapID].startY
    document.documentElement.style.setProperty('--y', `${this.y}px`);
    document.documentElement.style.setProperty('--x', `${this.x}px`);
    this.colliders = JSON.parse(localStorage.getItem(this.colsMaps[mapID]));
    console.log(this.colliders);

    if(mapID == 1){document.documentElement.style.setProperty('--vprops', `visible`);}
    else{
      document.documentElement.style.setProperty('--vprops', `hidden`);
    }
    if(mapID == 2){document.documentElement.style.setProperty('--boss', `visible`);
    this.bossphase = true;}
    else{
      
      document.documentElement.style.setProperty('--boss', `hidden`);
    }

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
  /*
  dial():void{
    document.documentElement.style.setProperty('--vdial', `visible`);
    this.addLog("Rozmawiasz z: NPC",null);
  }
  line = 0;
   dialog = ["Spokojnie, nie mów nic. Twoja krtań nadal nie działa jak powinna.",
  "Postaram się odpowiedzieć na wszystkie Twoje pytania, nim je zadasz.",
  "Zastanawiałem się czy nie powinienem odrazu Cię pochować.",
  "Nawet wykopałem jeden dół więcej. Leżałbyś teraz w spokoju wraz ze swoją rodziną.",
  "Znalazłem Cię ledwo żywego zaraz przed katakumbami Le'Zuzla.",
  "Ale do rzeczy.",
  "Pamiętasz co się działo?",
  "Demon Le'Zuzl zabił całą Twoją rodzinę. Nie wiem jakim cudem Ty żyjesz.",
  "Widzę w Twoich oczach pragnienie zemsty.",
  "Nie żyje mi się najgorzej gdy cały czas dostarczanych mam klientów.",
  "Hehe. Ymmm. Nie śmieszy Cię to. Cóż.",
  "Tak czy owak, jeżeli szukasz broni znajdziesz jakąś na cmentarzu.",
  "Uważaj jednak, nie jest to dobre miejsce dla... nie przystosowanych.",
  "Kieruj się drogą na wschód i skręć na północ na pierwszym rozwidleniu aby tam trafić.",
  "Powodzenia chłopcze."];
   currDialog = ["A więc żyjesz."];

  dialogFn():void{
    this.line++;
    this.currDialog.push(this.dialog[this.line]);
    console.log("aaa");
  }
*/

}
