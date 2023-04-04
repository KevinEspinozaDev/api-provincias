import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
      private router: Router,
      private authService: AuthService,
    ) {}

  canActivate(): boolean | UrlTree {

    if (this.authService.isUserLogged()) {
      return true;
    }else{
      console.log('Redirección por no estar loggeado.');
      this.router.navigate(['login']);
      return false;
    }
  }

}
