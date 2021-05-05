import { PortfolioService } from './../../../../../shared/services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Portfolio } from 'src/shared/modeles/portfolio.interface';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.sass']
})
export class PortfolioFormComponent implements OnInit {

  public id : string;
  public portfolioForm: FormGroup;
  public site: Portfolio;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      const siteRecup = this.portfolioService.portfolio;
      if(this.id){
        this.initForm(siteRecup);
      }
      else{
        this.initForm(this.site);
      }
    })
  }

    initForm(site:Portfolio = {
      name: null,
      lienSite: null,
      description: null,
      lienGit:null,
      image:null
    }){
      this.portfolioForm = this.fb.group({
        name:[site.name, Validators.required ],
        lienSite:[site.lienSite ],
        description:[site.description, Validators.required],
        lienGit:[site.lienGit],
        image:[site.image]
      })
    }

    onModifyPorfolio(){
      this.portfolioService.updateSiteOfPortfolio(this.portfolioForm.value, this.id);
      this.router.navigate(['portfolio']);
    }


    onSavePortfolio(){
      this.portfolioService.createPortfolio(this.portfolioForm.value);
      this.router.navigate(['portfolio']);
    }

    retour(){
      this.router.navigate(['portfolio']);
    }
}
