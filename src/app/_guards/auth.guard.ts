import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';

@Injectable()
export class AuthGuard implements CanActivate {

   private token;

   constructor(private router: Router) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      if (localStorage.getItem('pja_current_token')) {

         this.token = jwt_decode(localStorage.getItem('pja_current_token'));
         console.log(moment().format('X'));
         console.log(this.token.exp);
         if (moment().format('X') > this.token.exp) {
            console.log('Token expired since', moment.unix(this.token.exp).format('ddd, YYYY-MM-DD, hh:mm:ssZ'));

            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
         } else {
            // logged in so return true
            return true;
         }
      } else {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }
   }
}
