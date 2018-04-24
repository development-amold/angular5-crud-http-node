import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { CoinService } from '../coin.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  title = "New Coin";
  angForm: FormGroup;
  constructor(private coinservice: CoinService, private fb: FormBuilder,private titleService: Title) {
    this.createForm();
    this.titleService.setTitle(this.title);
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
