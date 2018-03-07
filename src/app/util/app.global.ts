// import { Md5 } from 'ts-md5/dist/md5'
import { Injectable } from '@angular/core';

import { AppConstants } from './app.constants'
import { AppKeys } from './app.keys'

@Injectable()
export class AppGlobal {

  constants = new AppConstants();
  keys = new AppKeys();

  constructor() {}

  getBaseUrl() {
    return `${this.constants.SERVER_IP}:${this.constants.SERVER_PORT}`;
  }

  getConstants() {
    return this.constants;
  }

  getClientSecret() {
    return this.keys.getClientSecret();
  }

  getMD5(message) {
    // let md5 = new Md5();
    //
    // // Append incrementally your file or other input
    // // Methods are chainable
    // md5.appendStr(message);
    //
    // // Generate the MD5 hex string
    // return md5.end().toString();
    return 'nothing';
  }

  log (tag: any, message?: string) {
    if (message) {
      console.log(`${tag}: ${message}`);
    } else {
      console.log(tag);
    }
  }

}
