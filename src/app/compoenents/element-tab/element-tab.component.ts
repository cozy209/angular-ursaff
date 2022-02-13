import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import {Accountelement} from "../../model/accountelement.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-element-tab',
  templateUrl: './element-tab.component.html',
  styleUrls: ['./element-tab.component.css']
})
export class ElementTabComponent implements OnInit {


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

  @Input()
  rowData: Accountelement[] | undefined;

  count = {actualized: 0, reference: 0};

  faFileExcel = faFileExcel;
  radiotab = 1;

  eventsSubject: Subject<void> = new Subject<void>();

  emitEventToChild() {
    this.eventsSubject.next();
  }

  constructor() { }

  ngOnInit(): void {
  }

  setRadioTab(id: number) {
    this.radiotab = id;
  }

}
