import {Component, Input, OnInit} from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
  }

  pad(num: number, size: number) {
    let number = num.toString();
    while (number.length < size) number = "0" + number;
    return number;
  }


}
