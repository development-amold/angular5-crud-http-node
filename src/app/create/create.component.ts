import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CoinService } from '../coin.service';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  title = "New Coin";
  angForm: FormGroup;
  constructor(private coinservice: CoinService, private fb: FormBuilder,private titleService: Title, private _buttonService: ButtonService) {
    this.createForm();
    titleService.setTitle(this.title);
    _buttonService.changeButton(true);
    _buttonService.changeGoBack(true);
    _buttonService.changeHome(true);
    //Title is angulars default service imported and it must be default function name <setTitle>
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }
  addCoin(name, price) {
    this.coinservice.addCoin(name, price);
  }  
  
  ngOnInit() {
  }

}
