import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]',
})
export class PlaceholderDirective {
  // this will point to where the selector is placed in the DOM, so you can use this place
  constructor(public viewContainerRef: ViewContainerRef) {}
}
