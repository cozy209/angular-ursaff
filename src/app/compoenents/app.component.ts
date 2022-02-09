import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Accountelement} from "../model/accountelement.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ursaff';

  rowData: Accountelement[] | undefined;

  apiService:ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
    apiService.getAllElements().subscribe(result=> {
      this.rowData=result
      console.log(this.rowData);
    });
  }

  filterData(criteria: Accountelement) {
    this.apiService.getElementsForCriterias(criteria).subscribe(result=> {
      this.rowData=result
      console.log(this.rowData);
    });
  }
}
