import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Batik} from './batik.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private dbPathBatik = '/batik';
  batikRef: AngularFireList<Batik> = null;
  constructor(private db: AngularFireDatabase) {
    this.batikRef = db.list(this.dbPathBatik);
  }
  getAllBatik(): AngularFireList<Batik> {
    return this.batikRef;
  }
}
