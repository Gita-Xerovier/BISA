import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../items.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-batik',
  templateUrl: './batik.page.html',
  styleUrls: ['./batik.page.scss'],
})
export class BatikPage implements OnInit {
  batik: any;
  constructor(
      private itemSrv: ItemsService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.itemSrv.getAllBatik().snapshotChanges().pipe(
        map( changes =>
            changes.map(c => ({...c.payload.val}))
        )
    ).subscribe(data => {
      this.batik = data;
      console.log(data);
    });
  }
}
