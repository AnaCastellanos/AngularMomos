import { Component, OnInit } from '@angular/core';

import { MomosService } from './../../services/momos.service';

@Component({
  selector: 'app-momo-list',
  templateUrl: './momo-list.component.html',
  styleUrls: ['./momo-list.component.css']
})
export class MomoListComponent implements OnInit {

  momos = [];
  momosIndex = [];

  constructor(private momoService: MomosService) { }

  ngOnInit() {
    this.onUpdateData();
    this.momoService.dataChanged.subscribe(
      (data: any) => {
        this.onUpdateData();
      }
    )
  }

  onUpdateData() {
    this.momoService.listMomos().subscribe(
      (data: any) => {
        this.momos = data;
        this.momosIndex = Object.keys(data);
      }
    )
  }

}
