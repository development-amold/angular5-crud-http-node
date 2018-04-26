import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ButtonService } from '../../button.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  
})
export class SiteHeaderComponent implements OnInit {
  isShowAddButton: boolean;
  isShowGoBack: boolean;
  isShowHome: boolean;
  constructor(private location: Location, private _buttonService: ButtonService) { 
    _buttonService.currentButton.subscribe(status => this.isShowAddButton = status);
    _buttonService.backCurrentButton.subscribe(status => this.isShowGoBack = status)
    _buttonService.homeCurrentButton.subscribe(status => this.isShowHome = status)
  }

  ngOnInit() {
    
  }

  goback():void{
    this.location.back();
  }

}
