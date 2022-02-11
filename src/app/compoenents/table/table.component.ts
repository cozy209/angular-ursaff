import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import { ColDef } from 'ag-grid-community';
import {Accountelement} from "../../model/accountelement.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  rowData: Accountelement[] | undefined;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;

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

  constructor() {}

  ngOnInit(): void {
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
}
