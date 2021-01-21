import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // select by balise
  // selector: '.app-root', // select by class
  // selector: '[app-root]', // select by attribute
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'my-dream-app';
}
 