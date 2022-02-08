import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {AgGridModule} from "ag-grid-angular";
import { FiltersComponent } from './filters/filters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CriteriasComponent } from './criterias/criterias.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ElementTabComponent } from './element-tab/element-tab.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FiltersComponent,
    CriteriasComponent,
    ElementTabComponent
  ],
    imports: [
        BrowserModule,
        AgGridModule.withComponents([]),
        NgbModule,
        FontAwesomeModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}