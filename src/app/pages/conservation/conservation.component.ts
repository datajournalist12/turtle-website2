import { Component, OnInit } from '@angular/core';
import { CertComponent } from 'src/app/cert/cert.component';
import { SignupComponent } from 'src/app/signup/signup.component';

@Component({
  selector: 'app-conservation',
  templateUrl: './conservation.component.html',
  styleUrls: ['./conservation.component.css']
})
export class ConservationComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }



  data = [
          {header: "1. Humane", subhead: "Humane practices at turtle races generate better conservation outcomes.", image: "./../../../assets/003-turtle.png", width: "75%"},
          {header: "2. Sustainable", subhead: "Turtle friendly races proactively follow best practices to safeguard fragile populations.", image: "./../../../assets/svg/cycling.png", width: "60%"},
          {header: "3. Legal", subhead: "Ethical turtle races never involve endangered species or violate wildlife laws.", image: "./../../../assets/svg/011-ranger.svg", width: "50%"},
          {header: "4. Educational", subhead: "An informed public is vital to turtle conservation efforts.", image: "./../../../assets/turtle-presentation.png", width: "60%"},
          {header: "5. Scientific", subhead: " Data collected at turtle races help biologists manage turtle populations.", image: "./../../../assets/svg/006-analytics.svg", width: "50%"},
          {header: "6. Philanthropic", subhead: "Your generous donations help to fund our turtle conservation efforts.", image: "./../../../assets/svg/014-give-money.svg", width: "50%"}
         ]

}
