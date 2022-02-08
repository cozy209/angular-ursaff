import { Component, OnInit } from '@angular/core';
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-criterias',
  templateUrl: './criterias.component.html',
  styleUrls: ['./criterias.component.css']
})
export class CriteriasComponent implements OnInit {

  faTrash = faTrash;
  faSyncAlt = faSyncAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
