import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { UpdateAdComponent } from './update-ad/update-ad.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdListComponent,
    CreateAdComponent,
    UpdateAdComponent,
    AdDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
