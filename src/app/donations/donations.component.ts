import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpService } from '../services/http.service';
import { MessageService } from '../services/messenger.service';

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
                    style({ height: 40, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 40, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class DonationsComponent implements OnInit {

  totalGoal: number = 50000
  raisedGoal: number = 10000
  progressPercentage: string = "0";
  timeHit1: boolean = true;
  timeHit2: boolean = true;
  timeHit3: boolean = true;
  timeHit4: boolean = true;
  showBar: boolean = true;

  constructor(private _http: HttpService,
              private messageService: MessageService) { }

  async ngOnInit() {
    const timer1 = setTimeout(() => this.timeHit1 = false, 3999);
    const timer2 = setTimeout(() => this.timeHit2 = false, 5000);
    const timer3 = setTimeout(() => this.timeHit3 = false, 10000);
    const timer4 = setTimeout(() => this.timeHit4 = false, 11001);
    await this._http.getData().then(x => {console.log(x), this.raisedGoal = this.raisedGoal + parseFloat(x.toString())})
    this.progressPercentage = ((this.raisedGoal/this.totalGoal)*100).toPrecision(3);
  }

  turnOffDonate() {
    this.showBar = false;
    this.messageService.sendMessage("Shut Off")
  }

}
