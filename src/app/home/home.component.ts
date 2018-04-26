import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ButtonService } from '../button.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Angular5-Node-MongoDB";
  constructor(private titleService: Title, private _flashMessagesService: FlashMessagesService, private _buttonService: ButtonService) { 
    titleService.setTitle(this.title);
    _buttonService.changeButton(false);
    _buttonService.changeGoBack(false);
    _buttonService.changeHome(false);
  }

  ngOnInit() {
    this._flashMessagesService.show('Welcome to MEAN stack coding!', { cssClass: 'alert-success', timeout: 1000 });
  }


}
