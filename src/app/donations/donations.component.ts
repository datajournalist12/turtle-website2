import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 61, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 61, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class DonationsComponent implements OnInit {

  totalGoal: number = 60000
  raisedGoal: number = 10000
  progressPercentage: string = ((this.raisedGoal/this.totalGoal)*100).toPrecision(3);
  clicked: boolean = true;

  constructor() { }

  ngOnInit(): void {
    const timer = setTimeout(() => console.log("timer worked"), 4000);

  }

  fadeMethod() {
    this.clicked = !this.clicked;
    console.log(this.clicked)
  }

}
