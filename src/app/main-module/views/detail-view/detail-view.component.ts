import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import {
    DETAIL_VIEW_HELPER_SERVICE,
    IDetailViewHelperService
} from '../../view-helpers/detail-view-helper/detail-view.helper';
import { BehaviorSubject, combineLatest, interval, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { takeUntilDestroy } from "ngx-reactivetoolkit";


@Component({
    selector: 'detail-view',
    template: `
        <h1>Id: {{ id$ | async }}</h1>
        <h2>Update Value {{ updateValue$ | async }}</h2>
    `,
})
export class DetailViewComponent implements OnInit, OnDestroy {

    id$: Observable<number>
    updateValue$ = new BehaviorSubject<number>(0);

    vh: IDetailViewHelperService;

    constructor(@Inject(DETAIL_VIEW_HELPER_SERVICE) vh: IDetailViewHelperService) {
        this.vh = vh;
    }

    ngOnInit(): void {
        console.log('vh');
        this.id$ = this.vh.getId();

        combineLatest([this.id$, interval(1000)]).pipe(
            map(([id, interval]) => this.vh.updateId(id)),
            takeUntilDestroy(this)
        ).subscribe(
            value => {
                this.updateValue$.next(value);
                console.log('value updating', value);
            }
        )
    }

    ngOnDestroy(): void {}

}
