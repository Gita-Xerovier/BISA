import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {ItemsService} from '../../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  item: any;
  path: string;
  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private itemSrv: ItemsService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('items')) {return; }
      this.path = paramMap.get('items');
    });
    if (this.path === 'Kain') {
      this.itemSrv.getAllKain().snapshotChanges().pipe(
          map( changes =>
              changes.map(c => ({id: c.key, ...c.payload.val()}))
          )
      ).subscribe(data => {
        this.item = data;
        console.log(data);
      });
    }
    else if (this.path === 'Batik') {
      this.itemSrv.getAllBatik().snapshotChanges().pipe(
          map( changes =>
              changes.map(c => ({id: c.key, ...c.payload.val()}))
          )
      ).subscribe(data => {
        this.item = data;
        console.log(data);
      });
    }
    else if (this.path === 'Pakaian') {
      this.itemSrv.getAllPakaian().snapshotChanges().pipe(
          map( changes =>
              changes.map(c => ({id: c.key, ...c.payload.val()}))
          )
      ).subscribe(data => {
        this.item = data;
        console.log(data);
      });
    }
    else if (this.path === 'Alat Musik') {
      this.itemSrv.getAllAlatMusik().snapshotChanges().pipe(
          map( changes =>
              changes.map(c => ({id: c.key, ...c.payload.val()}))
          )
      ).subscribe(data => {
        this.item = data;
        console.log(data);
      });
    }
    else if (this.path === 'Candi') {
      this.itemSrv.getAllCandi().snapshotChanges().pipe(
          map( changes =>
              changes.map(c => ({id: c.key, ...c.payload.val()}))
          )
      ).subscribe(data => {
        this.item = data;
        console.log(data);
      });
    }
    else if (this.path === 'Prasasti') {
      this.itemSrv.getAllPrasasti().snapshotChanges().pipe(
          map( changes =>
              changes.map(c => ({id: c.key, ...c.payload.val()}))
          )
      ).subscribe(data => {
        this.item = data;
        console.log(data);
      });
    }
    else if (this.path === 'Senjata') {
      this.itemSrv.getAllSenjata().snapshotChanges().pipe(
          map( changes =>
              changes.map(c => ({id: c.key, ...c.payload.val()}))
          )
      ).subscribe(data => {
        this.item = data;
        console.log(data);
      });
    }
  }
}
