import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {Date} from "../model/date.model";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  accountNb = [
    { AccountNb: 99377 },
    { AccountNb: 31067 },
    { AccountNb: 60023 },
    { AccountNb: 57045 },
    { AccountNb: 10675 },
    { AccountNb: 23687 }
  ];
  accountUR = [
    { AccountNb: 99377 },
    { AccountNb: 31067 },
    { AccountNb: 60023 },
    { AccountNb: 57045 },
    { AccountNb: 10675 },
    { AccountNb: 23687 }
  ];
  accountType = [
    { AccountNb: 'Maecenas' },
    { AccountNb: 'Curabitur' },
    { AccountNb: 'Praesent' },
    { AccountNb: 'Donec' },
    { AccountNb: 'Pretium' },
    { AccountNb: 'Venenatis' }
  ];

  periodStart: Date | undefined;
  periodEnd: Date | undefined;

  faCalendarAlt = faCalendarAlt;

  constructor() { }

  ngOnInit(): void {
  }

  logPeriods() {
    console.log("periodStart = "+ this.periodStart);
    console.log(this.periodStart)
    console.log("periodEnd = "+this.periodEnd);
    console.log(this.periodEnd)
  }
}
