import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs/observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  forbiddenUsernames = ["Chris", "Anna"];
  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          [this.forbiddenEmails]
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.signupForm.valid);
    console.log(this.signupForm.value);
  }
  get controls() {
    return (this.signupForm.get("hobbies") as FormArray).controls;
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }
  // this is a custom formControl validator
  // this function should return a object that have a key name as string and a value boolean, like {'test' : false}
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1)
      return { nameIsForbidden: true };
    return null;
  }
  // async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbidden: true });
        }
        resolve(null);
      }, 1500);
    });
    return promise;
  }
}
