import { Component, OnInit,HostListener } from '@angular/core';
import {DevModule} from '../dev.module';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  collider = false;
  userY : number;
  userX : number;
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    this.userY = e.clientY;
    this.userX = e.clientX;
    document.documentElement.style.setProperty('--setterY', `${e.clientY}px`);
    document.documentElement.style.setProperty('--setterX', `${e.clientX}px`);
  }
  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--setterW', `16px`);
    document.documentElement.style.setProperty('--setterH', `16px`);
    document.documentElement.style.setProperty('--vis', `hidden`);
  }
  change():void{
    this.collider? this.collider= false: this.collider  =true; 
    this.collider? document.documentElement.style.setProperty('--vis', `visible`): document.documentElement.style.setProperty('--vis', `hidden`); 
  }
  hv : number = 0;
  wv :number = 0;
  rightCornerX =0;
  rightCornerY = 0;
  setHv(hv: number)
   {
     if(hv >= 16){
      this.hv = hv;
      document.documentElement.style.setProperty('--setterH', `${this.hv}px`);}
   }
  setWv(wv: number) 
  { 
    if(wv >= 16){
    this.wv = wv;
    document.documentElement.style.setProperty('--setterW', `${this.wv}px`);}
   }
   setCollider():void{
     if(this.collider){
      
       console.log(this.userX +" " + this.userY);
       this.rightCornerX = +this.wv + this.userX ;
       this.rightCornerY = +this.hv + this.userY ;
       console.log(this.rightCornerX+" "+this.rightCornerY);
     }
   }

}
