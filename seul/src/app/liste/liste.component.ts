import { Component, OnInit } from '@angular/core';

import { Liste } from 'src/app/liste';

import { listeObjets } from 'src/app/liste/listeObjets';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  readonly p = 1;

  listeObjets: Liste[] = [];

  constructor() { }

  ngOnInit() {
    this.listeObjets = listeObjets;
  }

}
