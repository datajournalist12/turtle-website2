import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  totalGoal: number = 100000
  raisedGoal: number = 50000
  progressPercentage: number = (this.raisedGoal/this.totalGoal)*100;

  constructor() { }

  ngOnInit(): void {
  }

}
