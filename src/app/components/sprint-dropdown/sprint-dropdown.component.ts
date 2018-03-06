import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sprint-dropdown",
  templateUrl: "./sprint-dropdown.component.html",
  styleUrls: ["./sprint-dropdown.component.css"]
})
export class SprintDropdownComponent implements OnInit {

  @Input() sprints:any[]=['Sprint ','Sprint','Sprint','Sprint','Sprint'];


  constructor() {}

  ngOnInit() {}
}
