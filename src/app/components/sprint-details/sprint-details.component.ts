import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-sprint-details",
  templateUrl: "./sprint-details.component.html",
  styleUrls: ["./sprint-details.component.css"]
})
export class SprintDetailsComponent implements OnInit {
  sprint: any = ["Sprint", "Sprint", "Sprint", "Sprint", "Sprint"];
  startDate: string;
  sprintForm: FormGroup;
  endDate: string;

  minDate = new Date().toISOString().substr(0, 10);

  constructor(private fb: FormBuilder) {
    console.log(this.minDate);

    this.sprintForm = fb.group({
      points: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[1-9]*$')
        ])
      ],
      Start: [null, Validators.compose([Validators.required])],
      End: [null, Validators.compose([Validators.required])]
    });

    console.log(this.sprintForm)
  }

  ngOnInit() {}

  start() {
    console.log(".....Start");
  }

  end() {
    console.log("End....");
  }
}
