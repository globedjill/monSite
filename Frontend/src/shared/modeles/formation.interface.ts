export interface Formation {
  nomFormation: string;
  option?: string;
  // image: File;
  alt: string;
  lieu: string;
  adresse?: string;
  dateEntree: Date;
  dateSortie: Date;
  contenu: string;
  liste?: string[];
  lien?: string;
}
