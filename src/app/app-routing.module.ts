import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from "./views/home-view/home-view.component";
import { MainViewComponent } from "./main-module/views/main-view/main-view.component";


const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'main-view',
    component: MainViewComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
