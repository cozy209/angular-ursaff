import {Date} from "./date.model";

export class Accountelement {

    id: number | undefined;
    contributorAccountNo: number | undefined;
    periodStart: Date | undefined;
    periodEnd: Date | undefined;
    accountType: string | undefined;
    activityType: string | undefined;
    contributorCategory: number | undefined;
    imageState: number | undefined;

constructor(id?: number,
            contributorAccountNo?: number,
            periodStart?: Date,
            periodEnd?: Date,
            accountType?: string,
            activityType?: string,
            contributorCategory?: number,
            imageState?: number) {
    this.id = id ?? undefined;
    this.contributorAccountNo = contributorAccountNo ?? undefined;
    this.periodStart = periodStart ?? undefined;
    this.periodEnd = periodEnd ?? undefined;
    this.accountType = accountType ?? undefined;
    this.activityType = activityType ?? undefined;
    this.contributorCategory = contributorCategory ?? undefined;
    this.imageState = imageState ?? undefined;
    }
}