import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../items.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-pakaianadat',
  templateUrl: './pakaianadat.page.html',
  styleUrls: ['./pakaianadat.page.scss'],
})
export class PakaianadatPage implements OnInit {
  item: any;
  constructor(
      private itemSrv: ItemsService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.itemSrv.getAllPakaian().snapshotChanges().pipe(
        map( changes =>
            changes.map(c => ({id: c.key, ...c.payload.val()}))
        )
    ).subscribe(data => {
      this.item = data;
      console.log(data);
    });
  }
}
