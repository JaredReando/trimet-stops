import { Component, OnInit } from '@angular/core';
import { RiderService } from '../rider.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
  providers: [RiderService]
})
export class PrivateComponent implements OnInit {
  private user;
  rider : Observable<{}>;
  private count: number = 0;

  constructor(private riderService: RiderService) {}

  ngOnInit() {
      this.rider = this.riderService.getRider('gdKDwNZqRmbbkoIsmyjeSV196323');
  }

  ngDoCheck() {
    // console.log("ngDoCheck (" + this.count++ + ")");
    // this.user = firebase.auth().currentUser;
    // if(this.user) {
    //   this.rider = this.riderService.getRider(this.user.uid);
      // console.log("User", this.user, this.user.uid);
      // this.rider.subscribe(data => {
      //   console.log("subscribeData", data["stops"]);
      // });
    // }
  }
}
