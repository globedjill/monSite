import { Subscription } from 'rxjs';
import { UserSession } from './../../../../shared/modeles/userSession.interface';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/shared/services/users.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  public userSession: UserSession;
  public userSub: Subscription;

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
    this.userSub = this.userService.idSession$.subscribe(
      (userSession: UserSession)=>{
        this.userSession = userSession;
      }
    );
  }

}
