import { ACTIONS } from 'src/app/actions/ACTIONS';

import { INITIAL_STATE } from 'src/app/store/INITIAL_STATE';
import { ActionsLivre } from 'src/app/actions/livre.action';

// = export function livreReducer(state = INITIAL_STATE, action) {, en ES5
export const livreReducer = (state = INITIAL_STATE, action: ActionsLivre) => {
    switch (action.type) {
        case ACTIONS.GET_ADD_BOOK:
            const livreAAjouter = action.payload;
            return {
                // clonage du state
                ...state,
                // ajout de la donnée dans le nouveau state
                data: [...state.data, livreAAjouter]
            };
        case ACTIONS.GET_DELETE_BOOK:
            const livreASupprimer = action.payload;
            return {
                // nouveau state, sans la donnée supprimée
                data: livreASupprimer
            };
        case ACTIONS.GET_READ_BOOK:
            return state;
        default:
            return state;
    }
};
