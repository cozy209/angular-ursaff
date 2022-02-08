import { Component, OnInit } from '@angular/core';
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-element-tab',
  templateUrl: './element-tab.component.html',
  styleUrls: ['./element-tab.component.css']
})
export class ElementTabComponent implements OnInit {

  count = {actualized: 0, reference: 0};

  faFileExcel = faFileExcel;
  radiotab = 1;

  constructor() { }

  ngOnInit(): void {
  }

  setRadioTab(id: number) {
    this.radiotab = id;
  }
}
