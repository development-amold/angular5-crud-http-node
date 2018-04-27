import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Coin } from './coin';


@Injectable()
export class CoinService {
  result: any;
  api_uri = environment.api_url + "/coins";
  constructor(private http: HttpClient, private flashMessageService: FlashMessagesService, private _router: Router) { }

  //  OR OTHER WAY OF ADDING USING OBSERVABLES
  addCoin(coin: Coin):Observable<Coin> {
    const uri = this.api_uri + '/add';
    return this.http.post<Coin>(uri, coin);
  }  

  getCoins() {
    const uri = this.api_uri + '/';
    return this.http.get(uri).map(res => {return res;});
  }  

  editCoin(id) {
    const uri = this.api_uri + '/edit/' + id;
    return this.http.get(uri).map(res => {return res;});
  }

  updateCoin(coin: Coin):Observable<Coin> {
    const uri = this.api_uri + '/update/' + coin._id;
    return this.http.put<Coin>(uri,coin);
  } 

  deleteCoin(id):Observable<Coin> {
    const uri = this.api_uri + '/delete/' + id;
    return this.http.delete<Coin>(uri);
  } 

}
