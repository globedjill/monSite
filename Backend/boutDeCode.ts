import { fromEvent } from "rxjs"

// J'arrive a sauvegarder mon formulaire avec mes elements et mon
// fichier image directement sur mon dossier images dans mon back
// mais impossible de recuperer l'image sur mon fromEvent.
// Faut 'il faire une querie pour recuperer sa ?'


// BackEnd
  // Multer
  const multer = require('multer');
  const upload = multer({
      storage: multer.diskStorage({
          destination: (req, file, cb) => {
              cb(null, path.join(__dirname, './public/upload'));
          },
          filename: (req, file, cd) => {
              cd(null, `${ file.originalname }`);
          }
      })
  });

  // Fichier static
  app.use(express.static(path.join(__dirname, '/public')));
  app.use(express.static(path.join(__dirname, '/public/upload')));

  app.post("/api/upload", upload.array('f'), (req, res, next) => {
      res.end();
  });

  // Queries
  app.delete('/api/upload/:filename', (req, res, next) => {
      const { filename } = req.params;
      const e = req.params;
      fs.unlink(path.join(__dirname, `upload/${filename}`), err => {
          res.end();
      })
      console.log(e);
  });

// Frontend
  onSaveFormation(){
    this.formationForm.controls.image.setValue(this.imageVal);

    this.parcourService.createNewFormation(this.formationForm.value);
    this.router.navigate(['parcour']);
    }

  addFile($event){
    this.imageVal ='upload/' + $event.target.files[0].name; //permet de set le bon path normalement
    const file = $event.target.files;
    this.upLoadFileService.addFile(file);
    this.noFile = this.upLoadFileService.filesHolder$.value.length;
    }
  // ACTION SUR LE SERVICE
  recupFormations(){
      this.http.get<Formation[]>('/api/formations')
        .subscribe((formations: Formation[])=> {
        this.formationTab = formations;
        this.emettreLesFormationsRecuperer();
      });
    }
