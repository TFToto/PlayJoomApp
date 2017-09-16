import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

   private _token: string;
   private _response: string;

   constructor(private http: Http) { }

      login(username: string, password: string) {

         return this.http.post('/api/user/getToken', { username: username, password: password })
            .map((res: Response) => {

                // login successful if there's a jwt token in the response
                this._token = res.json().token;
                this._response = res.json().response;

                if (this._response === 'Authentication successful' && this._token !== '') {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('pja_current_token', this._token);
                }
                return res.json();
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('pja_current_token');
    }
}