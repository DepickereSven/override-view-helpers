import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainViewComponent } from "./views/main-view/main-view.component";
import { DetailViewComponent } from "./views/detail-view/detail-view.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [MainViewComponent, DetailViewComponent],
    providers: [],
    exports: [MainViewComponent, DetailViewComponent]
})
export class MainModule {

}
