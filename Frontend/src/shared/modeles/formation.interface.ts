export interface Formation {
  nomFormation: string;
  option?: string;
  image: string;
  alt: string;
  lieu: string;
  adresse?: string;
  dateEntree: Date;
  dateSortie: Date;
  contenu: string;
  liste?: string[];
  lien?: string;
}
