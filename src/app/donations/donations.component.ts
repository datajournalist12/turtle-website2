import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  totalGoal: number = 60000
  raisedGoal: number = 10000
  progressPercentage: string = ((this.raisedGoal/this.totalGoal)*100).toPrecision(3);

  constructor() { }

  ngOnInit(): void {
  }

}
