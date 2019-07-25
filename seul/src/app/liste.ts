export interface IListe {
    nom: string;
    categorie: string;
    prix: number;
}

// A déclarer en public, sinon inaccessible !
export class Liste implements IListe {

    constructor(
        public nom: string,
        public categorie: string,
        public prix: number
    ) {}

}
