import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { map } from 'rxjs/operators';

export class FeedAnimals {
    static readonly type = '[Zoo] FeedAnimals';
    constructor(public animalsToFeed: string) {}
}

export interface ZooStateModel {
    feedAnimals: string[];
}

@State<ZooStateModel>({
    name: 'zoo',
    defaults: {
        feedAnimals: []
    }
})
@Injectable()
export class ZooState {
    constructor(private animalService: AnimalService) {}

    /**
     * Simple Example
     */
    @Action(FeedAnimals)
    feedAnimals(ctx: StateContext<ZooStateModel>, action: FeedAnimals) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            feedAnimals: [...state.feedAnimals, action.animalsToFeed]
        });

        return ctx.dispatch(new TakeAnimalsOutside());
    }

    /**
     * Async Example
     */
    @Action(FeedAnimals)
    feedAnimals2(ctx: StateContext<ZooStateModel>, action: FeedAnimals) {
        return this.animalService.feed(action.animalsToFeed).pipe(
            tap(animalsToFeedResult => {
                const state = ctx.getState();
                ctx.patchState({
                    feedAnimals: [...state.feedAnimals, animalsToFeedResult]
                });
            }),
            mergeMap(() => ctx.dispatch(new TakeAnimalsOutside()))
        );
    }
}