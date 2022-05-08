import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  data1 = [
    {header: "ANIMAL NEGLECT", subhead: "Turtle races where entertainment is prioritized over animal welfare lead to neglect and abuse", image: "./../../../assets/svg/flipped-turtle.png", width: "75%"},
    {header: "DISEASE", subhead: "Turtle race conditions cause disease and risk spreading it back to wild populations", image: "./../../../assets/svg/disease-turtle-2.png", width: "35%"},
    {header: "RELOCATION", subhead: "Relocating highly territorial turtles into new areas results in devastating mortality", image: "./../../../assets/svg/hill.png", width: "50%"},
   ]

   data2 = [
    {header: "THERMAL ISSUES", subhead: "Turtles can overheat when raced across hot pavement or when left in the sun", image: "./../../../assets/svg/hot-turtle.png", width: "55%"},
    {header: "OVERCOLLECTION", subhead: "Turtle populations quickly hit the tipping point toward decline when overcollected", image: "./../../../assets/svg/recession.png", width: "45%"},
    {header: "ENDANGERED SPECIES", subhead: "Turtle races have been caught repeatedly using endangered and protected turtle species", image: "./../../../assets/svg/endangered.png", width: "50%"}
   ]

}
