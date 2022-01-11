import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';


@State<ZooStateModel>({
    name: 'zoo',
    defaults: {
        feed: false
    }
})
@Injectable()
export class ZooState {
    constructor(private zooService: ZooService) {}
}