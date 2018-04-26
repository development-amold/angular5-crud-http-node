import { CoinService } from '../coin.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ButtonService } from '../button.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  coins: any;

  constructor(private location: Location, private http: HttpClient, private service: CoinService, private titleService: Title, private _buttonService: ButtonService)  { 
    this.titleService.setTitle("Index");
    this._buttonService.changeButton(true);
    _buttonService.changeGoBack(true);
    _buttonService.changeHome(true);
  }

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    console.log("INSEXS COMIN")
    this.service.getCoins().subscribe(res => {
      this.coins = res;
      console.log(this.coins);
    });
  }

  deleteCoin(id) {
    this.service.deleteCoin(id).subscribe(res => {
      console.log('Deleted');
    });
  }    

}