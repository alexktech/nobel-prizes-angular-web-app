import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Laureate } from '../models/laureate.model';


const url = 'http://api.nobelprize.org/v1/laureate/json';


@Injectable()
export class LaureateHttpService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<{laureates: Laureate[]}>(url)
                    .pipe(map(response => response.laureates));
  }
}
