import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {Date} from "../../model/date.model";
import {Accountelement} from "../../model/accountelement.model";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  accountUR = [
    { accountUR: 99377 },
    { accountUR: 31067 },
    { accountUR: 60023 },
    { accountUR: 57045 },
    { accountUR: 10675 },
    { accountUR: 23687 }
  ];
  accountType = [
    { accountType: 'AccountType1' },
    { accountType: 'AccountType2' },
    { accountType: 'AccountType3' },
    { accountType: 'AccountType4' },
    { accountType: 'AccountType5' },
    { accountType: 'AccountType6' }
  ];

  periodStart: Date | undefined;
  periodEnd: Date | undefined;

  @Input()
  accountNb!: (number | undefined) [];

  @Input()
  accountTypes!: (string | undefined) [];

  @Input()
  criteria!: Accountelement;

  @Input()
  rowData: Accountelement[] | undefined;

  @Output()
  criteriaChange = new EventEmitter<Accountelement>();

  faCalendarAlt = faCalendarAlt;

  constructor() {
  }

  ngOnInit(): void {
  }

  logCriteria() {
    console.log(this.criteria.contributorAccountNo);
    console.log(this.criteria.periodStart);
    console.log(this.criteria.periodEnd);
  }

  getAccountNbs(){
    let accountNbs: number[] = [];
    this.rowData?.forEach( row => {
      if (row.contributorAccountNo != undefined){
        accountNbs.push(row.contributorAccountNo)
      }
    });
    return accountNbs;
  }

  getAccountTypes(){
    let accountNbs: string[] = [];
    this.rowData?.forEach( row => {
      if (row.accountType != undefined && !accountNbs.includes(row.accountType)){
        accountNbs.push(row.accountType)
      }
    });
    return accountNbs;
  }
}
