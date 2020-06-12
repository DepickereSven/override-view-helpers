import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainViewComponent } from "./views/main-view/main-view.component";
import { DetailViewComponent } from "./views/detail-view/detail-view.component";
import { RouterModule } from "@angular/router";
import {
    DETAIL_VIEW_HELPER_SERVICE,
    DetailViewHelper,
    DetailViewHelperConfig
} from "./view-helpers/detail-view-helper/detail-view.helper";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [MainViewComponent, DetailViewComponent],
    providers: [],
    exports: [MainViewComponent, DetailViewComponent]
})
export class MainModule {
    static forRoot(config?: DetailViewHelperConfig): ModuleWithProviders {
        return {
            ngModule: MainModule,
            providers: [
                {
                    provide: DETAIL_VIEW_HELPER_SERVICE,
                    useClass: config && config.service || DetailViewHelper
                }
            ]
        }
    }
}
