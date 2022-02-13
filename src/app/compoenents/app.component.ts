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
  totalCount!: number;
  pageNb : number = 1;
  elementNb : number = 10;
  allAccountNumbers!: (number | undefined) [];
  allAccountTypes!: (string | undefined) [];

  apiService:ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
    this.goToPage(this.pageNb);
    this.getAllAccountNb()
    this.getAllAccountTypes();
  }


  filterData(criteria: Accountelement) {
    this.apiService.getElementsForCriterias(criteria).subscribe(result=> {
      this.rowData=result;
      console.log(this.rowData);
    });
  }

  getAllAccountNb(){
    this.apiService.getAllElements().subscribe( result => {
      this.allAccountNumbers = result.map(element => element.contributorAccountNo)
    })
  }

  getAllAccountTypes(){
    this.apiService.getAllElements().subscribe( result => {
      let accountTypes = result.map(element => element.accountType);
      this.allAccountTypes = accountTypes.filter( (item, pos) => {return accountTypes.indexOf(item) == pos} );
    })
  }

  goToPage($event: number) {
    this.pageNb = $event;
    this.getElementsForPageAndElementNumber();
  }

  private getElementsForPageAndElementNumber() {
    this.apiService.getElementsForPageAndElementNumber(this.pageNb, this.elementNb).subscribe(result => {
      this.rowData = result.body;
      let xTotalCount = result.headers.get('X-Total-Count');
      this.totalCount = parseInt(xTotalCount != null ? xTotalCount : "0");
      console.log(this.rowData);
      console.log(this.totalCount);
    })
  }

  changeElementNumber($event: number) {
    this.elementNb = $event;
    this.getElementsForPageAndElementNumber();
  }
}
