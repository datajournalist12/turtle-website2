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
  amountMoney: keyof Shop = "35";

  constructor() { }

  hatColors: Array<Shop> = 
  [{
    "100": {pink: "https://buy.stripe.com/bIY9B9aeLaZTe4g6oA", blue: "https://buy.stripe.com/28ofZx1Ifgkd4tGbIZ", green: "https://buy.stripe.com/fZe3cL9aH7NHgcofZj", orange: "https://buy.stripe.com/3csdRp2Mj5Fz4tG5kK", red: "https://buy.stripe.com/dR66oX86D3xr2lyfZs", none: "https://buy.stripe.com/9AQ14DgD99VPe4gaFf"},
    "50": {pink: "https://buy.stripe.com/9AQ28H72z3xr3pC7tf", blue: "https://buy.stripe.com/00gaFdfz54Bv4tGdRB", green: "https://buy.stripe.com/28oeVtdqX0lfbW8aFn", orange: "", red: "https://buy.stripe.com/5kA5kTev1c3X4tGeVB", none: "https://buy.stripe.com/14kbJh0Eb5Fz5xKfZB"},
    "35": {pink: "https://buy.stripe.com/eVa5kTgD99VP2lybJw", blue: "https://buy.stripe.com/bIY14D9aHec54tG8xi", green: "https://buy.stripe.com/bIY4gP0Eb4Bvd0cdRA", orange: "", red: "https://buy.stripe.com/aEUfZx86D2tnbW800I", none: "https://buy.stripe.com/4gw9B986Dgkd0dqaFi"} 
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
