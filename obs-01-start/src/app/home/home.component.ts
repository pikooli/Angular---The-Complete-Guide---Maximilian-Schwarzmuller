import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})

// testing observable with interval from rxjs, interval will launch every x second and give a count that increament
// export class HomeComponent implements OnInit {
//   // private firstObsSubscription: Subscription;
//   constructor() {}

//   ngOnInit() {
//     // this.firstObsSubscription = interval(1000).subscribe((count) =>
//     //   console.log(count)
//     // );
//   }
//   ngOnDestroy() {
//     // this.firstObsSubscription.unsubscribe();
//   }
// }

// // here example of a custom observable
// export class HomeComponent implements OnInit {
//   subscribe: Subscription;
//   constructor() {}

//   ngOnInit() {
//     const customIntervalObservable = new Observable((observer) => {
//       let count = 0;
//       setInterval(() => {
//         observer.next(count);
//         // here example of complete
//         if (count === 2) observer.complete();

//         // here example of throw error
//         if (count > 3) observer.error(new Error("count is greater than 3"));
//         else count++;
//       }, 1000);
//     });

//     this.subscribe = customIntervalObservable.subscribe(
//       (count) => console.log(count),
//       // passing another function that will react to error. this don't fire the complete function,
//       // it
//       (error) => alert(error.message),
//       // complete function
//       () => console.log("complete")
//     );
//   }

//   ngOnDestroy() {
//     this.subscribe.unsubscribe();
//   }
// }

// // here example of implementing pipe and map as operator
// export class HomeComponent implements OnInit {
//   subscribe: Subscription;
//   constructor() {}

//   ngOnInit() {
//     const customIntervalObservable = new Observable((observer) => {
//       let count = 0;
//       setInterval(() => {
//         observer.next(count);
//         // here example of complete
//         if (count === 2) observer.complete();

//         // here example of throw error
//         if (count > 3) observer.error(new Error("count is greater than 3"));
//         else count++;
//       }, 1000);
//     });

//     this.subscribe = customIntervalObservable
//       .pipe(
//         map((data: number) => {
//           return "Round " + (data + 1);
//         })
//       )
//       .subscribe(
//         (count) => console.log(count),
//         // passing another function that will react to error. this don't fire the complete function,
//         // it
//         (error) => alert(error.message),
//         // complete function
//         () => console.log("complete")
//       );
//   }

//   ngOnDestroy() {
//     this.subscribe.unsubscribe();
//   }
// }

// here example of implementing pipe, filter and map as operator
export class HomeComponent implements OnInit {
  subscribe: Subscription;
  constructor() {}

  ngOnInit() {
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        // here example of complete
        if (count === 2) observer.complete();

        // here example of throw error
        if (count > 3) observer.error(new Error("count is greater than 3"));
        else count++;
      }, 1000);
    });

    this.subscribe = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return "Round " + (data + 1);
        })
      )
      .subscribe(
        (count) => console.log(count),
        // passing another function that will react to error. this don't fire the complete function,
        // it
        (error) => alert(error.message),
        // complete function
        () => console.log("complete")
      );
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
