import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { MomosService } from './../../services/momos.service';
import { Momo } from './../momo.model';

@Component({
  selector: 'app-momo-detail',
  templateUrl: './momo-detail.component.html',
  styleUrls: ['./momo-detail.component.css']
})
export class MomoDetailComponent implements OnInit {

  item: Momo = new Momo('', '', 0, '');

  constructor(private momoService: MomosService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.onUpdateItem(this.route.snapshot.params['id'])

    this.route.params.subscribe(
      (params: Params) => {
        this.onUpdateItem(params['id']);
      }
    )
  }

  onUpdateItem(item_id) {
    this.momoService.retrieveMomo(item_id).subscribe(
      (data: Momo) => {
        this.item = data;
      }
    )
  }

}
