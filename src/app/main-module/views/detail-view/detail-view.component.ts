import { Component, OnDestroy, OnInit } from "@angular/core";
import { DetailViewHelper } from '../../view-helpers/detail-view-helper/detail-view.helper';


@Component({
    selector: 'detail-view',
    template: `        
        
    `
})
export class DetailViewComponent implements OnInit, OnDestroy{

    constructor(private vh: DetailViewHelper) {
    }


    ngOnDestroy(): void {
    }

    ngOnInit(): void {

    }

}
