import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }

  isLoggedIn() {
    // return true;
    if (localStorage.getItem("selfi_dashboard_token")) {
      return true;
    }
    return false;
  }
}
