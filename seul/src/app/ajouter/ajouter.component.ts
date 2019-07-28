import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { listeObjets } from 'src/app/liste/listeObjets';
import { Liste } from 'src/app/liste';
import { Observable } from 'rxjs';
import { AjouterLivre } from 'src/app/actions/livre.action';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  ajouterForm: FormGroup;

  livre$: Observable<object>;

  constructor(
    private router: Router,
    private store: Store<{livre: object}>
  ) {
    this.livre$ = store.pipe(select('livre'));
  }

  ngOnInit() {
    this.ajouterForm = new FormGroup({
      titre: new FormControl(),
      categorie: new FormControl(),
      prix: new FormControl(),
    });
  }

  ajouterLivre() {
    const titre = this.ajouterForm.get('titre').value;
    const categorie = this.ajouterForm.get('categorie').value;
    const prix = this.ajouterForm.get('prix').value;
    const livreAAjouter = new Liste(titre, categorie, prix);

    this.store.dispatch(new AjouterLivre(livreAAjouter));
    this.router.navigate(['liste']);
  }

}
