import { PortfolioService } from './../../../../shared/services/portfolio.service';
import { Subscription } from 'rxjs';
import { UserSession } from './../../../../shared/modeles/userSession.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/shared/services/users.service';
import { Portfolio } from 'src/shared/modeles/portfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  public userSession: UserSession;
  public userSub: Subscription;

  public portfoliosub: Subscription;
  public portfolioTab: Portfolio[];

  constructor(
    private userService: UsersService,
    private portfolioService: PortfolioService,
  ) { }

  ngOnInit(): void {
    this.userSub = this.userService.idSession$.subscribe(
      (userSession: UserSession)=>{
        this.userSession = userSession;
      }
    );

    this.portfoliosub = this.portfolioService.portFolioTab$.subscribe(
      (portfolioTab: Portfolio[])=>{
        this.portfolioTab = portfolioTab;
      }
    );

    this.portfolioService.recupPortfolio();
  }

  editSite(site: Portfolio){
    this.portfolioService.portfolio = site;
  }

  deleteUnSite(id: String){
    this.portfolioService.deleteSite(id);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
    this.portfoliosub.unsubscribe();
  }

}
