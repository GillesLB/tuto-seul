import { Component, OnInit } from '@angular/core';

import { Liste } from 'src/app/liste';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ListeRead, SupprimerLivre } from 'src/app/actions/livre.action';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  readonly p = 1;

  listeLivres;

  livre$: Observable<object>;

  constructor(
    private store: Store<{livre: object}>
  ) {
    this.livre$ = store.pipe(select('livre'));
  }

  ngOnInit() {
    this.afficherListe();
  }

  afficherListe() {
    this.store.dispatch(new ListeRead());
  }

  supprimerLivre(livre: Liste) {
    this.livre$.subscribe((bla) => { this.listeLivres = bla; });
    const livreASupprimer = this.listeLivres.data.findIndex(
      (aSupprimer) => {
        if (aSupprimer === livre) {
          return true;
        }
      }
    );
    this.listeLivres.data.splice(livreASupprimer, 1);
    this.store.dispatch(new SupprimerLivre(this.listeLivres.data));
  }

}
