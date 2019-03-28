import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { map, tap, filter } from "rxjs/operators";

import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class UserAuthenticatedGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._auth.user.pipe(
      map(user => Boolean(user)),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this._router.navigate(["/auth/login"]);
        }
      })
    );
  }
}
