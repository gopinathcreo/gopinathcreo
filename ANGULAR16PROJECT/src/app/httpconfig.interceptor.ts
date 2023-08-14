import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { PLATFORM_ID, APP_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  is_browser: any = false;
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {
    this.is_browser = isPlatformBrowser(platformId) ? true : false;
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.is_browser) {
      const token = localStorage.getItem("selfi_dashboard_token");
      if (token) {
        request = request.clone({
          headers: request.headers.set("Authorization", token),
        });
      }
    }
    if (!request.headers.has("file")) {
      if (!request.headers.has("Content-Type")) {
        request = request.clone({
          headers: request.headers.set("Content-Type", "application/json"),
        });
      }
    }
    request = request.clone({
      headers: request.headers.set("Accept", "application/json"),
    });
    request = request.clone({
      headers: request.headers.set("clienttz", "Asia/Kolkata"),
    });
    request = request.clone({
      headers: request.headers.set("X-Timezone-Offset", this.getTimezoneOffset()),
    });
    return next.handle(request).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
        }
      }),
      catchError((err: any) => {
        let errorMessage = "";
        if (err instanceof HttpErrorResponse) {
          try {
            console.error("HttpErrorResponse", err);
            if (err.status == 401) {
              this.router.navigate(["login"]);
            }
            if (err.status == 403) {
              this.showMessage("Not allowed", err.error.detail);
            }
            errorMessage = "";
            if (err.error instanceof ErrorEvent) {
              errorMessage = `Error: ${err.error.message}`;
            } else {
              errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
            }
            if (err.status > 499) {
              // window.alert(errorMessage);
            }
          } catch (e) {
            console.error("HttpErrorResponse", e);
          }
        }
        return throwError(err);
      })
    );
  }
  private getTimezoneOffset(): string {
    return String(new Date().getTimezoneOffset());
  }
  showMessage(title = "urbanut", text = "Success ") {}
}
