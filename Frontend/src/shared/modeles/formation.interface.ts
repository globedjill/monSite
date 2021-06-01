export interface Formation {
  diplome: string;
  nomFormation: string;
  option?: string;
  // image?: string;
  // alt: string;
  ecoles: Lieu[];
  // adresse?: string;
  // dateEntree: any;
  // dateSortie: Date;
  contenu: string;
  liste?: string[];
  // lien?: string;
}

export interface Lieu {
  nomEcole: string;
  image?: any;
  alt: string;
  departement: string;
  cp: number;
  dateEntree: Date;
  dateSortie:  Date;
  lien?: string;
}
