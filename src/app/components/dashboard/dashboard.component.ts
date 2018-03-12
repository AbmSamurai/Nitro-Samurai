import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/Team';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teams: Array<Team>;
  constructor() { }

  ngOnInit() {
  }

}
