import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "./custom-validators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  groupForm: FormGroup;
  status: String[] = ["Stable", "Critical", "Finished"];
  ngOnInit() {
    this.groupForm = new FormGroup({
      projectName: new FormControl(
        null,
        [
          Validators.required,
          // CustomValidators.invalidProjectName
        ],
        [CustomValidators.asyncInvalidProjectName]
      ),
      mail: new FormControl(null, [Validators.email, Validators.required]),
      status: new FormControl("Critical"),
    });
  }
  submit() {
    console.log(this.groupForm.value);
    console.log(this.groupForm.valid);
  }
}
