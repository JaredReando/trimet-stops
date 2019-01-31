import { Injectable } from '@angular/core';
import { Rider } from './models/rider.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiderService {
  private database: AngularFireDatabase;

  constructor(private db: AngularFireDatabase) {
    this.database = db;
  }

  getRider(uid) {
    return this.database.object(uid).valueChanges();
  }
}
