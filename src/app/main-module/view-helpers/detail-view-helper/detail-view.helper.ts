import { Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { distinctUntilChanged, filter, map } from "rxjs/operators";

@Injectable()
export class DetailViewHelper {


    constructor(private activatedRoute: ActivatedRoute) {}

    getId(): Observable<number> {
        return this.activatedRoute.params.pipe(
            filter(params => params && params.orderId),
            map(params => params.orderId),
            distinctUntilChanged()
        );
    }
}
