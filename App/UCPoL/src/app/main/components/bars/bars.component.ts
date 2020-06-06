import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {

  hp = 100;
  exp = 50;
  constructor() {
   }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--hpPrct', `${this.hp}%`);
    document.documentElement.style.setProperty('--hpPrctd', `${this.hp - 100}%`);
    console.log(document.documentElement.style.getPropertyValue('--hpPrct'));
  }

  changeHP(amount: number): void {
    if (this.hp > 0 && amount < 0 || this.hp < 100 && amount > 0) {
    this.hp += amount;
    document.documentElement.style.setProperty('--hpPrct', `${this.hp}%`);
    }
    console.log(this.hp);
  }

  changeEXP(amount: number): void {
    if (this.exp > 0 && amount < 0 || this.exp < 100 && amount > 0) {
    this.exp += amount;
    document.documentElement.style.setProperty('--expPrct', `${this.exp}%`);
    }
    console.log(this.exp);
  }
  


  bronie = [{id: 0, name: "miecz", str: 5, url:'../../../../assets/img/miecz.png'}, {id: 1, name: "kosa",str: 7, url:"../../../../assets/img/kosa.png"}];
  zbroje = [{id: 0, name: "zbroja", def: 5, url:'../../../../assets/img/zbroja.png'}, {id: 1, name: "zbroja", def: 5, url:'../../../../assets/img/zbroja.png'}];
  amulety = [{id: 0, name: "amulet", int: 3, url:'../../../../assets/img/amulet.png'}, {id: 1, name: "amulet", int: 3, url:'../../../../assets/img/amulet.png'}];
  images  = JSON.parse(localStorage.getItem('images')) || [];
  images2 = JSON.parse(localStorage.getItem('images2')) || [];
  images3 = JSON.parse(localStorage.getItem('images3')) || [];


  add (){
    if(this.images.length === 6 || this.images2.length === 6 || this.images3.length === 6) {
      return;
   }
    let index=Math.round(Math.random())
    this.images.push(this.bronie[index]);
    localStorage.setItem('images', JSON.stringify(this.images));
    this.images2.push(this.zbroje[index]);
    localStorage.setItem('images2', JSON.stringify(this.images2));
    this.images3.push(this.amulety[index]);
    localStorage.setItem('images3', JSON.stringify(this.images3));
  }
  
  delete(){
    this.images.pop();
    this.images2.pop();
    this.images3.pop();
    localStorage.setItem('images', JSON.stringify(this.images));
    localStorage.setItem('images2', JSON.stringify(this.images2));
    localStorage.setItem('images3', JSON.stringify(this.images3));
  }

  clear(){
    localStorage.removeItem('images');
    localStorage.removeItem('images2');
    localStorage.removeItem('images3');
    localStorage.removeItem('eq');
    localStorage.removeItem('eq2');
    localStorage.removeItem('eq3');
    window.location.reload();
  }

  eq = JSON.parse(localStorage.getItem('eq')) || [];

  select(index, image, str) {
    if(this.eq.length === 1) {
       return;
    }
    this.eq.push(image);
    this.images.splice(index, 1);
    localStorage.setItem('images', JSON.stringify(this.images));
    localStorage.setItem('eq', JSON.stringify(this.eq));
    this.str = this.str+5;
    localStorage.setItem('str', JSON.stringify(this.str));
  }

  unselect(index, image) {
    if(this.images.length === 6) {
      return;
   }
    this.eq.splice(index, 1);
    this.images.push(image);
    localStorage.setItem('images', JSON.stringify(this.images));
    localStorage.setItem('eq', JSON.stringify(this.eq));
    this.str = this.str-5;
    localStorage.setItem('str', JSON.stringify(this.str));
  }
  eq2 = JSON.parse(localStorage.getItem('eq2')) || [];
  select2(index, image) {
    if(this.eq2.length === 1) {
       return;
    }
    this.eq2.push(image);
    this.images2.splice(index, 1);
    localStorage.setItem('images2', JSON.stringify(this.images2));
    localStorage.setItem('eq2', JSON.stringify(this.eq2));
    this.def = this.def+5;
    localStorage.setItem('def', JSON.stringify(this.def));
  }

  unselect2(index, image) {
    if(this.images2.length === 6) {
      return;
   }
    this.eq2.splice(index, 1);
    this.images2.push(image);
    localStorage.setItem('images2', JSON.stringify(this.images2));
    localStorage.setItem('eq2', JSON.stringify(this.eq2));
    this.def = this.def-5;
    localStorage.setItem('def', JSON.stringify(this.def));
  }

  eq3 = JSON.parse(localStorage.getItem('eq3')) || [];
  select3(index, image) {
    if(this.eq3.length === 1) {
       return;
    }
    this.eq3.push(image);
    this.images3.splice(index, 1);
    localStorage.setItem('images3', JSON.stringify(this.images3));
    localStorage.setItem('eq3', JSON.stringify(this.eq3));
    this.int = this.int+3;
    localStorage.setItem('int', JSON.stringify(this.int));
  }

  unselect3(index, image) {
    if(this.images3.length === 6) {
      return;
   }
    this.eq3.splice(index, 1);
    this.images3.push(image);
    localStorage.setItem('images3', JSON.stringify(this.images3));
    localStorage.setItem('eq3', JSON.stringify(this.eq3));
    this.int = this.int-3;
    localStorage.setItem('int', JSON.stringify(this.int));
  }

str = JSON.parse(localStorage.getItem('str')) || 0;
def = JSON.parse(localStorage.getItem('def')) || 0;
int = JSON.parse(localStorage.getItem('int')) || 0;
skillpoint = 1;

addstr() {
  if(this.skillpoint > 0){
  this.skillpoint--
  this.str++;
  localStorage.setItem('str', JSON.stringify(this.str));}
  else
  return;
}

adddef() {
  if(this.skillpoint > 0){
  this.skillpoint--
  this.def++;
  localStorage.setItem('def', JSON.stringify(this.def));}
  else
  return;
}

addint() {
  if(this.skillpoint > 0){
  this.skillpoint--
  this.int++;
  localStorage.setItem('int', JSON.stringify(this.int));}
  else
  return;
}

reset(){
  localStorage.removeItem('str');
  localStorage.removeItem('int');
  localStorage.removeItem('def');
  window.location.reload();
}


}