import { ACTIONS } from 'src/app/actions/ACTIONS';

import { Action } from '@ngrx/store';
import { IListe, Liste } from 'src/app/liste';

export class AjouterLivre implements Action {
    // type = nom unique, écouté par le reducer
    readonly type = ACTIONS.GET_ADD_BOOK;
    // Data envoyées
    constructor(
        public payload: IListe
    ) { }
}

export class SupprimerLivre implements Action {
    readonly type = ACTIONS.GET_DELETE_BOOK;
    constructor(
        public payload: Liste[]
    ) {}
}

export class ListeRead {
    readonly type = ACTIONS.GET_READ_BOOK;
}

// Précise ceux qui ont besoin d'un payload
export type ActionsLivre = AjouterLivre | SupprimerLivre;
