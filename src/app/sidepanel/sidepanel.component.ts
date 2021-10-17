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
                  image: "./../../assets/ring.jpeg",
                  header: "",
                  subhead: "A Nationwide Problem",
                  description: "Never heard of turtle races? They are common events at Midwestern fairs and festivals. Learn why turtle scientists are expressing concern"
                },
                {
                  image: "./../../assets/race.jpg",
                  header: "",
                  subhead: "Reforming Races",
                  description: "By adhering to guidlines we have developed turtle race organizers can actually become partners in conservation. Find out how."
                },
                {
                  image: "./../../assets/map.jpg",
                  header: "",
                  subhead: "The Map",
                  description: "Our team has mapped out over 600 turtle races, impacting an estimated 25,000 wild turtles a year. See if there is one near you."
                },
                {
                  image: "./../../assets/box.jpg",
                  header: "",
                  subhead: "Data Clearinghouse",
                  description: "View data our team has collected on turtle races, and read our publications"
                }
              ]

}
