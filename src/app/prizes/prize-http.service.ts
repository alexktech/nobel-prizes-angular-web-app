import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Prize } from '../models/prize.model';


const url = 'http://api.nobelprize.org/v1/prize/json';


@Injectable()
export class PrizeHttpService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<{prizes: Prize[]}>(url)
                    .pipe(map(response => response.prizes));

  }
}
