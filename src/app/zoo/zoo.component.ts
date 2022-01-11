import { Component, OnInit } from '@angular/core';
import {AddAnimal} from "../animal/animal.actions";
import {Select, Store} from "@ngxs/store";
import {withLatestFrom} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent {

  @Select(state => state.animals) animals$: Observable<any>;

  constructor(private store: Store) {}

  addAnimal(name: string) {
    this.store
        .dispatch(new AddAnimal(name))
        .pipe(withLatestFrom(this.animals$))
        .subscribe(([_, animals]) => {
          // do something with animals
          this.form.reset();
        });
  }


}
