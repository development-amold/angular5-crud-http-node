import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { CoinService } from './coin.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { SiteHeaderComponent } from './layouts/site-header/site-header.component';
import { SiteFooterComponent } from './layouts/site-footer/site-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    PageNotFoundComponent,
    HomeComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [CoinService,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
