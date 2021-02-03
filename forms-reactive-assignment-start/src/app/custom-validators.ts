import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

export class CustomValidators {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Test") return { forbiddenProjectName: true };
    else return null;
  }

  static asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((res, rej) => {
      setTimeout(() => {
        if (control.value === "Test") res({ forbiddenProjectName: true });
        else res(null);
      }, 1000);
    });
    return promise;
  }
}
