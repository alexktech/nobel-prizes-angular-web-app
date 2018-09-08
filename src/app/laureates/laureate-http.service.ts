import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Laureate } from '../models/laureate.model';


const dataFormat = 'json';
const url = `http://api.nobelprize.org/v1/laureate/${dataFormat}`;


@Injectable()
export class LaureateHttpService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Laureate[]>(url);
  }
}
