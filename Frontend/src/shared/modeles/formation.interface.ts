export interface Formation {
  nomFormation: string;
  option?: string;
  image: any;
  alt: string;
  lieu: string;
  adresse?: string;
  dateEntree: Date;
  dateSortie: Date;
  contenu: string;
  liste?: string[];
  lien?: string;
}
