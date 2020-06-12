import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainViewComponent } from "./views/main-view/main-view.component";

@NgModule({
    imports: [CommonModule],
    declarations: [MainViewComponent],
    providers: [],
    exports: [MainViewComponent]
})
export class MainModule {

}
