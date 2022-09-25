import { Component, OnInit } from '@angular/core';
import {faBars,faUserGroup,faBuilding,faUser,faClock,faHandPointer, faGrip,faWifi} from '@fortawesome/free-solid-svg-icons'
import {faGripfire} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  menuicon = faBars;
  grupo = faUserGroup;
  edificio = faBuilding;
  user = faUser;
  relogio = faClock;
  pointer = faHandPointer;
  grip = faGrip;
  wifi = faWifi;
}
