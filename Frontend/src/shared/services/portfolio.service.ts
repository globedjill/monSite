import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Portfolio } from '../modeles/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  public portFolioTab: Portfolio [] = [];
  public portFolioTab$: BehaviorSubject<Portfolio[]> =  new BehaviorSubject([]);
  public portfolio: Portfolio;

  constructor(
    private http: HttpClient,
  ) { }

  emmetreLePortFolio(){
    this.portFolioTab$.next(this.portFolioTab);
  }

  createPortfolio(newPortfolio: Portfolio){
    this.portFolioTab.push(newPortfolio);
    this.savePortfolioOnDb(newPortfolio);
    this.emmetreLePortFolio();
  }

  /* Queries*/

  savePortfolioOnDb(portfolio: Portfolio){
    this.http.post<Portfolio>('/api/portfolio', portfolio).subscribe(()=>{});
  }

  recupPortfolio(){
    this.http.get<Portfolio[]>('/api/portfolio').subscribe(
      (portfolio: Portfolio[]) => {
        this.portFolioTab = portfolio;
        this.emmetreLePortFolio();
      }
    );
  }

  updateSiteOfPortfolio(site: Portfolio, id: String){
    this.http.post<Portfolio>('/api/portfolio/update/' + id , site).subscribe(
      ()=> {}
    );
  }

  deleteSite(id: String){
    this.http.delete('api/portfolio/' + id ).subscribe(()=>
      (site: Portfolio[]) => {
        this.portFolioTab = site;
    });
    this.recupPortfolio();
  }
}
