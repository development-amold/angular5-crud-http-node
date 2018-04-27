import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';

export const appRoutes: Routes = [
  {
    path: '', component: SiteLayoutComponent,
    children:[ // relative parent path
      { path: '', component: HomeComponent}, //---root path---
      { path: 'home', component: HomeComponent },
      { path: 'create', component: CreateComponent },
      { path: 'edit/:id',component: EditComponent  },
      { path: 'index', component: IndexComponent },
      // { path: '**', component: PageNotFoundComponent},
      { path: '**', redirectTo: "",pathMatch: "full"}, //--redirect to root path if invalid path found , This wildCard route always be at last
   ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
