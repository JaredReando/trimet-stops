import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  private user;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    console.log("User", this.user, this.user.uid)
  }
}
