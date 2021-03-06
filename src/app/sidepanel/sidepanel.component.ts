import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  data: any = [
                {
                  image: "./../../assets/ring.jpg",
                  header: "",
                  subhead: "The Problem",
                  description: "Turtle races are common events at Midwestern festivals. Learn why turtle scientists are expressing concern.",
                  link: "/problems"
                },
                {
                  image: "./../../assets/race.jpg",
                  header: "",
                  subhead: "Reforming Races",
                  description: "By adhering to new guidlines turtle race organizers can actually become conservation partners. Find out how.",
                  link: "/conservation"
                },
                {
                  image: "./../../assets/map.jpg",
                  header: "",
                  subhead: "Our Map",
                  description: "Over 25,000 turtles a year are used for turtle races. Our team has mapped out every turtle race in the US.",
                  link: "/map"
                },
                {
                  image: "./../../assets/box.jpg",
                  header: "",
                  subhead: "Data Clearinghouse",
                  description: "View data our team has collected on turtle races, and read our publications.",
                  link: "/data"
                }
              ]

}
