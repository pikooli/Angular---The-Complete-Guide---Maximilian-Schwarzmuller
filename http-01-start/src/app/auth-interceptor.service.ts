import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modofiedRequest = req.clone({
      headers: req.headers.append("Auth", "aa"),
    });
    return next.handle(modofiedRequest);
  }
}
