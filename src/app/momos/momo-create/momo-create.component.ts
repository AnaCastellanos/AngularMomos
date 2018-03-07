import { Component, OnInit } from '@angular/core';

import { MomosService } from './../../services/momos.service';
import { Momo } from './../momo.model';

@Component({
  selector: 'app-momo-create',
  templateUrl: './momo-create.component.html',
  styleUrls: ['./momo-create.component.css']
})
export class MomoCreateComponent implements OnInit {

  constructor(private momoService: MomosService) { }

  ngOnInit() {
  }

  onCreateMomo(form) {
    var momo = new Momo(form.value.name, form.value.description, 0, form.value.url);
    this.momoService.createMomo(momo).subscribe(
      (data: any) => {
        this.momoService.dataChanged.next(momo);
      }
    )
  }

}
