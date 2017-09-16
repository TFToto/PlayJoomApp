import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PjddataService {

   private _new_token: string;

   constructor(public http: Http) {

      console.log('PlayJoom Deamon service is connected....');
  }

   getAlbums() {

      return this.http.get('/api/albums')
         .map((res: Response) => {

            this._new_token = res.headers.get('Authorization');

            if (this._new_token !== '') {
               localStorage.setItem('pja_current_token', this._new_token);
            }

            return res;
         });
  }

  getCoverGallery(item: any) {

      return this.http.get('/api/cover/gallery?coverid=32')
         .map((res: Response) => {

            this._new_token = res.headers.get('Authorization');

            if (this._new_token !== '') {
               localStorage.setItem('pja_current_token', this._new_token);
            }

            return res;
         });
  }
}
