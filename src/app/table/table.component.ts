import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'ContributorAccountNo', sortable: true },
    { field: 'PeriodStart', sortable: true },
    { field: 'PeriodEnd', sortable: true },
    { field: 'AccountType', sortable: true },
    { field: 'ActivityType', sortable: true },
    { field: 'ContributorCategory', sortable: true },
    { field: 'ImageState', sortable: true }
  ];

  rowData = [
    { ContributorAccountNo: 99377, PeriodStart: 'Celica', PeriodEnd: 'Celica', AccountType: 'Celica', ActivityType: 'Celica', ContributorCategory: 1, ImageState: 1 },
    { ContributorAccountNo: 31067, PeriodStart: 'Celica', PeriodEnd: 'Celica', AccountType: 'Celica', ActivityType: 'Celica', ContributorCategory: 1, ImageState: 0 },
    { ContributorAccountNo: 60023, PeriodStart: 'Celica', PeriodEnd: 'Celica', AccountType: 'Celica', ActivityType: 'Celica', ContributorCategory: 2, ImageState: 2 },
    { ContributorAccountNo: 57045, PeriodStart: 'Celica', PeriodEnd: 'Celica', AccountType: 'Celica', ActivityType: 'Celica', ContributorCategory: 1, ImageState: 1 },
    { ContributorAccountNo: 10675, PeriodStart: 'Celica', PeriodEnd: 'Celica', AccountType: 'Celica', ActivityType: 'Celica', ContributorCategory: 2, ImageState: 2 },
    { ContributorAccountNo: 23687, PeriodStart: 'Celica', PeriodEnd: 'Celica', AccountType: 'Celica', ActivityType: 'Celica', ContributorCategory: 1, ImageState: 0 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onExport(){

  }

}
