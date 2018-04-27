import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { CoinService} from '../coin.service';
import { ButtonService } from '../button.service';
import { Coin } from '../coin';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title = "Edit Coin";
  coin: any;
  angForm: FormGroup;
  
  constructor(private route: ActivatedRoute, private router: Router, private _service: CoinService, private fb: FormBuilder, private titleService: Title, private _buttonService: ButtonService, private _flashMessageService: FlashMessagesService) 
  { 
    this.createForm();
    this.titleService.setTitle(this.title) 
    this._buttonService.changeButton(true);
    _buttonService.changeGoBack(true);
    _buttonService.changeHome(true);    
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  updateCoin(): void {
    this._service.updateCoin(this.coin).subscribe(res => {
      this.router.navigate(['index']);
      this._flashMessageService.show(res["coin"], { cssClass: 'alert-success', timeout: 3000 });
    },error =>{
      this._flashMessageService.show(error.message, { cssClass: 'alert-danger', timeout: 3000 });
    })
}  
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coin = this._service.editCoin(params['id']).subscribe(res => {
        this.coin = res;
      });
    });    
  }
  

}
