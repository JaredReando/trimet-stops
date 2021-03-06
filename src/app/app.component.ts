import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { Rider } from './models/rider.model';
import { PrivateComponent } from './private/private.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'trimet-stops';
  private user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    console.log("app component docheck", this.user);
  }
}
