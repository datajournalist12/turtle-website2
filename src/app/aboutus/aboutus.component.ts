import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bios: any[] = [
    { name: "Alex Heeb", photoUrl: "./../../assets/peeps/alex.jpg", title: "Board Director", Location: "Chaffee, Missouri", text: "A computer programmer by trade, Alex is an amatuer naturalist with extensive experience researching and observing box turtles in Missouri"},
    { name: "Christine Light", photoUrl: "./../../assets/peeps/christine.jpg", title: "Assistant Director", Location: "Greensboro, North Carolina", text: "Christine is a globetrotting marine biologist with a passion for endangered turtle conservation and husbandry" },
    { name: "Shelly Cox", photoUrl: "./../../assets/peeps/shelly.jpg", title: "Board Member", Location: "Savannah, Missouri", text: "Shelly is an experienced turtle rehabber who runs a tortoise rescue from her Northwestern Missouri farmstead" },
    { name: "Bruce Wolhuter", photoUrl: "./../../assets/peeps/bruce.jpg", title: "Board Member Emeritus", Location: "Kansas", text: "Bruce is a retired high school science teacher with a special interest in box turtles and their conservation in Kansas" },
    { name: "Cailin Gallagher", photoUrl: "./../../assets/peeps/cailin.jpg", title: "Board Member", Location: "Fenton, Michigan", text: "Cailing Gallagher recently graduated with a biology degree, which she intends to use to advance the cause of turtles in her home state" },
    { name: "Ellie Houchin", photoUrl: "./../../assets/peeps/ellie.jpg", title: "Board Member", Location: "Tulsa, Oklahoma", text: "Ellie is an animal enthusiest whose passion for all creatures finds a special place with turtles and hedgehogs" },
    { name: "Madeline Smith", photoUrl: "./../../assets/peeps/madeline.jpg", title: "Board Member", Location: "Columbia, Missouri", text: "Madeline grew up on a farm in Northern Missouri, and her passion animal husbandry led to an interest in turtles and other herps" },
    { name: "Taylor Blazi", photoUrl: "./../../assets/peeps/taylor.jpg", title: "Board Member", Location: "Dallas, Texas", text: "Taylor is an amateur naturalist who spends as much time as he can spare documenting the natural world in his area, with a special focus on turtles" },
    { name: "Dr. Liv Jones", photoUrl: "./../../assets/peeps/liv.jpg", title: "Board Member", Location: "Manhattan, Kansas", text: "Liv is a small animal veterinarian who has a special passion for turtles and tortoises" }
  ]

  supporters: any[] = [
    {photoUrl: "./../../assets/supporters/kirkpatrick.jpg", webUrl: "https://kirkpatrickfoundation.com/", size: "100%"},
    {photoUrl: "./../../assets/supporters/vista_dios.jpg", webUrl: "https://vistadiosfoundation.org/", size: "100%"},
    {photoUrl: "./../../assets/supporters/summerlee.jpg", webUrl: "https://summerlee.org/", size: "100%"},
    {photoUrl: "./../../assets/supporters/parks.jpg", webUrl: "https://www.parksfoundation.org/", size: "100%"},
    {photoUrl: "./../../assets/supporters/shumaker.jpg", webUrl: "https://shumakerfamilyfoundation.org/", size: "100%"},
    {photoUrl: "./../../assets/supporters/dutton.jpg", webUrl: "http://www.jameseduttonfoundation.org/", size: "100%"},

  ]

}
