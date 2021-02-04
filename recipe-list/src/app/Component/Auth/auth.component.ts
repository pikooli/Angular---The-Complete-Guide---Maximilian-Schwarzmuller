import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from 'src/app/Shared/alert/alert.component';
import { PlaceholderDirective } from 'src/app/Shared/placeholder/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  eventSubscription: Subscription;

  // placeholder Directive will look for the first placeholderDirective in the dom and return it,
  // so here we have access to the 'appPlaceHolder' as it the first placeholder
  @ViewChild(PlaceholderDirective)
  alertHost: PlaceholderDirective;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) return;
    this.isLoading = true;
    const email = authForm.value.email;
    const password = authForm.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else authObs = this.authService.signup(email, password);
    authObs.subscribe(
      (resp) => {
        console.log(resp);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );
    authForm.reset();
  }
  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    // this create a component, that we can place later in the DOM
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    // we blind the view reference to the alert component, this will place the component at this view place
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    // and allow us to have access to all element of this component
    // componentRef.instance.close
    componentRef.instance.message = message;
    this.eventSubscription = componentRef.instance.close.subscribe(() => {
      this.eventSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy() {
    if (this.eventSubscription) this.eventSubscription.unsubscribe();
  }
}
