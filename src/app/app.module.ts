import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {AgGridModule} from "ag-grid-angular";
import { FiltersComponent } from './filters/filters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}