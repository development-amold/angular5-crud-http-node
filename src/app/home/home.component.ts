import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Angular5-Node-MongoDB";
  constructor(private titleService: Title, private _flashMessagesService: FlashMessagesService) { this.titleService.setTitle(this.title) }

  ngOnInit() {
    this._flashMessagesService.show('Welcome to MEAN stack coding!', { cssClass: 'alert-success', timeout: 1000 });
  }


}
