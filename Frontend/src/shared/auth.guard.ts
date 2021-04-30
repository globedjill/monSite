import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { UsersService } from "./services/users.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor(
    private userService: UsersService
  ){}

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
    ): boolean {
      return this.userService.idSession$.value.isAuth
    }
}
