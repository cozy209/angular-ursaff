import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {ColDef, GridOptions} from 'ag-grid-community';
import {Accountelement} from "../../model/accountelement.model";
import {Observable, Subscription} from "rxjs";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  rowData: Accountelement[] | undefined = undefined;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;

  gridOptions : GridOptions;

  columnDefs: ColDef[] = [
    { field: 'contributorAccountNo', sortable: true },
    { field: 'periodStart', sortable: true, valueGetter: params => {
        return params.data.periodStart.year + "-" + this.pad(params.data.periodStart.month,2) + "-" + this.pad(params.data.periodStart.day,2);
      } },
    { field: 'periodEnd', sortable: true, valueGetter: params => {
        return params.data.periodEnd.year + "-" + this.pad(params.data.periodEnd.month,2) + "-" + this.pad(params.data.periodEnd.day,2);
      } },
    { field: 'accountType', sortable: true },
    { field: 'activityType', sortable: true },
    { field: 'contributorCategory', sortable: true },
    { field: 'imageState', sortable: true }
  ];

  elementNumbers: number[] = [5,10,20,50,100];

  @Input()
  pageNb!: number;

  @Output()
  pageNbChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  elementNb!: number;

  @Output()
  elementNbChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  totalCount!: number;

  private eventsSubscription!: Subscription;

  @Input()
  events!: Observable<void>;

  constructor() {
    this.gridOptions = {
      suppressPaginationPanel : true,
      pagination : true
    }
  }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.exportGridExcel());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  pad(num: number, size: number) {
    let number = num.toString();
    while (number.length < size) number = "0" + number;
    return number;
  }

  getMaxPageNumber() {
    return Math.ceil(this.totalCount/this.elementNb);
  }

  goToPage(pageNumber: number) {
    this.pageNb = pageNumber;
    this.pageNbChange.emit(this.pageNb);
  }

  // Export data with ag grid

  exportGridAgGrid(){
    this.gridOptions.api!.exportDataAsCsv(this.getParams());
  }

  getParams() {
    return {
      columnSeparator: ";",
    };
  }

  // Axport data without ag grid

  exportGridExcel(){

    let exportData = this.format(this.rowData);
    let workSheet = XLSX.utils.json_to_sheet(exportData);
    let workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet1");
    XLSX.writeFile(workBook,"export.xlsx");
  }

  format(rowData: Accountelement[] | undefined) {
    if (rowData != undefined){
      let formatedData : Object[] = []
      rowData.forEach( element => formatedData.push(
          {
            contributorAccountNo: element.contributorAccountNo,
            periodStart : element.periodStart?.year+"-"+element.periodStart?.month+"-"+element.periodStart?.day,
            periodEnd : element.periodEnd?.year+"-"+element.periodEnd?.month+"-"+element.periodEnd?.day,
            accountType : element.accountType,
            activityType : element.activityType,
            contributorCategory : element.contributorCategory,
            imageState : element.imageState
          }
      ))
      return formatedData;
    } else {
      return [];
    }
  }
}
