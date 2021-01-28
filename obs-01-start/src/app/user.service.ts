import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// this is a way to trigger event between component. it like eventEmitter but a better way

@Injectable({ providedIn: "root" })
export class UserService {
  activatedEmitter = new Subject<boolean>();
}
