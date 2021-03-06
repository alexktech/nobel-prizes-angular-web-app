import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LaureatesComponent } from './laureates/laureates.component';
import { PrizesComponent } from './prizes/prizes.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '',          component: HomeComponent },
  { path: 'laureates', component: LaureatesComponent },
  { path: 'prizes',    component: PrizesComponent },
  { path: '**',        component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
