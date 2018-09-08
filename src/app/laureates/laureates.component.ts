import { Component, OnInit } from '@angular/core';

import { Laureate } from '../models/laureate.model';
import { LaureateHttpService } from './laureate-http.service';


@Component({
  selector: 'app-laureates',
  templateUrl: './laureates.component.html',
  styleUrls: ['./laureates.component.css']
})
export class LaureatesComponent implements OnInit {
  columnsToDisplay = ['name', 'nationality', 'gender', 'prizes'];

  laureates: Laureate[] = [];

  constructor(private laureateHttp: LaureateHttpService) {  }

  ngOnInit() {
    this.laureateHttp.get().subscribe(response => this.laureates = response);
  }

}
