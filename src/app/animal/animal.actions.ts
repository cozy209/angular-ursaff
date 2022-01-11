export class AddAnimal {
    static readonly type = '[Zoo] Add Animal';
    constructor(public name: string) {}
}

export class FeedAnimals {
    static readonly type = '[Zoo] Feed Animals';
}

export class FeedZebra {
    static readonly type = '[Zoo] Feed Zebra';
    constructor(public name: string, public hayAmount: number) {}
}