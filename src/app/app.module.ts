import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import { ZooComponent } from './zoo/zoo.component';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent,
  ],
  imports: [
    NgxsModule.forRoot([ZooComponent], {
      developmentMode: !environment.production
    }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
