import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Batik} from './batik.model';
import {PakaianAdat} from './pakaian.model';
import {Kain} from './kain.model';
import {AlatMusik} from './alatMusik.model';
import {Item} from './scoreboard/items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // Initialize batik
  private dbPathBatik = '/batik';
  batikRef: AngularFireList<Item> = null;

  // Initialize pakaian adat
  private dbPathPakaian = '/pakaian_adat';
  pakaianRef: AngularFireList<Item> = null;

  // Initialize kain
  private dbPathKain = '/kain';
  kainRef: AngularFireList<Item> = null;

  // Initialize kain
  private dbPathAlatMusik = '/alat_musik';
  alatMusikRef: AngularFireList<Item> = null;

  // Initialize candi
  private dbPathCandi = '/candi';
  candiRef: AngularFireList<Item> = null;

  // Initialize prasasti
  private dbPathPrasasti = '/prasasti';
  prasastiRef: AngularFireList<Item> = null;

  // Initialize senjata
  private dbPathSenjata = '/senjata_tradisional';
  senjataRef: AngularFireList<Item> = null;

  constructor(private db: AngularFireDatabase) {
    this.batikRef = db.list(this.dbPathBatik);
    this.pakaianRef = db.list(this.dbPathPakaian);
    this.kainRef = db.list(this.dbPathKain);
    this.alatMusikRef = db.list(this.dbPathAlatMusik);
    this.candiRef = db.list(this.dbPathCandi);
    this.prasastiRef = db.list(this.dbPathPrasasti);
    this.senjataRef = db.list(this.dbPathSenjata);
  }
  getAllBatik(): AngularFireList<Item> {
    return this.batikRef;
  }
  getAllPakaian(): AngularFireList<Item> {
    return this.pakaianRef;
  }
  getAllKain(): AngularFireList<Item> {
    return this.kainRef;
  }
  getAllAlatMusik(): AngularFireList<Item> {
    return this.alatMusikRef;
  }
  getAllCandi(): AngularFireList<Item> {
    return this.candiRef;
  }
  getAllPrasasti(): AngularFireList<Item> {
    return this.prasastiRef;
  }
  getAllSenjata(): AngularFireList<Item> {
    return this.senjataRef;
  }
}
