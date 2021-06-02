export interface Frescoes {
  ID: number,
  CODE_INSEE: number;
  CATEGORIE: string;
  ETAT_OEUVRE: string;
  PHOTO: string;
  ETAT_SUPPORT: string;
  COMMENTAIRE: string;
  SUPPORT: string;
  ANNEE_CREATION: number;
  ARTISTE: string;
  MAITRE_OEUVRE: string;
  PROPRIETAIRE: string;
  MNEMO: string;
  NUM_POSTAL: number;
  SECTION: string;
  PARCELLE: number;
  GEO_POINT: string;
  GEO_SHAPE: {
    type: string;
    coordinates: [number, number];
  };
  NOM_RUE: string;
}
