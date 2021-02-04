import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // here we get the previous value of user , because we use a BehaviorSubject, the value of user is passed to a pipe, that is subscrebed only one time
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user?.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
