import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { NgxsModule } from '@ngxs/store';
import {DesignutilityService} from "./designutility.service";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppState} from "./states/app.state";

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgxsModule.forRoot([AppState]), NgxsLoggerPluginModule.forRoot(), NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
