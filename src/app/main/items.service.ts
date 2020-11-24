import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Batik} from './batik.model';
import {PakaianAdat} from './pakaian.model';
import {Kain} from './kain.model';

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

  // Initialize kain
  private dbPathKain = '/kain';
  kainRef: AngularFireList<Kain> = null;

  constructor(private db: AngularFireDatabase) {
    this.batikRef = db.list(this.dbPathBatik);
    this.pakaianRef = db.list(this.dbPathPakaian);
    this.kainRef = db.list(this.dbPathKain);
  }
  getAllBatik(): AngularFireList<Batik> {
    return this.batikRef;
  }
  getAllPakaian(): AngularFireList<PakaianAdat> {
    return this.pakaianRef;
  }
  getAllKain(): AngularFireList<Kain> {
    return this.kainRef;
  }
}
