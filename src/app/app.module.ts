import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LaureatesComponent } from './laureates/laureates.component';
import { PrizesComponent } from './prizes/prizes.component';

import { LaureateHttpService } from './laureates/laureate-http.service';
import { PrizeHttpService } from './prizes/prize-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LaureatesComponent,
    PrizesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [LaureateHttpService, PrizeHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
