"use strict";
var _this = this;
exports.__esModule = true;
// J'arrive a sauvegarder mon formulaire avec mes elements et mon
// fichier image directement sur mon dossier images dans mon back
// mais impossible de recuperer l'image sur mon fromEvent.
// Faut 'il faire une querie pour recuperer sa ?'
// BackEnd
// Multer
var multer = require('multer');
var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, './public/upload'));
        },
        filename: function (req, file, cd) {
            cd(null, "" + file.originalname);
        }
    })
});
// Fichier static
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/upload')));
app.post("/api/upload", upload.array('f'), function (req, res, next) {
    res.end();
});
// Queries
app["delete"]('/api/upload/:filename', function (req, res, next) {
    var filename = req.params.filename;
    var e = req.params;
    fs.unlink(path.join(__dirname, "upload/" + filename), function (err) {
        res.end();
    });
    console.log(e);
});
// Frontend
onSaveFormation();
{
    this.formationForm.controls.image.setValue(this.imageVal);
    this.parcourService.createNewFormation(this.formationForm.value);
    this.router.navigate(['parcour']);
}
addFile($event);
{
    this.imageVal = 'upload/' + $event.target.files[0].name; //permet de set le bon path normalement
    var file = $event.target.files;
    this.upLoadFileService.addFile(file);
    this.noFile = this.upLoadFileService.filesHolder$.value.length;
}
// ACTION SUR LE SERVICE
recupFormations();
{
    this.http.get('/api/formations')
        .subscribe(function (formations) {
        _this.formationTab = formations;
        _this.emettreLesFormationsRecuperer();
    });
}
