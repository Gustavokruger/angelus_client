import { Injectable } from '@angular/core';

import * as moment from 'moment';
//import 'moment/locale/pt-br';
//moment.locale('pt-br');

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  dateTimeDB() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }

  dateTimeBR() {
    return moment().format('DD/MM/YYYY HH:mm:ss');
  }

  dateTimeBR2DB(dt: any, check: boolean = false) {
    return this.checkdate(
      dt,
      check,
      'DD/MM/YYYY HH:mm:ss',
      'YYYY-MM-DD HH:mm:ss'
    );
  }

  dateTimeDB2BR(dt: any, check: boolean = false) {
    return this.checkdate(
      dt,
      check,
      'YYYY-MM-DD HH:mm:ss',
      'DD/MM/YYYY HH:mm:ss'
    );
  }

  checkdate(
    dt: any,
    check: boolean,
    formatDate: any,
    formatReturn: any = null
  ) {
    if (check) {
      return moment(dt, formatDate).isValid()
        ? moment(dt, formatDate).format(formatReturn)
        : '';
    } else {
      return moment(dt, formatDate).format(formatReturn);
    }
  }
}
