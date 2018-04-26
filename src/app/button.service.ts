import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ButtonService {
  private buttonSource = new Subject<boolean>();
  currentButton = this.buttonSource.asObservable();
  private backButtonSource = new Subject<boolean>();
  backCurrentButton = this.backButtonSource.asObservable();
  private homeButtonSource = new Subject<boolean>();
  homeCurrentButton = this.homeButtonSource.asObservable();

  constructor() { }

  changeButton(status: boolean) {
    this.buttonSource.next(status);  // holds the value
  }

  changeGoBack(status: boolean){
    this.backButtonSource.next(status);
  }

  changeHome(status: boolean){
    this.homeButtonSource.next(status);
  }

}
