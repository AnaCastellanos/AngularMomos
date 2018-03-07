import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AppGlobal } from './../util/app.global';

import { AuthService } from './../auth/auth.service';

import { Momo } from './../momos/momo.model';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class MomosService {

  public dataChanged = new Subject<any>();
  index = [];

  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private appGlobal: AppGlobal) {}

  listMomos() {

    return this.httpClient.get(
      `${this.appGlobal.getConstants().FIREBASE_IP}/momos.json`,
    );
  }

  retrieveMomo(id) {

    return this.httpClient.get(
      `${this.appGlobal.getConstants().FIREBASE_IP}/momos/${id}.json`,
    );
  }

  createMomo(momo: Momo) {

    return this.httpClient.post(
      `${this.appGlobal.getConstants().FIREBASE_IP}/momos.json`,
      momo
    );
  }

}
