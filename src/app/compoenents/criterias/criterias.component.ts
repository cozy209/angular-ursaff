import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faSyncAlt, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Accountelement} from "../../model/accountelement.model";

@Component({
  selector: 'app-criterias',
  templateUrl: './criterias.component.html',
  styleUrls: ['./criterias.component.css']
})
export class CriteriasComponent implements OnInit {

  faTrash = faTrash;
  faSyncAlt = faSyncAlt;

  criteria: Accountelement;

  @Input()
  allAccountNumbers!: (number | undefined) [];

  @Input()
  allAccountTypes!: (string | undefined) [];

  @Input()
  rowData: Accountelement[] | undefined;

  @Output()
  onFilterData: EventEmitter<Accountelement> = new EventEmitter<Accountelement>();

  constructor() {
    this.criteria = new Accountelement();
  }

  ngOnInit(): void {
  }

  filterData(){
    this.onFilterData.emit(this.criteria);
  }

  resetCriteria() {
    this.criteria = new Accountelement();
    this.filterData();
  }
}
