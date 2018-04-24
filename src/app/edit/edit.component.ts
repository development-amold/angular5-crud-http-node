import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { CoinService} from '../coin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title = "Edit Coin";
  coin: any;
  angForm: FormGroup;
  
  constructor(private route: ActivatedRoute, private router: Router, private service: CoinService, private fb: FormBuilder, private titleService: Title) 
  { 
    this.createForm();
    this.titleService.setTitle(this.title) 
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  updateCoin(name, price) {
    this.route.params.subscribe(params => {
    this.service.updateCoin(name, price, params['id']);
    this.router.navigate(['index']);
  });
}  
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coin = this.service.editCoin(params['id']).subscribe(res => {
        this.coin = res;
      });
    });    
  }

}
