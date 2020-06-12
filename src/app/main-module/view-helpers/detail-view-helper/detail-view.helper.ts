import { Injectable, InjectionToken, OnDestroy, Type } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { distinctUntilChanged, filter, map, tap } from "rxjs/operators";


export interface IDetailViewHelperService {
    getId(): Observable<number>;
    updateId(id: number): number;
}

export const DETAIL_VIEW_HELPER_SERVICE = new InjectionToken<IDetailViewHelperService>('VIEW_HELPER_SERVICE');

export interface DetailViewHelperConfig {
    service: Type<IDetailViewHelperService>;
}


@Injectable()
export class DetailViewHelper implements IDetailViewHelperService, OnDestroy {

    constructor(private activatedRoute: ActivatedRoute) {
        console.log('viewHelper');
    }

    getId(): Observable<number> {
        return this.activatedRoute.params.pipe(
            tap(v => console.log(v)),
            filter(params => params && params.orderId),
            map(params => params.orderId),
            map(orderId => parseInt(orderId, 10)),
            distinctUntilChanged()
        );
    }

    ngOnDestroy(): void {}


    updateId(id: number): number {
        return id + 0.25;
    }

}
