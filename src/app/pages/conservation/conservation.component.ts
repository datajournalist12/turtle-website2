import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conservation',
  templateUrl: './conservation.component.html',
  styleUrls: ['./conservation.component.css']
})
export class ConservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
          {header: "Humane", subhead: "Ethical turtle races do not result in cruelty or neglect to individual turtles.", image: "./../../../assets/003-turtle.png", width: "75%"},
          {header: "Sustainable", subhead: "Ethical turtle races do not negatively impact turtle populations.", image: "./../../../assets/svg/cycling.png", width: "60%"},
          {header: "Legal", subhead: "Ethical turtle races never involve endangered species of turtles or violate wildlife laws.", image: "./../../../assets/svg/011-ranger.svg", width: "50%"},
          {header: "Informative", subhead: "Ethical turtle races are educational, especially to children.", image: "./../../../assets/turtle-presentation.png", width: "60%"},
          {header: "Scientific", subhead: " Ethical turtle races produce useful data for the management of turtle populations.", image: "./../../../assets/svg/006-analytics.svg", width: "50%"},
          {header: "Philanthropic", subhead: "Ethical turtle race organizers give back by making their races fundraisers for turtle conservation.", image: "./../../../assets/svg/014-give-money.svg", width: "50%"}
         ]

}
