import { CoinService } from '../coin.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ButtonService } from '../button.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  coins: any;
  errorMsg: any;

  constructor(private location: Location, private http: HttpClient, private _service: CoinService, private titleService: Title, private _buttonService: ButtonService, private _flashMessageService: FlashMessagesService)  { 
    this.titleService.setTitle("Index");
    this._buttonService.changeButton(true);
    _buttonService.changeGoBack(true);
    _buttonService.changeHome(true);
  }

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this._service.getCoins().subscribe(res => {
      this.coins = res;
    });
  }

  deleteCoin(id): void {
    this._service.deleteCoin(id).subscribe(res => {
      this.coins = this.getCoins();
      this._flashMessageService.show(res["coin"], { cssClass: 'alert-success', timeout: 3000 });
    },error => {
      this._flashMessageService.show(error.message || "Internal Server Error", { cssClass: 'alert-danger', timeout: 3000 });
    });

  }    

}