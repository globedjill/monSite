export interface Formation {
  niveau: NiveauGroup;
  diplome: string;
  nomFormation: string;
  option?: string;
  ecoles: Lieu[];
  contenu: string;
  liste?: string[];
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

export interface NiveauGroup{
  name: string;
  lastName: string;
  niveau: Niveau[];
}

export interface Niveau{
  value: string;
  viewValue: string;
}

export interface ValueLieu{
  name: string;
  cp: string;
  dept: string;
  lien: string;
}
