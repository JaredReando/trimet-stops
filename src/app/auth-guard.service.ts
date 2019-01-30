import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from "./authentication.service";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, public authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {
    return this.authService.afAuth.authState
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
              console.log("auth", authenticated);
              if (!authenticated) {
                  alert("Access denied.");
                  this.router.navigate(['']);
                  return false;
              } else {
                return true;
              }
            });
  }
}
