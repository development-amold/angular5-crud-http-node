import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinService {
  result: any;
  api_uri = environment.api_url;
  constructor(private http: HttpClient) { }

  addCoin(name, price) {
    const uri = this.api_uri + '/coins/add';
    const obj = {
      name: name,
      price: price
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  getCoins() {
    const uri = this.api_uri + '/coins';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }  

  editCoin(id) {
    const uri = this.api_uri + '/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateCoin(name, price, id) {
    const uri = this.api_uri + '/update/' + id;
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }  

}
