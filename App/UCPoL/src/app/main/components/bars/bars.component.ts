import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {

  hp = 100;
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


  itemy = [{id: 0, name: "miecz", url:'../../../../assets/img/miecz.png'}, {id: 1, name: "kosa", url:"../../../../assets/img/kosa.png"}];
  add (){
    let index=Math.round(Math.random())
    this.images.push(this.itemy[index]);
    localStorage.setItem('images', JSON.stringify(this.images));
}
  images = JSON.parse(localStorage.getItem('images')) || [];

  delete(){
    this.images.pop();
    localStorage.setItem('images', JSON.stringify(this.images));
  }

  clear(){
    localStorage.removeItem('images');
    window.location.reload();
  }
}
