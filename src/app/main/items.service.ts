import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Batik} from './batik.model';
import {PakaianAdat} from "./pakaian.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // Initialize batik
  private dbPathBatik = '/batik';
  batikRef: AngularFireList<Batik> = null;

  // Initialize pakaian adat
  private dbPathPakaian = '/pakaian_adat';
  pakaianRef: AngularFireList<PakaianAdat> = null;

  constructor(private db: AngularFireDatabase) {
    this.batikRef = db.list(this.dbPathBatik);
    this.pakaianRef = db.list(this.dbPathPakaian);
  }
  getAllBatik(): AngularFireList<Batik> {
    return this.batikRef;
  }
  getAllPakaian(): AngularFireList<PakaianAdat> {
    return this.pakaianRef;
  }
}
