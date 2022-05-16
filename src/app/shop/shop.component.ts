import { Component, OnInit } from '@angular/core';
import { Shop, SubOptions } from './shop';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})

export class ShopComponent implements OnInit {

  showMain: boolean = true;
  showColor: boolean = false;
  amountMoney: keyof Shop = "60";

  constructor() { }

  hatColors: Array<Shop> = 
  [{
    "60": {pink: "https://buy.stripe.com/cN23cL1If4Bv9O07sF", blue: "https://buy.stripe.com/8wM7t14Ur7NH5xK5kA", green: "https://buy.stripe.com/14k00zbiP5Fz1hueVe", orange: "https://buy.stripe.com/8wM3cLdqX4Bv5xK14v", red: "https://buy.stripe.com/eVa3cLcmTc3X9O0aF9", none: "https://buy.stripe.com/9AQ8x5aeL1pj6BO00C"},
    "100": {pink: "https://buy.stripe.com/bIY9B9aeLaZTe4g6oA", blue: "https://buy.stripe.com/28ofZx1Ifgkd4tGbIZ", green: "https://buy.stripe.com/fZe3cL9aH7NHgcofZj", orange: "https://buy.stripe.com/3csdRp2Mj5Fz4tG5kK", red: "https://buy.stripe.com/dR66oX86D3xr2lyfZs", none: "https://buy.stripe.com/9AQ14DgD99VPe4gaFf"},
    "200": {pink: "https://buy.stripe.com/fZe14DcmT4Bvd0c7sG", blue: "https://buy.stripe.com/3cs6oXaeL9VP8JW3cu", green: "https://buy.stripe.com/28o3cLbiPaZTgcodRc", orange: "https://buy.stripe.com/cN24gP72z1pjbW88wV", red: "https://buy.stripe.com/28o28H3Qnec55xKfZr", none: "https://buy.stripe.com/dR6fZx72z2tn2lyfZy"},
    "500": {pink: "https://buy.stripe.com/bIY9B9cmT4Bv9O014j", blue: "https://buy.stripe.com/7sI5kT3QnaZT9O09AT", green: "https://buy.stripe.com/9AQ28HcmT6JDbW89AX", orange: "https://buy.stripe.com/7sIfZx72z1pj0dq9AY", red: "https://buy.stripe.com/aEUeVtaeL9VP7FS28A", none: "https://buy.stripe.com/fZe7t1gD9d818JW4gP"} 
  }]

  ngOnInit(): void {
  }

  getAmount(amt: keyof Shop) {
    this.amountMoney = amt
    this.showMain = false;
    const timer2 = setTimeout(() => this.showColor = true, 1000);
  }

  getColor(color: keyof SubOptions) {
    console.log(this.hatColors[0][this.amountMoney][color])
    document.location.href = this.hatColors[0][this.amountMoney][color];
  }
}
