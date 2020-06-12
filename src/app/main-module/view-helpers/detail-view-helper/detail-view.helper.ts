import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { distinctUntilChanged, filter, map } from "rxjs/operators";

@Injectable()
export class DetailViewHelper implements OnDestroy {


    constructor(private activatedRoute: ActivatedRoute) {}

    getId(): Observable<number> {
        return this.activatedRoute.params.pipe(
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
